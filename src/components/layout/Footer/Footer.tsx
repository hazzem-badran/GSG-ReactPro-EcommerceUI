import React from 'react';
import { PaperAirplaneIcon, WifiIcon } from '@heroicons/react/24/solid';
import { FOOTER_DATA } from '../../../constants/footerData';
import FooterSection from './components/FooterSection';

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
  };

  const getSocialIcon = (iconType: string) => {
    switch (iconType) {
      case 'facebook':
        return (
          <svg className="w-5 h-5" fill="currentColor">
            <path d="M17.5 2h-15A.5.5 0 002 2.5v15a.5.5 0 00.5.5h8.1v-6.5H8.5V9.5h2.1V8.1c0-2.1 1.3-3.2 3.1-3.2.9 0 1.7.1 1.9.1v2.2h-1.3c-1 0-1.2.5-1.2 1.1v1.7h2.5l-.3 2.5h-2.2V18h4.3a.5.5 0 00.5-.5v-15a.5.5 0 00-.5-.5z" />
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor">
            <path d="M18 2.1a7.1 7.1 0 01-2 .5A3.5 3.5 0 0017.5.3a7.1 7.1 0 01-2.2.8A3.5 3.5 0 009 4.5c0 .3 0 .6.1.9A10 10 0 012 1.1a3.5 3.5 0 001.1 4.7A3.5 3.5 0 012 5.2v.1a3.5 3.5 0 002.8 3.4 3.5 3.5 0 01-1.6.1 3.5 3.5 0 003.3 2.5A7.1 7.1 0 012 17.5a10 10 0 005.4 1.6c6.5 0 10-5.4 10-10v-.5A7.1 7.1 0 0018 2.1z" />
          </svg>
        );
      case 'youtube':
        return (
          <svg className="w-5 h-5" fill="currentColor">
            <path d="M10 15l5.19-3.09A1 1 0 0016 11V5a1 1 0 00-.81-.99L10 2 4.81 4.01A1 1 0 004 5v6a1 1 0 00.81.99L10 15zm0-2.18L5.5 10.5V5.5l4.5-2.6 4.5 2.6v5l-4.5 2.32z" />
          </svg>
        );
      case 'wifi':
        return <WifiIcon className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full bg-[#222] mt-8 border-t">
      <div className="flex flex-col md:flex-row flex-wrap gap-8 px-6 py-10 max-w-7xl mx-auto">
        {/* Contact Info */}
        <FooterSection 
          title={FOOTER_DATA.contactInfo.title}
          items={FOOTER_DATA.contactInfo.items}
        />
        
        {/* Policies */}
        <FooterSection 
          title={FOOTER_DATA.policies.title}
          items={FOOTER_DATA.policies.items}
        />
        
        {/* Quick Links */}
        <FooterSection 
          title={FOOTER_DATA.quickLinks.title}
          items={FOOTER_DATA.quickLinks.items}
        />
        
        {/* My Account */}
        <FooterSection 
          title={FOOTER_DATA.myAccount.title}
          items={FOOTER_DATA.myAccount.items}
        />
        
        {/* Newsletter Section */}
        <div className="flex-1 min-w-[200px] space-y-3">
          <b className="block mb-2 text-white">{FOOTER_DATA.newsletter.title}</b>
          <div className="text-[#666] text-sm mb-2">
            {FOOTER_DATA.newsletter.description}
          </div>
          <form className="flex items-center gap-2" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              name="email"
              placeholder={FOOTER_DATA.newsletter.placeholder}
              className="border rounded-l px-3 py-2 w-full focus:outline-none"
              required
            />
            <button 
              type="submit" 
              className="bg-primary hover:bg-blue-700 text-white px-3 py-2 rounded-r transition-colors"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </form>
          
          {/* Social Media */}
          <div className="flex gap-3 mt-3">
            {FOOTER_DATA.socialMedia.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className={`${social.className} transition-colors`}
                aria-label={social.name}
              >
                {getSocialIcon(social.iconType)}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t px-6 py-4 bg-[#1c1c1c]">
        <div className="text-gray-500 text-sm mb-2 md:mb-0">
          {FOOTER_DATA.copyright}
        </div>
        <div className="flex items-center gap-2">
          {FOOTER_DATA.paymentMethods.map((method, index) => (
            <img 
              key={index}
              src={method.src} 
              alt={method.alt} 
              className={method.height}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;