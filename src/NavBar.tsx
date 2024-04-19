import "./App.css";

const NavBar = () => {
  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full p-2 bg-black bg-opacity-0 text-white z-50"
      >
        {/* Navbar content */}
        <h2 className="text-left tracking-wider px-20 font-bebas sm:text-xl md:text-2xl  lg:text-4xl p-3">Daniel Maslen</h2>
        {/* Add more navbar items if needed */}
      </div>
    </div>
  );
};

export default NavBar;
