import { getPage, getSiteSettings } from '@/app/lib/content';

export default async function ContactPage() {
  const [contactPage, settings] = await Promise.all([
    getPage('contact'),
    getSiteSettings()
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {contactPage?.data.title || 'Contact Us'}
          </h1>
          {contactPage?.data.description && (
            <p className="text-xl">
              {contactPage.data.description}
            </p>
          )}
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {settings?.email && (
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 text-xl mt-1">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a 
                        href={`mailto:${settings.email}`}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {settings.email}
                      </a>
                    </div>
                  </div>
                )}
                
                {settings?.phone && (
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 text-xl mt-1">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <a 
                        href={`tel:${settings.phone}`}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {settings.phone}
                      </a>
                    </div>
                  </div>
                )}
                
                {settings?.address && (
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 text-xl mt-1">
                      <i className="fa-solid fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <div className="text-gray-600 whitespace-pre-line">
                        {settings.address}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Business Hours */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              {settings?.social && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {settings.social.linkedin && (
                      <a
                        href={settings.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors text-2xl"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                    {settings.social.twitter && (
                      <a
                        href={settings.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors text-2xl"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {settings.social.facebook && (
                      <a
                        href={settings.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors text-2xl"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="strategic-planning">Strategic Planning</option>
                    <option value="business-growth">Business Growth</option>
                    <option value="operations">Operations Optimization</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your challenges and goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
              
              <p className="mt-4 text-sm text-gray-600">
                * Required fields. We&apos;ll respond to your inquiry within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      {contactPage?.content && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: contactPage.content }}
            />
          </div>
        </section>
      )}
    </div>
  );
}
