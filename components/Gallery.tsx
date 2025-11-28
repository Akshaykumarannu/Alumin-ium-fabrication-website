"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/lib/gallery-data';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Kitchen Work', 'Windows', 'Room Furnishing', 'TV Units'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return galleryImages;
    return galleryImages.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 9, filteredImages.length));
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(9); // Reset visible count when category changes
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our recent projects showcasing our commitment to quality and design.
            From residential kitchens to commercial installations, we deliver excellence.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category
                    ? 'bg-primary-maroon text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {visibleImages.map((project, index) => (
              <motion.div
                key={project.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-primary-maroon font-semibold text-sm mb-1">{project.category}</p>
                    <h3 className="text-white text-xl font-bold">{project.alt}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-white border-2 border-primary-blue text-primary-blue font-bold rounded-full hover:bg-primary-blue hover:text-white transition-all shadow-md hover:shadow-lg"
            >
              Load More Projects ({filteredImages.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
