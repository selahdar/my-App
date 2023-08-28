import styled from "./navbar.module.css"; 
import {Link} from "react-router-dom"
function Navbar() {
    return(
        <div className={styled.navbar}>
            <ul>
                <li> <Link to="/">لیست مقالات</Link>  </li>
                <li><Link to="/createArticels">مقالات جدید</Link></li>
                <li><Link to="/about">درباره</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;