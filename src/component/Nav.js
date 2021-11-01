import { NavLink} from 'react-router-dom';

import React from 'react';

const Nav = () => {
    return (
        <div>
        
<ul>
  <li><NavLink className="link" to="/" exact> Home </NavLink> </li>
  <li><NavLink className="link" to="/animals"> Animals</NavLink> </li>
  <li><NavLink className="link" to="/about"> About</NavLink> </li>

</ul>
        </div>
    );
};

export default Nav;