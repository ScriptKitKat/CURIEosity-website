
export default function Footer() {
  return (
    <div className="flex space-x-6 relative h-24 bg-[#2D1E2F] items-center justify-center">
        {/* Email Icon */}
        <a href="mailto:hello@curieosity.org" className="text-white hover:text-gray-400 space-x-2">
          <i className="fas fa-envelope fa-lg"></i>
          <span>hello@curieosity.org</span>
        </a> 
        {/*yo*/}
        
        {/* Discord Icon */}
        <a href="https://discord.gg/y4jUxuTTY3" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <i className="fab fa-discord fa-lg"></i>
        </a>

        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/company/curie-osity" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
    </div>
  );
}
