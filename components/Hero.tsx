import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Modern Aluminium Kitchen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 to-primary-maroon/80 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
          Premium Aluminium <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Fabrication Solutions
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Transforming spaces with high-quality aluminium windows, doors, and modular kitchens.
          Durability meets modern aesthetics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="px-8 py-4 bg-white text-primary-blue font-bold rounded-full hover:bg-gray-100 transition-transform hover:scale-105 shadow-lg"
          >
            Get a Quote
          </Link>
          <Link
            href="#gallery"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-transform hover:scale-105"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
