import { useState } from 'react';
import { destinations, destinationList } from '../data/destinations';

const compareFields = [
  { key: 'avgBudgetPerDay', label: '💰 עלות ממוצעת ליום', unit: '₪', format: (v) => `₪${v}` },
  { key: 'rating', label: '⭐ דירוג', format: (v) => `${v}/10` },
  { key: 'popularity', label: '🔥 פופולריות', format: (v) => `${v}%` },
  { key: 'bestSeason', label: '📅 עונת הטיול הטובה', format: (v) => v },
];

export default function DestinationComparison() {
  const [dest1, setDest1] = useState('thailand');
  const [dest2, setDest2] = useState('peru');

  const d1 = destinations[dest1];
  const d2 = destinations[dest2];

  const categories = d1 ? Object.keys(d1.categories) : [];
  const [activeTab, setActiveTab] = useState('summary');

  const categoryLabels = {
    scenery: { label: 'נופים', icon: '🏔️' },
    hiking: { label: 'טיולים', icon: '🥾' },
    parties: { label: 'מסיבות', icon: '🎉' },
    beaches: { label: 'חופים', icon: '🏖️' },
    attractions: { label: 'אטרקציות', icon: '🎯' },
    food: { label: 'אוכל', icon: '🍜' },
    mustDo: { label: 'חובה', icon: '⭐' },
  };

  return (
    <div className="min-h-screen pt-20 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            <span style={{ background: 'linear-gradient(135deg, #f59e0b, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              🗺️ השוואת יעדים
            </span>
          </h1>
          <p className="text-gray-400 text-lg">השווה בין 2 יעדים ותחליט</p>
        </div>

        {/* Destination Selectors */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[{ val: dest1, setVal: setDest1, label: 'יעד ראשון', color: '#f59e0b' },
            { val: dest2, setVal: setDest2, label: 'יעד שני', color: '#14b8a6' }].map(({ val, setVal, label, color }) => (
            <div key={label}>
              <label className="text-sm font-bold mb-2 block" style={{ color }}>
                {label}
              </label>
              <select
                value={val}
                onChange={e => setVal(e.target.value)}
                className="w-full rounded-xl px-4 py-3 text-white font-semibold outline-none"
                style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid ${color}40` }}
              >
                {destinationList.map(d => (
                  <option key={d.id} value={d.id} className="bg-gray-900">
                    {d.emoji} {d.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {d1 && d2 && (
          <>
            {/* Hero Images Comparison */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[d1, d2].map((dest, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden h-40">
                  <img src={dest.heroImage} alt={dest.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))' }} />
                  <div className="absolute bottom-3 right-3">
                    <div className="text-2xl">{dest.emoji}</div>
                    <div className="font-black text-white text-lg">{dest.name}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* VS Badge */}
            <div className="text-center mb-6">
              <span className="inline-block px-6 py-2 rounded-full font-black text-lg"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444, #8b5cf6)' }}>
                VS
              </span>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {compareFields.map(field => {
                const v1 = d1[field.key];
                const v2 = d2[field.key];
                const isNumeric = typeof v1 === 'number';
                const winner = isNumeric ? (field.key === 'avgBudgetPerDay' ? (v1 < v2 ? 1 : 2) : (v1 > v2 ? 1 : 2)) : 0;
                return (
                  <div key={field.key} className="rounded-2xl overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="text-center text-xs text-gray-400 py-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                      {field.label}
                    </div>
                    <div className="grid grid-cols-2">
                      <div className={`text-center py-3 px-2 font-black text-sm ${winner === 1 ? 'text-yellow-400' : 'text-gray-300'}`}>
                        {winner === 1 && <span className="text-xs block mb-1">🏆</span>}
                        {field.format(v1)}
                      </div>
                      <div className={`text-center py-3 px-2 font-black text-sm border-r ${winner === 2 ? 'text-teal-400' : 'text-gray-300'}`}
                        style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                        {winner === 2 && <span className="text-xs block mb-1">🏆</span>}
                        {field.format(v2)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={() => setActiveTab('summary')}
                className="px-3 py-1.5 rounded-xl text-sm font-bold transition-all"
                style={activeTab === 'summary' ? { background: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: 'white' } : { background: 'rgba(255,255,255,0.07)', color: '#9ca3af' }}
              >
                📋 סיכום
              </button>
              {Object.entries(categoryLabels).map(([key, cfg]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className="px-3 py-1.5 rounded-xl text-sm font-bold transition-all"
                  style={activeTab === key ? { background: 'rgba(255,255,255,0.15)', color: 'white' } : { background: 'rgba(255,255,255,0.05)', color: '#9ca3af' }}
                >
                  {cfg.icon} {cfg.label}
                </button>
              ))}
            </div>

            {/* Content */}
            {activeTab === 'summary' ? (
              <div className="grid grid-cols-2 gap-4">
                {[d1, d2].map((dest, i) => (
                  <div key={i} className="rounded-2xl p-5"
                    style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${i === 0 ? 'rgba(245,158,11,0.3)' : 'rgba(20,184,166,0.3)'}` }}>
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-1">{dest.emoji}</div>
                      <h3 className="font-black text-white text-lg">{dest.name}</h3>
                      <p className="text-sm text-gray-400 italic mt-1 leading-relaxed">{dest.quote}</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">טיסה</span>
                        <span className="text-white font-bold">{dest.facts.flightTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">מטבע</span>
                        <span className="text-white font-bold">{dest.facts.currency.split('-')[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">עונה</span>
                        <span className="text-white font-bold">{dest.bestSeason}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">ויזה</span>
                        <span className="text-white font-bold text-xs">{dest.facts.visa.substring(0, 20)}...</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {[d1, d2].map((dest, i) => {
                  const catData = dest.categories[activeTab];
                  return (
                    <div key={i} className="rounded-2xl p-5"
                      style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${i === 0 ? 'rgba(245,158,11,0.2)' : 'rgba(20,184,166,0.2)'}` }}>
                      <div className="font-black text-white mb-3 flex items-center gap-2">
                        <span>{dest.emoji}</span>
                        <span>{dest.name}</span>
                      </div>
                      <div className="space-y-2">
                        {catData?.items.slice(0, 5).map((item, j) => (
                          <div key={j} className="text-xs text-gray-300 flex gap-2">
                            <span className="text-gray-600 font-bold">{j + 1}.</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Facts Comparison */}
            <div className="mt-6 rounded-2xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="grid grid-cols-3 text-sm border-b py-3 text-center" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className="text-yellow-400 font-black">{d1.emoji} {d1.name}</div>
                <div className="text-gray-500 font-bold">נתון</div>
                <div className="text-teal-400 font-black">{d2.emoji} {d2.name}</div>
              </div>
              {[
                ['flightTime', '✈️ זמן טיסה'],
                ['language', '🗣️ שפה'],
                ['visa', '🛂 ויזה'],
                ['safety', '🛡️ בטיחות'],
                ['timezone', '🕐 שעון'],
              ].map(([key, label]) => (
                <div key={key} className="grid grid-cols-3 text-center py-2 border-b hover:bg-white/3 text-xs"
                  style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <div className="text-gray-200 px-2">{d1.facts[key]}</div>
                  <div className="text-gray-500">{label}</div>
                  <div className="text-gray-200 px-2">{d2.facts[key]}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
