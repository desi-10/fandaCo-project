import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="">
      <section className="flex w-[90%] lg:w-[900px] mx-auto justify-between items-center text-purple-600 p-3">
        <h1 className="font-bold text-lg">FundaCo</h1>
        <ul className="hidden lg:flex space-x-5 ">
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/#contact">Contact us</Link>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
