import { useState } from 'react';

const navItems = [
  { id: 'home', label: 'בית', emoji: '🏠' },
  { id: 'destinations', label: 'חיפוש יעד', emoji: '🔍' },
  { id: 'packing', label: 'ציוד', emoji: '🎒' },
  { id: 'comparison', label: 'מזרח vs אמריקה', emoji: '⚖️' },
  { id: 'facebook', label: 'קבוצות פייסבוק', emoji: '👥' },
  { id: 'compare-dest', label: 'השוואת יעדים', emoji: '🗺️' },
  { id: 'insurance', label: 'ביטוח', emoji: '🛡️' },
  { id: 'budget', label: 'תקציב', emoji: '💰' },
  { id: 'tips', label: 'טיפים', emoji: '💡' },
  { id: 'solovgroup', label: 'לבד/עם חברים', emoji: '🤝' },
];

export default function Navbar({ activePage, setActivePage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 right-0 left-0 z-50 hidden md:block"
        style={{ background: 'rgba(10,10,20,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => setActivePage('home')}
              className="flex items-center gap-2 group"
            >
              <span className="text-2xl">✈️</span>
              <div>
                <div className="text-lg font-black leading-tight"
                  style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  הטיול הגדול
                </div>
                <div className="text-xs text-gray-400 leading-tight">מדריך המטייל הישראלי</div>
              </div>
            </button>

            {/* Nav Items */}
            <div className="flex items-center gap-1 flex-wrap justify-end">
              {navItems.slice(1).map(item => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap
                    ${activePage === item.id
                      ? 'text-white font-bold'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  style={activePage === item.id ? {
                    background: 'linear-gradient(135deg, #f59e0b, #ef4444)'
                  } : {}}
                >
                  <span className="ml-1">{item.emoji}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="fixed top-0 right-0 left-0 z-50 md:hidden"
        style={{ background: 'rgba(10,10,20,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => setActivePage('home')} className="flex items-center gap-2">
            <span className="text-xl">✈️</span>
            <span className="text-base font-black"
              style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              הטיול הגדול
            </span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileOpen && (
          <div className="absolute top-full right-0 left-0 z-50 py-2"
            style={{ background: 'rgba(10,10,20,0.98)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { setActivePage(item.id); setMobileOpen(false); }}
                className={`w-full text-right px-6 py-3 text-sm font-medium transition-all
                  ${activePage === item.id ? 'text-yellow-400 bg-white/5' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
              >
                <span className="ml-2">{item.emoji}</span>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 right-0 left-0 z-50 md:hidden"
        style={{ background: 'rgba(10,10,20,0.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="flex items-center justify-around py-2">
          {[
            { id: 'home', emoji: '🏠', label: 'בית' },
            { id: 'destinations', emoji: '🔍', label: 'יעדים' },
            { id: 'budget', emoji: '💰', label: 'תקציב' },
            { id: 'tips', emoji: '💡', label: 'טיפים' },
            { id: 'insurance', emoji: '🛡️', label: 'ביטוח' },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-all
                ${activePage === item.id ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
            >
              <span className="text-xl">{item.emoji}</span>
              <span className={`text-xs font-medium ${activePage === item.id ? 'text-yellow-400' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
