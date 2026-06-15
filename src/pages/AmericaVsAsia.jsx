import { useState } from 'react';

const comparisonData = [
  { category: 'עלות ממוצעת ליום', asia: '₪150-280', america: '₪250-400', winner: 'asia', icon: '💰' },
  { category: 'זמן טיסה מישראל', asia: '9-11 שעות', america: '16-22 שעות', winner: 'asia', icon: '✈️' },
  { category: 'קלות תנועה בין מדינות', asia: '⭐⭐⭐⭐⭐', america: '⭐⭐⭐', winner: 'asia', icon: '🗺️' },
  { category: 'ביטחון', asia: '⭐⭐⭐⭐', america: '⭐⭐⭐', winner: 'asia', icon: '🛡️' },
  { category: 'עומק חוויה תרבותית', asia: '⭐⭐⭐⭐', america: '⭐⭐⭐⭐⭐', winner: 'america', icon: '🎭' },
  { category: 'נופים ופלאי טבע', asia: '⭐⭐⭐⭐', america: '⭐⭐⭐⭐⭐', winner: 'america', icon: '🏔️' },
  { category: 'מסיבות ולילה', asia: '⭐⭐⭐⭐⭐', america: '⭐⭐⭐⭐', winner: 'asia', icon: '🎉' },
  { category: 'ישראלים ב-Area', asia: 'המון!', america: 'פחות', winner: 'asia', icon: '🇮🇱' },
  { category: 'אתגר גופני', asia: '⭐⭐⭐', america: '⭐⭐⭐⭐⭐', winner: 'america', icon: '🥾' },
  { category: 'אוכל ייחודי', asia: '⭐⭐⭐⭐⭐', america: '⭐⭐⭐⭐⭐', winner: 'tie', icon: '🍜' },
];

const asiaHighlights = [
  { icon: '🏖️', text: 'חופים טרופיים + Full Moon Party' },
  { icon: '🛕', text: 'מקדשים עתיקים ובודהיזם' },
  { icon: '🍜', text: 'אוכל רחוב מדהים ב-3$ לארוחה' },
  { icon: '🛵', text: 'מוטורביק + חופש תנועה מוחלט' },
  { icon: '💆', text: 'ספא תאילנדי יומי ב-10$' },
  { icon: '🤿', text: 'צלילה ב-Koh Tao ב-350$' },
  { icon: '🎉', text: 'Full Moon Party - 30,000 איש!' },
  { icon: '💰', text: 'הכי זול בעולם לבקוור' },
];

const americaHighlights = [
  { icon: '🏔️', text: 'מאצ\'ו פיצ\'ו + Rainbow Mountain' },
  { icon: '🌊', text: 'פטגוניה + Torres del Paine' },
  { icon: '🦁', text: 'Amazon + עולם חי לא מאמין' },
  { icon: '💃', text: 'טנגו, סלסה, ריתמים לטיניים' },
  { icon: '🏺', text: 'ציוויליזציות אינקה, מאיה, אצטק' },
  { icon: '🌋', text: 'גייזרים, קרחונים, מדבריות' },
  { icon: '☕', text: 'קפה קולומביאני טרי ב-1$' },
  { icon: '🐧', text: 'פינגווינים, קונדורים, פלמינגו' },
];

const asiaCountries = ['תאילנד', 'וייטנאם', 'קמבודיה', 'לאוס', 'אינדונזיה', 'באלי', 'נפאל', 'הודו', 'מיאנמר', 'פיליפינים'];
const americaCountries = ['פרו', 'קולומביה', 'ארגנטינה', 'צ\'ילה', 'בוליביה', 'ברזיל', 'אקוודור', 'ונצואלה', 'פנמה'];

const videos = [
  {
    title: 'ישראלים בתאילנד - כל מה שרצית לדעת',
    youtubeId: 'dQw4w9WgXcQ',
    region: 'asia',
    description: 'Full Moon Party, אוכל, ובמות - הכל על תאילנד'
  },
  {
    title: 'דרום אמריקה - המסע שישנה אותך',
    youtubeId: 'dQw4w9WgXcQ',
    region: 'america',
    description: 'מאצ\'ו פיצ\'ו, פטגוניה, קולומביה'
  },
];

