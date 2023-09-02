import React from "react";

const faqs = [
  {
    summary: "Who can join the courses?",
    details:
      "Our courses are open to anyone with a passion for programming! Whether you're a complete beginner or have some coding experience,you're welcome to join us and expand your skills",
  },
  {
    summary: "What is the time commitment for each course?",
    details:
      "The time commitment varies depending on the course complexity. Onaverage, our fundamental courses span a few weeks, with flexible study hours to accommodate your schedule.",
  },
  {
    summary: "Is any prior programming knowledge required?",
    details:
      "No prior programming knowledge is necessary for our fundamental courses. We'll guide you step-by-step, making sure you grasp the basics with ease",
  },
];

const FAQ = () => {
  return (
    <div className="mb-20">
      <section className="w-[90%] lg:w-[900px] mx-auto">
        <h2 className="my-4 text-lg font-bold text-center ">
          Frequently asked questions
        </h2>
        {faqs.map((faq, idx) => {
          return (
            <details key={idx} className="mb-5">
              <summary className="flex justify-between items-center mb-2 font-bold">
                <h6>{faq.summary}</h6>
                <p className="font-bold">+</p>
              </summary>
              <p>{faq.details}</p>
            </details>
          );
        })}
      </section>
    </div>
  );
};

export default FAQ;
