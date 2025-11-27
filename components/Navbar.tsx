"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <Image
                            src="/images/logo.jpg"
                            alt="National Aluminium Logo"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                        <Link href="/" className="text-2xl font-bold text-primary-blue">
                            National<span className="text-primary-maroon">Aluminium</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="#home" className="text-gray-700 hover:text-primary-blue transition-colors font-medium">Home</Link>
                        <Link href="#about" className="text-gray-700 hover:text-primary-blue transition-colors font-medium">About</Link>
                        <Link href="#services" className="text-gray-700 hover:text-primary-blue transition-colors font-medium">Services</Link>
                        <Link href="#gallery" className="text-gray-700 hover:text-primary-blue transition-colors font-medium">Gallery</Link>
                        <Link href="#contact" className="bg-primary-maroon text-white px-6 py-2 rounded-full hover:bg-red-900 transition-colors font-medium">
                            Contact Us
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-primary-blue focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="#home" className="block px-3 py-2 text-gray-700 hover:text-primary-blue font-medium" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary-blue font-medium" onClick={() => setIsOpen(false)}>About</Link>
                        <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary-blue font-medium" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-primary-blue font-medium" onClick={() => setIsOpen(false)}>Gallery</Link>
                        <Link href="#contact" className="block px-3 py-2 text-primary-maroon font-bold" onClick={() => setIsOpen(false)}>Contact Us</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
