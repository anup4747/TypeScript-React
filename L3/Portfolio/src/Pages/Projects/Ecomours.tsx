export const Ecomuors: React.FC = () => {
  return (
    <section className="flex flex-col self-center mt-40 w-full max-w-[855px] max-md:mt-10 max-md:pt-14 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:w-full">
        <div className="flex flex-col items-start text-slate-800 max-md:mt-5 max-md:max-w-full">
          <div className="text-5xl font-bold mb-5">Ecomoue Website</div>
          <img src="https://wallpaperaccess.com/full/19693.jpg" alt="Project Image" className="rounded-2xl shadow-slate-500 shadow-lg max-w-lg" />

          <div className="flex gap-7 items-start mt-5 text-5xs whitespace-nowrap text-slate-400">
            <div className="flex items-center justify-center shrink-0 mt-1 rounded-2xl bg-blue-950 h-[25px] w-[62px]">
              2020
            </div>
            <div
              className="basis-auto h-[25px] flex justify-center items-start text-center"
              style={{ marginTop: 3 }}
            >
              Agriculuter
            </div>
          </div>
          <div className="self-stretch mt-9 text-base max-md:max-w-full">
          This project celebrates the beauty of Malayalam typography. Over 36 days, unique and creative type designs were crafted, showcasing the versatility and richness of the Malayalam script. The work highlights both traditional and contemporary styles, aiming to inspire and promote cultural appreciation.
          </div>
        </div>
      </div>
    </section>
  );
};
