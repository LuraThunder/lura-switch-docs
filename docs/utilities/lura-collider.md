---
sidebar_position: 2
---

# LuraCollider

<img src={require('@site/static/img/LuraCollider.png').default} alt="Mirror Preview Inspector" style={{maxWidth: '600px', height: 'auto'}} />

スライダーから操作できる、高さを変更することのできるコライダーです。

## 特徴

### 🎬 アニメーション効果

高さを変更したときに、滑らかにアニメーションします。

単なるコライダーの切り替えではなく、視覚的にもわかりやすい演出付きです。

### 📐 簡単な配置

`ReferenceBox` を変形させるだけで、好きな位置にコライダーを配置できます。

## 使い方

### 1. コライダーの配置

`ReferenceBox` オブジェクトを：

- 移動
- スケール変更
- 回転

することで、コライダーの位置とサイズを調整します。

### 2. Slider_Collider との連携

LuraCollider は **Slider_Collider** と組み合わせて使用します。

1. `Slider_Collider.prefab` を配置
2. LuraCollider を Target に設定
3. スライダーで高さを調整

## 配置時の注意

:::warning 重要
コライダーに乗った状態でスライダーを操作する配置にすると、プレイヤーが動いてしまい操作ができなくなる可能性があります。

**スライダーはコライダーの範囲外に配置してください。**
:::

## 関連コンポーネント

- [Slider_Collider](../sliders/overview.md) - 高さ調整用スライダー
- [Switch_Collider](../switches/object-switches.md#switch_collider) - コライダーのオン/オフ