export default function AmericaVsAsia() {
  const [winner, setWinner] = useState(null);

  const handleQuiz = (answer) => setWinner(answer);

  return (
    <div className="min-h-screen pt-20 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            <span style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              ⚖️ מזרח vs דרום אמריקה
            </span>
          </h1>
          <p className="text-gray-400 text-lg">השאלה הגדולה של כל מטייל ישראלי</p>
        </div>

        {/* HEAD TO HEAD */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {/* Asia */}
          <div className="rounded-3xl overflow-hidden"
            style={{ background: 'linear-gradient(145deg, rgba(245,158,11,0.15), rgba(239,68,68,0.1))', border: '1px solid rgba(245,158,11,0.3)' }}>
            <div className="p-6 text-center">
              <div className="text-5xl mb-3">🌏</div>
              <h2 className="text-2xl font-black text-white mb-1">דרום מזרח אסיה</h2>
              <p className="text-yellow-400 text-sm font-semibold">תאילנד · וייטנאם · באלי · קמבודיה · נפאל</p>
            </div>
            <div className="px-4 pb-6 space-y-2">
              {asiaHighlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span>{h.icon}</span>
                  <span className="text-gray-300">{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* America */}
          <div className="rounded-3xl overflow-hidden"
            style={{ background: 'linear-gradient(145deg, rgba(20,184,166,0.15), rgba(59,130,246,0.1))', border: '1px solid rgba(20,184,166,0.3)' }}>
            <div className="p-6 text-center">
              <div className="text-5xl mb-3">🌎</div>
              <h2 className="text-2xl font-black text-white mb-1">דרום אמריקה</h2>
              <p className="text-teal-400 text-sm font-semibold">פרו · קולומביה · ארגנטינה · בוליביה · ברזיל</p>
            </div>
            <div className="px-4 pb-6 space-y-2">
              {americaHighlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span>{h.icon}</span>
                  <span className="text-gray-300">{h.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="rounded-2xl overflow-hidden mb-10"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="p-4 border-b text-center" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <h2 className="text-xl font-black text-white">📊 השוואה מפורטת</h2>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-3 gap-0 border-b text-center text-sm font-black py-3"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <div className="text-yellow-400">🌏 מזרח אסיה</div>
            <div className="text-gray-400">קטגוריה</div>
            <div className="text-teal-400">🌎 דרום אמריקה</div>
          </div>

          {comparisonData.map((row, i) => (
            <div key={i} className="grid grid-cols-3 gap-0 border-b text-center py-3 text-sm hover:bg-white/3"
              style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              <div className={`px-3 font-semibold ${row.winner === 'asia' ? 'text-yellow-400 font-black' : 'text-gray-300'}`}>
                {row.winner === 'asia' && <span className="text-xs">🏆 </span>}
                {row.asia}
              </div>
              <div className="text-gray-400 flex items-center justify-center gap-1">
                <span>{row.icon}</span>
                <span className="text-xs">{row.category}</span>
              </div>
              <div className={`px-3 font-semibold ${row.winner === 'america' ? 'text-teal-400 font-black' : 'text-gray-300'}`}>
                {row.winner === 'america' && <span className="text-xs">🏆 </span>}
                {row.america}
              </div>
            </div>
          ))}
        </div>

        {/* QUIZ */}
        <div className="rounded-2xl p-6 mb-10"
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.1))', border: '1px solid rgba(139,92,246,0.3)' }}>
          <h2 className="text-xl font-black text-white text-center mb-6">🧭 לאן אתה שייך?</h2>

          {!winner ? (
            <div className="space-y-4">
              <p className="text-gray-300 text-center">ענה על שאלה אחת:</p>
              <p className="text-white font-bold text-center text-lg">מה חשוב לך יותר בטיול?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { answer: 'asia', text: 'חופים, מסיבות, אוכל רחוב, תרבות בודהיסטית וחוויות קלות', emoji: '🌏' },
                  { answer: 'america', text: 'הרים, מסלולים, ציוויליזציות עתיקות, הרפתקאות גדולות', emoji: '🌎' },
                  { answer: 'both', text: 'אני רוצה את הכל! לאן שהגורל ייקח אותי', emoji: '✈️' },
                ].map(option => (
                  <button
                    key={option.answer}
                    onClick={() => handleQuiz(option.answer)}
                    className="p-4 rounded-xl text-right transition-all hover:scale-102"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    <span className="text-2xl">{option.emoji}</span>
                    <p className="text-sm text-gray-300 mt-2">{option.text}</p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              {winner === 'asia' && (
                <div>
                  <div className="text-5xl mb-3">🌏</div>
                  <h3 className="text-2xl font-black text-yellow-400 mb-2">אתה מזרח אסיה!</h3>
                  <p className="text-gray-300">תתחיל מבנגקוק, תעלה לצ'יאנג מאי, תגיע לפולמון, וממשיך ל-Bali. תדע שלא תרצה לחזור.</p>
                  <p className="text-sm text-yellow-400 mt-2 font-bold">מסלול מומלץ: תאילנד → לאוס/קמבודיה → וייטנאם → באלי</p>
                </div>
              )}
              {winner === 'america' && (
                <div>
                  <div className="text-5xl mb-3">🌎</div>
                  <h3 className="text-2xl font-black text-teal-400 mb-2">אתה דרום אמריקה!</h3>
                  <p className="text-gray-300">תתחיל מקולומביה, תתקדם לפרו ומאצ'ו פיצ'ו, ותסיים בפטגוניה. חוויות שישנו אותך.</p>
                  <p className="text-sm text-teal-400 mt-2 font-bold">מסלול מומלץ: קולומביה → פרו → בוליביה → ארגנטינה/צ'ילה</p>
                </div>
              )}
              {winner === 'both' && (
                <div>
                  <div className="text-5xl mb-3">✈️</div>
                  <h3 className="text-2xl font-black text-purple-400 mb-2">אתה שניהם!</h3>
                  <p className="text-gray-300">תעשה את הכי טוב: 4 חודשים מזרח אסיה + 4 חודשים דרום אמריקה. הרבה ישראלים עושים את זה!</p>
                  <p className="text-sm text-purple-400 mt-2 font-bold">טיפ: תאילנד-באלי → חזרה קצרה → קולומביה-פרו</p>
                </div>
              )}
              <button
                onClick={() => setWinner(null)}
                className="mt-4 text-sm text-gray-500 hover:text-gray-300 underline"
              >
                נסה שוב
              </button>
            </div>
          )}
        </div>

        {/* YOUTUBE VIDEOS */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-white mb-5 text-center">🎬 צפה לפני שתחליט</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Asia video embed */}
            <div className="rounded-2xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,158,11,0.2)' }}>
              <div className="aspect-video bg-black relative">
                <iframe
                  src="https://www.youtube.com/embed/YGb2GPTCKIU"
                  title="דרום מזרח אסיה"
                  className="w-full h-full"
                  allowFullScreen
                  frameBorder="0"
                />
              </div>
              <div className="p-4">
                <div className="text-yellow-400 text-xs font-bold mb-1">🌏 מזרח אסיה</div>
                <div className="text-white font-bold text-sm">ישראלים בדרום מזרח אסיה - הסיכום המלא</div>
              </div>
            </div>

            {/* America video embed */}
            <div className="rounded-2xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(20,184,166,0.2)' }}>
              <div className="aspect-video bg-black relative">
                <iframe
                  src="https://www.youtube.com/embed/eLzv-gJjHn8"
                  title="דרום אמריקה"
                  className="w-full h-full"
                  allowFullScreen
                  frameBorder="0"
                />
              </div>
              <div className="p-4">
                <div className="text-teal-400 text-xs font-bold mb-1">🌎 דרום אמריקה</div>
                <div className="text-white font-bold text-sm">הטיול לדרום אמריקה - מה שאף אחד לא מספר</div>
              </div>
            </div>
          </div>
        </div>

        {/* Countries List */}
        <div className="grid grid-cols-2 gap-5">
          <div className="rounded-2xl p-5"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,158,11,0.2)' }}>
            <h3 className="font-black text-yellow-400 mb-3">🌏 מדינות מזרח אסיה</h3>
            <div className="space-y-1">
              {asiaCountries.map(c => <div key={c} className="text-sm text-gray-300">• {c}</div>)}
            </div>
          </div>
          <div className="rounded-2xl p-5"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(20,184,166,0.2)' }}>
            <h3 className="font-black text-teal-400 mb-3">🌎 מדינות דרום אמריקה</h3>
            <div className="space-y-1">
              {americaCountries.map(c => <div key={c} className="text-sm text-gray-300">• {c}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
