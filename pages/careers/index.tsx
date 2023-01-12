import Head from "next/head";

import { fetchCareersPageData } from "content-ui/careers/fetcher";
import CareersView from "content-ui/careers";
import type { CareersPageData } from "content-ui/careers/fetcher";

export async function getStaticProps(context) {
  const [dato] = await Promise.all([fetchCareersPageData()]);

  return {
    props: {
      dato,
    },
    // we will attempt to re-generate the page:
    // - when a request comes in
    // - at most once every minute
    revalidate: 60,
  };
}

type CareersPageProps = {
  dato: CareersPageData;
};

const CareersPage = (props: CareersPageProps) => {
  // const { title, description, image } = props.dato.seo;

  return (
    <>
      <Head>
        <link rel="icon" href="/content-ui-static/favicon.ico" />
      </Head>

      <CareersView dato={props.dato} />
    </>
  );
};

export default CareersPage;
