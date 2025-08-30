import React from 'react';
import { Sprout, Package, Recycle } from 'lucide-react';

const services = [
  {
    title: 'Hands-on Workshops',
    description:
      'Learn seed starting, balcony gardening, soil health, and preserving harvests with our monthly classes taught by co-op members.',
    icon: Sprout,
    color: 'bg-green-700',
  },
  {
    title: 'Seasonal Produce Boxes',
    description:
      'Subscribe for weekly or bi-weekly boxes packed with greens, herbs, and locally grown veggies harvested the same morning.',
    icon: Package,
    color: 'bg-emerald-700',
  },
  {
    title: 'Community Compost Drop-off',
    description:
      'Bring your food scraps to our drop sites. We turn waste into nutrient-rich compost that feeds our gardens and trees.',
    icon: Recycle,
    color: 'bg-stone-700',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-stone-100 to-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="md:flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900">What we offer</h2>
          <p className="text-stone-600 md:max-w-md mt-3 md:mt-0">
            Whether you’re brand-new to growing or a seasoned gardener, our co-op supports your journey from soil to supper.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`inline-flex items-center justify-center ${s.color} text-white w-12 h-12 rounded-lg shadow` }>
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-stone-900">{s.title}</h3>
              <p className="mt-2 text-stone-600 text-sm leading-relaxed">{s.description}</p>
              {s.title === 'Seasonal Produce Boxes' && (
                <div className="mt-4">
                  <a href="#contact" className="text-green-800 font-medium hover:underline">Subscribe now →</a>
                </div>
              )}
              {s.title === 'Community Compost Drop-off' && (
                <div className="mt-4 text-sm text-stone-700">
                  Drop hours: Wed 5-7pm, Sat 9am-1pm
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
