import Link from 'next/link';
import { getAllServices } from '@/app/lib/content';

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl">
            Comprehensive strategic solutions designed to drive your business forward
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-12">
              {services.map((service) => (
                <div key={service.slug} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 text-4xl flex-shrink-0">
                      <i className={service.data.icon}></i>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.data.title}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {service.data.short_description}
                      </p>
                      
                      {service.data.price && (
                        <p className="text-lg font-semibold text-blue-600 mb-4">
                          {service.data.price}
                        </p>
                      )}
                      
                      {service.data.features && service.data.features.length > 0 && (
                        <div className="mb-6">
                          <h3 className="font-semibold text-gray-900 mb-2">Key Features:</h3>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {service.data.features.slice(0, 4).map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                        >
                          Learn More
                        </Link>
                        <Link
                          href="/contact"
                          className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Coming Soon</h2>
              <p className="text-gray-600">We&apos;re preparing our comprehensive service offerings. Please check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Flight Deck Strategic Solutions?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-blue-600 text-3xl mb-4">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Track record of delivering measurable improvements and sustainable growth for our clients.
              </p>
            </div>
            
            <div>
              <div className="text-blue-600 text-3xl mb-4">
                <i className="fa-solid fa-users"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Seasoned professionals with deep expertise across industries and functional areas.
              </p>
            </div>
            
            <div>
              <div className="text-blue-600 text-3xl mb-4">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership Approach</h3>
              <p className="text-gray-600">
                We work alongside your team, building capabilities and ensuring sustainable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your strategic challenges and learn how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
