import React from "react";
import Title from "../components/molecules/Title";
import Header from "../components/organisms/Header";
import HeaderTabs from "../components/molecules/HeaderTabs";
import './HomePage.css'
import ContentList from "../components/organisms/ContentList";
import Footer from "../components/organisms/Footer";
function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className="row text-danger border-bottom border-danger"></div>
      <div className="row">
        <HeaderTabs />
      </div>
      <div className="row justify-content-center mt-2" style={{backgroundColor: 'rgb(40, 40, 50)', borderRadius: '26px'}}>
        <ContentList />
      </div>
      <div className="row">
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;
