import { useState, useEffect } from 'react';
import { destinations, destinationList } from '../data/destinations';

const categoryConfig = {
  scenery: { label: 'נופים', icon: '🏔️', color: '#14b8a6' },
  hiking: { label: 'טיולים וטראקים', icon: '🥾', color: '#f59e0b' },
  parties: { label: 'מסיבות', icon: '🎉', color: '#ef4444' },
  beaches: { label: 'חופים', icon: '🏖️', color: '#3b82f6' },
  attractions: { label: 'אטרקציות', icon: '🎯', color: '#8b5cf6' },
  food: { label: 'אוכל', icon: '🍜', color: '#10b981' },
  mustDo: { label: 'דברים שאסור לפספס', icon: '⭐', color: '#f97316' },
};

export default function DestinationExplorer({ initialDestination }) {
  const [search, setSearch] = useState('');
  const [selectedDest, setSelectedDest] = useState(null);
  const [activeCategory, setActiveCategory] = useState('scenery');

  useEffect(() => {
    if (initialDestination && destinations[initialDestination]) {
      setSelectedDest(destinations[initialDestination]);
    }
  }, [initialDestination]);

  const filtered = destinationList.filter(d =>
    d.name.includes(search) || d.nameEn.toLowerCase().includes(search.toLowerCase())
  );

  const regionColors = {
    asia: 'from-orange-500 to-red-500',
    southamerica: 'from-green-500 to-teal-500',
    australia: 'from-yellow-500 to-orange-500',
    africa: 'from-amber-500 to-yellow-600',
    northamerica: 'from-blue-500 to-indigo-500',
  };

  if (selectedDest) {
    const dest = selectedDest;
    const catItems = dest.categories[activeCategory]?.items || [];

    return (
      <div className="min-h-screen pt-20 pb-24">
        {/* Back Button */}
        <div className="max-w-5xl mx-auto px-4 mb-4">
          <button
            onClick={() => setSelectedDest(null)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>→</span>
            <span>חזור לכל היעדים</span>
          </button>
        </div>

        {/* HERO */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img
            src={dest.heroImage}
            alt={dest.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.85))' }} />
          <div className="absolute bottom-0 right-0 left-0 p-6 max-w-5xl mx-auto">
            <div className="flex items-end gap-4">
              <div className="text-6xl">{dest.emoji}</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white">{dest.name}</h1>
                <p className="text-gray-300 text-sm mt-1">
                  ⭐ {dest.rating}/10 · 📅 הכי טוב: {dest.bestSeason} · 💰 ~₪{dest.avgBudgetPerDay}/יום
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-6">
          {/* Quote */}
          <div className="rounded-2xl p-5 mb-6 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(139,92,246,0.1))', border: '1px solid rgba(245,158,11,0.2)' }}>
            <p className="text-yellow-400 text-lg font-bold italic">{dest.quote}</p>
          </div>

          {/* DRY FACTS */}
          <div className="rounded-2xl p-6 mb-6"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 className="text-xl font-black mb-4 text-white">📊 עובדות יבשות</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries({
                '✈️ מרחק מישראל': dest.facts.distanceFromIsrael,
                '⏱️ זמן טיסה': dest.facts.flightTime,
                '🗺️ שטח': dest.facts.size,
                '🗣️ שפה': dest.facts.language,
                '💵 מטבע': dest.facts.currency,
                '🏙️ בירה': dest.facts.capital,
                '👥 אוכלוסיה': dest.facts.population,
                '🛂 ויזה': dest.facts.visa,
                '🕐 שעון': dest.facts.timezone,
              }).map(([key, value]) => (
                <div key={key} className="rounded-xl p-3"
                  style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <div className="text-xs text-gray-400 mb-1">{key}</div>
                  <div className="text-sm font-semibold text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CATEGORY TABS */}
          <div className="flex flex-wrap gap-2 mb-4">
            {Object.entries(categoryConfig).map(([key, cfg]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200"
                style={activeCategory === key
                  ? { background: cfg.color, color: 'white', boxShadow: `0 0 15px ${cfg.color}40` }
                  : { background: 'rgba(255,255,255,0.07)', color: '#9ca3af' }
                }
              >
                {cfg.icon} {cfg.label}
              </button>
            ))}
          </div>

          {/* CATEGORY CONTENT */}
          <div className="rounded-2xl p-6 mb-6"
            style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${categoryConfig[activeCategory]?.color}30` }}>
            <h3 className="text-lg font-black mb-4 flex items-center gap-2">
              <span style={{ color: categoryConfig[activeCategory]?.color }}>
                {categoryConfig[activeCategory]?.icon}
              </span>
              <span className="text-white">{categoryConfig[activeCategory]?.label}</span>
            </h3>
            <div className="space-y-2">
              {catItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <span className="text-yellow-400 font-black text-sm mt-0.5">{i + 1}.</span>
                  <span className="text-gray-200 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MAP PLACEHOLDER */}
          <div className="rounded-2xl overflow-hidden mb-6 h-64"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <iframe
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${dest.mapCoords.lng - 15},${dest.mapCoords.lat - 10},${dest.mapCoords.lng + 15},${dest.mapCoords.lat + 10}&layer=mapnik&marker=${dest.mapCoords.lat},${dest.mapCoords.lng}`}
              className="w-full h-full"
              title={`מפת ${dest.name}`}
            />
          </div>

          {/* VOCABULARY */}
          <div className="rounded-2xl p-6 mb-6"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 className="text-xl font-black mb-4 text-white">📚 מילים שיעזרו לך</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {dest.vocabulary.map((word, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="text-2xl">{word.emoji}</span>
                  <div className="flex-1">
                    <div className="text-xs text-gray-400">{word.script}</div>
                    <div className="text-yellow-400 font-bold text-sm">{word.pronunciation}</div>
                    <div className="text-white text-sm">{word.meaning}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COMMUNITY */}
          <div className="rounded-2xl p-5 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.1), rgba(59,130,246,0.1))', border: '1px solid rgba(20,184,166,0.2)' }}>
            <div className="text-3xl mb-2">👥</div>
            <p className="text-teal-400 font-bold">{dest.israeliCommunity || 'קהילה ישראלית פעילה!'}</p>
            <p className="text-gray-400 text-sm mt-1">הצטרף לקבוצת הפייסבוק של הישראלים ב{dest.name}</p>
          </div>
        </div>
      </div>
    );
  }

  // SEARCH VIEW
  return (
    <div className="min-h-screen pt-20 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            <span style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              🔍 חיפוש יעד
            </span>
          </h1>
          <p className="text-gray-400 text-lg">חפש יעד וקבל מידע מפורט</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="חפש יעד... (תאילנד, פרו, באלי...)"
            className="w-full rounded-2xl px-5 py-4 text-right text-white text-lg font-medium outline-none"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)',
              caretColor: '#f59e0b'
            }}
          />
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔍</span>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(dest => (
            <button
              key={dest.id}
              onClick={() => setSelectedDest(dest)}
              className="rounded-2xl overflow-hidden group hover:scale-102 transition-all duration-300 text-right"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))' }} />
                <div className="absolute top-3 right-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-bold bg-gradient-to-r ${regionColors[dest.region]} text-white`}>
                    {dest.emoji} {dest.region === 'asia' ? 'אסיה' :
                      dest.region === 'southamerica' ? 'דרום אמריקה' :
                        dest.region === 'australia' ? 'אוסטרליה' :
                          dest.region === 'africa' ? 'אפריקה' : 'אמריקה'}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <div className="text-xl font-black text-white">{dest.name}</div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-400">{dest.bestSeason}</div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-sm">⭐</span>
                    <span className="text-white font-bold text-sm">{dest.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">✈️ {dest.facts.flightTime}</span>
                  <span className="text-green-400 font-bold text-sm">₪{dest.avgBudgetPerDay}/יום</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
