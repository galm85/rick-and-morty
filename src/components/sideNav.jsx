import React from 'react';
import {Link} from 'react-router-dom';

const SideNav = ({show,handleShow}) => {
    return ( 
        <div className={show ? "side-nav" : "side-nav-hide"}>
            <ul className="links">
                <li onClick={handleShow} className="link"><Link  to='/characters'>Characters</Link></li>
                <li onClick={handleShow} className="link"><Link to='/locations'>Locations</Link></li> 
                <li onClick={handleShow} className="link"><Link to='/episodes'>Episodes</Link></li> 
            </ul>
        </div>
     );
}
 
export default SideNav;