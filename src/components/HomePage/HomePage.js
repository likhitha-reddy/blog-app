import React from "react";
import poster from "../../img/poster.jpg";
const HomePage = () => {
  return (
    <>
      <section className="pb-20 mb-1 bg-gray-800">
        <div className=" relative container px-4   mx-auto">
          <div className="flex flex-wrap items-center -mx-4 mb-10 2xl:mb-14">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <span className="text-3xl font-bold text-blue-400">
                PLACED-IN
              </span>
              <h2 className="max-w-2xl mt-12 mb-12 text-3xl 2xl:text-8xl text-white font-bold font-heading">
                Pen down your Experience{" "}
                <span className="text-yellow-500">Your words are much awaited</span>
              </h2>
             
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img className="w-full mt-20 align-center pb-20 h-150" src={poster} alt={poster} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
