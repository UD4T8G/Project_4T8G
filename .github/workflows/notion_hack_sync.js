const { Client } = require('@notionhq/client');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const PARENT_PAGE_ID = process.env.NOTION_PARENT_PAGE_ID;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function requestWithRetry(apiCall, retries = 5, delay = 2000) {
    try {
        return await apiCall();
    } catch (error) {
        if (retries === 0) throw error;
        console.warn(`노션 API 오류 발생. ${delay}ms 후 재시도 합니다. 남은 횟수: ${retries}`);
        await sleep(delay);
        return requestWithRetry(apiCall, retries - 1, delay * 3);
    }
}

function getMarkdownFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (!filePath.includes('node_modules') && !filePath.includes('.git')) {
                getMarkdownFiles(filePath, fileList);
            }
        } else if (path.extname(file) === '.md') {
            fileList.push(filePath);
        }
    });
    return fileList;
}

async function run() {
    const docsDir = path.join(process.cwd()); 
    const mdFiles = getMarkdownFiles(docsDir);

    console.log(`총 ${mdFiles.length}개의 문서를 대상으로 핵 프로토콜을 가동합니다.`);

    for (const filePath of mdFiles) {
        const fileName = path.basename(filePath);
        const rawContent = fs.readFileSync(filePath, 'utf-8');
        
        const wrappedContent = `/* Project_4T8G Universe Architecture Source */\n\n${rawContent}`;
        
        console.log(`[압축 프로세스] ${fileName} 처리 중... (크기: ${rawContent.length} 자)`);

        await requestWithRetry(async () => {
            const newPage = await notion.pages.create({
                parent: { page_id: PARENT_PAGE_ID },
                properties: {
                    title: {
                        title: [{ text: { content: `[RAW] ${fileName}` } }]
                    }
                }
            });

            await notion.blocks.children.append({
                block_id: newPage.id,
                children: [
                    {
                        object: 'block',
                        type: 'code',
                        code: {
                            caption: [{ text: { content: `Source Path: ${filePath}` } }],
                            rich_text: [{ text: { content: wrappedContent.substring(0, 32000) } }],
                            language: 'markdown'
                        }
                    }
                ]
            });
            console.log(`${fileName} 노션 업로드 전송 성공.`);
        });

        await sleep(1500);
    }
    console.log("모든 문서의 압축 백업 업로드가 완료되었습니다.");
}

run().catch(err => {
    console.error("프로토콜 실행 중 치명적 에러 발생:", err);
    process.exit(1);
});