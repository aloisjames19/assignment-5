
import logo from '../assets/Images/logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        {/* ... */}
      </nav>
      <div className="header-image">
        <img src={logo} alt="My Electrical Shop" />
      </div>
    </header>
  );
};
  

export default Header;

