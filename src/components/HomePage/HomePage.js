import React from "react";
import poster from "../../img/poster.jpeg";
const HomePage = () => {
  return (
    <>
      <section className="pb-20 mb-1 bg-gray-800">
        <div className=" relative container px-4   mx-auto">
          <div className="flex flex-wrap items-center -mx-4 mb-10 2xl:mb-14">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <span className="text-lg font-bold text-blue-400">
                Create posts
              </span>
              <h2 className="max-w-2xl mt-12 mb-12 text-6xl 2xl:text-8xl text-white font-bold font-heading">
                Pen down your ideas{" "}
                <span className="text-yellow-500">By creating a post</span>
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
