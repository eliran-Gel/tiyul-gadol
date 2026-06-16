// pages.js - All page components for Tiyul Gadol
// Loaded after React, Babel CDN and data.js
// No imports - uses global React, and global data from data.js

var useState = React.useState;
var useEffect = React.useEffect;

// ------------------------------------------------------------------
// Global data aliases — data.js should expose these names, or we
// fall back to the camelCase names exported by the src/data/ modules.
// Expected globals from data.js:
//   DESTINATIONS        = destinations  (object keyed by id)
//   DESTINATION_LIST    = destinationList (array)
//   PACKING_MALE        = packingListMale
//   PACKING_FEMALE      = packingListFemale
//   FACEBOOK_GROUPS     = facebookGroups
//   INSURANCE_COMPANIES = insuranceCompanies
//   COVERAGE_TYPES      = coverageTypes
//   CREDIT_CARDS        = creditCards
//   BUDGET_DATA         = budgetData (inline object defined below as fallback)
//   TRAVELER_TIPS       = travelerTips
//   COMMON_MISTAKES     = commonMistakes
// ------------------------------------------------------------------
// Fallback aliases in case data.js uses camelCase names:
if (typeof DESTINATIONS === 'undefined' && typeof destinations !== 'undefined') { var DESTINATIONS = destinations; }
if (typeof DESTINATION_LIST === 'undefined' && typeof destinationList !== 'undefined') { var DESTINATION_LIST = destinationList; }
if (typeof PACKING_MALE === 'undefined' && typeof packingListMale !== 'undefined') { var PACKING_MALE = packingListMale; }
if (typeof PACKING_FEMALE === 'undefined' && typeof packingListFemale !== 'undefined') { var PACKING_FEMALE = packingListFemale; }
if (typeof FACEBOOK_GROUPS === 'undefined' && typeof facebookGroups !== 'undefined') { var FACEBOOK_GROUPS = facebookGroups; }
if (typeof INSURANCE_COMPANIES === 'undefined' && typeof insuranceCompanies !== 'undefined') { var INSURANCE_COMPANIES = insuranceCompanies; }
if (typeof COVERAGE_TYPES === 'undefined' && typeof coverageTypes !== 'undefined') { var COVERAGE_TYPES = coverageTypes; }
if (typeof CREDIT_CARDS === 'undefined' && typeof creditCards !== 'undefined') { var CREDIT_CARDS = creditCards; }
if (typeof TRAVELER_TIPS === 'undefined' && typeof travelerTips !== 'undefined') { var TRAVELER_TIPS = travelerTips; }
if (typeof COMMON_MISTAKES === 'undefined' && typeof commonMistakes !== 'undefined') { var COMMON_MISTAKES = commonMistakes; }

// ─── DESTINATION SCENIC VIDEOS (YouTube IDs) ─────────────────────────────────
var DEST_VIDEOS = {
  thailand:    'f6RqF2XS1E8',  // The most beautiful Islands in Thailand 2025
  vietnam:     '1vONUVO_fQQ',  // Wonders of Vietnam - Most Stunning Landscapes 4K
  indonesia:   'Mssr5pBmD3o',  // Indonesia 4K - Most Beautiful Islands, Temples & Landscapes
  peru:        'czow86dm7ZE',  // Wonders of Peru - Most Beautiful Places 4K
  colombia:    'QMhiH4_wj1o',  // Wonders of Colombia - Most Amazing Places 4K
  argentina:   'yFC9nWo4zDU',  // Wonders of Argentina - Most Amazing Places 4K
  australia:   '93utcTSKRy4',  // Wonders of Australia - Most Amazing Places 4K
  kenya:       'irG_Kj21c1I',  // Masai Mara - African Wildlife in 4K
  usa:         'JUfybRQc_1o',  // Top 25 Places To Visit In The USA
  philippines: 'ZaDrcVh1l4E',  // Wonders of the Philippines - Most Amazing Places 4K
  morocco:     'SbVjY45vlLM',  // Wonders of Morocco - Most Amazing Places 4K
  newzealand:  'a2ZT0Zermy0',  // 10 Most Beautiful Places in New Zealand 4K
  cambodia:    'EPNtkzz4u-A',  // Top 10 Best Places to Visit in Cambodia 2025
  brazil:      '_8e1Ki6LfWY',  // 10 Most Beautiful Natural Wonders of Brazil 4K
  uganda:      'zPrp684rDJQ',  // Wonders of Uganda - Most Beautiful Places 4K
  japan:       'DcwfCyFg0VQ',  // Wonders of Japan - Most Amazing Places 4K
  bolivia:     'xDgkLihHmdc',  // Wonders of Bolivia - Most Amazing Places 4K
  mexico:      'Y6qzKNws2MM',  // Wonders of Latin America - Most Amazing Places 4K
  tanzania:    'uaZzsJGh3qM',  // Wonders of Tanzania - Africa's Wild Heart 4K
  india:       'FM2OuVbkPVw',  // Wonders of India - Most Amazing Places 4K
  namibia:     'MbactdC-0Pw',  // Wonders of Africa - Most Amazing Places 4K
  guatemala:   'Y6qzKNws2MM',  // Wonders of Latin America - Most Amazing Places 4K
  laos:        'Eel6feng7Dg',  // Vietnam, Cambodia, Laos & Thailand 4K
  chile:       '5FVhJa-xwIQ',  // Top 10 Places To Visit in Patagonia
  costarica:   'TkBwm_cCGHA',  // Wonders of Costa Rica - Most Amazing Places 4K
  nepal:       'I7Bc8pe_hCU',  // Nepal In 4K - Country Of The Highest Mountain
  madagascar:  '6jP4ZUWSoJs',  // Wonders of Madagascar - Most Amazing Places 4K
  ecuador:     'hUjnWOh8BUw',  // Wonders of Ecuador - Best Places 4K
  srilanka:    'tjU5OtswxZo',  // Sri Lanka In 4K - Land Of Stunning Natural Wonders
  southafrica: 'xNHNcofAWJw',  // Cape Town & South Africa - Ultimate Travel Guide 4K
};

// ============================================================
// 1. HomePage
// ============================================================
var HomePage = function(props) {
  var setActivePage = props.setActivePage;
  var setSelectedDest = props.setSelectedDest;
  var [fadeIn, setFadeIn] = useState(false);
  var [activeRegion, setActiveRegion] = useState('all');
  var [hoveredDest, setHoveredDest] = useState(null);

  useEffect(function() {
    setTimeout(function() { setFadeIn(true); }, 80);
  }, []);

  var quickAccess = [
    { icon: '💰', label: 'מחשבון תקציב', page: 'budget', desc: 'כמה עולה הטיול שלך?', color: '#f59e0b' },
    { icon: '🎒', label: 'רשימת ציוד', page: 'packing', desc: 'מה לארוז?', color: '#10b981' },
    { icon: '🛡️', label: 'ביטוח נסיעות', page: 'insurance', desc: 'איזה ביטוח לקחת?', color: '#3b82f6' },
    { icon: '👥', label: 'קבוצות פייסבוק', page: 'facebook', desc: 'קהילת המטיילים', color: '#8b5cf6' },
    { icon: '💡', label: 'טיפים ממטיילים', page: 'tips', desc: 'חוכמת הקהל', color: '#ec4899' },
    { icon: '⚖️', label: 'מזרח vs אמריקה', page: 'comparison', desc: 'לאן ללכת?', color: '#14b8a6' },
    { icon: '🗺️', label: 'השוואת יעדים', page: 'compare-dest', desc: 'השווה 2 יעדים', color: '#f97316' },
    { icon: '🤝', label: 'לבד או עם חברים', page: 'solovgroup', desc: 'מה מתאים לך?', color: '#a855f7' },
  ];

  var regionFilters = [
    { id: 'all', label: 'הכל 🌍' },
    { id: 'asia', label: 'אסיה 🌏' },
    { id: 'southamerica', label: 'דרום אמריקה 🌎' },
    { id: 'australia', label: 'אוסטרליה 🦘' },
    { id: 'africa', label: 'אפריקה 🦁' },
    { id: 'northamerica', label: 'ארה"ב 🗽' },
    { id: 'centralamerica', label: 'מרכז אמריקה 🌴' },
  ];

  var allDests = DESTINATIONS ? Object.values(DESTINATIONS) : [];
  var filteredDests = activeRegion === 'all' ? allDests : allDests.filter(function(d) { return d.region === activeRegion; });

  return React.createElement('div', { dir: 'rtl', style: { direction: 'rtl', textAlign: 'right', minHeight: '100vh', background: '#0a0a0f', color: 'white', paddingBottom: '80px' } },

    // ── Hero ──
    React.createElement('div', {
      className: 'hero-bg',
      style: {
        padding: '90px 20px 70px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? 'translateY(0)' : 'translateY(24px)',
        transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
      }
    },
      React.createElement('div', { className: 'float', style: { fontSize: '72px', marginBottom: '20px', display: 'inline-block' } }, '✈️'),
      React.createElement('h1', {
        style: {
          fontSize: 'clamp(2.8rem, 9vw, 5rem)',
          fontWeight: '900',
          marginBottom: '14px',
          lineHeight: 1.05,
          background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-1px',
        }
      }, 'הטיול הגדול'),
      React.createElement('p', {
        style: { color: '#9ca3af', fontSize: 'clamp(1rem,2.5vw,1.3rem)', maxWidth: '540px', margin: '0 auto 12px', lineHeight: 1.6 }
      }, 'המדריך הכי מלא למטיילים ישראלים אחרי צבא'),
      React.createElement('p', {
        style: { color: '#6b7280', fontSize: '0.95rem', marginBottom: '36px' }
      }, '30 יעדים • טיפים אמיתיים • מחשבון תקציב • ביטוח • ועוד'),
      React.createElement('div', { style: { display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' } },
        React.createElement('button', {
          onClick: function() { setActivePage('destinations'); },
          style: {
            background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
            color: 'white', border: 'none', borderRadius: '50px',
            padding: '15px 40px', fontSize: '1.1rem', fontWeight: '900', cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(245,158,11,0.4)',
          }
        }, '🗺️ גלה יעדים'),
        React.createElement('button', {
          onClick: function() { setActivePage('budget'); },
          style: {
            background: 'rgba(255,255,255,0.08)', color: 'white',
            border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50px',
            padding: '15px 32px', fontSize: '1rem', fontWeight: '700', cursor: 'pointer',
          }
        }, '💰 מחשבון תקציב')
      )
    ),

    React.createElement('div', { style: { maxWidth: '1100px', margin: '0 auto', padding: '0 16px' } },

      // ── Stats ──
      React.createElement('div', {
        style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', margin: '32px 0 48px' }
      },
        [
          { num: '500,000+', label: 'ישראלים בשנה', icon: '🇮🇱', color: '#f59e0b' },
          { num: '30', label: 'יעדים במדריך', icon: '🌍', color: '#ef4444' },
          { num: '6-12', label: 'חודשים ממוצע', icon: '📅', color: '#8b5cf6' },
          { num: '₪40K', label: 'תקציב ממוצע', icon: '💰', color: '#10b981' },
        ].map(function(stat, i) {
          return React.createElement('div', {
            key: i,
            style: {
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderTop: '3px solid ' + stat.color,
              borderRadius: '16px', padding: '20px', textAlign: 'center',
            }
          },
            React.createElement('div', { style: { fontSize: '24px', marginBottom: '6px' } }, stat.icon),
            React.createElement('div', { style: { fontSize: '1.7rem', fontWeight: '900', color: stat.color, lineHeight: 1, direction: 'ltr', unicodeBidi: 'isolate' } }, stat.num),
            React.createElement('div', { style: { color: '#9ca3af', fontSize: '0.78rem', marginTop: '4px', fontWeight: '600' } }, stat.label)
          );
        })
      ),

      // ── All Destinations ──
      React.createElement('div', { style: { marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' } },
        React.createElement('h2', { style: { fontSize: '1.7rem', fontWeight: '900', margin: 0 } }, '🌍 כל היעדים'),
        React.createElement('button', {
          onClick: function() { setActivePage('destinations'); },
          style: { background: 'none', border: '1px solid rgba(245,158,11,0.4)', color: '#f59e0b', borderRadius: '50px', padding: '6px 16px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '700' }
        }, 'חיפוש מתקדם →')
      ),

      // Region filter pills
      React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' } },
        regionFilters.map(function(r) {
          return React.createElement('button', {
            key: r.id,
            onClick: function() { setActiveRegion(r.id); },
            style: {
              background: activeRegion === r.id ? 'linear-gradient(135deg,#f59e0b,#ef4444)' : 'rgba(255,255,255,0.06)',
              color: 'white', border: 'none', borderRadius: '50px',
              padding: '8px 16px', cursor: 'pointer', fontWeight: '700', fontSize: '0.82rem',
              transition: 'all 0.2s',
            }
          }, r.label);
        })
      ),

      // Destination cards grid
      React.createElement('div', {
        style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px', marginBottom: '52px' }
      },
        filteredDests.map(function(dest) {
          var isHov = hoveredDest === dest.id;
          var budgetInfo = BUDGET_DATA && BUDGET_DATA[dest.id];
          return React.createElement('div', {
            key: dest.id,
            onClick: function() { if (setSelectedDest) setSelectedDest(dest.id); setActivePage('destinations'); },
            onMouseEnter: function() { setHoveredDest(dest.id); },
            onMouseLeave: function() { setHoveredDest(null); },
            style: {
              borderRadius: '18px', overflow: 'hidden', cursor: 'pointer',
              border: isHov ? '1px solid rgba(245,158,11,0.5)' : '1px solid rgba(255,255,255,0.08)',
              transform: isHov ? 'translateY(-5px) scale(1.01)' : 'translateY(0) scale(1)',
              transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
              boxShadow: isHov ? '0 20px 40px rgba(0,0,0,0.5)' : 'none',
              position: 'relative',
            }
          },
            React.createElement('img', {
              src: dest.heroImage, alt: dest.name,
              style: { width: '100%', height: '170px', objectFit: 'contain', background: '#1a1a2e', display: 'block', transition: 'transform 0.4s', transform: isHov ? 'scale(1.04)' : 'scale(1)' }
            }),
            React.createElement('div', {
              style: {
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.92))',
                padding: '30px 14px 14px',
              }
            },
              React.createElement('div', { style: { fontWeight: '800', fontSize: '1.05rem', marginBottom: '3px' } }, dest.emoji + ' ' + dest.name),
              React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
                React.createElement('div', { style: { color: '#f59e0b', fontSize: '0.75rem', fontWeight: '700' } }, '⭐ ' + dest.rating + ' • ' + dest.bestSeason),
                budgetInfo && React.createElement('div', {
                  style: { background: 'rgba(245,158,11,0.2)', color: '#fbbf24', borderRadius: '8px', padding: '2px 8px', fontSize: '0.7rem', fontWeight: '800' }
                }, '₪' + dest.avgBudgetPerDay + '/יום')
              )
            )
          );
        })
      ),

      // ── Quick Access ──
      React.createElement('h2', { style: { fontSize: '1.7rem', fontWeight: '900', marginBottom: '16px' } }, '⚡ גישה מהירה'),
      React.createElement('div', {
        style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px', marginBottom: '52px' }
      },
        quickAccess.map(function(item, i) {
          return React.createElement('div', {
            key: i,
            onClick: function() { setActivePage(item.page); },
            style: {
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRight: '3px solid ' + item.color,
              borderRadius: '14px', padding: '18px', cursor: 'pointer',
              transition: 'all 0.2s',
            },
            onMouseEnter: function(e) {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            },
            onMouseLeave: function(e) {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              e.currentTarget.style.transform = 'translateY(0)';
            },
          },
            React.createElement('div', { style: { fontSize: '26px', marginBottom: '8px' } }, item.icon),
            React.createElement('div', { style: { fontWeight: '800', fontSize: '0.95rem', marginBottom: '3px' } }, item.label),
            React.createElement('div', { style: { color: '#6b7280', fontSize: '0.78rem' } }, item.desc)
          );
        })
      ),

      // ── What is Tiyul Gadol ──
      React.createElement('div', {
        style: {
          background: 'linear-gradient(135deg, rgba(245,158,11,0.07), rgba(139,92,246,0.07))',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '24px', padding: '36px', marginBottom: '40px',
        }
      },
        React.createElement('h2', { style: { fontSize: '1.6rem', fontWeight: '900', marginBottom: '14px' } }, '🤔 מה זה הטיול הגדול?'),
        React.createElement('p', { style: { color: '#d1d5db', lineHeight: '1.8', marginBottom: '12px', fontSize: '0.95rem' } },
          'הטיול הגדול הוא מסורת ישראלית ייחודית — אחרי צבא, לפני אוניברסיטה. חצי מיליון ישראלים יוצאים לדרך כל שנה לחוויה שמשנה חיים.'
        ),
        React.createElement('p', { style: { color: '#d1d5db', lineHeight: '1.8', marginBottom: '20px', fontSize: '0.95rem' } },
          'מתאילנד ועד פטגוניה, מאוסטרליה ועד מרוקו — הרפתקה של חצי שנה עד שנה שמאפשרת לגלות את העולם, את עצמך, ולבנות זיכרונות לכל החיים.'
        ),
        React.createElement('div', { style: { display: 'flex', gap: '10px', flexWrap: 'wrap' } },
          ['🌍 גילוי עולמי', '🧠 גדילה אישית', '👥 חברויות לכל החיים', '💪 עצמאות', '🌅 הרפתקאות', '📸 זיכרונות לנצח'].map(function(tag, i) {
            return React.createElement('span', {
              key: i,
              style: {
                background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)',
                color: '#fbbf24', borderRadius: '50px', padding: '6px 14px', fontSize: '0.82rem', fontWeight: '700',
              }
            }, tag);
          })
        )
      )
    )
  );
};

