import { useState } from 'react';

const budgetData = {
  thailand: {
    name: 'תאילנד',
    emoji: '🇹🇭',
    accommodation: { low: 40, mid: 120, high: 300 },
    food: { low: 50, mid: 120, high: 250 },
    transport: { low: 20, mid: 60, high: 150 },
    activities: { low: 30, mid: 100, high: 250 },
    flights: 2800,
    visa: 0,
    insurancePer30: 300,
    currency: 'THB',
    note: 'זול מאוד! חוף + Full Moon Party + Spa'
  },
  vietnam: {
    name: 'וייטנאם',
    emoji: '🇻🇳',
    accommodation: { low: 35, mid: 100, high: 280 },
    food: { low: 40, mid: 100, high: 200 },
    transport: { low: 30, mid: 70, high: 150 },
    activities: { low: 25, mid: 80, high: 200 },
    flights: 3000,
    visa: 100,
    insurancePer30: 300,
    currency: 'VND',
    note: 'זול + ייחודי + האלונג Bay!'
  },
  indonesia: {
    name: 'באלי / אינדונזיה',
    emoji: '🇮🇩',
    accommodation: { low: 50, mid: 150, high: 400 },
    food: { low: 40, mid: 110, high: 280 },
    transport: { low: 30, mid: 80, high: 200 },
    activities: { low: 40, mid: 120, high: 300 },
    flights: 3200,
    visa: 0,
    insurancePer30: 300,
    currency: 'IDR',
    note: 'יחסית זול + Beach Clubs שווים!'
  },
  peru: {
    name: 'פרו',
    emoji: '🇵🇪',
    accommodation: { low: 60, mid: 160, high: 400 },
    food: { low: 55, mid: 140, high: 300 },
    transport: { low: 40, mid: 100, high: 250 },
    activities: { low: 80, mid: 200, high: 500 },
    flights: 5500,
    visa: 0,
    insurancePer30: 350,
    currency: 'PEN',
    note: 'מאצ\'ו פיצ\'ו + Rainbow Mountain = שווה!'
  },
  colombia: {
    name: 'קולומביה',
    emoji: '🇨🇴',
    accommodation: { low: 60, mid: 170, high: 400 },
    food: { low: 50, mid: 130, high: 280 },
    transport: { low: 35, mid: 90, high: 220 },
    activities: { low: 60, mid: 150, high: 400 },
    flights: 5000,
    visa: 0,
    insurancePer30: 350,
    currency: 'COP',
    note: 'מדיין + קרטחנה = קסם! טרנד גדול'
  },
  argentina: {
    name: 'ארגנטינה',
    emoji: '🇦🇷',
    accommodation: { low: 70, mid: 200, high: 500 },
    food: { low: 60, mid: 160, high: 350 },
    transport: { low: 50, mid: 120, high: 300 },
    activities: { low: 70, mid: 180, high: 450 },
    flights: 5500,
    visa: 0,
    insurancePer30: 380,
    currency: 'ARS',
    note: 'שים לב לכלכלה - שמור על Blue Dollar!'
  },
  australia: {
    name: 'אוסטרליה',
    emoji: '🇦🇺',
    accommodation: { low: 180, mid: 400, high: 900 },
    food: { low: 100, mid: 220, high: 450 },
    transport: { low: 80, mid: 200, high: 500 },
    activities: { low: 100, mid: 250, high: 600 },
    flights: 4000,
    visa: 700,
    insurancePer30: 500,
    currency: 'AUD',
    note: 'Working Holiday Visa - תשתכר ותכסה הוצאות!'
  },
  kenya: {
    name: 'קניה / מזרח אפריקה',
    emoji: '🇰🇪',
    accommodation: { low: 100, mid: 300, high: 800 },
    food: { low: 60, mid: 150, high: 350 },
    transport: { low: 50, mid: 150, high: 400 },
    activities: { low: 200, mid: 500, high: 1500 },
    flights: 2500,
    visa: 200,
    insurancePer30: 400,
    currency: 'KES',
    note: 'ספארי עולה הרבה אבל שווה כל שקל!'
  },
  usa: {
    name: 'ארה"ב',
    emoji: '🇺🇸',
    accommodation: { low: 200, mid: 500, high: 1200 },
    food: { low: 130, mid: 280, high: 600 },
    transport: { low: 100, mid: 250, high: 600 },
    activities: { low: 100, mid: 250, high: 700 },
    flights: 3500,
    visa: 60,
    insurancePer30: 600,
    currency: 'USD',
    note: 'הכי יקר - לתכנן Road Trip לחסוך!'
  },
};

