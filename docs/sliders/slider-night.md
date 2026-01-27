---
sidebar_position: 11
---

# Slider_Night

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Slider_Night_3D.png').default} alt="Slider_Night 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Slider_Night_2D.png').default} alt="Slider_Night 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

昼夜の明るさを調整するスライダーです。

## 機能

昼夜のシステムにおいて、明るさを連続的に調整できます。

複数のライトを一括で制御し、時間帯の雰囲気を演出します。

## パラメータ

| パラメータ | 説明 | デフォルト値 |
|----------|------|------------|
| Target Lights | 制御対象のライト配列 | なし（必須） |
| Day Intensity | 昼の明るさ | 1.0 |
| Night Intensity | 夜の明るさ | 0.1 |
| DefaultValue | 初期値（0-1） | 0.5 |
| SyncMode | 同期モード | Global |

![Target Setting](/img/Slider_Night_TargetSetting_Inspector.jpg)

## 使い方

1. `Slider_Night.prefab` をシーンに配置
2. **====TargetSetting====** を開く
3. **Target Lights** に制御したいライトを配列で設定
4. **Day Intensity** と **Night Intensity** で明るさの範囲を設定

## 仕組み

スライダーの値に応じて：

- **0%**: 夜（Night Intensity）
- **50%**: 中間
- **100%**: 昼（Day Intensity）

複数のライトを同時に制御することで、ワールド全体の時間帯を演出できます。

## 用途例

### 時間帯切り替え

```
Target Lights: 
  - 太陽光（Directional Light）
  - 環境ライト（Point Lights）

Day Intensity: 1.5（明るい昼）
Night Intensity: 0.05（暗い夜）
```

### 夕暮れモード

```
DefaultValue: 0.3（夕方の雰囲気）
```

## ベストプラクティス

:::tip
複数のライトを設定する場合、それぞれのライトの種類に応じて強度を調整しましょう。

例：
- Directional Light: Day 1.5 / Night 0.3
- Point Lights: Day 1.0 / Night 0.1
:::

## Switch_Night との連携

[Switch_Night](../switches/object-switches.md#switch_night) と組み合わせることで、より高度な昼夜システムを構築できます。

## 関連コンポーネント

- [Slider_Light](./slider-light.md) - 個別のライト調整
- [Switch_Night](../switches/object-switches.md#switch_night) - 昼夜の切り替え
