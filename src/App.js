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
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";


function App() {
  return (
    <Router>
      <Helmet>
        <title>Shopzone</title>
      </Helmet>
        <Navbar/>
        <PageContainer>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Detail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    </PageContainer>
      <Footer/>
      </Router>
  );
}

export default App;
