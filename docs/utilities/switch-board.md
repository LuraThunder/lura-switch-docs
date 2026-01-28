---
sidebar_position: 5
---

# SwitchBoard

<img src={require('@site/static/img/LuraSwitchBoard_With2DSwitches.png').default} alt="HeightOffsetter" style={{maxWidth: '600px'}} />

2Dモードのスイッチを使うときに便利な、自動で最寄りホルダーに移動するボードです。

## 特徴

### 🎯 自動移動

スイッチボードが**自動で一番近いホルダーの位置**に移動します。  
スイッチの数は少ないままでも、様々なところで使うことができるようになります。


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
## 関連ユーティリティ

- [HeightOffsetter](./height-offsetter.md) - 自動高さ調整
- [スイッチ概要](../switches/overview.md)