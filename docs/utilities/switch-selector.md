---
sidebar_position: 4
---

# SwitchSelector

<img src={require('@site/static/img/switchSelector_Inspector.jpg').default} alt="Mirror Preview Inspector"  />

複数のスイッチから **どれか 1 つだけ** を選ぶ（排他制御する）ためのコンポーネントです。  
選択状態は「選択インデックス（何番目が選ばれているか）」として扱われます。

:::tip
`ModeSwitch` の Prefab は、内部的には「通常のスイッチ複数 + SwitchSelector」で構成されています。
詳しくは [モードスイッチ概要](../mode-switch/overview.md) を参照してください。
:::

## できること

- **排他制御**: 選択肢のうち 1 つだけをアクティブにする
- **選択インデックスの管理**: デフォルトでどれがアクティブ状態にしているかを設定できます。

## 使いどころ

- HQ / LQ などの **モード切り替え**
- 昼 / 夜、通常 / 軽量、A / B / C のような **プリセット選択**

## 基本イメージ（構成例）

親オブジェクトに `SwitchSelector` があり、子として複数のスイッチ（選択肢）が並びます。

```
親オブジェクト(SwitchSelector)
├── SwitchA（選択肢 0）
├── SwitchB（選択肢 1）
└── SwitchC（選択肢 2）
```

:::tip Allow All OFF機能
**Allow All OFF が有効** : Trueになっていると、アクティブ状態のスイッチを押すとすべてのスイッチをオフにできます。  
**Allow All OFF が無効** : Falseのときは、必ずどれか1つが選ばれている状態になります。
:::

## SwitchSyncer との連携

[SwitchSyncer](./switch-syncer.md) の **Switch Selectors** に `SwitchSelector` を追加すると、
複数の `SwitchSelector` 間で **選択インデックス** を揃えることができます。


## 注意事項

:::warning
**設定のオーバーライド**

SwitchSelectorの対象となったスイッチは、`SyncMode`や`VisualMode`の設定が **`SwitchSelector`に上書き**されます。
:::

## 関連ページ

- [モードスイッチ概要](../mode-switch/overview.md)
- [SwitchSyncer](./switch-syncer.md)