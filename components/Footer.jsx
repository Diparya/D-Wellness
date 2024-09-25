const Footer = () => {
    return (
        <footer className="bg-black py-12">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <FooterSection
          title="Explore"
          items={['Meditation Sessions', 'Self-Care Products', 'Wellness Retreats', 'Workshops', 'Yoga Classes', 'Mindfulness Training', 'Holistic Health Tips']}
        />
        <FooterSection
          title="Resources"
          items={['Blog', 'Guides', 'Healthy Living Tips', 'Nutrition Plans', 'Mental Health Resources', 'Wellness Programs', 'Free Meditation Apps']}
        />
        <FooterSection
          title="Join the Community"
          items={['Wellness Newsletter', 'Become a Wellness Coach', 'Group Classes', 'Wellness Webinars', 'Ambassador Program', 'Partner with Us']}
        />
        <FooterSection
          title="About Us"
          items={['Our Story', 'Our Mission', 'Sustainability', 'Testimonials', 'Press', 'Contact Us', 'Careers']}
        />
            </div>
            <div className="border-t border-gray-300 py-6 mt-8">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center md:space-x-6 text-sm text-gray-500 mb-4 md:mb-0">
                <a href="#" className="hover:text-gray-400">Intellectual Property Policy</a>
                <a href="#" className="hover:text-gray-400">Terms of Service</a>
                <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                <a href="#" className="hover:text-gray-400">Security</a>
              </div>
              <div className="text-sm text-gray-500">© 2024 D-Wellness, Inc. All rights reserved.</div>
            </div>
          </div>
        </footer>
    );
};

const FooterSection = ({ title, items }) => (
    <div>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <ul>
            {items.map((item, index) => (
                <li key={index} className="mb-2 text-gray-400 hover:text-gray-300 cursor-pointer">{item}</li>
            ))}
        </ul>
    </div>
);

export default Footer;
