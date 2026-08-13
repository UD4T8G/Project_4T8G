# Buddy Resource

---

## bagua

---

> import [날개](../../../core/messengers/Messengers_Resource.md#wings) from [사자들](../../../core/messengers/Messengers_Header.md)

* **Ability:**
  * 은신 POV
  * 포털
  * 본체 백업
* **Description:**
  * [사자들](../../../core/messengers/Messengers_Header.md)의 [날개](../../../core/messengers/Messengers_Resource.md#wings)이다.
  * 사람들로부터 자신을 숨기고 관찰할 수 있다.
  * 자신과 주변의 오브젝트들을 함께 다른 좌표로 이동시킬 수 있는 포털을 소환한다.
  * 자신의 모든 신체 정보를 저장한다.

### fission

---

> import [죄악](../../../core/messengers/Messengers_Resource.md#sin) from [사자들](../../../core/messengers/Messengers_Header.md)

* **Ability:**
  * [죄악](../../../core/messengers/Messengers_Resource.md#sin) 신체를 [팔괘](#bagua)로 전환
* **Description:**
  * 부활 시스템이다.
  * [죄악](../../../core/messengers/Messengers_Resource.md#sin)이 임계치 이하일 경우 신체를 지속적으로 불러올 수 있다.

### fission_of_community

---

> import [죄악](../../../core/messengers/Messengers_Resource.md#sin) from [사자들](../../../core/messengers/Messengers_Header.md)

* **Ability:**
  * [죄악](../../../core/messengers/Messengers_Resource.md#sin) 중첩 연산
  * [팔괘](#bagua)를 제외한 모든 형태 분열
  * 분열된 형태 [고트](#goat)로 흡수 
* **Description:**
  * 최후의 저항이다.
  * 신체가 모두 소실될때까지 [죄악](../../../core/messengers/Messengers_Resource.md#sin)을 받아들인다.
  * [고트](#goat)의 능력치는 [죄악](../../../core/messengers/Messengers_Resource.md#sin) 중첩량에 비례한다.
  * [적군 수 - 아군 수]가 양수일 경우 [죄악](../../../core/messengers/Messengers_Resource.md#sin)이 지속적으로 증가한다.
  * [적군 수 - 아군 수]가 음수일 경우 [죄악](../../../core/messengers/Messengers_Resource.md#sin)이 지속적으로 감소한다.
  * 지속시간 동안 [분열](#fission)을 사용할 수 없다.

## stigmata_eyes

---

* **Ability:**
  * 오브젝트 벡터 제어
  * 오브젝트 벡터 흡수
* **Description:**
  * 검은 손에 붉은 눈이 박혀 있다.
    * 머리 안에 [고트](#goat) 1세트 존재한다.
    * 등 뒤에 2세트 존재하며, 주로 전방위 오브젝트를 수비하기 위해 사용한다.
    * 머리 뒤에 2세트 존재하며, 주로 전방 오브젝트를 공격하기 위해 사용한다.
    * 머리 앞에 2세트 존재하며, 주로 철가면을 고정하기 위해 사용한다.
  * 안광에 적중된 오브젝트의 좌표를 지속적으로 조종할 수 있다.
  * 안광에 적중된 오브젝트를 [애퍼래터스](#apparatus)에 흡수할 수 있다.

## apparatus

---

* **Ability:**
  * 에너지 비례 신체 강화
  * [심판의 화살](#judgement_bolt) 크루시블
* **Description:**
  * 체내 에너지에 비례하여 모든 능력치가 상승하는 버디의 신체이다.
    * 기계 시스템으로 구성되어 있다.
    * 검은 눈물을 흘리는 철가면을 착용하고 있다.
    * 심장부가 불타오르며, 그 앞에 쇠창살이 있다.
  * [심판의 화살](#judgement_bolt)을 제작, 보관, 사출할 수 있다.

## goat

---

* **Ability:**
  * 소환수
  * [성흔안](#stigmata_eyes) 능력
* **Description:**
  * [성흔안](#stigmata_eyes)으로 구성된 버디의 권속이다.
  * [성흔안](#stigmata_eyes) 능력을 사용할 수 있다.

### seal

---

> import [죄악](../../../core/messengers/Messengers_Resource.md#sin) from [사자들](../../../core/messengers/Messengers_Header.md)

* **Ability:**
  * [고트](#goat) 봉인
* **Description:**
  * 철가면을 착용하고 머리 앞의 [성흔안](#stigmata_eyes) 두 세트로 잡는다.
  * [고트](#goat)가 버디의 머리로 변하고 봉인된다.
  * [애퍼래터스](#apparatus)에서 [죄악](../../../core/messengers/Messengers_Resource.md#sin)을 정화할 수 있다.

### unseal

---

> import [죄악](../../../core/messengers/Messengers_Resource.md#sin) from [사자들](../../../core/messengers/Messengers_Header.md)

* **Ability:**
  * [고트](#goat) 해제
* **Description:**
  * 머리 앞의 [성흔안](#stigmata_eyes) 두 세트를 놓고 철가면을 벗는다.
  * 버디의 머리가 [고트](#goat)로 변하고 해제된다.
  * 안광에 적중한 오브젝트의 [죄악](../../../core/messengers/Messengers_Resource.md#sin)을 흡수할 수 있다.

## judgement_bolt

---

* **Ability:**
  * 오브젝트 크루시블
  * 오브젝트 스킬
  * 오브젝트 클러스터
* **Description:**
  * 발사할 수 있는 오브젝트의 그릇이다.
  * 흡수한 오브젝트를 보관하고 연단할 수 있다.
  * 보관한 오브젝트의 능력을 직접 구사할 수 있다.
  * 보관한 오브젝트를 원격으로 사출할 수 있다.

### formation

---

* **Ability:**
  * [심판의 화살](#judgement_bolt) 반중력 비행
  * [심판의 화살](#judgement_bolt) 경로 조작
* **Description:**
  * [심판의 화살](#judgement_bolt)이 중력을 무시하고 속력을 조절한다.
  * [심판의 화살](#judgement_bolt)이 버디의 지시에 따라 편대비행한다.

### execution

---

* **Ability:**
  * [심판의 화살](#judgement_bolt) 합성
  * [심판의 화살](#judgement_bolt) 제어
* **Description:**
  * [심판의 화살](#judgement_bolt) 여러 개를 하나로 합쳐 강화한다.
  * [심판의 화살](#judgement_bolt) 내부에 혼돈을 담아 정확도를 제어한다.