// ============================================================
// AccordionItemContent — gallery + info for a single accordion item
// ============================================================
var AccordionItemContent = function(props) {
  var item = props.item;
  var destName = props.destName || '';
  var isObj = typeof item === 'object' && item !== null;
  var name = isObj ? (item.name || '') : '';
  var baseImg = (isObj && item.image) ? item.image : '';

  // Build full gallery deduplicated
  var raw = [baseImg].concat((isObj && item.images) ? item.images : []);
  var seen = {};
  var gallery = raw.filter(function(u) { if (!u || seen[u]) return false; seen[u]=true; return true; });

  var st = React.useState(baseImg);
  var mainImg = st[0];
  var setMainImg = st[1];

  var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent((name + ' ' + destName).trim());

  return React.createElement('div', { style: { borderTop: '1px solid rgba(255,255,255,0.06)' } },
    // Main image
    React.createElement('img', {
      src: mainImg, alt: name,
      style: { width: '100%', height: '220px', objectFit: 'contain', background: '#0a0a0f', display: 'block', transition: 'opacity 0.2s' },
      onError: function(e) { e.target.style.display = 'none'; }
    }),
    // Clickable thumbnail strip
    gallery.length > 1 && React.createElement('div', {
      style: { display: 'flex', gap: '4px', overflowX: 'auto', padding: '6px 6px', background: 'rgba(0,0,0,0.55)',
               scrollbarWidth: 'thin', scrollbarColor: '#f59e0b #111' }
    },
      gallery.map(function(src, idx) {
        var active = src === mainImg;
        return React.createElement('img', {
          key: idx, src: src, alt: name + ' ' + (idx+1),
          onClick: function() { setMainImg(src); },
          style: {
            height: '68px', width: '102px', objectFit: 'cover', borderRadius: '7px', flexShrink: 0,
            cursor: 'pointer', transition: 'all 0.15s ease',
            border: active ? '2px solid #f59e0b' : '2px solid rgba(255,255,255,0.1)',
            opacity: active ? 1 : 0.55,
            transform: active ? 'scale(1.04)' : 'scale(1)',
            boxShadow: active ? '0 0 10px rgba(245,158,11,0.5)' : 'none'
          },
          onError: function(e) { e.target.style.display = 'none'; }
        });
      })
    ),
    React.createElement('div', { style: { padding: '16px 18px', background: 'rgba(0,0,0,0.3)', direction: 'rtl' } },
      (isObj && item.desc) && React.createElement('p', {
        style: { color: '#e5e7eb', fontSize: '0.9rem', lineHeight: '1.85', marginBottom: '12px' }
      }, item.desc),
      !isObj && React.createElement('p', { style: { color: '#9ca3af', fontSize: '0.85rem', fontStyle: 'italic' } }, 'אחד ממקומות הביקור המומלצים ביותר בטיול הגדול'),
      (isObj && (item.duration || item.length || item.difficulty)) && React.createElement('div', {
        style: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }
      },
        item.duration && React.createElement('span', { style: { background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.4)', color: '#a78bfa', borderRadius: '50px', padding: '4px 12px', fontSize: '0.8rem', fontWeight: '700' } }, '📅 ' + item.duration),
        item.length && React.createElement('span', { style: { background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.4)', color: '#93c5fd', borderRadius: '50px', padding: '4px 12px', fontSize: '0.8rem', fontWeight: '700' } }, '📏 ' + item.length),
        item.difficulty && React.createElement('span', { style: { background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.35)', color: '#fca5a5', borderRadius: '50px', padding: '4px 12px', fontSize: '0.8rem', fontWeight: '700' } }, '⚡ ' + item.difficulty)
      ),
      (isObj && item.crowded) && React.createElement('div', {
        style: { display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(20,184,166,0.15)', border: '1px solid rgba(20,184,166,0.3)', color: '#5eead4', borderRadius: '50px', padding: '4px 14px', fontSize: '0.8rem', fontWeight: '700', marginBottom: '10px' }
      }, '👥 ' + item.crowded),
      (isObj && item.whatToFind) && React.createElement('div', {
        style: { background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '10px 14px', marginBottom: '10px' }
      },
        React.createElement('div', { style: { color: '#9ca3af', fontSize: '0.75rem', fontWeight: '700', marginBottom: '4px' } }, '🌊 מה תמצא שם'),
        React.createElement('div', { style: { color: '#d1d5db', fontSize: '0.85rem', lineHeight: '1.7' } }, item.whatToFind)
      ),
      (isObj && item.notes) && React.createElement('div', {
        style: { background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '10px', padding: '10px 14px', color: '#fbbf24', fontSize: '0.82rem', fontWeight: '600', marginBottom: '10px', lineHeight: '1.7' }
      }, '⚠️ ' + item.notes),
      (isObj && item.tip) && React.createElement('div', {
        style: { background: 'rgba(245,158,11,0.12)', borderRadius: '8px', padding: '10px 14px', color: '#fbbf24', fontSize: '0.82rem', fontWeight: '700', marginBottom: '8px' }
      }, '💡 טיפ: ' + item.tip),
      (isObj && item.price) && React.createElement('div', {
        style: { color: '#10b981', fontWeight: '800', fontSize: '0.88rem', marginBottom: '10px' }
      }, '💰 כניסה: ' + item.price),
      // Buttons row
      React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '4px' } },
        (isObj && item.link) && React.createElement('a', {
          href: item.link, target: '_blank', rel: 'noopener noreferrer',
          style: { display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'linear-gradient(135deg,#f59e0b,#ef4444)', color: 'white', borderRadius: '50px', padding: '7px 16px', fontSize: '0.8rem', fontWeight: '700', textDecoration: 'none' }
        }, '🔗 לאתר הרשמי ←'),
        React.createElement('a', {
          href: searchUrl, target: '_blank', rel: 'noopener noreferrer',
          style: { display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#d1d5db', borderRadius: '50px', padding: '7px 16px', fontSize: '0.8rem', fontWeight: '700', textDecoration: 'none' }
        }, '🔍 מידע נוסף ←')
      )
    )
  );
};

// ============================================================
// 2. DestinationExplorer
// ============================================================
var DestinationExplorer = function(props) {
  var initialDest = props.initialDest;
  var [selected, setSelected] = useState(initialDest || null);
  var [search, setSearch] = useState('');
  var [activeTab, setActiveTab] = useState('facts');
  var [openItem, setOpenItem] = useState(null);

  var allDests = DESTINATION_LIST || (DESTINATIONS ? Object.values(DESTINATIONS) : []);

  var filtered = allDests.filter(function(d) {
    return !search || d.name.includes(search) || (d.nameEn && d.nameEn.toLowerCase().includes(search.toLowerCase()));
  });

  var dest = selected ? (DESTINATIONS ? DESTINATIONS[selected] : allDests.find(function(d) { return d.id === selected; })) : null;

  var categoryTabs = [
    { key: 'scenery', label: 'נופים', icon: '🏔️' },
    { key: 'hiking', label: 'טיולים', icon: '🥾' },
    { key: 'parties', label: 'מסיבות', icon: '🎉' },
    { key: 'beaches', label: 'חופים', icon: '🏖️' },
    { key: 'attractions', label: 'אטרקציות', icon: '🗺️' },
    { key: 'food', label: 'אוכל', icon: '🍜' },
    { key: 'mustdo', label: 'חובה', icon: '⭐' },
  ];

  var factsMap = [
    { key: 'distanceFromIsrael', label: 'מרחק מישראל' },
    { key: 'flightTime', label: 'זמן טיסה' },
    { key: 'language', label: 'שפה' },
    { key: 'currency', label: 'מטבע' },
    { key: 'capital', label: 'בירה' },
    { key: 'visa', label: 'ויזה' },
    { key: 'timezone', label: 'אזור זמן' },
    { key: 'safety', label: 'בטיחות' },
    { key: 'bestSeason', label: 'עונה מומלצת' },
    { key: 'population', label: 'אוכלוסיה' },
  ];

  if (!dest) {
    return React.createElement('div', { dir: 'rtl', style: { direction: 'rtl', minHeight: '100vh', background: '#0a0a0f', color: 'white', padding: '80px 16px 80px' } },
      React.createElement('div', { style: { maxWidth: '900px', margin: '0 auto' } },
        React.createElement('h1', { style: { fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '8px' } }, '🌍 יעדים'),
        React.createElement('p', { style: { color: '#9ca3af', textAlign: 'center', marginBottom: '32px' } }, 'בחר יעד לגלות עליו הכל'),
        React.createElement('input', {
          type: 'text',
          value: search,
          onChange: function(e) { setSearch(e.target.value); },
          placeholder: '🔍 חפש יעד...',
          style: {
            width: '100%',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '12px',
            padding: '14px 18px',
            color: 'white',
            fontSize: '1rem',
            marginBottom: '24px',
            boxSizing: 'border-box',
            outline: 'none',
          }
        }),
        React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' } },
          filtered.map(function(d) {
            return React.createElement('div', {
              key: d.id,
              onClick: function() { setSelected(d.id); setActiveTab('facts'); },
              style: {
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'transform 0.2s',
                position: 'relative',
              },
              onMouseEnter: function(e) { e.currentTarget.style.transform = 'scale(1.02)'; },
              onMouseLeave: function(e) { e.currentTarget.style.transform = 'scale(1)'; },
            },
              React.createElement('img', { src: d.heroImage, alt: d.name, style: { width: '100%', height: '160px', objectFit: 'contain', background: '#1a1a2e', display: 'block' } }),
              React.createElement('div', {
                style: {
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.88))',
                  padding: '20px 16px 16px',
                }
              },
                React.createElement('div', { style: { fontWeight: '800', fontSize: '1.1rem' } }, d.emoji + ' ' + d.name),
                React.createElement('div', { style: { color: '#f59e0b', fontSize: '0.8rem', fontWeight: '700' } }, '⭐ ' + d.rating + ' • ' + d.bestSeason)
              )
            );
          })
        )
      )
    );
  }

  var coords = dest.mapCoords || { lat: 15, lng: 100 };
  var mapUrl = 'https://www.openstreetmap.org/export/embed.html?bbox=' + (coords.lng - 6) + '%2C' + (coords.lat - 6) + '%2C' + (coords.lng + 6) + '%2C' + (coords.lat + 6) + '&layer=mapnik&marker=' + coords.lat + '%2C' + coords.lng;

  return React.createElement('div', { dir: 'rtl', style: { direction: 'rtl', minHeight: '100vh', background: '#0a0a0f', color: 'white', paddingBottom: '80px' } },

    // Hero — full height, back button overlaid at bottom-left
    React.createElement('div', { style: { position: 'relative', height: '320px', overflow: 'hidden' } },
      React.createElement('img', { src: dest.heroImage, alt: dest.name, style: { width: '100%', height: '100%', objectFit: 'cover' } }),
      React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'linear-gradient(transparent 30%, rgba(10,10,15,0.95))', pointerEvents: 'none' } }),
      React.createElement('button', {
        onClick: function() { setSelected(null); setActiveTab('facts'); },
        style: {
          position: 'absolute', top: '108px', right: '16px',
          background: 'rgba(0,0,0,0.6)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: 'white', borderRadius: '50px',
          padding: '6px 14px', cursor: 'pointer', fontWeight: '600',
          fontSize: '0.82rem', zIndex: 10, pointerEvents: 'auto',
          backdropFilter: 'blur(4px)',
        }
      }, '← כל היעדים'),
      React.createElement('div', {
        style: { position: 'absolute', bottom: '24px', right: '24px' }
      },
        React.createElement('h1', { style: { fontSize: '2.8rem', fontWeight: '900', textShadow: '0 2px 8px rgba(0,0,0,0.8)' } },
          dest.emoji + ' ' + dest.name
        ),
        React.createElement('div', { style: { color: '#f59e0b', fontWeight: '700' } },
          '⭐ ' + dest.rating + ' • ' + dest.bestSeason + ' • ' + (dest.avgBudgetPerDay ? '₪' + dest.avgBudgetPerDay + '/יום' : '')
        )
      )
    ),

    React.createElement('div', { style: { maxWidth: '900px', margin: '0 auto', padding: '24px 16px' } },

      // Quote
      dest.quote && React.createElement('div', {
        style: {
          background: 'rgba(245,158,11,0.1)',
          border: '2px solid rgba(245,158,11,0.3)',
          borderRadius: '16px',
          padding: '20px 24px',
          marginBottom: '16px',
          textAlign: 'center',
          color: '#fbbf24',
          fontStyle: 'italic',
          fontSize: '1.05rem',
          lineHeight: '1.7',
        }
      }, dest.quote),

      // Summary + More Info
      dest.summary && React.createElement('div', {
        style: {
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '16px',
          padding: '20px 24px',
          marginBottom: '24px',
          lineHeight: '1.8',
          fontSize: '0.97rem',
          color: '#e5e7eb',
        }
      },
        React.createElement('p', { style: { margin: '0 0 14px 0' } }, dest.summary),
        dest.moreInfoUrl && React.createElement('a', {
          href: dest.moreInfoUrl,
          target: '_blank',
          rel: 'noopener noreferrer',
          style: {
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
            color: 'white', borderRadius: '50px',
            padding: '7px 18px', fontWeight: '700', fontSize: '0.85rem',
            textDecoration: 'none',
          }
        }, '📖 מידע נוסף על היעד ←')
      ),

      // Tabs
      React.createElement('div', {
        style: {
          display: 'flex', gap: '8px', flexWrap: 'wrap',
          marginBottom: '24px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '12px',
        }
      },
        [{ key: 'facts', label: 'עובדות', icon: '📋' }, { key: 'map', label: 'מפה', icon: '🗺️' }, { key: 'vocab', label: 'שפה', icon: '💬' }]
          .concat(categoryTabs)
          .map(function(tab) {
            return React.createElement('button', {
              key: tab.key,
              onClick: function() { setActiveTab(tab.key); setOpenItem(null); },
              style: {
                background: activeTab === tab.key ? 'linear-gradient(135deg, #f59e0b, #ef4444)' : 'rgba(255,255,255,0.06)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                padding: '8px 16px',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '0.85rem',
                whiteSpace: 'nowrap',
              }
            }, tab.icon + ' ' + tab.label);
          })
      ),

      // Tab content
      activeTab === 'facts' && dest.facts && React.createElement('div', {
        style: {
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '16px',
          overflow: 'hidden',
        }
      },
        factsMap.map(function(f, i) {
          var val = dest.facts[f.key] || (f.key === 'bestSeason' ? dest.bestSeason : null);
          if (!val) return null;
          return React.createElement('div', {
            key: f.key,
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              padding: '14px 20px',
              borderBottom: i < factsMap.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
            }
          },
            React.createElement('span', { style: { color: '#9ca3af', fontWeight: '600' } }, f.label),
            React.createElement('span', { style: { color: 'white', fontWeight: '700', textAlign: 'left', maxWidth: '60%' } }, val)
          );
        })
      ),

      activeTab === 'map' && React.createElement('div', { style: { borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' } },
        React.createElement('iframe', {
          src: mapUrl,
          width: '100%',
          height: '400',
          style: { border: 'none', display: 'block' },
          title: 'מפה - ' + dest.name,
        })
      ),

      activeTab === 'vocab' && dest.vocabulary && React.createElement('div', {
        style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }
      },
        dest.vocabulary.map(function(v, i) {
          return React.createElement('div', {
            key: i,
            style: {
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              padding: '16px',
            }
          },
            React.createElement('div', { style: { fontSize: '1.5rem', marginBottom: '4px' } }, v.emoji || '💬'),
            React.createElement('div', { style: { fontSize: '1.1rem', fontWeight: '800', color: '#f59e0b', direction: 'ltr', textAlign: 'left' } }, v.script),
            React.createElement('div', { style: { color: '#d1d5db', fontSize: '0.85rem', margin: '4px 0' } }, v.pronunciation),
            React.createElement('div', { style: { color: '#9ca3af', fontSize: '0.8rem' } }, v.meaning)
          );
        })
      ),

      // Category tabs — accordion style
      categoryTabs.some(function(t) { return t.key === activeTab; }) && dest.categories && (dest.categories[activeTab] || dest.categories[activeTab === 'mustdo' ? 'mustDo' : activeTab]) && React.createElement('div', null,
        (dest.categories[activeTab] || dest.categories[activeTab === 'mustdo' ? 'mustDo' : activeTab]).items.map(function(item, i) {
          var isObj = typeof item === 'object' && item !== null;
          var name = isObj ? item.name : item;
          var isOpen = openItem === activeTab + '_' + i;
          var activeCatData = dest.categories[activeTab] || dest.categories[activeTab === 'mustdo' ? 'mustDo' : activeTab];
          var catIcon = activeCatData.icon || '•';
          var imgUrl = (isObj && item.image) ? item.image : (dest.heroImage || '');

          return React.createElement('div', {
            key: i,
            style: { marginBottom: '10px', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }
          },
            React.createElement('button', {
              onClick: function() { setOpenItem(isOpen ? null : activeTab + '_' + i); },
              style: {
                width: '100%', textAlign: 'right', padding: '14px 18px',
                background: isOpen ? 'rgba(245,158,11,0.1)' : 'transparent',
                border: 'none', color: 'white', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                fontSize: '0.92rem', fontWeight: isOpen ? '800' : '600',
                fontFamily: 'Heebo, sans-serif',
              }
            },
              React.createElement('span', { style: { display: 'flex', alignItems: 'center', gap: '10px', direction: 'rtl' } },
                React.createElement('span', { style: { fontSize: '1.1rem' } }, catIcon),
                React.createElement('span', null, name)
              ),
              React.createElement('span', { style: {
                color: isOpen ? '#f59e0b' : '#6b7280', fontSize: '0.9rem',
                display: 'inline-block', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s'
              } }, '▾')
            ),
            isOpen && React.createElement(AccordionItemContent, { item: item, destName: dest ? dest.name : '' })
          );
        })
      ),

      // ── Scenic Video Section ──
      dest && DEST_VIDEOS[dest.id] && React.createElement('div', {
        style: { marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' }
      },
        React.createElement('h3', {
          style: { fontSize: '1.1rem', fontWeight: '800', marginBottom: '12px', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '8px' }
        }, '🎬 סרטון נופים — ', dest.name),
        React.createElement('div', {
          style: { borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#000' }
        },
          React.createElement('iframe', {
            width: '100%',
            height: '240',
            src: 'https://www.youtube.com/embed/' + DEST_VIDEOS[dest.id] + '?rel=0&modestbranding=1',
            title: dest.name + ' scenic video',
            style: { border: 'none', display: 'block' },
            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            allowFullScreen: true,
          })
        ),
        React.createElement('a', {
          href: 'https://www.youtube.com/watch?v=' + DEST_VIDEOS[dest.id],
          target: '_blank',
          rel: 'noopener noreferrer',
          style: {
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            marginTop: '10px', color: '#9ca3af', fontSize: '0.8rem',
            fontWeight: '600', textDecoration: 'none', fontFamily: 'Heebo, sans-serif',
          }
        }, '▶ לצפות ביוטיוב')
      )
    )
  );
};

