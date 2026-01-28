---
sidebar_position: 4
---

# HeightOffsetter

![HeightOffsetter](/img/HeightOffsetter.png)

プレイヤーの身長に応じて、スイッチの高さが自動的に調整される便利なPrefabです。

## 特徴

### 📏 自動高さ調整

プレイヤーの視点の高さに応じて、スイッチの高さが自動的に調整されます。

小柄なアバターでも、背の高いアバターでも、快適に操作できます。

### ⚙️ 簡単セットアップ

わかりやすいセットアップ手順で、簡単に導入できます。

## 使い方

### 基本的な設置

1. `HeightOffsetter.prefab` をシーンに配置
2. スイッチやスライダーを HeightOffsetter の子オブジェクトとして配置
3. パラメータを調整

### パラメータ

| パラメータ | 説明 | デフォルト値 |
|----------|------|------------|
| BaseHeight | 基準となる高さ | 1.6m |
| MinHeight | 最小高さ | 1.0m |
| MaxHeight | 最大高さ | 2.5m |
| OffsetRatio | 高さ調整の割合 | 1.0 |

### BaseHeight の設定

**BaseHeight** は、標準的な身長のプレイヤーを想定した高さです。

```
推奨値: 1.5m 〜 1.7m
（アバターの平均的な視点の高さ）
```

### OffsetRatio の調整

高さ調整の強度を設定します：

- **1.0**: プレイヤーの視点高さに完全に追従
- **0.5**: 半分だけ追従（緩やかな調整）
- **0.0**: 追従なし（固定）

## 用途例

### 誰でも使えるスイッチパネル

```
BaseHeight: 1.6m
MinHeight: 1.2m
MaxHeight: 2.2m
OffsetRatio: 0.8

→ 小さいアバターでも大きいアバターでも快適
```

### 高さ固定だが微調整

```
BaseHeight: 1.5m
OffsetRatio: 0.3

→ ほぼ固定だが、極端に小さい・大きいアバターには対応
```

## 配置のコツ

### スイッチの配置

HeightOffsetter の**子オブジェクト**として配置：

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

### 適度な調整範囲

```
MinHeight: BaseHeight - 0.4m
MaxHeight: BaseHeight + 0.6m

→ 極端すぎない範囲で調整
```

### わかりやすい表示

HeightOffsetter の近くに説明を配置：

```
「身長に応じて高さが調整されます」
```

## トラブルシューティング

### 高さが変わらない

- プレイヤーが範囲内にいるか確認
- OffsetRatio が 0 になっていないか確認

### 高さが極端

- MinHeight / MaxHeight の範囲を確認
- OffsetRatio を調整

### スイッチが付いてこない

- スイッチが HeightOffsetter の子オブジェクトになっているか確認

## 関連ユーティリティ

- [SwitchBoard](./switch-board.md) - 2Dスイッチの自動移動
- [スイッチ概要](../switches/overview.md)