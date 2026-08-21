# PickupMan Header

---

## abilities

---

### melee

---

* 달려오면서 느리고 가벼운 펀치로 [습득의 육신](#body-of-pickup) 활성화를 유도한다.
* [습득 훈련](#pickup-training)으로 자세를 잡은 후 습득한 능력을 구사한다.
* [습득 구현](#pickup-realize)으로 자세를 잡은 후 습득한 형태로 변형한다.
* [습득의 육신](#body-of-pickup)을 응용하여 [습득 구현](#pickup-realize)을 신체에 두르고 [습득 훈련](#pickup-training)으로 타격한다.

### ranged

---

* 도망치면서 느리고 가벼운 투척으로 [습득의 육신](#body-of-pickup) 활성화를 유도한다.
* [습득 구현](#pickup-realize)으로 자세를 잡은 후 습득한 능력을 빠르게 발사한다.
* [습득 구현](#pickup-realize)으로 자세를 잡은 후 습득한 능력을 강하게 발사한다.
* [습득 훈련](#pickup-training)으로 비행하면서 [습득의 육신](#body-of-pickup)을 응용하여 [습득 구현](#pickup-realize)으로 탄막을 형성한다.

### distance-control

---

* 피격 후 슬로건을 외쳐 [습득의 육신](#body-of-pickup)을 발동한다.
* 움직임을 시작하고 [습득 훈련](#pickup-training)으로 습득한 능력을 회피한다.
* 움직임을 멈추고 [습득 구현](#pickup-realize)으로 습득한 능력을 방어한다.
* [습득의 육신](#body-of-pickup)을 폭주시켜 짧은 시간동안 움직임 시작 능력과 움직임 멈춤 능력을 동시에 구사한다.

## equipment

---

### body-of-pickup

---

* **습득했다:**
  * 미습득 능력 피격 시 다음 효과가 발동된다.
    * 슬로건을 외치고 움직임을 시작하면 해당 미습득 능력이 습득 능력으로 전환된다.
    * 움직임을 멈추면 무작위 습득 능력이 미습득 능력으로 전환된다.
  * 습득 능력 피격 시 다음 효과가 발동된다.
    * 움직임을 시작하면 해당 습득 능력이 미습득 능력으로 전환된다.
    * 움직임을 멈추면 해당 습득 능력에 내성을 지닌다.
 
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