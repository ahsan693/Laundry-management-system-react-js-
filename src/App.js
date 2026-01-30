import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedServices from './components/FeaturedServices';
import ServicesYouLove from './components/ServicesYouLove';
import HowItWorks from './components/HowItWorks';
import DeliveryFeatures from './components/DeliveryFeatures';
import MobileApp from './components/MobileApp';
import Pricing from './components/Pricing';
import SelfService from './components/SelfService';
import Testimonials from './components/Testimonials';
import OurPromise from './components/OurPromise';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedServices />
      <ServicesYouLove />
      <HowItWorks />
      <DeliveryFeatures />
      <MobileApp />
      <Pricing />
      <SelfService />
      <Testimonials />
      <OurPromise />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
