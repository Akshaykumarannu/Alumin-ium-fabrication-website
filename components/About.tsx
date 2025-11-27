"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-maroon/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/kitchen-luxury.jpg"
                alt="About National Aluminium"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/80 to-transparent" />

              {/* Floating stats card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary-maroon">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary-blue/10 rounded-full">
              <div className="w-2 h-2 bg-primary-blue rounded-full animate-pulse" />
              <span className="text-primary-blue text-sm font-bold tracking-wide uppercase">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Crafting Excellence in{' '}
              <span className="text-gradient">Aluminium Fabrication</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              National Aluminium Fabrication has been at the forefront of the aluminium industry for over 15 years.
              We specialize in creating premium quality aluminium products that combine durability, functionality,
              and aesthetic appeal.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our commitment to excellence is reflected in every project we undertake. From modern modular kitchens
              to sleek office partitions, we bring your vision to life with precision engineering and superior craftsmanship.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Premium Quality Materials</h3>
                  <p className="text-gray-600">We use only the finest aluminium and materials to ensure longevity and performance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-maroon rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Expert Craftsmanship</h3>
                  <p className="text-gray-600">Our skilled team brings years of experience and attention to detail to every project.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Customer-Centric Approach</h3>
                  <p className="text-gray-600">Your satisfaction is our priority, from consultation to installation and beyond.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-primary-blue text-white font-bold rounded-lg hover:bg-blue-900 transition-all hover:shadow-lg text-center"
              >
                Get Started
              </a>
              <a
                href="#gallery"
                className="px-8 py-4 border-2 border-primary-maroon text-primary-maroon font-bold rounded-lg hover:bg-primary-maroon hover:text-white transition-all text-center"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
