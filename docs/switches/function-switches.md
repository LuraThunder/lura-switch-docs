---
sidebar_position: 3
---

# 外部スクリプト呼び出しスイッチ

外部Udonスクリプトの機能を呼び出すスイッチの一覧です。

これらのスイッチは Light Green カラーで識別できます。

## Switch_Teleport

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Teleport_3D.png').default} alt="Switch_Teleport 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Teleport_2D.png').default} alt="Switch_Teleport 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

テレポート機能を実行するスイッチです。

### 機能

指定した位置・角度へプレイヤーを暗転フェード付きでテレポートさせます。

### 仕組み

- **SwitchFunction_Teleport** にアクセス
- **■■■TeleportTarget■■■** の位置・角度へテレポート
- 暗転フェード演出付き

### 配置ガイド

非表示・EditorOnlyの **Arrow** オブジェクトが含まれています。

配置の参考にしたい場合は、Arrowをアクティブにすると向きが視覚的にわかりやすくなります。

### 使い方

1. `Switch_Teleport.prefab` をシーンに配置
2. **■■■TeleportTarget■■■** を移動・回転させてテレポート先を設定
3. 必要に応じてArrowを表示して向きを確認

### 用途例

- 別エリアへの移動
- スポーン地点への帰還
- ショートカット移動

---

## Switch_Reset

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Reset_3D.png').default} alt="Switch_Reset 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Reset_2D.png').default} alt="Switch_Reset 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

オブジェクトの位置をリセットする機能を実行するスイッチです。

### 機能

指定したオブジェクトの位置・回転を初期状態にリセットします。

### 仕組み

- **SwitchFunction_Respawn** にアクセス
- **Switch_Reset** の **Target** に指定したオブジェクトをリセット

### Fukuro Udon対応

**ManualObjectSync** にも対応しています。

Fukuro UdonのManualObjectSyncを使用している場合も、このスイッチで位置リセットが可能です。

### 使い方

1. `Switch_Reset.prefab` をシーンに配置
2. Inspector の **Target** にリセットしたいオブジェクトを設定
3. オブジェクトの初期位置を設定（この位置がリセット先になります）

### 用途例

- 動かせるオブジェクトのリセット
- ギミックの初期化
- パズルのリセット機能

---

## カスタム外部スクリプト

独自の外部スクリプト呼び出しスイッチを作成することも可能です。

### 作成方法

1. スイッチのプレハブを複製
2. 呼び出したいUdonスクリプトを作成
3. スイッチから適切なイベントを送信するように設定

詳しくは [カスタマイズガイド](../advanced/customization.md) をご覧ください。

---

## 共通の使い方

外部スクリプト呼び出しスイッチも、基本的な操作は通常のスイッチと同じです：

- **SwitchVisualMode**: 3D/2D切り替え
- **SwitchText**: 表示テキスト設定
- **SyncMode**: 同期設定

## 次のステップ

- [オブジェクト切り替えスイッチ](./object-switches.md)
- [スライダー](../sliders/overview.md)
- [カスタマイズガイド](../advanced/customization.md)