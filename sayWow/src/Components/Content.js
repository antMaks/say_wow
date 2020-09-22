import React from "react"
import styled from "styled-components"

import PayPal from "/Users/mac/Desktop/say_wow/say_wow/sayWow/src/Components/PayPal.js"
// import main from "/Users/mac/Desktop/say_wow/say_wow/sayWow/src/styles/main.css"
require("/Users/mac/Desktop/say_wow/say_wow/sayWow/src/styles/main.css")
export default function Content() {
  return (
    <div id="content" className="site-content">
      <div className="corp-container">
        <div id="primary" className="content-area">
          <main id="main" className="site-main" role="main">
            <section className="lash">
              <div className="border-block green-background">
                <div className="block-content">
                  <h1>Lash Studio</h1>
                  <p>
                    We are a full service eyelash studio providing professional
                    eyelash extension as well as brow shaping.
                  </p>
                  <div className="buttons-flex">
                    <div>
                      <a
                        href="https://www.vagaro.com/emeraldlashes/book-now"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book online
                      </a>
                    </div>
                    <div>
                      <a
                        href="/lash-studio?v=3943d8795e03"
                        rel="noopener noreferrer"
                      >
                        All services
                      </a>
                    </div>
                  </div>
                </div>
                <img
                  src="https://res.cloudinary.com/ddpjamzmz/image/upload/v1/new-girl"
                  alt
                  className="lash-absolute"
                />
              </div>
              <img
                src="https://res.cloudinary.com/ddpjamzmz/image/upload/top-right.png"
                alt
                className="leaf-top-right"
              />
            </section>
            <section className="store">
              <div className="border-block blue-background">
                <div className="block-content">
                  <h1>Supply Store</h1>
                  <p>
                    We have our own brand of professional supplies. We provide
                    the industry and our clients with all the necessary
                    products.
                  </p>
                  <div className="buttons-flex">
                    <div>
                      <a
                        href="https://www.lashfortech.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit store
                      </a>
                    </div>
                  </div>
                </div>
                <img
                  src="https://res.cloudinary.com/ddpjamzmz/image/upload/v1589563999/store-background-01.png"
                  alt
                  className="bottles-absolute"
                />
              </div>
              <img
                src="https://res.cloudinary.com/ddpjamzmz/image/upload/v1589219185/second-left.png"
                alt
                className="leaf-second-left"
              />
            </section>
            <section className="training">
              <div className="border-block pink-background">
                <div className="block-content">
                  <h1>Lash Training</h1>
                  <p>
                    We provide both online training courses and live training
                    classes for eyelash artists. Check out our curriculum and
                    prices.
                  </p>
                  <div className="buttons-flex">
                    <div>
                      <a
                        href="/training?v=3943d8795e03"
                        rel="noopener noreferrer"
                      >
                        See courses
                      </a>
                    </div>
                  </div>
                </div>
                <img
                  src="https://res.cloudinary.com/ddpjamzmz/image/upload/mac@2x.png"
                  alt
                  className="mac-absolute"
                />
              </div>
              <img
                src="https://res.cloudinary.com/ddpjamzmz/image/upload/third-right.png"
                alt
                className="leaf-third-right"
              />
            </section>
          </main>
          {/* #main */}
        </div>
        {/* #primary */}
      </div>
      {/* .corp-container */}
    </div>
  )
}
