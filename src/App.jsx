import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import EventsCalendar from './components/EventsCalendar';
import InstagramFeed from './components/InstagramFeed';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-stone-800">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-green-600" />
            <span className="font-semibold tracking-tight text-stone-800">GreenRoots Co-op</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-green-700">Offerings</a>
            <a href="#events" className="hover:text-green-700">Events</a>
            <a href="#instagram" className="hover:text-green-700">Instagram</a>
            <a href="#contact" className="rounded-md bg-green-700 text-white px-3 py-1.5 hover:bg-green-800">Join</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <EventsCalendar />
        <InstagramFeed />
      </main>

      <footer id="contact" className="mt-20 border-t border-stone-200 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-stone-900">GreenRoots Co-op</h4>
            <p className="text-sm text-stone-600 mt-2">Growing together in our city. Workshops, produce boxes, and community composting.</p>
          </div>
          <div>
            <h5 className="font-medium text-stone-900">Visit Us</h5>
            <p className="text-sm text-stone-600 mt-2">123 Garden Lane, Your City, ST 00000</p>
            <p className="text-sm text-stone-600">Open: Sat-Sun 9am-2pm</p>
          </div>
          <div>
            <h5 className="font-medium text-stone-900">Contact</h5>
            <p className="text-sm text-stone-600 mt-2">hello@greenroots.co</p>
            <p className="text-sm text-stone-600">(555) 123-4567</p>
          </div>
        </div>
        <div className="text-center text-xs text-stone-500 pb-8">© {new Date().getFullYear()} GreenRoots Co-op. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
