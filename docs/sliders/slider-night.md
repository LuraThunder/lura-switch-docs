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

ナイトモードの強さを調整することを想定したスライダーです。

## 機能

ポストエフェクトをコントロールし、ナイトモードを調整するのが目的です。

## 使い方
![Target Setting](/img/Slider_Night_TargetSetting_Inspector.jpg)

1. `Slider_Night.prefab` をシーンに配置
2. **====TargetSetting====** を開く
3. **Target PostProcess Volumes** に制御したいナイトモード用のポストエフェクトを配列で設定


## 関連コンポーネント

- [Slider_Light](./slider-light.md) - 個別のライト調整
- [Switch_Night](../switches/object-switches.md#switch_night) - 昼夜の切り替え
