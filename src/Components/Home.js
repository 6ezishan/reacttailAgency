import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-48 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Understand User Flow.
              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-gray-300 sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-700 sm:w-fit hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                href="/get-started"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border border-teal-700 px-12 py-3 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
