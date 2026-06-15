import { useState } from 'react';
import { packingListMale, packingListFemale } from '../data/packingList';

export default function PackingList() {
  const [gender, setGender] = useState('male');
  const [activeSection, setActiveSection] = useState('clothing');
  const [checkedItems, setCheckedItems] = useState({});

  const list = gender === 'male' ? packingListMale : packingListFemale;

  const toggleItem = (sectionKey, idx) => {
    const key = `${sectionKey}-${idx}`;
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getCheckedCount = (sectionKey) => {
    const items = list[sectionKey]?.items || [];
    return items.filter((_, i) => checkedItems[`${sectionKey}-${i}`]).length;
  };

  const getTotalChecked = () => {
    return Object.values(checkedItems).filter(Boolean).length;
  };

  const getTotalItems = () => {
    return Object.values(list).reduce((acc, section) => acc + (section.items?.length || 0), 0);
  };

  const sectionOrder = ['clothing', 'hygiene', 'documents', 'beforeTravel'];
  const sectionLabels = {
    clothing: { label: 'לבוש', icon: '👕', color: '#f59e0b' },
    hygiene: { label: 'היגיינה', icon: '🧴', color: '#14b8a6' },
    documents: { label: 'מסמכים', icon: '📄', color: '#3b82f6' },
    beforeTravel: { label: 'לסדר לפני הטיול', icon: '✅', color: '#8b5cf6' },
  };

  return (
    <div className="min-h-screen pt-20 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            <span style={{ background: 'linear-gradient(135deg, #14b8a6, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              🎒 רשימת ציוד
            </span>
          </h1>
          <p className="text-gray-400">כל מה שצריך לחצי שנה בדרכים</p>
        </div>

        {/* Gender Toggle */}
        <div className="flex gap-3 mb-6 justify-center">
          <button
            onClick={() => setGender('male')}
            className={`px-8 py-3 rounded-2xl font-black text-lg transition-all duration-200 ${gender === 'male' ? 'text-white scale-105' : 'text-gray-400'}`}
            style={gender === 'male' ? { background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', boxShadow: '0 0 20px rgba(59,130,246,0.4)' } : { background: 'rgba(255,255,255,0.07)' }}
          >
            👨 גברים
          </button>
          <button
            onClick={() => setGender('female')}
            className={`px-8 py-3 rounded-2xl font-black text-lg transition-all duration-200 ${gender === 'female' ? 'text-white scale-105' : 'text-gray-400'}`}
            style={gender === 'female' ? { background: 'linear-gradient(135deg, #ec4899, #ef4444)', boxShadow: '0 0 20px rgba(236,72,153,0.4)' } : { background: 'rgba(255,255,255,0.07)' }}
          >
            👩 נשים
          </button>
        </div>

        {/* Progress */}
        <div className="rounded-2xl p-5 mb-6"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-400 text-sm">התקדמות</span>
            <span className="font-black text-white">{getTotalChecked()}/{getTotalItems()} פריטים</span>
          </div>
          <div className="w-full rounded-full h-3 overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${getTotalItems() > 0 ? (getTotalChecked() / getTotalItems()) * 100 : 0}%`,
                background: 'linear-gradient(90deg, #f59e0b, #ef4444)'
              }}
            />
          </div>
          {getTotalChecked() === getTotalItems() && getTotalItems() > 0 && (
            <div className="text-center mt-3 text-yellow-400 font-black text-lg">
              🎉 מוכן לטיול!
            </div>
          )}
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap gap-2 mb-5">
          {sectionOrder.map(sectionKey => {
            const cfg = sectionLabels[sectionKey];
            const items = list[sectionKey]?.items || [];
            const checked = getCheckedCount(sectionKey);
            return (
              <button
                key={sectionKey}
                onClick={() => setActiveSection(sectionKey)}
                className="px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-1"
                style={activeSection === sectionKey
                  ? { background: cfg.color, color: 'white' }
                  : { background: 'rgba(255,255,255,0.07)', color: '#9ca3af' }}
              >
                {cfg.icon} {cfg.label}
                <span className="text-xs opacity-70 mr-1">({checked}/{items.length})</span>
              </button>
            );
          })}
        </div>

        {/* Items List */}
        <div className="rounded-2xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${sectionLabels[activeSection]?.color}30` }}>
          <div className="p-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              <span style={{ color: sectionLabels[activeSection]?.color }}>{sectionLabels[activeSection]?.icon}</span>
              {list[activeSection]?.title}
            </h2>
          </div>

          <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            {(list[activeSection]?.items || []).map((item, idx) => {
              const key = `${activeSection}-${idx}`;
              const isChecked = checkedItems[key];
              return (
                <button
                  key={idx}
                  onClick={() => toggleItem(activeSection, idx)}
                  className="w-full text-right p-4 flex items-start gap-3 transition-all hover:bg-white/5"
                >
                  {/* Checkbox */}
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{
                      borderColor: isChecked ? '#10b981' : 'rgba(255,255,255,0.3)',
                      background: isChecked ? '#10b981' : 'transparent'
                    }}>
                    {isChecked && <span className="text-white text-xs font-black">✓</span>}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`text-sm font-semibold ${isChecked ? 'line-through text-gray-500' : 'text-white'}`}>
                        {item.name}
                      </span>
                      {item.essential && (
                        <span className="text-xs px-1.5 py-0.5 rounded-full font-bold"
                          style={{ background: 'rgba(239,68,68,0.2)', color: '#ef4444' }}>
                          חובה
                        </span>
                      )}
                    </div>
                    {item.tip && (
                      <p className="text-xs text-gray-400">💡 {item.tip}</p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tips Banner */}
        <div className="mt-6 rounded-2xl p-5"
          style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(239,68,68,0.1))', border: '1px solid rgba(245,158,11,0.2)' }}>
          <h3 className="font-black text-white mb-3">💡 טיפים לאריזה</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>🎒 <strong>גודל תיק:</strong> 40-50 ליטר לטיול רגיל, 20-25 ליטר לתיק יום-יום קטן</p>
            <p>⚖️ <strong>משקל:</strong> מקסימום 10-12 ק"ג - אם לא יכולת לרוץ איתו, הוא כבד מדי</p>
            <p>👕 <strong>בגדים:</strong> Quick-dry מיקרופייבר - מתייבשים בלילה</p>
            <p>🗜️ <strong>חיסכון מקום:</strong> Packing Cubes + Roll don't fold</p>
            <p>🔌 <strong>מטען:</strong> USB-C + אדפטור גלובלי + פאוורבנק 20,000mAh</p>
          </div>
        </div>
      </div>
    </div>
  );
}
