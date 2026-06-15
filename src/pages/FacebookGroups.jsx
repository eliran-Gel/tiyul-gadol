import { useState } from 'react';
import { facebookGroups } from '../data/facebookGroups';

export default function FacebookGroups() {
  const [activeRegion, setActiveRegion] = useState('all');

  const allRegions = ['all', ...facebookGroups.map(g => g.region)];

  const filtered = activeRegion === 'all'
    ? facebookGroups
    : facebookGroups.filter(g => g.region === activeRegion);

  const totalGroups = facebookGroups.reduce((acc, g) => acc + g.groups.length, 0);

  return (
    <div className="min-h-screen pt-20 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            <span style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              👥 קבוצות פייסבוק
            </span>
          </h1>
          <p className="text-gray-400 text-lg">קהילת המטיילים הישראלית - {totalGroups} קבוצות פעילות</p>
        </div>

        {/* Info Banner */}
        <div className="rounded-2xl p-4 mb-6"
          style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))', border: '1px solid rgba(59,130,246,0.3)' }}>
          <p className="text-blue-300 text-sm text-center">
            💡 <strong>טיפ:</strong> הצטרף לקבוצות לפני הטיול! קרא, שאל, ומצא חברותא. ישראלים שם עוזרים לישראלים.
          </p>
        </div>

        {/* Region Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {allRegions.map(region => {
            const groupData = facebookGroups.find(g => g.region === region);
            return (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className="px-4 py-2 rounded-xl text-sm font-bold transition-all"
                style={activeRegion === region
                  ? { background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: 'white' }
                  : { background: 'rgba(255,255,255,0.07)', color: '#9ca3af' }}
              >
                {region === 'all' ? '🌍 הכל' : `${groupData?.emoji} ${region}`}
              </button>
            );
          })}
        </div>

        {/* Groups */}
        <div className="space-y-8">
          {filtered.map(regionData => (
            <div key={regionData.region}>
              {/* Region Header */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-black bg-gradient-to-r ${regionData.color} text-white`}>
                <span>{regionData.emoji}</span>
                <span>{regionData.region}</span>
              </div>

              {/* Groups Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {regionData.groups.map((group, i) => (
                  <div key={i}
                    className="rounded-2xl p-5 relative group"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    {/* Hot Badge */}
                    {group.hot && (
                      <div className="absolute -top-2 -left-2 text-xs px-2 py-0.5 rounded-full font-black"
                        style={{ background: 'linear-gradient(135deg, #ef4444, #f97316)' }}>
                        🔥 HOT
                      </div>
                    )}

                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <h3 className="font-black text-white text-base mb-1">{group.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs px-2 py-0.5 rounded-full"
                            style={{ background: 'rgba(255,255,255,0.1)', color: '#9ca3af' }}>
                            {group.type}
                          </span>
                          <span className="text-xs text-gray-400">👥 {group.members} חברים</span>
                          <span className={`text-xs font-bold ${group.active ? 'text-green-400' : 'text-gray-500'}`}>
                            {group.active ? '● פעיל' : '● לא פעיל'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">{group.description}</p>

                    {group.note && (
                      <div className="rounded-lg p-2 mb-3 text-xs"
                        style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.2)' }}>
                        {group.note}
                      </div>
                    )}

                    <a
                      href={group.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105 w-fit"
                      style={{ background: 'linear-gradient(135deg, #1877f2, #165db8)', color: 'white' }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      הצטרף לקבוצה
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-10 rounded-2xl p-6"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 className="font-black text-white text-lg mb-4">💡 איך להשתמש בקבוצות הכי טוב?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { icon: '🔍', tip: 'השתמש ב"חיפוש" בקבוצה לפני ששואל - רוב השאלות כבר נשאלו' },
              { icon: '📅', tip: 'ציין תאריכים כשאתה שואל - המידע משתנה לפי עונה' },
              { icon: '🤝', tip: 'חפש "מחפש חברותא" + יעד + תאריך שלך' },
              { icon: '📸', tip: 'שתף תמונות וטיפים כשתחזור - תעזור למטיילים הבאים!' },
              { icon: '⚠️', tip: 'אל תאמין לכל מה שרואים - תמיד בדוק תאריך הפוסט' },
              { icon: '💬', tip: 'WhatsApp Groups נגזרים מהקבוצות - שאל על לינק' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-300">{item.tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