// ============================================================
// 3. PackingList
// ============================================================
var PackingList = function() {
  var [gender, setGender] = useState('male');
  var [checkedItems, setCheckedItems] = useState({});
  var [activeTab, setActiveTab] = useState('clothing');

  var data = gender === 'male' ? PACKING_MALE : PACKING_FEMALE;
  if (!data) data = { clothing: { title: 'לבוש', icon: '👕', items: [] }, hygiene: { title: 'היגיינה', icon: '🧴', items: [] }, documents: { title: 'מסמכים', icon: '📄', items: [] }, beforeTravel: { title: 'לפני הטיול', icon: '✅', items: [] } };

  var tabs = [
    { key: 'clothing', label: data.clothing ? data.clothing.title : 'לבוש', icon: data.clothing ? data.clothing.icon : '👕' },
    { key: 'hygiene', label: data.hygiene ? data.hygiene.title : 'היגיינה', icon: data.hygiene ? data.hygiene.icon : '🧴' },
    { key: 'documents', label: data.documents ? data.documents.title : 'מסמכים', icon: data.documents ? data.documents.icon : '📄' },
    { key: 'beforeTravel', label: data.beforeTravel ? data.beforeTravel.title : 'לפני הטיול', icon: data.beforeTravel ? data.beforeTravel.icon : '✅' },
  ];

  var allItems = Object.values(data).reduce(function(acc, cat) {
    return acc.concat((cat && cat.items) ? cat.items : []);
  }, []);
  var totalChecked = Object.keys(checkedItems).filter(function(k) { return checkedItems[k]; }).length;
  var progress = allItems.length > 0 ? Math.round((totalChecked / allItems.length) * 100) : 0;

  function toggleItem(key) {
    setCheckedItems(function(prev) {
      var next = Object.assign({}, prev);
      next[key] = !prev[key];
      return next;
    });
  }

  var currentCat = data[activeTab] || { items: [] };

  return React.createElement('div', { dir: 'rtl', style: { direction: 'rtl', minHeight: '100vh', background: '#0a0a0f', color: 'white', padding: '80px 16px 80px' } },
    React.createElement('div', { style: { maxWidth: '800px', margin: '0 auto' } },

      React.createElement('h1', { style: { fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '8px' } }, '🎒 רשימת ציוד'),
      React.createElement('p', { style: { color: '#9ca3af', textAlign: 'center', marginBottom: '32px' } }, 'מה לארוז לטיול הגדול?'),

      // Gender toggle
      React.createElement('div', { style: { display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '24px' } },
        React.createElement('button', {
          onClick: function() { setGender('male'); },
          style: {
            background: gender === 'male' ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 'rgba(255,255,255,0.06)',
            color: 'white', border: 'none', borderRadius: '50px',
            padding: '12px 28px', fontWeight: '800', cursor: 'pointer', fontSize: '1rem',
          }
        }, '👨 גבר'),
        React.createElement('button', {
          onClick: function() { setGender('female'); },
          style: {
            background: gender === 'female' ? 'linear-gradient(135deg, #ec4899, #f59e0b)' : 'rgba(255,255,255,0.06)',
            color: 'white', border: 'none', borderRadius: '50px',
            padding: '12px 28px', fontWeight: '800', cursor: 'pointer', fontSize: '1rem',
          }
        }, '👩 אישה')
      ),

      // Progress bar
      React.createElement('div', {
        style: {
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '24px',
        }
      },
        React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } },
          React.createElement('span', { style: { fontWeight: '700' } }, '✅ סימנתי ' + totalChecked + ' מתוך ' + allItems.length),
          React.createElement('span', { style: { color: '#f59e0b', fontWeight: '800' } }, progress + '%')
        ),
        React.createElement('div', { style: { background: 'rgba(255,255,255,0.08)', borderRadius: '50px', height: '10px', overflow: 'hidden' } },
          React.createElement('div', {
            style: {
              background: 'linear-gradient(90deg, #10b981, #f59e0b)',
              height: '100%',
              width: progress + '%',
              borderRadius: '50px',
              transition: 'width 0.4s ease',
            }
          })
        )
      ),

      // Category tabs
      React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' } },
        tabs.map(function(tab) {
          return React.createElement('button', {
            key: tab.key,
            onClick: function() { setActiveTab(tab.key); },
            style: {
              background: activeTab === tab.key ? 'linear-gradient(135deg, #f59e0b, #ef4444)' : 'rgba(255,255,255,0.06)',
              color: 'white', border: 'none', borderRadius: '50px',
              padding: '10px 20px', fontWeight: '700', cursor: 'pointer', fontSize: '0.9rem',
            }
          }, tab.icon + ' ' + tab.label);
        })
      ),

      // Items list
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '8px' } },
        (currentCat.items || []).map(function(item, i) {
          var key = activeTab + '_' + i;
          var checked = !!checkedItems[key];
          return React.createElement('div', {
            key: key,
            onClick: function() { toggleItem(key); },
            style: {
              background: checked ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.04)',
              border: '1px solid ' + (checked ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.08)'),
              borderRadius: '12px',
              padding: '16px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }
          },
            React.createElement('div', { style: { display: 'flex', alignItems: 'flex-start', gap: '12px' } },
              React.createElement('div', {
                style: {
                  width: '22px', height: '22px',
                  borderRadius: '6px',
                  border: '2px solid ' + (checked ? '#10b981' : 'rgba(255,255,255,0.3)'),
                  background: checked ? '#10b981' : 'transparent',
                  flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginTop: '1px',
                }
              }, checked ? React.createElement('span', { style: { color: 'white', fontSize: '14px', fontWeight: '900' } }, '✓') : null),
              React.createElement('div', { style: { flex: 1 } },
                React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' } },
                  React.createElement('span', {
                    style: {
                      fontWeight: '700',
                      color: checked ? '#9ca3af' : 'white',
                      textDecoration: checked ? 'line-through' : 'none',
                    }
                  }, item.name),
                  item.essential && React.createElement('span', {
                    style: {
                      background: 'rgba(239,68,68,0.2)',
                      border: '1px solid rgba(239,68,68,0.4)',
                      color: '#ef4444',
                      borderRadius: '50px',
                      padding: '2px 8px',
                      fontSize: '0.7rem',
                      fontWeight: '800',
                    }
                  }, 'חובה')
                ),
                item.tip && React.createElement('div', { style: { color: '#9ca3af', fontSize: '0.8rem', marginTop: '4px' } }, '💡 ' + item.tip)
              )
            )
          );
        })
      )
    )
  );
};

