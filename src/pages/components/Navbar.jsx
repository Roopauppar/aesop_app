import React from "react";
import nav from './nav.module.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* TOP BAR */}
      <section>
      <div>
          <div className={nav.top_bar}>
            <p className="text-center py-2 ">Click and Collect is now available at select stores. Enjoy complimentary carbon neutral shipping on orders over HK$400 <span className="mx-4 fs-5">+</span></p>
          </div>
        </div>
      </section>
     

        {/* NavBar Start */}
        <section className={nav.navbar}>
        <nav className="navbar navbar-expand-lg  py-4" >
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link pe-3" aria-current="page" to="/">Skin Care</Link>
        </li>
        <li className="nav-item">
          <Link className=" nav-link pe-3" aria-current="page" to="/">Body & Hand</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link pe-3 " aria-current="page" to="/">Hair</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link pe-3 " aria-current="page" to="/">Fragrance</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link pe-3 " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link pe-3 " aria-current="page" to="/">Kits & Travel</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link pe-3 " aria-current="page" to="/">Gifts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link pe-3 " aria-current="page" to="/">Read</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link pe-3 " aria-current="page" to="/">Stores</Link>
        </li>
        <div>
        <i class="fa-solid fa-magnifying-glass mt-3 ms-2 fs-5"></i>
        </div>

      </ul>
      <form className="d-flex" role="search">
      <Link className="nav-link pe-3 " aria-current="page" to="/">Log in</Link>
      <Link className="nav-link pe-3 " aria-current="page" to="/">Cabinet</Link>
      <Link className="nav-link pe-3 " aria-current="page" to="/">Cart</Link>
      </form>
    </div>
  </div>
</nav>
        </section>
    </>
  );
};

export default Navbar;
