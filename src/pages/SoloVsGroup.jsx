const comparisons = [
  {
    category: 'חופש ועצמאות',
    solo: { rating: 5, text: 'אתה מחליט הכל. לקום מתי שרוצה, ללכת לאן שרוצה, להישאר כמה שרוצה.' },
    group: { rating: 3, text: 'צריך לסכם עם כולם. לפעמים מרגיש כמו קבוצת ילדים בטיול בית ספר.' }
  },
  {
    category: 'בטיחות',
    solo: { rating: 3, text: 'פחות בטוח, במיוחד בלילה ובמקומות מבודדים. צריך להיות ערני יותר.' },
    group: { rating: 5, text: 'תמיד יש מישהו שמכסה לך את הגב. הרבה יותר בטוח.' }
  },
  {
    category: 'עלות',
    solo: { rating: 3, text: 'אין פיצול עלויות. אבל אתה מחליט מה ומתי - לפעמים זול יותר.' },
    group: { rating: 4, text: 'AirBnB, כלי רכב, ארוחות - כשמחלקים על 3-4 אנשים חוסכים!' }
  },
  {
    category: 'גדילה אישית',
    solo: { rating: 5, text: 'אתה מוצא את עצמך. פותר בעיות לבד. מתחזק מבפנים.' },
    group: { rating: 3, text: 'פחות אתגר אישי - תמיד יש מישהו שיעזור.' }
  },
  {
    category: 'הכרת אנשים חדשים',
    solo: { rating: 5, text: 'אתה פתוח יותר לאנשים חדשים כי אין לך ברירה. מכיר הרבה יותר.' },
    group: { rating: 2, text: 'נוטים להישאר בקבוצה ולא לפתוח לאחרים.' }
  },
  {
    category: 'לוגיסטיקה',
    solo: { rating: 4, text: 'קל לתכנן - רק אתה. גמיש לשינויים.' },
    group: { rating: 2, text: 'תיאום לוחות זמנים, רצונות, מישהו תמיד רוצה משהו אחר.' }
  },
  {
    category: 'זיכרונות',
    solo: { rating: 4, text: 'אישיים ועמוקים. אתה זוכר כל רגע כי אתה איתך בלבד.' },
    group: { rating: 5, text: 'לצחוק יחד, לגגג יחד, לטפס יחד - זיכרונות כמו סרט.' }
  },
  {
    category: 'ימים רעים',
    solo: { rating: 2, text: 'כשאתה חולה, נגנב לך, או פשוט עצוב - זה קשה לבד.' },
    group: { rating: 5, text: 'תמיד יש מישהו לשוחח, לאכול, ולצחוק איתו.' }
  },
];

const soloTips = [
  { icon: '📱', tip: 'הוסטלים הם הבית שלך - גלה אנשים בדורמיטורי' },
  { icon: '🤝', tip: 'Couchsurfing Events - ארוחות וסיורים עם מקומיים' },
  { icon: '🗺️', tip: 'Join Facebook Groups לפני - מצא מישהו ביעד' },
  { icon: '💬', tip: 'Nomad List + Meetup - מפגשי Digital Nomads' },
  { icon: '🎒', tip: 'Local Tours - Day Trips = להכיר אנשים ולטייל' },
  { icon: '📍', tip: 'שתף מיקום עם הורים/חבר - שקט נפשי שווה הכל' },
];

const groupTips = [
  { icon: '💬', tip: 'קבעו ציפיות ממש מההתחלה - תקציב, קצב, ימי פרידה' },
  { icon: '🗓️', tip: '"ימי חופשה" אישיים - כל אחד עושה מה שרוצה' },
  { icon: '💰', tip: 'Splitwise App - חלוקת הוצאות בלי ריבים' },
  { icon: '🤝', tip: 'אחד מוביל ליום - מחליפים כל יום מי מחליט' },
  { icon: '😤', tip: 'ריב בדרך = נורמלי. מדברים ופותרים מיד' },
  { icon: '🏃', tip: 'בחר חברים שמסכימים על קצב - הכי חשוב!' },
];

