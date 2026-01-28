---
sidebar_position: 2
---

# ModeSwitch_Mirror

ミラーのHQ/LQ切り替えに特化したモードスイッチです。

## ビジュアル

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/ModeSwitch_Mirror_x2_3D.png').default} alt="ModeSwitch_Mirror x2 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード（２択）</p>
  </div>
  <div>
    <img src={require('@site/static/img/ModeSwitch_Mirror_x2_2D.png').default} alt="ModeSwitch_Mirror x2 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード（2択）</p>
  </div>
</div>

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/ModeSwitch_Mirror_x3_3D.png').default} alt="ModeSwitch_Mirror x3 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード（３択）</p>
  </div>
  <div>
    <img src={require('@site/static/img/ModeSwitch_Mirror_x3_2D.png').default} alt="ModeSwitch_Mirror x3 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード（3択）</p>
  </div>
</div>

## 概要

ModeSwitch_Mirror は、ミラーの品質切り替え（HQ/LQ）を想定したモードスイッチです。

2択（x2）または3択（x3）のバリエーションがあります。

## 使い方

### ModeSwitch_Mirror_x2（HQ/LQ切り替え）

![ModeSwitch Inspector](/img/ModeSwitch_Inspector.jpg)

1. `ModeSwitch_Mirror_x2.prefab` をシーンに配置
2. 内部の **SwitchA** と **SwitchB** を開く
3. それぞれに Target を設定

#### 推奨設定

```
SwitchA の On Targets:
  └─ HQ_Activator（LuraMirrorの）

SwitchB の On Targets:
  └─ LQ_Activator（LuraMirrorの）
```

これで、HQとLQを排他的に切り替えられます。

### ModeSwitch_Mirror_x3（OFF/LQ/HQ切り替え）

3択の場合は、さらに「ミラーオフ」の選択肢を追加できます：

```
SwitchA の On Targets:
  └─ MirrorActivator全体（ミラーをオフに）

SwitchB の On Targets:
  └─ LQ_Activator

SwitchC の On Targets:
  └─ HQ_Activator
```

## LuraMirror との連携

[LuraMirror](../utilities/lura-mirror.md) の Activator システムと連携します。

### Activator の仕組み

```
====MirrorActivator====
├── HQ_Activator
└── LQ_Activator
```

- **HQ_Activator** がアクティブ → HQミラー起動
- **LQ_Activator** がアクティブ → LQミラー起動
- **両方オフ** → ミラーオフ

## 関連コンポーネント

- [LuraMirror](../utilities/lura-mirror.md) - ミラーシステム本体
- [Switch_Mirror](../switches/object-switches.md#switch_mirror) - シンプルなオン/オフ
- [Slider_Mirror](../sliders/slider-mirror.md) - 解像度調整