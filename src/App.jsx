import React from "react";

const App = () => {

  const navigateTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div>
      <nav>
        <button onClick={()=> navigateTo('navbar')}>N</button>
        <button onClick={()=> navigateTo('header')}>H</button>
        <button onClick={()=> navigateTo('main')}>M</button>
        <button onClick={()=> navigateTo('footer')}>F</button>
      </nav>
      <section id="navbar">Navbar</section>
      <section id="header">Header</section>
      <section id="main">Main</section>
      <section id="footer">Footer</section>
    </div>
  );
};

export default App;
