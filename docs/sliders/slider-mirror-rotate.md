---
sidebar_position: 13
---

# Slider_MirrorRotate

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Slider_MirrorRotate_3D.png').default} alt="Slider_MirrorRotate 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Slider_MirrorRotate_2D.png').default} alt="Slider_MirrorRotate 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

ミラーの回転角度を調整するスライダーです。

## 機能

ミラーの角度を連続的に調整できます。

全身鏡の角度を変えることで、様々なアングルから自分のアバターを確認できます。

## パラメータ

| パラメータ | 説明 | デフォルト値 |
|----------|------|------------|
| Target Mirror | 制御対象のミラーオブジェクト | なし（必須） |
| Min Angle | 最小角度 | -30 |
| Max Angle | 最大角度 | 30 |
| DefaultValue | 初期値（0-1） | 0.5 |
| SyncMode | 同期モード | None |
| SliderDirection | 向き | Vertical |

![Target Setting](/img/Slider_MirrorRotate_TargetSetting_Inspector.jpg)

## 使い方

1. `Slider_MirrorRotate.prefab` をシーンに配置
2. **====TargetSetting====** を開く
3. **Target Mirror** にミラーのオブジェクトを設定
4. **Min Angle** と **Max Angle** で回転範囲を設定

## 仕組み

スライダーの値に応じてミラーが回転します：

- **0%**: Min Angle（例：-30度）
- **50%**: 0度（正面）
- **100%**: Max Angle（例：+30度）

## 用途例

### 全身鏡の角度調整

```
Target: 全身鏡オブジェクト
Min Angle: -45
Max Angle: 45
DefaultValue: 0.5（正面）
```

### 天井ミラー

```
Min Angle: 0
Max Angle: 90
DefaultValue: 0.3（やや下向き）
```

## 回転軸の設定

ミラーの回転軸は、スクリプト内で設定できます：

- **X軸**: 上下に傾ける
- **Y軸**: 左右に回転
- **Z軸**: 傾斜

## ベストプラクティス

:::tip
角度範囲は **-45度 〜 +45度** 程度が実用的です。

大きすぎる角度は、ミラーが見づらくなる可能性があります。
:::

## LuraMirror との併用

[LuraMirror](../utilities/lura-mirror.md) と組み合わせることで、高性能なミラーの角度調整が可能です。

## 関連コンポーネント

- [Slider_Mirror](./slider-mirror.md) - ミラーの解像度調整
- [Switch_Mirror](../switches/object-switches.md#switch_mirror) - ミラーのオン/オフ
- [LuraMirror](../utilities/lura-mirror.md) - 高性能ミラーシステム
