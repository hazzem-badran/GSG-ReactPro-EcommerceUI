// Footer data constants
export const FOOTER_DATA = {
  contactInfo: {
    title: "Contact us",
    items: [
      { 
        type: "phone", 
        text: "(+800) 123 456 7890", 
        href: "tel:+8001234567890",
        icon: "phone"
      },
      { 
        type: "email", 
        text: "manager@shop.com", 
        href: "mailto:manager@shop.com",
        icon: "envelope"
      },
      { 
        type: "location", 
        text: "Location store", 
        href: "#",
        icon: "map"
      }
    ]
  },
  
  policies: {
    title: "Policies & info",
    items: [
      { text: "Terms & Conditions", href: "#" },
      { text: "Policy for sellers", href: "#" },
      { text: "Policy for Buyers", href: "#" },
      { text: "Shipping & Refund", href: "#" },
      { text: "Wholesales Policy", href: "#" }
    ]
  },

  quickLinks: {
    title: "Quick links",
    items: [
      { text: "Seller Login", href: "#" },
      { text: "Seller Sign up", href: "#" },
      { text: "Seller Handbook", href: "#" },
      { text: "Seller Control", href: "#" },
      { text: "Panel Seller FAQs", href: "#" }
    ]
  },

  myAccount: {
    title: "My account",
    items: [
      { text: "Accessories", href: "#" },
      { text: "Balcony Table", href: "#" },
      { text: "Bar Units", href: "#" },
      { text: "Beds", href: "#" },
      { text: "Bedside Tables", href: "#" }
    ]
  },

  newsletter: {
    title: "Subscribe now",
    description: "Contrary to popular belief of Lorem Ipsum Latin amet Ltin from.",
    placeholder: "Your E-mail address"
  },

  socialMedia: [
    { name: "Facebook", href: "#", className: "text-primary hover:text-blue-800", iconType: "facebook" },
    { name: "Twitter", href: "#", className: "text-blue-400 hover:text-primary", iconType: "twitter" },
    { name: "YouTube", href: "#", className: "text-red-600 hover:text-red-800", iconType: "youtube" },
    { name: "WiFi", href: "#", className: "text-[#666] hover:text-primary", iconType: "wifi" }
  ],

  paymentMethods: [
    { src: "/images/master-card.png", alt: "MasterCard", height: "h-6" },
    { src: "/images/paypal.png", alt: "PayPal", height: "h-9" },
    { src: "/images/master-card.png", alt: "MasterCard", height: "h-6" },
    { src: "/images/paypal.png", alt: "PayPal", height: "h-9" },
    { src: "/images/master-card.png", alt: "MasterCard", height: "h-6" },
    { src: "/images/paypal.png", alt: "PayPal", height: "h-9" }
  ],

  copyright: "Copyright © 2025 hazzem-badran"
};