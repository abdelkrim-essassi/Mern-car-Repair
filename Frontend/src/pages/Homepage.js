import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import ValueProposition from '../components/ValueProposition';
import UserJourney from '../components/UserJourney';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductShowcase />
      <ValueProposition />
      <UserJourney />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Homepage;