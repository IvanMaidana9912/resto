import { Products } from "../components/Products"
import datas from '../../bbdd/data.json';

export const Body = () => {
    
    return (
        <div className="d-flex justify-content-center flex-column align-items-center">
            <div className="imgGif w-100"></div>
            <div className="imgLogo w-100 d-flex justify-content-center">
                <img className="rounded-circle" src="../../public/image-logo/logoGif.gif" alt="..."/>
            </div>
            <div className="d-flex flex-wrap m-5">
                {
                    datas ? datas.map((data) => <Products product={data} key={data.id}/>) : ""
                }
            </div>
            <div className="imgLogo p-5 w-100 mt-5">
                <p className="text-light">
                    hola este es el footer
                </p>
            </div>
        </div>
    )
}