import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <div className="p-2 bg-dark">
            <ul className="nav nav-tabs justify-content-end">
                <li className="">
                    <Link className="nav-link text-light" aria-current="page" href="#">Active</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle text-light" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#">Action</Link></li>
                        <li><Link className="dropdown-item" href="#">Another action</Link></li>
                        <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" href="#">Separated link</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" href="#">Link</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                </li> */}
            </ul>
        </div>
    )
}