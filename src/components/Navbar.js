import { NavLink } from 'react-router-dom';
import planet from './planet.png';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'profile', text: 'My Profile' },
];
const Navbar = () => (
  <nav className="navbar auto-margin zero-div">
    <div>
      <img src={planet} alt="planet logo" className="img-sm" />
    </div>
    <ul className="zero-div">
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
