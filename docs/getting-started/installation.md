---
sidebar_position: 1
---

# インストール

LuraSwitch2 をUnityプロジェクトに導入する方法を説明します。

## 必要な環境

LuraSwitch2 を使用するには、以下の環境が必要です：

- **Unity**: 2022.3.6f1 以上
- **VRChat SDK**: SDK3 - Worlds
- **UdonSharp**: 1.x

:::info
VRChat SDK と UdonSharp は VCC (VRChat Creator Companion) を使用してインストールすることを推奨します。
:::

## インストール手順

### 1. パッケージのダウンロード

[BOOTH](https://lurathunder.booth.pm/) から LuraSwitch2 の最新版をダウンロードします。

### 2. UnityPackage のインポート

1. Unity プロジェクトを開く
2. ダウンロードした `.unitypackage` ファイルをダブルクリック
3. インポートダイアログで「Import」をクリック

:::tip
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

## 次のステップ

インストールが完了したら、[基本的な使い方](./basic-usage.md) を参照して、最初のギミックを設置してみましょう。
