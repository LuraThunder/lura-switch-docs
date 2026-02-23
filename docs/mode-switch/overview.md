---
sidebar_position: 1
---

# 🔀 モードスイッチ概要

モードスイッチ（ModeSwitch）は、複数のスイッチのうち**どれか1つだけ**をアクティブにしたい時に便利な機能です。

## 🎯 モードスイッチとは

モードスイッチを使うと、**複数の選択肢から1つだけを選ぶ スイッチ** を簡単に実装できます。

:::tip
わかりやすくするため、`ModeSwitch`という専用のPrefabを用意していますが、中身は  
通常のスイッチ × 2 ＋ [SwitchSelector](../utilities/switch-selector.md) です。
:::

### ✨ 特徴

- **排他制御**: 複数のスイッチから1つだけが選択される
- **ローカルセーブ機能**: 最後の状態を保存可能

## 💡 用途例

### 🖌️ ミラーの HQ/LQ 切り替え

- HQ ミラーと LQ ミラーのどちらか一方だけを有効化
- パフォーマンス設定として便利

### ⚙️ モード切り替え

- 昼モード・夜モード
- 通常モード・軽量モード
- シーンA / シーンB / シーンC

:::tip
デフォルトではミラー用のHQ/LQしか用意していませんが、好きな用途で利用することが可能です。  
必ずしも2つセットになっているModeSwitchを使う必要はなく、個別のスイッチで排他スイッチを実現することも簡単です。
:::

## 仕組み

モードスイッチは、内部に**複数のスイッチ**を持っています。

例：`ModeSwitch_Mirror_x2` の場合

```
ModeSwitch_Mirror_x2
├── SwitchA（HQ用）
└── SwitchB（LQ用）
```

どちらか一方のスイッチを押すと、もう一方は自動的にオフになります。  
これは [SwitchSelector](../utilities/switch-selector.md) の機能です。

:::tip
SwitchSelector の詳細解説はこちら → [SwitchSelector](../utilities/switch-selector.md)
:::

## 基本的な使い方

1. モードスイッチのプレハブを配置
2. 各スイッチ（SwitchA, SwitchB...）を開く
3. それぞれの **On Targets** を設定

### 例：HQ/LQミラーの切り替え

```
ModeSwitch_Mirror_x2 を配置
├── SwitchA
│   └── On Targets: HQ_Activator
└── SwitchB
    └── On Targets: LQ_Activator
```

詳しくは [LuraMirror](../utilities/lura-mirror.md) のページを参照してください。
