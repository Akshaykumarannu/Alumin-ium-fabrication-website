import { WrenchScrewdriverIcon, HomeModernIcon, WindowIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Modular Kitchens',
    description: 'Sleek, durable, and termite-proof aluminium modular kitchens designed for modern homes.',
    icon: HomeModernIcon,
  },
  {
    title: 'Windows & Doors',
    description: 'High-quality aluminium sliding windows and doors that offer sound insulation and weather protection.',
    icon: WindowIcon,
  },
  {
    title: 'Office Partitions',
    description: 'Custom aluminium partitions for offices and commercial spaces to optimize layout and privacy.',
    icon: Square3Stack3DIcon,
  },
  {
    title: 'Custom Fabrication',
    description: 'Tailored aluminium solutions for wardrobes, cabinets, and structural needs.',
    icon: WrenchScrewdriverIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in a wide range of aluminium fabrication services, delivering quality and precision in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary-maroon group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-blue transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
