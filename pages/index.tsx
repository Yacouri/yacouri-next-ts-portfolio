import type { InferGetStaticPropsType, NextPage } from 'next';
import Blog from '../components/Blog';
import SEO from '../components/common/SEO';
import Contact from '../components/Contact';
import Heading from '../components/Heading';
import Infos from '../components/Infos';
import { getArticles } from '../services/Blog';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => {
  return (
    <div>
      <SEO
        description="I'm Zouhir Yaçouri AKA YACOURI, a front end web developer & self-taught Ui/Ux designer as well."
        title="Home"
      />
      <div id="home">
        <Heading />
      </div>
      <div id="about">
        <Infos />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Blog blogs={data} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await getArticles();
  return {
    props: data
  };
};
