import React from "react"
import {Helmet} from "react-helmet";
// import styled from "styled-components"
import Header from "/Users/mac/Desktop/say_wow/say_wow/sayWow/src/Components/Header.js"
import Content from "/Users/mac/Desktop/say_wow/say_wow/sayWow/src/Components/Content.js"
import Footer from "/Users/mac/Desktop/say_wow/say_wow/sayWow/src/Components/Footer.js"
// import PayPal from "/Users/mac/Desktop/say_wow/say_wow/sayWow/src/Components/PayPal.js"
require("/Users/mac/Desktop/say_wow/say_wow/sayWow/src/styles/main.css")


export default function SayWow() {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Say wow</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </>
  )
}
