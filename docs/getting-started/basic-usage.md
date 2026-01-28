---
sidebar_position: 2
---

# 🎓 基本的な使い方

LuraSwitch2 の基本的な使い方と、主要な概念を学びます。

## 📦 プレハブの配置

LuraSwitch2 の各機能は、使いやすいプレハブとして提供されています。使用方法は非常にシンプルです。

1. `Assets/QuickBrown/LuraSwitch2/01_PREFAB` フォルダを開く
2. 使いたいプレハブをシーンにドラッグ＆ドロップ

## 基本的な構造

すべての LuraSwitch2 コンポーネントは、以下の基本構造を持っています：

- **UIパーツ**: プレイヤーが操作するボタンやスライダー
- **制御対象**: 実際に制御されるオブジェクト（ライト、オーディオソースなど）
- **Udonスクリプト**: 動作を制御するスクリプト

## 💡 実践例：ライトスイッチの設置

最も基本的な例として、ライトのオン・オフスイッチを設置してみましょう。

### 1️⃣ Switch_Light プレハブの配置

`01_PREFAB/01_Switch/Switch_Light.prefab` をシーンに配置します。

### 2️⃣ ライトオブジェクトの作成

シーンに Light オブジェクトを配置します（Hierarchy で右クリック > Light > Directional Light など）。

### 3️⃣ ターゲットの設定

Switch_Light を選択し、Inspector で以下を設定します。

- **On Targets**: ライトオブジェクトをドラッグ＆ドロップ

### 4️⃣ 動作確認

Play モードで実行し、スイッチをクリックするとライトがオン・オフされることを確認します。

:::tip 🔍 動作確認の重要性
VRChat にアップロードする前に、必ず Unity の Play モードで動作を確認しましょう。
:::

## 2Dモードと3Dモード

すべてのスイッチとスライダーは、**2Dモード** と **3Dモード** を切り替えることができます。

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Mirror_3D.png').default} alt="3Dモード" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Mirror_2D.png').default} alt="2Dモード" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

Inspector の **SwitchVisualMode** または **SliderVisualMode** を切り替えるだけで、見た目が瞬時に変わります。

## Switch と Slider の違い

LuraSwitch2 には2種類のインターフェースがあります。

### Switch（スイッチ）

**オン/オフの2状態**を切り替えます。

**用途例**: ライトの点灯/消灯、オブジェクトの表示/非表示

### Slider（スライダー）

**連続的な値**を調整します（0〜100%）。

**用途例**: ライトの明るさ、音量の調整

**特徴**: 10%刻みでスナップする正確な操作感を提供します。

## エディタプレビュー機能

<img src={require('@site/static/img/Switch_Inspector.jpg').default} alt="Inspector画面" style={{maxWidth: '600px', display: 'block', margin: '20px 0'}} />

LuraSwitch2 の大きな特徴の1つは、**エディタ上でOn/Off状態を確認できる**ことです。

Inspectorで **DefaultState** を切り替えると、シーンビュー上でスイッチの見た目が変化し、On/Off状態を視覚的に確認できます。

## 同期モード

### Global

全プレイヤーで状態が同期されます。

**用途例**: ワールド全体の照明、共有オブジェクト

### Local

各プレイヤーのローカルに保存されます（ワールドセーブ）。

**用途例**: 個人の音量設定、ミラー設定

### None

同期も保存も行いません。

**用途例**: 一時的な設定

## 次のステップ

基本的な使い方を理解したら、各コンポーネントの詳細なドキュメントを参照してください：

- [スイッチ一覧](../switches/overview.md)
- [スライダー一覧](../sliders/overview.md)
- [ユーティリティ](../utilities/lura-mirror.md)
