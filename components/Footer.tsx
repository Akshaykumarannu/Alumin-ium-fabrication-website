import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              National<span className="text-primary-maroon">Aluminium</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-4">
              Leading provider of premium aluminium fabrication solutions in Kasargod. We combine durability with modern aesthetics to create beautiful spaces.
            </p>
            <p className="text-gray-400 text-sm">
              Industrial Area, Vidhyanagar<br />
              Kasargod, Kerala, India<br />
              Phone: <a href="tel:+918136883749" className="hover:text-white transition-colors">+91 81368 83749</a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-maroon">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-maroon">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Modular Kitchens</li>
              <li className="text-gray-400">Aluminium Windows</li>
              <li className="text-gray-400">Office Partitions</li>
              <li className="text-gray-400">Custom Fabrication</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} National Aluminium. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
