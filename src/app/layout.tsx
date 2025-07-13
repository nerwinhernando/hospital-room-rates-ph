import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Philippines Hospital Room Rates Search',
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
              {/* Logo/Brand */}
              <Link href="/" className="flex items-center">
                <div className="text-xl font-bold text-blue-600">
                  Philippines Hospital Room Rates Search
                </div>
              </Link>

              {/* Navigation Links */}
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

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-gray-700 hover:text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Philippines Hospital Room Rates Search</h3>
                <p className="text-gray-300">
                  Your trusted resource for finding hospitals and comparing room rates across the Philippines.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/" className="block text-gray-300 hover:text-white">
                    Search Hospitals
                  </Link>
                  <Link href="/submit-rates" className="block text-gray-300 hover:text-white">
                    Submit Room Rates
                  </Link>
                  <Link href="/about" className="block text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-300">
                  Email: nerwinc.hernando@gmail.com<br />
                  Phone: +63 917 593 2711
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2025 PHilippines Hospital Room Rates Search. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
