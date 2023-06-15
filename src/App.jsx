import './App.css';
import ClientOpinions from './components/ClientOpinions';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Howitworks from './components/Howitworks';
import Navbar from './components/Navbar';
import ScheduleMeeting from './components/ScheduleMeeting';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Howitworks></Howitworks>
      <ClientOpinions></ClientOpinions>
      <ScheduleMeeting></ScheduleMeeting>
      <FAQ></FAQ>
      <Footer></Footer>
    </>
  );
}

export default App;
