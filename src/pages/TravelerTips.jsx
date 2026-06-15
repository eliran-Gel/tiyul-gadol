import { useState } from 'react';
import { travelerTips, commonMistakes } from '../data/tips';

export default function TravelerTips() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [showMistakes, setShowMistakes] = useState(false);

  return (
    <div className="min-h-screen pt-20 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            <span style={{ background: 'linear-gradient(135deg, #f59e0b, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              💡 טיפים ממטיילים
            </span>
          </h1>
          <p className="text-gray-400 text-lg">מה שאף אחד לא אמר לך לפני הטיול</p>
        </div>

        {/* Source Banner */}
        <div className="rounded-2xl p-4 mb-6 text-center"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-gray-400 text-sm">
            📍 מקורות: <span className="text-blue-400">קבוצות פייסבוק</span> ·
            <span className="text-orange-400 mr-1"> r/solotravel</span> ·
            <span className="text-pink-400 mr-1"> בלוגי מסע</span> ·
            <span className="text-green-400 mr-1"> ישראלים בחו"ל</span>
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {travelerTips.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-1"
              style={activeCategory === i
                ? { background: cat.color.replace('border-', 'rgba(').replace('-500', ',0.3)').replace('border-', '') + '; color: white' }
                : { background: 'rgba(255,255,255,0.07)', color: '#9ca3af' }}
            >
              {cat.emoji} {cat.category}
              <span className="text-xs opacity-60 mr-1">({cat.tips.length})</span>
            </button>
          ))}
        </div>

        {/* Active Category Tips */}
        <div className="space-y-4 mb-8">
          {travelerTips[activeCategory]?.tips.map((tip, i) => (
            <div key={i}
              className={`rounded-2xl p-5 tip-card ${travelerTips[activeCategory].color}`}
              style={{
                background: travelerTips[activeCategory].bgColor.replace('bg-', 'rgba(').replace('-500/10', ',0.07)'),
                borderRightWidth: '4px',
                borderRightColor: travelerTips[activeCategory].color.replace('border-', '').includes('red') ? '#ef4444' :
                  travelerTips[activeCategory].color.includes('green') ? '#10b981' :
                  travelerTips[activeCategory].color.includes('blue') ? '#3b82f6' :
                  travelerTips[activeCategory].color.includes('purple') ? '#8b5cf6' : '#f59e0b'
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-black text-white text-base">{tip.title}</h3>
                {tip.hot && (
                  <span className="text-xs px-2 py-0.5 rounded-full font-bold flex-shrink-0"
                    style={{ background: 'rgba(239,68,68,0.2)', color: '#ef4444' }}>
                    🔥 חם
                  </span>
                )}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{tip.text}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">📍 {tip.source}</span>
                <span className="text-xs text-gray-500">👍 {tip.votes.toLocaleString()} אנשים אהבו</span>
              </div>
            </div>
          ))}
        </div>

        {/* Common Mistakes */}
        <div className="rounded-2xl overflow-hidden mb-8">
          <button
            onClick={() => setShowMistakes(!showMistakes)}
            className="w-full p-5 text-right flex items-center justify-between"
            style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(249,115,22,0.1))', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '1rem' }}
          >
            <span className="font-black text-white text-lg">❌ 6 טעויות הכי נפוצות של מטיילים ישראלים</span>
            <span className="text-2xl">{showMistakes ? '▲' : '▼'}</span>
          </button>

          {showMistakes && (
            <div className="mt-2 space-y-3">
              {commonMistakes.map((mistake, i) => (
                <div key={i} className="rounded-2xl p-4"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">{mistake.icon}</span>
                    <div>
                      <p className="font-bold text-red-400 mb-1">{mistake.mistake}</p>
                      <p className="text-gray-300 text-sm">✅ <strong>פתרון:</strong> {mistake.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Tips */}
        <div className="rounded-2xl p-6"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 className="font-black text-white text-lg mb-4">⚡ טיפים מהירים</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              '📱 Google Translate Camera - מתרגם שלטים בזמן אמת',
              '🌐 VPN - עוזר לגשת לתוכן חסום בחלק מהמדינות',
              '💊 Anti-Malaria - התייעץ עם רופא לפי יעד',
              '🔒 Padlock + Locker - תמיד לפזר כסף בכמה מקומות',
              '📡 WhatsApp לאמא = כל יום הודעה קצרה!',
              '🌊 Rip Current - אם נתפסת, שחה מקביל לחוף',
              '🏥 International SOS App - חירום בכל מקום',
              '📋 Travel journal - תכתוב כי לא תזכור הכל!',
              '🤸 Stretch בנסיעות לילה - גב + ברכיים',
              '☀️ Local SIM + eSIM - לגיבוי תמיד',
            ].map((tip, i) => (
              <div key={i} className="text-sm text-gray-300 flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0">{tip.split(' ')[0]}</span>
                <span>{tip.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
