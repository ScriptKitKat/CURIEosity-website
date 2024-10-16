'use client'

import { ChevronDown, ArrowRight, MapPin } from "lucide-react"


export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600">
      <header className="bg-[#2D1E2F] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-pink-500"
            >
              <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
              <path
                fillRule="evenodd"
                d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-2xl font-bold">
              CURIE<span className="text-pink-500">osity</span>
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="border-b-2 border-white">
              Home
            </a>
            <a href="#" className="hover:text-pink-300">
              About
            </a>
            <a href="#" className="hover:text-pink-300">
              Events
            </a>
            <a href="#" className="hover:text-pink-300">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-grow items-center justify-center">
        <section id="home" className="py-40">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Ignite Your
              <br />
              Curiosity
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
              Join our hackathons and workshops designed to inspire the next generation of innovators in
              tech.
            </p>
            <button className="bg-[#2D1E2F] text-white text-xl font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
              Register now
            </button>
          </div>
        </section>
        <div className="inset-x-0 bottom-0 h-24 bg-[#2D1E2F] rounded-t-full">
          <div className="inset-x-0 pt-10 bottom-16 flex justify-center">
            <ChevronDown className="w-8 h-8 text-white animate-bounce" />
          </div>
        </div>
        <section className="py-16 px-4 bg-[#2D1E2F] text-white">
          <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Educational Workshops",
                description: "We provide weekly or monthly workshops to companies and nonprofit looking to educate their team or community.",
                icon: "🎓",
              },
              {
                title: "Events",
                description: "Want to learn from industry experts and academic leaders? Join us at one of our events covering AI, blockchain, greentech, and more!",
                icon: "🎉",
              },
              {
                title: "Startup Funding",
                description: "Our pitch competitions and hackathons provide startup funding as prizes, empowering you to turn your idea into reality!",
                icon: "💰",
              },
              {
                title: "Join Our Team",
                description: "We are currently seeking talented students with a strong passion for business and technology to join our team.",
                icon: "🤝",
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#3D2E3F] p-6 rounded-lg">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="mb-4">{item.description}</p>
                <a href="#" className="text-pink-400 hover:text-pink-300 inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-br from-pink-900 to-purple-900 text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Global Reach</h2>
            <div className="relative">
              <img src="/placeholder.svg?height=400&width=800" alt="World Map" className="w-full" />
              {[...Array(10)].map((_, i) => (
                <MapPin key={i} className="absolute text-pink-500" style={{
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 90}%`,
                }} />
              ))}
            </div>
            <p className="text-center mt-6">
              CURIEosity has reached and served 27 countries around the world including Argentina, Philippines, India, and more.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Interested in Supporting Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#3D2E3F] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Join Our Team</h3>
              <p className="mb-4">
                CURIEosity is a student-run organization dedicated to providing resources and opportunities in business and technology. Join our team to gain 1750+ volunteer hours and gain valuable leadership experience!
              </p>
              <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition duration-300">
                Apply Now
              </button>
            </div>
            <div className="bg-[#3D2E3F] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Donate or Sponsor Us!</h3>
              <p className="mb-4">
                CURIEosity is a 501(c)(3) nonprofit organization. All donations are tax-deductible. For donations above $250, please provide your name and email to receive a tax receipt. Contact us below if you would like to sponsor our initiatives.
              </p>
              <div className="flex gap-4">
                <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition duration-300">
                  Sponsor Us
                </button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">
                  Donate
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#3D2E3F] text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
            <p className="text-center mb-8">Interested in partnering with us? Send us a message!</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded bg-[#2D1E2F] border border-pink-400 focus:border-pink-500 focus:ring focus:ring-pink-200"
                  placeholder="e.g. jane@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 rounded bg-[#2D1E2F] border border-pink-400 focus:border-pink-500 focus:ring focus:ring-pink-200"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative h-24">
        
      </footer>
    </div>
  )
}