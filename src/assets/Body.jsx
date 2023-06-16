import { Products } from "../components/Products"
import datas from '../../bbdd/data.json';
import { Carrousel } from "../components/Carrousel";
import { Nav } from "../layout/Navbar";
import { Footer } from "../layout/Footer";

export const Body = () => {

    return (
        <div>
            <Nav />
            <div className="title d-flex justify-content-center imgLogo">
                <h1 className="text-light">Bienvenidos a FUEGO Y SAZÓN</h1>
            </div>
            <Carrousel />
            <div className="d-flex justify-content-center flex-column align-items-center">
                <div className="imgGif w-100"></div>
                <div className="imgLogo w-100 d-flex justify-content-center">
                    <img className="rounded-circle" src="../../public/image-logo/logoGif.gif" alt="..." />
                </div>
                <div className="d-flex flex-wrap m-5">
                    {
                        datas ? datas.map((data) => <Products product={data} key={data.id} />) : ""
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}