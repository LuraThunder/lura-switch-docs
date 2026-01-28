---
sidebar_position: 1
---

# スイッチ概要

LuraSwitch2 のスイッチシステムについて説明します。

## スイッチとは

スイッチは、オン/オフの2状態を切り替えるコンポーネントです。ライトの点灯/消灯、オブジェクトの表示/非表示など、様々な要素を制御できます。

## スイッチの2つのモード

LuraSwitch2 のスイッチには、2つの動作モードがあります。

### 1. オブジェクト切り替えモード（デフォルト）

ターゲットオブジェクトのアクティブ状態を切り替えます。

- **On Targets**: オン状態でアクティブになるオブジェクト
- **Off Targets**: オン状態で非アクティブになるオブジェクト

:::tip
旧LuraSwitchとの違い：旧版はToggle方式でしたが、LuraSwitch2ではOn状態とOff状態を明確に区別します。
:::

### 2. 外部スクリプト呼び出しモード

外部のUdonスクリプトの機能を呼び出します。

現在デフォルトで以下が用意されています。

- **Switch_Teleport**: テレポート機能
- **Switch_Reset**: オブジェクトリセット機能

## ビジュアルモード

すべてのスイッチは **2Dモード** と **3Dモード** を切り替えられます。

![3Dモード](/img/Switch_Mirror_3D.png)
*3Dモードの例*

![2Dモード](/img/Switch_Mirror_2D.png)
*2Dモードの例*

**SwitchVisualMode** パラメータを切り替えることで、見た目を瞬時に変更できます。

## スイッチのカラー分類

LuraSwitch2 ではカラー分類を以下のように再定義しました（絵文字つき）。

| カラー (絵文字) | 説明 |
|---|---|
| **White 🪞** | ミラーの切り替え（Mirror） |
| **Orange 📦** | オブジェクト等の切り替え（Object、Pen、Key など） |
| **Pink 🎵** | メディアの切り替え（Audio、Video、Music など） |
| **Blue ⚙️** | 機能の切り替え（外部スクリプト呼び出しなど） |
| **Green 🟢** | コライダーの切り替え（Collider） |
| **Purple 🎨** | 見た目の切り替え（PostEffect、Effect など） |
| **Warm 💡** | ライトの切り替え（AvatarLight、Light など） |
| **LightGreen ⚡** | 機能の発動（Teleport、Reset 等の即時発動系） |

## 共通パラメータ

![Inspector画面](/img/Switch_Inspector.jpg)

すべてのスイッチに共通するパラメータ：

### 基本設定

- **DefaultState**: 初期状態（On/Off）
- **SwitchVisualMode**: 表示モード（3D/2D）
- **SwitchText**: スイッチに表示するテキスト

### 同期設定

- **SyncMode**: 
  - **None**: 同期なし（各プレイヤー個別）
  - **Global**: 全プレイヤーで同期
  - **Local**: ローカルに保存（ワールドセーブ）

### ターゲット設定

- **On Targets**: オン状態でアクティブになるオブジェクト
- **Off Targets**: オン状態で非アクティブになるオブジェクト

## エディタプレビュー機能

LuraSwitch2 の大きな特徴の1つは、**エディタ上でOn/Off状態を確認できる**ことです。

Inspectorで **DefaultState** を切り替えると、シーンビュー上でスイッチの見た目が変化し、On/Off状態を視覚的に確認できます。

## 次のステップ

各スイッチの詳細は、以下のページをご覧ください：

- [オブジェクト切り替えスイッチ](./object-switches.md)
- [外部スクリプト呼び出しスイッチ](./function-switches.md)