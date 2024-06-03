import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <nav className="navbar">
      <div className="logo">Mamata Kandel</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#shop">Shop</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
    <div className="content">
      <div className="blog-post">
        <img src="https://th.bing.com/th/id/OSK.HEROHVJyqcjSaJlJJ2qZQ0eojY0IRZDpAb3AowmK4l3cAeA?rs=1&pid=ImgDetMain" alt="Clothing" className="blog-image" />
        <div className="blog-text">
          <h2>Discover the Latest Trends in Fashion</h2>
          <p className="blog-meta">By Sarah Johnson | May 20, 2024</p>
          <p>At Fabulous Threads, we bring you the latest trends in clothing and accessories. From casual wear to formal attire, we have something for every occasion.</p>
          <p>Our curated collection features high-quality fabrics, stylish designs, and affordable prices. Whether you're looking for chic dresses, trendy tops, or cozy knitwear, we've got you covered.</p>
          <p>Stay ahead of the fashion curve with our seasonal collections and exclusive offers. Shop now and elevate your wardrobe with Fabulous Threads!</p>
        </div>
      </div>
      <div className="blog-post">
      <img src="https://th.bing.com/th/id/OSK.HEROHVJyqcjSaJlJJ2qZQ0eojY0IRZDpAb3AowmK4l3cAeA?rs=1&pid=ImgDetMain" alt="Accessories" className="blog-image" />
        <div className="blog-text">
          <h2>Elevate Your Style with Accessories</h2>
          <p className="blog-meta">By Michael Davis | May 25, 2024</p>
          <p>No outfit is complete without the perfect accessories. At Fabulous Threads, we offer a wide range of accessories to complement your look.</p>
          <p>From statement jewelry to stylish handbags, our collection has everything you need to add a touch of glamour to any ensemble. Mix and match to create your signature style!</p>
          <p>Explore our selection of accessories and discover the finishing touches that will take your outfit from ordinary to extraordinary. Shop now and make a statement with Fabulous Threads!</p>
        </div>
      </div>
      <div className="blog-post">
        <img src="https://th.bing.com/th/id/OSK.HEROHVJyqcjSaJlJJ2qZQ0eojY0IRZDpAb3AowmK4l3cAeA?rs=1&pid=ImgDetMain" alt="Shoes" className="blog-image" />
        <div className="blog-text">
          <h2>Step Out in Style with Fabulous Footwear</h2>
          <p className="blog-meta">By Emma Roberts | May 30, 2024</p>
          <p>Your footwear can make or break your outfit. That's why at Fabulous Threads, we offer a diverse range of shoes to suit every taste and occasion.</p>
          <p>From elegant heels to comfortable sneakers, our collection combines style and comfort effortlessly. Whether you're dressing up for a night out or keeping it casual on the weekend, we have the perfect pair for you.</p>
          <p>Shop our selection of footwear and step out in style with Fabulous Threads. With our trendy designs and unbeatable quality, you'll always put your best foot forward!</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;