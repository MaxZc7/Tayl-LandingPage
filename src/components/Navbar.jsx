import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const handlerOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="Hero">
      <div className="flex justify-between max-w-[1480px] mx-auto mt-4">
        <a href="/">
          <div className="mt-4">
            <h1 className="text-6xl gradient-txt ml-8 md:ml-0">Tayl</h1>
          </div>
        </a>
        <div className="hidden md:flex">
          <ul className="flex font-bold">
            <li className="m-6  hover:text-blue-700 hover:border-b-[1px]  border-blue-700">
              <Link
                to="Hero"
                spy={true}
                smooth={true}
                duration={650}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="m-6  hover:text-blue-700 hover:border-b-[1px]  border-blue-700">
              <Link
                to="HowWorks"
                spy={true}
                smooth={true}
                duration={650}
                className="cursor-pointer"
              >
                How It Works
              </Link>
            </li>
            <li className="m-6  hover:text-blue-700 hover:border-b-[1px]  border-blue-700">
              <Link
                to="Clients"
                spy={true}
                smooth={true}
                duration={650}
                className="cursor-pointer"
              >
                Clients
              </Link>
            </li>
            <li className="m-6  hover:text-blue-700 hover:border-b-[1px]  border-blue-700">
              <Link
                to="FAQ"
                spy={true}
                smooth={true}
                duration={650}
                className="cursor-pointer"
              >
                FAQ
              </Link>
            </li>
            <div className="m-6 ">
              <Link
                to="Meeting"
                spy={true}
                smooth={true}
                duration={650}
                className="cursor-pointer"
              >
                <button className="bg-[#1a66fd] hover:bg-[#fff] shadow-xl hover:text-blue-500 rounded-full absolute p-3 px-5 top-8 text-white font-bold">
                  Contact Us
                </button>
              </Link>
            </div>
          </ul>
        </div>
        <div className="md:hidden">
          <div onClick={handlerOpen}>
            {!isOpen ? (
              <AiOutlineClose
                size={20}
                className="fixed right-0   top-0 scale-125 mt-[10.5%] mr-[10%]"
              />
            ) : (
              <AiOutlineMenu
                size={20}
                className="fixed right-0 top-0 mt-[10.5%] mr-[10%] scale-125"
              />
            )}
          </div>
          <div
            className={
              !isOpen
                ? 'fixed left-0 top-0 h-full duration-300 ease-out bg-white border-r border-gray-400 z-20'
                : 'fixed left-[-100%]'
            }
          >
            <ul className="flex flex-col p-4 mt-10">
              <div className="p-4  border-b border-gray-400 text-gray-800 ">
                <Link
                  to="Hero"
                  spy={true}
                  smooth={true}
                  duration={650}
                  className=" text-xl px-1 font-bold cursor-pointer  "
                >
                  Home
                </Link>
              </div>
              <Link
                to="HowWorks"
                spy={true}
                smooth={true}
                duration={650}
                className="text-xl font-semibold p-4 border-b border-gray-400 cursor-pointer   "
              >
                How It Works
              </Link>
              <Link
                to="Clients"
                spy={true}
                smooth={true}
                duration={650}
                className=" text-xl  font-semibold p-4 border-b border-gray-400  cursor-pointer   "
              >
                Clients
              </Link>
              <Link
                to="FAQ"
                spy={true}
                smooth={true}
                duration={650}
                className=" text-xl  font-semibold p-4 border-b border-gray-400  cursor-pointer   "
              >
                FAQ
              </Link>
              <Link
                to="Meeting"
                spy={true}
                smooth={true}
                duration={650}
                className=" text-xl font-semibold p-4 border-b border-gray-400   cursor-pointer  "
              >
                <button className="bg-[#1a66fd] hover:bg-[#fff] shadow-xl hover:text-blue-500 rounded-full p-2 px-3  text-white font-semibold">
                  Meeting
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
