---
sidebar_position: 2
---

# オブジェクト切り替えスイッチ

ターゲットオブジェクトのアクティブ状態を切り替えるスイッチの一覧です。

## White カテゴリ

### Switch_Mirror

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Mirror_3D.png').default} alt="Switch_Mirror 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Mirror_2D.png').default} alt="Switch_Mirror 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

ミラーのオン/オフを切り替えるスイッチです。

**使い方**: LuraMirrorの `MirrorActivator` をTargetに指定することで、ミラー全体のオン/オフを切り替えます。

**詳細**: [LuraMirror](../utilities/lura-mirror.md) のページを参照してください。

---

## Orange カテゴリ

### Switch_Object

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Object_3D.png').default} alt="Switch_Object 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Object_2D.png').default} alt="Switch_Object 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

任意のGameObjectの表示/非表示を切り替えます。

**用途例**
- 装飾オブジェクトの表示/非表示
- 秘密の部屋の出現
- 季節ごとのデコレーション切り替え

**設定項目**
- **On Targets**: オン時に表示するオブジェクト
- **Off Targets**: オン時に非表示にするオブジェクト

### Switch_Pen

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Pen_3D.png').default} alt="Switch_Pen 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Pen_2D.png').default} alt="Switch_Pen 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

ペン機能の有効/無効を切り替えます。

**用途例**: お絵描きボードのペン機能制御

### Switch_Key

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Key_3D.png').default} alt="Switch_Key 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Key_2D.png').default} alt="Switch_Key 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

キー機能の有効/無効を切り替えます。

**用途例**:
- 特定のギミッ
---

## Pink カテゴリ

### Switch_Audio

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Audio_3D.png').default} alt="Switch_Audio 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Audio_2D.png').default} alt="Switch_Audio 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

Audio Sourceの再生/停止を制御します。

**用途例**
- BGMのオン/オフ
- 効果音の制御
- 環境音の切り替え

**設定項目**
- **On Targets**: 再生するAudio Sourceを含むオブジェクト
- **Off Targets**: 停止するAudio Sourceを含むオブジェクト

**注意**: Audio Sourceの「Play On Awake」は無効にしてください。

### Switch_Video

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Video_3D.png').default} alt="Switch_Video 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Video_2D.png').default} alt="Switch_Video 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

Video Playerの再生/停止を制御します。

**用途例**
- シアタースクリーン
- 動画広告の制御
- チュートリアル動画の再生

### Switch_Music

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Music_3D.png').default} alt="Switch_Music 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Music_2D.png').default} alt="Switch_Music 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

音楽プレイヤーの制御に特化したスイッチです。

**Switch_Audioとの違い**: 音楽再生に最適化された制御機能を提供します。

---

## Blue カテゴリ

### Switch_Chair

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Chair_3D.png').default} alt="Switch_Chair 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Chair_2D.png').default} alt="Switch_Chair 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

椅子（VRC Station）の有効/無効を切り替えます。

**用途例**
- 座れる椅子のオン/オフ
- 特定の時間だけ座れる椅子

### Switch_LiteMode

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_LiteMode_3D.png').default} alt="Switch_LiteMode 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_LiteMode_2D.png').default} alt="Switch_LiteMode 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

軽量モードの切り替えを行います。

**用途例**
- パフォーマンス最適化
- Quest向けの軽量モード切り替え

### Switch_VROnly

VR専用機能の切り替えを行います。

**用途例**: VRユーザー向けギミックの制御

---

## Green カテゴリ

### Switch_Bed

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Bed_3D.png').default} alt="Switch_Bed 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Bed_2D.png').default} alt="Switch_Bed 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

ベッド（VRC Station）の有効/無効を切り替えます。

**用途例**: 寝られるベッドのオン/オフ

### Switch_Collider

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Collider_3D.png').default} alt="Switch_Collider 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Collider_2D.png').default} alt="Switch_Collider 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

Colliderの有効/無効を切り替えます。

**用途例**:
- 可動式の壁
- 通行制限の切り替え
- ギミックの当たり判定制御

**注意**: コライダーを無効にすると、プレイヤーがすり抜けられるようになります。

---

## Purple カテゴリ

### Switch_PostEffect

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_PostEffect_3D.png').default} alt="Switch_PostEffect 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_PostEffect_2D.png').default} alt="Switch_PostEffect 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

ポストエフェクトのオン/オフを切り替えます。

**用途例**
- カメラエフェクトの制御
- 演出用エフェクト

### Switch_Night

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Night_3D.png').default} alt="Switch_Night 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Night_2D.png').default} alt="Switch_Night 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

昼夜の切り替えを行います。

**用途例**
- 時間帯の切り替え
- ライティングの一括変更

### Switch_Effect

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Effect_3D.png').default} alt="Switch_Effect 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Effect_2D.png').default} alt="Switch_Effect 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

各種エフェクトの制御を行います。

**用途例**
- パーティクルエフェクト
- 視覚効果の制御

---

## Warm カテゴリ

### Switch_AvatarLight

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_AvatarLight_3D.png').default} alt="Switch_AvatarLight 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_AvatarLight_2D.png').default} alt="Switch_AvatarLight 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

アバターライトのオン/オフを切り替えます。

**用途例**
- アバターを照らすライトの制御
- 撮影用ライティング

### Switch_Light

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Light_3D.png').default} alt="Switch_Light 3D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Light_2D.png').default} alt="Switch_Light 2D" style={{backgroundColor: '#000'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

通常のLightコンポーネントのオン/オフを切り替えます。

**用途例**
- 室内照明の制御
- ステージライト
- 雰囲気ライト

**Quest対応**: リアルタイムライトは負荷が高いため、ベイクドライトの使用を検討してください。

---

## 共通の使い方

1. プレハブをシーンに配置
2. Inspector で On Targets / Off Targets を設定
3. SyncMode を選択（Global/Local/None）
4. SwitchVisualMode で見た目を選択（3D/2D）
5. 必要に応じて SwitchText を設定

## 次のステップ

- [外部スクリプト呼び出しスイッチ](./function-switches.md)
- [スライダー](../sliders/overview.md)
- [モードスイッチ](../mode-switch/overview.md)