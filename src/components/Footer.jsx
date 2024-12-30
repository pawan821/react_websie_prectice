import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Company Name</h2>
          <p className="text-sm mt-2">Your company's tagline or description.</p>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-white">Home</a>
          <a href="#" className="text-gray-400 hover:text-white">About Us</a>
          <a href="#" className="text-gray-400 hover:text-white">Services</a>
          <a href="#" className="text-gray-400 hover:text-white">Contact</a>
        </div>

        <div className="text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
