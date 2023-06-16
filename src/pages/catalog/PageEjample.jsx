import { Footer } from "../../layout/Footer";
import { Carrousel } from "../../components/Carrousel";
import { Nav } from "../../layout/Navbar";
import '../../style/body.css';
import dataJSON from '../../../bbdd/data.json'

export const Page = () => {
    console.log(dataJSON[0].images[0]);
    return (
        <div>
            <Nav />
            <div className="title d-flex justify-content-center imgLogo">
                <h1 className="text-light">Bienvenidos a FUEGO Y SAZÓN</h1>
            </div>
            <Carrousel />
            <h1 className="text-center p-5">Holaaa</h1>
            <div className="d-flex justify-content-center">
                <img src={`../../${dataJSON[0].images}`} alt="..." />
            </div>
            <Footer />
        </div>
    )
}