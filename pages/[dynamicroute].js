import Head from "next/head";
import { useRouter } from "next/router";

const DynamicRoute = () => {
  const router = useRouter();
  return (
    <div>
      <div>I am the dynamic route page for {router.query.dynamicroute}</div>
      <Head>
        <title>{router.query.dynamicroute}</title>
        <meta
          name="description"
          content="A place to search for the best coffee shops around"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default DynamicRoute;
