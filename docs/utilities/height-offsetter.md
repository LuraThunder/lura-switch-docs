---
sidebar_position: 4
---

# HeightOffsetter

<img src={require('@site/static/img/HeightOffsetter.png').default} alt="HeightOffsetter" style={{maxWidth: '320px'}} />

プレイヤーの視点高さに応じて、指定した対象オブジェクト群の高さ（Y）を自動調整する Prefab です。

## 特徴

### 📏 自動高さ調整

プレイヤーの視点高さを一定間隔でサンプリングし、範囲内にクランプした値をターゲットへ適用します。

小柄なアバターでも、背の高いアバターでも、快適に操作できます。

### ⚙️ 簡単セットアップ

わかりやすいセットアップ手順で、簡単に導入できます。

## 使い方

### 基本的な設置

1. `HeightOffsetter.prefab` をシーンに配置
2. **ReferenceBox（BoxCollider）** を設定（高さの範囲を決めるボックス）
3. **OffsetTargets** に高さを動かしたいオブジェクトを登録
4. 必要に応じてサンプリング間隔・スムージングを調整

### パラメータ

| パラメータ | 説明 |
|----------|------|
| ReferenceBox | 高さの範囲を定義する BoxCollider（ワールドYの最小/最大を取得して使用） |
| OffsetTargets | 高さを調整する対象オブジェクト配列 |
| HeightPreview | エディタプレビュー用の高さ位置（0.0〜1.0） |
| Sample Interval Seconds | プレイヤーの高さをサンプリングする間隔（秒） |
| Height Change Epsilon | 高さ変化の検出閾値。小さな変化は無視して負荷を抑える |
| Smoothing Tick Frames | スムージング更新間隔（フレーム数） |
| Move Duration Seconds | 高さ移動のアニメーション時間（秒） |

:::tip
ReferenceBox を上下に調整すると、プレイヤー身長に対する追従範囲（最小/最大Y）が直感的に作れます。
:::

## 用途例

### 誰でも使えるスイッチパネル

```
ReferenceBox: 低め〜高めまで届く範囲に調整
OffsetTargets: スイッチ群の親ホルダー / パネル本体

→ 小さいアバターでも大きいアバターでも届きやすい
```

## 配置のコツ

### スイッチの配置

OffsetTargets は「HeightOffsetter の子」に限らず設定できます。
ただし、運用を簡単にするために、対象をまとめた親（パネルやホルダー）を OffsetTargets に登録するのがおすすめです。

```
HeightOffsetter
├── Switch_Light
├── Slider_Audio
└── Switch_Mirror
```

### 複数のパネル

用途別に複数の HeightOffsetter を使用：

```
HeightOffsetter_操作パネル
├── スイッチ類

HeightOffsetter_設定パネル
├── スライダー類
```

## SwitchBoard との併用

[SwitchBoard](./switch-board.md) と組み合わせることで、さらに便利になります：

- SwitchBoard: 2Dスイッチを最寄りホルダーに移動
- HeightOffsetter: ホルダーの高さを自動調整

## ベストプラクティス

### 変化を追いすぎない

高さ変化が気になる場合は、以下を調整すると落ち着きます。

- **Sample Interval Seconds** を長めにする
- **Height Change Epsilon** を少し大きくする
- **Move Duration Seconds** を少し長くする

### わかりやすい表示

HeightOffsetter の近くに説明を配置：

```
「身長に応じて高さが調整されます」
```

## トラブルシューティング

### 高さが変わらない

- ReferenceBox が設定されているか確認
- OffsetTargets が空になっていないか確認
- 対象が無効化されていないか確認

### 高さが極端

- ReferenceBox のサイズ/位置（最小/最大Y）が想定通りか確認
- Move Duration Seconds が短すぎてガクつく場合は少し長くする

### スイッチが付いてこない

- OffsetTargets に対象（または対象の親）が登録されているか確認

## 関連ユーティリティ

- [SwitchBoard](./switch-board.md) - 2Dスイッチの自動移動
- [スイッチ概要](../switches/overview.md)