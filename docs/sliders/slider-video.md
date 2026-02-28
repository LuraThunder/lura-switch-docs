---
sidebar_position: 11
---

# Slider_Video (VizVid)

VizVid プレイヤーの動画音量を調整するスライダーです。


## 使い方

1. `Slider_Video.prefab` をシーンに配置
2. VizVid プレイヤーをシーンに配置
3. **====TargetSetting====** の **Targets** に VizVid本体 の **Core（UdonBehaviour）** を設定
4. `Target Variable Name` に `defaultVolume` を設定
5. **SyncMode** を選択（個人設定の場合は None、共有の場合は Global）

### ====TargetSetting==== の設定

<div style={{marginBottom: '20px'}}>
	<img src={require('@site/static/img/Slider_Video (VizVid)_Inspector.jpg').default} alt="Slider_Video (VizVid) Inspector" />
</div>

**====TargetSetting====** の **Targets** に、VizVid の **Core（UdonBehaviour）** を設定します。  
VizVidで使う場合、`Target Variable Name` は `defaultVolume` を指定します。

### VizVid 側の設定（Core）

<div style={{marginBottom: '20px'}}>
	<img src={require('@site/static/img/VizVid_Inspector.jpg').default} alt="VizVid Inspector" />
</div>

VizVid 側で設定した **Default Volume** は、`Slider_Video` の `defaultVolume` によって上書きされます。




:::warning Persistence 利用時の注意
タイミングによっては、Persistence のロード時に音量値が VizVid 側の値で再度上書きされる場合があります。  
挙動を安定させたい場合は、VizVid 側の Persistence を無効にして運用すると安定する可能性があります。
:::

## 関連コンポーネント

- [Slider_Audio](./slider-audio.md) - AudioSource の音量調整
- [Slider_Music](./slider-music.md) - BGM の音量調整
- [Switch_Music](../switches/object-switches.md#switch_music) - 音楽のオン/オフ
