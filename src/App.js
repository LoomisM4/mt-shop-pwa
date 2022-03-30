import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Header from './comp/Header';
import Footer from './comp/Footer';
import CategoriesUI from './pages/CategoriesUI';
import SpotlightUI from './pages/SpotlightUI';
import CartUI from './pages/CartUI';
import MapUI from './pages/MapUI';
import ArticleUI from './pages/ArticleUI';
import ArticleList from './pages/ArticleList';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<><Header title={"Spotlight"} lensVisible={true}/><SpotlightUI/></>}/>
            <Route path="/categories" element={<><Header title={"Categories"} lensVisible={true}/><CategoriesUI/></>}/>
            <Route path="/categories/:categoryId" element={<><Header title={"Categories"} lensVisible={true}/><CategoriesUI/></>}/>
            <Route path="/categories/:categoryId/articles" element={<><Header title={"Articles"} lensVisible={true}/><ArticleList/></>}/>
            <Route path="/cart" element={<><Header title={"Cart"} lensVisible={false}/><CartUI/></>}/>
            <Route path="/map" element={<><Header title={"Map"} lensVisible={false}/><MapUI/></>}/>
            <Route path="/article" element={<><Header title={""} lensVisible={false}/><ArticleUI/></>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    );
}

export default App;
