import Layout from "../components/Layout";
import PampaSection from "../components/pampasection";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

export default function Inicio() {
  return (
    <>
      <Layout>
        <Carousel />
        <Card description="Card algo" title="Title" />
        <PampaSection />
      </Layout>
    </>
  );
}
