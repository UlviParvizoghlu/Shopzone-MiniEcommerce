import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
import Detail from "./pages/Detail";


function App() {
  return (
    <Router>
      <Helmet>
        <title>ShopZone</title>
      </Helmet>
        <Navbar/>
        <PageContainer>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Detail/>} />
      </Routes>
    </PageContainer>
      <Footer/>
      </Router>
  );
}

export default App;
