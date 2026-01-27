---
sidebar_position: 3
---

# Slider_Audio

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Slider_Audio_3D.png').default} alt="Slider_Audio 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Slider_Audio_2D.png').default} alt="Slider_Audio 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

Audio Sourceの音量を調整するスライダーです。

## 機能

Unity の Audio Source コンポーネントの **Volume（音量）** を連続的に調整できます。

## パラメータ

| パラメータ | 説明 | デフォルト値 |
|----------|------|------------|
| Target Audio Source | 制御対象のオーディオソース | なし（必須） |
| Min Volume | 最小音量 | 0 |
| Max Volume | 最大音量 | 1.0 |
| DefaultValue | 初期値（0-1） | 0.5 |
| SyncMode | 同期モード | None |
| SliderDirection | 向き | Vertical |

:::info
音量は個人の好みに依存するため、**SyncMode** は通常 **None** に設定します。
:::

## 使い方

1. `Slider_Audio.prefab` をシーンに配置
2. **Target Audio Source** に制御したいAudio Sourceを設定
3. **SyncMode** を選択（個人設定の場合はNone、共有の場合はGlobal）
4. **SliderDirection** を選択（Vertical/Horizontal）

## 用途例

### BGM音量調整

ワールドのBGMの音量を各プレイヤーが調整：

```
Target: BGM Audio Source
SyncMode: None（個人設定）
DefaultValue: 0.5（50%）
```

### マルチチャンネル音響

複数のオーディオソースを個別に調整：

```
Slider_Audio 1: BGM用
Slider_Audio 2: 環境音用
Slider_Audio 3: 効果音用
```

### 共有スピーカー

全員に聞こえる音量を調整：

```
SyncMode: Global（全員で共有）
```

## ベストプラクティス

:::tip
**DefaultValue** は 0.5（50%）程度に設定し、プレイヤーが上下どちらにも調整できるようにすると良いでしょう。

音が大きすぎる場合も小さすぎる場合も対応できます。
:::

## SyncMode の使い分け

| モード | 用途 |
|--------|------|
| **None** | 個人のBGM音量設定 |
| **Global** | 共有スピーカーの音量 |
| **Local** | 次回も保持したい個人設定 |

## 関連コンポーネント

- [Switch_Audio](../switches/object-switches.md#switch_audio) - オーディオの再生/停止
- [Slider_Music](./slider-music.md) - 音楽プレイヤーの音量調整