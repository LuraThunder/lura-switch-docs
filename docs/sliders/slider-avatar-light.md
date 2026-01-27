---
sidebar_position: 12
---

# Slider_AvatarLight

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Slider_AvatarLight_3D.png').default} alt="Slider_AvatarLight 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Slider_AvatarLight_2D.png').default} alt="Slider_AvatarLight 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

アバターライトの明るさを調整するスライダーです。

## 機能

アバターを照らすライトの明るさを調整します。

撮影やアバター鑑賞に最適なライティングを実現できます。

## パラメータ

| パラメータ | 説明 | デフォルト値 |
|----------|------|------------|
| Target Light | 制御対象のライト | なし（必須） |
| Min Intensity | 最小の明るさ | 0 |
| Max Intensity | 最大の明るさ | 2.0 |
| DefaultValue | 初期値（0-1） | 0.5 |
| SyncMode | 同期モード | None |
| SliderDirection | 向き | Vertical |

## 使い方

1. `Slider_AvatarLight.prefab` をシーンに配置
2. **Target Light** にアバターライト用のLightを設定
3. **Max Intensity** を調整（撮影用なら2.0以上も）
4. **SyncMode** を None に（個人の好みに応じて）

## 用途例

### 撮影スタジオ

```
Target: Spot Light（アバター向け）
Min Intensity: 0.5
Max Intensity: 3.0
SyncMode: None（各自調整）
```

### アバター鑑賞エリア

```
Target: Point Light（アバター周辺）
Min Intensity: 0
Max Intensity: 1.5
DefaultValue: 0.7
```

## ベストプラクティス

:::tip
**Max Intensity** は 2.0〜3.0 程度に設定すると、撮影時に柔軟な調整が可能になります。

暗すぎる環境でも、明るくして撮影できます。
:::

## 配置のコツ

### ライトの種類

- **Spot Light**: 特定の方向からアバターを照らす
- **Point Light**: アバター周辺を全体的に照らす
- **Directional Light**: 全体を均一に照らす

### 複数ライト

複数の Slider_AvatarLight を使用して、3点照明などのプロフェッショナルなライティングも可能：

```
メインライト: 正面から
フィルライト: 斜めから（影を和らげる）
バックライト: 後ろから（輪郭を強調）
```

## 関連コンポーネント

- [Slider_Light](./slider-light.md) - 通常のライト調整
- [Switch_AvatarLight](../switches/object-switches.md#switch_avatarlight) - アバターライトのオン/オフ
