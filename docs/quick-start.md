---
sidebar_position: 1
---

# 🚀 LuraSwitch2 クイックスタートガイド

**「細かいことはいいから、とりあえず使いたい！」という方はここから始めましょう。**

LuraSwitch2の機能が詰まった**ミラーセット**（LuraMirror）を配置するだけで、すぐに高機能なワールド制御が体験できます。

---

## 1. まずは「ミラーセット」を置こう

面倒な設定は不要です。**LuraMirror** のPrefabをシーンにドラッグ＆ドロップするだけで、高性能な鏡がセットアップされます。

### 調整するのはこの3つだけ！

これらは `LuraMirror` の中に入っています。

#### 1. 鏡の場所を決める（`ReferenceMirror`）

このオブジェクトを移動・変形（Scale）させるだけで、好きな位置・大きさの鏡が配置できます。

#### 2. 鏡が「一番きれいに」見える範囲を決める（`FullArea`）

この範囲内では鏡の不透明度が最大になります。鏡の前など、しっかり映ってほしい場所を指定してください。

#### 3. 鏡が「起動する」範囲を決める（`StartArea`）

プレイヤーがこの範囲に入ると鏡がONになります（離れると自動でOFFになるエコ仕様です）。広くしすぎると負荷がかかるので注意しましょう。

:::tip ヒント
設定中に見え方を確認したいときは `PreviewMirrorType` を切り替えることで、ミラーの表示状態をプレビューできます。
:::

詳細は [LuraMirror のページ](./utilities/lura-mirror.md) をご覧ください。

---

## 2. スイッチ (Switch) ～ON/OFFを切り替える～

<div style={{display: 'flex', gap: '20px', marginBottom: '20px'}}>
  <div>
    <img src={require('@site/static/img/Switch_Mirror_3D.png').default} alt="Switch_Mirror 3D" style={{backgroundColor: '#000', width: '120px', height: 'auto', objectFit: 'contain'}} />
    <p style={{textAlign: 'center'}}>3Dモード</p>
  </div>
  <div>
    <img src={require('@site/static/img/Switch_Mirror_2D.png').default} alt="Switch_Mirror 2D" style={{backgroundColor: '#000', width: '120px', height: 'auto', objectFit: 'contain'}} />
    <p style={{textAlign: 'center'}}>2Dモード</p>
  </div>
</div>

ミラーセットの中に含まれている、または個別に追加するスイッチの基本です。

### 何ができるか

鏡やオブジェクトの表示/非表示を切り替えることができます。

### 使い方のコツ

#### ターゲット指定
スイッチのインスペクターにある「Targets」に、切り替えたいオブジェクトを登録するだけです。

#### ミラーの場合
`MirrorActivator` をターゲットに指定すると、鏡全体のON/OFFができます。

#### 色分け
- `Switch_Mirror`（白）: ミラーの制御用
- `Switch_Object`（オレンジ）: 汎用オブジェクト制御用

用途に合わせて色やアイコンが用意されています。

詳細は [スイッチ概要](./switches/overview.md) をご覧ください。

---

## 3. スライダー (Slider) ～数値を調整する～

10%刻みでスナップする、正確な操作感のスライダーです。

### 何ができるか

鏡の解像度や音量などを連続的に調整できます。

### 使い方のコツ

#### ミラーの解像度調整
`Slider_Mirror` を使い、ターゲット設定（TargetSetting）に `MirrorControllers` を指定すると、鏡の解像度をスライダーで操作できるようになります。

#### 縦・横の変更
使いにくい場合は `Vertical`（縦）と `Horizontal`（横）を自由に切り替えられます。

詳細は [スライダー概要](./sliders/overview.md) をご覧ください。

---

## 4. モードスイッチ (ModeSwitch) ～どれか1つを選ぶ～

複数の選択肢から1つだけを選択させたい時に使用します。

### 何ができるか

ミラーの高画質(HQ)と低画質(LQ)の切り替えなどに便利です。

### 使い方のコツ

#### HQ/LQ切り替え
`ModeSwitch_Mirror_x2` を使用します。中にある `SwitchA` にHQ用のアクティベーター、`SwitchB` にLQ用のアクティベーターをセットするだけで、排他制御（片方をONにすると片方がOFFになる）が実現します。

詳細は [モードスイッチ概要](./mode-switch/overview.md) をご覧ください。

---

## 5. SwitchBoard ～手元で操作する～

スイッチを壁に並べる必要はありません。

### 何ができるか

2Dモードの操作パネルを自動配置します。

### すごいところ

ワールド内の「ホルダー」がある場所に、自動的に移動してきます。つまり、スイッチボードを1つ作っておけば、ユーザーの近くにあるホルダーへ自動的に移動するため、あちこちにスイッチを配置する手間が省けます。

詳細は [SwitchBoard のページ](./utilities/switch-board.md) をご覧ください。

---

## 6. SwitchSyncer ～連動させる～

少し高度な機能ですが、知っておくと便利です。

### 何ができるか

離れた場所にある複数のスイッチやスライダーを「同期」させます。

### 使い方のコツ

「こっちのスイッチを押したら、あっちのスライダーも連動してほしい」という時に、これを使って指定するだけで簡単に連動させることができます。

詳細は [SwitchSyncer のページ](./utilities/switch-syncer.md) をご覧ください。

---

## 次のステップ

まずはミラーセットのPrefabを置いて、`ReferenceMirror` を動かすところから始めてみましょう！

さらに詳しい情報は以下のページをご覧ください：

- [詳細なインストール手順](./getting-started/installation.md)
- [基本的な使い方](./getting-started/basic-usage.md)
- [全機能一覧](./intro.md)
