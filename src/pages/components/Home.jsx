import React from "react";
// import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import Footer from "./Footer";

const Home = () => {
  return (
    <>
      
      {/* Home Start */}
      <div className="top_img">
        <div className="row  heading_text">
          <div className="col-lg-2 px-5">
            <h1>Aesop.</h1>
          </div>
          <div className="col-lg-6 pt-3">
            <p className="fw-bold">Home Fragrance</p>
            <h1>Introducing Aromatique</h1>
            <h1>Incense</h1>
            <p>
              Discover a trio of transportive aromas for
              <br /> wandering minds—Murasaki, Kagerou and <br /> Sarashina
              Aromatique Incense—and the Bronze
              <br /> Incense Holder that elevates their unassuming
              <br /> form.
            </p>
            <button
              type="button"
              className="btn btn-outline-light heading-btn "
            >
              Explore the collection{" "}
              <i class="fa-solid fa-arrow-right ps-5"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Domestic pleasures */}
      <section className="mt-5">
        <OwlCarousel className="owl-theme " loop margin={10} nav dots={false}>
          <div class="item  crousel_text ">
            <h5>For the home</h5>
            <h2 className="">Domestic pleasures</h2>
            <p className="pt-4">
              Our range of aromatic formulations for the home are practical
              <br /> and pleasing in equal measure.
            </p>
            <Link className="text-dark text-decoration-none">
              See all Home<i class="fa-solid fa-arrow-right ps-3"></i>
            </Link>
          </div>
          <div class="item ">
            <img
              src={require("./image/Aesop_Home_Murasaki_Aromatique_Incense_Web_Large_1584x1384px.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
              Murasaki Aromatique Incense
            </Link>
            <p className="text-center pb-5">
              For those who favour aromas of warm spice
            </p>
          </div>
          <div class="item">
            <img
              src={require("./image/Aesop_Home_Murasaki_Aromatique_Incense_Web_Large_1584x1384px.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Kagerou Aromatique Incense
            </Link>
            <p className="text-center pb-5">
            For those particularly partial to Vetiver
            </p>
          </div>
          <div class="item">
            <img
              src={require("./image/Aesop_Home_Murasaki_Aromatique_Incense_Web_Large_1584x1384px.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Sarashina Aromatique Incense
            </Link>
            <p className="text-center pb-5">
            For those particularly partial to Sandalwood 
            </p>
          </div>
          <div class="item domestic_img">
            <img
              src={require("./image/Aesop_Home_Bronze_Incense_Holder_Web_Large_1150x481px.webp")}
              class="d-block w-60  "
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Bronze Incense Holder
            </Link>
            <p className="text-center pb-5">
            Suited to any interior
            </p>
          </div>
          <div class="item">
            <img
              src={require("./image/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Aganice Aromatique Candle
            </Link>
            <p className="text-center pb-5">
            Cardamom, Mimosa, Tobacco
            </p>
          </div>
          <div class="item">
            <img
              src={require("./image/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Callippus Aromatique Candle
            </Link>
            <p className="text-center pb-5">
            A marriage of deep greens and earthy spices
            </p>
          </div>
          <div class="item">
            <img
              src={require("./image/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Ptolemy Aromatique Candle
            </Link>
            <p className="text-center pb-5">
            A sensuous blend of leather, smoke and wood
            </p>
          </div>
          <div class="item">
            <img
              src={require("./image/Aesop-Home-Room-Spray-Istros-100mL-large.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Istros Aromatique Room Spray
            </Link>
            <p className="text-center pb-5">
            Imbue spaces with evocative scent
            </p>
          </div>
          <div class="item">
            <img
              src={require("./image/Aesop-Home-Room-Spray-Istros-100mL-large.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Cythera Aromatique Room Spray
            </Link>
            <p className="text-center pb-5">
            Veil of Geranium, warmth of Myrrh
            </p>
          </div>
          <div class="item">
            <img
              src={require("./image/Aesop-Home-Room-Spray-Istros-100mL-large.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Olous Aromatique Room Spray
            </Link>
            <p className="text-center pb-5">
            Refreshes the home
            </p>
          </div>
          <div class="item">
            <img
              src={require("./image/Aesop-Other-Aesop-Book-1-Large-835x962px.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Aesop: the book
            </Link>
            <p className="text-center pb-5">
            For design aficionados; curious readers; aesthetes
            </p>
          </div>
        </OwlCarousel>
      </section>
      {/* Interior fragrances to lift the mood */}
      <section className="">
        <div className="row">
          <div className="col-lg-7 col-sm-6 col-md-6 interior">
            <img
              src={require("./image/Aesop_Home_2023_Scented_Home_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.avif")}
              alt="Image1"
            />
          </div>
          <div className="interior_text col-lg-5 col-sm-6 col-md-6 ">
            <h2 className="">
              Interior fragrances to lift the
              <br /> mood
            </h2>
            <p className="pt-4">
              Ideal for home or office spaces in need of
              <br /> refreshment, our Home range comprises a<br /> number of
              fragrant preparations, from incense to
              <br /> room sprays.
            </p>
            <button
              type="button"
              className="btn btn-outline-dark interior-btn mt-4"
            >
              Browse Scented Home
              <i className="fa-solid fa-arrow-right ps-5"></i>
            </button>
          </div>
        </div>
      </section>
      {/* A superlative selection */}
      <section className="mt-5 superlative">
        <h2 className="ms-5 mb-5">A superlative selection</h2>
        <OwlCarousel className="owl-theme " loop margin={10} nav dots={false}>
          <div class="item   ">
            <img
              src={require("./image/Aesop_Fragrance_Rozu_Eau_de_Parfum_50mL_Web_Large_1000x977px.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Rōzu Eau de Parfum
            </Link>
            <p className="text-center pb-5">
            Both brazen and delicate
            </p>
          </div>
          <div class="item ">
            <img
              src={require("./image/Aesop_Kits_Rick_Owens_Web_Large_1584x962px.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Aesop Rick Owens Travel Kit
            </Link>
            <p className="text-center pb-5">
            Fragrant essentials for journeys near or far
            </p>
          </div>
          <div class="item">
            <img
              src={require("./image/Aesop_Fragrance_Miraceti_Eau_de_Parfum_50mL_Web_Large_684x668px.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Miraceti Eau de Parfum
            </Link>
            <p className="text-center pb-5">
            Resinous, woody, spicy fragrance
            </p>
          </div>
          <div class="item">
            <img
              src={require("./image/Aesop_Fragrance_Marrakech_Eau_de_Parfum_50mL_Web_Large_1000x977px.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Marrakech Intense Eau de Parfum
            </Link>
            <p className="text-center pb-5">
            Woody, opulent, floral fragrance
            </p>
          </div>
          <div class="item">
            <img
              src={require("./image/Aesop-Body-Geranium-Leaf-Body-Cleanser-100mL-Hybris-Large-835x962px.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Geranium Leaf Body Cleanser
            </Link>
            <p className="text-center pb-5">
            A gentle, invigorating gel cleanser
            </p>
          </div>
          <div class="item superlative_img">
            <img
              src={require("./image/Aesop_Skin_Sublime_Replenishing_Night_Masque_60mL_Web_Large_901x478px.png")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Sublime Replenishing Night Masque
            </Link>
            <p className="text-center pb-5">
            Balances the appearance of skin
            </p>
          </div>
        </OwlCarousel>
      </section>
      {/* Aesop on Vitamins */}
      <section className="">
        <div className="row">
          <div className="vitamin_text col-lg-5 col-sm-6 col-md-6 ">
            <h5>The Athenaeum</h5>
            <h2 className="">Aesop on Vitamins</h2>
            <p className="pt-4">
              Among those we often return to in our
              <br /> formulations are a range of ingredients known to
              <br /> benefit the skin—vitamins C, B3, E and Provitamin
              <br /> B5.
            </p>
            <button
              type="button"
              className="btn btn-outline-dark heading-btn mt-4"
            >
              Discover Vitamins
              <i class="fa-solid fa-arrow-right ps-5"></i>
            </button>
          </div>
          <div className="col-lg-7 col-sm-6 col-md-6 interior">
            <img
              src={require("./image/Aesop_Skincare_Plus_Landing_Page_Secondary_Desktop_1690x1080px.webp")}
              alt="Image1"
            />
          </div>
        </div>
      </section>
      {/* Intensive formulations for complex skin */}
      <section className="mt-5">
        <OwlCarousel className="owl-theme " loop margin={10} nav dots={false}>
          <div class="item  crousel_text ">
            <h5>Skin Care+</h5>
            <h2 className="">Intensive formulations for complex skin</h2>
            <p className="pt-4">
              Explore products formulated with mature skin and urban dwellers in
              mind, to provide daily hydration and the additional benefit of
              potent vitamins and anti-oxidants.
            </p>
            <Link className="text-dark text-decoration-none">
              Browes Formulation<i class="fa-solid fa-arrow-right ps-3"></i>
            </Link>
          </div>
          <div class="item ">
            <img
              src={require("./image/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Lucent Facial Concentrate
            </Link>
            <p className="text-center pb-5">
            A Vitamin C-rich layering serum
            </p>
          </div>
          <div class="item intensive_img">
            <img
              src={require("./image/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Large_901x478px.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            B Triple C Facial Balancing Gel
            </Link>
            <p className="text-center pb-5">
          Embracing, vitamin-rich hydration
            </p>
          </div>
          <div class="item ">
            <img
              src={require("./image/Aesop_Skin_Exalted_Eye_Serum_15ml_Web_Medium_535x522px.png")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
              Murasaki Aromatique Incense
            </Link>
            <p className="text-center pb-5">
            Lightweight, vitamin-rich serum
            </p>
          </div>
          <div class="item ">
            <img
              src={require("./image/Aesop_Skin_Sublime_Replenishing_Night_Masque_60mL_Web_Large_901x478px (1).png")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Sublime Replenishing Night Masque
            </Link>
            <p className="text-center pb-5">
            Richly nourishing hydration for overnight use
            </p>
          </div>
          <div class="item intensive_img">
            <img
              src={require("./image/Aesop_Skin_Damascan_Rose_Facial_Treatment_25mL_Web_Large_684x668px.webp")}
              class="d-block w-60"
              alt="..."
            />
            <Link class="text-dark d-flex justify-content-center">
            Damascan Rose Facial Treatment
            </Link>
            <p className="text-center pb-5">
            A blend of vitamin-rich botanical extracts
            </p>
          </div>
        </OwlCarousel>
      </section>
      {/* Corporate gifts */}
      <section className="mt-5">
        <div>
          <div className="row">
            <div className="col-lg-7 col-sm-6 col-md-6 interior">
              <img
                src={require("./image/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Corporate_Gifting_Mid_Desktop_2560x1440px.jpg")}
                alt="Image1"
              />
            </div>
            <div className="corporate_text col-lg-5 col-sm-6 col-md-6 ">
              <h6>Tokens of appreciation</h6>
              <h2 className="">Corporate gifts</h2>
              <p className="pt-4">
                Find a variety of gift-giving options, ideal for
                <br /> honouring treasured colleagues and clients. <br />{" "}
                Trained consultants will be pleased to guide your
                <br />
                selections and assist with delivery.
              </p>
              <button
                type="button"
                className="btn btn-outline-dark interior-btn mt-4"
              >
                Learn more about this service
                <i class="fa-solid fa-arrow-right ps-5"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Store locator */}
      <section className="mt-5">
        <div>
          <div className="row">
            <div className="vitamin_text col-lg-5 col-sm-6 col-md-6 ">
              <h2 className="">Store locator</h2>
              <p className="pt-4">
                Our consultants are available to host you in-
                <br /> store and provide tailored guidance <br /> on gift
                purchases.
              </p>
              <button
                type="button"
                className="btn btn-outline-dark store-btn mt-4"
              >
                Find a nearby store
                <i class="fa-solid fa-arrow-right ps-5"></i>
              </button>
            </div>
            <div className="col-lg-7 col-sm-6 col-md-6 interior">
              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={require("./image/Aesop-HK-Hollywood-Road-Hero-Desktop-2880x1620.jpg")}
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={require("./image/Aesop-HK-Gough-Street-Hero-Desktop-2880x1620px.jpg")}
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={require("./image/Aesop_Harbour_City_II_Hero_Bleed_Desktop_2880x1620px.webp")}
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
};

export default Home;
