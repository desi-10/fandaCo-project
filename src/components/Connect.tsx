import React from "react";

const interest =
  "Don't miss out on this incredible opportunity to learn and grow!Enroll now or explore our courses to embark on your coding journey. Seize the chance to acquire essential programming skills and unlock a world of possibilities. Let's make your programming dreams a reality. Enroll now and embrace the extraordinary with us! �";

const Connect = () => {
  return (
    <div className="mb-20">
      <section className="w-[90%] lg:w-[900px] mx-auto text-center text-white bg-purple-600 p-5 rounded-lg my-10">
        <h1 className="my-4 text-lg font-bold">Interested In Courses?</h1>
        <p>{interest}</p>
        <button className="bg-white rounded-lg text-black py-2 px-4 my-2">
          Enroll Now
        </button>
      </section>
    </div>
  );
};

export default Connect;
