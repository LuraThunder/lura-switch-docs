import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '簡単に使える',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        プレハブをドラッグ&ドロップするだけで、様々なギミックをワールドに追加できます。
        VRChatのUdonやアニメーションの知識がなくても簡単に使えます。
      </>
    ),
  },
  {
    title: '豊富なコンポーネント',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Switch（オン/オフ切り替え）とSlider（連続値調整）の2種類のインターフェースで、
        ライト、オーディオ、オブジェクト表示など様々な要素を制御できます。
      </>
    ),
  },
  {
    title: 'VRChat向けに最適化',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        VRChatのUdon Sharpを使用し、Quest対応や軽量化にも配慮。
        ワールド制作者が自由にカスタマイズできる柔軟な設計です。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
