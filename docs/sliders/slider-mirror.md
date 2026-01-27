---
sidebar_position: 4
---

# Slider_Mirror

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Slider_Mirror_3D.png').default} alt="Slider_Mirror 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Slider_Mirror_2D.png').default} alt="Slider_Mirror 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

ミラーの解像度を調整するスライダーです。

## 機能

VRChat のミラーコンポーネントの解像度を連続的に調整できます。

プレイヤーが自分のパフォーマンスに合わせてミラーの品質を調整できるようにします。

## パラメータ

| パラメータ | 説明 | デフォルト値 |
|----------|------|------------|
| Min Resolution | 最小解像度 | 256 |
| Max Resolution | 最大解像度 | 2048 |
| DefaultValue | 初期値（0-1） | 0.5 |
| SyncMode | 同期モード | None |

:::info
ミラーの解像度は個人のパフォーマンスに依存するため、**SyncMode** は **None** に設定します。
:::

## LuraMirror との連携

Slider_Mirror は **LuraMirror** と組み合わせて使用することを想定しています。

### 設定方法

1. `Slider_Mirror.prefab` をシーンに配置
2. Inspector の **====TargetSetting====** を開く
3. **MirrorControllers** に LuraMirror の MirrorController を設定

![TargetSetting Inspector](/img/Slider_Mirror_TargetSetting_Inspector.jpg)

詳しくは [LuraMirror](../utilities/lura-mirror.md) のページをご覧ください。

## 使い方

### 基本的な設置

1. LuraMirror を先に設置
2. `Slider_Mirror.prefab` を配置
3. MirrorControllers を設定

### 解像度範囲の設定

PCスペックに応じて範囲を調整：

```
低スペック向け:
  Min: 256
  Max: 1024

高スペック向け:
  Min: 512
  Max: 2048
```

## パフォーマンスへの影響

:::warning
ミラーの解像度を上げると **VRAM** と **パフォーマンス** に大きな影響があります。

**最大解像度は2048程度**に留めることを推奨します。
:::

### 解像度とVRAM使用量

| 解像度 | VRAM使用量（目安） |
|--------|------------------|
| 256 | 低負荷 |
| 512 | 中負荷 |
| 1024 | 高負荷 |
| 2048 | 非常に高負荷 |

## Quest対応

:::tip
**Quest ユーザー向け**に、低解像度のデフォルト値を設定することを推奨します。

```
DefaultValue: 0.2（20% = 約410程度）
```

Quest ではミラー自体が使用できないため、PC用の設定となります。
:::

## ベストプラクティス

### 段階的な品質設定

3段階の品質設定を用意する例：

- **低品質**: 256
- **中品質**: 512
- **高品質**: 1024

### 推奨設定

```
Min Resolution: 256
Max Resolution: 1024（2048は上級者向け）
DefaultValue: 0.5（中間値）
SyncMode: None（個人設定）
```

## 関連コンポーネント

- [Switch_Mirror](../switches/object-switches.md#switch_mirror) - ミラーのオン/オフ
- [Slider_MirrorRotate](./slider-mirror-rotate.md) - ミラーの回転
- [LuraMirror](../utilities/lura-mirror.md) - 高性能ミラーシステム
- [ModeSwitch_Mirror](../mode-switch/mode-switch-mirror.md) - HQ/LQ切り替え