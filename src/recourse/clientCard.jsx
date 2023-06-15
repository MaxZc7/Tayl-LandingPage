export default function clientCard({ name, image, description, job }) {
  return (
    <div className="flex  md:w-[400px] ml-[2vh] md:ml-0  h-[400px] w-[350px]  rounded-md flex-col justify-center items-center gap-2 mx-auto text-slate-600 bg-white shadow-lg p-3 mx-5">
      <div className="flex items-center justify-center">
        <img className="  w-1/4 rounded-full m-2" src={image}></img>
      </div>
      <h4 className="text-2xl font-bold">{name}</h4>
      <h4 className="text-xl font-semibold">{job}</h4>
      <p className="text-center p-2  font-light">{description}</p>
    </div>
  );
}
