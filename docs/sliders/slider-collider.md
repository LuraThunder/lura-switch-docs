---
sidebar_position: 10
---

# Slider_Collider

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Slider_Collider_3D.png').default} alt="Slider_Collider 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Slider_Collider_2D.png').default} alt="Slider_Collider 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

LuraCollider の高さを調整するスライダーです。

## 機能

[LuraCollider](../utilities/lura-collider.md) 専用のスライダーで、コライダーの高さを連続的に調整できます。

## 使い方

1. `Slider_Collider.prefab` をシーンに配置
2. `LuraCollider`をシーンに配置
3. **====TargetSetting====** に制御したいColliderControllerを設定

## 関連コンポーネント

- [LuraCollider](../utilities/lura-collider.md) - コライダーの詳細
- [HeightOffsetter](../utilities/height-offsetter.md) - 高さオフセット調整
