---
sidebar_position: 1
---

# 📥 インストール

LuraSwitch2 を Unity プロジェクトに導入する手順を解説します。

## 📋 必要な環境

LuraSwitch2 を使用するには、以下の環境が必要です。

- **Unity**: 2022.3.6f1 以上
- **VRChat SDK**: SDK3 - Worlds
- **UdonSharp**: 3.10 以上


## 🛠️ インストール手順

### 1️⃣ パッケージのダウンロード

[BOOTH 商品ページ](https://lura.booth.pm/items/7923735) から LuraSwitch2 の最新版をダウンロードしてください。

### 2️⃣ UnityPackage のインポート

1. Unity プロジェクトを開く
2. ダウンロードした `.unitypackage` ファイルをダブルクリック
3. インポートダイアログで「Import」をクリック

:::tip 💡 初回導入の場合
初めてインポートする場合は、すべてのファイルをインポートすることを推奨します。
:::

### 3. インストールの確認

インポートが完了すると、以下のフォルダが作成されます：

```
Assets/
  QuickBrown/
    LuraSwitch2/
      01_PREFAB/     # 使用可能なプレハブ
      02_CORE/       # コアスクリプト
      SCENE/         # サンプルシーン
```

## サンプルシーンの確認

`Assets/QuickBrown/LuraSwitch2/SCENE/LuraSwitch2_SAMPLE.unity` を開くと、各コンポーネントの使用例を確認できます。

## TextMeshPro のインポート
テキストを正しく表示するために、TextMeshPro パッケージをインポートしてください。
<img src={require('@site/static/img/textmeshpro.jpg').default}  />

## 🎯 次のステップ

インストールが完了したら、以下を参照して実際に LuraSwitch2 を体験してみましょう。

- ⚡ [クイックスタートガイド](../quick-start.md) — 最速でミラーセットを配置
- 🎓 [基本的な使い方](./basic-usage.md) — スイッチとスライダーの基礎
