import React from "react";
import Layout from "./../components/Layout/Layout";
// import aboutImg from "/images/about.jpeg"

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
       <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About 
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Mission
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                blandit nisl ullamcorper, aliquet nulla sed, vestibulum diam.
                Donec ac interdum eros. Morbi eu lobortis eros, non bibendum
                nibh. Fusce nec nibh non risus pharetra hendrerit a sed velit.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Vision
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                blandit nisl ullamcorper, aliquet nulla sed, vestibulum diam. Donec ac interdum
            eros. Morbi eu lobortis eros, non bibendum nibh. Fusce nec
            nibh non risus pharetra hendrerit a sed velit.
          </dd>
        </div>

        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
              Values
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            blandit nisl ullamcorper, aliquet nulla sed, vestibulum diam.
            Donec ac interdum eros. Morbi eu lobortis eros, non bibendum
            nibh. Fusce nec nibh non risus pharetra hendrerit a sed velit.
          </dd>
        </div>

        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 3h5v5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 14v5a2 2 0 01-2 2h-5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9v5a2 2 0 002 2h5"
                />
              </svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
              Goals
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            blandit nisl ullamcorper, aliquet nulla sed, vestibulum diam.
            Donec ac interdum eros. Morbi eu lobortis eros, non bibendum
            nibh. Fusce nec nibh non risus pharetra hendrerit a sed velit.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>

<div className="bg-white">
  <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
    <div className="px-6 py-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Our Mission
      </h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        blandit nisl ullamcorper, aliquet nulla sed, vestibulum diam. Donec
        ac interdum eros. Morbi eu lobortis eros, non bibendum nibh. Fusce
        nec nibh non risus pharetra hendrerit a sed velit.
      </p>
    </div>

    <div className="mt-10 flex justify-center">
      <div className="max-w-xs">
        <img
          className="mx-auto"
          src="https://source.unsplash.com/Zc8QvzvxDlg/400x400"
          alt=""
        />
      </div>
    </div>

    <div className="px-6 py-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Our Vision
      </h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        blandit nisl ullamcorper, aliquet nulla sed, vestibulum diam. Donec
        ac interdum eros. Morbi eu lobortis eros, non bibendum nibh. Fusce
        nec nibh non risus pharetra hendrerit a sed velit.
      </p>
    </div>

    <div className="mt-10 flex justify-center">
      <div className="max-w-xs">
        <img
          className="mx-auto"
          src="https://source.unsplash.com/2l0CWTpcChI/400x400"
          alt=""
        />
      </div>
    </div>
  </div>
</div>
    </Layout>
  );
};

export default About;