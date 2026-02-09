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

ミラーの回転角度を調整することを想定したスライダーです。

## 機能

ミラーの角度を調整することを目的としています。  
中身はオブジェクトスライダーと同一です。

![Target Setting](/img/Slider_MirrorRotate_TargetSetting_Inspector.jpg)

## 使い方

1. `Slider_MirrorRotate.prefab` をシーンに配置
2. **====TargetSetting====** を開く
3. **TransformTargets** にミラーのオブジェクトを設定
4. **TransformRefs_A** に値が0の時の角度を設定
5. **TransformRefs_B** に値がMaxの時の角度を設定

## 仕組み

- TransformRefs_AとTransformRefs_Bを参考の値として、スライダーの値に応じてTransformTargetsの角度や回転を変更します。

:::tip 例
- TransformRefs_Aに 垂直のGameObject(0, 0, 0) を設定
- TransformRefs_Bに 水平のGameObject (0, 180, 0) を設定
- スライダーの値が中間値の場合、TransformTargetsの回転は (0, 90, 0) になります。
:::


## 用途例

### ベッド上ミラー
睡眠用ミラーに使う想定で用意しました。  

## 関連コンポーネント

- [Slider_Mirror](./slider-mirror.md) - ミラーの解像度調整
- [Switch_Mirror](../switches/object-switches.md#switch_mirror) - ミラーのオン/オフ
- [LuraMirror](../utilities/lura-mirror.md) - 高性能ミラーシステム
