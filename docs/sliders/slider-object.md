---
sidebar_position: 9
---

# Slider_Object

オブジェクトのパラメータを調整するスライダーです。

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Slider_Object_3D.png').default} alt="Slider_MirrorRotate 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Slider_Object_2D.png').default} alt="Slider_MirrorRotate 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

## 機能

任意のオブジェクトのプロパティやパラメータを連続的に調整できる汎用スライダーです。

## 使い方

1. `Slider_Object.prefab` をシーンに配置
2. **====TargetSetting====** を開く
3. **TransformTargets** に操作したいオブジェクトを設定
4. **TransformRefs_A** に値が0の時のTransformオブジェクトを設定
5. **TransformRefs_B** に値がMaxの時のTransformオブジェクトを設定

## 用途例

### ワールドの演出

グローバルにも同期するため様々なことに使えます。

### 扉など

TransformRefs_Aに閉じた状態、TransformRefs_Bに開いた状態を設定することで  
扉の開閉を表現することもできます。

### スケールの調整

オブジェクトのスケールもコントロールできるので、大きさを変えたいオブジェクトに使えます。

## 関連コンポーネント

- [Slider_MirrorRotate](./slider-mirror-rotate.md) - ミラーの回転角度調整
