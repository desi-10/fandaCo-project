import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="my-20">
      <section className="flex w-[90%] lg:w-[900px] mx-auto justify-between items-center">
        <div className="w-full">
          <h2 className="font-bold text-3xl mb-5">
            Master the foundation of Programming with Python, Javavscript and
            more ...
          </h2>
          <p className="text-sm mb-3">
            Dive into the essentials of Python, JavaScript and more, and build a
            strong programming foundation. Join us now and embark on an exciting
            learning journey with Fundaclass Programming! 🌟
          </p>
          <button className="bg-purple-600 rounded-lg text-white py-2 px-4 my-2">
            Enroll Now
          </button>
        </div>
        <div className="hidden lg:flex w-full">
          <Image
            src="/fandaco assets/Website Creator (1).gif"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
