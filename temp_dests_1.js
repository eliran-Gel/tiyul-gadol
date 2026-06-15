var tempDests1 = {

  cambodia: {
    id: 'cambodia',
    name: 'קמבודיה',
    nameEn: 'Cambodia',
    region: 'asia',
    emoji: '🇰🇭',
    heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&q=80',
    quote: '"אנגקור וואט לא ייראה כמו בתמונות — הוא יראה הרבה יותר גדול, יותר עתיק, ויותר מרגש."',
    rating: 9.0,
    popularity: 75,
    bestSeason: 'נובמבר - מרץ',
    avgBudgetPerDay: 200,
    facts: {
      distanceFromIsrael: '7,400 ק"מ',
      flightTime: '10-12 שעות (עם עצירה)',
      size: '181,035 קמ"ר',
      language: 'חמרית (Khmer)',
      currency: 'ריאל קמבודי (KHR) — בפועל USD בכל מקום, 1 $ ≈ 4,100 ריאל',
      capital: 'פנום פן',
      population: '17 מיליון',
      visa: 'ויזה אלקטרונית מקוונת (e-Visa) — $36 ל-30 יום',
      timezone: 'UTC+7 (פלוס 5 מישראל בקיץ)',
      religion: 'בודהיזם תרוואדה (97%)',
      safety: '⭐⭐⭐ בטוח ברוב האזורים, זהירות מכיסוסים ופרנקים'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'אנגקור וואט — קומפלקס המקדשים הגדול בעולם, עולה עם השמש',
          'Ta Prohm — מקדש העצים האגדי שבולעים את הגדרות',
          'Preah Vihear — מקדש על הצוק בגבול תאילנד, נוף אדיר',
          'Tonle Sap — אגם הנצח שמשתנה בגודלו פי 4 בין העונות',
          'Cardamom Mountains — ג\'ונגל גשם ראשוני בדרום-מערב',
          'Kep — עיירת חוף קלאסית עם פצפץ ודייגים מקומיים',
          'Kirirom National Park — הרים ירוקים ומפלי מים רגועים'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Phnom Kulen — הר קדוש עם מפלים ופסלי בודהה בנהר',
          'Cardamom Mountains Trekking — 2-4 ימים בג\'ונגל עם מדריך מקומי',
          'Bokor Hill Station — רכס ערפילי עם שרידי קולוניאליזם צרפתי',
          'Kirirom Trek — מסלול יחסית קל בין אקליפטוסים גדולים',
          'Around Angkor Wat by Bicycle — ללא רכב, בין כל המקדשים בדיוושה'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'Pub Street בסיאם ריפ — רחוב פאבים ומסעדות פתוח כל הלילה',
          'Pontoon Club בפנום פן — מועדון על סירה על נהר המקונג',
          'Heart of Darkness פנום פן — הבר-מועדון הוותיק ביותר',
          'Angkor What? Bar — בסיאם ריפ, בירה $0.50 ואווירה מטורפת',
          'Riverside בפנום פן — בתי קפה ובארים לאורך הנהר'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'סיהנוקוויל — חופים לבנים עם הרבה backpackers (בדוק עדכני לפני נסיעה)',
          'Koh Rong — אי בתולי עם חופים מהיפים בדרום-מזרח אסיה',
          'Koh Rong Sanloem — שקט יותר, מים שקופים כמו בריכה',
          'Koh Ta Kiev — מינימלי, קמפינג על חוף, עד 40 אנשים בלילה',
          'Otres Beach — רגוע, פחות מסחרי, מושלם להתרגע'
        ]
      },
      attractions: {
        icon: '🗺️',
        items: [
          'אנגקור וואט — חובה מוחלטת, לפחות יום שלם',
          'Bayon Temple — 216 פנים ענקיים מחייכים לכל הכיוונים',
          'Tuol Sleng Genocide Museum בפנום פן — כואב אך הכרחי',
          'Killing Fields (Choeung Ek) — אתר זיכרון לצ\'מרים האדומים',
          'Royal Palace פנום פן — ארמון מלכותי בלב העיר',
          'Silver Pagoda — 5,000 אריחי כסף, פסל בודהה ב-90 ק"ג זהב',
          'Preah Khan Temple — מקדש ענק שעדיין מוקף עצים'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Amok Trey — תבשיל דגים בקרם קוקוס עם עלי כרכום (₪18-35)',
          'Lok Lak — בשר בקר מוקפץ עם ביצה עין על אורז (₪20-40)',
          'Bai Sach Chrouk — אורז עם חזיר צלוי לארוחת בוקר (₪10-20)',
          'Nom Banh Chok — "לחמניות קמבודיות" — אטריות אורז עם קארי ירוק (₪8-15)',
          'Kuy Teav — מרק אטריות עם בשר ועשבים, ארוחת בוקר קלאסית (₪10-20)',
          'Kampot Pepper Crab — שפמנון עם פלפל קמפוט המפורסם (₪60-120)',
          'Fresh Spring Rolls — גלילות קמבודיות טריות עם בוטנים (₪8-15)'
        ]
      },
      mustdo: {
        icon: '⭐',
        items: [
          'לקום ב-4:30 לשמש עולה מאחורי אנגקור וואט — חוויה שלא נשכחת',
          'לשכור אופניים ולסייר בין מקדשי אנגקור ביום שלם',
          'לבקר במוזיאון טואול סלנג — להבין את ההיסטוריה כואבת',
          'לאכול ב-Pub Street ולשתות בירה Angkor על בול שטר',
          'לטוס לאי Koh Rong ולבלות יומיים ללא אינטרנט על חוף לבן'
        ]
      }
    },
    vocabulary: [
      { script: 'សួស្តី', pronunciation: 'סוּאָסְדֵי', meaning: 'שלום', emoji: '👋' },
      { script: 'អរគុណ', pronunciation: 'אוֹרְקוּן', meaning: 'תודה', emoji: '🙏' },
      { script: 'ថ្លៃប៉ុន្មាន?', pronunciation: 'ת\'לאי פונמאן?', meaning: 'כמה זה עולה?', emoji: '💰' },
      { script: 'ឆ្ងាញ់', pronunciation: 'ג\'נאניי', meaning: 'טעים!', emoji: '😋' },
      { script: 'ថ្លៃណាស់', pronunciation: 'ת\'לאי נאס', meaning: 'יקר מאוד', emoji: '😱' },
      { script: 'បន្ទប់ទឹក', pronunciation: 'בונטוּפ טוּק', meaning: 'שירותים', emoji: '🚻' },
      { script: 'ជួយផ្ងារ', pronunciation: 'ג\'ואי פנגאר', meaning: 'עזרה!', emoji: '🆘' }
    ],
    mapCoords: { lat: 12.57, lng: 104.99 }
  },

  brazil: {
    id: 'brazil',
    name: 'ברזיל',
    nameEn: 'Brazil',
    region: 'south-america',
    emoji: '🇧🇷',
    heroImage: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1600&q=80',
    quote: '"ברזיל היא לא מדינה — היא יבשת שלמה בתוך מדינה. יש לה הכל: ג\'ונגל, חופים, שמחה ומקצב שלא עוצר."',
    rating: 9.2,
    popularity: 82,
    bestSeason: 'דצמבר - מרץ (קרנבל!) / יוני - ספטמבר (דרום)',
    avgBudgetPerDay: 350,
    facts: {
      distanceFromIsrael: '9,800 ק"מ',
      flightTime: '14-17 שעות (עם עצירה)',
      size: '8,515,767 קמ"ר (הגדולה ב-דרום אמריקה)',
      language: 'פורטוגזית',
      currency: 'ריאל ברזילאי (BRL) — 1 ₪ ≈ 1.4 ריאל',
      capital: 'ברזיליה (בירה), ריו דה ז\'נרו (תיירות)',
      population: '215 מיליון',
      visa: 'פטור מויזה לישראלים עד 90 יום',
      timezone: 'UTC-3 (ריו) עד UTC-5 (מנאוס)',
      religion: 'קתוליות (65%) + אוונגליזם + ספיריטיזם',
      safety: '⭐⭐⭐ שים לב! הימנע מפאבלות ומאזורים חשוכים בלילה'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'Iguazu Falls — המפלים הגדולים בעולם, גבוה מניאגרה, רחב מ-Victoria',
          'יער האמזון — ריאות כדור הארץ, ג\'ונגל הגשם הגדול בעולם',
          'Fernando de Noronha — ארכיפלג מבודד עם מים צבעוניים אדירים',
          'Chapada Diamantina — שולחן-הר עם מפלים ומערות בלב ברזיל',
          'Pantanal — שמורת הטבע הגדולה ביבשה, מלאה ג\'גוארים ועופות',
          'Lençóis Maranhenses — דיונות לבנות ובריכות מים תכולות — חלום',
          'Pão de Açúcar (Sugarloaf) — הר הסוכר מעל ריו'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Chapada Diamantina Trek — 3-7 ימים, מפלים, מערות וצמחיה ייחודית',
          'Serra dos Órgãos — הרים סביב פטרופוליס עם נוף לריו',
          'Ilha Grande — הסתובבות רגלית על האי ללא כלי רכב',
          'Parque Nacional da Tijuca בריו — ג\'ונגל אטלנטי בתוך העיר',
          'Pedra do Telégrafo — צוק מרהיב מעל האוקיאנוס עם תמונת "מדהימה"',
          'Corcovado Trail — עלייה ברגל לפסל הישו'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'קרנבל ריו (פברואר) — הגדול בעולם, 2 מיליון איש בלילה ברחוב',
          'Lapa בריו — שכונת בתי קפה ומועדונים פתוחה עד שישי בבוקר',
          'Barranco Salvador — כיכר עם לייב Samba בכל לילה',
          'Santa Teresa — שכונת אמנים בריו עם בארים מיוחדים',
          'Camarote Carnaval — צפייה בסמבדרום ב-VIP בקרנבל',
          'Beach Bars בג\'ריקואקוארה — הישיבה על החוף עם קוקוסים וקפירינייה'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Ipanema Beach ריו — האיקוני, עם Posto 9 של הצעירים',
          'Copacabana — 4 ק"מ של חוף עירוני מפורסם עם אנרגיה',
          'Arraial do Cabo — "ריביירה ברזילאית" עם מים תכולים',
          'Jericoacoara — חוף רוח על דיונות, גן עדן ל-Kitesurf',
          'Praia do Sancho — Fernando de Noronha, אחד מהיפים בעולם',
          'Trancoso — כפר היפסטרי על צוק בצפון באהיה'
        ]
      },
      attractions: {
        icon: '🗺️',
        items: [
          'Cristo Redentor — ישו הפרוש בראש ההר, נשקף על ריו',
          'Iguazu Falls — גם הצד הברזילאי וגם הארגנטינאי חובה',
          'Teatro Amazonas — בית האופרה בלב מנאוס מ-1896, מדהים',
          'Pelourinho — ריבוע ההיסטורי של סלוודור עם ארכיטקטורה צבעונית',
          'יצירות ניימייר בברזיליה — בירה אדריכלית על שפת האגם',
          'Museu do Amanhã בריו — מוזיאון אינטראקטיבי מרהיב על המזח',
          'Solar do Unhão סלוודור — מוזיאון אמנות ברזילאית בנמל ישן'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Feijoada — תבשיל שעועית שחורה עם חזיר ונקניק, הלאומי (₪40-80)',
          'Churrasco — BBQ ברזילאי, שיפודי בשר אין-סופיים בבית Rodízio (₪80-150)',
          'Caipirinha — קוקטייל הלאומי: קשאסה, ליים וסוכר (₪25-50)',
          'Açaí na Tigela — כוס אסאי קפוא עם גרנולה ובננה (₪20-40)',
          'Pão de Queijo — לחמניות גבינה קסאווה, ארוחת בוקר קלאסית (₪5-12)',
          'Moqueca — תבשיל דגים בחלב קוקוס מסגנון Bahia (₪60-120)',
          'Coxinha — כרעיים עוף מטוגנות בבצק, מנת רחוב (₪8-15)'
        ]
      },
      mustdo: {
        icon: '⭐',
        items: [
          'לחוות קרנבל ריו — הדבר הכי שווה בברזיל, לבוא עם תחפושת',
          'לטוס לריאות האמזון ולקיים טיול סירות עם מדריך מקומי',
          'לעמוד ביד אחת ממפלי איגואסו ולהירטב עד העצמות',
          'לשתות קפירינייה טרייה על חוף איפנמה בשקיעה',
          'לאכול churrasco אמיתי בבית rodízio עם 15 סוגי בשר'
        ]
      }
    },
    vocabulary: [
      { script: 'Olá', pronunciation: 'אולא', meaning: 'שלום', emoji: '👋' },
      { script: 'Obrigado/a', pronunciation: 'אובריגאדו/ה', meaning: 'תודה', emoji: '🙏' },
      { script: 'Quanto custa?', pronunciation: 'קוואנטו קוסטה?', meaning: 'כמה זה עולה?', emoji: '💰' },
      { script: 'Delicioso', pronunciation: 'דליסיוזו', meaning: 'טעים!', emoji: '😋' },
      { script: 'Caro demais', pronunciation: 'קארו דמאיס', meaning: 'יקר מדי', emoji: '😱' },
      { script: 'Banheiro', pronunciation: 'בניירו', meaning: 'שירותים', emoji: '🚻' },
      { script: 'Saúde!', pronunciation: 'סאאודה!', meaning: 'לחיים!', emoji: '🍻' },
      { script: 'Socorro!', pronunciation: 'סוקורו!', meaning: 'עזרה!', emoji: '🆘' }
    ],
    mapCoords: { lat: -14.24, lng: -51.93 }
  },

  uganda: {
    id: 'uganda',
    name: 'אוגנדה',
    nameEn: 'Uganda',
    region: 'africa',
    emoji: '🇺🇬',
    heroImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&q=80',
    quote: '"אוגנדה היא פנינה של אפריקה — צ\'רצ\'יל צדק. גורילות הרים, ג\'ונגל פראי ואגם ויקטוריה."',
    rating: 8.7,
    popularity: 45,
    bestSeason: 'דצמבר - פברואר / יוני - ספטמבר',
    avgBudgetPerDay: 320,
    facts: {
      distanceFromIsrael: '3,600 ק"מ',
      flightTime: '7-9 שעות (לרוב עם עצירה)',
      size: '241,551 קמ"ר',
      language: 'אנגלית + לוגנדה (שפה ממשלתית)',
      currency: 'שילינג אוגנדי (UGX) — 1 ₪ ≈ 1,000 שילינג',
      capital: 'קמפאלה',
      population: '48 מיליון',
      visa: 'ויזה מקוונת מראש (East Africa Tourist Visa) — $100',
      timezone: 'UTC+3 (כמו ישראל בחורף)',
      religion: 'נצרות (85%), אסלאם (14%)',
      safety: '⭐⭐⭐ בטוח לתיירים עם מדריך, הימנע מגבול קונגו'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'Bwindi Impenetrable Forest — ג\'ונגל ראשוני שחצי מאוכלוסיית הגורילות גרה בו',
          'הרי רוונזורי (הרי הירח) — שרשרת הרים מכוסה שלג על הקו המשווה',
          'מפלי מורצ\'יסון — המפלים הגדולים בנילוס, 43 מ\' רוחב',
          'אגם ויקטוריה — האגם המתוק הגדול ביותר באפריקה',
          'Queen Elizabeth National Park — נוף ספארי קלאסי עם וולקנו',
          'Lake Bunyonyi — "אגם הציפורים הקטנות" בין 29 איים',
          'Ssese Islands באגם ויקטוריה — אי ירוק שקט ומבודד'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Mount Elgon — הר געש ענק עם מערות נתרן, 4 ימי טרק',
          'Rwenzori Mountains Trek — 7-9 ימים, שלג ומגלשי קרח בקו המשווה',
          'Sipi Falls Trail — 3 מפלים עם מסלול חצי-יום',
          'Bwindi Forest Walk — מסלול בג\'ונגל לפני מעקב גורילות',
          'Mgahinga Gorilla Park — הר הגעש Sabyinyo, 5-6 שעות'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'קמפאלה — עיר ראשות חיה עם פאבים ומוזיקה Afrobeat ו-Ugandan Hip-Hop',
          'Ggaba Beach Bar — קמפאלה, בר חוף על אגם ויקטוריה',
          'Cayenne Club קמפאלה — המועדון הכי פופולרי בעיר',
          'Luzira Beach — חוף מקומי עם מוזיקה חיה בסופי שבוע',
          'Nile Festival Jinja — מסיבות Rafting בנהר הנילוס'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Ssese Islands — חוף שקט על אגם ויקטוריה עם כבאנות',
          'Ggaba Beach קמפאלה — חוף עירוני על האגם, פופולרי',
          'Entebbe Beach — אזור נמל עם חופי אגם נעימים',
          'Lake Bunyonyi Shores — מים נקיים, שחייה מהיפה שבאוגנדה',
          'Napoleon Gulf — חוף רגוע ליד ג\'ינג\'ה, כניסה לנילוס'
        ]
      },
      attractions: {
        icon: '🗺️',
        items: [
          'Gorilla Trekking — לבלות שעה עם גורילות הרים — חוויה בלתי נשכחת',
          'Chimpanzee Tracking ב-Kibale Forest — 1,500 שימפנזים!',
          'Murchison Falls Boat Ride — שייט בנילוס עד המפלים עם קרושים',
          'Source of the Nile בג\'ינג\'ה — נקודת יציאת הנילוס מאגם ויקטוריה',
          'Uganda Equator Line — לעמוד על קו המשווה ולצלם',
          'Kabaka\'s Palace קמפאלה — ארמון מלך הבוגנדה',
          'Uganda Museum — ההיסטוריה של אוגנדה מהפרהיסטוריה'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Rolex — גלילת אומלט בצ\'פטי (לחם שטוח), ארוחת רחוב מלכותית (₪8-15)',
          'Matoke — בננות ירוקות מבושלות, לחם הלאומי (₪10-20)',
          'Nyama Choma — בשר צלוי על פחמים, מנה חגיגית (₪50-100)',
          'Groundnut Stew — תבשיל בוטנים עם עוף, טעים ועשיר (₪20-40)',
          'Posho — פולנטה תירס, מוגש עם כל דבר (₪5-10)',
          'Tilapia ya Kukaanga — דג טילאפיה מטוגן מאגם ויקטוריה (₪40-80)',
          'Mandazi — לחמניות מתוקות מטוגנות לארוחת בוקר (₪5-12)'
        ]
      },
      mustdo: {
        icon: '⭐',
        items: [
          'Gorilla Trekking ב-Bwindi — לשים $700 ולבלות שעה עם גורילות הרים ביער',
          'לגלוש בסירה (Rafting) על מפלי נהר הנילוס ליד ג\'ינג\'ה',
          'להפליג בסירה ב-Murchison Falls ולצפות בקרושים, פילים ואנפות',
          'לאכול Rolex על הרחוב בקמפאלה ולדבר עם המקומיים',
          'לשוחות באגם Bunyonyi בין 29 איים ירוקים'
        ]
      }
    },
    vocabulary: [
      { script: 'Oli otya?', pronunciation: 'אולי אוטיה?', meaning: 'מה שלומך?', emoji: '👋' },
      { script: 'Webale', pronunciation: 'וובאלה', meaning: 'תודה', emoji: '🙏' },
      { script: 'Emiwendo?', pronunciation: 'אמיוונדו?', meaning: 'כמה זה עולה?', emoji: '💰' },
      { script: 'Nkongerana', pronunciation: 'נקונגראנה', meaning: 'טעים!', emoji: '😋' },
      { script: 'Kyakula', pronunciation: 'קיאקולה', meaning: 'אוכל', emoji: '🍽️' },
      { script: 'Ebirerwa', pronunciation: 'אביררווא', meaning: 'שירותים', emoji: '🚻' },
      { script: 'Ntuuse!', pronunciation: 'נטוסה!', meaning: 'עזרה!', emoji: '🆘' }
    ],
    mapCoords: { lat: 1.37, lng: 32.29 }
  },

  japan: {
    id: 'japan',
    name: 'יפן',
    nameEn: 'Japan',
    region: 'asia',
    emoji: '🇯🇵',
    heroImage: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1600&q=80',
    quote: '"יפן היא הארץ היחידה בעולם שמצליחה להיות גם אלף שנים אחורה וגם עשרים שנים קדימה — בו-זמנית."',
    rating: 9.6,
    popularity: 88,
    bestSeason: 'מרץ - מאי (דובדבן) / ספטמבר - נובמבר',
    avgBudgetPerDay: 430,
    facts: {
      distanceFromIsrael: '9,200 ק"מ',
      flightTime: '12-14 שעות (עם עצירה)',
      size: '377,975 קמ"ר',
      language: 'יפנית',
      currency: 'ין יפני (JPY) — 1 ₪ ≈ 42 ין',
      capital: 'טוקיו',
      population: '125 מיליון',
      visa: 'פטור מויזה לישראלים עד 90 יום',
      timezone: 'UTC+9 (פלוס 7 מישראל בקיץ)',
      religion: 'שינטואיזם + בודהיזם (רובם שניהם בו-זמנית)',
      safety: '⭐⭐⭐⭐⭐ הכי בטוח בעולם — אפשר לשכוח כיס פתוח'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'הר פוג\'י — הר הגעש הסימטרי המפורסם, עולים ביולי-אוגוסט',
          'Arashiyama Bamboo Grove קיוטו — יער במבוק עם רוח מרשרשת',
          'Hakone — אגם Ashi עם השתקפות פוג\'י ומנשרי גפרית',
          'Nikko — מקדשים זהובים ביער ארז מסנוור',
          'Kii Peninsula Kumano — מסלולי צליינות ב-1,000 שנה ביערות',
          'Shirakawa-go — כפר תלוש-קרח עם בתי גגא מסורתיים',
          'Okinawa — אי טרופי עם חופים בצבעי קריבים'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Fuji Climbing (יולי-אוגוסט) — 7-10 שעות, זריחה מהחלום',
          'Nakasendo Way — מסלול Edo קדום בין קיוטו לנאגויה',
          'Kumano Kodo — מסלולי עולי-רגל עתיקים בחצי האי קיי',
          'Ishigaki Island — הרים קצרים עם חופים טרופיים',
          'Daisetsuzan National Park (הוקאידו) — הרים בתוליים בצפון',
          'Mount Kurama ליד קיוטו — יום-הליכה קצר עם מקדשים'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'Shibuya Crossing ולילה בטוקיו — Karaoke עד 6 בבוקר!',
          'Golden Gai שינג\'וקו — 200 בארים זעירים בשכונת אחת',
          'Osaka Dotonbori — הרחוב הכי חי ביפן עם שלטי ניאון',
          'Roppongi טוקיו — חיי לילה בינלאומיים ומסיבות',
          'Namba Osaka — מועדונים ומסעדות פתוחות כל הלילה',
          'Akihabara — ממלכת המשחקים, מנגה ואנימה, פתוח מאוחר'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Ishigaki & Miyako Islands — מים תכולים טרופיים עם אלמוגים',
          'Okinawa Main Island — חופים צלולים ותרבות הייחודית',
          'Kamakura Beach — חוף שעה מטוקיו ליד פסל הבודהה',
          'Noto Peninsula — חופי ים יפן פסגה מרהיבה ושקטה',
          'Izu Peninsula — חופים חמים שעתיים מטוקיו'
        ]
      },
      attractions: {
        icon: '🗺️',
        items: [
          'Fushimi Inari Taisha קיוטו — אלפי שערי Torii כתומים ביער',
          'Senso-ji טוקיו (אסאקוסה) — המקדש הבודהיסטי הקדום בטוקיו',
          'Hiroshima Peace Memorial — מוזיאון מצמרר ואדיר חשיבות',
          'Nara Deer Park — צבאים חופשיים מסתובבים עם התיירים',
          'Dotonbori אוסקה — אזור בידור עם אוכל ומסעדות 24/7',
          'Tokyo Skytree — 634 מ\', הנוף הגבוה ביפן',
          'Arashiyama Monkey Park — קופי-יפן נחמדים מעל קיוטו'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Ramen — מרק אטריות עם בשר ומרק עמוק, כל עיר גרסה שלה (₪35-70)',
          'Sushi מסועד-מסתובב (Kaiten) — 3-5 ₪ לצלחת ואיכות גבוהה (₪60-150)',
          'Takoyaki — כדורי תמנון מטוגנים, אוסקה קלאסי (₪20-40)',
          'Tonkatsu — שניצל חזיר יפני עם סלט כרוב (₪45-90)',
          'Okonomiyaki — פנקייק יפני מלוח עם כל דבר (₪35-70)',
          'Yakitori — שיפודי עוף גריל בירה ביזאקאיה (₪8-20 לשיפוד)',
          'Matcha everything — גלידה, מוצ\'י, קיטקאט מאצ\'ה (₪15-40)'
        ]
      },
      mustdo: {
        icon: '⭐',
        items: [
          'לעלות על הר פוג\'י ולראות זריחה מפסגה — חוויה שלא נשכחת',
          'לבקר ב-Fushimi Inari ב-5 בבוקר לפני כל התיירים',
          'לאכול Ramen אמיתי בחנות קטנה עם 8 מקומות ישיבה',
          'לחוות Karaoke יפני עם חדר פרטי ולשיר עד 4 בבוקר',
          'להיכנס ל-Konbini (מינימרקט) ולטעום כל דבר — גם המוכן שם מדהים'
        ]
      }
    },
    vocabulary: [
      { script: 'こんにちは', pronunciation: 'קוניצ\'יווה', meaning: 'שלום / צהריים טובים', emoji: '👋' },
      { script: 'ありがとう', pronunciation: 'אריגאטו', meaning: 'תודה', emoji: '🙏' },
      { script: 'いくらですか', pronunciation: 'איקורה דסקה?', meaning: 'כמה זה עולה?', emoji: '💰' },
      { script: 'おいしい', pronunciation: 'אוישיי', meaning: 'טעים!', emoji: '😋' },
      { script: 'たかい', pronunciation: 'טאקאי', meaning: 'יקר', emoji: '😱' },
      { script: 'トイレ', pronunciation: 'טוירה', meaning: 'שירותים', emoji: '🚻' },
      { script: 'すみません', pronunciation: 'סומימאסן', meaning: 'סליחה / התנצלות', emoji: '🙇' },
      { script: 'かんぱい', pronunciation: 'קאנפאי!', meaning: 'לחיים!', emoji: '🍻' }
    ],
    mapCoords: { lat: 36.20, lng: 138.25 }
  },

  bolivia: {
    id: 'bolivia',
    name: 'בוליביה',
    nameEn: 'Bolivia',
    region: 'south-america',
    emoji: '🇧🇴',
    heroImage: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1600&q=80',
    quote: '"בוליביה היא כוכב לכת אחר — שמיים קרובים יותר, כוכבים גדולים יותר, ומלח ריצפה עד האופק."',
    rating: 9.1,
    popularity: 62,
    bestSeason: 'מאי - אוקטובר (עונה יבשה)',
    avgBudgetPerDay: 175,
    facts: {
      distanceFromIsrael: '11,500 ק"מ',
      flightTime: '16-20 שעות (מספר עצירות)',
      size: '1,098,581 קמ"ר',
      language: 'ספרדית + קצ\'ואה + איימרה',
      currency: 'בוליביאנו (BOB) — 1 ₪ ≈ 2.8 בוליביאנו',
      capital: 'סוקרה (רשמית), לה פז (ממשלתית)',
      population: '12 מיליון',
      visa: 'פטור מויזה לישראלים עד 90 יום',
      timezone: 'UTC-4',
      religion: 'קתוליות (75%) + אמונות אינדיאניות',
      safety: '⭐⭐⭐ זהירות מגובה — לה פז היא 3,600 מ\' מעל פני הים'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'Salar de Uyuni — מלחה הגדולה בעולם, 10,582 קמ"ר של מלח לבן',
          'Laguna Colorada — אגם אדום עם להקות פלמינגו ורוד',
          'Valle de la Luna לה פז — נוף ירח בבולייה בלב הרי האנדים',
          'Potosí & Cerro Rico — עיר כסף עתיקה ב-4,090 מ\' גובה',
          'Yungas Road (Death Road) — כביש הענן המסוכן ביותר בעולם',
          'Laguna Verde — אגם ירוק עם הר Licancabur בגבול צ\'ילה',
          'Amazon Basin בצ\'ורה — ג\'ונגל בוליביאני עם בעלי חיים'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Huayna Potosí Trek — 6,088 מ\', ניתן להגיע ב-2 ימים עם מדריך',
          'Choro Trail — מסלול קדום 3 ימים מהאנדים לג\'ונגל',
          'Isla del Sol, Lake Titicaca — הליכה בין הכפרים האינקיים',
          'Death Road Cycling — לרדת 64 ק"מ בגלגל הרים מ-4,650 מ\'',
          'Torotoro National Park — דינוזאורים ומערות'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'Carnaval de Oruro — פסטיבל מפורסם עולמי בפברואר עם תחפושות',
          'Sopocachi ולה פז — שכונת בארים ומסעדות ססגוניות',
          'Route 36 לה פז — ה"בר" המיוחד האלמוני (שאל מקומיים)',
          'Sucre Nightlife — עיר הסטודנטים עם בארים ופאבים קטנים',
          'בוייה בזמן Inti Raymi — חג השמש בסנטיאגו'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'אגם טיטיקאקה — הגבוה בעולם, שחייה בתוך קהילות אינקיות',
          'Isla del Sol — "איסלה דל סול" בטיטיקאקה, חוף שקט ועצמאי',
          'Rurrenabaque Amazon Beaches — חוף נהר באמזון הבוליביאני',
          'Copacabana Lake Town — עיירת חוף על טיטיקאקה שווה ביקור',
          'San Ignacio de Mojos — חוף נהר Mamoré בג\'ונגל'
        ]
      },
      attractions: {
        icon: '🗺️',
        items: [
          'Salar de Uyuni Salt Flats — תמונות פרספקטיבה מטורפות עם שמיים',
          'Witches\' Market (Mercado de las Brujas) לה פז — מכשפות ואמולטים',
          'Tiwanaku Ruins — עיר עתיקה לפני האינקה, 1,500 שנה',
          'Coroico — כפר ב-Yungas שעה מלה פז, מנוחה מושלמת',
          'Mines of Cerro Rico, Potosí — להיכנס למכרה כסף פעיל',
          'Jesuit Missions, Santa Cruz — מורשת אונסק\'ו בג\'ונגל',
          'Madidi National Park — הפארק הביולוגי המגוון ביותר בעולם'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Salteña — מאפה בוקר בוליביאני עם בשר ותפוחי אדמה (₪5-12)',
          'Silpancho — שניצל דק על אורז עם תפוחי אדמה וביצה (₪20-40)',
          'Sopa de Maní — מרק בוטנים בוליביאני חם ועשיר (₪15-30)',
          'Chicha — בירה תירס מסורתית, צבע לבן, לשתות בזהירות (₪8-15)',
          'Anticuchos — שיפוד לב בקר על גחלים, מנת רחוב קלאסית (₪10-20)',
          'Pique Macho — בשר, נקניק, ביצה, ג\'לפניו על צ\'יפס (₪35-60)',
          'Api Morado — משקה תירס סגול חם עם קינמון ולימון (₪5-10)'
        ]
      },
      mustdo: {
        icon: '⭐',
        items: [
          'לצלם בסאלאר דה אויוני עם שמיים כראי — התמונות הכי יפות בחייך',
          'לנסוע ב-Death Road בגלגל הרים — האדרנלין הגדול ביותר',
          'לישון בבית מלח (Salt Hotel) על אגם המלח',
          'לטפס ל-Huayna Potosí עם מדריך — פסגה מתחת ל-6,100 מ\'',
          'לשתות תה קוקה ב-4,000 מ\' נגד מחלת הגובה'
        ]
      }
    },
    vocabulary: [
      { script: 'Hola', pronunciation: 'אולה', meaning: 'שלום', emoji: '👋' },
      { script: 'Gracias', pronunciation: 'גראסיאס', meaning: 'תודה', emoji: '🙏' },
      { script: '¿Cuánto cuesta?', pronunciation: 'קואנטו קואסטה?', meaning: 'כמה זה עולה?', emoji: '💰' },
      { script: 'Qué rico', pronunciation: 'קה ריקו', meaning: 'כמה טעים!', emoji: '😋' },
      { script: 'Muy caro', pronunciation: 'מואי קארו', meaning: 'יקר מאוד', emoji: '😱' },
      { script: 'Baño', pronunciation: 'באניו', meaning: 'שירותים', emoji: '🚻' },
      { script: 'Soroche', pronunciation: 'סורוצ\'ה', meaning: 'מחלת גובה', emoji: '😵' },
      { script: 'Salud!', pronunciation: 'סאלוד!', meaning: 'לחיים!', emoji: '🍻' }
    ],
    mapCoords: { lat: -16.29, lng: -63.59 }
  },

  mexico: {
    id: 'mexico',
    name: 'מקסיקו',
    nameEn: 'Mexico',
    region: 'north-america',
    emoji: '🇲🇽',
    heroImage: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1600&q=80',
    quote: '"מקסיקו היא בלתי ניתנת להסבר — צבעים, טעמים, עתיקות ומוזיקה שנכנסת ישר לדם."',
    rating: 9.3,
    popularity: 85,
    bestSeason: 'דצמבר - אפריל',
    avgBudgetPerDay: 330,
    facts: {
      distanceFromIsrael: '11,000 ק"מ',
      flightTime: '15-18 שעות (עם עצירה)',
      size: '1,964,375 קמ"ר',
      language: 'ספרדית (68 שפות ילידים נוספות)',
      currency: 'פסו מקסיקני (MXN) — 1 ₪ ≈ 6.5 פסו',
      capital: 'מקסיקו סיטי',
      population: '128 מיליון',
      visa: 'פטור מויזה לישראלים עד 180 יום',
      timezone: 'UTC-6 (מרכז) עד UTC-7 (מערב)',
      religion: 'קתוליות (77%) + אמונות אינדיאניות',
      safety: '⭐⭐⭐ קנקון ומרכז תיירותי בטוחים, הימנע מערים מסוימות'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'Cenotes יוקטן — בריכות שחייה תת-קרקעיות של המאיה מרהיבות',
          'Copper Canyon (Barranca del Cobre) — ג\'יג\'ורמה מ-Canyon קולורדו',
          'Sumidero Canyon צ\'יאפס — גורג\'ים מהמרשימים בעולם',
          'Hierve el Agua — מפלי אבן מינרלים עם בריכות על שפת הצוק',
          'Palenque — מקדשי מאיה ביער גשם, אחד מהיפים שבמקסיקו',
          'Baja California — קו חוף ענק בין ים קורטס לאוקיאנוס השקט',
          'Volcán Popocatépetl — הר געש פעיל מעל מקסיקו סיטי'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Iztaccíhuatl Trek — 5,230 מ\', ב-2 ימים עם מדריך',
          'Cañón del Cobre — Chepe Express + הליכות על שפת הג\'יג\'ורמה',
          'Puebla to Oaxaca Trails — בין כפרים צבעוניים בהרי סיירה',
          'Sumidero Canyon Hike — ירידה לגורג\' עם מדריך',
          'Tulum Ruins Coastal Walk — מקדשי מאיה על הים הקריבי'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'Cancún Hotel Zone — party capital של קריבי עם Beach Clubs',
          'Mexico City Condesa & Roma — ברים קוקטייל ומועדונים מודרניים',
          'Playa del Carmen 5th Avenue — רחוב מסיבות ופאבים כל הלילה',
          'Tulum Beach Clubs — מסיבות Boho-Chic על חוף הים',
          'Guadalajara Centro Histórico — בארים Tequila מסורתיים וחיים',
          'Oaxaca Mezcalerías — טעימות מסקל עם מוזיקה חיה'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Tulum — חוף עם מקדשי מאיה ברקע, הכי פוטוגני במקסיקו',
          'Playa del Carmen — חוף מסחרי עם כל הנוחות + Cenotes קרובים',
          'Isla Mujeres — אי קטן עם חוף Playa Norte, פרדיז מיני',
          'Puerto Vallarta — חוף מרשים בין ג\'ונגל לים',
          'Sayulita — כפר גלשנים Bohemian ב-Riviera Nayarit',
          'Cabo San Lucas — חופים דרמטיים עם סלעי קמרון בגבול הים'
        ]
      },
      attractions: {
        icon: '🗺️',
        items: [
          'Teotihuacán — פירמידות הענק שעה ממקסיקו סיטי, עולה על השמש',
          'Chichén Itzá — מקדש המאיה הידוע ביותר, אחד מ-7 פלאי העולם',
          'Palacio de Bellas Artes מקסיקו סיטי — ציורי קיר של דייגו ריברה',
          'Zócalo Mexico City — הכיכר הגדולה בעולם עם קתדרלה',
          'Monte Albán אואחאקה — עיר הזאפוטקים על הר מעל העמק',
          'Palenque Mayan Ruins — מקדשים ביער גשם, מרשים יותר מ-Chichén',
          'Lucha Libre מקסיקו סיטי — היאבקות מקסיקנית מסורתית עם מסכות'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Tacos al Pastor — חזיר בסלסה עם אננס על טורטייה, נשמת המקסיקו (₪8-15)',
          'Guacamole טרי — אבוקדו מוצק עם עגבנייה וג\'לפניו (₪20-40)',
          'Mole Negro אואחאקה — רוטב שוקולד-צ\'ילי ב-30 מרכיבים על עוף (₪50-90)',
          'Elote — תירס על מקל עם מיונז, גבינה ואיחוי, מנת רחוב (₪10-20)',
          'Cochinita Pibil — חזיר שמכינים 12 שעות ביוקטן (₪30-60)',
          'Chiles en Nogada — פלפלים ממולאים עם רוטב אגוזי מלך וזרעי רימון (₪45-80)',
          'Mezcal Shot — לשתות עם מלח ותפוז, לא לימון! (₪15-30)'
        ]
      },
      mustdo: {
        icon: '⭐',
        items: [
          'לעלות על פירמידת השמש בטאוטיאוואקן לזריחה עם 500 מדרגות',
          'לשחות ב-Cenote טבעי — בריכה תת-קרקעית של המאיה עם אור ירוק',
          'לאכול Tacos al Pastor ב-5 בבוקר בשוק הלילה של מקסיקו סיטי',
          'לסייר ב-Chichén Itzá ב-7 בבוקר לפני החום והקהל',
          'לטעום Mezcal אמיתי עם מייסטרו ב-Oaxaca ולהבין את ההבדל מטקילה'
        ]
      }
    },
    vocabulary: [
      { script: 'Hola', pronunciation: 'אולה', meaning: 'שלום', emoji: '👋' },
      { script: 'Gracias', pronunciation: 'גראסיאס', meaning: 'תודה', emoji: '🙏' },
      { script: '¿Cuánto cuesta?', pronunciation: 'קואנטו קואסטה?', meaning: 'כמה זה עולה?', emoji: '💰' },
      { script: '¡Está rico!', pronunciation: 'אסטה ריקו!', meaning: 'זה טעים!', emoji: '😋' },
      { script: 'Muy caro', pronunciation: 'מואי קארו', meaning: 'יקר מאוד', emoji: '😱' },
      { script: 'Baño', pronunciation: 'באניו', meaning: 'שירותים', emoji: '🚻' },
      { script: '¡Salud!', pronunciation: 'סאלוד!', meaning: 'לחיים!', emoji: '🍻' },
      { script: '¿Dónde está...?', pronunciation: 'דונדה אסטה...?', meaning: 'איפה נמצא...?', emoji: '🗺️' }
    ],
    mapCoords: { lat: 23.63, lng: -102.55 }
  }

};

