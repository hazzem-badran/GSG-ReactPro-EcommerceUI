import React from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid';

interface FooterSectionProps {
  title: string;
  items: Array<{
    text: string;
    href: string;
    type?: string;
    icon?: string;
  }>;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'phone':
        return <PhoneIcon className="w-5 h-5 text-white" />;
      case 'envelope':
        return <EnvelopeIcon className="w-5 h-5 text-white" />;
      case 'map':
        return <MapPinIcon className="w-5 h-5 text-white" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 min-w-[200px] space-y-3">
      <b className="block mb-2 text-white">{title}</b>
      {items.map((item, index) => (
        <a 
          key={index}
          href={item.href} 
          className={`${item.icon ? 'flex items-center gap-2' : 'block'} text-[#666] hover:text-primary`}
        >
          {item.icon && getIcon(item.icon)}
          {item.text}
        </a>
      ))}
    </div>
  );
};

export default FooterSection;