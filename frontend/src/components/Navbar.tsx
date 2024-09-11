import logo from "../assets/logo.png";
import logoText from "../assets/logo-text.png";

function Navbar() {
  return (
    <nav className="p-5 px-10 mb-14">
      <div className="flex items-center gap-x-3">
        <img src={logo} alt="logo" className="w-[50px] aspect-square" />
        <img src={logoText} alt="logo" className="w-[250px]" />
      </div>
    </nav>
  );
}

export default Navbar;