// ============================================================
// 4. AmericaVsAsia
// ============================================================
var AmericaVsAsia = function() {
  var [quizAnswer, setQuizAnswer] = useState(null);

  var comparisonRows = [
    { criteria: '💰 עלות יומית', asia: '₪150-300', southam: '₪200-400' },
    { criteria: '✈️ טיסה מישראל', asia: '9-13 שעות', southam: '16-22 שעות' },
    { criteria: '🛡️ בטיחות', asia: 'בטוח מאוד', southam: 'בינוני-גבוה' },
    { criteria: '🎉 מסיבות', asia: 'Full Moon Party!', southam: 'קרנבל + בר' },
    { criteria: '🏔️ נופים', asia: 'ג\'ונגל, חופים, הרים', southam: 'פטגוניה, אנדים, אמזונס' },
    { criteria: '🍜 אוכל', asia: 'מגוון מדהים, זול', southam: 'סטייקים, Ceviche' },
    { criteria: '🇮🇱 ישראלים', asia: 'המון!', southam: 'הרבה (פחות)' },
    { criteria: '🛂 ויזה', asia: 'רובם חינם', southam: 'רובם חינם' },
    { criteria: '🌤️ אקלים', asia: 'טרופי, לח', southam: 'מגוון מאוד' },
    { criteria: '🧠 העצמה אישית', asia: 'תרבות, מדיטציה', southam: 'הרפתקה, טבע' },
  ];

  return React.createElement('div', { dir: 'rtl', style: { direction: 'rtl', minHeight: '100vh', background: '#0a0a0f', color: 'white', padding: '80px 16px 80px' } },
    React.createElement('div', { style: { maxWidth: '900px', margin: '0 auto' } },

      React.createElement('h1', { style: { fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '8px' } }, '🌏 מזרח אסיה VS 🌎 דרום אמריקה'),
      React.createElement('p', { style: { color: '#9ca3af', textAlign: 'center', marginBottom: '40px' } }, 'לאיפה לנסוע בטיול הגדול?'),

      // Two columns
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' } },
        // Asia
        React.createElement('div', {
          style: {
            background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(239,68,68,0.1))',
            border: '1px solid rgba(245,158,11,0.3)',
            borderRadius: '20px',
            padding: '24px',
          }
        },
          React.createElement('h2', { style: { fontSize: '1.5rem', fontWeight: '900', marginBottom: '16px', textAlign: 'center' } }, '🌏 מזרח אסיה'),
          ['🌴 Full Moon Party', '🏯 תרבות עשירה', '💰 הכי זול', '🍜 אוכל מדהים', '🌊 חופים אגדיים', '🛕 רוחניות ומדיטציה', '😴 קל ללוגיסטיקה', '🇮🇱 הרבה ישראלים'].map(function(h, i) {
            return React.createElement('div', { key: i, style: { color: '#d1d5db', fontSize: '0.9rem', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' } }, h);
          })
        ),
        // South America
        React.createElement('div', {
          style: {
            background: 'linear-gradient(135deg, rgba(20,184,166,0.1), rgba(59,130,246,0.1))',
            border: '1px solid rgba(20,184,166,0.3)',
            borderRadius: '20px',
            padding: '24px',
          }
        },
          React.createElement('h2', { style: { fontSize: '1.5rem', fontWeight: '900', marginBottom: '16px', textAlign: 'center' } }, '🌎 דרום אמריקה'),
          ['🏔️ מאצ\'ו פיצ\'ו', '🦙 פטגוניה', '🎭 קרנבל ריו', '🥩 סטייקים ארגנטינאיים', '🌿 אמזונס', '🏄 גלשנות', '🌅 נופים דרמטיים', '🌍 הרפתקה אמיתית'].map(function(h, i) {
            return React.createElement('div', { key: i, style: { color: '#d1d5db', fontSize: '0.9rem', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' } }, h);
          })
        )
      ),

      // Comparison table
      React.createElement('div', {
        style: {
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '40px',
        }
      },
        React.createElement('div', {
          style: {
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
            background: 'rgba(255,255,255,0.07)',
            padding: '14px 16px',
            fontWeight: '800',
            fontSize: '0.9rem',
          }
        },
          React.createElement('span', null, 'קריטריון'),
          React.createElement('span', { style: { textAlign: 'center', color: '#f59e0b' } }, '🌏 אסיה'),
          React.createElement('span', { style: { textAlign: 'center', color: '#14b8a6' } }, '🌎 דרום אמריקה')
        ),
        comparisonRows.map(function(row, i) {
          return React.createElement('div', {
            key: i,
            style: {
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
              padding: '14px 16px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
              fontSize: '0.88rem',
            }
          },
            React.createElement('span', { style: { color: '#d1d5db', fontWeight: '700' } }, row.criteria),
            React.createElement('span', { style: { textAlign: 'center', color: '#fbbf24' } }, row.asia),
            React.createElement('span', { style: { textAlign: 'center', color: '#5eead4' } }, row.southam)
          );
        })
      ),

      // Quiz
      React.createElement('div', {
        style: {
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '20px',
          padding: '28px',
          textAlign: 'center',
          marginBottom: '40px',
        }
      },
        React.createElement('h3', { style: { fontSize: '1.4rem', fontWeight: '900', marginBottom: '8px' } }, '🤔 לאן אתה שייך?'),
        React.createElement('p', { style: { color: '#9ca3af', marginBottom: '20px' } }, 'בחר מה חשוב לך יותר:'),
        React.createElement('div', { style: { display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' } },
          React.createElement('button', {
            onClick: function() { setQuizAnswer('asia'); },
            style: {
              background: quizAnswer === 'asia' ? 'linear-gradient(135deg, #f59e0b, #ef4444)' : 'rgba(245,158,11,0.1)',
              border: '2px solid rgba(245,158,11,0.4)',
              color: 'white', borderRadius: '16px',
              padding: '16px 24px', cursor: 'pointer', fontWeight: '800', fontSize: '1rem',
            }
          }, '🌊 חוף, ספא, מסיבות, זול'),
          React.createElement('button', {
            onClick: function() { setQuizAnswer('southam'); },
            style: {
              background: quizAnswer === 'southam' ? 'linear-gradient(135deg, #14b8a6, #3b82f6)' : 'rgba(20,184,166,0.1)',
              border: '2px solid rgba(20,184,166,0.4)',
              color: 'white', borderRadius: '16px',
              padding: '16px 24px', cursor: 'pointer', fontWeight: '800', fontSize: '1rem',
            }
          }, '🏔️ הרפתקה, טבע, תרבות, אדרנלין')
        ),
        quizAnswer && React.createElement('div', {
          style: {
            marginTop: '20px',
            padding: '16px',
            borderRadius: '12px',
            background: quizAnswer === 'asia' ? 'rgba(245,158,11,0.15)' : 'rgba(20,184,166,0.15)',
            border: '1px solid ' + (quizAnswer === 'asia' ? 'rgba(245,158,11,0.4)' : 'rgba(20,184,166,0.4)'),
            color: quizAnswer === 'asia' ? '#fbbf24' : '#5eead4',
            fontWeight: '700',
            fontSize: '1.1rem',
          }
        }, quizAnswer === 'asia'
          ? '🌏 אתה ילד/ת אסיה! תאילנד, באלי, וייטנאם מחכים לך!'
          : '🌎 אתה ילד/ת אמריקה! פרו, קולומביה, ארגנטינה קוראים לך!'
        )
      ),

      // YouTube iframes
      React.createElement('h3', { style: { fontSize: '1.4rem', fontWeight: '900', marginBottom: '16px', textAlign: 'center' } }, '🎬 סרטוני השראה'),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' } },
        // East Asia video
        React.createElement('div', { style: { background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '14px', padding: '12px' } },
          React.createElement('p', { style: { color: '#f59e0b', fontWeight: '800', marginBottom: '8px', textAlign: 'center', fontSize: '0.9rem' } }, '🌏 למה לטוס למזרח?'),
          React.createElement('div', { style: { borderRadius: '10px', overflow: 'hidden', background: '#000' } },
            React.createElement('iframe', {
              width: '100%',
              height: '175',
              src: 'https://www.youtube.com/embed/Eel6feng7Dg?rel=0&modestbranding=1',
              title: 'East Asia Travel',
              style: { border: 'none', display: 'block' },
              allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
              allowFullScreen: true,
            })
          ),
          React.createElement('a', {
            href: 'https://www.youtube.com/watch?v=Eel6feng7Dg',
            target: '_blank', rel: 'noopener noreferrer',
            style: { display: 'block', textAlign: 'center', marginTop: '8px', color: '#9ca3af', fontSize: '0.75rem', textDecoration: 'none' }
          }, '▶ פתח ביוטיוב')
        ),
        // South America video
        React.createElement('div', { style: { background: 'rgba(20,184,166,0.07)', border: '1px solid rgba(20,184,166,0.2)', borderRadius: '14px', padding: '12px' } },
          React.createElement('p', { style: { color: '#14b8a6', fontWeight: '800', marginBottom: '8px', textAlign: 'center', fontSize: '0.9rem' } }, '🌎 למה לטוס לדרום אמריקה?'),
          React.createElement('div', { style: { borderRadius: '10px', overflow: 'hidden', background: '#000' } },
            React.createElement('iframe', {
              width: '100%',
              height: '175',
              src: 'https://www.youtube.com/embed/v1IXqRRgPY8?rel=0&modestbranding=1',
              title: 'South America Travel',
              style: { border: 'none', display: 'block' },
              allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
              allowFullScreen: true,
            })
          ),
          React.createElement('a', {
            href: 'https://www.youtube.com/watch?v=v1IXqRRgPY8',
            target: '_blank', rel: 'noopener noreferrer',
            style: { display: 'block', textAlign: 'center', marginTop: '8px', color: '#9ca3af', fontSize: '0.75rem', textDecoration: 'none' }
          }, '▶ פתח ביוטיוב')
        ),
        // User's specific video
        React.createElement('div', { style: { background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '14px', padding: '12px' } },
          React.createElement('p', { style: { color: '#a78bfa', fontWeight: '800', marginBottom: '8px', textAlign: 'center', fontSize: '0.9rem' } }, '✈️ מזרח vs דרום אמריקה'),
          React.createElement('div', { style: { borderRadius: '10px', overflow: 'hidden', background: '#000' } },
            React.createElement('iframe', {
              width: '100%',
              height: '175',
              src: 'https://www.youtube.com/embed/s_lDV45pRN0?rel=0&modestbranding=1',
              title: 'East vs South America',
              style: { border: 'none', display: 'block' },
              allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
              allowFullScreen: true,
            })
          ),
          React.createElement('a', {
            href: 'https://www.youtube.com/watch?v=s_lDV45pRN0',
            target: '_blank', rel: 'noopener noreferrer',
            style: { display: 'block', textAlign: 'center', marginTop: '8px', color: '#9ca3af', fontSize: '0.75rem', textDecoration: 'none' }
          }, '▶ פתח ביוטיוב')
        )
      )
    )
  );
};

// ============================================================
// 5. FacebookGroups
// ============================================================
var FacebookGroups = function() {
  var [activeRegion, setActiveRegion] = useState('all');
  var groups = FACEBOOK_GROUPS || [];

  var allRegions = [{ id: 'all', label: 'הכל' }].concat(
    groups.map(function(g) { return { id: g.region, label: g.emoji + ' ' + g.region }; })
  );

  var filtered = activeRegion === 'all' ? groups : groups.filter(function(g) { return g.region === activeRegion; });

  var badgeColors = [
    'linear-gradient(135deg,#f59e0b,#ef4444)',
    'linear-gradient(135deg,#8b5cf6,#3b82f6)',
    'linear-gradient(135deg,#10b981,#14b8a6)',
    'linear-gradient(135deg,#f97316,#ef4444)',
    'linear-gradient(135deg,#ec4899,#8b5cf6)',
  ];

  return React.createElement('div', { dir: 'rtl', style: { direction: 'rtl', minHeight: '100vh', background: '#0a0a0f', color: 'white', padding: '80px 16px 80px' } },
    React.createElement('div', { style: { maxWidth: '900px', margin: '0 auto' } },

      React.createElement('h1', { style: { fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '8px' } }, '👥 קבוצות פייסבוק'),
      React.createElement('p', { style: { color: '#9ca3af', textAlign: 'center', marginBottom: '32px' } }, 'קהילת המטיילים הישראלים בעולם'),

      // Region filter
      React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px', justifyContent: 'center' } },
        allRegions.map(function(r, i) {
          return React.createElement('button', {
            key: r.id,
            onClick: function() { setActiveRegion(r.id); },
            style: {
              background: activeRegion === r.id ? 'linear-gradient(135deg, #f59e0b, #ef4444)' : 'rgba(255,255,255,0.06)',
              color: 'white', border: 'none', borderRadius: '50px',
              padding: '8px 18px', cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem',
              whiteSpace: 'nowrap',
            }
          }, r.label);
        })
      ),

      filtered.map(function(section, si) {
        return React.createElement('div', { key: section.region, style: { marginBottom: '40px' } },
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' } },
            React.createElement('span', {
              style: {
                background: badgeColors[si % badgeColors.length],
                borderRadius: '50px',
                padding: '6px 16px',
                fontWeight: '800',
                fontSize: '0.9rem',
              }
            }, section.emoji + ' ' + section.region),
            React.createElement('div', { style: { height: '1px', flex: 1, background: 'rgba(255,255,255,0.1)' } })
          ),
          React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px' } },
            (section.groups || []).map(function(group, gi) {
              return React.createElement('div', {
                key: gi,
                style: {
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '20px',
                }
              },
                React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' } },
                  React.createElement('div', { style: { flex: 1 } },
                    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' } },
                      React.createElement('span', { style: { fontWeight: '800', fontSize: '1.05rem' } }, group.name),
                      group.hot && React.createElement('span', {
                        style: {
                          background: 'linear-gradient(135deg,#ef4444,#f97316)',
                          color: 'white',
                          borderRadius: '50px',
                          padding: '2px 8px',
                          fontSize: '0.7rem',
                          fontWeight: '900',
                        }
                      }, '🔥 HOT')
                    ),
                    React.createElement('div', { style: { color: '#9ca3af', fontSize: '0.85rem', marginBottom: '6px' } }, '👥 ' + group.members + ' חברים'),
                    React.createElement('div', { style: { color: '#d1d5db', fontSize: '0.88rem', lineHeight: '1.5' } }, group.description)
                  ),
                  React.createElement('a', {
                    href: group.url,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    style: {
                      background: 'linear-gradient(135deg, #1877f2, #0d5ec7)',
                      color: 'white',
                      borderRadius: '10px',
                      padding: '10px 18px',
                      fontWeight: '800',
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      display: 'inline-block',
                    }
                  }, '👥 הצטרף לקבוצה')
                )
              );
            })
          )
        );
      })
    )
  );
};

