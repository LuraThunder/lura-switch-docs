---
sidebar_position: 1
---

# 🎚️ スライダー概要

LuraSwitch2 のスライダーシステムについて説明します。

## 🎯 スライダーとは

スライダーは、**連続的な値を調整する**コンポーネントです。ライトの明るさ、音量、ミラーの解像度など、0～100% の範囲で段階的に調整できます。

## スライダーの特徴

### モダンなデザイン

視覚的に優れたスライダーUIを採用しています。

### 10%スナップ機能

スライダーは **10%刻みでスナップ**する仕様です。

これにより、正確な値設定が簡単になります。
- 0%, 10%, 20%, 30%, ..., 90%, 100%

### 2Dモード対応

スライダーにも **2Dモード** が用意されています。

2DモードのスライダーはUnity標準のスライダーではなく、独自実装により**直感的な操作感**を実現しています。

### Vertical / Horizontal モード

用途に応じて向きを選択できます。

- **Vertical（縦）**: 上下にスライド
- **Horizontal（横）**: 左右にスライド

Verticalモードが使いにくい場合は、Horizontalモードに切り替えることができます。

## 同期モード

### Global モード

すべてのプレイヤー間で値が同期されます。

**用途例**
- ワールド全体のBGM音量
- 共有ライトの明るさ

### Local Save モード

各プレイヤーのローカルに値を保存します（ワールドセーブ）。

**用途例**
- 個人の音量設定
- 個人のミラー解像度設定

**特徴**: 次回ワールドに入った時も、前回の設定値が保持されます。

### None モード

同期も保存もしません。

## 対応スライダー

LuraSwitch2 には以下のスライダーが用意されています：

### Slider_Mirror
ミラーの解像度を調整

### Slider_Audio / Slider_Music
オーディオや音楽の音量を調整

### Slider_Light / Slider_AvatarLight
ライトやアバターライトの明るさを調整

### Slider_Night / Slider_PostEffect
昼夜の明るさや画面効果を調整

### Slider_MirrorRotate / Slider_Object
ミラーの回転角度やオブジェクトのパラメータを調整

### Slider_Collider
コライダーの高さを調整（LuraCollider専用）

## 共通パラメータ

すべてのスライダーに共通するパラメータ：

### 基本設定

- **DefaultValue**: 初期値（0.0〜1.0）
- **SliderDirection**: Vertical（縦）/ Horizontal（横）
- **SliderVisualMode**: 3D / 2D

### 同期設定

- **SyncMode**:
  - **None**: 同期なし
  - **Global**: 全プレイヤーで同期
  - **Local**: ローカルに保存

### 値の範囲

多くのスライダーでは、最小値・最大値を設定できます：

- **MinValue**: 最小値
- **MaxValue**: 最大値

## 使い方の基本

1. プレハブをシーンに配置
2. Inspector でターゲットを設定
3. MinValue / MaxValue を設定（必要に応じて）
4. SyncMode を選択
5. SliderDirection を選択（Vertical/Horizontal）
6. SliderVisualMode で見た目を選択（3D/2D）

## 次のステップ

各スライダーの詳細は、以下のページをご覧ください：

- [Slider_Mirror](./slider-mirror.md)
- [Slider_Audio](./slider-audio.md) / [Slider_Music](./slider-music.md)
- [Slider_Light](./slider-light.md) / [Slider_AvatarLight](./slider-avatar-light.md)
- [Slider_Night](./slider-night.md) / [Slider_PostEffect](./slider-posteffect.md)
- [Slider_MirrorRotate](./slider-mirror-rotate.md) / [Slider_Object](./slider-object.md)
- [Slider_Collider](./slider-collider.md)