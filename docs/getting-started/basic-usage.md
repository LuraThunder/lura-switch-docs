---
sidebar_position: 2
---

# 🎓 基本的な使い方

LuraSwitch2 の基本的な使い方と、主要な概念を学びます。

## 📦 プレハブの配置

LuraSwitch2 の各機能は、使いやすいプレハブとして提供されています。  
使用方法は非常にシンプルです。

1. `Assets/QuickBrown/LuraSwitch2/01_PREFAB` フォルダを開く
2. 使いたいプレハブをシーンにドラッグ＆ドロップ

## 基本的な構造

すべての LuraSwitch2 コンポーネントは、以下の基本構造を持っています：

- **3Dスイッチ／2Dスイッチ**: プレイヤーが操作するボタンやスライダー
- **Udonスクリプト（SwitchBase）**: スイッチ制御用スクリプト

## 📦 実践例：オブジェクトスイッチの設置

最も基本的な例として、オブジェクトのオン・オフスイッチを設置してみましょう。

### 1️⃣ Switch_Object プレハブの配置

`01_PREFAB/01_Switch/Switch_Object.prefab` をシーンに配置します。

### 2️⃣ オブジェクトの作成

シーンに キューブなどのなんらかのオブジェクトを配置します。

### 3️⃣ ターゲットの設定

Switch_Object を選択し、Inspector で以下を設定します。
<img src={require('@site/static/img/Switch_Targets.jpg').default} alt="3Dモード" style={{backgroundColor: '#000'}} />

- **Targets**: Targetsの配列にキューブオブジェクトをドラッグ＆ドロップします。

### 4️⃣ 動作確認

Play モードで実行し、スイッチにインタラクトするとライトがオン・オフされることを確認します。

:::tip 🔍 Toggle Default On
Toggle Default Onを設定すると、実行しなくても状態の変更を確認できます。
:::

## 2Dモードと3Dモード

すべてのスイッチとスライダーは、**3Dモード** と **2Dモード** を切り替えることができます。

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

<img src={require('@site/static/img/Switch_Visual_Inspector.jpg').default} alt="2Dモード" style={{backgroundColor: '#000'}} />

Inspector の **SwitchVisualMode** を切り替えるだけで、見た目が瞬時に変わります。



## 同期モード

| モード     | 説明                                                     | 用途例                     |
| ---------- | -------------------------------------------------------- | -------------------------- |
| Global     | 全プレイヤーで状態が同期されます。                       | 共有オブジェクト           |
| Local Save | 各プレイヤーのローカルに保存されます（ワールドセーブ）。 | 個人の音量設定、ミラー設定 |
| Local      | 同期も保存も行いません。                                 | 一時的な設定               |

### Persistence Key（永続化キー）

Local Save を使用する場合は `Persistence Key` を設定する必要があります。`Persistence Key` はローカル保存データを識別するための文字列です。同じキーを設定した複数のオブジェクトは同じセーブデータを共有します。

- 設定場所: Inspector の `Persistence Key` フィールド
- 形式: 一意な英数字とアンダースコア（例: `player_volume`）

他のオブジェクトとキーが重複すると意図しない共有が発生するため、ユニークな値を使用してください。

## 次のステップ

基本的な使い方を理解したら、各コンポーネントの詳細なドキュメントを参照してください：

- [スイッチ一覧](../switches/overview.md)
- [スライダー一覧](../sliders/overview.md)
- [ユーティリティ](../utilities/lura-mirror.md)
