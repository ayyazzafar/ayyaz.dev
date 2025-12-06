"use client";

import { useState } from "react";
import Image from "next/image";

interface ScreenshotCarouselProps {
  screenshots: string[];
  projectTitle: string;
  url?: string;
}

export function ScreenshotCarousel({
  screenshots,
  projectTitle,
  url,
}: ScreenshotCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (screenshots.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main carousel */}
      <div className="relative group">
        {/* Browser mockup with current screenshot */}
        <div className="rounded-lg overflow-hidden border border-gray-700 bg-gray-900 shadow-2xl">
          {/* Browser chrome */}
          <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
            {/* Traffic lights */}
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            {/* URL bar */}
            {url && (
              <div className="flex-1 ml-4">
                <div className="bg-gray-700 rounded px-3 py-1 text-sm text-gray-400 truncate max-w-md">
                  {url}
                </div>
              </div>
            )}
          </div>
          {/* Screenshot */}
          <div className="relative aspect-video">
            <Image
              src={screenshots[currentIndex]}
              alt={`${projectTitle} screenshot ${currentIndex + 1}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 800px"
              priority={currentIndex === 0}
            />
          </div>
        </div>

        {/* Navigation arrows - only show if more than 1 screenshot */}
        {screenshots.length > 1 && (
          <>
            {/* Previous button */}
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous screenshot"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Next screenshot"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Indicator dots and counter - only show if more than 1 screenshot */}
      {screenshots.length > 1 && (
        <div className="flex items-center justify-center gap-4">
          {/* Dots */}
          <div className="flex gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  index === currentIndex
                    ? "bg-white w-4"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
          {/* Counter */}
          <span className="text-sm text-gray-500">
            {currentIndex + 1} / {screenshots.length}
          </span>
        </div>
      )}

      {/* Thumbnail strip for quick navigation */}
      {screenshots.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 rounded overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-white/50 ${
                index === currentIndex
                  ? "border-white"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <div className="relative w-24 h-14">
                <Image
                  src={screenshot}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="96px"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
