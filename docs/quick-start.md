---
sidebar_position: 1
---

# 🚀 クイックスタートガイド

LuraSwitch2 を最速で導入するための実践的なガイドです。基本的な機能を実際に設置しながら学んでいきましょう。

---

## 1️⃣ まずは「ミラーセット」を配置しよう

手軽に始めるためにはLuraSwitch2 の機能が一通り揃った
 `*LuraMirror_SwitchSet[SAMPLE]` プレハブを配置することから始めましょう。

### プレハブの配置

![LuraMirrorSet Prefab](../static/img/LuraMirrorSet_Prefab.png)

プロジェクトウィンドウから `LuraMirror_SwitchSet[SAMPLE]` をシーンにドラッグ＆ドロップしてください。

### 基本的な調整手順

ミラーセットには以下の重要なコンポーネントが含まれています。

  - **LuraMirror（ミラー本体）**  
  - **Switch（ミラースイッチ）**
  - **Slider（スライダー）**
  - **ModeSwitch（HQ／LQ 切り替えスイッチ）**
  - **SwitchSyncer（スイッチ連動用Prefab）**
  - **SwitchBoard（2Dスイッチを配置可能なボード）**

### ステップ 1: 鏡の配置を調整する

![LuraMirror調整 1-1](../static/img/LuraMirror_1-1.jpg)
![LuraMirror調整 1-2](../static/img/LuraMirror_1-2.jpg)

ヒエラルキー内の `ReferenceMirror` オブジェクトを選択し、Position・Rotation・Scale を調整して、鏡を好みの位置・サイズに配置してください。



### ステップ 2: エリアの設定を行う

![Mirror Area](../static/img/Mirror_Area.png)

ミラーシステムには2つのエリア設定があります。

![LuraMirror Area Inspector](../static/img/LuraMirror_Area_Inspector.jpg)

- **FullArea（フルエリア）**: 鏡が最高品質で表示される範囲を設定します。通常、鏡の正面に配置します。
- **StartArea（スタートエリア）**: プレイヤーがこの範囲に入ると鏡が起動します。負荷管理のため、適切なサイズに調整してください。

:::tip 💡 プレビュー機能を活用しよう
エディタ上で鏡の見え方を確認したい場合は、`PreviewMirrorType` を切り替えてください。

<div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
  <img src={require('@site/static/img/Mirror_PreviewMode_Inspector.jpg').default} alt="Mirror Preview Inspector" style={{maxWidth: '300px', height: 'auto'}} />
  <img src={require('@site/static/img/Mirror_HQPreview.jpg').default} alt="Mirror HQ Preview" style={{maxWidth: '300px', height: 'auto'}} />
</div>

※ 鏡が真っ白で表示される場合は、Unity エディタ上で一度 Play モードに入ることで正しく表示されるようになります。
:::

詳細については [LuraMirror のページ](./utilities/lura-mirror.md) をご覧ください。

---

## 2️⃣ スイッチを使いこなそう

### ミラーセットに含まれるスイッチ

<img src={require('@site/static/img/Switch_Mirror_3D.png').default} alt="Switch Mirror 3D" style={{maxWidth: '300px', height: 'auto', display: 'block', margin: '20px 0'}} />

ミラーセットには `Switch_Mirror` が含まれています。これは鏡のオン・オフを切り替えるための専用スイッチです。  

### スイッチの基本

スイッチは **オン・オフの2状態** を切り替えるコンポーネントです。ライトの点灯・消灯、オブジェクトの表示・非表示など、様々な要素を制御できます。

### ターゲットの指定方法

![Switch Target Inspector](../static/img/Switch_Target_Inspector.jpg)

スイッチのインスペクタで、制御対象を指定します。

- **On Targets**: オン状態でアクティブになるオブジェクト
- **Off Targets**: オン状態で非アクティブになるオブジェクト

:::tip 💡 旧 LuraSwitch との違い
旧版は Toggle 方式でしたが、**LuraSwitch2 では On 状態と Off 状態を明確に区別**します。これにより、より直感的で予測可能な動作を実現しています。
:::

:::tip 💡 ミラーセットPrefab
ミラーセットに含まれているスイッチには既にミラーを起動するためのActivatorがターゲットが設定されているため変更する必要はありません。
:::

### 同期モード (SyncMode)

![Switch SyncMode Inspector](../static/img/Switch_SyncMode_Inspector.jpg)

- **None**: 同期なし（各プレイヤー個別に動作）
- **Global**: 全プレイヤーで状態を同期
- **Local**: ローカルに保存（ワールドセーブ）

### デフォルト状態の切り替え

![Switch ToggleDefaultOn Inspector](../static/img/Switch_ToggleDefaultOn_Inspector.jpg)

`ToggleDefaultOn` を切り替えることで、スイッチの初期状態（オン・オフ）を設定できます。

:::tip 💡 エディタプレビュー
この設定を変更すると、**Unity エディタ上でも即座にスイッチと、設定したオブジェクトの見た目が変化**します。  
Play モードに入らなくても、視覚的に状態を確認できます。
:::

