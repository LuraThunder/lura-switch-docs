---
sidebar_position: 2
---

# LuraSwitch2 へようこそ

![LuraSwitch2](/img/TitleSwitches.png)

**LuraSwitch2** は VRChat ワールド制作のための統合ギミックシステムです。

## LuraSwitch2 とは？

LuraSwitch2 は、VRChat ワールド内で様々な要素を簡単に制御できる Udon Sharp ベースのギミックシステムです。ライト、オーディオ、オブジェクトの表示/非表示など、ワールド制作でよく使われる機能をプレハブとして提供しています。

## 主な特徴

### 🎮 スイッチシステム

- **モダンなデザイン**: 洗練されたUIデザイン
- **2D/3Dモード**: モード切り替えが可能
- **テキスト表示**: スイッチにラベルテキストを表示できます
- **ワールドセーブ対応**: Local モードで状態を保存できます
- **エディタプレビュー**: On/Off 状態をエディタ上で確認できます

### 📊 スライダーシステム

- **モダンなデザイン**: 視覚的に優れたスライダーUI
- **10%スナップ**: 10%刻みでスナップする正確な操作感
- **2Dモード対応**: 直感的な操作が可能な2Dスライダー
- **縦横切り替え**: Vertical/Horizontal モード選択が可能
- **値の保存**: Local Save モードで値を保存できます
- **同期機能**: Global モードで他のプレイヤーと同期できます

### 🔄 モードスイッチ

- **排他制御**: 複数のスイッチから1つだけを選択できます
- **連動機能**: 他のスイッチと連動させることができます
- **専用UI**: 標準スイッチまたは小型専用スイッチを使用できます

### 🛠️ ユーティリティ機能

- **LuraMirror**: 簡単にセットアップできる高性能ミラー
- **LuraCollider**: アニメーション効果付きのコライダー
- **SwitchBoard**: 最寄りのホルダーに自動で移動する2Dスイッチパネル
- **SwitchSyncer**: 複数のスイッチ・スライダーを簡単に連動させる機能
- **HeightOffsetter**: プレイヤーの身長に応じて自動で高さが調整されるスイッチ

## スイッチの種類

LuraSwitch2 には以下のようなスイッチが用意されています：

### オブジェクト切り替えスイッチ

カラー分類で機能を識別できます：

- **White**: Mirror（ミラー）
- **Orange**: Object（オブジェクト）、Pen（ペン）、Key（キー）
- **Pink**: Audio（オーディオ）、Video（ビデオ）、Music（音楽）
- **Blue**: Chair（椅子）、LiteMode（軽量モード）
- **Green**: Bed（ベッド）、Collider（コライダー）
- **Purple**: PostEffect（ポストエフェクト）、Night（昼夜）、Effect（エフェクト）
- **Warm**: AvatarLight（アバターライト）、Light（ライト）

### 外部スクリプト呼び出しスイッチ

- **Light Green**: Teleport（テレポート）、Reset（リセット）

## はじめに

LuraSwitch2 の使用を開始するには、以下のドキュメントをご覧ください：

### 必要なもの

- Unity 2022.3.6f1 以上
- VRChat SDK3 - Worlds
- UdonSharp 1.x

### 次のステップ

1. [インストール](./getting-started/installation.md) - LuraSwitch2 の導入方法
2. [基本的な使い方](./getting-started/basic-usage.md) - 最初のスイッチを設置
3. [スイッチ一覧](./switches/overview.md) - すべてのスイッチコンポーネント
4. [ユーティリティ](./utilities/lura-mirror.md) - LuraMirror などの便利機能
