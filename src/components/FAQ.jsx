import { useState } from 'react';

export default function FAQ() {
  const [isActive1, setIsActive1] = useState(false);

  const handleActive1 = () => {
    setIsActive1(!isActive1);
  };
  const [isActive2, setIsActive2] = useState(false);

  const handleActive2 = () => {
    setIsActive2(!isActive2);
  };
  const [isActive3, setIsActive3] = useState(false);

  const handleActive3 = () => {
    setIsActive3(!isActive3);
  };
  const [isActive4, setIsActive4] = useState(false);

  const handleActive4 = () => {
    setIsActive4(!isActive4);
  };

  return (
    <div
      className="w-full  mt-[20vh] pb-[25vh] text-center md:text-start "
      id="FAQ"
    >
      <div className="flex flex-col md:flex-row justify-between max-w-[1450px] mx-auto gap-[10vh]  md:gap-[35vh]">
        <div className="flex flex-col m-4">
          <div className=" text-5xl font-semibold text-slate-700 uppercase">
            <h4>
              {' '}
              <strong className="gradient-txt">F</strong>requentely
            </h4>
            <h4>
              <strong className="gradient-txt">A</strong>sked
            </h4>
            <h4>
              <strong className="gradient-txt">Q</strong>uestions
            </h4>
          </div>
        </div>
        <div className=" text-slate-700 text-xl mx-auto flex flex-col ">
          <div
            className="border-b-[1px]  p-1 border-gray-300 md:flex justify-between hover:cursor-pointer"
            onClick={handleActive1}
          >
            <div>
              <h4 className="m-1 ">
                What is the process that the company follows to improve sales?
              </h4>

              <p
                className={
                  isActive1
                    ? 'text-sm h-10 m-2 mb-[8vh] md:mb-[0vh]'
                    : 'hidden h-0 m-2'
                }
              >
                Begins with a thorough analysis of your business and your sales
                goals. We then develop a customized strategy that includes
                identifying opportunities, optimizing your brand, and
                implementing effective marketing and sales tactics.
              </p>
            </div>
            <div>
              <svg
                className="hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width="36px"
                height="36px"
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                <path d="M0 0h24v24H0V0z" fill="none"></path>
              </svg>
            </div>
          </div>
          <div
            className="border-b-[1px]  p-1 border-gray-300 md:flex justify-between hover:cursor-pointer"
            onClick={handleActive2}
          >
            <div>
              <h4 className="m-1">
                What kind of results can I expect from working with you?
              </h4>
              <p
                className={
                  isActive2
                    ? 'text-sm h-10 m-2 mb-[8vh] md:mb-[0vh]'
                    : 'hidden h-0 m-2'
                }
              >
                While results may vary depending on each situation, our clients
                have experienced significant improvements in their sales after
                working with us. We have achieved increases in lead generation,
                conversion rate and total revenue.
              </p>
            </div>
            <div>
              <svg
                className="hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width="36px"
                height="36px"
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                <path d="M0 0h24v24H0V0z" fill="none"></path>
              </svg>
            </div>
          </div>
          <div
            className="border-b-[1px]  p-1 border-gray-300 md:flex justify-between hover:cursor-pointer"
            onClick={handleActive3}
          >
            <div>
              <div>
                <h4 className="m-1">
                  How long does it take to see improvements in sales after
                  implement your strategies?
                </h4>
              </div>
              <p
                className={
                  isActive3
                    ? 'text-sm h-10 m-2 mb-[8vh] md:mb-[0vh]'
                    : 'hidden h-0 m-2'
                }
              >
                The exact time to see sales improvements can vary depending on
                several factors, such as the current state of your business, the
                competition in your industry, and the implementation of
                recommended strategies.
              </p>
            </div>
            <div>
              <svg
                className="hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width="36px"
                height="36px"
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                <path d="M0 0h24v24H0V0z" fill="none"></path>
              </svg>
            </div>
          </div>
          <div
            className="border-b-[1px]  p-1 border-gray-300 md:flex justify-between hover:cursor-pointer"
            onClick={handleActive4}
          >
            <div>
              <h4 className="m-1">
                What is the cost of sales optimization services and how is it
                determined?
              </h4>
              <p
                className={
                  isActive4
                    ? 'text-sm h-10 m-2 mb-[8vh] md:mb-[0vh]'
                    : 'hidden h-0 m-2'
                }
              >
                The cost of our sales optimization services may vary according
                to the specific needs and objectives of each situation. We carry
                out a free initial analysis to assess your requirements and
                determine the appropriate solutions.
              </p>
            </div>
            <div>
              <svg
                className="hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width="36px"
                height="36px"
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                <path d="M0 0h24v24H0V0z" fill="none"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
