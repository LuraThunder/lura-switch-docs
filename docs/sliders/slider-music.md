---
sidebar_position: 10
---

# Slider_Music

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Slider_Music_3D.png').default} alt="Slider_Music 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Slider_Music_2D.png').default} alt="Slider_Music 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

音楽プレイヤーの音量を調整するスライダーです。

## 機能

音楽再生専用のスライダーです。Slider_Audio と似ていますが、音楽プレイヤーに特化した機能を持っています。

## パラメータ

| パラメータ | 説明 | デフォルト値 |
|----------|------|------------|
| Target Audio Source | 制御対象のオーディオソース | なし（必須） |
| Min Volume | 最小音量 | 0 |
| Max Volume | 最大音量 | 1.0 |
| DefaultValue | 初期値（0-1） | 0.5 |
| SyncMode | 同期モード | None |
| SliderDirection | 向き | Vertical |

## 使い方

1. `Slider_Music.prefab` をシーンに配置
2. **Target Audio Source** に音楽用のAudio Sourceを設定
3. **SyncMode** を選択（個人設定の場合はNone）
4. **SliderDirection** を選択（Vertical/Horizontal）

## Slider_Audio との違い

Slider_Music は音楽再生に特化しており、以下の点で異なります：

- 音楽プレイヤー向けのUI
- BGM制御に最適化

## 用途例

### BGM音量調整

```
Target: BGM Audio Source
SyncMode: None（個人設定）
DefaultValue: 0.5
```

### ジュークボックス

```
複数の音楽トラックの音量を調整
SyncMode: Global（みんなで共有）
```

## ベストプラクティス

:::tip
音楽は個人の好みに大きく依存するため、SyncMode は None に設定することを推奨します。
:::

## 関連コンポーネント

- [Slider_Audio](./slider-audio.md) - オーディオの音量調整
- [Switch_Music](../switches/object-switches.md#switch_music) - 音楽のオン/オフ
