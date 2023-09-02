import Image from "next/image";
import React from "react";

const courses = [
  {
    img: "/fandaco assets/python1.jpg",
    name: "Python Fundamentals",
  },
  {
    img: "/fandaco assets/javascript.png",
    name: "Javscript Fundamentals",
  },
  {
    img: "/fandaco assets/htmlcss.jpg",
    name: "HTML & CSS Fundamentals",
  },
  {
    img: "/fandaco assets/zarla-computer-logo-ideas-5998x4001-20210128.jpeg",
    name: "Computer Fundamentals",
  },
];

const Courses = () => {
  return (
    <div>
      <section className="w-[90%] lg:w-[900px] mx-auto">
        <h2 className="font-bold text-xl my-5 text-center">Our Courses</h2>

        <main className="flex flex-col lg:flex-row flex-auto flex-shrink-0 gap-3 lg:gap-10 overflow-x-auto p-5">
          {courses.map((course, idx) => {
            return (
              <div key={idx} className="w-full mb-20">
                <div className=" relative">
                  <div className="absolute w-full h-1/2 -top-3 -left-4 bg-purple-600 rounded-2xl"></div>
                  <section className="relative p-3 border rounded-2xl bg-white shadow-lg shadow-purple-600">
                    <div className="lg:w-[250px] lg:h-[200px] rounded-lg overflow-hidden">
                      <Image
                        src={course.img}
                        alt=""
                        className="object-cover w-full h-full"
                        width={300}
                        height={300}
                      />
                    </div>

                    <section>
                      <h3 className="font-bold my-3">{course.name}</h3>
                      <p className="text-sm mb-2">
                        meticulously crafted to cater to beginners with little
                        to no prior programming experience
                      </p>
                      <button className="px-4 py-1 bg-orange-600 text-white rounded-lg">
                        Enroll Now
                      </button>
                    </section>
                  </section>
                </div>
              </div>
            );
          })}
        </main>
      </section>
    </div>
  );
};

export default Courses;
