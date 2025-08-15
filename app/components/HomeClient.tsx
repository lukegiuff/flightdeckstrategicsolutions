'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target,
  Calendar,
  FileText,
  X,
  Upload,
  ShieldCheck,
  Crown,
  TriangleAlert,
  Lightbulb
} from 'lucide-react';

// Type definitions
interface Page {
  slug: string;
  content: string;
  data: {
    title?: string;
    description?: string;
    [key: string]: unknown;
  };
}

interface Service {
  slug: string;
  content: string;
  data: {
    title?: string;
    short_description?: string;
    price?: string;
    features?: string[];
    order?: number;
    [key: string]: unknown;
  };
}

interface HomeClientProps {
  homePage: Page | null;
  services: Service[];
}

export default function HomeClient({ homePage, services }: HomeClientProps) {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalContent, setLegalModalContent] = useState('');

  // Sort services by order
  const sortedServices = services.sort((a, b) => (a.data.order || 0) - (b.data.order || 0));

  return (
    <main className="min-h-screen">
      {/* Hero Section - now using content from markdown */}
      <HeroSection homePage={homePage} />
      
      {/* What We Do Section - using content from markdown */}
      <WhatWeDoSection />
      
      {/* Workshop Topics - using services data */}
      <WorkshopTopicsSection services={sortedServices} />
      
      {/* Free Consultation */}
      <ConsultationSection />
      
      {/* Lunch & Learn Offer */}
      <LunchLearnSection />
      
      {/* Join Us – Pilot Facilitators */}
      <JoinUsSection />
      
      {/* Contact Us */}
      <ContactSection />
      
      {/* Footer */}
      <FooterSection onOpenLegal={(content) => {
        setLegalModalContent(content);
        setIsLegalModalOpen(true);
      }} />

      {/* Modals */}
      {isCalendarModalOpen && (
        <CalendarModal onClose={() => setIsCalendarModalOpen(false)} />
      )}

      {isLegalModalOpen && (
        <LegalModal 
          content={legalModalContent}
          onClose={() => setIsLegalModalOpen(false)} 
        />
      )}
    </main>
  );
}

// Hero Section Component - now dynamic
function HeroSection({ homePage }: { homePage: Page | null }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/HeroImage.png"
          alt="Professional boardroom meeting background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-jura font-medium text-white mb-6 leading-tight">
            {homePage?.data.title || 'Turning Flight-Deck Strategies into Boardroom Solutions'}
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {homePage?.data.description || 'Transform your business with aviation-inspired methodologies that deliver confident decision-making, psychological safety and high-performing teams with exceptional results.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
            >
              Book Consultation
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium hover:bg-white hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              Learn Our Approach
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </motion.section>
  );
}

