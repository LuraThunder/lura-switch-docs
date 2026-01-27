# LuraSwitch2 ドキュメント

VRChat 向けギミックシステム LuraSwitch2 の公式ドキュメントサイトです。

![LuraSwitch2](/static/img/TitleSwitches.png)

## 概要

LuraSwitch2 は、VRChat ワールド制作のための統合ギミックシステムです。ライト、オーディオ、オブジェクトの表示/非表示など、ワールド制作でよく使われる機能をプレハブとして提供しています。

## 主な特徴

- 🎮 **モダンなデザイン**: かっこいいスイッチ・スライダーUI
- 🔄 **2D/3Dモード**: 簡単に切り替え可能
- 💾 **ワールドセーブ対応**: Local モードで状態を保存
- 🎨 **エディタプレビュー**: On/Off 状態をエディタ上で確認
- 🛠️ **豊富なユーティリティ**: LuraMirror、SwitchSyncer など

## ドキュメントサイトについて

このドキュメントサイトは [Docusaurus](https://docusaurus.io/) を使用して構築されています。

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## ライセンス

ドキュメントの内容は LuraThunder が管理しています。

## 連絡先

- X (Twitter): [@LuraThunder](https://x.com/LuraThunder)
- BOOTH: [https://lurathunder.booth.pm/](https://lurathunder.booth.pm/)
