"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function ProjectImageGallery({ images, heightClass = "aspect-video", widthClass = "w-full" }) {
  // `mountedImage` controls whether the portal is mounted.
  // `isVisible` toggles CSS classes to trigger transitions.
  const [mountedImage, setMountedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const closeTimeoutRef = useRef(null);

  // Open the overlay with animation
  const openImage = (img) => {
    // mount first, then trigger visible state on next tick
    setMountedImage(img);
    requestAnimationFrame(() => requestAnimationFrame(() => setIsVisible(true)));
  };

  // Close with animation and delay unmount until transition finishes
  const closeOverlay = () => {
    setIsVisible(false);
    // wait for CSS transition (300ms) then unmount
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setMountedImage(null), 320);
  };

  // Lock body scroll while overlay is mounted
  useEffect(() => {
    if (typeof document === "undefined") return;
    const original = document.body.style.overflow;
    if (mountedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = original || "";
    }
    return () => {
      clearTimeout(closeTimeoutRef.current);
      document.body.style.overflow = original || "";
    };
  }, [mountedImage]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && mountedImage) closeOverlay();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mountedImage]);

  const overlay = (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      onClick={closeOverlay}
      aria-hidden={!isVisible}
    >
      <div
        className={`relative max-w-[75vw] md:max-w-[60vw] lg:max-w-[50vw] max-h-[80vh] flex items-center justify-center p-4 transform transition-all duration-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={mountedImage?.src}
          alt={mountedImage?.alt}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>
    </div>
  );

  return (
    <>
      <div className="flex justify-center py-3 sm:py-4 lg:py-5 -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-40 px-4 sm:px-8 md:px-16 lg:px-40">
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 w-full ${widthClass}`}>
          {images.map((img, index) => (
            <div
              key={index}
              className={`w-full ${heightClass} hover:scale-105 transition-transform duration-500 overflow-hidden rounded-xl cursor-pointer bg-white flex items-center justify-center`}
              onClick={() => openImage(img)}
            >
              <Image src={img.src} alt={img.alt} className="w-full h-full object-contain rounded-xl" />
            </div>
          ))}
        </div>
      </div>

      {mountedImage && typeof document !== "undefined" ? createPortal(overlay, document.body) : null}
    </>
  );
}
