import Layout from "../components/Layout";
import PampaSection from "../components/pampasection";

export default function Inicio(){
    return(
        <>
            <Layout children={<PampaSection/>}/> 
        </>
    )
}