export default function SoloVsGroup() {
  return (
    <div className="min-h-screen pt-20 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              🤝 לבד או עם חברים?
            </span>
          </h1>
          <p className="text-gray-400 text-lg">השאלה שכולם שואלים לפני הטיול הגדול</p>
        </div>

        {/* Intro */}
        <div className="rounded-2xl p-6 mb-8 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.1))', border: '1px solid rgba(139,92,246,0.3)' }}>
          <p className="text-gray-300 text-lg leading-relaxed">
            אין תשובה נכונה. <strong className="text-purple-400">שניהם נפלאים</strong>.
            הכל תלוי בך, בחברים שיש לך, ובמה שאתה מחפש.
            <br />
            <span className="text-sm text-gray-400 mt-2 block">
              ה"טיף" של ותיקים: גם אם תצא לבד - תמצא חברותא בדרך.
            </span>
          </p>
        </div>

        {/* Comparison Headers */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="rounded-2xl p-5 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.1))', border: '1px solid rgba(139,92,246,0.4)' }}>
            <div className="text-4xl mb-2">🧍</div>
            <h2 className="text-xl font-black text-white">לבד</h2>
            <p className="text-purple-400 text-sm font-semibold mt-1">Solo Travel</p>
          </div>
          <div className="rounded-2xl p-5 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.1))', border: '1px solid rgba(245,158,11,0.4)' }}>
            <div className="text-4xl mb-2">👯</div>
            <h2 className="text-xl font-black text-white">עם חברים</h2>
            <p className="text-yellow-400 text-sm font-semibold mt-1">Group Travel</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="space-y-3 mb-8">
          {comparisons.map((comp, i) => (
            <div key={i} className="rounded-2xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              {/* Category Header */}
              <div className="text-center py-2 border-b text-sm font-bold text-gray-400"
                style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
                {comp.category}
              </div>
              <div className="grid grid-cols-2">
                {/* Solo */}
                <div className="p-4 border-l" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className={`w-4 h-4 rounded-full ${j < comp.solo.rating ? 'bg-purple-500' : 'bg-gray-700'}`} />
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">{comp.solo.text}</p>
                </div>
                {/* Group */}
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className={`w-4 h-4 rounded-full ${j < comp.group.rating ? 'bg-yellow-500' : 'bg-gray-700'}`} />
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">{comp.group.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips for each */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Solo Tips */}
          <div className="rounded-2xl p-5"
            style={{ background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.3)' }}>
            <h3 className="font-black text-purple-400 mb-4 text-lg">🧍 טיפים לטיול לבד</h3>
            <div className="space-y-2">
              {soloTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span>{tip.icon}</span>
                  <span className="text-gray-300">{tip.tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Group Tips */}
          <div className="rounded-2xl p-5"
            style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.3)' }}>
            <h3 className="font-black text-yellow-400 mb-4 text-lg">👯 טיפים לטיול עם חברים</h3>
            <div className="space-y-2">
              {groupTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span>{tip.icon}</span>
                  <span className="text-gray-300">{tip.tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real Quotes */}
        <div className="rounded-2xl p-6 mb-6"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 className="font-black text-white text-lg mb-4">💬 מה אומרים מטיילים שחזרו?</h3>
          <div className="space-y-4">
            {[
              {
                quote: '"יצאתי לבד לתאילנד ומצאתי חברותא בהוסטל הראשון. אחרי שבוע היינו 6 ישראלים ביחד. זה הכי טוב!"',
                name: 'עידן, 23, תאילנד 6 חודשים',
                type: 'solo',
                color: '#8b5cf6'
              },
              {
                quote: '"יצאנו 3 חברים לדרום אמריקה. אחרי חודש - 2 חברים חזרו הביתה ואני המשכתי לבד. Best Decision Ever."',
                name: 'נועה, 24, דרום אמריקה 8 חודשים',
                type: 'group→solo',
                color: '#f59e0b'
              },
              {
                quote: '"אם תצא לבד - לא תהיה לבד רגע. אנשים בהוסטלים חיפושים חברים כמוך. תסמוך עלי."',
                name: 'גיל, 22, SE Asia 7 חודשים',
                type: 'solo',
                color: '#14b8a6'
              },
            ].map((q, i) => (
              <div key={i} className="rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,0.04)', borderRight: `3px solid ${q.color}` }}>
                <p className="text-gray-300 text-sm italic mb-2">{q.quote}</p>
                <p className="text-xs font-bold" style={{ color: q.color }}>{q.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Verdict */}
        <div className="rounded-2xl p-6 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(139,92,246,0.1))', border: '1px solid rgba(255,255,255,0.15)' }}>
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="font-black text-white text-xl mb-3">הפסיקת</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div className="rounded-xl p-3" style={{ background: 'rgba(139,92,246,0.15)' }}>
              <p className="font-bold text-purple-400 mb-1">לבד אם...</p>
              <p className="text-gray-300">רוצה גדילה אישית, חופש מלא, ורוצה להכיר אנשים חדשים</p>
            </div>
            <div className="rounded-xl p-3" style={{ background: 'rgba(245,158,11,0.15)' }}>
              <p className="font-bold text-yellow-400 mb-1">עם חברים אם...</p>
              <p className="text-gray-300">יש לך חברים טובים בקצב שלך, ואתה רוצה חוויות ביחד</p>
            </div>
            <div className="rounded-xl p-3" style={{ background: 'rgba(16,185,129,0.15)' }}>
              <p className="font-bold text-green-400 mb-1">שניהם אם...</p>
              <p className="text-gray-300">תצא לבד, תמצא חברים בדרך, תיפרד ותמשיך. הכי גמיש!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
