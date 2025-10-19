import React from 'react';
import { NavLink } from 'react-router-dom';
import { AutoSliderBanner } from '@/components/AutoSliderBanner';
import GlassCard from '@/components/GlassCard';
import CardFlip from '@/components/CardFlip';
import { LiquidGlassCard } from '@/components/SimpleLiquidGlassCard';
import { Globe2, Layers3, Share2, PenTool } from 'lucide-react';

const Home: React.FC = () => {
  const halloweenServices = [
    {
      icon: <Globe2 className="h-6 w-6 text-orange-400" />,
      title: 'Website Design & Development',
      description:
        'High-polish marketing sites, product launches, and immersive brand worlds built for speed and SEO.',
      to: '/web',
      cta: 'Visit Web Studio →',
      highlight: ['Responsive UX', 'Story-driven flows', 'CMS ready'],
      image: '/services-halloween-hero.jpg',
      accent: 'from-orange-500/40 via-purple-600/20 to-transparent',
    },
    {
      icon: <Share2 className="h-6 w-6 text-orange-400" />,
      title: 'Social Media Marketing',
      description:
        'Campaign engines, short-form content systems, and community ops that keep the audience spellbound.',
      to: '/social',
      cta: 'See Social Kits →',
      highlight: ['Content calendars', 'Trend experiments', 'Creator partnerships'],
      image: '/services-halloween-pool.jpg',
      accent: 'from-fuchsia-500/40 via-rose-500/20 to-transparent',
    },
    {
      icon: <Layers3 className="h-6 w-6 text-orange-400" />,
      title: 'Mobile App & Software Development',
      description:
        'Product strategy, design systems, and iterative builds for mobile, web, and hybrid experiences.',
      to: '/dev',
      cta: 'Explore Dev Lab →',
      highlight: ['MVPs & feature sprints', 'Platform audits', 'Launch support'],
      image: '/services-halloween-mansion.jpg',
      accent: 'from-amber-400/35 via-purple-500/15 to-transparent',
    },
    {
      icon: <PenTool className="h-6 w-6 text-orange-400" />,
      title: 'Graphic Design & Branding',
      description:
        'Identity systems, packaging suites, and pitch decks that make your brand feel unmistakable.',
      to: '/custom-designs',
      cta: 'View Branding Work →',
      highlight: ['Logo suites', 'Packaging', 'Motion-ready assets'],
      image: '/services-halloween-house.jpg',
      accent: 'from-purple-400/40 via-indigo-500/15 to-transparent',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Fullscreen entrance banner */}
      <section className="px-0 pt-0">
        <AutoSliderBanner />
      </section>

      {/* Halloween Services Showcase */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-[#12030f] to-[#07070b]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,140,0,0.28),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(104,48,255,0.22),transparent_60%),radial-gradient(circle_at_50%_100%,rgba(255,90,0,0.25),transparent_55%)]" />
        <div className="relative container mx-auto">
          <div className="text-center mb-16 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-orange-200">
              Spooky Season Sprint
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              Craft Frightfully Good Experiences
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-white/75">
              Our core teams are in full Halloween mode—designing cinematic web launches, conjuring social
              activations, engineering apps, and dressing brands with hauntingly beautiful visuals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {halloweenServices.map((service) => (
              <GlassCard
                key={service.title}
                className="flex h-full flex-col gap-6 bg-black/70 p-6 sm:p-8"
                accentColor={service.accent}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={service.image.replace('.jpg', '.webp')}
                    alt={service.title}
                    className="hidden h-44 w-full object-cover object-center sm:block"
                    loading="lazy"
                  />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="sm:hidden h-44 w-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 text-sm font-semibold text-white/80">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur">
                      {service.icon}
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-orange-200/80">Feature Focus</p>
                      <p className="text-white/90">{service.highlight[0]}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-400/40 bg-orange-500/10 text-orange-200">
                      {service.icon}
                    </span>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                      <p className="mt-2 text-sm text-white/70">{service.description}</p>
                    </div>
                  </div>
                  <ul className="grid grid-cols-1 gap-2 text-sm text-white/60 sm:grid-cols-3">
                    {service.highlight.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <NavLink
                    to={service.to}
                    className="inline-flex items-center gap-2 text-sm font-medium text-orange-200 transition-colors hover:text-white"
                  >
                    {service.cta}
                  </NavLink>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-[#050309] to-black" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,122,0,0.18),transparent_55%),radial-gradient(circle_at_75%_20%,rgba(120,40,255,0.16),transparent_60%),radial-gradient(circle_at_55%_120%,rgba(255,90,0,0.18),transparent_60%)]" />
        <div className="relative container mx-auto">
          {/* Rotating feature cards */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white">Featured Capabilities</h3>
              <p className="text-white/60 mt-2">A quick peek at what we build</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              <CardFlip
                title="Design Systems"
                subtitle="Consistent, scalable UI"
                description="We craft reusable UI libraries and robust design tokens."
                features={["Tokens", "Components", "Docs", "Themeable"]}
                coverImage="/images/TD HOT TUB.png"
                coverAlt="Design systems"
              />
              <CardFlip
                title="E‑commerce"
                subtitle="Convert with speed"
                description="Fast product pages, optimized checkouts, and analytics built-in."
                features={["Shop", "Cart", "Checkout", "Analytics"]}
                coverImage="/images/TD 3D CHROME.png"
                coverAlt="E-commerce"
              />
              <CardFlip
                title="Brand Kits"
                subtitle="Your identity everywhere"
                description="Logos, palettes, typography, and social templates that align."
                features={["Logo", "Palette", "Type", "Templates"]}
                coverImage="/images/TD STUDIOS COLOMBIA.png"
                coverAlt="Brand kits"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <LiquidGlassCard className="p-12 border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Elevate Your Brand?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Let's create something extraordinary together. Contact us to discuss your premium design needs.
              </p>
            </LiquidGlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
