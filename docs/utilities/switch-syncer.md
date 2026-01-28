---
sidebar_position: 3
---

# SwitchSyncer

複数のスイッチ / スライダー / セレクターを「同じ状態」に揃えるユーティリティです。

## 特徴

### 🔗 まとめて同一状態に同期

Inspector の配列に追加した対象を、同じ状態（ON/OFF、スライダー値、選択インデックス）に揃えます。

### 🎯 対象ごとに同期

- Toggle系スイッチ（ON/OFF）
- Slider系（0〜1 の値）
- SwitchSelector系（選択インデックス）

## 使い方

<img src={require('@site/static/img/SwitchSyncer_Inspector.jpg').default} alt="SwitchSyncer Inspector" style={{maxWidth: '900px'}} />

### 基本的な設定

1. `SwitchSyncer.prefab` をシーンに配置
2. Inspector で同期させたい対象を配列に設定
  - Toggleモードのスイッチ → **Toggle Switches**
  - SwitchSelector → **Switch Selectors**
  - スライダー → **Slider Switches**
3. 必要に応じて同期間隔や補間時間を調整

### どう同期されるか（挙動）

- 一定間隔で対象の状態変化をチェックし、変化が見つかったら **他の全対象に同じ状態を適用**します。
- 「マスター/スレーブ」や「双方向」の選択はありません。
  - **どれか1つを操作した値が、その時点の“基準”**になって全体へ反映されます。
- LocalSave などの「復元値」を持つ対象がある場合、起動直後は **復元値を優先して揃える**挙動があります。

## 用途例

### 複数エリアの照明を一括制御

```
Toggle Switches: エリア1照明スイッチ, エリア2照明スイッチ, エリア3照明スイッチ

→ どれか1つを操作すると、すべて同じON/OFFに揃う
```

## 注意事項

:::warning
**同期グループの重複に注意**

同じ対象を複数の SwitchSyncer に同時に入れると、意図しない上書きや揺れ（同期の競合）が起きることがあります。

基本は「1つの対象は、1つの SwitchSyncer グループに所属」として設計してください。
:::
