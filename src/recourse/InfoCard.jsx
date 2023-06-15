export default function InfoCard({ title, description, image, icon }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-3/4 border-blue-600 border-2 gap-3 rounded-xl  mx-auto bg-white">
      <div className="w-4/6 flex flex-col gap-3 items-center">
        <img src={icon} width={70} height={70}></img>
        <h4 className="text-2xl font-bold text-slate-700">{title}</h4>
        <p className="font-light text-slate-700">{description}</p>
      </div>
      <img
        className="shadow-md shadow-blue-400 rounded-lg m-4"
        src={image}
      ></img>
    </div>
  );
}
