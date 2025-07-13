import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '@/components/MobileMenu';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Philippine Hospitals Room Rates',
  description: 'Find hospitals and compare room rates across the Philippines',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation Header */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo with PNG Image */}
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="Philippine Hospitals Room Rates Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
                <div className="text-xl font-bold text-blue-600">
                  Philippine Hospitals Room Rates
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex space-x-6">
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Search Hospitals
                </Link>
                <Link 
                  href="/submit-rates" 
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Submit Room Rates
                </Link>
                <Link 
                  href="/admin" 
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Admin Dashboard
                </Link>
              </div>

              {/* Mobile Menu Component */}
              <MobileMenu />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-3">
                <Image
                  src="/logo.png"
                  alt="Philippine Hospital Room Rates Search Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto mt-1"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Philippine Hospitals Room Rates</h3>
                  <p className="text-gray-300">
                    Your trusted resource for finding hospitals and comparing room rates across the Philippines.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                    Search Hospitals
                  </Link>
                  <Link href="/submit-rates" className="block text-gray-300 hover:text-white transition-colors">
                    Submit Room Rates
                  </Link>
                  <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                    About the Project
                  </Link>
                  <Link href="/contact-us" className="block text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-300">
                  Email: nerwinc.hernando@gmail.com<br />
                  Phone: +63 917 5932711
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2025 Philippine Hospitals Room Rates. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
