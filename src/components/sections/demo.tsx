"use client";

import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";

export function DemoThumbnail() {
  const handleDemoClick = () => {
    window.open("https://sentinel-mvp-cherysec.vercel.app/", "_blank");
  };

  return (
    <div
      className="relative cursor-pointer rounded-lg border-2 border-blue-500 overflow-hidden w-48 h-28 bg-gray-100 hover:border-purple-500 transition-colors duration-300"
      onClick={handleDemoClick}
    >
      <Image
        src="/mvp_thumbnail.png"
        alt="Démo Sentinelle"
        width={192}
        height={112}
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        priority
      />
      
      {/* Bouton Play central */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110">
          <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
        </div>
      </div>
      
      {/* Icône externe au survol */}
      <div className="absolute top-2 right-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-sm">
          <ExternalLink className="h-3 w-3 text-gray-700" />
        </div>
      </div>
      
    </div>
  );
}

export default function DemoSection() {
  return <DemoThumbnail />;
}
