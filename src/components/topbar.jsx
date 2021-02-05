import React from 'react';
import {Link} from 'react-router-dom';

const Topbar = ({handleShow}) => {

    return ( 
        <React.Fragment>
            <div className="main-top-bar">
                <Link to="/">
                    <img src="/images/rickAndMortyLogo.png" alt="rick and morty logo" className="main-logo"/>
                </Link>
        
            <div className="hamburger" onClick={handleShow}>    
                 <i class="fas fa-bars"></i>
            </div>

        </div>
        </React.Fragment>
     );
}
 
export default Topbar;