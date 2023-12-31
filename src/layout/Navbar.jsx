import { Link } from "react-router-dom";
import { cantidadCarritoFinal } from '../components/Products';

export let cantidadCarritoInicial = 0;

export const Nav = () => {
    console.log(cantidadCarritoFinal);
    return (
        <div className="p-2 navColor">
            <ul className="nav nav-tabs justify-content-end">
                <li className="">
                    <Link className="nav-link text-light" aria-current="page" href="#">Active</Link>
                </li>
                <li className="li">
                    <Link className="navbar-brand position-relative" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <img src="../../public/image-logo/cart-outline.svg" alt="" className="d-inline-block align-items-end carritoImg" />
                        {
                            cantidadCarritoInicial > 0 ? <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger" id="spanCarrito">
                                {cantidadCarritoInicial != cantidadCarritoFinal ? cantidadCarritoFinal : cantidadCarritoInicial}
                                <span className="visually-hidden">unread messages</span>
                            </span> : ""
                        }

                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" href="#">Link</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle text-light" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Log</Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#">Register</Link></li>
                        <li><Link className="dropdown-item" href="#">Log In</Link></li>
                        <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" href="#">Separated link</Link></li>
                    </ul>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                </li> */}
            </ul>
        </div>
    )
}