### 多様なスイッチバリエーション

LuraSwitch2 では、用途に応じて多彩なデザインのスイッチを用意しています。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px', margin: '20px 0'}}>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Switch_Object_3D.png').default} alt="Switch Object" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Object（オブジェクト）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Switch_Pen_3D.png').default} alt="Switch Pen" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Pen（ペン）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Switch_Key_3D.png').default} alt="Switch Key" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Key（キー）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Switch_Audio_3D.png').default} alt="Switch Audio" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Audio（オーディオ）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Switch_Video_3D.png').default} alt="Switch Video" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Video（ビデオ）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Switch_Music_3D.png').default} alt="Switch Music" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Music（音楽）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Switch_Chair_3D.png').default} alt="Switch Chair" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Chair（椅子）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Switch_LiteMode_3D.png').default} alt="Switch LiteMode" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>LiteMode（軽量モード）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Switch_Bed_3D.png').default} alt="Switch Bed" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Bed（ベッド）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Switch_Collider_3D.png').default} alt="Switch Collider" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Collider（コライダー）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Switch_PostEffect_3D.png').default} alt="Switch PostEffect" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>PostEffect（ポストエフェクト）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Switch_Night_3D.png').default} alt="Switch Night" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Night（昼夜切替）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Switch_Effect_3D.png').default} alt="Switch Effect" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Effect（エフェクト）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Switch_AvatarLight_3D.png').default} alt="Switch AvatarLight" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>AvatarLight（アバターライト）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Switch_Light_3D.png').default} alt="Switch Light" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Light（ライト）</p>
  </div>
</div>

スイッチの詳細な機能については、[スイッチ概要ページ](./switches/overview.md) をご覧ください。

---

## 3️⃣ スライダーでミラー透明度をコントロールしよう

### ミラーセットに含まれるスライダー

<img src={require('@site/static/img/Slider_Mirror_3D.png').default} alt="Slider Mirror 3D" style={{maxWidth: '300px', height: 'auto', display: 'block', margin: '20px 0'}} />

`Slider_Mirror` は鏡の透明度を段階的に調整できるスライダーです。

### スライダーの基本

スライダーは **0〜100% の連続的な値** を調整するコンポーネントです。10% 刻みでスナップするため、正確な値設定が簡単に行えます。

### ターゲット設定 (TargetSetting)

![Slider Mirror TargetSetting Inspector](../static/img/Slider_Mirror_TargetSetting_Inspector.jpg)

スライダーのインスペクタで、制御対象とパラメータを指定します。ミラーの解像度、ライトの明るさ、音量など、用途に応じた設定が可能です。

### 同期モード (SyncMode)

![Slider SyncMode Inspector](../static/img/Slider_SyncMode_Inspector.jpg)

- **None**: 同期なし（各プレイヤー個別に調整）
- **Global**: 全プレイヤーで値を同期
- **Local**: ローカルに保存（次回訪問時も設定を保持）

### デフォルト値の設定

![Slider DefaultValue Inspector](../static/img/Slider_DefaultValue_Inspector.jpg)

`DefaultValue` で、スライダーの初期値（0〜100%）を設定できます。

:::tip 💡 推奨設定
- **ローカル**（ミラー透明度、音量など）: 基本的には `Local` モードが推奨です。
- **グローバル**（演出の変更など）: `Global` モードで全員に同じ設定を適用できます。
:::

### 機能別スライダーバリエーション

用途に応じた専用スライダーを多数用意しています。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px', margin: '20px 0'}}>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Slider_MirrorRotate_3D.png').default} alt="Slider MirrorRotate" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>MirrorRotate（鏡回転）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Slider_Object_3D.png').default} alt="Slider Object" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Object（オブジェクト）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Slider_Music_3D.png').default} alt="Slider Music" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Music（音楽）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Slider_Audio_3D.png').default} alt="Slider Audio" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Audio（オーディオ）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Slider_AvatarLight_3D.png').default} alt="Slider AvatarLight" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>AvatarLight（アバターライト）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Slider_Light_3D.png').default} alt="Slider Light" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Light（ライト）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Slider_Collider_3D.png').default} alt="Slider Collider" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Collider（コライダー）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Slider_Night_3D.png').default} alt="Slider Night" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>Night（昼夜切替）</p>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/Slider_PostEffect_3D.png').default} alt="Slider PostEffect" style={{backgroundColor: '#000', width: '100%', height: 'auto'}} />
    <p>PostEffect（ポストエフェクト）</p>
  </div>
</div>

詳細については [スライダー概要ページ](./sliders/overview.md) をご覧ください。

---

## 4️⃣ モードスイッチで複数の選択肢を管理しよう 🔀

<img src={require('@site/static/img/ModeSwitch_Mirror_x2_3D.png').default} alt="ModeSwitch Mirror x2" style={{maxWidth: '300px', height: 'auto', display: 'block', margin: '20px 0'}} />

モードスイッチは、複数の状態から1つだけを選択する **排他制御** を実現します。

### 内部構造

