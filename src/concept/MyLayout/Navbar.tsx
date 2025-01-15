import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-between p-4 z-40  sticky top-0  bg-white shadow-md">
        <div>
          <img
            src="https://nevo.themevillain.com/assets/images/logo.svg"
            alt=""
            className="w-10"
          />
        </div>
        <div className="flex text-center gap-6">
          <Link to="/Singers"> Home</Link>
          <Link to="/concept/State-management">About</Link>

          <Link to="/home-page">Features</Link>
          <div>Portfolio</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
        <div className="flex text-center gap-6  transition-all ease-in duration-700 hover:outline-4 hover:outline-black ">
          <div className="">Instagram</div>
          <div>Behance</div>
          <div>Twitter</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
