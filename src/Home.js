import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="APPLE iphone 13 (Midnight, 128 GB)"
            price={69990}
            rating={5}
            image="https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70"
          />
            <Product
            id="12321352"
            title="SAMSUNG Galaxy Watch 4, 44mm Super AMOLED (Black Strap, Free Size)"
            price={9999}
            rating={5}
            image="https://rukminim1.flixcart.com/image/416/416/kz1lle80/smartwatch/n/t/4/-original-imagb4yfjvrevfns.jpeg?q=70"
          />
          <Product
            id="49538094"
            title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74K (Black)"
            price={59999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71ZKGDdz1lL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="23445930"
            title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
            price={5999}
            rating={5}
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="JBL C115 True Wireless in Ear Earbuds with Mic, Jumbo 21 Hours Playtime with Quick Charge, True Bass, Dual Connect, Bluetooth 5.0, Type C and Voice Assistant Support for Mobile Phones (Black)"
            price={2499}
            rating={4}
            image="https://m.media-amazon.com/images/I/51wnOfRKl6L._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            id="90829332"
            title="LG 34 inch Ultra Wide Curved Gaming LED Monitor 160Hz, Tilt & Height Adjust - Black"
            price={18999}
            rating={3}
            image="https://m.media-amazon.com/images/I/61Y0JHgpWJL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={89999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
           <Product
            id="3254354355"
            title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens"
            price={44999}
            rating={4}
            image="https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829359"
            title="Bosch 6 kg 5 Star Inverter Touch Control Fully Automatic Front Loading Washing Machine with In - built Heater (WLJ2016WIN, White )"
            price={28999}
            rating={4}
            image="https://m.media-amazon.com/images/I/61tUypW4kkL._SL1184_.jpg"
          />
           <Product
            id="3254354389"
            title="Whirlpool 537 L Inverter Frost-Free Side-by-Side Refrigerator (WS SBS 537, Steel)"
            price={73999}
            rating={5}
            image="https://m.media-amazon.com/images/I/61+gsgA33PL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
 