import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const ReviewsSlider = () => {
  const reviews = [
    {
      name: 'John Doe',
      rating: 5,
      text: 'The service was excellent and the team was very helpful! They guided me through every step, making the process smooth and stress-free. I felt confident throughout the entire experience, and they were always available for any questions.',
      photo: '/img2.jpg',
      fontFamily: 'serif',
    },
    {
      name: 'Jane Smith',
      rating: 4,
      text: 'Great experience! Highly recommend their services. The team was knowledgeable and provided expert advice, helping me make informed decisions. The support I received was top-notch, and the process was clear and seamless.',
      photo: '/img2.jpg',
      fontFamily: 'sans-serif',
    },
    {
      name: 'Michael Lee',
      rating: 5,
      text: 'Absolutely fantastic! Everything went smoothly from start to finish. The team was very professional, friendly, and supportive, ensuring that I was well taken care of. I would definitely use their services again and recommend them to others.',
      photo: '/img2.jpg',
      fontFamily: 'cursive',
    },
    {
      name: 'Sarah Wilson',
      rating: 4,
      text: 'Wonderful support and service. The team went above and beyond to assist me and provide the best options for my needs. Their attention to detail was remarkable, and I appreciated the personalized approach they took throughout the process.',
      photo: '/img2.jpg',
      fontFamily: 'monospace',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full bg-white py-12" style={{fontFamily:'Times new Roman'}}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Clients Review
        </h2>
        <div className="flex justify-center items-center mb-12 ">
        <div className="w-20 h-1 bg-orange-600"></div>
        <div className="w-4 h-1 bg-orange-600 mx-2"></div>
        <div className="w-2 h-1 bg-orange-600 mx-1"></div>
      </div>

        <p className="text-xl text-center text-black mb-8 font-bold ">
          Our Lovely Clients Get Helped From Our Company
        </p>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg mb-6 border border-orange-500 h-[400px]">
              <div className="flex justify-center w-full mb-4" style={{marginBottom:'20px'}}>
                <image
                  src={review.photo}
                  alt={review.name}
                  className="w-24 h-24 object-cover rounded-full"
                />
              </div>
              {/* <h3 className="font-semibold text-xl text-gray-700 mb-2">{review.name}</h3>
              <div className="text-yellow-400 mb-2">
                {'★'.repeat(review.rating)}{'★'.repeat(5 - review.rating)}
              </div> */}
              <div className="px-4 text-gray-600" style={{ fontFamily: review.fontFamily, marginBottom:'20px' }}>
                <p>{review.text}</p>
              </div>
              
              <div className="text-yellow-400 mb-2">
                {'★'.repeat(review.rating)}{'★'.repeat(5 - review.rating)}
              </div>
              <h3 className="text-xl text-gray-700 mb-2 font-bold">{review.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewsSlider;
