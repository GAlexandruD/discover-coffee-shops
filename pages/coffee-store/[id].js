import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import cls from "classnames";

import coffeeStoresData from "../../data/coffee-stores.json";

import styles from "../../styles/coffee-store.module.css";

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id;
      }),
    },
  };
}

export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    };
  });
  return {
    // paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    paths,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleUpvoteButton = () => console.log("Handle Up Vote!");

  return (
    <div className={styles.layout}>
      Coffee Store Page {router.query.id}
      <Head>
        <title>{props.coffeeStore.name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a> Back to home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{props.coffeeStore.name}</h1>
          </div>
          <Image
            src={props.coffeeStore.imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={props.coffeeStore.name}
          />
        </div>
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/place_white_24dp.svg"
              width="24"
              height="24"
            />
            <p className={styles.text}>{props.coffeeStore.address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/near_me_white_24dp.svg"
              width="24"
              height="24"
            />
            <p className={styles.text}>
              Neighbourhood: {props.coffeeStore.neighbourhood}
            </p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/star_white_24dp.svg"
              width="24"
              height="24"
            />
            <p className={styles.text}>13</p>
          </div>

          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;
