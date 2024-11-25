import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    text: "This service is amazing! Highly recommended to everyone.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "John Smith",
    text: "I had a fantastic experience. Will definitely use this again.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Emma Brown",
    text: "The team is very professional and helpful!",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Michael Lee",
    text: "Affordable and reliable. Couldn't ask for more.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Sophia White",
    text: "Exceeded all my expectations. Excellent service!",
    image: "https://via.placeholder.com/150",
  },
];

const ReviewCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Automatically slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative mx-auto w-[90%] rounded-lg overflow-hidden">
      {/* Sliding Container */}
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex-shrink-0 w-full flex flex-col items-center p-6 text-center"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-lg text-[#5c0c0c] font-semibold">
              {review.name}
            </h3>
            <p className="text-gray-600 italic mt-2">{review.text}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {/* Prev Button */}
      <div className="flex items-center justify-center gap-8 mt-10">
        <IconButton
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white"
        >
          <ArrowBack sx={{color:"#5c0c0c"}} />
        </IconButton>

        {/* Next Button */}
        <IconButton
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white"
        >
          <ArrowForward sx={{color:"#5c0c0c"}} />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCarousel;
