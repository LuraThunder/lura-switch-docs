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
スポットライトやポイントライトなどの使用を想定しています。
:::tip  
将来的にライトボリュームに対応したいと考えていますが、現在は未対応です。
:::

## 機能

Unity の Light コンポーネントの **Intensity（明るさ）** を連続的に調整できます。

## パラメータ

| パラメータ    | 説明             | デフォルト値 |
| ------------- | ---------------- | ------------ |
| Target Light  | 制御対象のライト | なし（必須） |
| Intensity Min | 最小の明るさ     | 0            |
| Intensity Max | 最大の明るさ     | 1.0          |


## 使い方

1. `Slider_Light.prefab` をシーンに配置
2. **Target Light** に制御したいLightコンポーネントを設定
3. **Min Intensity** と **Max Intensity** で明るさの範囲を設定
4. **SyncMode** を選択

## 用途例

### 調光可能な照明

プレイヤーが明るさを自由に調整できる照明システム：

### 複数ライトの同時調整

複数のライトを個別または一括で調整

## 関連コンポーネント

- [Switch_Light](../switches/object-switches.md#switch_light) - ライトのオン/オフ
- [Slider_Night](./slider-night.md) - 昼夜の明るさ調整
- [Slider_AvatarLight](./slider-avatar-light.md) - アバターライトの明るさ調整