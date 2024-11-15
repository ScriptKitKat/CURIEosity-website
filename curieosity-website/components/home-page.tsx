'use client'

import { ChevronDown, ArrowRight, MapPin } from "lucide-react"
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';
import world from './images/world.png';
import Link from 'next/link';
import Contact from '@/components/contact';

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FF5C8D] to-purple-900">
      <main className="flex-grow items-center justify-center">
        <section id="home" className="py-36">
          <div className="text-center fade-in-rise">
            <h1 className="title-font text-6xl md:text-8xl font-semibold text-white mb-6">
              Ignite Your
              <br />
              Curiosity
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
              Join our hackathons and workshops designed to inspire the next generation of innovators in
              tech.
            </p>
            <Link href="/events" className="bg-[#2D1E2F] text-white text-xl font-bold py-3 px-8 rounded-full hover:bg-[#FFC947] hover:bg-opacity-90 transition duration-300">
              Register now
            </Link>
          </div>
        </section>

        <div className="inset-x-0 bottom-0 h-24 bg-[#2D1E2F] rounded-t-full">
          <div className="inset-x-0 pt-10 bottom-16 flex justify-center">
            <a href="#what-we-do">
            <ChevronDown className="w-8 h-8 text-white animate-bounce" />
            </a>
          </div>
        </div>
        <section id="what-we-do" className="py-16 px-4 bg-[#2D1E2F] text-white">
          <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Educational Workshops",
                description: "We provide weekly or monthly workshops to companies and nonprofit looking to educate their team or community.",
                icon: "🎓",
                link: "/",
              },
              {
                title: "Events",
                description: "Want to learn from industry experts and academic leaders? Join us at one of our events covering AI, blockchain, greentech, and more!",
                icon: "🎉",
                link: "/events",
              },
              {
                title: "Startup Funding",
                description: "Our pitch competitions and hackathons provide startup funding as prizes, empowering you to turn your idea into reality!",
                icon: "💰",
                link: "/",
              },
              {
                title: "Join Our Team",
                description: "We are currently seeking talented students with a strong passion for business and technology to join our team.",
                icon: "🤝",
                link: "https://tinyurl.com/CURIEosityRecruitInfo",
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#3D2E3F] p-6 rounded-lg">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="mb-4">{item.description}</p>
                <a href={item.link} className="text-pink-400 hover:text-pink-300 inline-flex items-center">
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
              <Image src={world} alt="World Map" className="w-full" />
              {[...Array(10)].map((_, i) => (
                <MapPin key={i} className="absolute text-pink-500" style={{
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 90}%`,
                }} />
              ))}
            </div>
            <p className="text-center mt-6">
              CURIEosity has reached and served 32 countries around the world including Argentina, Philippines, India, and more.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Interested in Supporting Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#3D2E3F] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Join Our Team</h3>
              <p className="mb-4">
                CURIEosity is a student-run organization dedicated to providing resources and opportunities in business and technology. Join our team to gain volunteer hours and gain valuable leadership experience!
              </p>
              <div className="flex gap-4">
                <a href="https://tinyurl.com/CURIEosityRecruitInfo" target="_blank">
                  <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition duration-300">
                    Apply Now
                  </button>
                </a>
              </div>
            </div>
            <div className="bg-[#3D2E3F] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Sponsor Us!</h3>
              <p className="mb-4">
                CURIEosity is a 501(c)(3) nonprofit organization. All donations are tax-deductible. For donations above $250, please provide your name and email to receive a tax receipt. Contact us below if you would like to sponsor our initiatives.
              </p>
              <div className="flex gap-4">
                <a href="https://hcb.hackclub.com/donations/start/curieosity?amount=10000" target="_blank">
                  <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition duration-300">
                    Donate
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 px-4 bg-[#3D2E3F] text-white">
          <Contact />
        </section>
      </main>
    </div>
  )
}