var tempBudget1 = {
  cambodia: { name: 'קמבודיה', emoji: '🇰🇭', accommodation: { low: 35, mid: 100, high: 280 }, food: { low: 40, mid: 90, high: 200 }, transport: { low: 25, mid: 60, high: 150 }, activities: { low: 60, mid: 150, high: 400 }, flights: 3200, visa: 130, insurancePer30: 280, note: 'אנגקור וואט + חופים + Pub Street = טיול זול בסגנון גדול!' },
  brazil:    { name: 'ברזיל',   emoji: '🇧🇷', accommodation: { low: 100, mid: 250, high: 600 }, food: { low: 70, mid: 180, high: 400 }, transport: { low: 60, mid: 150, high: 400 }, activities: { low: 80, mid: 200, high: 600 }, flights: 5800, visa: 0,   insurancePer30: 420, note: 'קרנבל + אמזון + איפנמה = ברזיל אמיתית!' },
  uganda:    { name: 'אוגנדה',  emoji: '🇺🇬', accommodation: { low: 80, mid: 220, high: 600 },  food: { low: 50, mid: 130, high: 300 }, transport: { low: 50, mid: 130, high: 350 }, activities: { low: 200, mid: 500, high: 1200 }, flights: 2400, visa: 370, insurancePer30: 380, note: 'Gorilla Trekking $700 — שווה כל שקל!' },
  japan:     { name: 'יפן',     emoji: '🇯🇵', accommodation: { low: 120, mid: 300, high: 800 }, food: { low: 80, mid: 200, high: 500 }, transport: { low: 80, mid: 200, high: 500 }, activities: { low: 60, mid: 150, high: 400 }, flights: 4200, visa: 0,   insurancePer30: 480, note: 'יקר יחסית אבל JR Pass חוסך הרבה!' },
  bolivia:   { name: 'בוליביה', emoji: '🇧🇴', accommodation: { low: 40, mid: 100, high: 280 },  food: { low: 30, mid: 80, high: 200 },  transport: { low: 30, mid: 80, high: 200 },  activities: { low: 60, mid: 150, high: 400 }, flights: 6200, visa: 0,   insurancePer30: 350, note: 'הזול ביותר בדרום אמריקה! סאלאר + Death Road' },
  mexico:    { name: 'מקסיקו', emoji: '🇲🇽',  accommodation: { low: 90, mid: 230, high: 600 },  food: { low: 60, mid: 150, high: 380 }, transport: { low: 50, mid: 130, high: 350 }, activities: { low: 60, mid: 150, high: 400 }, flights: 5000, visa: 0,   insurancePer30: 380, note: 'Cenotes + פירמידות + Tacos = מקסיקו!' }
};
