---
sidebar_position: 2
---

# 📖 LuraSwitch2 へようこそ

![LuraSwitch2](/img/TitleSwitches.png)

**LuraSwitch2** は、VRChat ワールド制作のための統合ギミックシステムです。

## 🎯 LuraSwitch2 とは？

LuraSwitch2 は、VRChat ワールド内で様々な要素を簡単に制御できる Udon Sharp ベースの統合ギミックシステムです。ライト・オーディオ・オブジェクトの表示制御など、ワールド制作で頻繁に使用される機能を、すぐに使えるプレハブとして提供しています。

## ✨ 主な特徴

### 🎛️ スイッチシステム

- **モダンなデザイン**: 視覚的に洗練された UI デザインを採用
- **2D/3Dモード切り替え**: 用途に応じた操作方法を選択可能
- **テキスト表示**: スイッチにカスタムラベルを設定可能
- **ワールドセーブ対応**: Local モードで各プレイヤーの設定を保存
- **エディタプレビュー**: Unity エディタ上で On/Off 状態を即座に確認

### 🎚️ スライダーシステム

- **モダンなデザイン**: 視覚的に優れた操作インターフェース
- **10%スナップ機能**: 10%刻みの段階的調整で正確な値設定を実現
- **2Dモード対応**: 独自実装による直感的な操作感
- **縦横切り替え**: Vertical / Horizontal モードを自由に選択
- **値の永続化**: Local Save モードでユーザーごとの設定を保持
- **マルチプレイヤー同期**: Global モードで全プレイヤー間の値を同期

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

LuraSwitch2 には以下のようなスイッチが用意されています:

### スイッチ:Toggleモード

カラー分類で機能を識別できます:

- **White**: Mirror(ミラー)
- **Orange**: Object(オブジェクト)、Pen(ペン)、Key(キー)
- **Pink**: Audio(オーディオ)、Video(ビデオ)、Music(音楽)
- **Blue**: Chair(椅子)、LiteMode(軽量モード)
- **Green**: Bed(ベッド)、Collider(コライダー)
- **Purple**: PostEffect(ポストエフェクト)、Night(昼夜)、Effect(エフェクト)
- **Warm**: AvatarLight(アバターライト)、Light(ライト)

### スイッチ:Externalモード

- **Light Green**: Teleport(テレポート)、Reset(リセット)

## 🚀 はじめに

LuraSwitch2 を最速で使い始めるには、以下のドキュメントを順にご覧ください。

### 📋 必要な環境

- Unity 2022.3.6f1 以上
- VRChat SDK3 - Worlds
- UdonSharp 1.x

### 🎯 推奨される学習ステップ

1. 📥 [インストール](./getting-started/installation.md) — 環境構築と導入手順
2. ⚡ [クイックスタートガイド](./quick-start.md) — 最速でミラーセットを配置して体験
3. 🎓 [基本的な使い方](./getting-started/basic-usage.md) — スイッチとスライダーの基礎
4. 🎛️ [スイッチ一覧](./switches/overview.md) — 全スイッチコンポーネントのリファレンス
5. 🛠️ [ユーティリティ](./utilities/lura-mirror.md) — LuraMirror などの高度な機能
