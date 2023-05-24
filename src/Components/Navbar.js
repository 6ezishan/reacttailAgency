import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <header
        aria-label="Site Header"
        className="bg-white dark:bg-gray-900"
      >
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link className="block text-teal-600 dark:text-teal-300" to="/">
            <span className="sr-only">Home</span>
            <svg
              className="h-8"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path data */}
            </svg>
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    to="/testimonial"
                  >
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <button
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 md:hidden"
                onClick={toggleMenu}
              >
                <span className="                sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <nav
            className="md:hidden absolute w-full left-0 top-16 bg-white dark:bg-gray-900 px-4 py-2"
            aria-label="Mobile Menu"
          >
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  to="/"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  to="/about"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  to="/services"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  to="/testimonial"
                  onClick={toggleMenu}
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  to="/contact"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;

