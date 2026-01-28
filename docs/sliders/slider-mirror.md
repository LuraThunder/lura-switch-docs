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

LuraMirrorの透明度を調整するスライダーです。

## 機能

LuraMirrorのミラーコンポーネントの透明度を連続的に調整できます。

プレイヤーが自分のパフォーマンスに合わせてミラーの品質を調整できるようにします。

:::info
ミラーの透明度は個人の好みに依存するため、**SyncMode** は **None** が推奨です。
:::

## LuraMirror との連携

Slider_Mirror は **LuraMirror** と組み合わせて使用することを想定しています。

### 設定方法

1. `Slider_Mirror.prefab` をシーンに配置
2. Inspector の **====TargetSetting====** を開く
3. **MirrorControllers** に LuraMirror の MirrorController を設定

![TargetSetting Inspector](/img/Slider_Mirror_TargetSetting_Inspector.jpg)

詳しくは [LuraMirror](../utilities/lura-mirror.md) のページをご覧ください。


## 関連コンポーネント

- [Switch_Mirror](../switches/object-switches.md#switch_mirror) - ミラーのオン/オフ
- [Slider_MirrorRotate](./slider-mirror-rotate.md) - ミラーの回転
- [LuraMirror](../utilities/lura-mirror.md) - 高性能ミラーシステム
- [ModeSwitch_Mirror](../mode-switch/mode-switch-mirror.md) - HQ/LQ切り替え