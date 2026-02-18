import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

// Placeholder logos using text for now, in a real scenario these would be SVGs
const logos = [
  "AgroCorp", "Foodie", "MarketFresh", "CleanSpace", "BioSeguridad", "TechLab", "HotelLux", "RestaurantPro"
];

export default function TrustBar() {
  return (
    <section className="bg-gray-50 py-10 border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
          Más de 500 empresas confían en nuestra gestión anual
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="mx-8 md:mx-16 opacity-50 hover:opacity-100 transition-opacity cursor-default grayscale hover:grayscale-0">
              <span className="text-2xl font-bold font-display text-gray-400 hover:text-[hsl(168,64%,44%)] transition-colors">
                {logo}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="mx-8 md:mx-16 opacity-50 hover:opacity-100 transition-opacity cursor-default grayscale hover:grayscale-0">
              <span className="text-2xl font-bold font-display text-gray-400 hover:text-[hsl(168,64%,44%)] transition-colors">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
