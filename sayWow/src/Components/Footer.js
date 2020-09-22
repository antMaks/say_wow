import React from "react"
import styled from "styled-components"
import Header from "/Users/mac/Desktop/say_wow/say_wow/sayWow/src/Components/Header.js"
// import PayPal from "/Users/mac/Desktop/say_wow/say_wow/sayWow/src/Components/PayPal.js"
require("/Users/mac/Desktop/say_wow/say_wow/sayWow/src/styles/main.css")
// import Content from "/Users/mac/Desktop/say_wow/say_wow/sayWow/src/Components/Content.js"
// import main from "/Users/mac/Desktop/say_wow/say_wow/sayWow/src/styles/main.css"

export default function SayWow() {
  return (
    <footer id="colophon" className="site-footer">
      <section className="footer-block" id="contact-id">
        <div className="footer-block-flex">
          <div>
            <img
              src="https://res.cloudinary.com/ddpjamzmz/image/upload/logo-small.png"
              alt
            />
            <p>
              We provide full service
              <br />
              eyelash extension
              <br />
              and brow shaping.
            </p>
          </div>
          <div>
            <p>
              <span>Address &amp; Phone</span>
            </p>
            <p>
              2041 W Belmont Ave
              <br />
              Chicago, IL, 60618
              <br />
              (224) 423 67 43
            </p>
          </div>
          <div>
            <p>
              <span>Business hours</span>
            </p>
            <p>
              Mon — Fri: 10am — 8pm
              <br />
              Sat: 10am — 5pm
              <br />
              Sun: by appointment only
            </p>
          </div>
          <div>
            <p>
              <span>Social media</span>
            </p>
            <p>
              <a
                href="https://instagram.com/emerald_lashes?igshid=lynbhxc7u72s"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <br />
              <a
                href="https://www.facebook.com/emeraldlasheschicago/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <br />
              <a
                href="https://yelp.to/qTKq/qOh9NWqrt5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yelp
              </a>
            </p>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <a
              href="https://www.vagaro.com/emeraldlashes/book-now"
              target="_blank"
            >
              Book online
            </a>
          </div>
          <div>
            <a href="https://www.lashfortech.com/" target="_blank">
              Visit store
            </a>
          </div>
          <div>
            <a href="/training?v=3943d8795e03">Training</a>
          </div>
        </div>
        <div className="footer-credits">
          <p>
            Created by{" "}
            <a href="https://mynydesign.com" target="_blank">
              MYNY Design Studio
            </a>{" "}
            in New York
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/ddpjamzmz/image/upload/bottom-left.png"
          alt
          className="leaf-bottom-left"
        />
        <img
          src="https://res.cloudinary.com/ddpjamzmz/image/upload/bottom-right-01.png"
          alt
          className="leaf-bottom-right"
        />
      </section>
    </footer>
  )
}
