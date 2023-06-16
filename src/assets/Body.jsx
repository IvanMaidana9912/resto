import Products from "../components/Products"

export const Body = () => {
    return (
        <div className="imgGif d-flex justify-content-center flex-column align-items-center">
            <img className="rounded-circle" src="../../public/image-logo/logoGif.gif" alt="..." />
            <div className="d-flex flex-wrap mx-5">
                <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/>
            </div>
            <div className="bg-dark p-5 w-100">
                <p className="text-light">
                    hola este es el footer
                </p>
            </div>
        </div>
    )
}