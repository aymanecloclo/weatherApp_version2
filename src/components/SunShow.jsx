 import React from 'react';
const SunShow= ({ title = "Sunset", image, time }) => {
  return (
    <div
      className=" duration-300 font-mono text-white group cursor-pointer relative overflow-hidden bg-gradient-to-r from-cyan-400/75 to-blue-400 w-28 h-48  rounded-3xl p-4 hover:w-48 hover:bg-sky-400/95"
    >
      <h3 className="text-xl text-center">{title}</h3>
      <div className="gap-4 relative">
        <img src={image} className="w-20 h-20 block mx-auto" alt={title} />
      </div>
      <div className="absolute duration-300 -left-32 mt-2 group-hover:left-10 flex items-center py-5">
        <p className="md:text-xl text-md flex justify-center">{time}</p>
      </div>
    </div>
  );
};

export default SunShow;
