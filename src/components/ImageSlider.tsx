"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    src: "/card-image.png",
    alt: "Tarjeta Bankaool",
  },
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative hidden min-h-[420px] w-1/2 overflow-hidden rounded-3xl lg:block">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 50vw, 0px"
          className={`object-cover transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <a
        href="/"
        className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/20"
      >
        <HugeiconsIcon icon={ArrowLeft01Icon} size={18} strokeWidth={2} />
        Regresar a página principal
      </a>

      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir a la imagen ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-white" : "w-4 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