// What We Do Section - parsing markdown content
function WhatWeDoSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      id="what-we-do"
      className="bg-gray-50 py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: What We Do - from markdown */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-jura font-medium text-black mb-6">What We Do</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Online Lunch and Learn series: 1 hour per session</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Bespoke, half-day or full-day workshops (either online or in-person), tailored to your individual business needs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Coming soon: immersive, experiential learning sessions using a 737-800 flight-simulator</span>
              </li>
            </ul>
          </div>
          
          {/* Right: Mission */}
          <div>
            <blockquote className="bg-white p-4 sm:p-8 rounded-2xl shadow-md/10 border-l-4 border-blue-600">
              <p className="text-gray-700 text-lg italic mb-4">
                &ldquo;Aviation has perfected the art of high-stakes decision-making under pressure. Our mission is to bring that same level of precision, clarity and systematic thinking to business leadership. We equip our clients with aviation-proven tools to develop high-performing teams, while promoting a culture of psychological safety, resilience and risk management.&rdquo;
              </p>
              <cite className="text-gray-600 font-medium not-italic">
                — CEO and Founder, Flight Deck Strategic Solutions
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Workshop Topics Section - now using services data with Lucide icons
function WorkshopTopicsSection({ services }: { services: Service[] }) {
  // Icon mapping function
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
      'target': Target,
      'shield-check': ShieldCheck,
      'users': Users,
      'crown': Crown,
      'triangle-alert': TriangleAlert,
      'lightbulb': Lightbulb
    };
    
    return iconMap[iconName] || Target; // Default to Target if icon not found
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      id="workshops"
      className="bg-white py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-jura font-medium text-black mb-4">Workshop Topics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive training modules blend aviation excellence with business strategy. Our workshops are bespoke, based on each client&apos;s individual business needs:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => {
            const IconComponent = getIcon(service.data.icon as string);
            
            return (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <div className="bg-white p-6 rounded-2xl shadow-md/10 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <IconComponent className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-jura font-medium text-black mb-3">{service.data.title}</h3>
                  <p className="text-gray-600">{service.data.short_description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

// Free Consultation Section
function ConsultationSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      id="consultation"
      className="bg-gray-50 py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-jura font-medium text-black mb-6">Free Strategic Consultation</h2>
          <p className="text-gray-700 mb-8">
            Discover how aviation-inspired methodologies can transform your organisation. Book a complimentary, 30-minute consultation with one of our expert Airline Pilot Facilitators.
          </p>
          
          <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-md/10 mb-8">
            <h3 className="text-xl font-jura font-medium text-black mb-4">What You&apos;ll Receive:</h3>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">We will explore with you in-depth the core issues facing your business, along with any potential consequences</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Assessment covering opportunities for development</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Customized training recommendations, to include bespoke training package</span>
              </li>
            </ul>
            
            <Link
              href="/contact"
              className="w-full bg-blue-600 text-white px-8 py-3 rounded-2xl font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 inline-block text-center"
            >
              <Calendar className="w-5 h-5 inline mr-2" />
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Lunch & Learn Section
function LunchLearnSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      id="lunch-learn"
      className="bg-white py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-jura font-medium text-black mb-6">Lunch & Learn Session</h2>
          <p className="text-gray-700 mb-8">
            Transform your team with our series of online Lunch & Learn sessions, led by one of our experienced Airline Pilot Course Facilitators. These concise learning experiences deliver essential information from our training modules, condensed into bite-sized chunks.
          </p>
          
          <div className="bg-gray-50 p-4 sm:p-8 rounded-2xl shadow-md/10 mb-8">
            <div className="text-4xl sm:text-6xl font-jura font-medium text-black mb-2">£995</div>
            <p className="text-gray-600 mb-6">Per individual session lasting 1 hour (up to 20 participants)</p>
            
            <p className="text-gray-700 mb-4">or</p>
            
            <div className="text-3xl sm:text-4xl font-jura font-medium text-black mb-2">£5750</div>
            <p className="text-gray-600 mb-6">entire course of 6 modules booked in advance (up to 20 people)</p>
            
            <p className="text-gray-700 mb-8">
              <strong>Modules covered:</strong> Precision Decision Making, Psychological Safety, Elevating Team Performance, Leadership Excellence: From the Cockpit to the C-Suite, Managing Risk, Embracing Failure.
            </p>
            
            <button 
              disabled
              className="w-full bg-gray-400 text-white px-8 py-3 rounded-2xl font-medium cursor-not-allowed"
              aria-label="Add to cart - currently unavailable"
            >
              Add to Cart
            </button>
            <p className="text-gray-500 text-sm mt-2">
              Booking system coming soon
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Join Us Section
function JoinUsSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      id="join-us"
      className="bg-gray-50 py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-jura font-medium text-black mb-6">Join Us – Pilot Facilitators</h2>
          <p className="text-gray-700 mb-8">
            Are you an experienced Commercial Pilot with leadership experience? Join our elite team of Pilot Facilitators and help transform businesses through aviation excellence.
          </p>
          
          <form className="bg-white p-4 sm:p-8 rounded-2xl shadow-md/10 text-left">
            <div className="mb-6">
              <label htmlFor="resume" className="block text-sm font-medium text-black mb-2">
                Upload Resume/CV
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-600 transition-colors duration-300">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <input type="file" id="resume" className="hidden" />
                <label htmlFor="resume" className="cursor-pointer text-blue-600 hover:text-blue-700">
                  Click to upload or drag and drop
                </label>
                <p className="text-gray-500 text-sm mt-1">PDF, DOC, DOCX up to 10MB</p>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="experience" className="block text-sm font-medium text-black mb-2">
                Aviation & Business Experience
              </label>
              <textarea
                id="experience"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                placeholder="Tell us about your aviation background and leadership experience..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-3 rounded-2xl font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Submit Application
            </button>
            
            <p className="text-gray-500 text-sm mt-4 text-center">
              Applications will be reviewed within 10 business days
            </p>
          </form>
        </div>
      </div>
    </motion.section>
  );
}

// Contact Section
function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      id="contact"
      className="bg-white py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-jura font-medium text-black mb-6">Contact Us</h2>
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-medium text-black mb-2">Email</h3>
                <p className="text-gray-700">enquiries@fdstrategicsolutions.com</p>
              </div>
              <div>
                <h3 className="font-medium text-black mb-2">Office</h3>
                <p className="text-gray-700">
                  Flight Deck Strategic Solutions Ltd<br />
                  Staple House, 5 Eleanor&apos;s Cross<br />
                  Dunstable, Beds, LU6 1SU
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-2xl font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Footer Section
function FooterSection({ onOpenLegal }: { onOpenLegal: (content: string) => void }) {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left: Logo */}
          <div className="mb-6 md:mb-0">
            <Image
              src="/assets/FooterLogo.png"
              alt="Flight Deck Strategic Solutions"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          
          {/* Right: Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <button 
              onClick={() => onOpenLegal('Terms & Conditions')}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
            >
              Terms & Conditions
            </button>
            <button 
              onClick={() => onOpenLegal('Privacy Policy')}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
            >
              Privacy
            </button>
            <button 
              onClick={() => onOpenLegal('Legal Disclaimer')}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
            >
              Legal Disclaimer
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Flight Deck Strategic Solutions Ltd. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Flight Deck Strategic Solutions Ltd, Registered in England and Wales No. 16506064
          </p>
        </div>
      </div>
    </footer>
  );
}

// Calendar Modal Component
function CalendarModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-jura font-medium text-black">Book Consultation</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="text-center py-8">
          <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <p className="text-gray-700 mb-4">
            Calendar integration coming soon
          </p>
          <p className="text-gray-500 text-sm">
            Please email us directly to schedule your consultation
          </p>
        </div>
      </div>
    </div>
  );
}

// Legal Modal Component
function LegalModal({ content, onClose }: { content: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-jura font-medium text-black">{content}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="text-center py-8">
          <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <p className="text-gray-700 mb-4">
            {content} content will be available here
          </p>
          <p className="text-gray-500 text-sm">
            Legal documentation is currently being finalized
          </p>
        </div>
      </div>
    </div>
  );
}
