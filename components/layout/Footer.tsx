// components/layout/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4 mt-8">
      &copy; {new Date().getFullYear()} StayFinder. All rights reserved.
    </footer>
  );
};

export default Footer;