// ============================================================
// 6. DestinationComparison
// ============================================================
var DestinationComparison = function() {
  var allDests = DESTINATION_LIST || (DESTINATIONS ? Object.values(DESTINATIONS) : []);
  var [destA, setDestA] = useState((allDests[0] && allDests[0].id) || '');
  var [destB, setDestB] = useState((allDests[1] && allDests[1].id) || '');
  var [activeTab, setActiveTab] = useState('overview');

  var dA = allDests.find(function(d) { return d.id === destA; });
  var dB = allDests.find(function(d) { return d.id === destB; });
  var bA = (typeof BUDGET_DATA !== 'undefined' && destA) ? BUDGET_DATA[destA] : null;
  var bB = (typeof BUDGET_DATA !== 'undefined' && destB) ? BUDGET_DATA[destB] : null;

  function normVal(v) {
    if (v && typeof v === 'object') return v.mid || v.low || 0;
    return v || 0;
  }

  var catTabs = [
    { key: 'overview', label: 'סקירה', icon: '📋' },
    { key: 'budget', label: 'תקציב', icon: '💰' },
    { key: 'scenery', label: 'נופים', icon: '🏔️' },
    { key: 'beaches', label: 'חופים', icon: '🏖️' },
    { key: 'food', label: 'אוכל', icon: '🍜' },
    { key: 'mustdo', label: 'חובה', icon: '⭐' },
  ];

  var overviewRows = [
    {
      label: 'עלות יומית',
      valA: function(d) { return d.avgBudgetPerDay ? d.avgBudgetPerDay : null; },
      fmt: function(v) { return v ? '₪' + v : '-'; },
      winner: 'lower',
    },
    {
      label: 'דירוג',
      valA: function(d) { return d.rating || null; },
      fmt: function(v) { return v ? '⭐ ' + v : '-'; },
      winner: 'higher',
    },
    {
      label: 'עונה מומלצת',
      valA: function(d) { return d.bestSeason || '-'; },
      fmt: function(v) { return v; },
      winner: null,
    },
    {
      label: 'ויזה',
      valA: function(d) { return (d.facts && d.facts.visa) || '-'; },
      fmt: function(v) { return v; },
      winner: null,
    },
    {
      label: 'טיסה',
      valA: function(d) { return (d.facts && d.facts.flightTime) || '-'; },
      fmt: function(v) { return v; },
      winner: null,
    },
    {
      label: 'שפה',
      valA: function(d) { return (d.facts && d.facts.language) || '-'; },
      fmt: function(v) { return v; },
      winner: null,
    },
    {
      label: 'בטיחות',
      valA: function(d) { return (d.facts && d.facts.safety) || '-'; },
      fmt: function(v) { return v; },
      winner: null,
    },
  ];

  function getItemName(item) {
    if (typeof item === 'object' && item !== null) return item.name || '';
    return item || '';
  }

  function getItemDesc(item) {
    if (typeof item === 'object' && item !== null) return item.desc || item.tip || '';
    return '';
  }

  var selectStyle = {
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.15)',
    color: 'white',
    borderRadius: '12px',
    padding: '12px 16px',
    fontSize: '1rem',
    fontWeight: '700',
    outline: 'none',
    width: '100%',
    fontFamily: 'Heebo, sans-serif',
  };

  // Budget bars comparison
  function BudgetBar(props) {
    var label = props.label, valA = props.valA, valB = props.valB, colA = props.colA, colB = props.colB;
    if (!valA && !valB) return null;
    var max = Math.max(valA || 0, valB || 0, 1);
    var pA = Math.round(((valA || 0) / max) * 100);
    var pB = Math.round(((valB || 0) / max) * 100);
    var winnerA = (valA || 0) <= (valB || 0);
    return React.createElement('div', { style: { marginBottom: '18px' } },
      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.82rem', fontWeight: '700', color: '#9ca3af' } },
        React.createElement('span', null, label),
        React.createElement('span', { style: { color: '#6b7280', fontSize: '0.75rem' } }, 'ש"ח ל-30 יום')
      ),
      React.createElement('div', { style: { marginBottom: '4px' } },
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' } },
          React.createElement('span', { style: { fontSize: '0.75rem', color: colA, fontWeight: '700', minWidth: '60px', textAlign: 'right' } }, dA ? dA.emoji : ''),
          React.createElement('div', { style: { flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '6px', height: '10px', overflow: 'hidden' } },
            React.createElement('div', { style: { width: pA + '%', height: '100%', background: colA, borderRadius: '6px', transition: 'width 0.6s ease' } })
          ),
          React.createElement('span', { style: { fontSize: '0.8rem', color: winnerA ? '#10b981' : '#d1d5db', fontWeight: '800', minWidth: '50px' } },
            (valA ? '₪' + valA.toLocaleString() : '-') + (winnerA ? ' ✓' : '')
          )
        ),
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
          React.createElement('span', { style: { fontSize: '0.75rem', color: colB, fontWeight: '700', minWidth: '60px', textAlign: 'right' } }, dB ? dB.emoji : ''),
          React.createElement('div', { style: { flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '6px', height: '10px', overflow: 'hidden' } },
            React.createElement('div', { style: { width: pB + '%', height: '100%', background: colB, borderRadius: '6px', transition: 'width 0.6s ease' } })
          ),
          React.createElement('span', { style: { fontSize: '0.8rem', color: !winnerA ? '#10b981' : '#d1d5db', fontWeight: '800', minWidth: '50px' } },
            (valB ? '₪' + valB.toLocaleString() : '-') + (!winnerA ? ' ✓' : '')
          )
        )
      )
    );
  }

  var colA = '#f59e0b', colB = '#14b8a6';

  return React.createElement('div', { dir: 'rtl', style: { direction: 'rtl', minHeight: '100vh', background: '#0a0a0f', color: 'white', padding: '80px 16px 80px' } },
    React.createElement('div', { style: { maxWidth: '900px', margin: '0 auto' } },

      React.createElement('h1', { style: { fontSize: '2.2rem', fontWeight: '900', textAlign: 'center', marginBottom: '8px' } }, '⚖️ השוואת יעדים'),
      React.createElement('p', { style: { color: '#9ca3af', textAlign: 'center', marginBottom: '32px' } }, 'בחר שני יעדים והשווה'),

      // Dropdowns
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '12px', alignItems: 'center', marginBottom: '24px' } },
        React.createElement('select', { value: destA, onChange: function(e) { setDestA(e.target.value); setActiveTab('overview'); }, style: selectStyle },
          allDests.map(function(d) { return React.createElement('option', { key: d.id, value: d.id, style: { background: '#1a1a2e' } }, d.emoji + ' ' + d.name); })
        ),
        React.createElement('div', {
          style: { background: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: 'white', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '1.1rem', flexShrink: 0 }
        }, 'VS'),
        React.createElement('select', { value: destB, onChange: function(e) { setDestB(e.target.value); setActiveTab('overview'); }, style: selectStyle },
          allDests.map(function(d) { return React.createElement('option', { key: d.id, value: d.id, style: { background: '#1a1a2e' } }, d.emoji + ' ' + d.name); })
        )
      ),

      // Hero images side by side
      dA && dB && React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' } },
        [dA, dB].map(function(d, i) {
          return React.createElement('div', { key: d.id, style: { borderRadius: '16px', overflow: 'hidden', position: 'relative', height: '180px' } },
            React.createElement('img', { src: d.heroImage, alt: d.name, style: { width: '100%', height: '100%', objectFit: 'contain', background: '#111' } }),
            React.createElement('div', {
              style: { position: 'absolute', inset: 0, background: 'linear-gradient(transparent 40%, rgba(0,0,0,0.85))', display: 'flex', alignItems: 'flex-end', padding: '16px' }
            },
              React.createElement('div', null,
                React.createElement('div', { style: { fontWeight: '900', fontSize: '1.1rem' } }, d.emoji + ' ' + d.name),
                d.rating && React.createElement('div', { style: { color: i === 0 ? colA : colB, fontSize: '0.85rem', fontWeight: '700' } }, '⭐ ' + d.rating),
                d.avgBudgetPerDay && React.createElement('div', { style: { color: '#d1d5db', fontSize: '0.75rem' } }, '₪' + d.avgBudgetPerDay + '/יום')
              )
            )
          );
        })
      ),

      // Category tabs
      React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' } },
        catTabs.map(function(tab) {
          return React.createElement('button', {
            key: tab.key,
            onClick: function() { setActiveTab(tab.key); },
            style: {
              background: activeTab === tab.key ? 'linear-gradient(135deg, #f59e0b, #ef4444)' : 'rgba(255,255,255,0.06)',
              color: 'white', border: 'none', borderRadius: '50px',
              padding: '8px 16px', cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem',
              fontFamily: 'Heebo, sans-serif',
            }
          }, tab.icon + ' ' + tab.label);
        })
      ),

      // Overview tab
      dA && dB && activeTab === 'overview' && React.createElement('div', null,
        React.createElement('div', {
          style: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', overflow: 'hidden', marginBottom: '16px' }
        },
          React.createElement('div', {
            style: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'rgba(255,255,255,0.07)', padding: '12px 16px', fontWeight: '800', fontSize: '0.85rem' }
          },
            React.createElement('span', null, 'קריטריון'),
            React.createElement('span', { style: { textAlign: 'center', color: colA } }, dA.emoji + ' ' + dA.name),
            React.createElement('span', { style: { textAlign: 'center', color: colB } }, dB.emoji + ' ' + dB.name)
          ),
          overviewRows.map(function(row, i) {
            var vA = row.valA(dA), vB = row.valA(dB);
            var winA = false, winB = false;
            if (row.winner === 'lower' && vA && vB) { winA = vA <= vB; winB = !winA; }
            if (row.winner === 'higher' && vA && vB) { winA = parseFloat(vA) >= parseFloat(vB); winB = !winA; }
            return React.createElement('div', {
              key: i,
              style: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.06)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)', fontSize: '0.85rem' }
            },
              React.createElement('span', { style: { color: '#9ca3af', fontWeight: '600' } }, row.label),
              React.createElement('span', { style: { textAlign: 'center', color: winA ? '#10b981' : '#fbbf24', fontWeight: '700' } },
                row.fmt(vA) + (winA ? ' 🏆' : '')
              ),
              React.createElement('span', { style: { textAlign: 'center', color: winB ? '#10b981' : '#5eead4', fontWeight: '700' } },
                row.fmt(vB) + (winB ? ' 🏆' : '')
              )
            );
          })
        ),

        // Quick recommendation card
        dA && dB && dA.avgBudgetPerDay && dB.avgBudgetPerDay && React.createElement('div', {
          style: { background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(139,92,246,0.08))', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '16px', padding: '20px', textAlign: 'center' }
        },
          React.createElement('div', { style: { fontSize: '1.5rem', marginBottom: '8px' } }, '💡'),
          React.createElement('div', { style: { fontWeight: '800', fontSize: '1rem', marginBottom: '8px' } },
            dA.avgBudgetPerDay < dB.avgBudgetPerDay
              ? (dA.emoji + ' ' + dA.name + ' זול יותר ב-₪' + (dB.avgBudgetPerDay - dA.avgBudgetPerDay) + '/יום')
              : (dB.emoji + ' ' + dB.name + ' זול יותר ב-₪' + (dA.avgBudgetPerDay - dB.avgBudgetPerDay) + '/יום')
          ),
          React.createElement('div', { style: { color: '#9ca3af', fontSize: '0.82rem' } },
            'הפרש של ₪' + Math.abs(dA.avgBudgetPerDay - dB.avgBudgetPerDay) + '/יום = ₪' + (Math.abs(dA.avgBudgetPerDay - dB.avgBudgetPerDay) * 90) + ' לטיול של 3 חודשים'
          )
        )
      ),

      // Budget tab
      dA && dB && activeTab === 'budget' && React.createElement('div', {
        style: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px' }
      },
        React.createElement('h3', { style: { fontWeight: '800', marginBottom: '24px', fontSize: '1.1rem' } }, '💰 השוואת עלויות ל-30 יום'),
        [
          { label: 'לינה', fieldA: bA ? normVal(bA.accommodation) * 30 : 0, fieldB: bB ? normVal(bB.accommodation) * 30 : 0 },
          { label: 'אוכל', fieldA: bA ? normVal(bA.food) * 30 : 0, fieldB: bB ? normVal(bB.food) * 30 : 0 },
          { label: 'תחבורה', fieldA: bA ? normVal(bA.transport) * 30 : 0, fieldB: bB ? normVal(bB.transport) * 30 : 0 },
          { label: 'אטרקציות', fieldA: bA ? normVal(bA.activities) * 30 : 0, fieldB: bB ? normVal(bB.activities) * 30 : 0 },
          { label: 'טיסה (הלוך-חזור)', fieldA: bA ? normVal(bA.flights) : 0, fieldB: bB ? normVal(bB.flights) : 0 },
          { label: 'ויזה', fieldA: bA ? normVal(bA.visa) : 0, fieldB: bB ? normVal(bB.visa) : 0 },
        ].map(function(row, i) {
          return React.createElement(BudgetBar, { key: i, label: row.label, valA: row.fieldA, valB: row.fieldB, colA: colA, colB: colB });
        }),
        React.createElement('div', { style: { borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px', marginTop: '8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' } },
          [dA, dB].map(function(d, di) {
            var b = di === 0 ? bA : bB;
            var total = b ? ((normVal(b.accommodation) + normVal(b.food) + normVal(b.transport) + normVal(b.activities)) * 30 + normVal(b.flights) + normVal(b.visa)) : 0;
            return React.createElement('div', {
              key: d.id,
              style: { background: di === 0 ? 'rgba(245,158,11,0.1)' : 'rgba(20,184,166,0.1)', borderRadius: '12px', padding: '16px', textAlign: 'center' }
            },
              React.createElement('div', { style: { fontSize: '0.8rem', color: '#9ca3af', marginBottom: '4px' } }, d.emoji + ' ' + d.name),
              React.createElement('div', { style: { fontWeight: '900', fontSize: '1.4rem', color: di === 0 ? colA : colB } }, total ? '₪' + total.toLocaleString() : '-'),
              React.createElement('div', { style: { fontSize: '0.75rem', color: '#6b7280', marginTop: '4px' } }, 'סה"כ ל-30 יום כולל טיסה')
            );
          })
        )
      ),

      // Category tabs (scenery / beaches / food / mustdo)
      dA && dB && activeTab !== 'overview' && activeTab !== 'budget' && React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' } },
        [dA, dB].map(function(d, di) {
          var catData = d.categories && d.categories[activeTab];
          var items = catData ? (catData.items || []).slice(0, 6) : [];
          return React.createElement('div', {
            key: d.id,
            style: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px' }
          },
            React.createElement('h3', { style: { fontWeight: '800', marginBottom: '14px', color: di === 0 ? colA : colB, fontSize: '1rem' } },
              d.emoji + ' ' + d.name
            ),
            items.length > 0 ? items.map(function(item, i) {
              var name = getItemName(item);
              var desc = getItemDesc(item);
              return React.createElement('div', {
                key: i,
                style: { padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', lineHeight: '1.5' }
              },
                React.createElement('div', { style: { color: '#e5e7eb', fontSize: '0.85rem', fontWeight: '700' } }, '• ' + name),
                desc && React.createElement('div', { style: { color: '#6b7280', fontSize: '0.78rem', marginTop: '2px', paddingRight: '10px' } }, desc)
              );
            }) : React.createElement('div', { style: { color: '#9ca3af', fontSize: '0.85rem' } }, 'אין נתונים')
          );
        })
      )
    )
  );
};

