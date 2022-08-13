import Layout from "../components/Layout";
import PampaSection from "../components/pampasection";
import Carousel from '../components/Carousel';
import Card from '../components/Card';

export default function Inicio(){
    return(
        <>
            <Layout pampaSection={<PampaSection/>} carousel={<Carousel/>} InicioCards={<Card/>}/> 
        </>
    )
}