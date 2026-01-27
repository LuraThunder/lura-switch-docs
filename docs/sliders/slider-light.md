---
sidebar_position: 2
---

# Slider_Light

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Slider_Light_3D.png').default} alt="Slider_Light 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Slider_Light_2D.png').default} alt="Slider_Light 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

Lightコンポーネントの明るさを調整するスライダーです。

## 機能

Unity の Light コンポーネントの **Intensity（明るさ）** を連続的に調整できます。

## パラメータ

| パラメータ | 説明 | デフォルト値 |
|----------|------|------------|
| Target Light | 制御対象のライト | なし（必須） |
| Min Intensity | 最小の明るさ | 0 |
| Max Intensity | 最大の明るさ | 1.0 |
| DefaultValue | 初期値（0-1） | 0.5 |
| SyncMode | 同期モード | Global |
| SliderDirection | 向き | Vertical |

## 使い方

1. `Slider_Light.prefab` をシーンに配置
2. **Target Light** に制御したいLightコンポーネントを設定
3. **Min Intensity** と **Max Intensity** で明るさの範囲を設定
4. **SyncMode** を選択（通常はGlobal）

## 用途例

### 調光可能な照明

プレイヤーが明るさを自由に調整できる照明システム：

```
Min Intensity: 0
Max Intensity: 2.0
SyncMode: Global
```

### 時間帯シミュレーション

他のシステムと組み合わせて、時間経過に応じた明るさ変化：

```
Min Intensity: 0.1（夜）
Max Intensity: 1.5（昼）
```

### 複数ライトの同時調整

複数の Slider_Light を用意し、複数のライトを個別または一括で調整

## ベストプラクティス

:::tip
**Min Intensity** と **Max Intensity** を適切に設定することで、より自然な明るさの変化を実現できます。

例：
- 完全な暗闇を避ける：Min = 0.1
- 眩しすぎを避ける：Max = 1.5
:::

## Quest対応

リアルタイムライトは Quest では負荷が高いため：

- ベイクドライトの使用を推奨
- リアルタイムライトを使う場合は数を最小限に

## 関連コンポーネント

- [Switch_Light](../switches/object-switches.md#switch_light) - ライトのオン/オフ
- [Slider_Night](./slider-night.md) - 昼夜の明るさ調整
- [Slider_AvatarLight](./slider-avatar-light.md) - アバターライトの明るさ調整