import Image from 'next/image';

const projects = [
  {
    src: '/images/kitchen-luxury.jpg',
    alt: 'Luxury Aluminium Kitchen',
    category: 'Residential',
  },
  {
    src: '/images/measurement.jpg',
    alt: 'Precision Measurement',
    category: 'Process',
  },
  {
    src: '/images/kitchen-commercial.jpg',
    alt: 'Commercial Kitchen Setup',
    category: 'Commercial',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our recent projects showcasing our commitment to quality and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-primary-maroon font-semibold text-sm mb-1">{project.category}</p>
                  <h3 className="text-white text-xl font-bold">{project.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
