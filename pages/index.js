import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";
import styles from "../styles/Home.module.css";

import coffeeStoresData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: { coffeeStores: coffeeStoresData },
  };
}

export default function Home(props) {
  const handleOnBannerBtnClick = () => {
    console.log("The banner button works!");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Lover</title>
        <meta
          name="description"
          content="A place to search for the best coffee shops around"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} />
        </div>

        {props.coffeeStores.length > 0 && (
          <div>
            <h2 className={styles.heading2}>Bucharest stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map(({ id, name, imgUrl, websiteUrl }) => (
                <Card
                  key={id}
                  name={name}
                  imgUrl={imgUrl}
                  href={`/coffee-store/${id}`}
                  className={styles.card}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
