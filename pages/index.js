import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";
import styles from "../styles/Home.module.css";

import coffeeStores from "../data/coffee-stores.json";

export default function Home() {
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
        <div className={styles.cardLayout}>
          {coffeeStores.map(({ id, name, imgUrl, websiteUrl }) => (
            <Card
              key={id}
              name={name}
              imgUrl={imgUrl}
              href={websiteUrl}
              className={styles.card}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
