---
sidebar_position: 1
---

# スイッチ概要

LuraSwitch2 のスイッチシステムについて説明します。

## スイッチとは

スイッチは、オン/オフの2状態を切り替えるコンポーネントです。ライトの点灯/消灯、オブジェクトの表示/非表示など、様々な要素を制御できます。

## スイッチの2つのモード

LuraSwitch2 のスイッチには、2つの動作モードがあります。

### 1. スイッチ：Toggleモード（デフォルト）

**オブジェクト切り替えスイッチ**

ターゲットオブジェクトのアクティブ状態を切り替えます。

- **On Targets**: オン状態でアクティブになるオブジェクト
- **Off Targets**: オン状態で非アクティブになるオブジェクト

:::tip
旧LuraSwitchとの違い：旧版はToggle方式でしたが、LuraSwitch2ではOn状態とOff状態を明確に区別します。
:::

### 2. スイッチ：Externalモード

**外部スクリプト呼び出しスイッチ**

外部のUdonスクリプトの機能を呼び出します。

現在デフォルトで以下が用意されています。

- **Switch_Teleport**: テレポート機能
- **Switch_Reset**: オブジェクトリセット機能

## ビジュアルモード

すべてのスイッチは **2Dモード** と **3Dモード** を切り替えられます。

<div style={{display: 'flex', gap: '20px', marginBottom: '20px', alignItems: 'center'}}>
  <div>
    <img src={require('@site/static/img/Switch_Mirror_3D.png').default} alt="3Dモード" style={{maxWidth: '200px'}} />
    <p style={{textAlign: 'center'}}>3Dモードの例</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Mirror_2D.png').default} alt="2Dモード" style={{maxWidth: '200px'}} />
    <p style={{textAlign: 'center'}}>2Dモードの例</p>
  </div>
</div>

**SwitchVisualMode** パラメータを切り替えることで、見た目を瞬時に変更できます。

## スイッチのカラー分類

LuraSwitch2 ではカラー分類を以下のように再定義しました（絵文字つき）。

| カラー (絵文字) | 機能 | 説明 |
|---|---|---|
| **White 🪞** | ミラーの切り替え | Mirror（ミラー）の表示/非表示を制御 |
| **Orange 📦** | オブジェクトの切り替え | Object、Pen、Key などのゲームオブジェクトの表示/非表示を制御 |
| **Pink 🎵** | メディアの切り替え | Audio、Video、Music などのメディア再生を制御 |
| **Blue ⚙️** | 機能の切り替え | Chair、LiteModeなどの特定機能のオン/オフを制御 |
| **Green 🟢** | コライダーの切り替え | Bed、Colliderなどの物理コライダーのオン/オフを制御 |
| **Purple 🎨** | 見た目の切り替え | PostEffect、Night、Effectなどの視覚効果を制御 |
| **Warm 💡** | ライトの切り替え | AvatarLight、Lightなどの照明のオン/オフを制御 |
| **LightGreen ⚡** | 機能の即時発動 | Teleport、Reset等の外部スクリプトを即座に実行 |

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

- [スイッチ：Toggleモード](./object-switches.md)
- [スイッチ：Externalモード](./function-switches.md)