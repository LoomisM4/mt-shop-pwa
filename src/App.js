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
      <BrowserRouter> <!-- 1 -->
        <div className="App"> <!-- 2 -->
          <Routes> <!-- 1 -->
            <Route path="/" element={<><Header title={"Spotlight"}/><SpotlightUI/></>}/> <!-- 5 -->
            <Route path="/categories" element={<><Header title={"Kategorien"}/><CategoriesUI/></>}/> <!-- 5 -->
            <Route path="/categories/:categoryId" element={<><Header title={"Kategorien"}/><CategoriesUI/></>}/> <!-- 5 -->
            <Route path="/categories/:categoryId/articles" element={<><Header title={"Artikel"}/><ArticleList/></>}/> <!-- 5 -->
            <Route path="/cart" element={<><Header title={"Warenkorb"}/><CartUI/></>}/> <!-- 5 -->
            <Route path="/map" element={<><Header title={"Umgebung"}/><MapUI/></>}/> <!-- 5 -->
            <Route path="/article" element={<><Header title={"Artikel"}/><ArticleUI/></>}/> <!-- 5 -->
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    );
}

export default App;

// 39
