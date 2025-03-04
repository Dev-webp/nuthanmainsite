"use client";
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

// Updated list with 15 countries (removed duplicate Spain)
const countries = [
  { name: 'Uk', image: '/1.png', description: 'The UK is one of the most sought-after destinations for international students and skilled professionals.' },
  { name: 'Usa', image: '/c2.png', description: 'The USA is famous for its world-class education system and career opportunities.' },
  { name: 'Canada', image: '/slide-3.jpg', description: 'Canada is known for its beautiful landscapes and outdoor activities.' },
  { name: 'Australia', image: '/c4.png', description: 'Australia is famous for its wildlife, beaches, and cultural diversity.' },
  { name: 'Germany', image: '/c5.png', description: 'Germany boasts a strong economy, rich history, and modern infrastructure.' },
  { name: 'France', image: '/c6.png', description: 'France is known for its art, cuisine, and historical landmarks.' },
  { name: 'Italy', image: '/c7.png', description: 'Italy is famous for its art, architecture, and cuisine.' },
  { name: 'Spain', image: '/c13.png', description: 'Spain is known for its vibrant culture, food, and festivals.' },
  { name: 'Netherlands', image: '/c15.png', description: 'The Netherlands is famous for its windmills, tulips, and canals.' },
  { name: 'UAE', image: '/c16.png', description: 'Japan offers a unique blend of ancient traditions and modern technology.' },
  { name: 'Switzerland', image: '/c9.png', description: 'South Korea is known for its technology, culture, and K-pop.' },
  { name: 'Sweden', image: '/c13.png', description: 'Sweden is famous for its design, technology, and sustainability.' },
  { name: 'South Africa', image: '/c12.png', description: 'Norway offers stunning landscapes, fjords, and a rich cultural history.' },
  { name: 'Singapore', image: '/c11.png', description: 'Switzerland is known for its Alps, chocolates, and financial services.' },
  { name: 'New Zealand', image: '/c10.png', description: 'Finland is famous for its beautiful nature, lakes, and high education standards.' },
  { name: 'Malaysia', image: '/c8.png', description: 'Portugal offers beautiful beaches, rich history, and amazing food.' },
];

const CountrySlider = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Track expanded image
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position
  const sliderRef = useRef(null); // Reference for the scrollable container

  // Handle image click (expand to full screen as background)
  const handleClick = (index) => {
    const fullIndex = scrollPosition * 5 + index; // Calculate the actual index from the full list of countries
    setExpandedIndex(fullIndex === expandedIndex ? null : fullIndex); // Toggle expansion
  };

  // Close the expanded image (return to slider view)
  const handleCancel = () => {
    setExpandedIndex(null); // Reset expanded image to null
  };

  // Handle mouse wheel scroll
  const handleWheel = (e) => {
    if (sliderRef.current) {
      e.preventDefault();
      sliderRef.current.scrollBy({
        left: e.deltaY > 0 ? 300 : -300, // Increase scroll speed for smoother effect
        behavior: 'smooth', // Smooth scrolling effect
      });
    }
  };

  // Scroll buttons logic
  const scrollLeft = () => {
    if (sliderRef.current) {
      setScrollPosition((prev) => Math.max(prev - 1, 0)); // Scroll left, 1 step at a time
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      setScrollPosition((prev) => Math.min(prev + 1, Math.floor(countries.length / 5) - 1)); // Scroll right, 1 step at a time
    }
  };

  useEffect(() => {
    // Add event listener for mouse wheel scroll
    if (sliderRef.current) {
      sliderRef.current.addEventListener('wheel', handleWheel, { passive: false });
    }

    // Clean up event listener when component unmounts
    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background image animation for expanded image */}
      {expandedIndex !== null && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-50"
          style={{
            backgroundImage: `url(${countries[expandedIndex].image})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}  // For closing animation
          transition={{ duration: 0.6 }}  // Smooth fade-in/out
        >
          {/* Cancel icon to close the expanded image */}
          <motion.button
            className="absolute top-10 right-9 bg-neutral-200 text-neutral-400 p-2 rounded-full z-50"
            onClick={handleCancel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // When it's being removed
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <FaTimes size={14} />
          </motion.button>

          {/* Content box that slides in from the right */}
          <motion.div
            className="absolute top-0 right-0 w-[33rem] h-full bg-white p-6 flex flex-col justify-center"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}  // Slide out when closing
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <div className='ml-6 mr-4'>
              <h2 className="text-4xl font-bold text-black mb-4 uppercase">{countries[expandedIndex].name}</h2>
              <p className="text-base text-justify text-black">{countries[expandedIndex].description}</p>

              {/* Link button */}
              <a
                href={`/country/${countries[expandedIndex].name.toLowerCase()}`} // Adjust URL structure if needed
                className="inline-flex items-center bg-orange-500 text-white py-1 px-4 rounded-lg text-center transition duration-300 ease-in-out hover:bg-orange-700 mt-4"
              >
                Read More
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Slider navigation buttons */}
      <motion.button
        className="absolute top-1/2 left-0 z-20 transform -translate-y-1/2 bg-neutral-200 text-neutral-400 p-2 rounded-full"
        onClick={scrollLeft}
        whileHover={{ scale: 1.1 }} // Scale button slightly on hover
        transition={{ duration: 0.3 }}
      >
        <MdOutlineKeyboardDoubleArrowLeft size={24} />
      </motion.button>

      <motion.button
        className="absolute top-1/2 right-0 z-20 transform -translate-y-1/2 bg-neutral-200 text-neutral-400 p-2 rounded-full"
        onClick={scrollRight}
        whileHover={{ scale: 1.1 }} // Scale button slightly on hover
        transition={{ duration: 0.3 }}
      >
        <MdOutlineKeyboardDoubleArrowRight size={24} />
      </motion.button>

      {/* Images grid (hidden behind the expanded image when clicked) */}
      <motion.div
        ref={sliderRef} // Reference for mouse wheel scroll
        className="flex w-full h-screen overflow-x-scroll snap-x snap-mandatory gap-6 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ scrollBehavior: 'smooth' }} // Smooth scroll behavior
      >
        {countries.slice(scrollPosition * 5, (scrollPosition + 1) * 5).map((country, index) => (
          <motion.div
            className="relative w-[20%] h-[33rem] mt-6 bg-cover bg-center flex items-center justify-center rounded-xl snap-center overflow-hidden"
            style={{
              backgroundImage: `url(${country.image})`,
              cursor: 'pointer',
            }}
            key={index}
            onClick={() => handleClick(index)}
            whileHover={{ scale: 1.05 }} // Slight scale effect on hover for better UI
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} // Fade-in effect for images
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-orange-500 opacity-50 z-10 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.5 }} // Make overlay visible on hover
              transition={{ duration: 0.3 }}
            />
            
            <motion.h2
              className="absolute bottom-6 left-6 text-4xl font-bold text-white z-20 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {country.name}
            </motion.h2>

            {/* Subtle gradient black opacity at the top and bottom of the slider images */}
            <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black via-transparent to-transparent"></div>
            <div className="absolute -bottom-4 left-0 w-full h-1/4 bg-gradient-to-t from-black via-gray-800 to-transparent"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CountrySlider;
