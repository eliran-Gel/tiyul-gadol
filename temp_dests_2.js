// ── temp_dests_2.js — 6 יעדים נוספים ─────────────────────────────────────────
// Tanzania, India, Namibia, Guatemala, Laos, Chile
// כל המחירים בש"ח לאדם ליום (flights=לכל הטיול, insurancePer30=לחודש)

var tempDests2 = {

  // ─────────────────────────────────────────────────────────────────────────────
  tanzania: {
    id: 'tanzania',
    name: 'טנזניה',
    nameEn: 'Tanzania',
    region: 'africa',
    emoji: '🇹🇿',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80',
    quote: '"טנזניה היא המקום שבו הטבע עדיין מנהל את הכללים — והאדם רק אורח מרוצה."',
    rating: 9.2,
    popularity: 72,
    bestSeason: 'יוני - אוקטובר',
    avgBudgetPerDay: 350,
    facts: {
      distanceFromIsrael: '4,200 ק"מ',
      flightTime: '6-8 שעות (עם עצירה)',
      size: '945,087 קמ"ר',
      language: 'סוואהילי ואנגלית',
      currency: 'שילינג טנזני (TZS) — 1 ₪ ≈ 700 שילינג',
      capital: 'דודומה (Dodoma)',
      population: '63 מיליון',
      visa: 'ויזה עם ההגעה — $50',
      timezone: 'UTC+3 (אותה שעה כמו ישראל בחורף)',
      religion: 'אסלאם + נצרות',
      safety: '⭐⭐⭐ בטוח באזורי תיירות, זהירות בעיר'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'קילימנג\'רו — הפסגה הגבוהה באפריקה (5,895 מ\')',
          'סרנגטי — מישורי עשב אינסופיים עם עדרי אנטילופות',
          'Ngorongoro Crater — "גן עדן על האדמה", מכלאה טבעית',
          'זנזיבר — חופים לבנים ומים טורקיז קריסטל',
          'Lake Manyara — שקיעות ורדרדות מעל אגם ראי',
          'Tarangire National Park — עצי באובב ואלפי פילים',
          'Mount Meru — הפסגה השנייה בגובה, טרקינג פחות עמוס'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'טיפוס קילימנג\'רו — 5-9 ימים, אפשרי ללא ציוד מיוחד',
          'מסלול Marangu ("Coca-Cola Route") — הכי נגיש לקילימנג\'רו',
          'מסלול Lemosho — הנוף הכי יפה לפסגה',
          'Mount Meru Trekking — 4 ימים, פחות צפוף ויפה לא פחות',
          'טיול רגלי ב-Ngorongoro Highlands',
          'מסלולי הליכה ב-Udzungwa Mountains National Park'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'דאר א-סלאם — ברים ומועדונים ב-Masaki וב-Oyster Bay',
          'זנזיבר Stone Town — ברים על הים עם מוזיקה לייב',
          'Kendwa Beach (זנזיבר) — Full Moon Party מדי חודש!',
          'Nungwi Beach — האטמוספרה הכי תוססת בזנזיבר',
          'מסיבות שיג\'ה (Shisha) ברחוב Old Fort בסטון טאון'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Nungwi — חוף לבן ומים שקטים בצפון זנזיבר 🏆',
          'Kendwa — שקיעות מושלמות ומים רגועים',
          'Paje Beach — גן עדן לגולשי רוח וקיטסרף',
          'Matemwe — שקט, בתולי, פחות טוריסטי',
          'Chumbe Island — שמורת אלמוגים מוגנת, צלילה מדהימה',
          'Prison Island — ביקור באי עם ענקי ארנבות (צבים ענקיים!)'
        ]
      },
      attractions: {
        icon: '🗺️',
        items: [
          'ספארי ב-Serengeti — ראיית Big Five',
          'Ngorongoro Crater — הספארי הקומפקטי הכי טוב בעולם',
          'Stone Town זנזיבר — עיר היסטורית מורשת אונסקו',
          'שוק Darajani בזנזיבר — תבלינים, דגים, צבעים',
          'Great Migration (יולי-ספטמבר) — 1.5 מיליון ויילדביסט',
          'Olduvai Gorge — "ערש האנושות", ממצאים בני 2 מיליון שנה',
          'Spice Tour בזנזיבר — טעימות ציפורן, בטטה, קינמון'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Ugali — פולנטת תירס, מאכל הבסיס של טנזניה (₪10-20)',
          'Nyama Choma — בשר צלוי על הגריל (₪40-80)',
          'Pilau — אורז מתובל בכמון וציפורן (₪20-35)',
          'Zanzibari Pizza — "פיצה" ממולאת ביצה, מוכרת ברחוב (₪15-25)',
          'Urojo (Zanzibar Mix) — מרק חריף וחמוץ עם שניצל ומנגו (₪15-30)',
          'Mishkaki — שיש קבב רחוב, טעים ועסיסי (₪15-30)',
          'Fresh Coconut Juice — קוקוס טרי ישירות מהעץ (₪5-10)',
          'Mandazi — סופגניות מטוגנות, ארוחת בוקר קלאסית (₪5-10)'
        ]
      },
      mustdo: {
        icon: '⭐',
        items: [
          'ספארי לפחות 3 ימים בסרנגטי — חובה אבסולוטית!',
          'לראות את ה-Great Migration (יולי-ספטמבר) — ציד הנהר',
          'ביקור ב-Ngorongoro Crater — יום שלם עם ג\'יפ',
          'שבוע בזנזיבר — חוף + Stone Town + ספייס טור',
          'לנסות לטפס לקילימנג\'רו — גם אם רק למחנה הראשי',
          'ארוחת ערב על חוף הים בזנזיבר עם דגים טריים',
          'לצלם את השמש שוקעת מעל סרנגטי — אין דבר כזה בעולם'
        ]
      }
    },
    vocabulary: [
      { script: 'Jambo', pronunciation: 'ג\'אמבו', meaning: 'שלום / היי', emoji: '👋' },
      { script: 'Asante sana', pronunciation: 'אסנטה סנה', meaning: 'תודה רבה', emoji: '🙏' },
      { script: 'Karibu', pronunciation: 'קריבו', meaning: 'ברוך הבא / בבקשה', emoji: '😊' },
      { script: 'Bei gani?', pronunciation: 'בֵּי גאני?', meaning: 'כמה זה עולה?', emoji: '💰' },
      { script: 'Ghali sana', pronunciation: 'גאלי סנה', meaning: 'יקר מדי!', emoji: '😤' },
      { script: 'Hakuna matata', pronunciation: 'הקונה מטטה', meaning: 'אין בעיות / הכל בסדר', emoji: '🦁' },
      { script: 'Nzuri sana', pronunciation: 'נזורי סנה', meaning: 'יפה מאוד / מצוין', emoji: '😍' },
      { script: 'Choo kiko wapi?', pronunciation: 'צ\'ו קיקו ווה-פי?', meaning: 'איפה השירותים?', emoji: '🚻' }
    ],
    mapCoords: { lat: -6.37, lng: 34.89 }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  india: {
    id: 'india',
    name: 'הודו',
    nameEn: 'India',
    region: 'asia',
    emoji: '🇮🇳',
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80',
    quote: '"הודו לא מדינה — היא יקום שלם. היא תכניס אותך לכאוס ותוציא אותך נקי יותר."',
    rating: 9.4,
    popularity: 88,
    bestSeason: 'אוקטובר - מרץ',
    avgBudgetPerDay: 200,
    facts: {
      distanceFromIsrael: '4,000 ק"מ',
      flightTime: '5-7 שעות (ישיר/עם עצירה)',
      size: '3,287,263 קמ"ר',
      language: 'הינדי ואנגלית (+ 21 שפות רשמיות)',
      currency: 'רופי הודי (INR) — 1 ₪ ≈ 23 רופי',
      capital: 'ניו דלהי',
      population: '1.4 מיליארד',
      visa: 'E-Visa מקוון — $25 ל-90 יום',
      timezone: 'UTC+5:30 (פלוס 2.5/3.5 מישראל)',
      religion: 'הינדואיזם (80%), אסלאם, בודהיזם',
      safety: '⭐⭐⭐ בטוח בעיקר, זהירות בשוקים צפופים'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'הימלאיה — הרים מושלגים, אחד משבעת פלאי הטבע',
          'ראג\'סטאן — מדבר תאר, דיונות אדמדמות ושקיעות',
          'קרלה (Kerala) — Backwaters ירוקים עם ספינות עץ',
          'Spiti Valley — עמק הימלאי בגובה 4,000 מ\', על הגבול הטיבטי',
          'Western Ghats — ג\'ונגל גשם עם מפלים ומישורי תה',
          'Rann of Kutch — מדבר מלח לבן אינסופי (גוג\'ראט)',
          'Coorg — "סקוטלנד של הודו", גבעות תה וקפה'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Triund Trek — הימלאיה ליד מקלאוד גאנג\', 3 שעות, מדהים',
          'Valley of Flowers — אונסקו, פרחים בצבעי קשת (יולי-אוגוסט)',
          'Markha Valley Trek (לאדאק) — 6-8 ימים בנוף ירח',
          'Hampta Pass — 4 ימים, עמק ירוק אל מדבר',
          'Kedarkantha Trek — חורף בשלג ב-3,810 מ\'',
          'Kumari Hills (קרלה) — ג\'ונגל גשם עם פילי בר'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'גואה — בירת הפסטיבלים: Sunburn, Hilltop, Anjuna Flea Market',
          'Trance Parties בגואה — Anjuna + Arambol חוף',
          'Hampi — חיי לילה עם ישראלים סביב ה-Virupaksha Temple',
          'Pushkar Camel Fair (נובמבר) — פסטיבל הגמלים + מוזיקה',
          'מאנאלי — פאבים ובארים ב-Old Manali',
          'שנה חדשה בגואה — המסיבה הכי גדולה בהודו'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'גואה צפון — Anjuna, Vagator, Arambol — רוח בוהמי',
          'גואה דרום — Palolem, Agonda — שקט ואלגנטי',
          'Varkala (קרלה) — חוף על פסגת צוק מרהיבה',
          'Kovalam (קרלה) — חוף ירח ורגוע',
          'Andaman Islands — מים טורקיז, אלמוגים, ג\'ונגל',
          'Gokarna — חלופה לגואה, פחות טוריסטי'
        ]
      },
      attractions: {
        icon: '🗺️',
        items: [
          'טאג\' מאהל (אגרה) — אחד משבעת פלאי העולם!',
          'Amber Fort ב-ג\'איפור — מבצר ממלכת ראג\'פוט',
          'Varanasi — העיר הקדושה על גדות הגנגס, טקסי שריפה',
          'Hampi — עיר הריסות הימלאיות של ממלכת Vijayanagara',
          'Ellora & Ajanta Caves — מקדשים חצובים בסלע (300 לפנה"ס)',
          'Golden Temple (אמריצר) — הקדוש ביותר לסיקים',
          'India Gate + Qutub Minar בדלהי'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Thali — מגש אוכל עם קארי, נאן, אורז ורוטי (₪15-30)',
          'Masala Dosa — כרית אורז פריכה עם תפוח אדמה מתובל (₪10-20)',
          'Butter Chicken — קארי עוף בחמאה ועגבניות (₪30-60)',
          'Chaat — חטיף רחוב חריף-חמוץ-מתוק (₪8-15)',
          'Biryani — אורז ארומטי עם בשר ותבלינים (₪20-45)',
          'Paratha — לחמנייה מטוגנת עם מלית, ארוחת בוקר הודית (₪8-15)',
          'Lassi — משקה יוגורט מרענן, מתוק או מלוח (₪8-15)',
          'Mango Kulfi — גלידת מנגו מסורתית (₪5-12)'
        ]
      },
      mustdo: {
        icon: '⭐',
        items: [
          'ביקור בטאג\' מאהל עם שקיעה — לפחות פעמיים (בוקר וערב)',
          'ישיבה על Ghats בוורנאסי עם טקס Ganga Aarti בשקיעה',
          'שיעור יוגה ומדיטציה בריישיקש — המקור האמיתי',
          'מסע מדבר בראג\'סטאן — ג\'יפ + גמל + לינת שדה בדיונות',
          'טיפול איורוודי מסורתי בקרלה — 90 דקות עם שמנים',
          'אוכל רחוב בDlhi Old Delhi — Chandni Chowk לטועמים אמיצים',
          'נסיעה ברכבת לילה — חווית הודו המקורית (Sleeper Class!)'
        ]
      }
    },
    vocabulary: [
      { script: 'नमस्ते', pronunciation: 'נמסטה', meaning: 'שלום / ברכה', emoji: '🙏' },
      { script: 'धन्यवाद', pronunciation: 'דהאניאווד', meaning: 'תודה', emoji: '😊' },
      { script: 'कितना है?', pronunciation: 'קיטנה הה?', meaning: 'כמה זה עולה?', emoji: '💰' },
      { script: 'बहुत महंगा', pronunciation: 'בהות מהנגה', meaning: 'יקר מדי!', emoji: '😤' },
      { script: 'बहुत अच्छा', pronunciation: 'בהות אצ\'ה', meaning: 'מצוין / טעים!', emoji: '😋' },
      { script: 'नहीं', pronunciation: 'נהין', meaning: 'לא', emoji: '🚫' },
      { script: 'शौचालय', pronunciation: 'שאוצ\'אלאי', meaning: 'שירותים', emoji: '🚻' },
      { script: 'थोड़ा तीखा', pronunciation: 'ת\'ורה טיקה', meaning: 'קצת חריף בבקשה', emoji: '🌶️' }
    ],
    mapCoords: { lat: 20.59, lng: 78.96 }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  namibia: {
    id: 'namibia',
    name: 'נמיביה',
    nameEn: 'Namibia',
    region: 'africa',
    emoji: '🇳🇦',
    heroImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1600&q=80',
    quote: '"נמיביה היא הארץ שבה השתיקה מדברת — ושם הדיונות האדמדמות נוגעות בשמיים."',
    rating: 9.0,
    popularity: 58,
    bestSeason: 'מאי - אוקטובר',
    avgBudgetPerDay: 420,
    facts: {
      distanceFromIsrael: '7,500 ק"מ',
      flightTime: '10-13 שעות (עם עצירה)',
      size: '824,292 קמ"ר',
      language: 'אנגלית (רשמית), אפריקנס, אושיוואמבו',
      currency: 'דולר נמיבי (NAD) = ראנד דרום-אפריקאי (ZAR) — 1 ₪ ≈ 5 NAD',
      capital: 'ווינדהוק (Windhoek)',
      population: '2.5 מיליון',
      visa: 'פטורים מויזה עד 90 יום — חינם לישראלים!',
      timezone: 'UTC+2 (אותה שעה כמו ישראל)',
      religion: 'נצרות (80-90%)',
      safety: '⭐⭐⭐⭐ בטוח מאוד, המדינה היציבה ביותר באפריקה'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'Sossusvlei — דיונות אדמדמות בגובה 325 מ\', הגבוהות בעולם',
          'Dead Vlei — "יער ה-Ghostly" של עצי אקציה מתים על מלח',
          'Fish River Canyon — הקניון השני בגודלו בעולם!',
          'Skeleton Coast — קו חוף מסתורי עם שרידי ספינות',
          'Etosha National Park — 22,912 קמ"ר עם Big Five',
          'Spitzkoppe — "המטרנהורן של אפריקה", צוקי גרניט',
          'Damaraland — נוף ירח עם גיאוגליפים עתיקים'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Fish River Canyon Hike — 4-5 ימים, 85 ק"מ בתחתית הקניון',
          'Dune 45 Climb בSossusvlei — זריחה מהפסגה',
          'Big Daddy Dune — הדיונה הגבוהה ביותר, 2-3 שעות',
          'Spitzkoppe Bouldering — טיפוס סלעים וצלחות',
          'Waterberg Plateau Trail — 4 ימים במישור עם ברבוסים',
          'NamibRand Nature Reserve — מסלולי טרקינג פרטיים'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'ווינדהוק — Independence Avenue: בארים ומסעדות',
          'Joe\'s Beerhouse בווינדהוק — האייקוני ביותר, בישול על אש',
          'Swakopmund — בר Jazz על הקרח, אווירת Bavarian',
          'Craft Beer בווינדהוק — Namibia Breweries מקומי',
          'Sundowner Safari — שקיעה עם G&T ב-Bush'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Swakopmund Beach — חוף אוקיינוס אטלנטי, קריר ומיוחד',
          'Walvis Bay — מפרץ שקט עם להקות פלמינגו ורודות',
          'Skeleton Coast Beaches — מסתוריים, מדברי, ייחודיים',
          'Cape Cross — אלפי אריות ים על החוף',
          'Lüderitz — עיר גרמנית קולוניאלית על האוקיינוס'
        ]
      },
      attractions: {
        icon: '🗺️',
        items: [
          'Sossusvlei + Dead Vlei — יעד בלתי נשכח',
          'Etosha National Park — ספארי עצמאי ברכב שכור',
          'Twyfelfontein Rock Engravings — גיאוגליפים בני 6,000 שנה',
          'Cape Cross Seal Colony — 120,000 כלבי ים!',
          'Swakopmund — אדריכלות גרמנית קולוניאלית + Quad Biking',
          'Fish River Canyon — ל-Lookout Point לפחות',
          'Cheetah Conservation Fund — שימור ברדלסים'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Potjiekos — תבשיל בשר ירקות בסיר ברזל על אש (₪60-90)',
          'Oryx Steak — סטייק אוריקס (אנטילופה), טעם ייחודי (₪80-150)',
          'Kapana — בשר צלוי רחוב בשוק Katutura בווינדהוק (₪25-40)',
          'Namibian Oysters — צדפות מ-Walvis Bay, טריות להפליא (₪15-25 לצדפה)',
          'Biltong — בשר מיובש, חטיף הלאומי (₪20-35 ל-100 גרם)',
          'Mopane Worms — זחלי גולם מטוגנים — אומץ מיוחד (₪15-25)',
          'Braai — מנגל אפריקאי, חוויה חברתית יותר מאכל (₪60-120)'
        ]
      },
      mustdo: {
        icon: '⭐',
        items: [
          'לקום לפני זריחה ב-Sossusvlei ולטפס את Dune 45',
          'ללכת ל-Dead Vlei עם אור בוקר — תמונות שנראות כמו ציורים',
          'ספארי עצמאי ב-Etosha — חניה ליד באר מים בלילה',
          'Quad Bike + Sandboarding בדיונות של Swakopmund',
          'שקיעה ב-Fish River Canyon Lookout Point — שתיקה מוחלטת',
          'Sundowner Gin & Tonic בבוש עם נוף 360 מעלות',
          'לצפות בפלמינגו ורודים ב-Walvis Bay עם קיאק'
        ]
      }
    },
    vocabulary: [
      { script: 'Hello', pronunciation: 'הלו', meaning: 'שלום (רשמי)', emoji: '👋' },
      { script: 'Dankie', pronunciation: 'דאנקי', meaning: 'תודה (אפריקנס)', emoji: '🙏' },
      { script: 'Hoe veel kos dit?', pronunciation: 'הו פֵל קוס דיט?', meaning: 'כמה זה עולה? (אפריקנס)', emoji: '💰' },
      { script: 'Baie dankie', pronunciation: 'ביי-יה דאנקי', meaning: 'תודה רבה', emoji: '😊' },
      { script: 'Lekker', pronunciation: 'לקר', meaning: 'טעים / נחמד / מגניב', emoji: '😋' },
      { script: 'Braai', pronunciation: 'ברַאי', meaning: 'מנגל — מה שעושים בכל שישי', emoji: '🔥' },
      { script: 'Howzit?', pronunciation: 'האו-זיט?', meaning: 'מה שלומך? (סלנג מקומי)', emoji: '🤙' }
    ],
    mapCoords: { lat: -22.96, lng: 18.49 }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  guatemala: {
    id: 'guatemala',
    name: 'גואטמלה',
    nameEn: 'Guatemala',
    region: 'centralamerica',
    emoji: '🇬🇹',
    heroImage: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=1600&q=80',
    quote: '"גואטמלה היא אוצר נסתר — מאיה עתיקה, געשים חיים ואגם שנראה כאילו הצייר שפך את כל הירוק שלו עליו."',
    rating: 8.9,
    popularity: 63,
    bestSeason: 'נובמבר - אפריל',
    avgBudgetPerDay: 250,
    facts: {
      distanceFromIsrael: '10,500 ק"מ',
      flightTime: '17-20 שעות (עם עצירות)',
      size: '108,889 קמ"ר',
      language: 'ספרדית (+ 21 שפות מאיה)',
      currency: 'קצ\'אל גואטמלי (GTQ) — 1 ₪ ≈ 2 קצ\'אל',
      capital: 'גואטמלה סיטי',
      population: '18 מיליון',
      visa: 'כניסה חופשית עד 90 יום — ללא ויזה!',
      timezone: 'UTC-6 (מינוס 8/9 מישראל)',
      religion: 'קתוליות + פרוטסטנטיות + אמונות מאיה',
      safety: '⭐⭐⭐ זהירות בגואטמלה סיטי, אנטיגואה ואגם — בטוח יחסית'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'אגם אטיטלאן (Lake Atitlán) — "היפה בעולם" לפי Aldous Huxley',
          'געש אקטנאנגו (Acatenango) — לינה על הר געש פעיל, נוף על הפסגה',
          'Volcán de Fuego — געש פעיל שמתפרץ כל שעה!',
          'El Mirador — עיר מאיה בג\'ונגל, גדולה מטיקאל',
          'Semuc Champey — בריכות אמרלד טבעיות בג\'ונגל',
          'Rio Dulce — נהר ירוק אל הקריביים',
          'Highlands מאיה — כפרים צבעוניים בגובה 2,000 מ\''
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Acatenango Overnight Hike — לינה על הר הגעש + Fuego Show',
          'Lake Atitlán Rim Trail — הקפה שלמה של האגם (5-7 ימים)',
          'El Mirador Trek — 5-7 ימים בג\'ונגל לפירמידה הגדולה בעולם',
          'Volcán Santa María — עלייה לפסגה 3,772 מ\'',
          'Semuc Champey + Caves K\'anba — כניסה עם נרות',
          'Indian Nose (Lake Atitlán) — זריחה מהפסגה (2.5 שעות)'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'אנטיגואה — La Sin Ventura, Riki\'s Bar, Café No Sé',
          'סן פדרו לה לגונה (Lake Atitlán) — "כפר הבקפקרים"',
          'Semana Santa (פסחא) — תהלוכות ענק + חגיגות ברחוב',
          'Xela (Quetzaltenango) — פאבים ואוניברסיטה, הכי מקומי',
          'חיי לילה בחיאטיאגו (Santiago) — קומבוס ומוזיקה מאיה'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Livingston — עיר קריבית בצפון, תרבות גריפונה',
          'Playa Blanca (Lake Izabal) — חוף שקט על האגם הגדול',
          'Puerto Barrios — גישה לאיי בליז הסמוכים',
          'Rio Dulce — שחייה בנהר הירוק בין ג\'ונגלים',
          'Monterrico — חוף שחור פסיפי עם צבים (אוגוסט-ספטמבר)'
        ]
      },
      attractions: {
        icon: '🗺️',
        items: [
          'טיקאל — עיר המאיה האדירה, פירמידות מנצחות עוץ הג\'ונגל',
          'אנטיגואה — עיר קולוניאלית מורשת אונסקו, מרוקאית אדמה',
          'שוק צ\'יצ\'יקסטנאנגו (Chichicastenango) — גדול באמריקה הלטינית',
          'Semuc Champey — בריכות טבע ירוקות בלב הג\'ונגל',
          'Copán Ruins (הונדורס, ליד הגבול) — עיר מאיה עם הירוגליפים',
          'Lake Atitlán Boat Tour — 3 כפרים שונים ביום',
          'Casa del Jade + Jade Maya Museum באנטיגואה'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Pepián — תבשיל בשר ברוטב גרעיני דלעת ופלפלים (₪25-40)',
          'Kak\'ik — מרק הודקה מסורתי חריף (₪20-35)',
          'Tamales — עטוף בעלי בננה עם עוף ועגבנייה (₪10-20)',
          'Chiles Rellenos — פלפל ממולא גבינה ובשר (₪25-45)',
          'Rellenitos — קציצות פלנטיין עם שעועית ושוקולד (₪10-18)',
          'Atol de Elote — משקה חם מתירס, ארוחת בוקר מסורתית (₪8-15)',
          'Tacos de Carne Asada — ברחוב, כ-3 לקצ\'אל (₪5-10 לתאקו)'
        ]
      },
      mustdo: {
        icon: '⭐',
        items: [
          'לינת לילה על הר Acatenango ולצפות בפרוץ הגעש בחושך',
          'שייט בסירה על Lake Atitlán עם עצירה ב-3 כפרים',
          'לאבד את עצמך בטיקאל בשעת בוקר מוקדמת לפני ההמון',
          'שוק צ\'יצ\'יקסטנאנגו ביום שלישי או שישי — הכי צבעוני',
          'Semuc Champey עם Cave Tour בנרות — בלתי נשכח',
          'ספרדית בבית ספר באנטיגואה — שבוע, 4 שעות ביום, ₪500',
          'ארוחת בוקר עם טמאלה ואטול ליד שוק מקומי'
        ]
      }
    },
    vocabulary: [
      { script: 'Hola', pronunciation: 'אולה', meaning: 'שלום', emoji: '👋' },
      { script: 'Gracias', pronunciation: 'גראסיאס', meaning: 'תודה', emoji: '🙏' },
      { script: '¿Cuánto cuesta?', pronunciation: 'קוואנטו קווסטה?', meaning: 'כמה זה עולה?', emoji: '💰' },
      { script: 'Muy caro', pronunciation: 'מוי קארו', meaning: 'יקר מאוד!', emoji: '😤' },
      { script: 'Delicioso', pronunciation: 'דליסיוסו', meaning: 'טעים!', emoji: '😋' },
      { script: 'Chévere / Bacano', pronunciation: 'צ\'ברה / בקאנו', meaning: 'מגניב! / כיף!', emoji: '😎' },
      { script: 'El baño', pronunciation: 'אל באניו', meaning: 'שירותים', emoji: '🚻' },
      { script: 'Pisto', pronunciation: 'פיסטו', meaning: 'כסף (סלנג מקומי)', emoji: '💵' }
    ],
    mapCoords: { lat: 15.78, lng: -90.23 }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  laos: {
    id: 'laos',
    name: 'לאוס',
    nameEn: 'Laos',
    region: 'asia',
    emoji: '🇱🇦',
    heroImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1600&q=80',
    quote: '"לאוס היא תאילנד של לפני 20 שנה — כפרית, אמיתית, ובלתי מושחתת. הארץ הכי נינוחה בדרום-מזרח אסיה."',
    rating: 8.8,
    popularity: 67,
    bestSeason: 'נובמבר - מרץ',
    avgBudgetPerDay: 185,
    facts: {
      distanceFromIsrael: '6,800 ק"מ',
      flightTime: '10-13 שעות (עם עצירה)',
      size: '236,800 קמ"ר',
      language: 'לאו (ראו) — קרוב לתאילנדי',
      currency: 'קיפ לאוסי (LAK) — 1 ₪ ≈ 4,500 קיפ, USD מקובל',
      capital: 'ויינטיאן',
      population: '7.5 מיליון',
      visa: 'ויזה עם הגעה — $35-42 ל-30 יום',
      timezone: 'UTC+7',
      religion: 'בודהיזם תרוואדה (65%)',
      safety: '⭐⭐⭐⭐⭐ הכי בטוח בדרום-מזרח אסיה'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'Luang Prabang — עיר מקדשים ונהרות, זיהוי אונסקו',
          'Vang Vieng — עמק עם נהר Nam Song וצוקי גיר ירוקים',
          'פלטו Bolaven (ודרום לאוס) — מפלים, קפה ותה',
          'Nong Khiaw — כפר על גדות נהר בין הרים מושלגים',
          'Kuang Si Waterfalls — מפלים טורקיז בשלבים, ג\'ונגל',
          'Mekong River Cruise — שייט 2 ימים לואנג פראבאנג',
          '4,000 Islands (Si Phan Don) — איים על המקונג בדרום'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Phu Si Hill לואנג פראבאנג — 328 מדרגות, נוף מהמם',
          'Nong Khiaw to Muang Ngoi Hike — 2 ימים בין כפרים',
          'Tham Pha Tok Caves — מערות בודהיסטיות מהמלחמה',
          'Bolaven Plateau Loop — אופנוע + מפלים (3-5 ימים)',
          'Vang Vieng Cave Trek — מערת Tham Chang + ים טיפה',
          'Pha Ngern Viewpoint — עלייה 2 שעות, שקיעה מהעולם'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'Vang Vieng Tubing — גלישה בצינורות על הנהר עם בארים',
          'Vang Vieng Bar Street — "לא ישנים כאן"',
          'Pi Mai (ראש השנה הלאוסי, אפריל) — מסיבת מים ענקית!',
          'לואנג פראבאנג — Bowling Night (פעילות הלאומית!)',
          'ויינטיאן — Bor Pen Nyang Bar, Bor Pen Nyang Beach Club'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Don Khong Island — האי הגדול ב-4,000 Islands, שקט',
          'Don Det — "האי של הבקפקרים", ערסלים ונהרות',
          'Don Khone — אתר מפלי Khone Phapheng (הגדולים בדרום-מזרח אסיה)',
          'Nam Ou River Beaches — חוליות לבנות בין הרים',
          'Vang Vieng Blue Lagoon — בריכת טבע בג\'ונגל (שחייה)'
        ]
      },
      attractions: {
        icon: '🗺️',
        items: [
          'Tak Bat (לואנג פראבאנג) — טקס נזירים בזריחה, מדיטטיבי',
          'Kuang Si Falls — מפל שלבים טורקיז, 30 דקות מלואנג פראבאנג',
          'Pha That Luang (ויינטיאן) — הסטופה הלאומית הזהובה',
          'Patuxai Monument (ויינטיאן) — שער הניצחון הלאוסי',
          'Wat Xieng Thong — המקדש הכי יפה בלואנג פראבאנג',
          'Plain of Jars (מישור הכדים) — אתר ארכאולוגי מסתורי',
          'Boat Slow-Boat מHuay Xai לLuang Prabang — 2 ימים'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Khao Niaw — אורז דביק, נאכל בידיים, הבסיס של כל ארוחה (₪5-12)',
          'Laap — סלט בשר כתות עם עשבי תיבול ותבלינים (₪20-35)',
          'Or Lam (Luang Prabang Stew) — מרק ירקות ובשר עם בטטה (₪25-40)',
          'Khao Piak Sen — מרק אטריות אורז בציר עוף (₪18-30)',
          'Ping Kai — עוף שלם על שיפוד צלוי (₪30-50)',
          'Mok Pa — דג עטוף בעלי בננה עם עשבים ואדה (₪25-40)',
          'Beerlao — הבירה הלאוסית, הכי טובה בדרום-מזרח אסיה! (₪10-18)'
        ]
      },
      mustdo: {
        icon: '⭐',
        items: [
          'Tak Bat — להתעורר ב-5:30 ולצפות בנזירים לוקחים אוכל',
          'Tubing ב-Vang Vieng — הגרסה המתונה של הFull Moon Party',
          'Slow Boat 2 ימים על המקונג מ-Huay Xai ללואנג פראבאנג',
          'זריחה מ-Pha Ngern Viewpoint מעל הענן של עמק נונג קיאו',
          'Kuang Si Falls — שחייה בבריכת הטורקיז בין מפלים',
          'ארוחה בנחת על המקונג בלואנג פראבאנג — ראיית שקיעה',
          'לנסות Laap עם אורז דביק — הארוחה האמיתית של לאוס'
        ]
      }
    },
    vocabulary: [
      { script: 'ສະບາຍດີ', pronunciation: 'סאבאי-דִי', meaning: 'שלום / מה שלומך', emoji: '👋' },
      { script: 'ຂອບໃຈ', pronunciation: 'קופ-ג\'אי', meaning: 'תודה', emoji: '🙏' },
      { script: 'ເທົ່າໃດ?', pronunciation: 'ט\'אוואדאי?', meaning: 'כמה זה עולה?', emoji: '💰' },
      { script: 'ແພງຫລາຍ', pronunciation: 'פנג-לאי', meaning: 'יקר מאוד!', emoji: '😤' },
      { script: 'ອ້ວຍ!', pronunciation: 'אֵוּאי!', meaning: 'טעים! / וואו!', emoji: '😋' },
      { script: 'ບໍ່ເປັນຫຍັງ', pronunciation: 'בו-פן-נייאנג', meaning: 'לא נורא, הכל בסדר', emoji: '😊' },
      { script: 'ຫ້ອງນ້ຳ', pronunciation: 'הונג-נם', meaning: 'שירותים', emoji: '🚻' },
      { script: 'ສາບາຍດີ!', pronunciation: ' לָה קוֹן!', meaning: 'להתראות!', emoji: '✌️' }
    ],
    mapCoords: { lat: 19.85, lng: 102.50 }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  chile: {
    id: 'chile',
    name: "צ'ילה",
    nameEn: 'Chile',
    region: 'southamerica',
    emoji: '🇨🇱',
    heroImage: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80',
    quote: '"צ\'ילה היא ארץ הקצוות — ממדבר אטקמה הרובץ על השמיים ועד לקרחוני פטגוניה, זהו המסע שישנה אותך."',
    rating: 9.3,
    popularity: 76,
    bestSeason: 'נובמבר - מרץ (פטגוניה) / כל השנה (אטקמה)',
    avgBudgetPerDay: 400,
    facts: {
      distanceFromIsrael: '13,000 ק"מ',
      flightTime: '16-20 שעות (עם עצירות)',
      size: '756,102 קמ"ר',
      language: 'ספרדית',
      currency: 'פסו צ\'יליאני (CLP) — 1 ₪ ≈ 310 פסו',
      capital: 'סנטיאגו',
      population: '19 מיליון',
      visa: 'כניסה חופשית עד 90 יום — ללא ויזה!',
      timezone: 'UTC-3 / UTC-4 (מינוס 5/6 מישראל)',
      religion: 'קתוליות (55%), אחרים',
      safety: '⭐⭐⭐⭐ הכי בטוח בדרום אמריקה'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'Torres del Paine — שלושת הצוקים הכחולים, אחת מהנופים הדרמטיים בעולם',
          'Atacama Desert — המדבר הכי יבש בעולם, עם גייזרים וחיות',
          'Lake District — וולקנות + אגמות שקטים בין ג\'ונגל גשם',
          'Carretera Austral — כביש 1,240 ק"מ דרמטי בלב פטגוניה',
          'Valle de la Luna (אטקמה) — "ירח על הארץ", נוף מאדים',
          'Perito Moreno Glacier (ארגנטינה, קרוב) — קרחון פעיל מדהים',
          'Easter Island (איסלה דה פסקואה) — פסלי Moai, האי המסתורי'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Torres del Paine W Trek — 5 ימים, הטרק המפורסם בדרום אמריקה',
          'Torres del Paine O Circuit — 8-10 ימים, הקסם השלם',
          'Valle del Francés — יום הייקינג מושלם בין קרחונים',
          'Cerro Castillo Trek — פחות ידוע מ-Torres, מדהים לא פחות',
          'Villarrica Volcano Climb — טיפוס לפסגת הגעש הפעיל (1 יום)',
          'Atacama Valle de Muerte — הייקינג בין דיונות בגובה 2,400 מ\''
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'סנטיאגו — Barrio Bellavista + Barrio Italia, מועדונים עד הבוקר',
          'Barrio Italia בסנטיאגו — בארים בוטיק, ויסקי וג\'ין קראפט',
          'Puerto Natales — "בירת הטרקינג", פאבים חמימים אחרי הררים',
          'ולפראייסו (Valparaíso) — עיר הנמל הצבעונית, חיי לילה',
          'פסטיבל Lollapalooza Chile — מרץ, ענקי!'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'ולפראייסו / ויניה דל מאר — חופים פסיפיים עם גלים גבוהים',
          'Pichilemu — בירת הגלישה של דרום אמריקה',
          'Playa Cavancha (איקיקה) — חוף פסיפי שקט בצפון',
          'Easter Island Beaches — חופים לבנים + פסלי Moai ברקע',
          'Arica Beaches — הצפון הכי חם, קרוב לפרו'
        ]
      },
      attractions: {
        icon: '🗺️',
        items: [
          'Torres del Paine National Park — #1 בדרום אמריקה',
          'San Pedro de Atacama — בסיס למדבר, גייזרים ואגמות מלח',
          'Valle de la Luna — שקיעת ירח חייבת!',
          'Easter Island + Moai Statues — 900 פסלי ענק מסתוריים',
          'ולפראייסו — גרפיטי, מעליות ונמל היסטורי',
          'Perito Moreno & Los Glaciares (פטגוניה) — קרחוני ענק',
          'Santiago Museum & Street Art — Barrio Yungay'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Empanadas de Pino — פשטידת בצק עם בשר טחון וביצה (₪20-35)',
          'Cazuela — מרק עוף/בקר עם ירקות ואורז (₪35-55)',
          'Chorrillana — פריטס עם בשר, בצל ושמנת — מנה לאומית חריגה (₪40-70)',
          'Completo — הוט-דוג צ\'יליאני עם מיונז, אבוקדו ועגבנייה (₪20-35)',
          'Ceviche (צ\'יליאני) — דג טרי עם לימון ובצל ירוק (₪45-80)',
          'Pisco Sour — קוקטייל הלאומי עם ליים וביצה (₪30-50)',
          'Humitas — מאמאליגה עם גבינה עטופה בעלי תירס (₪15-25)'
        ]
      },
      mustdo: {
        icon: '⭐',
        items: [
          'W Trek ב-Torres del Paine — 5 ימים, רגע הגעגועים הגדול ביותר',
          'לצפות בזריחה מול צוקי Torres (שלוש שעות הליכה לפנות בוקר)',
          'גייזרים דל טטיו באטקמה — ב-4:30 בבוקר בגובה 4,320 מ\'',
          'Valle de la Luna בשקיעה — אחד הרגעים הכי יפים בדרום אמריקה',
          'Stargazing באטקמה — השמיים הכי צלולים בעולם, טלסקופים',
          'Pisco Sour ב-Valparaíso עם נוף לנמל בשקיעה',
          'כביש Carretera Austral ברכב שכור — 3-7 ימים, נוף מסרט'
        ]
      }
    },
    vocabulary: [
      { script: 'Hola / Buenas', pronunciation: 'אולה / בוונאס', meaning: 'שלום / יום טוב', emoji: '👋' },
      { script: 'Gracias', pronunciation: 'גראסיאס', meaning: 'תודה', emoji: '🙏' },
      { script: '¿Cuánto vale?', pronunciation: 'קואנטו באלה?', meaning: 'כמה זה שווה/עולה?', emoji: '💰' },
      { script: 'Muy rico', pronunciation: 'מוי ריקו', meaning: 'מאוד טעים!', emoji: '😋' },
      { script: 'Bacán / Filete', pronunciation: 'בקן / פילטה', meaning: 'מגניב! (סלנג צ\'יליאני)', emoji: '😎' },
      { script: 'Po / Pues', pronunciation: 'פו / פּוס', meaning: 'אז... / כן... (סיומת מקומית)', emoji: '🤙' },
      { script: 'El baño', pronunciation: 'אל באניו', meaning: 'שירותים', emoji: '🚻' },
      { script: 'Cachai?', pronunciation: 'קצ\'אי?', meaning: 'הבנת? / אחי (סלנג)', emoji: '🤔' }
    ],
    mapCoords: { lat: -35.68, lng: -71.54 }
  }

};

