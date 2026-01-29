---
sidebar_position: 3
---

# スイッチ : Externalモード

**外部スクリプト呼び出しスイッチ**

外部Udonスクリプトの機能を呼び出すスイッチの一覧です。

これらのスイッチは Light Green カラーで識別できます。

## Switch_Teleport

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Teleport_3D.png').default} alt="Switch_Teleport 3D" style={{maxWidth: '200px', backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Teleport_2D.png').default} alt="Switch_Teleport 2D" style={{maxWidth: '200px', backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

テレポート機能を実行するスイッチです。

### 機能

指定した位置・角度へプレイヤーを暗転フェード付きでテレポートさせます。

### 仕組み

**SwitchFunction_Teleport** にアクセスし、**TeleportTarget** の位置・角度へテレポートします。暗転フェード演出が含まれています。

### 配置ガイド

非表示・EditorOnlyの **Arrow** オブジェクトが含まれています。

配置の参考にしたい場合は、Arrowをアクティブにすると向きが視覚的にわかりやすくなります。

### 使い方

1. `Switch_Teleport.prefab` をシーンに配置します
2. **TeleportTarget** を移動・回転させてテレポート先を設定します
3. 必要に応じてArrowを表示して向きを確認します

### 用途例

- 別エリアへの移動
- 部屋への入口スイッチ

---

## Switch_Reset

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Reset_3D.png').default} alt="Switch_Reset 3D" style={{maxWidth: '200px', backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Reset_2D.png').default} alt="Switch_Reset 2D" style={{maxWidth: '200px', backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

オブジェクトの位置をリセットする機能を実行するスイッチです。

### 機能

指定したオブジェクトの位置・回転を初期状態にリセットします。

### 仕組み

**SwitchFunction_Respawn** にアクセスし、**Switch_Reset** の **Target** に指定したオブジェクトをリセットします。

### Fukuro Udon対応

**ManualObjectSync** にも対応しています。

Fukuro UdonのManualObjectSyncを使用している場合も、このスイッチで位置リセットが可能です。


:::tip
旧LuraSwitchで、RigidbodyやVRCPickupがついていないオブジェクトを参照しているとエラーが起きてしまう問題は改善されました。
:::

### 使い方

1. `Switch_Reset.prefab` をシーンに配置します
2. Inspector の **Target** にリセットしたいオブジェクトを設定します
3. オブジェクトの初期位置を設定します（この位置がリセット先になります）

### 用途例

- 動かせるオブジェクトのリセット
- 片付けボタン

---