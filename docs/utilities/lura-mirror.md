---
sidebar_position: 1
---

# LuraMirror

![LuraMirror](/img/Mirror_HQMode.png)

高性能な鏡を簡単にセットアップできるユーティリティです。

## 特徴

### 🌟 近接起動システム

近づいただけで自動的に起動し、離れると自動的にオフになる**エコ仕様**。

パフォーマンスに優しい設計です。

### 🎨 フェード演出

近づいた際に、鏡の透明度が自然にフェードするので**自然な体験**が得られます。

### 📐 視覚的なエリア設定

どこが起動エリアで、どこが不透明度がMaxエリアなのかが**視覚的にわかりやすい**。

### ✨ 前面ガラス機能

前面ガラスの配置機能も搭載で、よりリアルでかっこいい見た目を実現。

## セットアップ方法

### 1. ミラーの配置

<img src={require('@site/static/img/LuraMirror_1-1.jpg').default} alt="LuraMirror調整 1-1" />  



ヒエラルキー内の **====ReferenceMirror====** オブジェクトを選択し、Position・Rotation・Scale を調整して、ミラーを好みの位置・サイズに配置してください。

![LuraMirror Hierarchy](/img/LuraMirror_Hierarchy.jpg)

:::tip
まずは **ReferenceMirror** を調整することから始めましょう。これを動かすだけで、ミラーの位置とサイズが決まります。
:::

### 2. エリア範囲設定

![Mirror Area](/img/Mirror_Area.png)

ミラーシステムには2つのエリア設定があります。

<img src={require('@site/static/img/LuraMirror_Area_Inspector.jpg').default} alt="LuraMirror Area Inspector" />

#### FullArea（完全表示エリア）

不透明度が**最大**の領域です。鏡が最高品質で表示される範囲を設定します。

はっきり見えていてほしい領域を指定しましょう。通常、鏡の正面に配置します。

#### StartArea（起動エリア）

ミラーが**起動する**領域です。プレイヤーがこの範囲に入ると鏡が起動します。

:::warning
**StartArea** の範囲内にいるとミラーが起動するため、**負荷が発生**し始めることに注意してください。

負荷管理のため、範囲を広げすぎないように適切なサイズに調整してください。
:::

### 3. PreviewMirrorType

エディタ上でミラーの見え方を確認できます。

**PreviewMirrorType** を切り替えることで、ミラー配置後のイメージを確認できます。：
<img src={require('@site/static/img/Mirror_PreviewMode_Inspector.jpg').default} alt="Mirror Preview Inspector" style={{maxWidth: '600px', height: 'auto'}} />

- **SetupMirror**: デフォルトのセットアップ用のオブジェクト。（アップロードすると消えます）
- **Off**: ミラーオフ状態
- **HQ**: 高品質ミラー
- **LQ**: PlayerOnlyミラー


<img src={require('@site/static/img/Mirror_HQPreview.jpg').default} alt="Mirror HQ Preview" style={{maxWidth: '600px', height: 'auto'}}/>

:::info
**注意**: 鏡が白くなっている場合は、**一度シーンを実行する**（Play モード）必要があります。  
Unity エディタ上で一度 Play モードに入ることで正しく表示されるようになります。
:::

### 4. UI要素について

:::tip
Lura's Mirrorのテキストや、エリアを現すUIはEditorOnlyのため、アップロード時には非表示になります。
:::

## ミラーのオン/オフ制御

LuraMirror は特殊なトリガーを使用しています。

### MirrorActivator

**====MirrorActivator====** オブジェクトがアクティブのときにミラーが起動します。

```
====MirrorActivator====
├── HQ_Activator（HQミラー用）
└── LQ_Activator（LQミラー用）
```

- **HQ_Activator** がアクティブ → HQミラー起動
- **LQ_Activator** がアクティブ → LQミラー起動
- **両方アクティブ** → HQミラー起動

:::tip
外部からアクセスする場合は、これらの Activator をコントロールしてください。
:::

## Switch_Mirror との連携

[Switch_Mirror](../switches/object-switches.md#switch_mirror) を使用してミラーのオン/オフを切り替えられます。

### 設定方法

1. `Switch_Mirror.prefab` を配置
2. **Target** に **====MirrorActivator====** を指定

これで、ミラーそのもののオン/オフを切り替えられます。

## Slider_Mirror との連携
<img src={require('@site/static/img/Slider_Mirror_3D.png').default} alt="Mirror Preview Inspector" style={{maxWidth: '300px', height: 'auto'}} />

[Slider_Mirror](../sliders/slider-mirror.md) を使用してミラーの透明度を変更できます。

### 設定方法

1. `Slider_Mirror.prefab` を配置
2. **====TargetSetting====** を開く
3. **MirrorControllers** に LuraMirror の MirrorController を指定

これで、ミラーの解像度をスライダーで調整できます。

## ModeSwitch_Mirror との連携

<img src={require('@site/static/img/ModeSwitch_Mirror_x2_3D.png').default} alt="Mirror Preview Inspector" style={{maxWidth: '300px', height: 'auto'}} />

[ModeSwitch_Mirror](../mode-switch/overview.md) を使用してHQ/LQを切り替えられます。

### 設定方法

ModeSwitch_Mirror_x2 は2つのスイッチから構成されています：

1. **SwitchA** に **HQ_Activator** を設定
2. **SwitchB** に **LQ_Activator** を設定

これで、HQとLQを排他的に切り替えられます。




## トラブルシューティング

### 鏡が白い

一度シーンを実行（Play モード）してください。

### 反応しない

- StartArea の範囲を確認
- Activator のアクティブ状態を確認

## 次のステップ

- [Switch_Mirror](../switches/object-switches.md#switch_mirror)
- [Slider_Mirror](../sliders/slider-mirror.md)
- [ModeSwitch_Mirror](../mode-switch/overview.md)