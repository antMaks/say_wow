import React from "react"
// import main from "/Users/mac/Desktop/say_wow/say_wow/sayWow/src/styles/main.css"
require("/Users/mac/Desktop/say_wow/say_wow/sayWow/src/styles/main.css")
export default function Header() {
  return (
    <div id="page" className="site">
    <a className="skip-link screen-reader-text" href="#content">
      Skip to content
    </a>
    <header id="masthead" className="site-header centered mobile-menu">
      <div className="corp-container">
        <div className="site-header-inner">
          <div className="site-branding">
            <a
              href="https://emeraldlasheschicago.com/?v=3943d8795e03"
              className="custom-logo-link"
              rel="home"
            >
              <img
                src="https://res.cloudinary.com/ddpjamzmz/image/upload/$wpsize_!_cld_full!,w_420,h_420,c_scale/v1588379234/logo-main.png"
                className="custom-logo"
                alt="Emerald Lash"
                srcSet="https://res.cloudinary.com/ddpjamzmz/image/upload/$wpsize_!_cld_full!,w_420,h_420,c_scale/v1588379234/logo-main.png 420w, https://res.cloudinary.com/ddpjamzmz/image/upload/$wpsize_!woocommerce_thumbnail!,w_300,h_300,c_fill,g_auto/v1588379234/logo-main.png 300w, https://res.cloudinary.com/ddpjamzmz/image/upload/$wpsize_!woocommerce_gallery_thumbnail!,w_150,h_150,c_fill,g_auto/v1588379234/logo-main.png 150w"
                sizes="(max-width: 420px) 100vw, 420px"
                width={420}
                height={420}
              />
            </a>{" "}
          </div>
          {/* .site-branding */}
          <nav id="site-navigation" className="main-navigation">
            <div className="menu-main-container">
              <ul id="primary-menu" className="menu">
                <li
                  id="menu-item-11"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11"
                >
                  <a href="/lash-studio/?v=3943d8795e03">Studio</a>
                </li>
                <li
                  id="menu-item-12"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12"
                >
                  <a href="/lash-studio/?v=3943d8795e03#services-id">Services</a>
                </li>
                <li
                  id="menu-item-13"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13"
                >
                  <a href="/lash-studio/?v=3943d8795e03#instagram-id">Our work</a>
                </li>
                <li
                  id="menu-item-14"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-14"
                >
                  <a href="/training?v=3943d8795e03">Training</a>
                </li>
                <li
                  id="menu-item-15"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15"
                >
                  <a href="https://www.lashfortech.com/">Store</a>
                </li>
                <li
                  id="menu-item-16"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16"
                >
                  <a href="#contact-id">Contact</a>
                </li>
              </ul>
            </div>
            <ul className="shopping-cart">
              <li>
                <a
                  className="shopping-cart-link"
                  href="https://emeraldlasheschicago.com/cart/?v=3943d8795e03"
                  title="View shopping cart"
                >
                  <span className="screen-reader-text">View shopping cart</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.97"
                    height={16}
                    viewBox="0 0 16.97 16"
                  >
                    <path
                      id="cart"
                      className="cls-1"
                      d="M1313.9,36.289l-2.01,6a0.994,0.994,0,0,1-.95.711h-7.35a0.962,0.962,0,0,1-.35-0.072c-0.04-.015-0.07-0.037-0.11-0.056a0.969,0.969,0,0,1-.19-0.131,0.644,0.644,0,0,1-.1-0.1c-0.04-.056-0.08-0.117-0.12-0.184-0.02-.043-0.04-0.084-0.06-0.13-0.01-.024-0.02-0.043-0.03-0.068l-2.09-7.07A1.779,1.779,0,0,0,1298.98,34h-0.99a1,1,0,0,1,0-2h0.99a3.773,3.773,0,0,1,3.49,2.669l0.1,0.332h10.38a1,1,0,0,1,.8.4A0.969,0.969,0,0,1,1313.9,36.289Zm-10.74.71,1.18,4h5.85l1.41-4h-8.44Zm0.81,7a2,2,0,1,1-2,2A2,2,0,0,1,1303.97,44Zm6.99,0a2,2,0,1,1-2,2A2,2,0,0,1,1310.96,44Z"
                      transform="translate(-1297 -32)"
                    />
                  </svg>
                  <span className="shopping-cart-text">View Cart</span>
                  <span className="shopping-cart-count">0</span>
                </a>
                <ul className="shopping-cart-dropdown" id="cart-drop">
                  <div className="widget woocommerce widget_shopping_cart">
                    <div className="widget_shopping_cart_content">
                      <p className="woocommerce-mini-cart__empty-message">
                        No products in the cart.
                      </p>
                    </div>
                  </div>{" "}
                </ul>
              </li>
            </ul>
            <a href="#menu" id="mobile-menu-button">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={27}
                height={32}
                viewBox="0 0 27 32"
              >
                <path d="M27.429 24v2.286q0 0.464-0.339 0.804t-0.804 0.339h-25.143q-0.464 0-0.804-0.339t-0.339-0.804v-2.286q0-0.464 0.339-0.804t0.804-0.339h25.143q0.464 0 0.804 0.339t0.339 0.804zM27.429 14.857v2.286q0 0.464-0.339 0.804t-0.804 0.339h-25.143q-0.464 0-0.804-0.339t-0.339-0.804v-2.286q0-0.464 0.339-0.804t0.804-0.339h25.143q0.464 0 0.804 0.339t0.339 0.804zM27.429 5.714v2.286q0 0.464-0.339 0.804t-0.804 0.339h-25.143q-0.464 0-0.804-0.339t-0.339-0.804v-2.286q0-0.464 0.339-0.804t0.804-0.339h25.143q0.464 0 0.804 0.339t0.339 0.804z" />
              </svg>
              <span className="screen-reader-text">Menu</span>
            </a>
          </nav>

        </div>
      </div>
    </header>
    </div>
  )
}