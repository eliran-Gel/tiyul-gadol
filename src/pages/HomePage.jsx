import { useState, useEffect } from 'react';

const heroStats = [
  { number: '500,000+', label: 'ישראלים יוצאים לטיול גדול מדי שנה' },
  { number: '6-12', label: 'חודשים אורך טיול ממוצע' },
  { number: '₪40,000', label: 'תקציב ממוצע לטיול חצי שנה' },
  { number: '#1', label: 'תאילנד - היעד הפופולרי ביותר' },
];

const featuredDestinations = [
  { id: 'thailand', name: 'תאילנד', emoji: '🇹🇭', img: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80', tag: 'הכי פופולרי' },
  { id: 'colombia', name: 'קולומביה', emoji: '🇨🇴', img: 'https://images.unsplash.com/photo-1628497869378-a6f71e42f28f?w=600&q=80', tag: '🔥 טרנד 2025' },
  { id: 'peru', name: 'פרו', emoji: '🇵🇪', img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80', tag: 'מאצ\'ו פיצ\'ו' },
  { id: 'indonesia', name: 'באלי', emoji: '🇮🇩', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', tag: 'IG Gold' },
  { id: 'australia', name: 'אוסטרליה', emoji: '🇦🇺', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80', tag: 'Work & Travel' },
  { id: 'kenya', name: 'קניה', emoji: '🇰🇪', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80', tag: 'ספארי' },
];

const quickLinks = [
  { id: 'budget', emoji: '💰', title: 'מחשבון תקציב', desc: 'כמה עולה הטיול שלך?' },
  { id: 'packing', emoji: '🎒', title: 'רשימת ציוד', desc: 'מה לקחת לחצי שנה' },
  { id: 'insurance', emoji: '🛡️', title: 'ביטוח נסיעות', desc: 'חברות + מדריך' },
  { id: 'facebook', emoji: '👥', title: 'קבוצות פייסבוק', desc: 'קהילת המטיילים' },
  { id: 'tips', emoji: '💡', title: 'טיפים ממטיילים', desc: 'מה שאף אחד לא אמר לך' },
  { id: 'comparison', emoji: '⚖️', title: 'מזרח vs אמריקה', desc: 'לאן ללכת?' },
];

export default function HomePage({ setActivePage, setSelectedDestination }) {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    '"הטיול הגדול הוא לא מנוחה מהחיים — הוא תחילת החיים האמיתיים"',
    '"אחרי שנה בצבא — מגיע לך שנה בעולם"',
    '"הכסף יחזור. הזיכרונות לא ייגמרו. תצא לדרך."',
    '"הדאגות ישארו כאן. אתה תלך."',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(-45deg, #0f0522, #1a0533, #0d1b3e, #1a1208)',
            backgroundSize: '400% 400%',
            animation: 'gradient 12s ease infinite'
          }} />
          {/* Floating orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }} />
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-10 blur-3xl"
            style={{ background: 'radial-gradient(circle, #ef4444, transparent)' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
            style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.4)', color: '#f59e0b' }}>
            <span className="animate-pulse">🔥</span>
            <span>המדריך המקיף ביותר לטיול הגדול</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
            <span style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              הטיול הגדול
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-bold mb-3">
            ✈️ מדריך המטייל הישראלי לחצי שנה בעולם
          </p>

          {/* Animated Quote */}
          <div className="h-16 flex items-center justify-center mb-8">
            <p key={currentQuote} className="text-lg md:text-xl text-gray-400 italic max-w-2xl"
              style={{ animation: 'fadeIn 0.8s ease-in-out' }}>
              {quotes[currentQuote]}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => setActivePage('destinations')}
              className="px-8 py-4 rounded-2xl font-black text-lg transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', boxShadow: '0 0 30px rgba(245,158,11,0.4)' }}
            >
              🔍 חפש יעד
            </button>
            <button
              onClick={() => setActivePage('budget')}
              className="px-8 py-4 rounded-2xl font-black text-lg transition-all duration-300 hover:scale-105"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              💰 מחשבון תקציב
            </button>
            <button
              onClick={() => setActivePage('comparison')}
              className="px-8 py-4 rounded-2xl font-black text-lg transition-all duration-300 hover:scale-105"
              style={{ background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.4)', color: '#a78bfa' }}
            >
              ⚖️ מזרח vs אמריקה
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {heroStats.map((stat, i) => (
              <div key={i} className="rounded-2xl p-4 text-center"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="text-2xl md:text-3xl font-black mb-1"
                  style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {stat.number}
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 flex flex-col items-center gap-2 text-gray-500">
            <span className="text-sm">גלול למטה</span>
            <div className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center p-1">
              <div className="w-1 h-3 rounded-full bg-gray-500" style={{ animation: 'bounce 2s infinite' }} />
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED DESTINATIONS */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black mb-3">
            <span style={{ background: 'linear-gradient(135deg, #14b8a6, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              יעדים מומלצים
            </span>
          </h2>
          <p className="text-gray-400">הלוקיישנים הכי חמים לישראלים אחרי הצבא</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {featuredDestinations.map(dest => (
            <button
              key={dest.id}
              onClick={() => { setSelectedDestination(dest.id); setActivePage('destinations'); }}
              className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer"
              style={{ transition: 'all 0.3s ease' }}
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }} />
              <div className="absolute top-3 right-3">
                <span className="text-xs px-2 py-1 rounded-full font-bold"
                  style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}>
                  {dest.tag}
                </span>
              </div>
              <div className="absolute bottom-3 right-3 text-right">
                <div className="text-2xl">{dest.emoji}</div>
                <div className="text-lg font-black text-white">{dest.name}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* QUICK ACCESS */}
      <div className="py-12 px-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-8">
            <span style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              מה מחפשים?
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {quickLinks.map(link => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className="rounded-2xl p-5 text-right group hover:scale-105 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="text-4xl mb-2">{link.emoji}</div>
                <div className="font-black text-white text-lg mb-1">{link.title}</div>
                <div className="text-gray-400 text-sm">{link.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TIYUL GADOL INFO STRIP */}
      <div className="py-12 px-4 max-w-4xl mx-auto">
        <div className="rounded-3xl p-8 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(139,92,246,0.1))', border: '1px solid rgba(245,158,11,0.2)' }}>
          <div className="text-5xl mb-4">🎖️</div>
          <h3 className="text-2xl font-black mb-4 text-white">מה זה "הטיול הגדול"?</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            "הטיול הגדול" הוא מסורת ישראלית ייחודית — אחרי שחרור מהצבא, מאות אלפי ישראלים יוצאים לטיול של
            <strong className="text-yellow-400"> 6-12 חודשים </strong>
            לדרום מזרח אסיה, דרום אמריקה, אוסטרליה, אפריקה ועוד.
            זה לא רק טיול — זה מסע אישי, גדילה, וחוויות שמשנות את החיים.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { emoji: '🌏', text: 'דרום מזרח אסיה', desc: 'הכי פופולרי' },
              { emoji: '🌎', text: 'דרום אמריקה', desc: 'הכי מרגש' },
              { emoji: '🦘', text: 'אוסטרליה', desc: 'הכי ממושך' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-1">{item.emoji}</div>
                <div className="font-bold text-white text-sm">{item.text}</div>
                <div className="text-xs text-gray-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
