import Head from 'next/head';
import React from 'react';
import { siteInfos } from '../../utils';

interface ISEO {
  title: string;
  description: string;
}

const SEO = ({ title, description }: ISEO) => {
  return (
    <Head>
      <title>{`Yacouri - ${title}`}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:creator" content={siteInfos.media.twitter} />
      <meta name="twitter:site" content={siteInfos.media.twitter} />
      <meta name="twitter:description" content={description} />
      <meta name="author" content="Zouhir Yacouri" data-react-helmet="true" />
    </Head>
  );
};

export default SEO;
