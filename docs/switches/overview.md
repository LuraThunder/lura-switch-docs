---
sidebar_position: 1
---

# 🏷️スイッチ概要

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/LuraSwitch2-social-card.png').default} alt="Switch 3D"  />
  </div>
</div>

LuraSwitch2 のスイッチシステムについて説明します。

## LuraSwitchとは

LuraSwitch2は、VRChatで長く使われていたスイッチの新バージョンです。  
シンプルで使いやすく、様々な動作を可能にします。


## スイッチの2つのモード

LuraSwitch2 のスイッチには、2つの動作モードがあります。

### 1. スイッチ：Toggleモード（デフォルト）

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Object_3D.png').default} alt="Switch Toggle 3D" style={{maxWidth: '200px', backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>非アクティブ状態</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Object_3D_Active.png').default} alt="Switch Toggle 2D" style={{maxWidth: '200px', backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>アクティブ状態</p>
  </div>
</div>

**オブジェクトの切り替えスイッチです**

ターゲットオブジェクトのアクティブ状態を切り替えます。

- **On Targets**: オン状態でアクティブになるオブジェクト
- **Off Targets**: オン状態で非アクティブになるオブジェクト

:::tip
旧LuraSwitchとの違い：旧版はToggle方式でしたが、LuraSwitch2ではOn状態とOff状態を明確に区別します。
:::

### 2. スイッチ：Externalモード

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Teleport_3D.png').default} alt="Switch External 3D" style={{maxWidth: '200px', backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>テレポートスイッチ</p>
  </div>
</div>

**外部スクリプト呼び出しスイッチ**

Externalモードでは、外部のUdonスクリプトの機能を呼び出します。

現在デフォルトで以下が用意されています。

- **Switch_Teleport**: テレポート機能
- **Switch_Reset**: オブジェクトリセット機能

## ビジュアルモード

すべてのスイッチは **SwitchVisualMode** パラメータを切り替えることで、 **3Dモード** と **2Dモード** を切り替えられます。

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

:::tip
多くの人が旧LuraSwitchでも2Dで使用していたため公式で採用しました。  
3Dで配置した後にデザイン調整をするということも可能です。
:::

## スイッチのカラー分類

LuraSwitch2 ではカラー分類を以下のように再定義しました（絵文字つき）。

| カラー (絵文字)  | 機能                   | 説明                                                         |
| ---------------- | ---------------------- | ------------------------------------------------------------ |
| **White ⚪**      | ミラーの切り替え       | Mirror（ミラー）の表示/非表示を制御                          |
| **Orange 🟠**     | オブジェクトの切り替え | Object、Pen、Key などのゲームオブジェクトの表示/非表示を制御 |
| **Pink 🔴**       | メディアの切り替え     | Audio、Video、Music などのメディア再生を制御                 |
| **Blue 🔵**       | 機能の切り替え         | Chair、LiteModeなどの特定機能のオン/オフを制御               |
| **Green 🟢**      | コライダーの切り替え   | Bed、Colliderなどの物理コライダーのオン/オフを制御           |
| **Purple 🟣**     | 見た目の切り替え       | PostEffect、Night、Effectなどの視覚効果を制御                |
| **Warm 🟡**       | ライトの切り替え       | AvatarLight、Lightなどの照明のオン/オフを制御                |
| **LightGreen 🟩** | 機能の即時発動         | Teleport、Reset等の外部スクリプトを即座に実行                |

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