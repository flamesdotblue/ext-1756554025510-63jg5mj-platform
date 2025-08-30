import React from 'react';
import { Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-stone-50 to-stone-100 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-800 px-3 py-1 text-xs font-medium mb-4">
              <Leaf size={14} /> Urban Farming Co-op
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900">
              Grow local. Eat seasonal. Build community.
            </h1>
            <p className="mt-4 text-stone-700 text-lg">
              We’re a neighborhood co-op cultivating fresh food, sharing skills, and keeping waste out of landfills through composting.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center rounded-lg bg-green-700 text-white px-5 py-3 font-medium shadow-sm hover:bg-green-800">Explore Offerings</a>
              <a href="#events" className="inline-flex items-center rounded-lg bg-stone-800 text-white px-5 py-3 font-medium hover:bg-stone-900">Upcoming Workshops</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-stone-200">
              <img
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1400&auto=format&fit=crop"
                alt="Urban farm beds with leafy greens"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-stone-800 text-stone-100 px-4 py-3 rounded-lg shadow-lg">
              Member-owned • Soil-first • Zero-waste minded
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
