import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [images] = useState([
    "/MK_Stalin.jpg",
    "/TVKcheif.jpg",
    "/Palanisamy.jpg",
    "/seemanOG.jpg",
  ]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-[720px] h-[380px] overflow-hidden rounded-2xl shadow-2xl bg-[#050816] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_55%)]">
      <img
        src={images[index]}
        alt="Party leader"
        className="w-full h-full object-cover block saturate-125"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-slate-900/90 text-slate-100 text-xl cursor-pointer shadow-xl backdrop-blur-md border-0"
      >
        ‹
      </button>

      <button
        onClick={next}
        aria-label="Next"
        className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-slate-900/90 text-slate-100 text-xl cursor-pointer shadow-xl backdrop-blur-md border-0"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full border-0 cursor-pointer transition-all duration-200 ${
              i === index ? "w-[18px] bg-orange-500" : "w-2 bg-slate-200/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;