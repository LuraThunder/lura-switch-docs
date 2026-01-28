---
sidebar_position: 12
---

# Slider_AvatarLight

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Slider_AvatarLight_3D.png').default} alt="Slider_AvatarLight 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Slider_AvatarLight_2D.png').default} alt="Slider_AvatarLight 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

アバターライトの明るさを調整するスライダーです。  
Avatar用のRealTime DirectionalLightの明るさを調整する目的を想定しています。

## 機能

RealTimeDirectionalLightを指定し、アバターを照らすライトの明るさを調整します。

:::tip
デフォルトでは設定されていないため、任意のアバター用RealTime DirectionalLightを指定する必要があります。
:::

## 使い方

1. `Slider_AvatarLight.prefab` をシーンに配置
2. **Target Light** にアバターライト用のDirectionalLightを設定
3. **Max Intensity** を調整
4. **SyncMode** を 設定



## ベストプラクティス

:::tip
アバター用RealTime DirectionalLightのCulling Maskの推奨設定は  
・Player  
・PlayerLocal  
・Pickup  
・MirrorReflection  
とされることが多いです。
:::

## 関連コンポーネント

- [Slider_Light](./slider-light.md) - 通常のライト調整
- [Switch_AvatarLight](../switches/object-switches.md#switch_avatarlight) - アバターライトのオン/オフ
