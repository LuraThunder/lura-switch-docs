---
sidebar_position: 5
---

# SwitchBoard

![SwitchBoard](/img/LuraSwitchBoard_With2DSwitches.png)

2Dモードのスイッチを使うときに便利な、自動で最寄りホルダーに移動する機能です。

## 特徴

### 🎯 自動移動

スイッチボードが**自動で一番近いホルダーの位置**に移動します。

スイッチをいろんなところに置かなくても良くて便利！

### 📱 2Dモード向け

特に2Dモードのスイッチと相性抜群です。

## 仕組み

SwitchBoard は以下の要素で構成されています：

- **SwitchBoard**: スイッチを配置するボード
- **Holders**: ボードが移動する位置（複数設置可能）

プレイヤーが近づくと、最も近い Holder の位置にボードが移動します。

## 使い方

### 基本的な設置

1. `SwitchBoard.prefab` をシーンに配置
2. **Holder** オブジェクトを複数の場所に配置
3. SwitchBoard の子オブジェクトとしてスイッチを配置

### 構成例

```
SwitchBoard
├── Switch_Light（2Dモード）
├── Switch_Audio（2Dモード）
└── Slider_Audio（2Dモード）

シーン内:
├── Holder_1（エリアA）
├── Holder_2（エリアB）
└── Holder_3（エリアC）
```

プレイヤーが エリアA に近づく → SwitchBoard が Holder_1 の位置に移動

## パラメータ

| パラメータ | 説明 | デフォルト値 |
|----------|------|------------|
| Holders | 移動先のホルダーの配列 | 空 |
| MoveSpeed | 移動速度 | 5.0 |
| ActivationDistance | 反応する距離 | 3.0m |

### Holders の設定

複数のHolderを配列に追加します：

```
Holders[0]: Holder_エントランス
Holders[1]: Holder_リビング  
Holders[2]: Holder_寝室
```

## 用途例

### 広いワールドでの操作パネル

```
用途: 各エリアで同じ操作パネルを使う
Holders: 各エリアに1つずつ配置

→ プレイヤーが移動すると、パネルも付いてくる
```

### VR向けUI

```
用途: 手元に操作パネルを呼び出す
Holders: プレイヤーの周辺に配置

→ 常に使いやすい位置にパネルが来る
```

## 2Dモードスイッチとの組み合わせ

SwitchBoard は **2Dモード** のスイッチと組み合わせると最も効果的です。

### 推奨設定

```
SwitchBoard に配置するスイッチ:
- SwitchVisualMode: 2D
- 複数のスイッチを縦または横に並べる
```

### レイアウト例

```
┌─────────────────┐
│  SwitchBoard    │
├─────────────────┤
│ [Light    ] ON  │
│ [Audio    ] OFF │
│ [Mirror   ] ON  │
│ [Volume   ]▓▓▓░ │
└─────────────────┘
```

## ベストプラクティス

### Holder の配置

- ワールドの主要なエリアに配置
- プレイヤーの動線を考慮
- 壁や柱など、目印になる場所

### 移動速度

```
遅め（2.0）: ゆっくり追従（落ち着いた雰囲気）
普通（5.0）: 自然な追従
速め（10.0）: 素早く追従（テンポの良いワールド）
```

### スイッチの数

SwitchBoard に配置するスイッチは **5〜10個程度** が見やすいでしょう。

## HeightOffsetter との併用

[HeightOffsetter](./height-offsetter.md) と組み合わせると、さらに便利：

```
HeightOffsetter
└── SwitchBoard
    ├── スイッチ類
    └── スライダー類
```

- SwitchBoard: 最寄りの位置に移動
- HeightOffsetter: 身長に応じて高さ調整

→ 最強の組み合わせ！

## トラブルシューティング

### ボードが移動しない

- Holders が設定されているか確認
- ActivationDistance の範囲内にいるか確認

### 移動が遅い/速い

- MoveSpeed を調整

### 変な場所に移動する

- Holders の位置を確認
- 不要な Holder を削除

## 関連ユーティリティ

- [HeightOffsetter](./height-offsetter.md) - 自動高さ調整
- [スイッチ概要](../switches/overview.md)