const travelStyles = [
  { id: 'low', label: '🎒 תקציבן', desc: 'הוסטלים, אוכל רחוב, Night Bus' },
  { id: 'mid', label: '🏨 ממוצע', desc: 'חדרים פרטיים, מסעדות, נוחות סבירה' },
  { id: 'high', label: '✨ נוח', desc: 'מלונות 3-4*, רסטורנטים, טיסות פנימיות' },
];

export default function BudgetCalculator() {
  const [dest, setDest] = useState('thailand');
  const [duration, setDuration] = useState(90);
  const [style, setStyle] = useState('mid');
  const [showBreakdown, setShowBreakdown] = useState(false);

  const d = budgetData[dest];
  const months = duration / 30;

  const accommodation = d.accommodation[style] * duration;
  const food = d.food[style] * duration;
  const transport = d.transport[style] * duration;
  const activities = d.activities[style] * duration;
  const insurance = d.insurancePer30 * months;
  const total = accommodation + food + transport + activities + insurance + d.flights + d.visa;

  const breakdown = [
    { label: 'טיסות הלוך-חזור', amount: d.flights, icon: '✈️', color: '#3b82f6' },
    { label: 'ביטוח נסיעות', amount: Math.round(insurance), icon: '🛡️', color: '#ef4444' },
    { label: 'ויזה', amount: d.visa, icon: '🛂', color: '#8b5cf6' },
    { label: `לינה (${duration} לילות)`, amount: accommodation, icon: '🏨', color: '#f59e0b' },
    { label: `אוכל (${duration} ימים)`, amount: food, icon: '🍜', color: '#10b981' },
    { label: 'תחבורה', amount: transport, icon: '🚌', color: '#14b8a6' },
    { label: 'פעילויות ובידור', amount: activities, icon: '🎯', color: '#f97316' },
  ];

  const budgetLevel = total < 20000 ? { label: 'תקציב נמוך', color: '#10b981', emoji: '💚' }
    : total < 40000 ? { label: 'תקציב ממוצע', color: '#f59e0b', emoji: '💛' }
    : { label: 'תקציב גבוה', color: '#ef4444', emoji: '❤️' };

  return (
    <div className="min-h-screen pt-20 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            <span style={{ background: 'linear-gradient(135deg, #10b981, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              💰 מחשבון תקציב
            </span>
          </h1>
          <p className="text-gray-400 text-lg">כמה עולה הטיול שלך באמת?</p>
        </div>

        {/* INPUTS */}
        <div className="rounded-2xl p-6 mb-6"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
          {/* Destination */}
          <div className="mb-6">
            <label className="font-black text-white text-base block mb-3">🗺️ לאן אתה טס?</label>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
              {Object.entries(budgetData).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setDest(key)}
                  className="rounded-xl px-3 py-2 text-sm font-bold text-right transition-all"
                  style={dest === key
                    ? { background: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: 'white' }
                    : { background: 'rgba(255,255,255,0.06)', color: '#9ca3af' }}
                >
                  {val.emoji} {val.name}
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div className="mb-6">
            <label className="font-black text-white text-base block mb-3">
              📅 כמה זמן? <span className="text-yellow-400">{duration} ימים ({Math.round(months * 10) / 10} חודשים)</span>
            </label>
            <input
              type="range"
              min="30"
              max="365"
              step="15"
              value={duration}
              onChange={e => setDuration(Number(e.target.value))}
              className="w-full accent-yellow-400"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>חודש</span>
              <span>3 חודשים</span>
              <span>6 חודשים</span>
              <span>שנה</span>
            </div>
          </div>

          {/* Style */}
          <div>
            <label className="font-black text-white text-base block mb-3">🎯 סגנון טיול</label>
            <div className="grid grid-cols-3 gap-3">
              {travelStyles.map(s => (
                <button
                  key={s.id}
                  onClick={() => setStyle(s.id)}
                  className="rounded-xl p-3 text-right transition-all"
                  style={style === s.id
                    ? { background: 'linear-gradient(135deg, rgba(245,158,11,0.3), rgba(239,68,68,0.2))', border: '1px solid rgba(245,158,11,0.5)', color: 'white' }
                    : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#9ca3af' }}
                >
                  <div className="font-black text-sm">{s.label}</div>
                  <div className="text-xs mt-1 opacity-70">{s.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RESULT */}
        <div className="rounded-3xl p-8 mb-6 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(245,158,11,0.1))', border: '1px solid rgba(16,185,129,0.3)' }}>
          <div className="text-6xl mb-3">
            {budgetData[dest]?.emoji}
          </div>
          <p className="text-gray-400 mb-2">{duration} ימים ב{budgetData[dest]?.name} ({travelStyles.find(s => s.id === style)?.label})</p>
          <div className="text-5xl md:text-6xl font-black mb-3"
            style={{ background: 'linear-gradient(135deg, #10b981, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            ₪{total.toLocaleString()}
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold"
            style={{ background: `${budgetLevel.color}20`, color: budgetLevel.color, border: `1px solid ${budgetLevel.color}40` }}>
            {budgetLevel.emoji} {budgetLevel.label}
          </div>
          <p className="text-gray-400 text-sm mt-3 italic">{budgetData[dest]?.note}</p>
          <p className="text-gray-500 text-xs mt-2">~ ₪{Math.round(total / duration)}/יום ממוצע</p>
        </div>

        {/* BAR BREAKDOWN */}
        <div className="rounded-2xl p-6 mb-6"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 className="font-black text-white text-lg mb-4">📊 פירוט הוצאות</h3>
          <div className="space-y-3">
            {breakdown.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1 text-sm">
                  <span className="text-white font-semibold">{item.icon} {item.label}</span>
                  <span className="font-black" style={{ color: item.color }}>
                    ₪{item.amount.toLocaleString()}
                    <span className="text-gray-500 text-xs font-normal mr-1">
                      ({Math.round(item.amount / total * 100)}%)
                    </span>
                  </span>
                </div>
                <div className="w-full rounded-full h-2.5 overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${(item.amount / total) * 100}%`, background: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SAVINGS TIPS */}
        <div className="rounded-2xl p-6"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 className="font-black text-white text-lg mb-4">💡 איך לחסוך?</h3>
          <div className="space-y-2">
            {[
              { icon: '✈️', tip: 'קנה טיסות 3-4 חודשים מראש + Skyscanner Alert' },
              { icon: '🌙', tip: 'Night Bus במקום לינה = חוסך לילה' },
              { icon: '🍜', tip: 'אוכל שוקים ורחוב = ₪50-80/יום במקום ₪150' },
              { icon: '💳', tip: 'One Zero Bank - אפס עמלת המרה' },
              { icon: '👥', tip: 'AirBnB עם קבוצה = פחות ₪50-100/לילה לאדם' },
              { icon: '🎒', tip: 'דורמיטורי הוסטל = ₪60-100 במקום ₪150+ לפרטי' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span>{s.icon}</span>
                <span className="text-gray-300">{s.tip}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl p-3 text-center text-sm"
            style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
            <strong className="text-green-400">💚 טיפ זהב:</strong>
            <span className="text-gray-300 mr-1">חיסכון של ₪150/יום על {duration} ימים = ₪{(150 * duration).toLocaleString()} חיסכון!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
