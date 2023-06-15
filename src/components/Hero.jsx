import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import netflix from '../assets/netflix-logo.jpg';
import apple from '../assets/apple-logo.jpg';
import uber from '../assets/uber-logo.jpg';
import google from '../assets/google-logo.png';
import bmw from '../assets/bmw-logo.jpg';
import zara from '../assets/zara-logo.jpg';
import { Link } from 'react-scroll';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="item flex" key={1}>
    <img src={google} onDragStart={handleDragStart} role="presentation" />,
  </div>,
  <div className="item flex" key={2}>
    <img src={netflix} onDragStart={handleDragStart} role="presentation" />,
  </div>,
  <div className="item flex" key={2}>
    <img src={zara} onDragStart={handleDragStart} role="presentation" />,
  </div>,
  <div className="item flex" key={2}>
    <img src={apple} onDragStart={handleDragStart} role="presentation" />,
  </div>,
  <div className="item flex" key={2}>
    <img src={uber} onDragStart={handleDragStart} role="presentation" />,
  </div>,
  <div className="item flex" key={2}>
    <img src={bmw} onDragStart={handleDragStart} role="presentation" />,
  </div>,
];

function Hero() {
  return (
    <>
      <div className="hero h-screen ">
        <div className="flex my-20 justify-center flex-col text-center font-bold">
          <h1 className="md:text-5xl text-3xl gradient-txt">
            Turn your profits into abysmal 100%
          </h1>
          <h1 className="md:text-4xl text-2xl md:block flex gradient-txt p-3">
            We solve your scalability issues
          </h1>
          <h2 className="my-3 text-slate-700">
            Discover how our services can help you to grow in the market
          </h2>

          <div className="mt-10 ">
            <Link
              to="Meeting"
              spy={true}
              smooth={true}
              duration={650}
              className="cursor-pointer  "
            >
              <button className="bg-[#1a66fd] hover:bg-[#fff] shadow-xl hover:text-blue-500 rounded-full p-3 px-5  text-white font-semibold">
                Try Free Service
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto">
          <p className="text-center font-bold text-slate-700 pb-4">
            Trusted by big companies{' '}
          </p>
          <AliceCarousel
            disableButtonsControls
            autoPlay
            infinite
            keyboardNavigation
            mouseTracking
            animationDuration={550}
            autoPlayInterval={1500}
            items={items}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
