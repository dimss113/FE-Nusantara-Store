import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Customer Support
              </h3>
              <p className="mt-4 max-w-2xl text-sm text-gray-500">
                If you have any questions, please contact our customer support
                team. We are always happy to help!
              </p>
              <div className="mt-6 flex items-center">
                <svg
                  className="flex-shrink-0 mr-4 h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 13c0-4.97 4.029-9 9-9s9 4.03 9 9-4.029 9-9 9-9-4.03-9-9zm0 0l3.529-3.529m6.942 3.529h0m0-7.058h0M21 13a8 8 0 11-16 0 8 8 0 0116 0z"
                  />
                </svg>
                <div>
                  <p className="text-base font-medium text-gray-900">
                    1-800-123-4567
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Monday to Friday 9am-5pm PST
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <svg
                  className="flex-shrink-0 mr-4 h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 22s8-4.5 8-11.8c0-4.9-3.58-8.86-8-8.86s-8 3.96-8 8.86C4 17.5 12 22 12 22z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 17.22V12"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 16.26C10.95 15.74 9.71 15.5 8.4 15.5c-1.31 0-2.55.24-3.6.76"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 9L17.8 11.2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.01 8.99L12 12M11.99 12l-2.01-3.01"
                  />
                </svg>
                <div>
                  <p className="text-base font-medium text-gray-900">
                    support@ecommerce.com
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Please allow 1-2 business days for a response
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Our Address
              </h3>
              <p className="mt-4 max-w-2xl text-sm text-gray-500">
                1234 Main Street
                <br />
                Suite 100
                <br />
                San Francisco, CA 94111
              </p>
              <div className="mt-6 flex items-center">
                <svg
                  className="flex-shrink-0 mr-4 h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <div>
                  <p className="text-base font-medium text-gray-900">
                    Visit us at our office
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Monday to Friday 9am-5pm PST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
