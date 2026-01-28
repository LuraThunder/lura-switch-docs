---
sidebar_position: 4
---

# HeightOffsetter

<img src={require('@site/static/img/HeightOffsetter.png').default} alt="HeightOffsetter" style={{maxWidth: '600px'}} />

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
## 関連ユーティリティ

- [SwitchBoard](./switch-board.md) - 2Dスイッチの自動移動
- [スイッチ概要](../switches/overview.md)