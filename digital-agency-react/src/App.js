import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsStack from './components/ProjectsStack';
import MarqueeText from './components/MarqueeText';
import Footer from './components/Footer';
import ToTopButton from './components/ToTopButton';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Navigation />
      <Header />
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero />
        <ProjectsStack />
        <MarqueeText />
      </main>
      <Footer />
      <ToTopButton />
    </div>
  );
}

export default App;
