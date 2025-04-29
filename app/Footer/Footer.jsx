const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  