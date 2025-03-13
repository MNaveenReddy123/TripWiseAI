import React from 'react';
import { Plane, MapPin, Calendar, Sparkles } from 'lucide-react';

function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

          {/* Main content */}
          <div className="relative flex flex-col items-center gap-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 rounded-full shadow-lg backdrop-blur-md" style={{ fontFamily: 'Montserrat, sans-serif' }}>
  <Sparkles className="w-6 h-6 text-amber-500" />
  <span className="text-2xl font-extrabold text-gray-900 tracking-tight">TripWiseAI</span>
</div>

            <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 max-w-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="inline-block bg-gradient-to-r from-[#f56551] to-rose-600 text-transparent bg-clip-text">
                Discover Your Next Adventure
              </span>
              <br />
              <span className="text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>with Intelligent Travel Planning</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Experience seamless travel planning with our AI-powered platform. Create personalized itineraries that match your style, budget, and dreams.
            </p>

            <div className="flex gap-4 mt-4">
              <a href="/create-trip">
                <button className="px-8 py-4 bg-gradient-to-r from-[#f56551] to-rose-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  <Plane className="w-5 h-5" />
                  Start Planning Now
                </button>
              </a>

              <a href="/my-trips">
                <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Watch Demos
                </button>
              </a>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: MapPin, title: "200+ Destinations", desc: "Explore curated locations worldwide" },
                { icon: Calendar, title: "Smart Planning", desc: "AI-optimized travel schedules" },
                { icon: Sparkles, title: "Personalized", desc: "Tailored to your preferences" }
              ].map((feature, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <feature.icon className="w-8 h-8 text-[#f56551] mb-4" />
                  <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{feature.title}</h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Hero image */}
            <div className="relative mt-16 w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-transparent"></div>
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                alt="Travel Adventure"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;