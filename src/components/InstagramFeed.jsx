import React from 'react';
import { Instagram } from 'lucide-react';

// Note: For a fully live Instagram feed, replace the sample images with your embed or a third-party widget.
// This component provides a styled, immediately-usable gallery with links to your Instagram profile.

const images = [
  {
    src: 'https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop',
    alt: 'Fresh harvest of greens',
  },
  {
    src: 'https://images.unsplash.com/photo-1543165796-5426273eaab3?q=80&w=1200&auto=format&fit=crop',
    alt: 'Community compost buckets',
  },
  {
    src: 'https://images.unsplash.com/photo-1498599011461-4f56f7f5be28?q=80&w=1200&auto=format&fit=crop',
    alt: 'Workshop on seed starting',
  },
  {
    src: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200&auto=format&fit=crop',
    alt: 'Urban garden beds',
  },
  {
    src: 'https://images.unsplash.com/photo-1511690078903-71dc5a49f5e1?q=80&w=1200&auto=format&fit=crop',
    alt: 'Seasonal produce box',
  },
  {
    src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop',
    alt: 'Leafy greens close-up',
  },
];

const InstagramFeed = () => {
  return (
    <section id="instagram" className="py-16 md:py-24 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center bg-stone-800 text-white w-10 h-10 rounded-lg">
              <Instagram size={18} />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900">From the garden on Instagram</h2>
              <p className="text-stone-600">Follow along for weekly harvests, tips, and member stories</p>
            </div>
          </div>
          <a
            href="https://instagram.com/yourcoop"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-700 to-green-700 text-white px-4 py-2 font-medium hover:opacity-95"
          >
            Follow @yourcoop
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com/yourcoop"
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-xl border border-stone-200 bg-white"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <a
            href="https://instagram.com/yourcoop"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-stone-900 text-white px-4 py-2 font-medium"
          >
            Follow @yourcoop
          </a>
        </div>

        <div className="mt-6 text-xs text-stone-500">
          To embed a live Instagram feed, replace this gallery with your preferred embed snippet or widget.
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
