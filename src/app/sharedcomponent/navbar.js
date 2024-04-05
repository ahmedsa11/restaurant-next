"use client";
import Link from "next/link";
import "../styles/navbar.css";
import { useTheme } from "next-themes";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  console.log("🚀 ~ Navbar ~ theme:", theme);
  return (
    <div className="nav-bar w-100">
      <div className="container d-flex justify-content-between flex-row-reverse">
        <Link href={"/"}>
          <div>
            {/* <IoMdRestaurant className="logo" /> */}
            <i
              style={{ fontSize: "35px" }}
              className="fa-solid fa-utensils logo"
            ></i>
            {/* <span className="logo">logo</span> */}
          </div>
        </Link>  
 
        <div>
          {/* <BsFillBrightnessHighFill
              className="lang"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            /> */}
          <i
            style={{ fontSize: "35px" }}
            className="lang fa-solid fa-circle-half-stroke "
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          ></i>
          <button className="btn-login me-2">دخول</button>
          <button className="btn-register">انشا حساب</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
