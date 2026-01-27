---
sidebar_position: 1
---

# カスタマイズガイド

LuraSwitch2 のコンポーネントをカスタマイズする方法を説明します。

## スクリプトのカスタマイズ

LuraSwitch2 のスクリプトは UdonSharp で書かれており、自由に編集できます。

### スクリプトの場所

すべてのコアスクリプトは以下の場所にあります：

```
Assets/QuickBrown/LuraSwitch2/02_CORE/
├── 01_Switch/      # Switch系のスクリプト
├── 02_Slider/      # Slider系のスクリプト
├── 03_ModeSwitch/  # ModeSwitch系のスクリプト
└── 90_COMMON/      # 共通スクリプト
```

### 基本的な編集方法

1. スクリプトファイルを開く（.cs ファイル）
2. Visual Studio または任意のエディタで編集
3. 保存すると UdonSharp が自動的に再コンパイル

:::warning
スクリプトを編集する際は、必ずバックアップを取ってください。
:::

## UI のカスタマイズ

プレハブの見た目を変更する方法を説明します。

### マテリアルの変更

1. プレハブをシーンに配置
2. UI パーツのマテリアルを選択
3. 色やテクスチャを変更

### サイズと位置の調整

1. Transform コンポーネントで位置、回転、スケールを調整
2. Rect Transform（UI の場合）でサイズを調整

### 完全にカスタムUIに置き換え

1. 既存の UI パーツを削除
2. 独自の UI を作成
3. Udon スクリプトが参照している GameObject を再設定

## 新しいコンポーネントの作成

既存のコンポーネントをベースに、新しいコンポーネントを作成できます。

### 手順

1. 既存のスクリプトを複製
2. クラス名とファイル名を変更
3. 必要な機能を追加
4. プレハブとして保存

### 例：カスタム Switch の作成

```csharp
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;

public class Switch_Custom : UdonSharpBehaviour
{
    [Header("設定")]
    public GameObject targetObject;
    public bool defaultState = false;
    
    [Header("同期")]
    [UdonSynced]
    private bool isEnabled;
    
    private void Start()
    {
        isEnabled = defaultState;
        ApplyState();
    }
    
    public void Toggle()
    {
        isEnabled = !isEnabled;
        ApplyState();
        RequestSerialization();
    }
    
    private void ApplyState()
    {
        if (targetObject != null)
        {
            targetObject.SetActive(isEnabled);
        }
    }
    
    public override void OnDeserialization()
    {
        ApplyState();
    }
}
```

## パフォーマンス最適化

### ライトの最適化

- **ベイクドライトを使用**: リアルタイムライトの代わりにベイクドライトを使用
- **ライト数の削減**: 必要最小限のライト数に抑える
- **範囲の調整**: ライトの Range を適切に設定

### オブジェクトの最適化

- **不要なコライダーを削除**: 当たり判定が不要なオブジェクトのコライダーを削除
- **オクルージョンカリング**: 大きなワールドではオクルージョンカリングを使用
- **LOD の使用**: 距離に応じて詳細度を変える

### 同期の最適化

- **必要な部分のみ同期**: 個人設定は Sync を false に
- **同期頻度の調整**: 頻繁に変更されない値は手動同期

## ベストプラクティス

### 命名規則

わかりやすい名前を付けることで、管理が容易になります：

```
Switch_MyLight_01
Switch_MyLight_02
Slider_BGM_Volume
```

### プレハブのバリアント

Unity のプレハブバリアント機能を使用して、カスタマイズを管理：

1. 元のプレハブを右クリック
2. "Create > Prefab Variant" を選択
3. バリアントをカスタマイズ

### テストワールド

本番ワールドとは別に、テスト用ワールドを作成することを推奨します。

## サンプルコード集

### 複数オブジェクトの順次切り替え

```csharp
public class SequentialSwitch : UdonSharpBehaviour
{
    public GameObject[] objects;
    private int currentIndex = 0;
    
    public void Next()
    {
        objects[currentIndex].SetActive(false);
        currentIndex = (currentIndex + 1) % objects.Length;
        objects[currentIndex].SetActive(true);
    }
}
```

### タイマー付きスイッチ

```csharp
public class TimedSwitch : UdonSharpBehaviour
{
    public GameObject targetObject;
    public float duration = 5f;
    private bool isActive = false;
    
    public void Activate()
    {
        if (!isActive)
        {
            isActive = true;
            targetObject.SetActive(true);
            SendCustomEventDelayedSeconds(nameof(Deactivate), duration);
        }
    }
    
    public void Deactivate()
    {
        isActive = false;
        targetObject.SetActive(false);
    }
}
```

## 次のステップ

カスタマイズについてさらに学びたい場合は：

- [UdonSharp 公式ドキュメント](https://udonsharp.docs.vrchat.com/)
- [VRChat Creator Docs](https://creators.vrchat.com/)
