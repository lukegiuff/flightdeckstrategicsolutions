'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  TrendingUp, 
  Award,
  Calendar,
  FileText,
  X,
  Upload
} from 'lucide-react';

export default function Home() {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalContent, setLegalModalContent] = useState('');

  return (
    <main className="min-h-screen">
      {/* Hero / Banner */}
      <HeroSection />
      
      {/* What We Do + Mission */}
      <WhatWeDoSection />
      
      {/* Workshop Topics */}
      <WorkshopTopicsSection />
      
      {/* Join Us – Pilot Facilitators */}
      <JoinUsSection />
      
      {/* Lunch & Learn Offer */}
      <LunchLearnSection />
      
      {/* Free Consultation */}
      <ConsultationSection onOpenCalendar={() => setIsCalendarModalOpen(true)} />
      
      {/* Contact Us */}
      <ContactSection />
      
      {/* Footer */}
      <FooterSection onOpenLegal={(content) => {
        setLegalModalContent(content);
        setIsLegalModalOpen(true);
      }} />

      {/* Calendar Modal */}
      {isCalendarModalOpen && (
        <CalendarModal onClose={() => setIsCalendarModalOpen(false)} />
      )}

      {/* Legal Modal */}
      {isLegalModalOpen && (
        <LegalModal 
          content={legalModalContent}
          onClose={() => setIsLegalModalOpen(false)} 
        />
      )}
    </main>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden"
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
        {/* Black overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-jura font-medium text-white mb-6 leading-tight">
            Turning Flight-Deck Discipline into Boardroom Results
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your leadership team with aviation-inspired methodologies that deliver 
            precision, accountability, and exceptional results in every business decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-brand px-8 py-4 rounded-2xl font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
              aria-label="Book consultation"
            >
              Book Consultation
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Learn more about our approach"
            >
              Learn Our Approach
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </motion.section>
  );
}

// What We Do + Mission Section
function WhatWeDoSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      id="what-we-do"
      className="bg-gray-50 py-16"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: What We Do */}
          <div>
            <h2 className="text-3xl font-jura font-medium text-black mb-6">What We Do</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700">Executive leadership workshops using aviation safety protocols</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700">Decision-making frameworks adapted from flight deck procedures</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700">Team communication training based on crew resource management</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700">Crisis management simulations for senior executives</span>
              </li>
            </ul>
          </div>
          
          {/* Right: Mission */}
          <div>
            <blockquote className="bg-white p-8 rounded-2xl shadow-md/10 border-l-4 border-brand">
              <p className="text-gray-700 text-lg italic mb-4">
                &ldquo;Aviation has perfected the art of high-stakes decision making under pressure. 
                Our mission is to bring that same level of precision, clarity, and systematic thinking 
                to business leadership.&rdquo;
              </p>
              <cite className="text-gray-600 font-medium not-italic">
                — Flight Deck Strategic Solutions
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Workshop Topics Section
function WorkshopTopicsSection() {
  const topics = [
    {
      icon: Users,
      title: "Crew Resource Management",
      description: "Build high-performing teams through aviation-proven communication protocols"
    },
    {
      icon: Target,
      title: "Precision Decision Making",
      description: "Systematic frameworks for critical business decisions under pressure"
    },
    {
      icon: TrendingUp,
      title: "Risk Assessment & Mitigation",
      description: "Proactive risk management strategies adapted from flight safety procedures"
    },
    {
      icon: Award,
      title: "Leadership Excellence",
      description: "Command presence and authority development for executive teams"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      id="workshops"
      className="bg-white py-16"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-jura font-medium text-black mb-4">Workshop Topics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive training modules blend aviation excellence with business strategy
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md/10 border border-gray-200 hover:border-brand hover:shadow-lg transition-all duration-300">
              <topic.icon className="w-12 h-12 text-brand mb-4" />
              <h3 className="text-xl font-jura font-medium text-black mb-3">{topic.title}</h3>
              <p className="text-gray-600">{topic.description}</p>
            </div>
          ))}
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
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-jura font-medium text-black mb-6">Join Us – Pilot Facilitators</h2>
          <p className="text-gray-700 mb-8">
            Are you a commercial pilot with leadership experience? Join our elite team of facilitators 
            and help transform business leadership through aviation excellence.
          </p>
          
          <form className="bg-white p-8 rounded-2xl shadow-md/10 text-left">
            <div className="mb-6">
              <label htmlFor="resume" className="block text-sm font-medium text-black mb-2">
                Upload Resume/CV
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-brand transition-colors duration-300">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <input type="file" id="resume" className="hidden" />
                <label htmlFor="resume" className="cursor-pointer text-brand hover:text-blue-700">
                  Click to upload or drag and drop
                </label>
                <p className="text-gray-500 text-sm mt-1">PDF, DOC, DOCX up to 10MB</p>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="experience" className="block text-sm font-medium text-black mb-2">
                Aviation & Leadership Experience
              </label>
              <textarea
                id="experience"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-brand transition-colors"
                placeholder="Tell us about your aviation background and leadership experience..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-brand text-white px-8 py-3 rounded-2xl font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand"
            >
              Submit Application
            </button>
            
            <p className="text-gray-500 text-sm mt-4 text-center">
              {/* TODO link to Decap or backend */}
              Applications will be reviewed within 5 business days
            </p>
          </form>
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
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-jura font-medium text-black mb-6">Lunch & Learn Session</h2>
          <p className="text-gray-700 mb-8">
            Transform your team&apos;s decision-making process with our intensive 
            lunch & learn workshop featuring real aviation case studies.
          </p>
          
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md/10 mb-8">
            <div className="text-6xl font-jura font-medium text-black mb-2">£995</div>
            <p className="text-gray-600 mb-6">Per session (up to 12 participants)</p>
            
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700">2-hour interactive workshop</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700">Catered lunch included</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700">Practical decision-making tools</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700">Digital resource kit</span>
              </li>
            </ul>
            
            <button 
              disabled
              className="w-full bg-gray-400 text-white px-8 py-3 rounded-2xl font-medium cursor-not-allowed"
              aria-label="Add to cart - currently unavailable"
            >
              Add to Cart
            </button>
            <p className="text-gray-500 text-sm mt-2">
              {/* TODO Stripe integration */}
              Booking system coming soon
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Free Consultation Section
function ConsultationSection({ onOpenCalendar }: { onOpenCalendar: () => void }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      id="consultation"
      className="bg-gray-50 py-16"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-jura font-medium text-black mb-6">Free Strategic Consultation</h2>
          <p className="text-gray-700 mb-8">
            Discover how aviation-inspired leadership methodologies can transform your organization. 
            Book a complimentary 30-minute consultation with our expert facilitators.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-md/10 mb-8">
            <h3 className="text-xl font-jura font-medium text-black mb-4">What You&apos;ll Receive:</h3>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700">Organizational assessment framework</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700">Customized training recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700">ROI projections for leadership development</span>
          </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700">Complimentary resource toolkit</span>
          </li>
            </ul>
            
            <button 
              onClick={onOpenCalendar}
              className="w-full bg-brand text-white px-8 py-3 rounded-2xl font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand"
              aria-label="Book free consultation"
            >
              <Calendar className="w-5 h-5 inline mr-2" />
              Book Free Consultation
            </button>
          </div>
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
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-jura font-medium text-black mb-6">Contact Us</h2>
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-medium text-black mb-2">Email</h3>
                <p className="text-gray-700">info@fdstrategicsolutions.com</p>
              </div>
              <div>
                <h3 className="font-medium text-black mb-2">Office</h3>
                <p className="text-gray-700">
                  Flight Deck Strategic Solutions Ltd<br />
                  123 Aviation Way<br />
                  London, United Kingdom<br />
                  SW1A 1AA
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-brand transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-brand transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand focus:border-brand transition-colors"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-brand text-white px-8 py-3 rounded-2xl font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand"
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
      <div className="max-w-6xl mx-auto px-6 md:px-8">
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
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded"
            >
              Terms & Conditions
            </button>
            <button 
              onClick={() => onOpenLegal('Privacy Policy')}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded"
            >
              Privacy
            </button>
            <button 
              onClick={() => onOpenLegal('Legal Disclaimer')}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded"
            >
              Legal Disclaimer
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Flight Deck Strategic Solutions Ltd. All rights reserved.
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
            className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand rounded"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="text-center py-8">
          <Calendar className="w-16 h-16 text-brand mx-auto mb-4" />
          <p className="text-gray-700 mb-4">
            Calendar integration coming soon
          </p>
          <p className="text-gray-500 text-sm">
            {/* TODO Calendly integration */}
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
            className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand rounded"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="text-center py-8">
          <FileText className="w-16 h-16 text-brand mx-auto mb-4" />
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

// FDSS landing page v1 – pending client sign-off