![ModeSwitch Hierarchy](../static/img/ModeSwitch_Hierarchy.jpg)

モードスイッチには通常のスイッチが2つ（`SwitchA` と `SwitchB`）内包されています。それぞれのスイッチでターゲットを個別に設定できます。

### 設定方法

同期設定やデフォルト値の管理は、親オブジェクトの `ModeSwitch` 本体にある `SwitchSelector` コンポーネントで行います。

:::tip 💡 使用例：ミラーの HQ/LQ 切り替え
- **SwitchA** に HQ ミラーのアクティベーターを設定
- **SwitchB** に LQ ミラーのアクティベーターを設定

これで、どちらか一方だけが有効になる排他制御が完成します。プレイヤーは自分の環境に合わせて鏡のHQ／LQを選択できます。
:::

詳細については [モードスイッチ概要ページ](./mode-switch/overview.md) をご覧ください。

---

## 5️⃣ 2D切り替え機能で見た目を変更しよう

<img src={require('@site/static/img/thumb_3D2D.png').default} alt="3D/2D切替" style={{maxWidth: '400px', height: 'auto', display: 'block', margin: '20px 0'}} />

すべてのスイッチとスライダーは **3Dモード** と **2Dモード** を簡単に切り替えられます。用途に合わせて最適な操作方法を選択してください。

### 3つの操作モード

| モード          | 説明                                                                                                               | 用途             |
| --------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------- |
| **2D_Interact** | 2Dモード。トリガーに直接インタラクトする方式。近づく必要がありますが、レーザーポインターを向ける必要がありません。 | 押しやすいパネル |
| **2D_UI**       | 2Dモード。レーザーポインターで操作する方式。離れた場所からレーザーによる操作が可能です。                           | UIパネル         |
| **3D**          | 3Dモード。トリガーをインタラクトする従来の方式。                                                                   | 物理スイッチ     |

---

## 6️⃣ SwitchBoard で操作パネルを作ろう 

<img src={require('@site/static/img/LuraSwitchBoard_With2DSwitches.png').default} alt="LuraSwitchBoard With 2D Switches" style={{maxWidth: '400px', height: 'auto', display: 'block', margin: '20px 0'}} />

`SwitchBoard` は、2Dモードのスイッチ・スライダーを一箇所に集約する操作パネルです。

### セットアップ手順

<img src={require('@site/static/img/LuraSwitchBoard.png').default} alt="LuraSwitchBoard" style={{maxWidth: '400px', height: 'auto', display: 'block', margin: '20px 0'}} />


ヒエラルキー内の `■■■■SwitchHere■■■■` の子として、2Dモードのスイッチやスライダーを配置してください。

![LuraSwitchBoard Hierarchy](../static/img/LuraSwitchBoard_Hierarchy.jpg)




### ホルダーシステム

<img src={require('@site/static/img/LuraSwitchBoard_Holder.png').default} alt="LuraSwitchBoard Holder" style={{maxWidth: '400px', height: 'auto', display: 'block', margin: '20px 0'}} />

`SwitchBoard` は、指定した最も近い `SwitchBoardHolder` の位置に自動的に移動します。

![LuraSwitchBoard Inspector](../static/img/LuraSwitchBoard_Inspector.jpg)

インスペクタで `SwitchBoardHolder` を指定することで、移動・呼び出しが可能になります。



### 動作モード

- **Pickup モード**: プレイヤーが持ち運べる可搬型パネル
- **Static モード**: 壁面などに固定された据え置き型パネル

:::tip 💡 効率的な配置のコツ
- **複数のホルダーを配置**: ワールド内の各エリアに `SwitchBoardHolder` を配置し、Holdersに指定することで、プレイヤーの最寄りの位置に操作パネルが移動します。
- **Pickup ／ Static**: 持ち運びたい場合は Pickup モード、壁に固定したい場合は Static モードを選択してください。  
:::  

    
詳細については [SwitchBoard のページ](./utilities/switch-board.md) をご覧ください。

---

## 7️⃣ SwitchSyncer でスイッチを連動させよう 🔗

![SwitchSyncer Switches](../static/img/SwitchSyncer_Switches.png)
![SwitchSyncer Switches Active](../static/img/SwitchSyncer_Switches_Active.png)

`SwitchSyncer` は、複数のスイッチやスライダーの状態を連動させるためのツールです。

### 使い方

![SwitchSyncer Inspector](../static/img/SwitchSyncer_Inspector.jpg)

SwitchSyncerにスイッチを指定するだけで、それらのスイッチが同期されるようになります。

:::tip 💡 ベストプラクティス
複数のスイッチを常に連動させる場合、**ターゲットの参照設定は1つのスイッチだけで行い**、残りのスイッチは `SwitchSyncer` で連動させる構成にすると、セットアップと保守が大幅に簡素化されます。
:::

詳細については [SwitchSyncer のページ](./utilities/switch-syncer.md) をご覧ください。

---

## 次のステップ 🎯

基本的な使い方を理解できたら、以下のページで詳細を確認してください：

- 🎓 [基本的な使い方](./getting-started/basic-usage.md)
