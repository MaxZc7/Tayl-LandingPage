import { InlineWidget } from 'react-calendly';

export default function ScheduleMeeting() {
  return (
    <div
      className="md:w-full md:h-screen max-w-[1450px] mx-auto mt-[25vh] md:mt-10"
      id="Meeting"
    >
      <div className="flex justify-between flex-col md:flex-row">
        <div className="flex flex-col gap-4">
          <div className="text-center text-5xl font-semibold text-slate-700">
            <h4 className="uppercase">Schedule a</h4>
          </div>
          <div className=" uppercase text-center text-5xl font-semibold text-slate-700">
            <strong className="gradient-txt">meeting</strong>
          </div>
        </div>
        <div className="mt-3 text-center font-bold ">
          <h4 className="text-xl text-slate-700 m-1">
            Schedule a meeting with us and let us help you boost your sales
          </h4>
          <h4 className="text-xl  text-slate-700 m-1">
            We are excited to meet and understand your specific needs you with
            effective solutions
          </h4>
        </div>
      </div>
      <div className="m-3">
        <InlineWidget
          url="https://calendly.com/galardonado7/30min"
          styles={{ height: '660px' }}
        />
      </div>
    </div>
  );
}