// ============================================================
// 7. InsuranceGuide
// ============================================================
var InsuranceGuide = function() {
  var [activeTab, setActiveTab] = useState('companies');
  var companies = INSURANCE_COMPANIES || [];
  var coverage = COVERAGE_TYPES || [];
  var cards = CREDIT_CARDS || [];

  var tabs = [
    { key: 'companies', label: 'חברות ביטוח', icon: '🏢' },
    { key: 'coverage', label: 'סוגי כיסוי', icon: '🛡️' },
    { key: 'cards', label: 'כרטיסי אשראי', icon: '💳' },
    { key: 'tips', label: 'טיפים', icon: '💡' },
  ];

  var importanceColor = { 'חובה': '#ef4444', 'מאוד מומלץ': '#f97316', 'חשוב': '#f59e0b', 'מומלץ': '#10b981', 'לפי יעד': '#3b82f6' };

  var insuranceTips = [
    { icon: '📋', tip: 'קנה ביטוח לפני שיוצאים — לא אחרי שמגיעים' },
    { icon: '💰', tip: 'ביטוח עולה ₪7-10 ליום — שווה כל שקל' },
    { icon: '🌊', tip: 'ספורט אתגרי צריך תוספת מיוחדת — אל תשכח!' },
    { icon: '📱', tip: 'שמור את מספר חירום הביטוח בטלפון תמיד' },
    { icon: '🧾', tip: 'שמור קבלות על כל הוצאה — לצורך תביעה' },
    { icon: '🔄', tip: 'ניתן להאריך ביטוח מרחוק אצל רוב החברות' },
  ];

  return React.createElement('div', { dir: 'rtl', style: { direction: 'rtl', minHeight: '100vh', background: '#0a0a0f', color: 'white', padding: '80px 16px 80px' } },
    React.createElement('div', { style: { maxWidth: '900px', margin: '0 auto' } },

      React.createElement('h1', { style: { fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '8px' } }, '🛡️ מדריך ביטוח נסיעות'),
      React.createElement('p', { style: { color: '#9ca3af', textAlign: 'center', marginBottom: '24px' } }, 'כל מה שחייבים לדעת'),

      // Why insurance section
      React.createElement('div', {
        style: {
          background: 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(245,158,11,0.1))',
          border: '1px solid rgba(239,68,68,0.3)',
          borderRadius: '20px',
          padding: '24px',
          marginBottom: '32px',
        }
      },
        React.createElement('h2', { style: { fontSize: '1.3rem', fontWeight: '900', marginBottom: '16px', color: '#ef4444' } }, '⚠️ למה ביטוח זה חובה?'),
        React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' } },
          [
            { icon: '🏥', title: 'אשפוז בארה"ב', cost: '$50,000-$200,000' },
            { icon: '🚁', title: 'פינוי רפואי מנפאל', cost: '$15,000-$50,000' },
            { icon: '✈️', title: 'ביטול טיסה', cost: '₪3,000-₪15,000' },
          ].map(function(item, i) {
            return React.createElement('div', {
              key: i,
              style: { background: 'rgba(239,68,68,0.1)', borderRadius: '12px', padding: '16px', textAlign: 'center' }
            },
              React.createElement('div', { style: { fontSize: '2rem', marginBottom: '8px' } }, item.icon),
              React.createElement('div', { style: { fontWeight: '700', marginBottom: '4px' } }, item.title),
              React.createElement('div', { style: { color: '#ef4444', fontWeight: '900', fontSize: '1.1rem' } }, item.cost),
              React.createElement('div', { style: { color: '#9ca3af', fontSize: '0.75rem', marginTop: '4px' } }, 'ללא ביטוח')
            );
          })
        )
      ),

      // Tabs
      React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' } },
        tabs.map(function(tab) {
          return React.createElement('button', {
            key: tab.key,
            onClick: function() { setActiveTab(tab.key); },
            style: {
              background: activeTab === tab.key ? 'linear-gradient(135deg, #f59e0b, #ef4444)' : 'rgba(255,255,255,0.06)',
              color: 'white', border: 'none', borderRadius: '50px',
              padding: '10px 20px', cursor: 'pointer', fontWeight: '700', fontSize: '0.9rem',
            }
          }, tab.icon + ' ' + tab.label);
        })
      ),

      // Companies
      activeTab === 'companies' && React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
        companies.map(function(company, i) {
          return React.createElement('div', {
            key: i,
            style: {
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid ' + (company.recommended ? 'rgba(245,158,11,0.4)' : 'rgba(255,255,255,0.08)'),
              borderRadius: '16px',
              padding: '20px',
            }
          },
            React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' } },
              React.createElement('div', null,
                React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' } },
                  React.createElement('span', { style: { fontSize: '1.5rem' } }, company.logo),
                  React.createElement('span', { style: { fontWeight: '800', fontSize: '1.1rem' } }, company.name),
                  company.recommended && React.createElement('span', {
                    style: { background: 'rgba(245,158,11,0.2)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.4)', borderRadius: '50px', padding: '2px 10px', fontSize: '0.75rem', fontWeight: '800' }
                  }, '⭐ מומלץ'),
                  company.hot && React.createElement('span', {
                    style: { background: 'linear-gradient(135deg,#ef4444,#f97316)', color: 'white', borderRadius: '50px', padding: '2px 10px', fontSize: '0.75rem', fontWeight: '900' }
                  }, '🔥 HOT')
                ),
                React.createElement('div', { style: { color: '#f59e0b', fontWeight: '700' } }, company.price)
              ),
              React.createElement('a', {
                href: company.url,
                target: '_blank',
                rel: 'noopener noreferrer',
                style: { background: 'rgba(255,255,255,0.07)', color: 'white', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '8px 16px', fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none' }
              }, 'לאתר →')
            ),
            company.bestFor && React.createElement('div', { style: { color: '#14b8a6', fontSize: '0.85rem', marginBottom: '12px', fontWeight: '600' } }, '✅ הכי טוב עבור: ' + company.bestFor),
            React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.82rem' } },
              React.createElement('div', null,
                React.createElement('div', { style: { color: '#10b981', fontWeight: '700', marginBottom: '4px' } }, '✓ יתרונות'),
                (company.pros || []).map(function(p, pi) {
                  return React.createElement('div', { key: pi, style: { color: '#d1d5db', padding: '2px 0' } }, '• ' + p);
                })
              ),
              React.createElement('div', null,
                React.createElement('div', { style: { color: '#ef4444', fontWeight: '700', marginBottom: '4px' } }, '✗ חסרונות'),
                (company.cons || []).map(function(c, ci) {
                  return React.createElement('div', { key: ci, style: { color: '#d1d5db', padding: '2px 0' } }, '• ' + c);
                })
              )
            )
          );
        })
      ),

      // Coverage types
      activeTab === 'coverage' && React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' } },
        coverage.map(function(cov, i) {
          var color = importanceColor[cov.importance] || '#9ca3af';
          return React.createElement('div', {
            key: i,
            style: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }
          },
            React.createElement('div', { style: { fontSize: '2rem', marginBottom: '8px' } }, cov.icon),
            React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' } },
              React.createElement('span', { style: { fontWeight: '800' } }, cov.name),
              React.createElement('span', { style: { background: color + '22', color: color, border: '1px solid ' + color + '44', borderRadius: '50px', padding: '2px 8px', fontSize: '0.72rem', fontWeight: '800' } }, cov.importance)
            ),
            React.createElement('div', { style: { color: '#d1d5db', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '8px' } }, cov.description),
            cov.tip && React.createElement('div', { style: { color: '#9ca3af', fontSize: '0.78rem', fontStyle: 'italic' } }, '💡 ' + cov.tip)
          );
        })
      ),

      // Credit cards
      activeTab === 'cards' && React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px' } },
        cards.map(function(card, i) {
          return React.createElement('div', {
            key: i,
            style: {
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid ' + (card.recommended ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.08)'),
              borderRadius: '16px',
              padding: '20px',
            }
          },
            React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' } },
              React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                React.createElement('span', { style: { fontSize: '1.5rem' } }, card.icon),
                React.createElement('span', { style: { fontWeight: '800' } }, card.name),
                card.recommended && React.createElement('span', { style: { background: 'rgba(16,185,129,0.2)', color: '#10b981', border: '1px solid rgba(16,185,129,0.4)', borderRadius: '50px', padding: '2px 8px', fontSize: '0.72rem', fontWeight: '800' } }, '✓ מומלץ')
              ),
              React.createElement('span', { style: { color: '#f59e0b', fontWeight: '800' } }, 'עמלה: ' + card.forexFee)
            ),
            React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' } },
              (card.benefits || []).map(function(b, bi) {
                return React.createElement('span', { key: bi, style: { background: 'rgba(255,255,255,0.06)', borderRadius: '50px', padding: '4px 10px', fontSize: '0.78rem', color: '#d1d5db' } }, b);
              })
            ),
            card.tip && React.createElement('div', { style: { color: '#9ca3af', fontSize: '0.82rem' } }, '💡 ' + card.tip)
          );
        })
      ),

      // Tips
      activeTab === 'tips' && React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' } },
        insuranceTips.map(function(tip, i) {
          return React.createElement('div', {
            key: i,
            style: {
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRight: '4px solid #f59e0b',
              borderRadius: '16px',
              padding: '20px',
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-start',
            }
          },
            React.createElement('span', { style: { fontSize: '1.5rem', flexShrink: 0 } }, tip.icon),
            React.createElement('span', { style: { color: '#d1d5db', lineHeight: '1.6' } }, tip.tip)
          );
        })
      )
    )
  );
};

