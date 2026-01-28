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

<img src={require('@site/static/img/SwitchSyncer_Inspector.jpg').default} alt="SwitchSyncer Inspector" style={{maxWidth: '420px'}} />

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

### ミラーとライトの連動

```
Toggle Switches: ミラースイッチ, ライトスイッチ

→ ミラーをオンにすると自動的にライトもオン
```

### 音量の一括調整

```
Slider Switches: マスター音量, BGM, 環境音, 効果音

→ マスター音量で全体のバランスを保ったまま一括調整
```

## パラメータ

| パラメータ | 説明 |
|----------|------|
| Toggle Switches | 同じON/OFFに揃えたい Toggleモードのスイッチ配列 |
| Switch Selectors | 同じ選択インデックスに揃えたい SwitchSelector 配列 |
| Slider Switches | 同じ値(0〜1)に揃えたいスライダー配列 |
| Sync Interval Seconds | 状態チェック間隔（秒）。軽量化のため毎フレームはチェックしません |
| Slider Sync Interpolation Time | スライダーを外部同期する時の補間時間（秒） |

## ベストプラクティス

### 同じ「意味」のものをまとめる

同一の同期グループには、同じ目的・同じ挙動のものを入れるのがおすすめです。

例：同じエリアの照明スイッチ群、同じ種類の音量スライダー群 など。

## 注意事項

:::warning
**同期グループの重複に注意**

同じ対象を複数の SwitchSyncer に同時に入れると、意図しない上書きや揺れ（同期の競合）が起きることがあります。

基本は「1つの対象は、1つの SwitchSyncer グループに所属」として設計してください。
:::

## トラブルシューティング

### 連動しない

- 対象が配列（Toggle Switches / Slider Switches / Switch Selectors）に設定されているか確認
- 対象側が正しく動作しているか（単体でON/OFFや値変更ができるか）確認
- 反映に時間がかかる場合は **Sync Interval Seconds** を短くする（負荷とのトレードオフ）

### 遅延が気になる

- チェック間隔が原因の場合：**Sync Interval Seconds** を調整
- スライダーの追従がゆっくりに見える場合：**Slider Sync Interpolation Time** を調整

### 一部だけ連動しない

- 対象の参照が切れていないか（Missing になっていないか）確認
- 同期させたい対象が別の SwitchSyncer にも入っていないか確認

## 関連コンポーネント

- [スイッチ概要](../switches/overview.md)
- [スライダー概要](../sliders/overview.md)