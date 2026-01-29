---
sidebar_position: 1
---

# 🎚️ スライダー概要

LuraSwitch2 のスライダーシステムについて説明します。

## 🎯 スライダーとは

スライダーは、**連続的な値を調整する**コンポーネントです。ライトの明るさ、音量、ミラーの透明度など、0～100% の範囲で段階的に調整できます。

<div style={{marginBottom: '20px'}}>
  <img src={require('@site/static/img/Slider_Mirror_3D.png').default} alt="Slider Mirror" style={{maxWidth: '400px'}} />
</div>

## スライダーの特徴

### モダンなデザイン

視覚的に優れたスライダーUIを採用しています。

### スナップ機能

スライダーは **指定した幅でスナップ**する仕様です。

- 0%, 10%, 20%, 30%, ..., 90%, 100%

### 2Dモード対応

<div style={{marginBottom: '20px'}}>
  <img src={require('@site/static/img/Slider_Mirror_2D.png').default} alt="Slider Mirror" style={{maxWidth: '400px'}} />
</div>

スライダーにも **2Dモード** が用意されています。

2DモードのスライダーはUnity標準のスライダーではなく、独自実装により**直感的な操作感**を実現しています。

### Vertical / Horizontal モード

用途に応じて向きを選択できます。

- **Vertical（縦）**: 縦モード
- **Horizontal（横）**: 横モード

Verticalモードが使いにくい場合は、Horizontalモードに切り替えることができます。

## 同期モード
<div style={{marginBottom: '20px'}}>
  <img src={require('@site/static/img/Slider_SyncMode_Inspector.jpg').default} alt="スライダー同期設定" />
</div>
### Global モード

すべてのプレイヤー間で値が同期されます。

### Local Save モード

各プレイヤーのローカルに値を保存します（ワールドセーブ）。

:::tip
次回ワールドに入った時も、前回の設定値が保持されます。
:::

### Local モード

同期されないローカルのモードです。個人設定が多いため、基本的にはこちらを使います。

## 対応スライダー

LuraSwitch2 には以下のスライダーが用意されています：

### Slider_Mirror
ミラーの透明度を調整

<div style={{marginBottom: '20px'}}>
  <img src={require('@site/static/img/Slider_Mirror_3D.png').default} alt="Slider Mirror" style={{maxWidth: '300px'}} />
</div>

### Slider_Audio / Slider_Music
オーディオや音楽の音量を調整

<div style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Slider_Audio_3D.png').default} alt="Slider Audio" style={{maxWidth: '300px'}} />
  </div>
  <div>
    <img src={require('@site/static/img/Slider_Music_3D.png').default} alt="Slider Music" style={{maxWidth: '300px'}} />
  </div>
</div>

### Slider_Light / Slider_AvatarLight
ライトやアバターライトの明るさを調整

<div style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Slider_Light_3D.png').default} alt="Slider Light" style={{maxWidth: '300px'}} />
  </div>
  <div>
    <img src={require('@site/static/img/Slider_AvatarLight_3D.png').default} alt="Slider Avatar Light" style={{maxWidth: '300px'}} />
  </div>
</div>

### Slider_Night / Slider_PostEffect
ナイトモードの強さやポストエフェクトを調整

<div style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Slider_Night_3D.png').default} alt="Slider Night" style={{maxWidth: '300px'}} />
  </div>
  <div>
    <img src={require('@site/static/img/Slider_PostEffect_3D.png').default} alt="Slider Post Effect" style={{maxWidth: '300px'}} />
  </div>
</div>

### Slider_MirrorRotate / Slider_Object
ミラーの回転角度やオブジェクトのトランスフォームを調整

<div style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Slider_MirrorRotate_3D.png').default} alt="Slider Mirror Rotate" style={{maxWidth: '300px'}} />
  </div>
  <div>
    <img src={require('@site/static/img/Slider_Object_3D.png').default} alt="Slider Object" style={{maxWidth: '300px'}} />
  </div>
</div>

### Slider_Collider
コライダーの高さを調整（LuraCollider専用）

<div style={{marginBottom: '20px'}}>
  <img src={require('@site/static/img/Slider_Collider_3D.png').default} alt="Slider Collider" style={{maxWidth: '300px'}} />
</div>

## 共通パラメータ

すべてのスライダーに共通するパラメータ：

### 基本設定

<div style={{marginBottom: '20px'}}>
  <img src={require('@site/static/img/Slider_Inspector.jpg').default} alt="スライダー基本設定" />
</div>

- **DefaultValue**: 初期値（0.0〜1.0）
- **SliderDirection**: Vertical（縦）/ Horizontal（横）
- **SliderVisualMode**: 3D / 2D

### 同期設定

<div style={{marginBottom: '20px'}}>
  <img src={require('@site/static/img/Slider_SyncMode_Inspector.jpg').default} alt="スライダー同期設定" />
</div>

- **SyncMode**:
  - **None**: 同期なし
  - **Global**: 全プレイヤーで同期
  - **Local**: ローカルに保存


## 使い方の基本

1. プレハブをシーンに配置
2. Inspector の ====TargetSetting==== を開く
3. ====TargetSetting==== に対象のオブジェクトを指定
5. SliderVisualMode で見た目を選択（3D/2D）

## 次のステップ

各スライダーの詳細は、以下のページをご覧ください：

- [Slider_Mirror](./slider-mirror.md)
- [Slider_Audio](./slider-audio.md) / [Slider_Music](./slider-music.md)
- [Slider_Light](./slider-light.md) / [Slider_AvatarLight](./slider-avatar-light.md)
- [Slider_Night](./slider-night.md) / [Slider_PostEffect](./slider-posteffect.md)
- [Slider_MirrorRotate](./slider-mirror-rotate.md) / [Slider_Object](./slider-object.md)
- [Slider_Collider](./slider-collider.md)