import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services/Services';
import Work from './components/Work';
import Contact from './components/Contact';



function App() {
  return (
    
    <div className='bg-site    bg-repeat bg-cover  overflow-hidden bg-blend-color  '>
      
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className='h-[200px] '></div> 
      
    </div>
  );
}

export default App;
