
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container-navbar">
      <div className="navbar d-flex justify-content-between text-white bg-secondary align-items-center">
        <h2 className='p-2'>dojo app</h2>
        <div className="links m-3">
          <Link className='m-3 text-white text-decoration-none' to="/">Home</Link>
          <Link className='m-3 text-white text-decoration-none' to="/about">About</Link>
          <Link className='m-3 text-white text-decoration-none' to="/emp">Employee's</Link>
          <Link className='m-3 text-white text-decoration-none' to="/emp">Service's</Link>
          <Link className='m-3 text-white text-decoration-none' to="/engines">Engine's</Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;