
"use client"
import React, { useState } from "react";
import Link from "next/link"; 
import { FaEnvelope, FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/" },
    { name: "Migrate To", path: "/" },
    { name: "Study Abroad", path: "/" },
    { name: "PR Visas", path: "/" },
    { name: "Work Abroad", path: "/" },
    { name: "Job Seeker Visas", path: "/" },
    { name: "Visit Visas", path: "/" },
    { name: "Investor Visas", path: "/" },
    { name: "Schengen Visas", path: "/" },
    { name: "Resume Marketing", path: "/" },
    { name: "Coaching/Training", path: "/" },
  ];

  const migrateSubPages = [
    { name: "Germany", path:"/m" },
    { name: "Canada", path: "/migrate#canada" },
    { name: "United States", path: "/migrate#usa" },
    { name: "Australia", path: "/migrate#australia" },
    { name: "United Kingdom", path: "/migrate#uk" },
    { name: "New Zealand", path: "/migrate#new-zealand" },
    { name: "South Africa", path: "/migrate#south-africa" },
    { name: "Hong Kong", path: "/migrate#hong-kong" },
    { name: "Denmark", path: "/migrate#denmark" },
    { name: "UAE", path: "/migrate#uae" },
  ];
  const prVisaSubPages = [
    { name: "Portugal Jobseeker", path: "/pr#residency" },
    { name: "Schngen Visa", path: "/pr#schengen" },
    { name: "Resume Marketing Service", path: "/pr#marketing" },
    { name: "Study Abroad with VJC", path: "/pr#marketing" },
    { name: "Sweden Jobseeker", path: "/pr#marketing" },
    { name: "Visit Visa Services", path: "/pr#marketing" },
    { name: "Work Abroad with VJC", path: "/pr#marketing" },
  
  
  ];
  
  
  

  return (
    <header>
      {/* White background section with logo, contact information, and marquee */}
      <div className="bg-white py-0 px-2 shadow-md z-50 fixed top-0 w-screen">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center space-x-0">
            <Link href="/" className="text-lg font-bold">
              <img src="/logo-1.webp" alt="Logo" className="h-14" />
            </Link>
            <Link href="/" className="text-lg font-bold">
              <img src="/logo-2.webp" alt="Logo" className="h-14" />
            </Link>
          </div>


          {/* Marquee Section */}


         

          {/* Contact Information (Hidden on md and sm devices) */}
          <div className=" flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2 text-sm text-black uppercase font-semibold italic">
              <div className="flex items-center animate-pulse text-custom-blue">
                <img src="/loc.png" alt="Bangalore" className="mr-1 w-5 h-5" />
                <p>Bangalore</p>
              </div>
              <div className="flex items-center animate-pulse text-custom-blue">
                <img src="/loc.png" alt="Hyderabad" className="mr-1 w-5 h-5" />
                <p>Hyderabad</p>
              </div>
              <div className="flex items-center animate-pulse text-custom-blue">
                <img src="/loc.png" alt="USA" className="mr-1 w-5 h-5" />
                <p>USA</p>
              </div>
            </div>

            {/* Mail Address with Icon */}
            <div className="hidden md:flex items-center space-x-2 text-xs lg:text-sm text-black uppercase font-semibold italic">
              <div className="flex items-center animate-pulse text-custom-blue">
                <a href="mailto:info@vjcoverseas.com" className="flex items-center">
                  <FaEnvelope className="mr-1 w-5 h-5 text-orange-500" />
                  <p>info@vjcoverseas.com</p>
                </a>
              </div>
            </div>

            {/* Phone Number with Icon */}
            <div>
  <a
    href="tel:+919160449000"
    className="flex items-center text-white py-1 px-3 rounded-lg text-xs lg:text-sm whitespace-nowrap font-bold uppercase mr-3"
  >
    <img src="/phone.gif" alt="Phone" className="h-6 w-6 mr-2" />
    {/* Test with a default Tailwind color like text-blue-500 */}
    <span className="text-blue-500">+91 9160449000</span>
  </a>
</div>

          </div>
        </div>
      </div>

{/* Orange background section for large screens */}
<div className="bg-orange-500 fixed top-12 w-screen z-50 hidden md:block">
  <nav className="flex justify-between items-center px-2 max-w-7xl py-1.5">
    <div className="flex flex-row -space-x-2 whitespace-nowrap">
      {menuItems.map((item, index) => (
        <React.Fragment key={item.name}>
          {/* Check for "Migrate To" and "PR Visas" */}
          {item.name === "Migrate To" || item.name === "PR Visas" ? (
            <div className="relative group">
              <span className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-1">
                {item.name}
              </span>
              {/* Submenu */}
              <div className="absolute left-0 hidden group-hover:block bg-gray-50 p-2 space-y-2 rounded-lg shadow-lg z-50">
                {/* Conditionally Render Submenus */}
                {(item.name === "Migrate To" ? migrateSubPages : prVisaSubPages).map((subItem) => (
                  <Link
                    href={subItem.path}
                    key={subItem.name}
                    className="text-orange-500 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-200 hover:bg-opacity-30 transition-all ease-in-out block"
                  >
                    {/* Ensure subItem.name and subItem.path are strings */}
                    {typeof subItem.name === 'string' && typeof subItem.path === 'string' ? (
                      subItem.name
                    ) : (
                      <span>Error: Invalid data</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              href={item.path}
              className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-1"
            >
              {/* Ensure item.name and item.path are strings */}
              {typeof item.name === 'string' && typeof item.path === 'string' ? (
                item.name
              ) : (
                <span>Error: Invalid data</span>
              )}
            </Link>
          )}
          {index < menuItems.length - 1 && <span className="text-white hidden lg:inline-block">|</span>}
        </React.Fragment>
      ))}
    </div>
  </nav>
</div>

{/* Small devices */}
<div className="bg-orange-500 fixed top-12 w-screen z-50 md:hidden">
  <nav className="flex justify-between items-center py-2">
    {/* Mail Address */}
    <div className="flex items-center space-x-2 text-xs lg:text-sm text-black uppercase font-semibold italic">
      <div className="flex items-center animate-pulse text-black">
        <a href="mailto:info@vjcoverseas.com" className="flex items-center">
          <FaEnvelope className="mr-1 w-5 h-5 text-orange-500" />
          <p>info@vjcoverseas.com</p>
        </a>
      </div>
    </div>

    {/* Social Media Icons */}
    <div className="flex items-center space-x-4 ml-6">
      <a href="https://www.facebook.com/VJCOVERSEAS/" target="_blank" rel="noopener noreferrer" className="text-xl">
        <FaFacebook className="text-white hover:text-black"/>
      </a>
      <a href="https://x.com/VJCOVERSEAS?t=aRM7qjBL9saJzNwyDzuCCg&s=09" target="_blank" rel="noopener noreferrer" className="text-xl">
        <FaTwitter className="text-white hover:text-black" />
      </a>
      <a href="https://www.instagram.com/vjcoverseas_/" target="_blank" rel="noopener noreferrer" className="text-xl">
        <FaInstagram className="text-white hover:text-black" />
      </a>
    </div>

    {/* Hamburger/Close Icon for small screens */}
    <div className="flex items-center px-4 ml-4">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white text-xl"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>

    {/* Navigation links for small screens */}
    <div
      className={`absolute top-9 left-0 w-full h-screen items-center bg-orange-500 flex flex-col space-y-4 ${isMenuOpen ? 'block' : 'hidden'} transition-all ease-in-out duration-300`}
    >
      {menuItems.map((item, index) => (
        <React.Fragment key={item.name}>
          <Link
            href={item.path}
            className="text-white text-sm font-semibold px-4 mt-2 hover:bg-white hover:bg-opacity-20 uppercase"
            onClick={() => setIsMenuOpen(false)} 
          >
            {item.name}
          </Link>
          {index < menuItems.length - 1 && (
            <div className="w-40 h-px bg-white mx-2" />
          )}
        </React.Fragment>
      ))}
    </div>
  </nav>
</div>

      {/* Add margin to ensure content below is not hidden */}
      <div className="mt-0"></div> {/* Adjust the margin if necessary */}
    </header>
  );
};

export default Navbar;










