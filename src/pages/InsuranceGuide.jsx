import { useState } from 'react';
import { insuranceCompanies, coverageTypes, creditCards, insuranceTips } from '../data/insurance';

export default function InsuranceGuide() {
  const [activeTab, setActiveTab] = useState('companies');

  const tabs = [
    { id: 'companies', label: 'חברות ביטוח', icon: '🏢' },
    { id: 'coverage', label: 'סוגי כיסוי', icon: '📋' },
    { id: 'cards', label: 'כרטיסי אשראי', icon: '💳' },
    { id: 'tips', label: 'טיפים', icon: '💡' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            <span style={{ background: 'linear-gradient(135deg, #ef4444, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              🛡️ ביטוח נסיעות
            </span>
          </h1>
          <p className="text-gray-400 text-lg">המדריך המלא - כי אתה לא רוצה לגלות את זה בשדה</p>
        </div>

        {/* Why Insurance */}
        <div className="rounded-2xl p-6 mb-8"
          style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(249,115,22,0.1))', border: '1px solid rgba(239,68,68,0.3)' }}>
          <h2 className="text-xl font-black text-white mb-4">❓ למה ביטוח נסיעות הוא לא אופציה</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '🏥', title: 'אשפוז בארה"ב', cost: '$80,000-$500,000', text: 'רופא + מיטה = רק בביטוח' },
              { icon: '🚁', title: 'פינוי מנפאל', cost: '$15,000-$30,000', text: 'טיסת חירום מג\'ונגל' },
              { icon: '✈️', title: 'ביטול טיסה', cost: '₪2,000-15,000', text: 'שינויים לא מתוכננים' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-4 text-center"
                style={{ background: 'rgba(255,255,255,0.05)' }}>
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="font-black text-white mb-1">{item.title}</div>
                <div className="text-red-400 font-black text-lg">{item.cost}</div>
                <div className="text-xs text-gray-400 mt-1">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-300 text-sm">
              ביטוח לחצי שנה עולה <strong className="text-yellow-400">₪500-1,500</strong> בלבד.
              <strong className="text-white"> זה לא הוצאה — זה הכרחי.</strong>
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
              style={activeTab === tab.id
                ? { background: 'linear-gradient(135deg, #ef4444, #f97316)', color: 'white' }
                : { background: 'rgba(255,255,255,0.07)', color: '#9ca3af' }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* COMPANIES */}
        {activeTab === 'companies' && (
          <div className="space-y-4">
            <p className="text-gray-400 text-sm mb-4">📌 מחירים משוערים לטיול של 6 חודשים</p>
            {insuranceCompanies.map((company, i) => (
              <div key={i}
                className="rounded-2xl p-5 relative"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: company.recommended ? '1px solid rgba(245,158,11,0.4)' : '1px solid rgba(255,255,255,0.1)'
                }}>
                {company.recommended && (
                  <div className="absolute -top-2 -right-2 text-xs px-2 py-0.5 rounded-full font-black"
                    style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}>
                    ✅ מומלץ
                  </div>
                )}
                {company.hot && (
                  <div className="absolute -top-2 left-20 text-xs px-2 py-0.5 rounded-full font-black"
                    style={{ background: 'linear-gradient(135deg, #ef4444, #f97316)' }}>
                    🔥 הכי פופולרי
                  </div>
                )}

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{company.logo}</span>
                    <div>
                      <h3 className="font-black text-white text-lg">{company.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-yellow-400 font-black">{company.price}</span>
                        <span className="text-gray-400 text-sm">|</span>
                        <div className="flex">
                          {[...Array(5)].map((_, j) => (
                            <span key={j} className={j < Math.floor(company.rating) ? 'text-yellow-400' : 'text-gray-600'}>⭐</span>
                          ))}
                        </div>
                        <span className="text-xs text-gray-400">{company.rating}/5</span>
                      </div>
                    </div>
                  </div>
                  <a href={company.url} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap"
                    style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)' }}>
                    לאתר →
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                  <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <div className="text-xs text-gray-400 mb-2">🌟 הכוללות</div>
                    {company.highlights.map((h, j) => (
                      <div key={j} className="text-xs text-gray-200 mb-1">✓ {h}</div>
                    ))}
                  </div>
                  <div className="rounded-xl p-3" style={{ background: 'rgba(16,185,129,0.07)' }}>
                    <div className="text-xs text-green-400 mb-2">✅ יתרונות</div>
                    {company.pros.map((p, j) => (
                      <div key={j} className="text-xs text-gray-200 mb-1">+ {p}</div>
                    ))}
                  </div>
                  <div className="rounded-xl p-3" style={{ background: 'rgba(239,68,68,0.07)' }}>
                    <div className="text-xs text-red-400 mb-2">⚠️ חסרונות</div>
                    {company.cons.map((c, j) => (
                      <div key={j} className="text-xs text-gray-200 mb-1">- {c}</div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl px-3 py-2"
                  style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
                  <span className="text-xs text-purple-400 font-bold">🎯 הכי מתאים ל: </span>
                  <span className="text-xs text-gray-300">{company.bestFor}</span>
                </div>
              </div>
            ))}

            {/* Agent vs Direct */}
            <div className="rounded-2xl p-6 mt-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 className="font-black text-white text-lg mb-4">🤝 סוכן ביטוח vs קנייה ישירה</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl p-4" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                  <h4 className="font-black text-blue-400 mb-3">👤 דרך סוכן</h4>
                  <div className="space-y-1 text-sm">
                    <p className="text-green-400">✅ ייעוץ אישי</p>
                    <p className="text-green-400">✅ עזרה בתביעה</p>
                    <p className="text-green-400">✅ השוואת מחירים</p>
                    <p className="text-red-400">❌ לפעמים יקר יותר</p>
                  </div>
                </div>
                <div className="rounded-xl p-4" style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}>
                  <h4 className="font-black text-yellow-400 mb-3">💻 קנייה ישירה</h4>
                  <div className="space-y-1 text-sm">
                    <p className="text-green-400">✅ לפעמים זול יותר</p>
                    <p className="text-green-400">✅ נוח ומהיר</p>
                    <p className="text-red-400">❌ אחריות עצמית</p>
                    <p className="text-red-400">❌ בתביעה - לבד</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                💡 <strong className="text-white">המלצה:</strong> לטיול ראשון - דרך סוכן. למטיילים ותיקים - ישירות עם השוואת מחירים.
              </p>
            </div>
          </div>
        )}

        {/* COVERAGE TYPES */}
        {activeTab === 'coverage' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coverageTypes.map((coverage, i) => {
              const colorMap = {
                red: 'rgba(239,68,68,0.15)', blue: 'rgba(59,130,246,0.15)',
                purple: 'rgba(139,92,246,0.15)', orange: 'rgba(249,115,22,0.15)',
                green: 'rgba(16,185,129,0.15)', yellow: 'rgba(245,158,11,0.15)'
              };
              const borderMap = {
                red: 'rgba(239,68,68,0.4)', blue: 'rgba(59,130,246,0.4)',
                purple: 'rgba(139,92,246,0.4)', orange: 'rgba(249,115,22,0.4)',
                green: 'rgba(16,185,129,0.4)', yellow: 'rgba(245,158,11,0.4)'
              };
              return (
                <div key={i} className="rounded-2xl p-5"
                  style={{ background: colorMap[coverage.color], border: `1px solid ${borderMap[coverage.color]}` }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{coverage.icon}</span>
                    <div>
                      <h3 className="font-black text-white">{coverage.name}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full font-bold"
                        style={{ background: coverage.importance === 'חובה' ? 'rgba(239,68,68,0.3)' : 'rgba(245,158,11,0.2)',
                          color: coverage.importance === 'חובה' ? '#ef4444' : '#f59e0b' }}>
                        {coverage.importance}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{coverage.description}</p>
                  <div className="rounded-lg p-2 text-xs"
                    style={{ background: 'rgba(255,255,255,0.05)' }}>
                    💡 {coverage.tip}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* CREDIT CARDS */}
        {activeTab === 'cards' && (
          <div className="space-y-4">
            <div className="rounded-2xl p-4 mb-2"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="text-gray-300 text-sm">
                💡 עמלת המרת מטבע יכולה לעלות לך <strong className="text-yellow-400">₪2,000-5,000</strong> בטיול ארוך.
                כרטיס נכון = חיסכון גדול!
              </p>
            </div>
            {creditCards.map((card, i) => (
              <div key={i} className="rounded-2xl p-5 relative"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: card.recommended ? '1px solid rgba(245,158,11,0.4)' : '1px solid rgba(255,255,255,0.1)'
                }}>
                {card.hot && (
                  <div className="absolute -top-2 -right-2 text-xs px-2 py-0.5 rounded-full font-black"
                    style={{ background: 'linear-gradient(135deg, #10b981, #14b8a6)' }}>
                    💚 הכי מומלץ
                  </div>
                )}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{card.icon}</span>
                    <div>
                      <h3 className="font-black text-white">{card.name}</h3>
                      <span className={`text-lg font-black ${card.forexFee === '0%' ? 'text-green-400' : 'text-yellow-400'}`}>
                        עמלה: {card.forexFee}
                      </span>
                    </div>
                  </div>
                  <a href={card.url} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-sm font-bold"
                    style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>
                    לאתר →
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {card.benefits.map((b, j) => (
                    <span key={j} className="text-xs px-2 py-1 rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.07)', color: '#d1d5db' }}>
                      ✓ {b}
                    </span>
                  ))}
                </div>
                <p className="text-yellow-400 text-xs font-bold">💡 {card.tip}</p>
              </div>
            ))}
          </div>
        )}

        {/* TIPS */}
        {activeTab === 'tips' && (
          <div className="space-y-4">
            {insuranceTips.map((tip, i) => (
              <div key={i} className="rounded-2xl p-5 flex items-start gap-4"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span className="text-3xl flex-shrink-0">{tip.icon}</span>
                <div>
                  <h3 className="font-black text-white mb-1">{tip.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
