import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  WifiIcon,
} from '@heroicons/react/24/solid';
import MasterCard from "@/assets/images/master-card.png"
import PayPal from "@/assets/images/paypal.png"


const Footer: React.FC = () => (
  <footer className="w-full bg-[#273249ba] mt-8 border-t">
    <div className="flex flex-col md:flex-row flex-wrap gap-8 px-6 py-10 max-w-7xl mx-auto">
      <div className="flex-1 min-w-[200px] space-y-3">
        <b className="block mb-2 text-gray-800">Contact us</b>
        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
          <PhoneIcon className="w-5 h-5" />
          (+800) 123 456 7890
        </a>
        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
          <EnvelopeIcon className="w-5 h-5" />
          manager@shop.com
        </a>
        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
          <MapPinIcon className="w-5 h-5" />
          Location store
        </a>
      </div>
      <div className="flex-1 min-w-[200px] space-y-3">
        <b className="block mb-2 text-gray-800">Policies & info</b>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Terms & Conditions</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Policy for sellers</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Policy for Buyers</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Shipping & Refund</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Wholesales Policy</a>
      </div>
      <div className="flex-1 min-w-[200px] space-y-3">
        <b className="block mb-2 text-gray-800">Quick links</b>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Seller Login</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Seller Sign up</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Seller Handbook</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Seller Control</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Panel Seller FAQs</a>
      </div>
      <div className="flex-1 min-w-[200px] space-y-3">
        <b className="block mb-2 text-gray-800">My account</b>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Accessories</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Balcony Table</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Bar Units</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Beds</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Bedside Tables</a>
      </div>
      <div className="flex-1 min-w-[200px] space-y-3">
        <b className="block mb-2 text-gray-800">Subscribe now</b>
        <div className="text-gray-600 text-sm mb-2">
          Contrary to popular belief of Lorem Ipsum Latin amet Ltin from.
        </div>
        <form className="flex items-center gap-2">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your E-mail address"
            className="border rounded-l px-3 py-2 w-full focus:outline-none"
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-r">
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </form>
        <div className="flex gap-3 mt-3">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <svg className="w-5 h-5" fill="currentColor"><path d="M17.5 2h-15A.5.5 0 002 2.5v15a.5.5 0 00.5.5h8.1v-6.5H8.5V9.5h2.1V8.1c0-2.1 1.3-3.2 3.1-3.2.9 0 1.7.1 1.9.1v2.2h-1.3c-1 0-1.2.5-1.2 1.1v1.7h2.5l-.3 2.5h-2.2V18h4.3a.5.5 0 00.5-.5v-15a.5.5 0 00-.5-.5z" /></svg>
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600">
            <svg className="w-5 h-5" fill="currentColor"><path d="M18 2.1a7.1 7.1 0 01-2 .5A3.5 3.5 0 0017.5.3a7.1 7.1 0 01-2.2.8A3.5 3.5 0 009 4.5c0 .3 0 .6.1.9A10 10 0 012 1.1a3.5 3.5 0 001.1 4.7A3.5 3.5 0 012 5.2v.1a3.5 3.5 0 002.8 3.4 3.5 3.5 0 01-1.6.1 3.5 3.5 0 003.3 2.5A7.1 7.1 0 012 17.5a10 10 0 005.4 1.6c6.5 0 10-5.4 10-10v-.5A7.1 7.1 0 0018 2.1z" /></svg>
          </a>
          <a href="#" className="text-red-600 hover:text-red-800">
            <svg className="w-5 h-5" fill="currentColor"><path d="M10 15l5.19-3.09A1 1 0 0016 11V5a1 1 0 00-.81-.99L10 2 4.81 4.01A1 1 0 004 5v6a1 1 0 00.81.99L10 15zm0-2.18L5.5 10.5V5.5l4.5-2.6 4.5 2.6v5l-4.5 2.32z" /></svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <WifiIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center border-t px-6 py-4 bg-black">
      <div className="text-gray-500 text-sm mb-2 md:mb-0">
        Copyright © 2025 hazzem-badran
      </div>
      <div className="flex items-center gap-2">
        <img src={MasterCard} alt="MasterCard" className="h-6" />
        <img src={PayPal} alt="PayPal" className="h-9" />
        <img src={MasterCard} alt="MasterCard" className="h-6" />
        <img src={PayPal} alt="PayPal" className="h-9" />
        <img src={MasterCard} alt="MasterCard" className="h-6" />
        <img src={PayPal} alt="PayPal" className="h-9" />
        <img src={MasterCard} alt="MasterCard" className="h-6" />
        <img src={PayPal} alt="PayPal" className="h-9" />
      </div>
    </div>
  </footer>
);

export default Footer