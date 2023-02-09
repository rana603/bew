import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Routs from './Routs/Routs';

function App() {
  return (
    <>
      <section>
        <Navbar/>
        <Routs />
        <Footer />
      </section>
    </>
  );
}

export default App;
