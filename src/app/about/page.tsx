import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              About
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Making healthcare costs transparent and accessible for every Filipino family. Find and compare hospital room rates across the Philippines in one convenient platform.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                To provide Filipino families with transparent, up-to-date information about hospital room rates and healthcare costs across the Philippines. We believe that healthcare pricing should be accessible and easy to understand for everyone.
              </p>
              <p className="text-lg text-gray-600">
                Our platform empowers patients and their families to make informed decisions about their healthcare by comparing costs, amenities, and services before medical emergencies arise.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-4">
                To create a future where every Filipino has access to transparent healthcare pricing information, reducing financial stress during medical emergencies and enabling better healthcare planning.
              </p>
              <p className="text-lg text-gray-600">
                We envision a healthcare system where cost transparency leads to better patient outcomes and more affordable healthcare for all Filipinos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Built This</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Healthcare costs in the Philippines can be overwhelming, and families often struggle to find transparent pricing information when they need it most. During medical emergencies, the last thing patients should worry about is calling multiple hospitals to compare rates.
                </p>
                <p>
                  Many Filipino families have experienced the stress of unexpected medical bills or the frustration of not knowing which hospitals offer the best value for their needs. Information about room rates, amenities, and services is often scattered or difficult to access.
                </p>
                <p>
                  My platform solves this by aggregating hospital room rate information from across the Philippines, making it easy to search, compare, and plan for healthcare expenses before they become urgent.
                </p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Key Problems I Address:</h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Lack of transparent hospital pricing information
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Time-consuming process of calling multiple hospitals
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Difficulty comparing amenities and services
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Unexpected medical bills and financial stress
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Limited access to healthcare cost planning tools
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Features</h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive hospital information at your fingertips
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hospital Directory</h3>
              <p className="text-gray-600">
                Comprehensive database of hospitals across the Philippines with contact information, location, and basic details.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Room Rate Comparison</h3>
              <p className="text-gray-600">
                Compare room rates across different hospitals, from economy rooms to private suites, with detailed pricing information.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Search & Filters</h3>
              <p className="text-gray-600">
                Search by hospital name or use our comprehensive filters: region, price range, and room type to find exactly what you need.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m9-5a2 2 0 01-2 2H9m6 0a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Amenities & Services</h3>
              <p className="text-gray-600">
                Detailed information about room amenities, medical services, and facilities available at each hospital.
              </p>
            </div>

            {/* <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Insurance Information</h3>
              <p className="text-gray-600">
                Information about which hospitals accept PhilHealth, HMO plans, and other insurance coverage options.
              </p>
            </div> */}

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Rate Updates</h3>
              <p className="text-gray-600">
                Our community helps keep room rate information current by submitting updated pricing they&apos;ve encountered, all verified by our admin team.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile-Friendly</h3>
              <p className="text-gray-600">
                Access hospital information anytime, anywhere with our mobile-optimized platform designed for Filipino users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600">
              Simple steps to find the right hospital for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Search & Filter</h3>
              <p className="text-gray-600">
                Search by typing hospital names or use our filters: select your preferred region, set your price range, and choose room type (ward, private, suite, etc.).
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compare</h3>
              <p className="text-gray-600">
                Review room rates, amenities, and services across multiple hospitals to find the best option for your budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contribute</h3>
              <p className="text-gray-600">
                Help keep information current by submitting updated room rates and hospital details for admin review.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact</h3>
              <p className="text-gray-600">
                Get direct contact information and make informed decisions about your healthcare with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Features */}
      <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Powerful Search Capabilities</h2>
            <p className="mt-4 text-xl text-gray-600">
              Find the perfect hospital and room type for your needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Multiple Ways to Search</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Hospital Name Search</h4>
                    <p className="text-gray-600">Type the name of any hospital to quickly find specific facilities you&apos;re looking for.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Region Filter</h4>
                    <p className="text-gray-600">Select from all 17 regions in the Philippines to find hospitals in your area or preferred location.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Price Range Filter</h4>
                    <p className="text-gray-600">Set your budget range to find hospitals with room rates that fit your financial capacity.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Room Type Filter</h4>
                    <p className="text-gray-600">Choose from ward beds, semi-private, private rooms, suites, and other room categories based on your preferences.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">Common Room Types Available</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">🏥</div>
                  <h5 className="font-medium text-gray-900">Ward Bed</h5>
                  <p className="text-sm text-gray-600">Shared room</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">🛏️</div>
                  <h5 className="font-medium text-gray-900">Semi-Private</h5>
                  <p className="text-sm text-gray-600">2-bed room</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">🚪</div>
                  <h5 className="font-medium text-gray-900">Private Room</h5>
                  <p className="text-sm text-gray-600">Single occupancy</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">👑</div>
                  <h5 className="font-medium text-gray-900">Suite</h5>
                  <p className="text-sm text-gray-600">Premium rooms</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">🏨</div>
                  <h5 className="font-medium text-gray-900">Executive</h5>
                  <p className="text-sm text-gray-600">Luxury options</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">🚑</div>
                  <h5 className="font-medium text-gray-900">ICU</h5>
                  <p className="text-sm text-gray-600">Critical care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Quality Assurance */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Community-Powered Room Rates</h2>
            <p className="mt-4 text-xl text-gray-600">
              Keeping room rate information fresh through community submissions and rigorous admin verification
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Room Rate Submissions</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Submit Updated Room Rates</h4>
                    <p className="text-gray-600">Community members can submit current room rates they&apos;ve encountered during hospital visits, inquiries, or recent admissions. This helps keep our database accurate and up-to-date.</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-900 mb-2">What You Can Submit:</h5>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>• Current room rates for different room types</li>
                    <li>• Pricing information for ward beds, private rooms, suites</li>
                    <li>• Recent rate changes you&apos;ve observed</li>
                    <li>• Special package rates or discounts</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quality Assurance Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-semibold text-green-600">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Submission Review</h4>
                    <p className="text-gray-600">All community contributions are carefully reviewed by me before being published to the platform.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-semibold text-green-600">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Verification Process</h4>
                    <p className="text-gray-600">I cross-reference submissions with official hospital information and recent market data for accuracy.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-semibold text-green-600">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Publication & Updates</h4>
                    <p className="text-gray-600">Approved information is published to the platform, ensuring users always have access to reliable, current data.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Join Our Community of Rate Contributors</h4>
              <p className="text-gray-600 mb-6">
                Help fellow Filipinos by sharing current room rate information you&apos;ve encountered. Every submission helps make healthcare pricing more transparent and accessible for everyone.
              </p>
              <Link href="/submit-rates" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Become a Contributor
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">My Commitment to Filipinos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accuracy & Reliability</h3>
              <p className="text-gray-600">
                We work continuously to ensure our hospital information and room rates are current and accurate. Our team regularly updates the database and verifies information with healthcare providers.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Always Free</h3>
              <p className="text-gray-600">
                Healthcare information should be accessible to everyone. My platform will always be free to use because I believe cost should never be a barrier to healthcare transparency.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy Protection</h3>
              <p className="text-gray-600">
                We respect your privacy and don&apos;t collect personal health information. You can search and compare hospital rates without sharing sensitive data.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Improvement</h3>
              <p className="text-gray-600">
                I am constantly improving our platform based on user feedback and the evolving needs of Filipino families seeking healthcare transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Start Your Hospital Search Today
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take control of your healthcare decisions with transparent, accessible information about hospital room rates across the Philippines.
          </p>
          <div className="space-x-4">
            <Link href="/" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Search Hospitals
            </Link>
            <Link href="/contact" className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}