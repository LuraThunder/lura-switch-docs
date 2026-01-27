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

**====ReferenceMirror====** オブジェクトを移動・変形させると、ミラーが配置できます。

:::tip
まずは **ReferenceMirror** を調整することから始めましょう。これを動かすだけで、ミラーの位置とサイズが決まります。
:::

### 2. エリア範囲設定

![Mirror Area](/img/Mirror_Area.png)

2つのエリアを設定します：

#### FullArea（完全表示エリア）

不透明度が**最大**の領域です。

はっきり見えていてほしい領域を指定しましょう。

#### StartArea（起動エリア）

ミラーが**起動する**領域です。

:::warning
**StartArea** の範囲内にいるとミラーが起動するため、**負荷が発生**し始めることに注意してください。

範囲を広げすぎないようにしましょう。
:::

### 3. PreviewMirrorType

![LuraMirror Inspector](/img/LuraMirror_Inspector.jpg)

エディタ上でミラーの見え方を確認できます。

**PreviewMirrorType** を切り替えることで、以下を確認：

- **None**: プレビューなし
- **HQ**: 高品質ミラー
- **LQ**: 低品質ミラー
- **Both**: 両方

:::info
**注意**: 鏡が白くなっている場合は、**一度シーンを実行する**必要があります。
:::

### 4. UI要素について

エディタ上で表示されているテキストやUIは、**アップロード時には自動的に消える**のでそのままで大丈夫です。

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

[Slider_Mirror](../sliders/slider-mirror.md) を使用してミラーの透明度を変更できます。

### 設定方法

1. `Slider_Mirror.prefab` を配置
2. **====TargetSetting====** を開く
3. **MirrorControllers** に LuraMirror の MirrorController を指定

これで、ミラーの解像度をスライダーで調整できます。

## ModeSwitch_Mirror との連携

[ModeSwitch_Mirror](../mode-switch/overview.md) を使用してHQ/LQを切り替えられます。

### 設定方法

ModeSwitch_Mirror_x2 は2つのスイッチから構成されています：

1. **SwitchA** に **HQ_Activator** を設定
2. **SwitchB** に **LQ_Activator** を設定

これで、HQとLQを排他的に切り替えられます。

## ベストプラクティス

### エリアサイズ

```
FullArea: ミラーの前 1〜2m程度
StartArea: ミラーの前 3〜5m程度
```

### パフォーマンス

- StartArea を広げすぎない
- 不要な時は HQ を無効に
- Quest対応の場合はLQのみを推奨

## トラブルシューティング

### 鏡が白い

一度シーンを実行（Play モード）してください。

### 反応しない

- StartArea の範囲を確認
- Activator のアクティブ状態を確認

### 透明度が変わらない

FullArea と StartArea の距離を確認してください。

## 次のステップ

- [Switch_Mirror](../switches/object-switches.md#switch_mirror)
- [Slider_Mirror](../sliders/slider-mirror.md)
- [ModeSwitch_Mirror](../mode-switch/overview.md)