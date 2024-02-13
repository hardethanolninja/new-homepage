"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../public/jl_logo.svg";

function Header() {
  return (
    <header className='fixed top-0 z-50 flex items-center justify-between w-screen bg-dark-bg'>
      <div className='w-screen border-b-8 border-dark-bg'>
        <div className='border-b-4 border-dark-blue'>
          <div className='flex items-center justify-between p-3 border-b-4 border-dark-green'>
            <div className=''>
              <Link alt='home' href='/'>
                <Image priority src={logo} alt='Lienhard.dev logo' />
              </Link>
            </div>
            <div className='space-x-8 text-lg'>
              <Link
                className='text-white hover:text-dark-green'
                href='#home'
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("home")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </Link>
              <Link
                className='text-white hover:text-dark-green'
                href='#about'
                onClick={(e) => {
                  e.preventDefault();
                  const offset = 100; // Specify the offset value in pixels
                  const target = document.getElementById("about");
                  if (target) {
                    const scrollOffset = target.offsetTop - offset;
                    window.scrollTo({ top: scrollOffset, behavior: "smooth" });
                  }
                }}
              >
                About Me
              </Link>
              <Link
                className='text-white hover:text-dark-green'
                href='#work'
                onClick={(e) => {
                  e.preventDefault();
                  const offset = 100; // Specify the offset value in pixels
                  const target = document.getElementById("work");
                  if (target) {
                    const scrollOffset = target.offsetTop - offset;
                    window.scrollTo({ top: scrollOffset, behavior: "smooth" });
                  }
                }}
              >
                Work History
              </Link>
              <Link
                className='text-white hover:text-dark-green'
                href='#projects'
                onClick={(e) => {
                  e.preventDefault();
                  const offset = 100; // Specify the offset value in pixels
                  const target = document.getElementById("projects");
                  if (target) {
                    const scrollOffset = target.offsetTop - offset;
                    window.scrollTo({ top: scrollOffset, behavior: "smooth" });
                  }
                }}
              >
                My Projects
              </Link>
            </div>
            <div className='content-center pr-3'>
              <Link alt='home' href='/'>
                <h3 className='text-light-blue'>
                  Lienhard
                  <span className='text-white'>.</span>
                  <span className='text-light-green'>dev</span>
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

// border-b-4 border-solid border-dark-blue bg-dark-bg outline outline-b-4 outline-dark-green'