// ── Budget Data ───────────────────────────────────────────────────────────────
var tempBudget2 = {

  tanzania: {
    accommodation: { low: 80,  mid: 250, high: 700 },
    food:          { low: 60,  mid: 150, high: 350 },
    transport:     { low: 40,  mid: 120, high: 400 },
    activities:    { low: 200, mid: 500, high: 1500 },
    flights:       { low: 2800, mid: 3500, high: 5000 },
    visa: 185,
    insurancePer30: 400,
    note: 'ספארי מעלה מאוד את המחיר — תכנן 3+ לילות ב-Lodge'
  },

  india: {
    accommodation: { low: 40,  mid: 130, high: 350 },
    food:          { low: 30,  mid: 90,  high: 250 },
    transport:     { low: 20,  mid: 70,  high: 200 },
    activities:    { low: 30,  mid: 100, high: 300 },
    flights:       { low: 2200, mid: 2800, high: 4000 },
    visa: 90,
    insurancePer30: 300,
    note: 'הזול ביותר לטיפול רב-שבועי — ניתן לחיות ב-₪150 ביום!'
  },

  namibia: {
    accommodation: { low: 150, mid: 400, high: 1200 },
    food:          { low: 80,  mid: 200, high: 500 },
    transport:     { low: 200, mid: 400, high: 700 },
    activities:    { low: 100, mid: 300, high: 800 },
    flights:       { low: 3500, mid: 4500, high: 6500 },
    visa: 0,
    insurancePer30: 420,
    note: 'רכב שכור הכרחי — תוסיף ₪200-350 ביום לתחבורה'
  },

  guatemala: {
    accommodation: { low: 60,  mid: 180, high: 450 },
    food:          { low: 40,  mid: 110, high: 280 },
    transport:     { low: 30,  mid: 80,  high: 200 },
    activities:    { low: 50,  mid: 150, high: 400 },
    flights:       { low: 4500, mid: 5500, high: 7500 },
    visa: 0,
    insurancePer30: 340,
    note: 'זול מאוד יחסית לאמריקה המרכזית — קורס ספרדית חובה!'
  },

  laos: {
    accommodation: { low: 45,  mid: 130, high: 350 },
    food:          { low: 30,  mid: 80,  high: 200 },
    transport:     { low: 25,  mid: 70,  high: 180 },
    activities:    { low: 30,  mid: 90,  high: 250 },
    flights:       { low: 2800, mid: 3500, high: 5000 },
    visa: 130,
    insurancePer30: 300,
    note: 'הכי זול ונינוח בדרום-מזרח אסיה — Slow Life מובטח'
  },

  chile: {
    accommodation: { low: 120, mid: 300, high: 800 },
    food:          { low: 80,  mid: 200, high: 500 },
    transport:     { low: 60,  mid: 180, high: 500 },
    activities:    { low: 100, mid: 280, high: 700 },
    flights:       { low: 5500, mid: 7000, high: 10000 },
    visa: 0,
    insurancePer30: 450,
    note: 'יקר יחסית לדרום אמריקה — Torres del Paine הכי שווה כל שקל'
  }

};
