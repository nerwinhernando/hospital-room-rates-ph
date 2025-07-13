import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Contact Me
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Have questions, suggestions, or want to contribute room rate information? I&apos;d love to hear from you and help make healthcare more transparent for Filipino families.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Response Times</h3>
              <p className="text-gray-600 mb-6">
                I personally read and respond to every message. Here&apos;s what you can expect:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Room Rate Submissions</h4>
                    <p className="text-gray-600 text-sm">Reviewed within 24-48 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Technical Issues</h4>
                    <p className="text-gray-600 text-sm">Response within 12-24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">General Inquiries</h4>
                    <p className="text-gray-600 text-sm">Response within 2-3 business days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Contribute Room Rate Information</h3>
              <p className="text-blue-800 mb-4">
                Help fellow Filipinos by sharing current hospital room rates you&apos;ve encountered. Every contribution helps make healthcare more transparent.
              </p>
              
              <div className="space-y-3 text-blue-700 text-sm">
                <p><strong>What to include:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Hospital name and location</li>
                  <li>Room type (ward, private, suite, etc.)</li>
                  <li>Current rate per day</li>
                  <li>Date when you obtained this information</li>
                  <li>Any special packages or discounts mentioned</li>
                </ul>
              </div>

              <Link href="/contribute" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                Submit Room Rates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s Make Healthcare More Transparent Together
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you have questions, room rate information to share, or ideas for improvement, I&apos;m here to listen and help.
          </p>
          <div className="space-x-4">
            <Link href="/submit-rates" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Submit Room Rates
            </Link>
            <Link href="/" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Search Hospitals
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}