// ============================================================
// 8. BudgetCalculator
// ============================================================
var BudgetCalculator = function() {
  var budgetData = BUDGET_DATA || {};
  var destKeys = Object.keys(budgetData);

  var [dest, setDest] = useState(destKeys[0] || 'thailand');
  var [duration, setDuration] = useState(90);
  var [style, setStyle] = useState('mid');

  var travelStyles = [
    { id: 'low', label: '🎒 תקציבן', desc: 'הוסטלים, אוכל רחוב, Night Bus' },
    { id: 'mid', label: '🏨 ממוצע', desc: 'חדרים פרטיים, מסעדות, נוחות סבירה' },
    { id: 'high', label: '✨ נוח', desc: 'מלונות 3-4*, רסטורנטים, טיסות פנימיות' },
  ];

  var savingTips = [
    { icon: '✈️', tip: 'קנה טיסות 3-4 חודשים מראש + Skyscanner Alert' },
    { icon: '🌙', tip: 'Night Bus במקום לינה = חוסך לילה' },
    { icon: '🍜', tip: 'אוכל שוקים ורחוב = ₪50-80/יום במקום ₪150' },
    { icon: '💳', tip: 'One Zero Bank - אפס עמלת המרה' },
    { icon: '👥', tip: 'AirBnB עם קבוצה = פחות ₪50-100/לילה לאדם' },
    { icon: '🎒', tip: 'דורמיטורי הוסטל = ₪60-100 במקום ₪150+ לפרטי' },
  ];

  var d = budgetData[dest] || {};
  var months = duration / 30;
  var accommodation = ((d.accommodation && d.accommodation[style]) || 0) * duration;
  var food = ((d.food && d.food[style]) || 0) * duration;
  var transport = ((d.transport && d.transport[style]) || 0) * duration;
  var activities = ((d.activities && d.activities[style]) || 0) * duration;
  var insurance = (d.insurancePer30 || 0) * months;
  var total = accommodation + food + transport + activities + insurance + (d.flights || 0) + (d.visa || 0);

  var breakdown = [
    { label: 'טיסות הלוך-חזור', amount: d.flights || 0, icon: '✈️', color: '#3b82f6' },
    { label: 'ביטוח נסיעות', amount: Math.round(insurance), icon: '🛡️', color: '#ef4444' },
    { label: 'ויזה', amount: d.visa || 0, icon: '🛂', color: '#8b5cf6' },
    { label: 'לינה (' + duration + ' ימים/לילות)', amount: accommodation, icon: '🏨', color: '#f59e0b' },
    { label: 'אוכל (' + duration + ' ימים)', amount: food, icon: '🍜', color: '#10b981' },
    { label: 'תחבורה', amount: transport, icon: '🚌', color: '#14b8a6' },
    { label: 'פעילויות ובידור', amount: activities, icon: '🎯', color: '#f97316' },
  ];

  var perDay = total > 0 ? Math.round(total / duration) : 0;
  var budgetLevel = perDay < 450 ? { label: 'תקציב נמוך', color: '#10b981', emoji: '💚' }
    : perDay < 850 ? { label: 'תקציב ממוצע', color: '#f59e0b', emoji: '💛' }
    : { label: 'תקציב גבוה', color: '#ef4444', emoji: '❤️' };

  return React.createElement('div', { dir: 'rtl', style: { direction: 'rtl', minHeight: '100vh', background: '#0a0a0f', color: 'white', padding: '80px 16px 80px' } },
    React.createElement('div', { style: { maxWidth: '800px', margin: '0 auto' } },

      React.createElement('h1', { style: { fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '8px' } },
        React.createElement('span', { style: { background: 'linear-gradient(135deg, #10b981, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } }, '💰 מחשבון תקציב')
      ),
      React.createElement('p', { style: { color: '#9ca3af', textAlign: 'center', marginBottom: '32px' } }, 'כמה עולה הטיול שלך באמת?'),

      // Inputs card
      React.createElement('div', { style: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '24px', marginBottom: '24px' } },

        // Destination
        React.createElement('div', { style: { marginBottom: '24px' } },
          React.createElement('label', { style: { fontWeight: '800', display: 'block', marginBottom: '12px' } }, '🗺️ לאן אתה טס?'),
          React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '8px' } },
            destKeys.map(function(key) {
              var val = budgetData[key];
              return React.createElement('button', {
                key: key,
                onClick: function() { setDest(key); },
                style: {
                  background: dest === key ? 'linear-gradient(135deg, #f59e0b, #ef4444)' : 'rgba(255,255,255,0.06)',
                  color: 'white', border: 'none', borderRadius: '10px',
                  padding: '8px 14px', cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem',
                }
              }, (val.emoji || '') + ' ' + (val.name || key));
            })
          )
        ),

        // Duration
        React.createElement('div', { style: { marginBottom: '24px' } },
          React.createElement('label', { style: { fontWeight: '800', display: 'block', marginBottom: '12px' } },
            '📅 כמה זמן? ',
            React.createElement('span', { style: { color: '#f59e0b' } }, duration + ' ימים (' + Math.round(months * 10) / 10 + ' חודשים)')
          ),
          React.createElement('input', {
            type: 'range',
            min: '30', max: '365', step: '5',
            value: duration,
            onChange: function(e) { setDuration(Number(e.target.value)); },
            style: { width: '100%', accentColor: '#f59e0b' }
          }),
          React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', color: '#6b7280', fontSize: '0.75rem', marginTop: '4px' } },
            React.createElement('span', null, 'חודש'),
            React.createElement('span', null, '3 חודשים'),
            React.createElement('span', null, '6 חודשים'),
            React.createElement('span', null, 'שנה')
          )
        ),

        // Style
        React.createElement('div', null,
          React.createElement('label', { style: { fontWeight: '800', display: 'block', marginBottom: '12px' } }, '🎯 סגנון טיול'),
          React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' } },
            travelStyles.map(function(s) {
              return React.createElement('button', {
                key: s.id,
                onClick: function() { setStyle(s.id); },
                style: {
                  background: style === s.id ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.05)',
                  border: '1px solid ' + (style === s.id ? 'rgba(245,158,11,0.5)' : 'rgba(255,255,255,0.1)'),
                  color: 'white', borderRadius: '12px',
                  padding: '12px', cursor: 'pointer', textAlign: 'right',
                }
              },
                React.createElement('div', { style: { fontWeight: '800', fontSize: '0.9rem' } }, s.label),
                React.createElement('div', { style: { color: '#9ca3af', fontSize: '0.75rem', marginTop: '4px' } }, s.desc)
              );
            })
          )
        )
      ),

      // Result
      React.createElement('div', {
        style: {
          background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(245,158,11,0.1))',
          border: '1px solid rgba(16,185,129,0.3)',
          borderRadius: '24px', padding: '32px', textAlign: 'center', marginBottom: '24px',
        }
      },
        React.createElement('div', { style: { fontSize: '3rem', marginBottom: '8px' } }, d.emoji || '🌍'),
        React.createElement('p', { style: { color: '#9ca3af', marginBottom: '8px' } },
          duration + ' ימים ב' + (d.name || dest) + ' (' + (travelStyles.find(function(s) { return s.id === style; }) || {}).label + ')'
        ),
        React.createElement('div', {
          style: { fontSize: 'clamp(2.5rem,8vw,4rem)', fontWeight: '900', marginBottom: '12px', background: 'linear-gradient(135deg, #10b981, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }
        }, '₪' + total.toLocaleString()),
        React.createElement('span', {
          style: { background: budgetLevel.color + '22', color: budgetLevel.color, border: '1px solid ' + budgetLevel.color + '44', borderRadius: '50px', padding: '6px 16px', fontWeight: '800', fontSize: '0.9rem' }
        }, budgetLevel.emoji + ' ' + budgetLevel.label),
        d.note && React.createElement('p', { style: { color: '#9ca3af', fontSize: '0.85rem', marginTop: '12px', fontStyle: 'italic' } }, d.note),
        React.createElement('p', { style: { color: '#6b7280', fontSize: '0.8rem', marginTop: '6px' } }, '~ ₪' + perDay + '/יום ממוצע')
      ),

      // Breakdown bars
      React.createElement('div', { style: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '24px', marginBottom: '24px' } },
        React.createElement('h3', { style: { fontWeight: '800', fontSize: '1.1rem', marginBottom: '16px' } }, '📊 פירוט הוצאות'),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px' } },
          breakdown.map(function(item, i) {
            var pct = total > 0 ? (item.amount / total) * 100 : 0;
            return React.createElement('div', { key: i },
              React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', fontSize: '0.88rem' } },
                React.createElement('span', { style: { color: 'white', fontWeight: '600' } }, item.icon + ' ' + item.label),
                React.createElement('span', { style: { color: item.color, fontWeight: '800' } },
                  '₪' + item.amount.toLocaleString(),
                  React.createElement('span', { style: { color: '#6b7280', fontWeight: '400', fontSize: '0.75rem', marginRight: '4px' } }, ' (' + Math.round(pct) + '%)')
                )
              ),
              React.createElement('div', { style: { background: 'rgba(255,255,255,0.08)', borderRadius: '50px', height: '8px', overflow: 'hidden' } },
                React.createElement('div', { style: { background: item.color, height: '100%', width: pct + '%', borderRadius: '50px', transition: 'width 0.6s ease' } })
              )
            );
          })
        )
      ),

      // Saving tips
      React.createElement('div', { style: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '24px' } },
        React.createElement('h3', { style: { fontWeight: '800', fontSize: '1.1rem', marginBottom: '16px' } }, '💡 איך לחסוך?'),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '8px' } },
          savingTips.map(function(tip, i) {
            return React.createElement('div', { key: i, style: { display: 'flex', gap: '10px', alignItems: 'flex-start' } },
              React.createElement('span', null, tip.icon),
              React.createElement('span', { style: { color: '#d1d5db', fontSize: '0.88rem' } }, tip.tip)
            );
          })
        ),
        React.createElement('div', {
          style: { marginTop: '16px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', padding: '12px', textAlign: 'center', fontSize: '0.85rem' }
        },
          React.createElement('strong', { style: { color: '#10b981' } }, '💚 טיפ זהב: '),
          React.createElement('span', { style: { color: '#d1d5db' } }, 'חיסכון של ₪150/יום על ' + duration + ' ימים = ₪' + (150 * duration).toLocaleString() + ' חיסכון!')
        )
      )
    )
  );
};

