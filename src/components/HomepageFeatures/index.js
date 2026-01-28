import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'スイッチ&スライダー',
    image: require('@site/static/img/topImage_1.png').default,
    description: (
      <>
        簡単操作でワールド内の様々な要素をコントロール可能。オブジェクトのオン／オフやギミックの起動など、多彩な機能を簡単に実装できます。
      </>
    ),
  },
  {
    title: '高機能なミラーPrefab',
    image: require('@site/static/img/topImage_2.png').default,
    description: (
      <>
        近づいたらフェードして、離れたら自動的にオフになるミラーPrefabを同梱。パフォーマンスに配慮しつつ、自然で美しい体験を実現します。
      </>
    ),
  },
  {
    title: '3D／2D切り替え機能',
    image: require('@site/static/img/LuraSwitch2-social-card.png').default,
    description: (
      <>
        3Dモードと2Dモードをシームレスに切り替え可能。ワールド制作者の好みや世界観に応じた最適な表示方法を提供します。
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} style={{aspectRatio: '16/9', objectFit: 'contain', width: '100%'}} />
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
