import { NavLink } from 'react-router-dom';
import planet from './planet.png';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'profile', text: 'My Profile' },
];
const Navbar = () => (
  <nav className="nav nav-justified border-bottom justify-content-between">
    <div className="navbar-brand row mb-3">
      <img src={planet} alt="planet logo" className="col-sm-2 img-fluid" />
      <h1 className="col-md-2 mt-4"> Space Traveler&#39;s Hub</h1>
    </div>
    <ul className="d-flex">
      {links.map((link) => (
        <li className="mt-5 mb-5 mx-3" key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
