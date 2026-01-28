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

Audio Sourceの音量を調整するスライダーです。  
主にBGMなどの調整を想定しています。

## 機能

Unity の Audio Source コンポーネントの **Volume（音量）** を連続的に調整できます。


:::info
音量は個人の好みに依存するため、**SyncMode** は通常 **None** に設定します。
:::

## 使い方

1. `Slider_Audio.prefab` をシーンに配置
2. **====TargetSetting====** に制御したいAudio Sourceを設定
3. **SyncMode** を選択（個人設定の場合はNone、共有の場合はGlobal）

## 用途例

### BGM音量調整

ワールドのBGMや効果音の音量をローカルで調整


## UseAudioTaper

:::tip
**UseAudioTaper** を使うと、AudioSourceのVolumeが0-1でコントロールされるのではなく、自然なカーブになります。
:::

## 関連コンポーネント

- [Slider_Audio](./slider-audio.md) - オーディオの音量調整
- [Switch_Music](../switches/object-switches.md#switch_music) - 音楽のオン/オフ
