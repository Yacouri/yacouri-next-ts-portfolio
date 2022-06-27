import type { NextPage } from 'next';
import Blog from '../components/Blog';
import SEO from '../components/common/SEO';
import Contact from '../components/Contact';
import Heading from '../components/Heading';
import Infos from '../components/Infos';
import { getArticles } from '../utils';

interface IResponse {
  data: [];
}
const Home: NextPage<IResponse> = ({ data }) => {
  return (
    <div>
      <SEO
        description="I'm Zouhir Yaçouri AKA YACOURI, a front end web developer & self-taught Ui/Ux designer as well."
        title="Home"
      />
      <Heading />
      <Infos />
      <Blog blogs={data} />
      <Contact />
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
