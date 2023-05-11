import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
     <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">About</h3>
            <ul className="list-disc pl-4">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-800">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Contact Us
            </h3>
            <ul className="list-disc pl-4">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Send Us a Message
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Privacy Policy
            </h3>
            <ul className="list-disc pl-4">
              <li>
                <Link
                  to="/policy"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Our Commitment
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500">
            © 2023 My Ecommerce, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer