# PickupMan Resource

---

## abilities

---

### melee

---

| **Traits** | 도발, 근접 유닛 |
| :--- | :--- |
| **Basic** | 달려오면서 느리고 가벼운 펀치로 [습득의 육신](#body-of-pickup) 활성화 유도 |
| **Special** | [습득 훈련](#pickup-training)으로 캐스팅 후 습득한 능력 구사<br>[습득 구현](#pickup-realize)으로 캐스팅 후 습득한 형태 변형 |
| **Ultimate** | [습득의 육신](#body-of-pickup)을 응용하여 [습득 구현](#pickup-realize)을 신체에 두르고 [습득 훈련](#pickup-training)으로 타격 |

### ranged

---

| **Traits** | 도발, 원거리 유닛 |
| :--- | :--- |
| **Basic** | 도망치면서 느리고 가벼운 투척으로 [습득의 육신](#body-of-pickup) 활성화 유도 |
| **Special** | [습득 구현](#pickup-realize)으로 캐스팅 후 습득한 능력을 빠르게 발사<br>[습득 구현](#pickup-realize)으로 캐스팅 후 습득한 능력을 강하게 발사 |
| **Ultimate** | [습득 훈련](#pickup-training)으로 비행하면서 [습득의 육신](#body-of-pickup)을 응용하여 [습득 구현](#pickup-realize)으로 탄막 형성 |

### distance-control

---

| **Traits** | 업그레이드, 생존, 무적 |
| :--- | :--- |
| **Basic** | 피격 후 슬로건을 외쳐 [습득의 육신](#body-of-pickup) 발동 |
| **Special** | 채널링을 해제하고 [습득 훈련](#pickup-training)으로 질주<br>채널링에 진입하여 [습득 구현](#pickup-realize)으로 방어 |
| **Ultimate** | [습득의 육신](#body-of-pickup)을 폭주시켜 짧은 시간동안 채널링 진입 속성과 채널링 해제 속성을 동시에 구사 |

## equipment

---

### body-of-pickup

---

* **Ability:**
  * 능력 습득
    * 능력 복제
    * 능력 내성
* **Description:**
  * 미습득 상태에서 피격 시 슬로건을 구사하면 다음 효과가 발동된다.
    * 채널링을 해제하면 해당 공격을 직접 구사할 수 있다.
    * 채널링에 진입하면 해당 공격에 내성을 지닐 수 있다.
  * 습득 상태에서 피격 시 다음 효과가 발동된다.
    * 채널링을 해제하면 습득 피해에 의해 해당하는 습득 상태가 미습득 상태로 전환된다.
    * 채널링에 진입하면 미습득 피해에 의해 무작위 습득 상태가 미습득 상태로 전환된다.
 
### pickup-training

---

* **Ability:**
  * 능력 구사
  * 신체 변형
* **Description:**
  * 습득한 능력의 자세를 따라할 수 있다.
  * 습득한 능력에 맞춰 신체를 변형할 수 있다.

### pickup-realize

---

* **Ability:**
  * 공격 소환
  * 피격 무시
* **Description:**
  * 채널링을 해제하면 습득한 공격을 소환할 수 있다.
  * 채널링에 진입하면 습득한 피격을 무시할 수 있다.