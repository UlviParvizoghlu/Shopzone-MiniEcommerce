import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";


function App() {
  return (
    <Router>
      <Helmet>
        <title>ShopZone</title>
      </Helmet>
        <PageContainer>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </PageContainer>
      <Footer/>
      </Router>
  );
}

export default App;
