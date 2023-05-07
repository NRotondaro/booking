import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import PropertyList from '../components/PropertyList';
import FeaturedProperties from '../components/FeaturedProperties';
import Mail from '../components/Mail';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <section className='mt-12 flex flex-col items-center gap-8'>
        <Featured />
        <h1 className='text-xl font-bold'>Browse by property type</h1>
        <PropertyList />
        <h1 className='text-xl font-bold'>Homes guests love</h1>
        <FeaturedProperties />
        <Mail />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