// ============================================================
// 9. TravelerTips
// ============================================================
var TravelerTips = function() {
  var tips = TRAVELER_TIPS || [];
  var mistakes = COMMON_MISTAKES || [];
  var [activeTab, setActiveTab] = useState(tips.length > 0 ? tips[0].category : '');
  var [openMistake, setOpenMistake] = useState(null);

  var currentCat = tips.find(function(t) { return t.category === activeTab; }) || tips[0] || { tips: [] };

  return React.createElement('div', { dir: 'rtl', style: { direction: 'rtl', minHeight: '100vh', background: '#0a0a0f', color: 'white', padding: '80px 16px 80px' } },
    React.createElement('div', { style: { maxWidth: '900px', margin: '0 auto' } },

      React.createElement('h1', { style: { fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '8px' } }, '💡 טיפים ממטיילים'),
      React.createElement('p', { style: { color: '#9ca3af', textAlign: 'center', marginBottom: '32px' } }, 'חוכמת הקהל — מה שאסור לפספס'),

      // Hottest tip banner
      (function() {
        var hottestTip = null;
        var hottestCat = null;
        tips.forEach(function(cat) {
          cat.tips.forEach(function(t) {
            if (!hottestTip || t.votes > hottestTip.votes) {
              hottestTip = t;
              hottestCat = cat;
            }
          });
        });
        if (!hottestTip) return null;
        return React.createElement('div', {
          style: {
            background: 'linear-gradient(135deg, rgba(239,68,68,0.18), rgba(249,115,22,0.18))',
            border: '1.5px solid rgba(239,68,68,0.5)',
            borderRadius: '18px',
            padding: '22px 24px',
            marginBottom: '32px',
            position: 'relative',
            overflow: 'hidden',
          }
        },
          React.createElement('div', {
            style: {
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(135deg, rgba(239,68,68,0.06), rgba(249,115,22,0.06))',
              pointerEvents: 'none',
            }
          }),
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' } },
            React.createElement('span', {
              style: {
                background: 'linear-gradient(135deg, #ef4444, #f97316)',
                color: 'white',
                borderRadius: '50px',
                padding: '4px 14px',
                fontSize: '0.8rem',
                fontWeight: '900',
                letterSpacing: '0.03em',
              }
            }, '🔥 טיפ הכי חם'),
            hottestCat && React.createElement('span', { style: { color: '#9ca3af', fontSize: '0.8rem' } }, hottestCat.emoji + ' ' + hottestCat.category),
            React.createElement('span', { style: { color: '#f97316', fontSize: '0.8rem', fontWeight: '700', marginRight: 'auto' } }, '👍 ' + (hottestTip.votes || 0).toLocaleString())
          ),
          React.createElement('div', { style: { fontWeight: '800', fontSize: '1.05rem', marginBottom: '6px', color: '#fef3c7' } }, hottestTip.title),
          React.createElement('p', { style: { color: '#d1d5db', lineHeight: '1.7', fontSize: '0.92rem', margin: 0 } }, hottestTip.text)
        );
      })(),

      // Category tabs
      React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' } },
        tips.map(function(cat) {
          return React.createElement('button', {
            key: cat.category,
            onClick: function() { setActiveTab(cat.category); },
            style: {
              background: activeTab === cat.category ? 'linear-gradient(135deg, #f59e0b, #ef4444)' : 'rgba(255,255,255,0.06)',
              color: 'white', border: 'none', borderRadius: '50px',
              padding: '10px 18px', cursor: 'pointer', fontWeight: '700', fontSize: '0.85rem',
            }
          }, cat.emoji + ' ' + cat.category);
        })
      ),

      // Tips cards
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '48px' } },
        (currentCat.tips || []).map(function(tip, i) {
          return React.createElement('div', {
            key: i,
            style: {
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRight: '4px solid ' + (currentCat.color ? currentCat.color.replace('border-', '').replace('-500', '') === 'red' ? '#ef4444' : currentCat.color.replace('border-', '').replace('-500', '') === 'green' ? '#10b981' : currentCat.color.replace('border-', '').replace('-500', '') === 'blue' ? '#3b82f6' : currentCat.color.replace('border-', '').replace('-500', '') === 'purple' ? '#8b5cf6' : '#f59e0b' : '#f59e0b'),
              borderRadius: '14px',
              padding: '20px',
            }
          },
            React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' } },
              React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                React.createElement('span', { style: { fontWeight: '800', fontSize: '1.02rem' } }, tip.title),
                tip.hot && React.createElement('span', { style: { background: 'linear-gradient(135deg,#ef4444,#f97316)', color: 'white', borderRadius: '50px', padding: '2px 8px', fontSize: '0.7rem', fontWeight: '900' } }, '🔥')
              ),
              React.createElement('span', { style: { color: '#6b7280', fontSize: '0.75rem', whiteSpace: 'nowrap', marginRight: '8px' } }, '👍 ' + (tip.votes || 0).toLocaleString())
            ),
            React.createElement('p', { style: { color: '#d1d5db', lineHeight: '1.7', fontSize: '0.92rem', marginBottom: '8px' } }, tip.text),
            tip.source && React.createElement('div', { style: { color: '#6b7280', fontSize: '0.78rem' } }, '📌 מקור: ' + tip.source)
          );
        })
      ),

      // Common mistakes accordion
      React.createElement('div', {
        style: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '24px' }
      },
        React.createElement('h2', { style: { fontSize: '1.4rem', fontWeight: '900', marginBottom: '16px', color: '#ef4444' } }, '❌ 6 טעויות נפוצות'),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '8px' } },
          mistakes.map(function(m, i) {
            var isOpen = openMistake === i;
            return React.createElement('div', {
              key: i,
              style: { border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', overflow: 'hidden' }
            },
              React.createElement('button', {
                onClick: function() { setOpenMistake(isOpen ? null : i); },
                style: {
                  width: '100%',
                  background: isOpen ? 'rgba(239,68,68,0.1)' : 'rgba(255,255,255,0.03)',
                  color: 'white', border: 'none',
                  padding: '14px 18px',
                  textAlign: 'right',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontWeight: '700',
                  fontSize: '0.92rem',
                }
              },
                React.createElement('span', null, (m.icon || '❌') + ' ' + m.mistake),
                React.createElement('span', { style: { color: '#9ca3af' } }, isOpen ? '▲' : '▼')
              ),
              isOpen && React.createElement('div', {
                style: { padding: '14px 18px', background: 'rgba(239,68,68,0.05)', color: '#d1d5db', fontSize: '0.88rem', lineHeight: '1.6', borderTop: '1px solid rgba(255,255,255,0.06)' }
              },
                React.createElement('span', { style: { color: '#10b981', fontWeight: '700' } }, '✅ פתרון: '),
                m.solution
              )
            );
          })
        )
      )
    )
  );
};

// ============================================================
// 10. SoloVsGroup
// ============================================================
var SoloVsGroup = function() {
  var criteria = [
    { label: 'חופש ועצמאות', solo: 5, group: 2 },
    { label: 'בטיחות', solo: 2, group: 5 },
    { label: 'עלות (נמוך = זול)', solo: 3, group: 4 },
    { label: 'גדילה אישית', solo: 5, group: 3 },
    { label: 'הכרות עם אנשים', solo: 5, group: 2 },
    { label: 'לוגיסטיקה קלה', solo: 3, group: 2 },
    { label: 'זיכרונות', solo: 4, group: 5 },
    { label: 'ימים קשים', solo: 1, group: 5 },
  ];

  var quotes = [
    { name: 'תמר, 24', text: '"הלכתי לבד לתאילנד ומנפאל - פגשתי את חברי הכי טובים שם. לבד זה לא בודד!"', avatar: '👩' },
    { name: 'אלון, 26', text: '"עם חברים לדרום אמריקה - הזיכרונות שלנו שווים את כל הסיבוכים הלוגיסטיים!"', avatar: '👨' },
    { name: 'נועה, 23', text: '"הטיול הלבד שינה אותי. יצאתי ילדה, חזרתי אישה. אי אפשר לקנות את זה."', avatar: '👩' },
  ];

  var soloTips = [
    'הצטרף לקבוצות הייקינג מקומיות',
    'הוסטלים הם המקום להכיר חברותא',
    'Couchsurfing Meetups - מושלם לבד',
    'ספר לאחד מההורים את המיקום שלך',
    'סמוך על האינסטינקט שלך',
    'כסף מפוזר = ביטחון מוגבר',
  ];

  var groupTips = [
    'הסכמו על תקציב לפני הטיול',
    'תכננו ימי "חופש אישי"',
    'קנו SIM נפרד לכל אחד',
    'ביטוח נפרד לכל אחד בקבוצה',
    'הכינו רשימת "מה לעשות אם נפרדים"',
    'כבדו גבולות זה של זה',
  ];

  var verdicts = [
    { scenario: 'רוצה לגדול אישית', rec: 'לבד', icon: '🧠', color: '#f59e0b' },
    { scenario: 'מחפש בטיחות ומסיבות', rec: 'עם חברים', icon: '👥', color: '#14b8a6' },
    { scenario: 'תקציב מוגבל מאוד', rec: 'עם חברים (AirBnB יוצא זול יותר)', icon: '💰', color: '#10b981' },
  ];

  function Dots(props) {
    var count = props.count;
    var max = props.max || 5;
    var color = props.color;
    return React.createElement('div', { style: { display: 'flex', gap: '4px', justifyContent: 'center' } },
      Array.from({ length: max }).map(function(_, i) {
        return React.createElement('div', {
          key: i,
          style: {
            width: '12px', height: '12px',
            borderRadius: '50%',
            background: i < count ? color : 'rgba(255,255,255,0.12)',
          }
        });
      })
    );
  }

  return React.createElement('div', { dir: 'rtl', style: { direction: 'rtl', minHeight: '100vh', background: '#0a0a0f', color: 'white', padding: '80px 16px 80px' } },
    React.createElement('div', { style: { maxWidth: '900px', margin: '0 auto' } },

      React.createElement('h1', { style: { fontSize: '2.4rem', fontWeight: '900', textAlign: 'center', marginBottom: '8px' } }, '🧍 לבד vs 👥 עם חברים'),
      React.createElement('p', { style: { color: '#9ca3af', textAlign: 'center', marginBottom: '40px' } }, 'השאלה הכי גדולה לפני הטיול הגדול'),

      // Comparison table
      React.createElement('div', {
        style: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', overflow: 'hidden', marginBottom: '40px' }
      },
        // Header
        React.createElement('div', {
          style: { display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr', background: 'rgba(255,255,255,0.07)', padding: '16px 20px', fontWeight: '800' }
        },
          React.createElement('span', null, 'קריטריון'),
          React.createElement('span', { style: { textAlign: 'center', color: '#f59e0b' } }, '🧍 לבד'),
          React.createElement('span', { style: { textAlign: 'center', color: '#14b8a6' } }, '👥 עם חברים')
        ),
        criteria.map(function(row, i) {
          return React.createElement('div', {
            key: i,
            style: {
              display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr',
              padding: '14px 20px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
              alignItems: 'center',
            }
          },
            React.createElement('span', { style: { color: '#d1d5db', fontWeight: '600', fontSize: '0.9rem' } }, row.label),
            React.createElement(Dots, { count: row.solo, color: '#f59e0b' }),
            React.createElement(Dots, { count: row.group, color: '#14b8a6' })
          );
        })
      ),

      // Quotes
      React.createElement('h2', { style: { fontSize: '1.4rem', fontWeight: '900', marginBottom: '16px' } }, '💬 מה מטיילים שחזרו אומרים'),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '40px' } },
        quotes.map(function(q, i) {
          return React.createElement('div', {
            key: i,
            style: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }
          },
            React.createElement('div', { style: { fontSize: '2.5rem', marginBottom: '8px' } }, q.avatar),
            React.createElement('p', { style: { color: '#d1d5db', fontSize: '0.88rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '12px' } }, q.text),
            React.createElement('div', { style: { color: '#9ca3af', fontSize: '0.8rem', fontWeight: '700' } }, '— ' + q.name)
          );
        })
      ),

      // Tips columns
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' } },
        React.createElement('div', { style: { background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '16px', padding: '20px' } },
          React.createElement('h3', { style: { color: '#f59e0b', fontWeight: '800', marginBottom: '12px' } }, '🧍 טיפים לבד'),
          soloTips.map(function(tip, i) {
            return React.createElement('div', { key: i, style: { color: '#d1d5db', fontSize: '0.88rem', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' } }, '• ' + tip);
          })
        ),
        React.createElement('div', { style: { background: 'rgba(20,184,166,0.07)', border: '1px solid rgba(20,184,166,0.2)', borderRadius: '16px', padding: '20px' } },
          React.createElement('h3', { style: { color: '#14b8a6', fontWeight: '800', marginBottom: '12px' } }, '👥 טיפים עם חברים'),
          groupTips.map(function(tip, i) {
            return React.createElement('div', { key: i, style: { color: '#d1d5db', fontSize: '0.88rem', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' } }, '• ' + tip);
          })
        )
      ),

      // Verdict
      React.createElement('div', { style: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '24px' } },
        React.createElement('h2', { style: { fontSize: '1.3rem', fontWeight: '900', marginBottom: '16px', textAlign: 'center' } }, '🏆 מסקנות לפי תרחיש'),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px' } },
          verdicts.map(function(v, i) {
            return React.createElement('div', {
              key: i,
              style: {
                display: 'flex', alignItems: 'center', gap: '12px',
                background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '14px 16px',
                border: '1px solid rgba(255,255,255,0.07)',
              }
            },
              React.createElement('span', { style: { fontSize: '1.5rem', flexShrink: 0 } }, v.icon),
              React.createElement('div', { style: { flex: 1 } },
                React.createElement('span', { style: { color: '#9ca3af', fontSize: '0.88rem' } }, 'אם אתה '),
                React.createElement('span', { style: { color: 'white', fontWeight: '700' } }, v.scenario),
                React.createElement('span', { style: { color: '#9ca3af', fontSize: '0.88rem' } }, ' → ')
              ),
              React.createElement('span', { style: { color: v.color, fontWeight: '900', fontSize: '0.95rem', whiteSpace: 'nowrap' } }, '✓ ' + v.rec)
            );
          })
        )
      )
    )
  );
};
