var destinations = {
  thailand: {
    id: 'thailand',
    name: 'תאילנד',
    nameEn: 'Thailand',
    region: 'asia',
    emoji: '🇹🇭',
    heroImage: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1600&q=80',
    quote: '"תאילנד לא נכנסת לך לראש — היא נכנסת ישר לנשמה. כל יום שם הוא הרפתקה חדשה."',
    rating: 9.8,
    popularity: 98,
    bestSeason: 'נובמבר - מרץ',
    avgBudgetPerDay: 220,
    facts: {
      distanceFromIsrael: '6,200 ק"מ',
      flightTime: '9-11 שעות (עם עצירה)',
      size: '513,120 קמ"ר',
      language: 'תאילנדית',
      currency: 'באט תאילנדי (THB) - 1 ₪ ≈ 10 באט',
      capital: 'בנגקוק',
      population: '70 מיליון',
      visa: 'ויזה חינם עד 30 יום (ניתן להאריך)',
      timezone: 'UTC+7 (פלוס 5 מישראל בקיץ)',
      religion: 'בודהיזם (95%)',
      safety: '⭐⭐⭐⭐ בטוח מאוד'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'הר דוי אינתנון - הגבוה ביותר בתאילנד (2,565 מ\')',
          'דוי סותפ - המקדש על ההר מעל צ\'יאנג מאי',
          'ואנג ויאנג - נהר צבאות עם צוקים ירוקים (לאוס)',
          'ג\'ונגלי הצפון - ג\'ינגל טרקינג מסביב לצ\'יאנג ראי',
          'כביש המתפתל בין פאי לצ\'יאנג מאי (762 פניות!)',
          'אגם צ\'יאנג ראי - שקיעות אגדיות',
          'טבע ג\'ימי ריוור ליד קאנצ\'אנבורי'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'מסלול Doi Inthanon - מקדשי התאומים ושביל הטבע',
          'Pai Canyon - גאיון מרהיב ב-10 דקות מפאי',
          'טרקינג בג\'ונגל בצ\'יאנג ראי - מומלץ עם מדריך',
          'Three Pagodas Pass - גבול תאילנד-מיאנמר',
          'Khao Sok National Park - ג\'ונגל גשם עם אגם',
          'האיים של קרבי - Railay Beach בסירה',
          'Ko Tao - צלילה וסנורקלינג מעולים'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'Full Moon Party בקוה פנגאן - מסיבת חוף ל-30,000 איש!',
          'Half Moon Party & Black Moon Party - בשבוע שאחרי',
          'RCA (Royal City Avenue) בנגקוק - רחוב מועדונים',
          'Khaosan Road - אייקוני, עם ישראלים מכל הגלובוס',
          'Bangla Road בפאטאיה - ליל המפורסמים',
          'Green Mango & Ark Bar בקוה סמוי',
          'Unity Backpackers בצ\'יאנג מאי - פאבים ומסיבות'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'קוה ליפה - המים הצלולים ביותר בתאילנד 🏆',
          'קוה לנטה - שקט, יפה, פחות טוריסטי',
          'Railay Beach קרבי - רק בסירה, מגנטי',
          'קוה טאו - גן עדן של צוללנים',
          'Maya Bay (The Beach) - מפרסמות לאונרדו',
          'Hua Hin - חוף קרוב לבנגקוק',
          'קוה פנגאן - חוף הארין (הבית של הפולמון)'
        ]
      },
      attractions: {
        icon: '🎯',
        items: [
          'Wat Pho - בודהה השוכב הגדול בבנגקוק',
          'Grand Palace בנגקוק - חובה!',
          'White Temple (Wat Rong Khun) בצ\'יאנג ראי',
          'Blue Temple - פחות ידוע, מדהים לתמונות',
          'Tiger Temple & Elephant Sanctuary - Chiang Mai Ethical',
          'Floating Market (Damnoen Saduak)',
          'Ayutthaya - עיר העתיקות ב-1.5 שעות מבנגקוק',
          'Muay Thai Show ב-Bangkok'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Pad Thai - 40-80 באט ברחוב 🍜',
          'Green & Red Curry - 60-100 באט',
          'Mango Sticky Rice - קינוח אלוהי 30-50 באט',
          'Tom Yam - מרק חריף וחמוץ',
          'Som Tam - סלט פפאיה ירוקה + כוסברה',
          'Khao Pad - אורז מטוגן בכל גרסה',
          'Roti + Banana - ארוחת בוקר ברחוב 20 באט',
          'Smoothie Bowls ב-Khaosan - 60 באט'
        ]
      },
      mustDo: {
        icon: '⭐',
        items: [
          'Full Moon Party בקוה פנגאן - פעם אחת בחיים!',
          'ספא תאילנדי אמיתי - 200-400 באט לשעה',
          'לקחת קורס בישול תאילנדי (30-40$)',
          'נסיעה על טוק-טוק בבנגקוק',
          'טיפול בפילים ב-Elephant Nature Park (אתי!)',
          'שיעור Muay Thai - 300-500 באט',
          'ארוחה ב-Chatuchak Weekend Market',
          'כבישים 1006 ו-1096 במוטו - המסע האגדי'
        ]
      }
    },
    vocabulary: [
      { script: 'สวัสดี', pronunciation: 'סַוַּאדִי קַאפ/קָא', meaning: 'שלום / להתראות', emoji: '👋' },
      { script: 'ขอบคุณ', pronunciation: 'קוֹפ קוּן קַאפ/קָא', meaning: 'תודה רבה', emoji: '🙏' },
      { script: 'เท่าไหร่', pronunciation: 'תָּאוּרַאי', meaning: 'כמה זה עולה?', emoji: '💰' },
      { script: 'แพงมาก', pronunciation: 'פֵּנְג מָאק', meaning: 'יקר מאוד', emoji: '😱' },
      { script: 'อร่อย', pronunciation: 'אָרוֹי', meaning: 'טעים!', emoji: '😋' },
      { script: 'ไม่เป็นไร', pronunciation: 'מַאי פֶּן רַאי', meaning: 'לא נורא / בסדר', emoji: '😊' },
      { script: 'ห้องน้ำ', pronunciation: 'הוֹנְג נָאם', meaning: 'שירותים', emoji: '🚻' },
      { script: 'เผ็ด', pronunciation: 'פֶּד', meaning: 'חריף', emoji: '🌶️' },
      { script: 'ไม่เผ็ด', pronunciation: 'מַאי פֶּד', meaning: 'לא חריף בבקשה', emoji: '🙏' },
      { script: 'ช่วยด้วย', pronunciation: 'ג\'וּאי ד\'וּאי', meaning: 'עזרה! / SOS', emoji: '🆘' }
    ],
    mapCoords: { lat: 15.87, lng: 100.99 },
    instagramTag: '#thaistagram',
    israeliCommunity: 'גדולה מאוד - יש ישראלים בכל פינה!'
  },

  vietnam: {
    id: 'vietnam',
    name: 'וייטנאם',
    nameEn: 'Vietnam',
    region: 'asia',
    emoji: '🇻🇳',
    heroImage: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=1600&q=80',
    quote: '"וייטנאם היא מסע בזמן — מהמגדלים הזכוכיניים של האנוי ועד לשדות האורז של סאפא."',
    rating: 9.5,
    popularity: 90,
    bestSeason: 'פברואר - אפריל',
    avgBudgetPerDay: 180,
    facts: {
      distanceFromIsrael: '7,000 ק"מ',
      flightTime: '10-13 שעות (עם עצירה)',
      size: '331,212 קמ"ר',
      language: 'וייטנאמית',
      currency: 'דונג (VND) - 1 ₪ ≈ 7,500 דונג',
      capital: 'האנוי',
      population: '97 מיליון',
      visa: 'ויזה אלקטרונית מקוונת (E-Visa) - $25 ל-90 יום',
      timezone: 'UTC+7',
      religion: 'בודהיזם + קתוליות',
      safety: '⭐⭐⭐⭐ בטוח מאוד, זהירות מגנבות'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'מפרץ האלונג - אחד מפלאי הטבע של העולם 🌊',
          'עמקי שדות האורז בסאפא',
          'נינ\'ה בינה - "האלונג על הקרקע"',
          'Phong Nha Caves - המערות הגדולות בעולם',
          'Mekong Delta - מדהים עם סירות קטנות',
          'שדות חרדל בצפון וייטנאם (ינואר-פברואר)',
          'Đèo Hải Vân - מסלול רכיבה אגדי על ים'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Sapa Trekking - שלושה ימים בכפרי מיעוטים',
          'Fansipan Peak - הפסגה הגבוהה של אינדוצ\'ינה (3,143 מ\')',
          'Phong Nha - Cave of Winds Trek',
          'Cat Tien National Park - ג\'ונגל + ציפורים',
          'Ba Vi National Park - קרוב לאנוי',
          'Cuc Phuong - פרייל ראשון וג\'ונגל מקורי',
          'Marble Mountains בדה-נאנג'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'Ho Chi Minh City (Saigon) - Bui Vien Walking Street',
          'Hanoi Beer Street - Bia Ha Noi 7,000 VND לבקבוק!',
          'Hội An - שלל פאבים על הנהר בלילה',
          'Da Nang - The Party City של וייטנאם',
          'Nha Trang - Mud Bath + Beach Clubs',
          'Sky Bar בסייגון - צ\'ין עם ויסקי וויו'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Phú Quốc - האי הגדול, מים טורקיז',
          'Đà Nẵng - My Khe Beach, חוף נקי וארוך',
          'Hội An - An Bàng Beach בכ-10 דקות מהעיר',
          'Nha Trang - חוף עירוני עם הרבה אטמוספרה',
          'Mũi Né - "ספורט גלים" בדיונות',
          'Con Dao Islands - אי בתולי מהמם'
        ]
      },
      attractions: {
        icon: '🎯',
        items: [
          'הרובע ההיסטורי של הוי-אן (מורשת אונסק\'ו)',
          'מקדשי האנוי - Văn Miếu',
          'Cu Chi Tunnels ליד סייגון - מנהרות הגרילה',
          'Hue Imperial City - עיר הקיסרים',
          'Marble Mountains בדה-נאנג',
          'Golden Bridge - גשר ידיים ענקי',
          'Ha Long Bay Cruise - לילה על הסירה'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Phở - מרק אטריות הלאומי, 30,000-50,000 VND',
          'Bánh Mì - כריך בגט וייטנאמי, 15,000-25,000 VND',
          'Bún Bò Huế - מרק בשר חריף מהוה',
          'Cao Lầu - פסטה הוי-אן ייחודית',
          'Phở Cuốn - גלילות אורז טריות',
          'Cà Phê Trứng - קפה עם חלמון ביצה (!!!)',
          'Bia Hơi - בירה טרייה 5-10 אלף דונג!'
        ]
      },
      mustDo: {
        icon: '⭐',
        items: [
          'שייט לילה במפרץ האלונג עם קיאק',
          'שכור מוטו וסע מצפון לדרום (3-4 שבועות)',
          'ארוחת לילה בשוק רחוב בהוי-אן',
          'שיעור בישול וייטנאמי בהוי-אן',
          'לאנסטר טרק בסאפא עם מדריך מקומי',
          'כוס Egg Coffee בהאנוי בבוקר',
          'הכנסייה הוורודה בסייגון - IG GOLD'
        ]
      }
    },
    vocabulary: [
      { script: 'Xin chào', pronunciation: 'סִין צ\'ָאו', meaning: 'שלום', emoji: '👋' },
      { script: 'Cảm ơn', pronunciation: 'קָאם אָן', meaning: 'תודה', emoji: '🙏' },
      { script: 'Bao nhiêu tiền?', pronunciation: 'בָּאו נְיֵאוּ טִין?', meaning: 'כמה זה עולה?', emoji: '💰' },
      { script: 'Ngon', pronunciation: 'נְגוֹן', meaning: 'טעים!', emoji: '😋' },
      { script: 'Không cay', pronunciation: 'קוֹנְג קַאי', meaning: 'לא חריף', emoji: '🙏' },
      { script: 'Nhà vệ sinh', pronunciation: 'נְיָה וֶה שִׁין', meaning: 'שירותים', emoji: '🚻' },
      { script: 'Đắt lắm', pronunciation: 'דַּט לָם', meaning: 'יקר מדי!', emoji: '😤' },
      { script: 'Một, Hai, Ba, Yo!', pronunciation: 'מוֹט, הַאי, בָּה, יוֹ!', meaning: 'לחיים! (הטוסט הוייטנאמי)', emoji: '🍻' }
    ],
    mapCoords: { lat: 14.06, lng: 108.27 }
  },

  indonesia: {
    id: 'indonesia',
    name: 'אינדונזיה / באלי',
    nameEn: 'Indonesia / Bali',
    region: 'asia',
    emoji: '🇮🇩',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80',
    quote: '"באלי היא לא רק מקום — היא מצב נפשי. יום אחד שם שווה שבוע בכל מקום אחר."',
    rating: 9.7,
    popularity: 95,
    bestSeason: 'אפריל - אוקטובר',
    avgBudgetPerDay: 250,
    facts: {
      distanceFromIsrael: '7,800 ק"מ',
      flightTime: '11-14 שעות',
      size: '5,780 קמ"ר (באלי בלבד)',
      language: 'אינדונזית + בלינזית בבאלי',
      currency: 'רופיה (IDR) - 1 ₪ ≈ 4,400 רופיה',
      capital: 'דנפסר (באלי)',
      population: '4.3 מיליון (באלי)',
      visa: 'ויזה חינם 30 יום עם אפשרות הארכה',
      timezone: 'UTC+8',
      religion: 'הינדואיזם בלינזי (ייחודי!)',
      safety: '⭐⭐⭐⭐ בטוח, שים לב לסקוטר'
    },
    categories: {
      scenery: {
        icon: '🌋',
        items: [
          'טגנאלאנג - מדרגות אורז האייקוניות 📸',
          'הר בטור (Batur) - טיפוס לזריחה מהאגמה',
          'הר אגונג (Agung) - הר הגעש הפעיל',
          'Sekumpul Waterfall - מפל מדהים ביערות',
          'Gates of Heaven (Pura Luhur Lempuyang)',
          'אגם Buyan & Tamblingan - שניהם בהר',
          'Ubud Sacred Monkey Forest'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Mt Batur Sunrise Trek - 4 שעות, ויו מטורף',
          'Mt Agung - 8-10 שעות, נוף עד ג\'אווה',
          'Munduk Waterfall Trail',
          'Campuhan Ridge Walk - סוף אחה"צ באובוד',
          'Nusa Penida Trek - Kelingking Beach',
          'Lombok: Rinjani Trek - 3 ימים, 3,726 מ\''
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'Seminyak Beach Clubs - Ku De Ta, Potato Head',
          'Kuta - אזור המטיילים + BarBQ Beach',
          'Canggu - Echo Beach + Pererenan',
          'La Favela בסמיניאק - מסיבות על-נטורל',
          'Sky Garden Kuta - 5 קומות + מסיבה כל לילה',
          'Finns Beach Club - אייקוני ועממי'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Nusa Dua - חוף לבן שקט ומרשים',
          'Padang Padang - גלשן + חוף מגנטי',
          'Seminyak - שקיעות + Beach Clubs',
          'Blue Lagoon Amed - צלילה + חוף שקט',
          'Nusa Penida - Broken Beach + Angel Billabong',
          'Gili Trawangan - אין רכבים! רק סוסים!'
        ]
      },
      attractions: {
        icon: '🎯',
        items: [
          'Tanah Lot - מקדש ים בשקיעה',
          'Uluwatu Temple + Kecak Fire Dance',
          'Tirta Empul - קפיצה למעיין הקדוש',
          'Rice Terraces בטגנאלאנג - עם ארוחת בוקר',
          'Ubud Arts Market + Ubud Palace',
          'Water Palace Tirtagangga',
          'Bali Swing - נדנדה מעל הג\'ונגל'
        ]
      },
      food: {
        icon: '🍢',
        items: [
          'Nasi Goreng - אורז מטוגן לאומי, 20-40K רופיה',
          'Babi Guling - חזיר צלוי (BEWARE: חזיר!)',
          'Mie Goreng - נודלס מטוגנים',
          'Sate Lilit - שיפוד ייחודי לבאלי',
          'Lawar - מנה מסורתית בלינזית',
          'Bubur Injin - פודינג אורז שחור לקינוח',
          'Jamu - שיקוי צמחים מסורתי לבריאות'
        ]
      },
      mustDo: {
        icon: '⭐',
        items: [
          'זריחה על הר בטור - HL של הטיול',
          'Gates of Heaven ב-Lempuyang - תמונת הפוסטר',
          'יום ב-Nusa Penida (Kelingking+)',
          'Tanah Lot בשקיעה',
          'Ubud Cooking Class + שוק בוקר',
          'לינה ב-Canggu עם ספרינג רול בבוקר',
          'Gili Trawangan - יומיים של חוף + צלילה'
        ]
      }
    },
    vocabulary: [
      { script: 'Selamat pagi', pronunciation: 'סְלָמַט פָּגִי', meaning: 'בוקר טוב', emoji: '☀️' },
      { script: 'Terima kasih', pronunciation: 'טְרִימָה קָסִיה', meaning: 'תודה', emoji: '🙏' },
      { script: 'Berapa harganya?', pronunciation: 'בְּרָפָה הַרְגָנָה?', meaning: 'כמה זה עולה?', emoji: '💰' },
      { script: 'Enak!', pronunciation: 'אֶנַק!', meaning: 'טעים!', emoji: '😋' },
      { script: 'Mahal', pronunciation: 'מָהַל', meaning: 'יקר', emoji: '💸' },
      { script: 'Murah', pronunciation: 'מוּרָה', meaning: 'זול', emoji: '🤑' },
      { script: 'Toilet', pronunciation: 'טוֹיָאלֶת', meaning: 'שירותים', emoji: '🚻' },
      { script: 'Om Swastiastu', pronunciation: 'אוּם סְוַסְטְיַאסְטוּ', meaning: 'ברכה בלינזית קדושה', emoji: '🙏' }
    ],
    mapCoords: { lat: -8.34, lng: 115.09 }
  },

  peru: {
    id: 'peru',
    name: 'פרו',
    nameEn: 'Peru',
    region: 'southamerica',
    emoji: '🇵🇪',
    heroImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1600&q=80',
    quote: '"פרו שוברת לך את הנשמה ומרפאה אותה שוב — מאצ\'ו פיצ\'ו הוא רק ההתחלה."',
    rating: 9.9,
    popularity: 96,
    bestSeason: 'מאי - ספטמבר (עונת יובש)',
    avgBudgetPerDay: 280,
    facts: {
      distanceFromIsrael: '13,000 ק"מ',
      flightTime: '17-22 שעות (עצירות)',
      size: '1,285,216 קמ"ר',
      language: 'ספרדית + קצ\'ואה',
      currency: 'סול (PEN) - 1 ₪ ≈ 1.4 סול',
      capital: 'לימה',
      population: '33 מיליון',
      visa: 'ללא ויזה עד 183 יום',
      timezone: 'UTC-5',
      religion: 'קתוליות (95%)',
      safety: '⭐⭐⭐ שים לב בלימה ובלילה'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'מאצ\'ו פיצ\'ו - פלא עולם ולמה אתה בטיול 🏆',
          'Rainbow Mountain (Vinicunca) - 7 צבעים טבעיים',
          'ציר המלח - Maras Moray',
          'אמאזונס - ג\'ונגל ממשי ב-Puerto Maldonado',
          'ניקוס הר הקלה (Colca Canyon) - עמוק מהגרנד קניון',
          'Huacachina - אואזיס בתוך דיונות',
          'אגם טיטיקאקה - הגבוה בעולם (3,812 מ\')'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Inca Trail - 4 ימים קלאסי ל-MP (הזמן מוקדם!)',
          'Salkantay Trek - אלטרנטיבה יפה ועצמאית יותר',
          'Rainbow Mountain Day Trip מקוסקו',
          'Colca Canyon Hike - יורד ועולה',
          'Huayhuash Circuit - 12 ימים, אגדי',
          'Ausangate Trek - 5 ימים, גלישיארים',
          'Choquequirao Trek - "מאצ\'ו פיצ\'ו השני"'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'Cusco - Calle Procuradores = שדרות הנסרים',
          'Ukukus Bar בקוסקו - מסיבות אייקוניות',
          'Loki Hostel בקוסקו - המסיבה הכי טובה',
          'Miraflores בלימה - בארים ייחודיים',
          'Barranco בלימה - שכונת ה-Bohemian',
          'Arequipa - Plaza de Armas Night'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Máncora - הגולשים של פרו, חוף מאכ\'ו',
          'Huanchaco - כפר דייגים + גלשנים',
          'Paracas - שמורת טבע + Ballestas Islands',
          'Punta Sal - חוף שקט וקסום'
        ]
      },
      attractions: {
        icon: '🎯',
        items: [
          'מאצ\'ו פיצ\'ו - בגיל 24 (Sun Gate Hike)',
          'Cusco - ההיסטוריה האינקה חיה',
          'Lake Titicaca + Uros Floating Islands',
          'Nazca Lines - קווי נאסקה מהאוויר',
          'Larco Museum בלימה - 5,000 שנה',
          'Colca Canyon + Condor Flight',
          'Ayahuasca Experience מגילוי (בזהירות)'
        ]
      },
      food: {
        icon: '🍽️',
        items: [
          'Ceviche - הבסיס! לימון, בצל, פלפל',
          'Lomo Saltado - סטייק מוקפץ פרואני',
          'Causa Rellena - תפוחי אדמה צהובים',
          'Pollo a la Brasa - עוף צלוי פרואני',
          'Anticuchos - שיפוד לב (!!!)',
          'Pisco Sour - הקוקטייל הלאומי 🍹',
          'Chicha Morada - לימונדת תירס סגול'
        ]
      },
      mustDo: {
        icon: '⭐',
        items: [
          'לטפס ל-Sun Gate לפני מאצ\'ו פיצ\'ו בזריחה',
          'Rainbow Mountain - יציאה ב-4 בבוקר!',
          'ארוחת Ceviche בשוק San Pedro בקוסקו',
          'להיות מהשלג על Ausangate ב-תמונה',
          'Pisco Sour תוצרת בית',
          'איי Uros על אגם טיטיקאקה',
          'Colca Canyon + ראית קוֹנדוֹר'
        ]
      }
    },
    vocabulary: [
      { script: 'Hola', pronunciation: 'אוֹלָה', meaning: 'שלום', emoji: '👋' },
      { script: 'Gracias', pronunciation: 'גְרָסְיַאס', meaning: 'תודה', emoji: '🙏' },
      { script: '¿Cuánto cuesta?', pronunciation: 'קוּאַנְטוֹ קוּאֶסְטָה?', meaning: 'כמה זה עולה?', emoji: '💰' },
      { script: 'Muy rico', pronunciation: 'מוּאִי רִיקוֹ', meaning: 'טעים מאוד!', emoji: '😋' },
      { script: 'Caro', pronunciation: 'קָארוֹ', meaning: 'יקר', emoji: '💸' },
      { script: 'Baño', pronunciation: 'בַּנְיוֹ', meaning: 'שירותים', emoji: '🚻' },
      { script: 'Me robaron', pronunciation: 'מֵה רוֹבָּארוֹן', meaning: 'שדדו אותי!', emoji: '🚨' },
      { script: 'Yau yau', pronunciation: 'יַאוּ-יַאוּ', meaning: 'כאב (קצ\'ואה)', emoji: '😣' }
    ],
    mapCoords: { lat: -9.19, lng: -75.01 }
  },

  colombia: {
    id: 'colombia',
    name: 'קולומביה',
    nameEn: 'Colombia',
    region: 'southamerica',
    emoji: '🇨🇴',
    heroImage: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1600&q=80',
    quote: '"קולומביה היא המדינה שאמא אמרה לא ללכת אליה — ולכן אתה חייב לגלות אותה בעצמך."',
    rating: 9.4,
    popularity: 88,
    bestSeason: 'דצמבר - מרץ ויוני - אוגוסט',
    avgBudgetPerDay: 250,
    facts: {
      distanceFromIsrael: '10,500 ק"מ',
      flightTime: '15-18 שעות',
      size: '1,141,748 קמ"ר',
      language: 'ספרדית',
      currency: 'פזו קולומביאני (COP) - 1 ₪ ≈ 1,100 פזו',
      capital: 'בוגוטה',
      population: '52 מיליון',
      visa: 'ללא ויזה עד 90 יום',
      timezone: 'UTC-5',
      religion: 'קתוליות',
      safety: '⭐⭐⭐ שיפור עצום - אבל היה זהיר בלילה'
    },
    categories: {
      scenery: {
        icon: '🌿',
        items: [
          'Coffee Region (Eje Cafetero) - ג\'ונגל + קפה',
          'Ciudad Perdida - "מאצ\'ו פיצ\'ו הקולומביאני"',
          'Caño Cristales - "נהר חמשת הצבעים"',
          'Tayrona National Park - ג\'ונגל + חוף',
          'Los Nevados - גלישיארים ירוקים',
          'Desert of Tatacoa - שדה מדבר צבעוני',
          'Valle de Cocora - עצי דקל ענקיים בערפל'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Ciudad Perdida Trek - 4-6 ימים ג\'ונגל',
          'Parque Tayrona - מסלולי חוף + ג\'ונגל',
          'PNN Los Nevados - טיפוס על שלג ובוץ',
          'Valle de Cocora - 12 ק"מ בין דקל-שעווה',
          'Cocora to Salento Loop - אחד הכי יפים',
          'El Peñol de Guatapé - 740 מדרגות לגבעה'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'מדיין - ה-El Poblado Parque Lleras לחיים!',
          'Cartagena Night - La Calle del Arsenal',
          'Bogotá - La Candelaria + Zona Rosa',
          'Cali - Salsa Clubs! (Tin Tin Deo)',
          'Carnaval de Barranquilla (פברואר) - EPIC',
          'Santa Marta - Taganga Beach Bar'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Playa Blanca ב-Cartagena - לבן ועוצר נשימה',
          'Tayrona - Cabo San Juan + Playa Cristal',
          'Providencia Island - שמורה שלמה',
          'San Andres - אי קריביאן עם אלמוגים',
          'Taganga - קרוב לסנטה מרטה'
        ]
      },
      attractions: {
        icon: '🎯',
        items: [
          'Cartagena Old Town - עיר חומות צבעונית ומטורפת',
          'El Peñol de Guatapé - הסלע הגדול + כפר',
          'Museo de Antioquia במדיין',
          'Mercado de Paloquemao בבוגוטה',
          'Coffee Farm Tour ב-Salento',
          'Museum + Tour בשכונת הגרפיטי'
        ]
      },
      food: {
        icon: '🍽️',
        items: [
          'Bandeja Paisa - צלחת עם כל מה שיש',
          'Arepas - לחם תירס קלוי בכל פינה',
          'Sancocho - מרק תרנגולת + ירקות',
          'Empanadas - כיסונים מטוגנים',
          'Patacón - בננה ירוקה מועכת ומטוגנת',
          'Aguardiente - הליקר הלאומי (37%!)',
          'Tinto - קפה קולומביאני שחור ומושלם'
        ]
      },
      mustDo: {
        icon: '⭐',
        items: [
          'El Peñol - 740 מדרגות + ויו!',
          'Cartagena - עיר הצבעים הכי פוטוגנית',
          'Coffee Farm + Tasting ב-Salento',
          'Ciudad Perdida Trek - אחד הטובים בעולם',
          'Salsa Night בקאלי עם שיעור',
          'Caño Cristales - טיסה פנימית + צבעים',
          'Cocora Valley + Cafe ב-Salento'
        ]
      }
    },
    vocabulary: [
      { script: '¡Qué bacano!', pronunciation: 'קֵה בַּקָאנוֹ!', meaning: 'כמה מדהים! (סלנג קולומביאני)', emoji: '🤩' },
      { script: 'Parce', pronunciation: 'פַּרְסֶה', meaning: 'חבר (סלנג מדיין)', emoji: '🤜' },
      { script: '¿Qué más?', pronunciation: 'קֵה מַס?', meaning: 'מה נשמע? (ברכה)', emoji: '👋' },
      { script: 'Chimba', pronunciation: 'צ\'ִימְבָּה', meaning: 'מגניב! (קולומביאני)', emoji: '😎' },
      { script: 'No dar papaya', pronunciation: 'נוֹ דַּר פַּפַּיָה', meaning: 'אל תהיה מטרה קלה', emoji: '⚠️' },
      { script: 'Plata', pronunciation: 'פְּלָטָה', meaning: 'כסף (סלנג)', emoji: '💰' }
    ],
    mapCoords: { lat: 4.57, lng: -74.29 }
  },

  argentina: {
    id: 'argentina',
    name: 'ארגנטינה',
    nameEn: 'Argentina',
    region: 'southamerica',
    emoji: '🇦🇷',
    heroImage: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1600&q=80',
    quote: '"בארגנטינה, הזמן עוצר. יש שם סוג של אנרגיה אחרת — ספרדית, אירופאית, ולגמרי עצמה."',
    rating: 9.3,
    popularity: 85,
    bestSeason: 'אוקטובר - אפריל',
    avgBudgetPerDay: 300,
    facts: {
      distanceFromIsrael: '12,500 ק"מ',
      flightTime: '17-20 שעות',
      size: '2,780,400 קמ"ר',
      language: 'ספרדית ארגנטינאית',
      currency: 'פזו (ARS) - שים לב לשוק הדולר הרשמי/לא רשמי!',
      capital: 'בואנוס איירס',
      population: '46 מיליון',
      visa: 'ללא ויזה עד 90 יום',
      timezone: 'UTC-3',
      religion: 'קתוליות',
      safety: '⭐⭐⭐ בואנוס איירס - זהיר בשכונות מסוימות'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'פטגוניה - Torres del Paine (עם צ\'ילה)',
          'Mount Fitz Roy בAltacama - שדה קרח',
          'Iguazú Falls - הכי גדול בעולם (UNESCO)',
          'Quebrada de Humahuaca - עמק צבעוני',
          'Valle de Uco במנדוסה - כרמים + הרים',
          'Tierra del Fuego - קצה העולם',
          'Salinas Grandes - מלחה לבנה'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Torres del Paine W Trek - 5 ימים (MUST!)',
          'Mount Fitz Roy Day Hike מ-El Calafate',
          'Perito Moreno Glacier Walk',
          'Cerro Tronador בBariloche',
          'Nahuel Huapi Circuit - 7 ימים',
          'Quebrada del Condorito - קוֹנדוֹרים!'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'בואנוס איירס - Palermo Soho ו-Hollywood',
          'Niceto Club + Crobar - הכי בואנוס',
          'Tango Show + Milonga - הכי ארגנטינאי',
          'Mendoza - Fiesta de la Vendimia (פסטיבל יין)',
          'Bariloche - Après Ski + Bars',
          'La Bomba de Tiempo (שני בלילה - EPIC)'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Mar del Plata - העיר חוף הגדולה',
          'Punta del Este (אורוגוואי קרובה!)',
          'Villa Gesell + Pinamar'
        ]
      },
      attractions: {
        icon: '🎯',
        items: [
          'Iguazú Falls - מ-2 הצדדים (ארגנטינה+ברזיל)',
          'Perito Moreno Glacier - הקרחון שמתקדם!',
          'Buenos Aires - La Boca + El Caminito',
          'Cementerio de la Recoleta - קברי האבירים',
          'Wines in Mendoza - Malbec Tasting',
          'Casa Rosada + Plaza de Mayo',
          'Ushuaia - העיר הדרומית ביותר בעולם'
        ]
      },
      food: {
        icon: '🥩',
        items: [
          'Asado - בברביקיו ארגנטינאי (BEST IN THE WORLD)',
          'Empanadas - בכל אזור בגרסה שלו',
          'Milanesa - שניצל ארגנטינאי ענק',
          'Dulce de Leche - ריבת חלב על הכל!',
          'Alfajores - עוגיית שוקולד עם קרמל',
          'Malbec Wine - כוס ב-100 פזו',
          'Medialunas - קרואסון ארגנטינאי עם מתיקות'
        ]
      },
      mustDo: {
        icon: '⭐',
        items: [
          'Torres del Paine W Trek - חובה!!',
          'Asado אמיתי אצל מקומיים',
          'Tango Lesson + Milonga בלילה',
          'Iguazú Falls - מ-2 הצדדים!',
          'Perito Moreno הליכה על הקרחון',
          'Malbec Tasting בקמרה בחישוף',
          'Buenos Aires - San Telmo Market ביום ראשון'
        ]
      }
    },
    vocabulary: [
      { script: 'Che boludo', pronunciation: 'צ\'ֶה בּוֹלוּדוֹ', meaning: 'היי חבר (ספרדית ארגנטינאית)', emoji: '😄' },
      { script: 'Bárbaro', pronunciation: 'בָּרְבָּרוֹ', meaning: 'מדהים!', emoji: '🤩' },
      { script: 'Quilombo', pronunciation: 'קִילוֹמְבּוֹ', meaning: 'בלגן/כאוס', emoji: '🤯' },
      { script: 'Vino tinto', pronunciation: 'בִּינְיוֹ טִינְטוֹ', meaning: 'יין אדום', emoji: '🍷' },
      { script: '¿Cómo andás?', pronunciation: 'קוֹמוֹ אַנְדָּס?', meaning: 'מה שלומך? (ארגנטינאי)', emoji: '👋' },
      { script: 'Frutilla', pronunciation: 'פְּרוּטִיָּה', meaning: 'תות שדה', emoji: '🍓' }
    ],
    mapCoords: { lat: -38.42, lng: -63.62 }
  },

  australia: {
    id: 'australia',
    name: 'אוסטרליה',
    nameEn: 'Australia',
    region: 'australia',
    emoji: '🇦🇺',
    heroImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1600&q=80',
    quote: '"אוסטרליה היא היעד שאתה בא אליו לשנה ונשאר לשנתיים. המקום שמשנה לך את הסדר."',
    rating: 9.6,
    popularity: 88,
    bestSeason: 'ספטמבר - נובמבר (אביב) + מרץ - מאי',
    avgBudgetPerDay: 550,
    facts: {
      distanceFromIsrael: '13,500 ק"מ',
      flightTime: '17-20 שעות',
      size: '7,692,024 קמ"ר',
      language: 'אנגלית',
      currency: 'דולר אוסטרלי (AUD) - 1 ₪ ≈ 0.4 AUD',
      capital: 'קנברה',
      population: '26 מיליון',
      visa: 'Working Holiday Visa - 1-2 שנים, מגיל 18-30!',
      timezone: 'UTC+8 עד UTC+11 (לפי אזור)',
      religion: 'נוצרית (64%)',
      safety: '⭐⭐⭐⭐⭐ מהבטוחות בעולם (רק Crocs+Sharks!)'
    },
    categories: {
      scenery: {
        icon: '🌊',
        items: [
          'Great Ocean Road - 243 ק"מ של נוף מדהים',
          '12 Apostles - סלעי ים אגדיים',
          'Uluru / Ayers Rock - הלב הרוחני',
          'Great Barrier Reef - שונית האלמוגים הגדולה',
          'Blue Mountains - מגדלי ערפל כחול',
          'Whitsunday Islands - סירות ואיים',
          'Tasmania Wilderness - פרא ובתולי'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Overland Track Tasmania - 6 ימים, אגדי',
          'Three Capes Track - חופים + צוקים',
          'Blue Mountains - Six Foot Track',
          'The Grampians - Pinnacle Walk',
          'Glass House Mountains בQueensland',
          'Larapinta Trail - מדבר NT',
          'Mt. Kosciuszko - הפסגה הגבוהה של אוס\''
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'סידני - Kings Cross + Oxford Street',
          'Melbourne - Brunswick + Fitzroy',
          'Gold Coast - Cavill Avenue Nightlife',
          'Airlie Beach (Whitsundays) - Party Town',
          'Byron Bay - הוויב הטוב ביותר',
          'Schoolies (נובמבר) - חגיגת בגרות!',
          'NYE בסידני - ה-Best בעולם!'
        ]
      },
      beaches: {
        icon: '🏄',
        items: [
          'Bondi Beach סידני - האייקוני',
          'Whitehaven Beach (Whitsundays) - הכי לבן',
          'Noosa Heads - גלשן + שקט',
          'Cable Beach ב-Broome - שקיעה על גמלים',
          'Lucky Bay - קנגרו על החוף!!!',
          'Surfers Paradise - Gold Coast'
        ]
      },
      attractions: {
        icon: '🎯',
        items: [
          'Opera House + Harbour Bridge סידני',
          'Great Barrier Reef צלילה/סנורקלינג',
          'Uluru Sunrise/Sunset',
          'Kangaroo Island SA',
          'Melbourne Laneways + Food Scene',
          'Daintree Rainforest קווינסלנד',
          'Steve Irwin\'s Australia Zoo'
        ]
      },
      food: {
        icon: '🦘',
        items: [
          'Tim Tams - ביסקוויט השוקולד הלאומי',
          'Vegemite - מרית שחורה שנאהבת/נשנאת',
          'Flat White - הקפה שינה את העולם',
          'Barramundi - דג מקומי מדהים',
          'Meat Pie + Sauce',
          'Avo on Toast - בירון ביי בדיוק',
          'Fish & Chips על החוף'
        ]
      },
      mustDo: {
        icon: '⭐',
        items: [
          'Working Holiday Visa - עבוד+טייל שנה!',
          'Great Ocean Road Road Trip',
          'Great Barrier Reef Dive',
          'פיד לקנגרו + קואלה',
          'Uluru בזריחה/שקיעה',
          'Byron Bay + Nimbin Experience',
          'New Year\'s Eve בסידני'
        ]
      }
    },
    vocabulary: [
      { script: "G'day mate!", pronunciation: "גְּדַאי מֵייט!", meaning: 'שלום חבר! (ברכה אוסטרלית)', emoji: '🤙' },
      { script: 'No worries', pronunciation: 'נוֹ וּוֹרִיז', meaning: 'בסדר גמור / לא נורא', emoji: '😎' },
      { script: 'Arvo', pronunciation: 'אָרְווֹ', meaning: 'אחר הצהריים (Afternoon)', emoji: '☀️' },
      { script: 'Brekkie', pronunciation: 'בְּרֶקִי', meaning: 'ארוחת בוקר', emoji: '🍳' },
      { script: 'Servo', pronunciation: 'סֶרְווֹ', meaning: 'תחנת דלק (Service Station)', emoji: '⛽' },
      { script: 'Crikey!', pronunciation: 'קְרָאיְקִי!', meaning: 'אוי לא! (Steve Irwin style)', emoji: '🐊' },
      { script: 'She\'ll be right', pronunciation: 'שִׁיל בִּי רַאיְיט', meaning: 'הכל יהיה בסדר', emoji: '🙂' }
    ],
    mapCoords: { lat: -25.27, lng: 133.77 }
  },

  kenya: {
    id: 'kenya',
    name: 'קניה / מזרח אפריקה',
    nameEn: 'Kenya / East Africa',
    region: 'africa',
    emoji: '🇰🇪',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80',
    quote: '"ספארי בקניה שובר לך את כל מה שחשבת שאתה יודע על הטבע — אריה חי 10 מטר ממך."',
    rating: 9.7,
    popularity: 82,
    bestSeason: 'יולי-אוקטובר (Great Migration) + ינואר-מרץ',
    avgBudgetPerDay: 450,
    facts: {
      distanceFromIsrael: '4,000 ק"מ',
      flightTime: '5-8 שעות',
      size: '580,367 קמ"ר',
      language: 'סוואהילי + אנגלית',
      currency: 'שילינג קנייתי (KES) - 1 ₪ ≈ 38 שילינג',
      capital: 'ניירובי',
      population: '55 מיליון',
      visa: 'e-VISA מקוונת $50',
      timezone: 'UTC+3 (אותה שעה כמעט!)',
      religion: 'נוצרית + מוסלמית',
      safety: '⭐⭐⭐ ניירובי - זהיר. ספארי - בטוח מאוד'
    },
    categories: {
      scenery: {
        icon: '🦁',
        items: [
          'Masai Mara - הספארי הטוב בעולם',
          'Serengeti Tanzania - המעבר הגדול',
          'Mount Kenya - שלג ב-4,985 מ\'',
          'Great Rift Valley - עמק השבר הגדול',
          'Lake Nakuru - להקות פלמינגו ורוד',
          'Amboseli + קיליmanג\'רו ברקע',
          'Zanzibar - אי תבלינים + חוף'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Mount Kilimanjaro - 7 ימים, הפסגה של אפריקה',
          'Mount Kenya - Point Lenana (4,985 מ\')',
          'Rwenzori Mountains (אוגנדה)',
          'Hell\'s Gate National Park - רכיבה!',
          'Aberdare Forest Hike',
          'Gorilla Trekking ב-Uganda/Rwanda'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'Nairobi - Westlands Nightlife',
          'Zanzibar - Beach Parties',
          'Mombasa - Nyali Beach Bars',
          'Nairobi Carnivore Restaurant - חוויה',
          'Swahili Beach - Diani'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Zanzibar (Tanzania) - חוף לבן בתולי',
          'Diani Beach קניה - כחול אלמוגים',
          'Watamu Marine Park - שמורת ים',
          'Malindi - חוף פחות מוכר ויפה',
          'Lamu Island - עיר UNESCO + חוף'
        ]
      },
      attractions: {
        icon: '🎯',
        items: [
          'Big Five Safari - אריה, פיל, ג\'ירף, קרנף, היפופוטם',
          'Great Migration (יולי-אוקטובר)',
          'Masai Village Visit',
          'David Sheldrick Elephant Orphanage',
          'Stone Town Zanzibar',
          'Gorilla Trekking Rwanda/Uganda',
          'Amboseli - פילים + קיליmanג\'רו'
        ]
      },
      food: {
        icon: '🍛',
        items: [
          'Ugali - לחם תירס לבן, בסיס לכל ארוחה',
          'Nyama Choma - בשר צלוי בבר',
          'Samosas - כיסון מטוגן מהרחוב',
          'Pilau Rice - אורז מתובל',
          'Chapati - לחם דק מוקפץ',
          'Mandazi - לחמנייה מתוקה',
          'Safari Sundowner - שמשיה שקיעה עם ג\'ין'
        ]
      },
      mustDo: {
        icon: '⭐',
        items: [
          'Masai Mara Safari - לפחות 3 לילות',
          'Hot Air Balloon בספארי - $500 שווה כל שקל',
          'Climb Kilimanjaro עם מדריך',
          'Gorilla Trekking - חוויה שתשנה חיים',
          'Zanzibar שבוע - חוף + Stone Town',
          'Sundowner drinks בספארי עם השמש',
          'מסעדת Carnivore ניירובי - כל הבשרים'
        ]
      }
    },
    vocabulary: [
      { script: 'Jambo!', pronunciation: 'ג\'ַמְבּוֹ!', meaning: 'שלום! (סוואהילי)', emoji: '👋' },
      { script: 'Habari?', pronunciation: 'חַבָּרִי?', meaning: 'מה שלומך?', emoji: '😊' },
      { script: 'Asante sana', pronunciation: 'אַסַנְטֶה סַאנָה', meaning: 'תודה רבה', emoji: '🙏' },
      { script: 'Pole pole', pronunciation: 'פּוֹלֶה פּוֹלֶה', meaning: 'לאט לאט (Kilimanjaro mantra)', emoji: '🐢' },
      { script: 'Hakuna Matata', pronunciation: 'הַקוּנָה מַטָּטָה', meaning: 'אין בעיות! (אמיתי!)', emoji: '🦁' },
      { script: 'Mzuri', pronunciation: 'מְזוּרִי', meaning: 'יפה / טוב', emoji: '✨' },
      { script: 'Safari njema', pronunciation: 'סַפָּארִי נְג\'ֶמָה', meaning: 'ספארי טוב / נסיעה טובה', emoji: '🦒' }
    ],
    mapCoords: { lat: 0.02, lng: 37.91 }
  },

  usa: {
    id: 'usa',
    name: 'ארה"ב',
    nameEn: 'USA',
    region: 'northamerica',
    emoji: '🇺🇸',
    heroImage: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1600&q=80',
    quote: '"אמריקה היא ארץ של ניגודים — מהגרנד קניון ועד קוויינס, מוגס ועד ניו יורק."',
    rating: 9.0,
    popularity: 80,
    bestSeason: 'מרץ-מאי ו-ספטמבר-נובמבר',
    avgBudgetPerDay: 600,
    facts: {
      distanceFromIsrael: '9,000 ק"מ',
      flightTime: '11-14 שעות',
      size: '9,833,517 קמ"ר',
      language: 'אנגלית',
      currency: 'דולר ($) - 1 ₪ ≈ 0.28$',
      capital: 'וושינגטון DC',
      population: '335 מיליון',
      visa: 'ESTA - הרשאה דיגיטלית ב-14$ (ובה הייתי!)',
      timezone: 'UTC-5 עד UTC-8',
      religion: 'נוצרית',
      safety: '⭐⭐⭐⭐ תלוי בעיר ושכונה'
    },
    categories: {
      scenery: {
        icon: '🏜️',
        items: [
          'Grand Canyon - הפלא השביעי של העולם',
          'Yosemite National Park - Granite + Waterfalls',
          'Antelope Canyon - אייקוני לתמונות',
          'Bryce Canyon - אמפיתיאטרון של צוקים',
          'Zion National Park - Angel\'s Landing!',
          'Monument Valley - מהסרטים',
          'Oregon Coast - ירוק + אוקיינוס'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Angel\'s Landing ב-Zion - מפחיד + מדהים',
          'Half Dome ב-Yosemite - 16 ק"מ ושרשראות',
          'Rim to Rim Grand Canyon - 3-4 ימים',
          'The Narrows ב-Zion - מסלול בנהר!',
          'Enchantments בWashington - לוטרי',
          'John Muir Trail - 340 ק"מ מ-Yosemite'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'לאס וגאס - Strip + Vegas Weekender',
          'ניו יורק - Brooklyn + Manhattan',
          'מיאמי - South Beach + Art Basel',
          'ניו אורלינס - Bourbon Street + Jazz',
          'סן פרנסיסקו - Castro + Mission',
          'Austin TX - 6th Street Live Music',
          'Nashville - Broadway + Honky Tonks'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Miami Beach FL - הסאוס ביץ\'',
          'Malibu + Santa Monica CA',
          'Cape Cod MA - ניו אנגלנד',
          'Outer Banks NC - פראי וחף',
          'Hanauma Bay Hawaii - סנורקל',
          'Jersey Shore - כמו TV show!'
        ]
      },
      attractions: {
        icon: '🎯',
        items: [
          'ניו יורק - Central Park, Times Square, Empire State',
          'Grand Canyon South Rim',
          'Yellowstone - Old Faithful',
          'Disneyland / Walt Disney World',
          'Las Vegas Strip',
          'Smithsonian DC - חינם!',
          'Alcatraz + Golden Gate SF'
        ]
      },
      food: {
        icon: '🍔',
        items: [
          'Smash Burger - בן ₪40 ושווה כל שקל',
          'BBQ Brisket Texas style',
          'Chicago Deep Dish Pizza',
          'New Orleans Beignets + Chicory Coffee',
          'NYC Slice - $2 לפרוסה ב-2 בלילה',
          'West Coast Burritos',
          'Lobster Roll בBoston - $20 ושווה'
        ]
      },
      mustDo: {
        icon: '⭐',
        items: [
          'National Parks Road Trip - Utah + Arizona',
          'Vegas Weekend עם חברים',
          'NYC שבוע שלם - בסיס לכל האמריקה',
          'Route 66 - וגאס ל-לוס אנג\'לס',
          'Coachella (אפריל) - הפסטיבל הגדול',
          'Baseball Game + Hot Dog',
          'New Year\'s Eve בTimes Square'
        ]
      }
    },
    vocabulary: [
      { script: "What's up?", pronunciation: "וּאַטְס אַפ?", meaning: 'מה נשמע? (ברכה יומיומית)', emoji: '✌️' },
      { script: 'Awesome!', pronunciation: 'אוֹסַם!', meaning: 'מדהים!', emoji: '🤩' },
      { script: 'My bad', pronunciation: 'מַאי בֶּד', meaning: 'אשמתי / סליחה', emoji: '😅' },
      { script: 'I\'m good', pronunciation: 'אַיִּים גּוּד', meaning: 'אני בסדר / לא תודה', emoji: '👌' },
      { script: 'Check, please', pronunciation: 'צ\'ֶק פְּלִיז', meaning: 'חשבון בבקשה', emoji: '🧾' },
      { script: 'For here or to go?', pronunciation: 'פוֹר הִיר אוֹר טוּ גּוֹ?', meaning: 'פה או לקחת?', emoji: '🥡' }
    ],
    mapCoords: { lat: 37.09, lng: -95.71 }
  },

  philippines: {
    id: 'philippines',
    name: 'פיליפינים',
    nameEn: 'Philippines',
    region: 'asia',
    emoji: '🇵🇭',
    heroImage: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1600&q=80',
    quote: '"פיליפינים היא 7,641 אי מחכים לך — כל אחד עם חוף שלו, שקיעה שלו, ים שלו."',
    rating: 9.2,
    popularity: 78,
    bestSeason: 'נובמבר - מאי',
    avgBudgetPerDay: 200,
    facts: {
      distanceFromIsrael: '8,200 ק"מ',
      flightTime: '10-13 שעות (עם עצירה)',
      size: '300,000 קמ"ר (7,641 אי!)',
      language: 'פיליפינית + אנגלית (רשמית)',
      currency: 'פסו פיליפיני (PHP) - 1 ₪ ≈ 3.5 פסו',
      capital: 'מנילה',
      population: '113 מיליון',
      visa: 'ויזה חינם עד 30 יום (ניתן להאריך ל-59)',
      timezone: 'UTC+8 (פלוס 6 מישראל בקיץ)',
      religion: 'קתוליות (80%)',
      safety: '⭐⭐⭐ בינוני — זהירות בצפון מינדנאו'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'אגלגאי — ריף הצב, אגמי געש, קניון עם גשר',
          'שוקולד הילס בבוהול — 1,268 גבעות חומות',
          'מדגרות האורז Batad — אונסקו, 2,000 שנה',
          'Kawasan Falls קב — מפל ירוק-טורקיז',
          'Mount Pulag — "ים ענן" בעלות השחר',
          'Coron Lagoon — אגמות צוקים בלגונות'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Mt. Apo — הגבוה בפיליפינים (2,954 מ\')',
          'Mt. Pulag — טרקינג לילי + זריחה מעל הענן',
          'Batad Rice Terraces — כפר ללא כביש, רק ג\'ונגל',
          'Kawasan Canyoneering — צניחה למפלים ושחייה',
          'Osmena Peak קב — טרקינג קל עם נוף מדהים',
          'Chocolate Hills Bike Tour — אופניים בין הגבעות'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'Security Bar Cebu — מסיבות 24/7, "לא נסגר"',
          'BGC Manila (Bonifacio Global City) — בארים ומועדונים',
          'מסיבת ים ב-El Nido — סאנסט קרוז',
          'Sinulog Festival (ינואר, קב) — קרנבל ענק',
          'Ati-Atihan Festival (ינואר, Kalibo) — ריקוד ותחפושות'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'El Nido, Palawan — אחד מ-10 החופים היפים בעולם',
          'White Beach, Boracay — חול לבן כמו קמח',
          'Siargao — "גן עדן של גולשים"',
          'Coron, Palawan — אגמות + צלילה על אוניות יפניות',
          'Nacpan Beach El Nido — שקט, לא מסחרי',
          'Bantayan Island — חוף ישראלים מועדף'
        ]
      },
      attractions: {
        icon: '🗺️',
        items: [
          'Chocolate Hills Bohol — אייקון של פיליפינים',
          'מדגרות האורז Ifugao — אונסקו, 2,000 שנה',
          'Underground River Puerto Princesa — אונסקו, 8.2 ק"מ',
          'Intramuros Manila — עיר ספרדית מוקפת חומות',
          'כריש לווייתן ב-Oslob — שחייה עם הגדול ביותר',
          'Tubbataha Reef — ריף אלמוגים הכי טהור באסיה'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Adobo — תבשיל עוף/חזיר בחומץ, המנה הלאומית',
          'Sinigang — מרק חמוץ עם ירקות ובשר',
          'Lechon — חזיר שלם צלוי, הכי בCebu',
          'Halo-halo — קינוח קרח עם שעועית, גלידה, חלב',
          'Balut — ביצת ברווז עם עובר (חוויה!)',
          'Kare-Kare — תבשיל קארי חמאת בוטנים',
          'Pancit — אטריות מוקפצות, בכל מסיבה'
        ]
      },
      mustdo: {
        icon: '⭐',
        items: [
          'Island Hopping ב-El Nido (Tour A) — 5 אי ביום אחד',
          'צלילה Tubbataha Reef (מאי-יוני) — ריף פראי',
          'שחייה עם כריש לווייתן Oslob (אחה"צ, לא בוקר)',
          'Chocolate Hills + Tarsier Sanctuary בוהול ביום אחד',
          'Surfing Siargao — Cloud 9, הגל המפורסם',
          'Sunset Kayak El Nido Lagoon 3 — ורוד ואגדי'
        ]
      }
    },
    vocabulary: [
      { script: 'Magandang umaga', pronunciation: 'מָגַנְדַּנְג אוּמַגָּה', meaning: 'בוקר טוב', emoji: '🌅' },
      { script: 'Salamat', pronunciation: 'סַלָּמַת', meaning: 'תודה', emoji: '🙏' },
      { script: 'Magkano?', pronunciation: 'מַגְקָנוֹ?', meaning: 'כמה עולה?', emoji: '💰' },
      { script: 'Masarap!', pronunciation: 'מָסָרַּפ!', meaning: 'טעים!', emoji: '😋' },
      { script: 'Comfort Room', pronunciation: 'קוֹמְפוֹרְט רוּם (CR)', meaning: 'שירותים', emoji: '🚻' },
      { script: 'Ayos lang', pronunciation: "אַיוֹס לַנְג'", meaning: 'בסדר / לא נורא', emoji: '😊' },
      { script: 'Paalam', pronunciation: "פַּעָלַם", meaning: 'להתראות', emoji: '👋' },
      { script: 'Diyos ko!', pronunciation: 'דְּיוֹס קוֹ!', meaning: 'אלוהים שלי! (הבעת הפתעה)', emoji: '😱' }
    ],
    mapCoords: { lat: 12.88, lng: 121.77 },
    israeliCommunity: 'בינונית — גדלה מאוד בשנים האחרונות'
  },

  morocco: {
    id: 'morocco',
    name: 'מרוקו',
    nameEn: 'Morocco',
    region: 'africa',
    emoji: '🇲🇦',
    heroImage: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&q=80',
    quote: '"מרוקו היא לא רק יעד — היא חוויה חושית מלאה: ריחות תבלינים, צבעי שוק, שמש על חול הסהרה."',
    rating: 9.0,
    popularity: 72,
    bestSeason: 'מרץ - מאי וספטמבר - נובמבר',
    avgBudgetPerDay: 250,
    facts: {
      distanceFromIsrael: '3,500 ק"מ',
      flightTime: '4-5 שעות (הכי קרוב!)',
      size: '710,850 קמ"ר',
      language: 'ערבית + ברברית + צרפתית',
      currency: 'דירהם מרוקאי (MAD) - 1 ₪ ≈ 3.2 דירהם',
      capital: 'רבאט (עיר הגדולה: קזבלנקה)',
      population: '37 מיליון',
      visa: 'ויזה לא נדרשת (90 יום) — בדוק עם דרכון ישראלי!',
      timezone: 'UTC+1',
      religion: 'אסלאם (99%)',
      safety: '⭐⭐⭐ בינוני — זהרות בשוקים מסיירי כיסים'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'erg Chebbi — חולות הסהרה הגדולים, עד 150 מ\' גובה',
          'Todra Gorge — קניון ורוד/כתום, 300 מ\' גובה',
          'Atlas Mountains — שיא Toubkal 4,167 מ\'',
          'מפלי Ouzoud — מפל 110 מ\', ירוק+כחול מסביב',
          'Blue Pearl Chefchaouen — עיר כחולה בהרים',
          'ים ב-Essaouira — רוח + ים גועש + חומות'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Toubkal Summit — 2-3 ימים, הגג של צפון אפריקה',
          'Mgoun Traverse — 4-5 ימים בלב ג\'בל סגרו',
          'Draa Valley Trek — נאות מדבר + כפרים ברבריים',
          'Rif Mountains Hiking — ג\'ונגל קנאביס + נופים',
          'M\'Goun Loop — 6 ימים, פחות תיירים'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'Jemaa el-Fna מרקש בלילה — עולם שלם ברחבה',
          'Cafe Clock ובארים Gueliz, מרקש — רובע מודרני',
          'Kasbah ורחוב לאלה-אייישה — בסמטאות ליד מסגד',
          'Fez Medina ברמדאן — אורות, מוזיקה, חגיגה'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Essaouira — כחול+לבן, גלשני רוח, ים גועש',
          'Taghazout — הכפר של גולשים העולמיים',
          'Agadir — חוף עירוני, מלונות, חול זהוב',
          'Dakhla — גלשנות ספורטיבית בלגונה',
          'Al Hoceima — ים ים תיכוני טהור בצפון'
        ]
      },
      attractions: {
        icon: '🗺️',
        items: [
          'Jemaa el-Fna, מרקש — לב פועם של מרוקו',
          'Medina Fez el-Bali — אונסקו, עיר מהמאה ה-9',
          'Aït Benhaddou — כפר טיט העתיק (Game of Thrones!)',
          'Hassan II Mosque קזבלנקה — מסגד עם רצפת זכוכית מעל הים',
          'Ben Youssef Madrasa מרקש — חצר שיש מרהיבה',
          'מחנות לינה בסהרה — כוכבים, גמלים, דממה'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Tagine — תבשיל איטי בכלי חרס: עוף, כבש, ירקות, מתוק-מלוח',
          'Couscous — שישי הוא "יום הקוסקוס" בכל בית',
          'Pastilla — מאפה שקדים+תרנגול, מתוק+מלוח (מפתיע!)',
          'Harira — מרק עגבניות+עדשים, לבשר הרמדאן',
          'Mint Tea — "וויסקי מרוקאי" — פולחן עצמו',
          'Msemen — פיתה מרוקאית עם דבש + חמאה',
          'בשוק: Sfenj (סופגנייה), Baghrir (פנקייק)'
        ]
      },
      mustdo: {
        icon: '⭐',
        items: [
          'לינה בלב הסהרה — מחנה בדואי, גמל, כוכבים + שחר',
          'Hammam מסורתי — קיסוי + ניקוי, 50 דירהם',
          'שוק הצבענים (Tanneries) Fez — ריח + צבעים + נוף מגג',
          'כניסה לג\'מעה אל-פנא אחרי שקיעה — עולם מסעדות+בידור',
          'רכיבה על גמל לשקיעה בסהרה',
          'Riad (פנדק מסורתי) — שינה בלב המדינה'
        ]
      }
    },
    vocabulary: [
      { script: 'السلام عليكم', pronunciation: 'אַסְּלָאמוּ עֲלֵיקוּם', meaning: 'שלום (הברכה הרשמית)', emoji: '🤝' },
      { script: 'شكراً', pronunciation: 'שׁוּקְרַאן', meaning: 'תודה', emoji: '🙏' },
      { script: 'بشحال؟', pronunciation: 'בְּשְׁחָאל?', meaning: 'כמה עולה?', emoji: '💰' },
      { script: 'زوين', pronunciation: 'זְוִין', meaning: 'יפה / טוב', emoji: '✨' },
      { script: 'لا', pronunciation: 'לָא', meaning: 'לא', emoji: '🚫' },
      { script: 'La bess', pronunciation: 'לַה בֵּס', meaning: 'בסדר / מעולה', emoji: '👌' },
      { script: 'Wach kayn?', pronunciation: 'וַאש קַיְן?', meaning: 'יש? / אפשר?', emoji: '🤔' },
      { script: 'Safi', pronunciation: 'סָאפִי', meaning: 'מספיק / בסדר / סגור', emoji: '✅' }
    ],
    mapCoords: { lat: 31.79, lng: -7.09 },
    israeliCommunity: 'קיימת! הסיטואציה השתפרה — בדוק עם דרכון ישראלי לפני הטיול'
  },

  newzealand: {
    id: 'newzealand',
    name: 'ניו זילנד',
    nameEn: 'New Zealand',
    region: 'australia',
    emoji: '🇳🇿',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80',
    quote: '"ניו זילנד היא הוכחה שהעולם לא גמר להפתיע — פיורדים, הרי שלג, ים קסום. הכל ב-2 אי."',
    rating: 9.6,
    popularity: 68,
    bestSeason: 'דצמבר - פברואר (קיץ של NZ)',
    avgBudgetPerDay: 450,
    facts: {
      distanceFromIsrael: '17,200 ק"מ (הכי רחוק!)',
      flightTime: '22-26 שעות (2-3 עצירות)',
      size: '268,021 קמ"ר',
      language: 'אנגלית + מאורי (רשמית)',
      currency: 'דולר ניו זילנד (NZD) - 1 ₪ ≈ 0.42 NZD',
      capital: 'ולינגטון (גדולה: אוקלנד)',
      population: '5 מיליון',
      visa: 'NZeTA $17 NZD — חובה להזמין מראש אונליין',
      timezone: 'UTC+13 (פלוס 11 מישראל)',
      religion: 'לא דתי ברובו (40%)',
      safety: '⭐⭐⭐⭐⭐ הכי בטוח בעולם!'
    },
    categories: {
      scenery: {
        icon: '🏔️',
        items: [
          'Fiordland — פיורדי Milford Sound + Doubtful Sound',
          'Mt. Cook / Aoraki — 3,724 מ\', קרחון, שלג',
          'Wanaka Lake — אגם שקט עם הר ברקע',
          'Coromandel Peninsula — חוף + מחצבות + יער',
          'Queenstown — "עיר ההרפתקות"',
          'Franz Josef Glacier — גלאציר שיורד לג\'ונגל גשם'
        ]
      },
      hiking: {
        icon: '🥾',
        items: [
          'Tongariro Alpine Crossing — "הטרקינג הטוב ביותר בעולם" (1 יום)',
          'Milford Track — 4 ימים, פיורדים ויערות',
          'Routeburn Track — 2-4 ימים, Alps',
          'Abel Tasman Coastal Track — 3-5 ימים על החוף',
          'Kepler Track — 4 ימים, אגמות פיורד',
          'Wanaka Roys Peak — 6 שעות, נוף אגדי ב-summit'
        ]
      },
      parties: {
        icon: '🎉',
        items: [
          'Queenstown Night Life — עיר קטנה עם אנרגיה ענקית',
          'Sky City Casino Auckland — קזינו + מועדונים',
          'Wellington Cuba Street — בארים, מוזיקה, תרבות',
          'Rhythm & Vines (Gisborne) — פסטיבל ראש שנה ים תיכוני',
          'Laneway Festival Auckland — ינואר, מוזיקה אינדי'
        ]
      },
      beaches: {
        icon: '🏖️',
        items: [
          'Bay of Islands — 144 אי, דולפינים, שייט',
          'Cathedral Cove (Coromandel) — מערה + חוף + סירה',
          'Abel Tasman National Park — זהב+ירוק+כחול',
          'Piha Beach — חוף שחור גלשנות + BB קרוב לאוקלנד',
          'Hot Water Beach — חפור חול ויש ג\'קוזי טבעי!'
        ]
      },
      attractions: {
        icon: '🗺️',
        items: [
          'Hobbiton (Matamata) — כפר ה-Hobbit המקורי',
          'Waitomo Glowworm Caves — מערות עם גלאו-וורמס',
          'Rotorua גאוזרים — ריח גופרית + רותחים טבעיים',
          'Skytower Auckland — 328 מ\', צניחה מהצד',
          'Te Papa Museum Wellington — כניסה חינם, היסטוריה מאורית',
          'Queenstown Bungee — AJ Hackett — ממציאי הבאנג\'י!'
        ]
      },
      food: {
        icon: '🍜',
        items: [
          'Hangi — בישול מאורי תת-קרקעי: בשר+ירקות',
          'Lamb — כבש ניו זילנדי הכי טוב בעולם',
          'Pavlova — עוגת מרנג עם קצפת + פירות טרופיים',
          'Whitebait Fritters — פנקייק דג קטן (עונתי)',
          'Manuka Honey — דבש רפואי טבעי, קני הביתה',
          'L&P (Lemon & Paeroa) — משקה מקומי בלעדי',
          'Pies — מאפה ניו זילנדי (בשר + רוטב)'
        ]
      },
      mustdo: {
        icon: '⭐',
        items: [
          'Bungee Jumping Queenstown — AJ Hackett, ממציאי הבאנג\'י!',
          'Zorbing Rotorua — כדור שקוף מגלשה',
          'Skydiving Abel Tasman — 15,000 רגל מעל החוף',
          'Milford Sound Cruise — פיורד ענן+מפלים',
          'Tongariro Alpine Crossing — 19 ק"מ, 6-8 שעות',
          'חיפוש כוכבים — ניו זילנד Aoraki Dark Sky Reserve'
        ]
      }
    },
    vocabulary: [
      { script: 'Kia Ora', pronunciation: 'קִיָה אוֹרָה', meaning: 'שלום / אהלן (מאורי)', emoji: '🤙' },
      { script: 'Cheers', pronunciation: 'צ\'ִירְז', meaning: 'תודה / להתראות / לחיים', emoji: '🍺' },
      { script: 'Sweet as!', pronunciation: 'סְוִיט אַז!', meaning: 'מגניב! / מדהים!', emoji: '🤩' },
      { script: "She'll be right", pronunciation: 'שִׁיל בִּי רַאיְיט', meaning: 'יהיה בסדר (כלל חיים NZ)', emoji: '😎' },
      { script: 'Keen', pronunciation: 'קִין', meaning: 'אני בפנים! / רוצה!', emoji: '🙌' },
      { script: 'Bro', pronunciation: 'בְּרוֹ', meaning: 'חבר / אחי (לכולם)', emoji: '👊' },
      { script: 'Jandals', pronunciation: "ג'ַאנְדְּלְז", meaning: 'כפכפים (flip-flops)', emoji: '🩴' },
      { script: 'Bach', pronunciation: 'בֵּץ\'', meaning: 'בית קיץ / קייטנה', emoji: '🏡' }
    ],
    mapCoords: { lat: -41.29, lng: 174.78 }
  }
};

var regions = [
  { id: 'asia', name: 'מזרח אסיה', emoji: '🌏', color: 'from-orange-500 to-red-500' },
  { id: 'southamerica', name: 'דרום אמריקה', emoji: '🌎', color: 'from-green-500 to-teal-500' },
  { id: 'australia', name: 'אוסטרליה', emoji: '🦘', color: 'from-yellow-500 to-orange-500' },
  { id: 'africa', name: 'אפריקה', emoji: '🦁', color: 'from-amber-500 to-yellow-500' },
  { id: 'northamerica', name: 'ארה"ב / צפון אמריקה', emoji: '🗽', color: 'from-blue-500 to-indigo-500' },
];

var destinationList = Object.values(destinations);

var packingListMale = {
  clothing: {
    title: 'לבוש',
    icon: '👕',
    items: [
      { name: '3-4 חולצות טי-שירט קלות', essential: true, tip: 'Quick-dry מיקרופייבר - יתייבשו בלילה' },
      { name: '1-2 חולצות ארוכות שרוולים', essential: true, tip: 'למקדשים, קר בגבוה, הגנה מחרקים' },
      { name: '2 מכנסי טרקינג/ג\'ינס', essential: true, tip: 'אחד לטרקינג, אחד לחיי יום-יום' },
      { name: '3-4 תחתוני כותנה', essential: true, tip: 'Merino Wool הכי טוב - מונע זיהומים' },
      { name: '3-4 גרביים (כולל גרב טרקינג)', essential: true, tip: 'גרב טרקינג עבה - מניע שלפוחיות' },
      { name: 'בגד ים', essential: true, tip: 'גם לטרקינג - יתייבש מהר' },
      { name: 'מכנס קצר/קרגו', essential: true, tip: 'נוח לאקלים חם' },
      { name: 'ז\'קט עמיד גשם קל (packable)', essential: true, tip: 'מתקפל לכיס - חובה!' },
      { name: 'פליס/חולצה חמה', essential: false, tip: 'לנפאל/פטגוניה/לילות קרים' },
      { name: 'כובע שמש', essential: true, tip: 'SPF + הגנה לפנים' },
      { name: 'כפכפי רצועה (Havaianas וכד\')', essential: true, tip: 'לחוף, הוסטל, מקלחות' },
      { name: 'נעלי טרקינג/ספורט', essential: true, tip: 'כולסמן, Merrell, Salomon - שתהיה ראשי' }
    ]
  },
  hygiene: {
    title: 'היגיינה',
    icon: '🧴',
    items: [
      { name: 'שמפו/קונדישנר מוצק', essential: true, tip: 'חוסך נוזלים + תיק הנסיעה' },
      { name: 'גלוח (מכונה אלקטרונית קטנה)', essential: false, tip: 'Gillette Fusion + ביטוח 3 חודשים' },
      { name: 'קרם הגנה SPF 50', essential: true, tip: 'לפחות 250ml - יגמר לך' },
      { name: 'דאודורנט', essential: true },
      { name: 'אנטי-מוש (DEET 20%+)', essential: true, tip: 'Jungle Formula - הכי עוצמתי' },
      { name: 'מברשת שיניים + משחה', essential: true },
      { name: 'נייר טואלט נייד (קטן)', essential: true, tip: 'שירותים בג\'ונגל - לא תמיד יש' },
      { name: 'כדורי עיכול + Imodium', essential: true, tip: 'Travelers Diarrhea - קורה ל-99%' },
      { name: 'תרופות בסיסיות (Acamol, אנטיביוטיקה)', essential: true, tip: 'Norfloxacin למעי, Cipro לחירום' },
      { name: 'פלסטרים + גאזות', essential: true },
      { name: 'Electrolyte Powder', essential: true, tip: 'Nuun / ORS - חובה לטרקינג + שלשול' },
      { name: 'קרם נגד פטרייה', essential: false, tip: 'אקלים לח = בעיות עור' }
    ]
  },
  documents: {
    title: 'מסמכים',
    icon: '📄',
    items: [
      { name: 'דרכון תקף + 6 חודשים קדימה', essential: true, tip: 'בדוק תוקף עכשיו!' },
      { name: 'ויזות מודפסות (לפי יעד)', essential: true },
      { name: 'ביטוח נסיעות - הדפסה + PDF', essential: true, tip: 'שמור גם בענן!' },
      { name: 'כרטיסי טיסה (ebook + מודפס)', essential: true },
      { name: 'כרטיס אשראי + כרטיס גיבוי', essential: true, tip: 'Max + One Zero = שני כרטיסים' },
      { name: 'תעודת זהות ישראלית', essential: true },
      { name: 'כרטיס ביטוח לאומי (ישראלי)', essential: false },
      { name: 'מרשמי תרופות (אם רלוונטי)', essential: false },
      { name: 'מספר קונסוליה ישראלית (שמור בנייד)', essential: true }
    ]
  },
  beforeTravel: {
    title: 'לסדר לפני הטיול',
    icon: '✅',
    items: [
      { name: 'חיסונים (הפטיטיס A+B, טיפוס, קדחת צהובה)', essential: true, tip: '4-8 שבועות לפני!' },
      { name: 'כרטיסי SIM להזמנה מראש', essential: true, tip: 'SIM iBudget / מקומי בנחיתה' },
      { name: 'הורד מפות אופליין (Maps.me)', essential: true },
      { name: 'יידע הורים + שלח מסלול', essential: true },
      { name: 'העתק מסמכים לגוגל דרייב', essential: true },
      { name: 'פתח חשבון One Zero Bank', essential: true },
      { name: 'הזמן Inca Trail / Machu Picchu מראש', essential: false, tip: '3 חודשים מראש!' },
      { name: 'הודע לחברת האשראי על הנסיעה', essential: true },
      { name: 'בדוק תוקף ויזות + עמידה בדרישות', essential: true },
      { name: 'הורד Grab, Gojek, Uber לפי יעד', essential: true }
    ]
  }
};

var packingListFemale = {
  clothing: {
    title: 'לבוש',
    icon: '👗',
    items: [
      { name: '4-5 חולצות קלות / גופיות', essential: true, tip: 'Quick-dry, קצת יותר מגברים' },
      { name: '2 חולצות ארוכות שרוולים', essential: true, tip: 'מקדשים, קר, הגנה מחרקים + שמש' },
      { name: '1-2 שמלות קלות', essential: true, tip: 'גם טרקינג, גם ערב, גם חוף' },
      { name: 'מכנסי טרקינג', essential: true, tip: 'Quick-dry - Decathlon מצוין' },
      { name: 'לגינס דקים', essential: true, tip: 'למקדשים + טרקינג + שכבת בסיס' },
      { name: '5-6 תחתוני כותנה/מיקרופייבר', essential: true, tip: 'Merino Wool - ממליצות מאוד!' },
      { name: 'חזייה ספורט (2-3)', essential: true, tip: 'Balconette קל לייבוש' },
      { name: 'בגד ים + מגבת Quick-dry', essential: true },
      { name: 'מכנסיים קצרים', essential: true },
      { name: 'ז\'קט גשם קל (packable)', essential: true },
      { name: 'פליס/חולצה חמה', essential: false, tip: 'לנפאל/פטגוניה' },
      { name: 'כובע + מגבת שיער מיקרופייבר', essential: true, tip: 'מגבת שיער חוסכת זמן יבוש!' },
      { name: 'כפכפים + נעלי טרקינג', essential: true }
    ]
  },
  hygiene: {
    title: 'היגיינה',
    icon: '💄',
    items: [
      { name: 'שמפו + קונדישנר מוצק', essential: true, tip: 'Lush או Ethique - חוסך מקום!' },
      { name: 'קרם הגנה SPF 50', essential: true, tip: 'קחי הרבה - יגמר מהר' },
      { name: 'תחליב לחות קל', essential: true, tip: 'אקלים לח = פחות תחליב נחוץ' },
      { name: 'דאודורנט (לא ספריי)', essential: true, tip: 'ספריי = בעיה בטיסה' },
      { name: 'מוצרי ווסת (מספיק!)', essential: true, tip: 'Mooncup / Period Underwear - לחסוך מקום' },
      { name: 'Vagisil / תרופות לפטרייה', essential: true, tip: 'אקלים לח = בעיה נפוצה' },
      { name: 'Midwife / רחצה אינטימית', essential: true },
      { name: 'אנטי-מוש DEET', essential: true },
      { name: 'כדורי עיכול + אנטיביוטיקה', essential: true },
      { name: 'פלסטרים + גאזות', essential: true },
      { name: 'קרם שפתיים עם SPF', essential: true, tip: 'בטרקינג - שפתיים נשרפות!' },
      { name: 'אפנן מים / מגנזיום', essential: false, tip: 'לנסיעות ארוכות' },
      { name: 'קוטיקס יבשים (ספוג תאורה)', essential: false }
    ]
  },
  documents: {
    title: 'מסמכים',
    icon: '📄',
    items: [
      { name: 'דרכון תקף + 6 חודשים קדימה', essential: true, tip: 'בדקי תוקף עכשיו!' },
      { name: 'ויזות מודפסות (לפי יעד)', essential: true },
      { name: 'ביטוח נסיעות - הדפסה + PDF', essential: true },
      { name: 'כרטיסי טיסה', essential: true },
      { name: 'כרטיס אשראי + גיבוי', essential: true },
      { name: 'תעודת זהות', essential: true },
      { name: 'מרשמי תרופות אישיות', essential: false },
      { name: 'מספר קונסוליה ישראלית', essential: true }
    ]
  },
  beforeTravel: {
    title: 'לסדר לפני הטיול',
    icon: '✅',
    items: [
      { name: 'חיסונים (הפטיטיס, טיפוס, קדחת צהובה)', essential: true, tip: '4-8 שבועות מראש' },
      { name: 'ייעוץ גינקולוגי לנסיעה ארוכה', essential: true, tip: 'בקשי גלולות + תרופות לחצי שנה' },
      { name: 'גלולות + מרשם לחצי שנה', essential: true },
      { name: 'SIM card להזמנה', essential: true },
      { name: 'מפות אופליין (Maps.me)', essential: true },
      { name: 'העתקת מסמכים לענן', essential: true },
      { name: 'יידוע הורים + שיתוף מיקום', essential: true },
      { name: 'פתיחת חשבון One Zero Bank', essential: true },
      { name: 'הורדת SafeTravel + מינוי מחלקת קונסולרית', essential: true },
      { name: 'הורדת Grab, Gojek, Uber', essential: true }
    ]
  }
};

var facebookGroups = [
  {
    region: 'כללי - טיול גדול',
    emoji: '🌍',
    color: 'from-purple-600 to-indigo-600',
    groups: [
      {
        name: 'טיול גדול - ישראלים בעולם',
        url: 'https://www.facebook.com/groups/tiyulgadol',
        members: '150,000+',
        description: 'הקבוצה הכי גדולה למטיילים ישראלים. שאלות, טיפים, מציאת חברותא, הכל!',
        type: 'כללי',
        active: true
      },
      {
        name: 'ישראלים בחו"ל - טיולים ועבודה',
        url: 'https://www.facebook.com/groups/israelisabroad',
        members: '80,000+',
        description: 'לוגיסטיקה, ויזות, עבודה בחו"ל, טיפים כלליים',
        type: 'כללי',
        active: true
      },
      {
        name: 'מחפש/ת חברותא לטיול',
        url: 'https://www.facebook.com/groups/chaveruta',
        members: '45,000+',
        description: 'למצוא חבר/ה לטיול - לפי יעד ותאריך',
        type: 'חברותא',
        active: true
      }
    ]
  },
  {
    region: 'דרום מזרח אסיה',
    emoji: '🌏',
    color: 'from-orange-500 to-red-500',
    groups: [
      {
        name: 'ישראלים בתאילנד',
        url: 'https://www.facebook.com/groups/israeliinthailand',
        members: '120,000+',
        description: 'הקבוצה הכי פעילה לתאילנד - כל שאלה מוצאת תשובה תוך דקות',
        type: 'יעד',
        active: true,
        hot: true
      },
      {
        name: 'ישראלים בבאלי ואינדונזיה',
        url: 'https://www.facebook.com/groups/israelisbali',
        members: '65,000+',
        description: 'באלי, לומבוק, גילי, ג\'אווה - הכל כאן',
        type: 'יעד',
        active: true,
        hot: true
      },
      {
        name: 'ישראלים בוייטנאם',
        url: 'https://www.facebook.com/groups/israelisvietnam',
        members: '55,000+',
        description: 'האנוי, האלונג, הוי-אן, סייגון - הרצאות וטיפים',
        type: 'יעד',
        active: true
      },
      {
        name: 'ישראלים בנפאל',
        url: 'https://www.facebook.com/groups/israelisnepal',
        members: '35,000+',
        description: 'טרקינגים, קטמנדו, פוקארה - הכל על נפאל',
        type: 'יעד',
        active: true
      },
      {
        name: 'ישראלים בקמבודיה ולאוס',
        url: 'https://www.facebook.com/groups/israeliscambodiaLaos',
        members: '28,000+',
        description: 'אנגקור וואט, ואנג ויאנג, לואנג פרבאנג',
        type: 'יעד',
        active: true
      },
      {
        name: 'Full Moon Party Israel 🎉',
        url: 'https://www.facebook.com/groups/fullmoonisrael',
        members: '22,000+',
        description: 'כל מה שצריך לדעת על הפולמון - תאריכים, הוסטלים, מניות',
        type: 'אירוע',
        active: true,
        hot: true
      }
    ]
  },
  {
    region: 'דרום אמריקה',
    emoji: '🌎',
    color: 'from-green-500 to-teal-600',
    groups: [
      {
        name: 'ישראלים בדרום אמריקה',
        url: 'https://www.facebook.com/groups/israelissouthamerica',
        members: '95,000+',
        description: 'קבוצת האם לדרום אמריקה - הכל מפרו ועד פטגוניה',
        type: 'אזור',
        active: true,
        hot: true
      },
      {
        name: 'ישראלים בקולומביה',
        url: 'https://www.facebook.com/groups/israeliscolombia',
        members: '42,000+',
        description: 'מדיין, קרטחנה, בוגוטה - קולומביה של 2024',
        type: 'יעד',
        active: true,
        hot: true
      },
      {
        name: 'ישראלים בפרו',
        url: 'https://www.facebook.com/groups/israelisperu',
        members: '38,000+',
        description: 'מאצ\'ו פיצ\'ו, קוסקו, Rainbow Mountain - הכל על פרו',
        type: 'יעד',
        active: true
      },
      {
        name: 'ישראלים בארגנטינה',
        url: 'https://www.facebook.com/groups/israelisargentina',
        members: '30,000+',
        description: 'בואנוס איירס, פטגוניה, מנדוסה - ארגנטינה הכל',
        type: 'יעד',
        active: true
      },
      {
        name: 'ישראלים בברזיל',
        url: 'https://www.facebook.com/groups/israelisbrazil',
        members: '25,000+',
        description: 'ריו, פלורינופוליס, אמאזונס - ברזיל הצבעונית',
        type: 'יעד',
        active: true
      },
      {
        name: 'ישראלים בבוליביה',
        url: 'https://www.facebook.com/groups/israelisbolivia',
        members: '18,000+',
        description: 'Salar de Uyuni, La Paz, Sucre - בוליביה',
        type: 'יעד',
        active: true
      }
    ]
  },
  {
    region: 'אוסטרליה ונוזילנד',
    emoji: '🦘',
    color: 'from-yellow-500 to-orange-500',
    groups: [
      {
        name: 'ישראלים באוסטרליה',
        url: 'https://www.facebook.com/groups/israelisaustralia',
        members: '110,000+',
        description: 'קבוצת-על לאוסטרליה - Working Holiday, טיולים, עבודה',
        type: 'אזור',
        active: true,
        hot: true
      },
      {
        name: 'Working Holiday ישראלים באוסטרליה',
        url: 'https://www.facebook.com/groups/whvaustralia',
        members: '75,000+',
        description: 'ויזת WHV - עבודה בפארם, מציאת עבודה, Second Year Visa',
        type: 'עבודה',
        active: true,
        hot: true
      },
      {
        name: 'ישראלים בניו זילנד',
        url: 'https://www.facebook.com/groups/israelisnewzealand',
        members: '28,000+',
        description: 'לורד אוף זה רינגס, פיורדים, טרקינגים',
        type: 'יעד',
        active: true
      }
    ]
  },
  {
    region: 'אפריקה',
    emoji: '🦁',
    color: 'from-amber-500 to-yellow-500',
    groups: [
      {
        name: 'ישראלים באפריקה',
        url: 'https://www.facebook.com/groups/israelisafrica',
        members: '35,000+',
        description: 'ספארי, הטיול לאפריקה, מרוקו, מזרח אפריקה',
        type: 'אזור',
        active: true
      },
      {
        name: 'ספארי עם ישראלים - מזרח אפריקה',
        url: 'https://www.facebook.com/groups/israelissafari',
        members: '22,000+',
        description: 'קניה, טנזניה, רואנדה - ספארי עם ישראלים',
        type: 'יעד',
        active: true
      },
      {
        name: 'ישראלים במרוקו',
        url: 'https://www.facebook.com/groups/israelismorocco',
        members: '40,000+',
        description: 'מרקש, הסהרה, הסמטאות - מרוקו עם ישראלי פספורט',
        type: 'יעד',
        active: true,
        note: '⚠️ בדוק כניסה עם דרכון ישראלי לפני הטיול'
      }
    ]
  },
  {
    region: 'ארה"ב וקנדה',
    emoji: '🗽',
    color: 'from-blue-500 to-indigo-600',
    groups: [
      {
        name: 'ישראלים בארה"ב',
        url: 'https://www.facebook.com/groups/israelisusa',
        members: '85,000+',
        description: 'ניו יורק, לוס אנג\'לס, וגאס - כל ארה"ב',
        type: 'אזור',
        active: true
      },
      {
        name: 'National Parks Israel Community',
        url: 'https://www.facebook.com/groups/nationalparksisrael',
        members: '18,000+',
        description: 'הפארקים הלאומיים בארה"ב - Grand Canyon, Zion, Yosemite',
        type: 'נושא',
        active: true
      },
      {
        name: 'ישראלים בקנדה',
        url: 'https://www.facebook.com/groups/israeliscanada',
        members: '45,000+',
        description: 'טורנטו, ונקובר, מונטריאול - עבודה וטיול',
        type: 'יעד',
        active: true
      }
    ]
  }
];

var insuranceCompanies = [
  {
    name: 'הראל ביטוח נסיעות',
    logo: '🔵',
    url: 'https://www.harel-group.co.il',
    rating: 4.5,
    price: 'מ-₪8 ליום',
    highlights: ['כיסוי רפואי עד $2M', 'ביטול טיסה כלול', 'ספורט אתגרי בתוספת'],
    recommended: true,
    pros: ['שירות לקוחות טוב', 'אפשרות הארכה מרחוק', 'כיסוי COVID'],
    cons: ['מחיר גבוה יחסית', 'תהליך תביעה ארוך'],
    bestFor: 'טיולים ארוכים + ספורט אתגרי'
  },
  {
    name: 'מגדל ביטוח נסיעות',
    logo: '🟡',
    url: 'https://www.migdal.co.il',
    rating: 4.3,
    price: 'מ-₪7 ליום',
    highlights: ['כיסוי רפואי עד $1.5M', 'אובדן כבודה', 'ספורט בסיסי כלול'],
    recommended: false,
    pros: ['מחיר תחרותי', 'נציגות טובה בחו"ל', 'אפליקציה נוחה'],
    cons: ['ספורט אתגרי בתוספת', 'כיסוי ציוד מוגבל'],
    bestFor: 'תקציב נמוך + טיול בסיסי'
  },
  {
    name: 'כלל ביטוח נסיעות',
    logo: '🔴',
    url: 'https://www.clal.co.il',
    rating: 4.2,
    price: 'מ-₪6 ליום',
    highlights: ['כיסוי רפואי', 'ביטול טיסה', 'אחריות צד ג\''],
    recommended: false,
    pros: ['הכי זול בשוק', 'פלטפורם דיגיטלי מעולה'],
    cons: ['כיסוי רפואי נמוך יחסית', 'תגובה איטית בתביעות'],
    bestFor: 'טיול קצר + תקציב מינימלי'
  },
  {
    name: 'AIG ישראל',
    logo: '🟠',
    url: 'https://www.aig.co.il',
    rating: 4.7,
    price: 'מ-₪9 ליום',
    highlights: ['כיסוי עולמי מלא', 'פינוי רפואי כלול', 'ספורט אתגרי מקיף'],
    recommended: true,
    pros: ['כיסוי מקיף ביותר', 'שירות 24/7 בעברית', 'פינוי מהיר'],
    cons: ['הכי יקר', 'טפסים מורכבים'],
    bestFor: 'ספורט קיצוני + טיולי ג\'ונגל / הרים'
  },
  {
    name: 'Selekt (אינסיילנד)',
    logo: '🟢',
    url: 'https://www.selekt.co.il',
    rating: 4.8,
    price: 'מ-₪7.5 ליום',
    highlights: ['מותאם למטיילים צעירים', 'Working Holiday מיוחד', 'ספורט כלול'],
    recommended: true,
    hot: true,
    pros: ['הכי מומלץ בקבוצות הפייסבוק', 'תהליך פשוט', 'אפשרות הארכה קלה'],
    cons: ['חדש יחסית', 'פחות ניסיון'],
    bestFor: 'מטיילים צעירים, WHV, Working Holiday'
  },
  {
    name: 'מנורה מבטחים',
    logo: '🔵',
    url: 'https://www.menora.co.il',
    rating: 4.1,
    price: 'מ-₪7 ליום',
    highlights: ['כיסוי רפואי', 'ביטול טיסה', 'אובדן מסמכים'],
    recommended: false,
    pros: ['מחיר סביר', 'ותיקה ומוכרת'],
    cons: ['שירות לקוחות בינוני', 'פחות מותאם לטיולים ארוכים'],
    bestFor: 'טיול קצר עד חודש'
  }
];

var coverageTypes = [
  {
    icon: '🏥',
    name: 'כיסוי רפואי',
    importance: 'חובה',
    description: 'הכי חשוב! כיסוי הוצאות רפואיות בחו"ל - אשפוז, ניתוח, תרופות',
    tip: 'ודא מינימום $500,000 כיסוי - עדיף $1-2M',
    color: 'red'
  },
  {
    icon: '✈️',
    name: 'ביטול/שינוי טיסה',
    importance: 'מאוד מומלץ',
    description: 'אם המטוס מבוטל, נדחה, או שנאלצת לחזור הביתה מוקדם',
    tip: 'שמור קבלות מכל הוצאה - תצטרך אותן',
    color: 'blue'
  },
  {
    icon: '🎒',
    name: 'אובדן/גניבת כבודה',
    importance: 'מומלץ',
    description: 'אם הכבודה אבדה, נגנבה, או ציוד יקר ערך',
    tip: 'צלם את הציוד לפני הטיול להוכחה',
    color: 'purple'
  },
  {
    icon: '🚁',
    name: 'פינוי רפואי',
    importance: 'חשוב',
    description: 'טיסת פינוי לישראל במקרה חירום - עלות ₪50,000-200,000',
    tip: 'מקומות כמו נפאל/ג\'ונגל - חובה לבדוק',
    color: 'orange'
  },
  {
    icon: '⛷️',
    name: 'ספורט אתגרי',
    importance: 'לפי יעד',
    description: 'גלשנות, צניחה, טרקינג, סקי - רוב הביטוחים לא כוללים ברגיל',
    tip: 'הוסף תוספת ספורט! עולה ₪5-15 ליום',
    color: 'green'
  },
  {
    icon: '⚖️',
    name: 'אחריות צד ג\'',
    importance: 'מומלץ',
    description: 'אם גרמת נזק לאחר - נזקי רכוש, פגיעה גופנית',
    tip: 'חשוב בעיקר בנהיגה/השכרת רכב',
    color: 'yellow'
  }
];

var creditCards = [
  {
    name: 'מקס (Visa)',
    icon: '💳',
    forexFee: '1.5%',
    recommended: true,
    benefits: ['המרת מטבע זולה', 'ביטוח נסיעות בסיסי כלול', 'הנחות בחו"ל'],
    url: 'https://www.max.co.il',
    tip: 'הכרטיס הכי מומלץ בקבוצות הפייסבוק ל-2024'
  },
  {
    name: 'Cal (Mastercard)',
    icon: '💳',
    forexFee: '1.8%',
    recommended: true,
    benefits: ['נקודות על קניות', 'ביטוח נסיעות', 'CAL Online יתרון'],
    url: 'https://www.cal.co.il',
    tip: 'טוב לנקודות ולקניות גדולות'
  },
  {
    name: 'One Zero Bank',
    icon: '📱',
    forexFee: '0%',
    recommended: true,
    hot: true,
    benefits: ['אפס עמלת המרה!', 'בנק דיגיטלי', 'קרדיט ישיר בחו"ל'],
    url: 'https://onezero.co.il',
    tip: 'הכי טוב לטיולים ארוכים - חוסך הרבה כסף!'
  },
  {
    name: 'Leumi Card',
    icon: '💳',
    forexFee: '2%',
    recommended: false,
    benefits: ['נקודות Miles & More', 'ביטוח נסיעות כלול'],
    url: 'https://www.leumicard.co.il',
    tip: 'טוב אם יש לך הרבה נקודות צבורות'
  }
];

var insuranceTips = [
  {
    icon: '📋',
    title: 'קרא את הפוליסה לפני הקנייה',
    text: 'במיוחד את הסעיפים שאתה אוהב לדלג עליהם - מה כלול ומה לא. ספורט קיצוני? קריאה מוקדמת יכולה להציל אותך.'
  },
  {
    icon: '📸',
    title: 'צלם את תעודת הביטוח + דרכון',
    text: 'שמור בגוגל דרייב, בדוא"ל, ותן לחבר עותק. בחירום - תחפש דקה, לא שעה.'
  },
  {
    icon: '🏥',
    title: 'שמור קבלות מכל הוצאה רפואית',
    text: 'כרטיסים, קבלות בעברית + מתורגמות. תביעה ללא קבלות = לא יאושר.'
  },
  {
    icon: '📞',
    title: 'שמור מספר חירום של חברת הביטוח',
    text: 'הוסף לאנשי קשר עם הכינוי "ביטוח חירום". מספר זמין 24/7 מחו"ל - שווה זהב.'
  },
  {
    icon: '⏰',
    title: 'הארכת ביטוח מרחוק',
    text: 'אם הטיול מתארך - אפשר להאריך מרוב חברות. עדיף לפנות לפני שהביטוח פג.'
  },
  {
    icon: '💊',
    title: 'תרופות כרוניות',
    text: 'בקש מהרופא מרשם לכל תקופת הטיול. בחו"ל לא תמיד יתנו ללא מרשם ישראלי.'
  }
];

var travelerTips = [
  {
    category: 'בטיחות',
    emoji: '🛡️',
    color: 'border-red-500',
    bgColor: 'bg-red-500/10',
    tips: [
      {
        title: 'פיזור כסף - חוק הברזל',
        text: 'אל תשים את כל הכסף במקום אחד. מזומן קטן בכיס, חלק בתיק, כרטיס אשראי נפרד. תמיד השאר לעצמך $50 חירום מוסתר.',
        source: 'קבוצת ישראלים בדרום אמריקה',
        votes: 2847
      },
      {
        title: 'גנב את הגנב - רצועת ביטחון בחזה',
        text: 'ב-BareFace או Amazon - קני ארנק צמוד לגוף שנכנס מתחת לחולצה. בערים כמו בנגקוק, בוגוטה, לימה - אל תצא ללא זה.',
        source: 'r/solotravel',
        votes: 1923
      },
      {
        title: 'צילום כל המסמכים לענן',
        text: 'דרכון, ויזה, ביטוח, כרטיסי טיסה - צלם הכל, שמור בGoogle Drive בתיקייה "Emergency Docs". תן גישה לאחד מההורים.',
        source: 'טיפ קהילתי',
        votes: 3102
      },
      {
        title: 'אפליקציית מפות אופליין',
        text: 'הורד Maps.me או Google Maps offline לפני שתגיע לאזור. בג\'ונגל, בדרכים נידחות - אין אינטרנט אבל יש GPS.',
        source: 'ישראלים בנפאל',
        votes: 1654
      },
      {
        title: 'בריחה מספר אחת - תמיד דע איפה הקונסוליה',
        text: 'שמור בטלפון את כתובת וטלפון הקונסוליה הישראלית בכל מדינה. זה מה שתצטרך בסיטואציה של אמת.',
        source: 'משרד החוץ הישראלי',
        votes: 1421
      }
    ]
  },
  {
    category: 'כסף וחיסכון',
    emoji: '💰',
    color: 'border-green-500',
    bgColor: 'bg-green-500/10',
    tips: [
      {
        title: 'שמור על One Zero Bank - אפס עמלה',
        text: 'הכרטיס הכי חכם לטיול. אפס עמלת המרה, תשלום ישיר, ומשיכות ATM זולות. מישראלים שחזרו - "חסכתי 3,000 ₪ בשנה".',
        source: 'ישראלים בדרום מזרח אסיה',
        votes: 4521,
        hot: true
      },
      {
        title: 'אל תחלף כסף בשדה התעופה',
        text: 'שדות תעופה נותנים את השערים הכי גרועים. חלף מינימום לתחבורה בלבד, ואז מצא ATM או חלפן בעיר.',
        source: 'r/travel',
        votes: 2318
      },
      {
        title: 'Hostelworld + Booking.com - השוואה',
        text: 'תמיד השווה. לפעמים להזמין ישירות בהוסטל זול יותר ב-10-15%. שאל "any discount for cash?"',
        source: 'בלוג מסע ישראלי',
        votes: 1789
      },
      {
        title: 'Food Market > Restaurant',
        text: 'שוקי מזון מקומיים תמיד זולים וטעימים יותר. בבנגקוק - Or Tor Kor. בהוי-אן - Central Market. בלימה - Mercado de Surquillo.',
        source: 'מטיילת ישראלית',
        votes: 2103
      },
      {
        title: 'Couchsurfing לחסוך + לחוות',
        text: 'Couchsurfing.com - לינה חינם אצל מקומיים + חוויה אמיתית. בדוק פרופיל, קרא reviews. נסה קודם בערים גדולות.',
        source: 'קבוצת טיול גדול',
        votes: 987
      }
    ]
  },
  {
    category: 'בריאות ורפואה',
    emoji: '💊',
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
    tips: [
      {
        title: 'חיסונים לפני הטיול - הרשימה המלאה',
        text: 'לדרום מזרח אסיה: הפטיטיס A+B, טיפוס, דיפטריה, כלבת. לדרום אמריקה: קדחת צהובה (חובה!), מלריה לחלק. בדוק טרוקמד 2-3 חודשים לפני.',
        source: 'אתר משרד הבריאות',
        votes: 3245
      },
      {
        title: 'Travelers\' Diarrhea - הכנה מוקדמת',
        text: 'ב-99% תחלה בבטן. קני מוקדם: Imodium, Electrolytes, Norfloxacin (אנטיביוטיקה). שתייה מבקבוקים בלבד באסיה.',
        source: 'ד"ר נסיעות ישראלי',
        votes: 2876
      },
      {
        title: 'כרטיס SIM מקומי - הכי חשוב',
        text: 'קני SIM בשדה התעופה עם אינטרנט מקומי. תאילנד: True Move, DTAC. וייטנאם: Viettel. 30-50 שקל לחודש. WhatsApp + Maps = חיסכון עצום.',
        source: 'ישראלים בתאילנד',
        votes: 3890
      },
      {
        title: 'שמש = אויב #1',
        text: 'SPF 50 כל בוקר. בטרקינג - כובע, שרוולים. התייבשות בהר גבוה הורגת יותר מכל שאר הסכנות. שתה 3 ליטר ביום בטרקינג.',
        source: 'מדריך טרקינגים',
        votes: 1567
      },
      {
        title: 'ביטוח שיניים',
        text: 'שן שבורה בחו"ל = $200-500 ללא ביטוח. בדוק שהביטוח כולל שיניים, או בדוק קלינקות שיניים מקומיות (בתאילנד עולה 20% ממה שבישראל).',
        source: 'קהילת מטיילים',
        votes: 1234
      }
    ]
  },
  {
    category: 'לוגיסטיקה',
    emoji: '🗺️',
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
    tips: [
      {
        title: 'Night Bus = חיסכון כפול',
        text: 'נסיעות לילה = אתה ישן + לא משלם על לינה. בוייטנאם "Sleeping Bus" הוא תרבות. בפרו "Night Bus" מקוסקו ללימה 10 שעות.',
        source: 'Backpacker Trail',
        votes: 2543
      },
      {
        title: 'Book Machu Picchu 3 חודשים מראש',
        text: 'מאצ\'ו פיצ\'ו מוגבל ל-2,500 מבקרים ביום. אם אתה מגיע בעונה גבוהה - הזמן ב-machupicchu.gob.pe 3 חודשים מראש!',
        source: 'ישראלים בפרו',
        votes: 4231,
        hot: true
      },
      {
        title: 'Grab/Gojek > Tuk Tuk',
        text: 'Grab (=אובר דרום מזרח אסיה) בתאילנד, וייטנאם, אינדונזיה - מחיר קבוע, לא מתווכחים. מציל מרמאויות טוק-טוק.',
        source: 'ישראלים בבנגקוק',
        votes: 3102
      },
      {
        title: 'Skyscanner - הכלי שחוסך הכי הרבה',
        text: 'Set Price Alert על ה-Skyscanner. טייל בגמישות תאריכים - פעמים רבות יש הפרש ₪300-800 בין ימי שבוע.',
        source: 'קבוצת טיול גדול',
        votes: 2890
      },
      {
        title: 'Hostel vs AirBnB - מתי מה',
        text: 'הוסטל: כשאתה לבד ורוצה להכיר אנשים, יותר זול. AirBnB: כשאתם קבוצה של 3+, לעתים קרובות יוצא פחות ויש מטבח.',
        source: 'r/solotravel',
        votes: 1876
      }
    ]
  },
  {
    category: 'תרבות ואנשים',
    emoji: '🤝',
    color: 'border-yellow-500',
    bgColor: 'bg-yellow-500/10',
    tips: [
      {
        title: 'למד 5 מילים בשפה המקומית',
        text: 'שלום, תודה, כמה עולה, טעים, לא תודה - 5 מילים פותחות לך עולם. מקומיים מתרגשים שאנגלי לומד שפתם.',
        source: 'מטיילים ותיקים',
        votes: 2341
      },
      {
        title: 'כבד מקדשים ומקומות קדושים',
        text: 'כתפיים + ברכיים מכוסים במקדשים באסיה. נעליים בחוץ. אל תפנה גב לפסל בודהה לצילום. זה לא רק כבוד - זה גישה.',
        source: 'מדריכי תרבות',
        votes: 1987
      },
      {
        title: 'Haggling - האמנות של המיקוח',
        text: 'בשוקי אסיה ואמריקה: הצע 50% מהמחיר. לא יקבלו - 60%. תמיד חייכן, אף פעם לא רציני. "אם אתה לא מסכים, אני הולך".',
        source: 'קבוצת ישראלים',
        votes: 1654
      },
      {
        title: 'Workaway + Worldpackers',
        text: 'Workaway.info - עבוד 4-5 שעות ביום תמורת לינה+אוכל. מצוין לחוות תרבות מקומית + לחסוך. הוסטל, חווה, פרויקט',
        source: 'Digital Nomad Community',
        votes: 1123
      }
    ]
  },
  {
    category: 'ישראלים בחו"ל',
    emoji: '🇮🇱',
    color: 'border-blue-400',
    bgColor: 'bg-blue-400/10',
    tips: [
      {
        title: 'מצא ישראלים מקומיים',
        text: 'בכל עיר גדולה יש קבוצת WhatsApp של ישראלים. חפש ב"ישראלים ב-[עיר]" בפייסבוק.',
        source: 'קהילת מטיילים ישראלים',
        votes: 1876
      },
      {
        title: 'הקונסוליה הישראלית',
        text: 'שמור את המספר. בחירום - הם ישלחו עורך דין, יסדרו כסף, יפנו אותך.',
        source: 'משרד החוץ הישראלי',
        votes: 2134
      },
      {
        title: 'Moodli/Madlan',
        text: 'אפליקציית ישראלים בחו"ל לשיתוף דירות, טיולים משותפים.',
        source: 'קבוצת ישראלים בחו"ל',
        votes: 987
      },
      {
        title: 'שבת ישראלית בחו"ל',
        text: 'בבנגקוק, בע"א, בוגוטה - יש שבת ישראלית עם אוכל ישראלי. חפש ב-Facebook.',
        source: 'ישראלים בדרום מזרח אסיה',
        votes: 1543
      }
    ]
  },
  {
    category: 'ציוד וטכנולוגיה',
    emoji: '📱',
    color: 'border-cyan-400',
    bgColor: 'bg-cyan-400/10',
    tips: [
      {
        title: 'Power Bank 20,000mAh',
        text: 'לפרד מהחנות חיובית. בטרקינג של 3 ימים ללא חשמל - Power Bank = חיים.',
        source: 'מטיילי טרקינגים',
        votes: 2765
      },
      {
        title: 'GoPro + Housing',
        text: 'אם אתה צולל/גולש. Hero Black 11 + Housing = 400 ₪. שווה כל שקל.',
        source: 'קהילת צוללנים',
        votes: 1432
      },
      {
        title: 'Kindle לא מובן מאליו',
        text: '3 ספרים בנסיעת לילה 12 שעות = 3 ספרים דיגיטליים. חסוך 600 גרם.',
        source: 'בלוג מסע',
        votes: 1198
      },
      {
        title: 'eSIM בינלאומי - Airalo',
        text: 'לא מחכה לשדה תעופה. אקטיבציה אוטומטית. Airalo הכי זול.',
        source: 'Digital Nomad Community',
        votes: 3210
      }
    ]
  }
];

var commonMistakes = [
  {
    icon: '❌',
    mistake: 'לא לקחת ביטוח נסיעות',
    solution: 'ביטוח עולה ₪500-1500 לחצי שנה. אשפוז בארה"ב ללא ביטוח = $50,000.'
  },
  {
    icon: '❌',
    mistake: 'להשאיר הכנה לאחרון',
    solution: 'חיסונים צריך 4-8 שבועות מראש. ויזה לאוסטרליה - 3 שבועות. הזמן Inca Trail 3 חודשים!'
  },
  {
    icon: '❌',
    mistake: 'להחזיק כל הכסף בארנק',
    solution: 'פיזור: מעט מזומן בכיס, כרטיס אשראי בתיק, $100 חירום מוסתר בנעל.'
  },
  {
    icon: '❌',
    mistake: 'לקחת כבודה כבדה מדי',
    solution: 'Rule of Thumb: אם לא יכולת לרוץ עם התיק - הוא כבד מדי. מקסימום 10-12 ק"ג.'
  },
  {
    icon: '❌',
    mistake: 'לתכנן כל יום מראש',
    solution: 'תכנן שבוע-שבועיים מראש, השאר גמישות. הדברים הטובים קורים ב-spontaneity.'
  },
  {
    icon: '❌',
    mistake: 'לנסוע ללא סים מקומי',
    solution: 'קני SIM בשדה התעופה. 30-50 ₪ לחודש = ניווט, WhatsApp, הכל.'
  }
];

// ── Budget data ──────────────────────────────────────────────────────────────
var BUDGET_DATA = {
  thailand:  { name:'תאילנד',   emoji:'🇹🇭', accommodation:{low:40,mid:120,high:300}, food:{low:50,mid:120,high:250},  transport:{low:20,mid:60,high:150},  activities:{low:30,mid:100,high:250},  flights:2800, visa:0,   insurancePer30:300, note:'זול מאוד! חוף + Full Moon Party + Spa' },
  vietnam:   { name:'וייטנאם',  emoji:'🇻🇳', accommodation:{low:35,mid:100,high:280}, food:{low:40,mid:100,high:200},  transport:{low:30,mid:70,high:150},  activities:{low:25,mid:80,high:200},   flights:3000, visa:100, insurancePer30:300, note:'זול + ייחודי + האלונג Bay!' },
  indonesia: { name:'באלי',     emoji:'🇮🇩', accommodation:{low:50,mid:150,high:400}, food:{low:40,mid:110,high:280},  transport:{low:30,mid:80,high:200},  activities:{low:40,mid:120,high:300},  flights:3200, visa:0,   insurancePer30:300, note:'Beach Clubs + מקדשים + הרים' },
  peru:      { name:'פרו',      emoji:'🇵🇪', accommodation:{low:60,mid:160,high:400}, food:{low:55,mid:140,high:300},  transport:{low:40,mid:100,high:250}, activities:{low:80,mid:200,high:500},  flights:5500, visa:0,   insurancePer30:350, note:"מאצ'ו פיצ'ו + Rainbow Mountain" },
  colombia:  { name:'קולומביה', emoji:'🇨🇴', accommodation:{low:60,mid:170,high:400}, food:{low:50,mid:130,high:280},  transport:{low:35,mid:90,high:220},  activities:{low:60,mid:150,high:400},  flights:5000, visa:0,   insurancePer30:350, note:'מדיין + קרטחנה = קסם!' },
  argentina: { name:'ארגנטינה', emoji:'🇦🇷', accommodation:{low:70,mid:200,high:500}, food:{low:60,mid:160,high:350},  transport:{low:50,mid:120,high:300}, activities:{low:70,mid:180,high:450},  flights:5500, visa:0,   insurancePer30:380, note:'Asado + פטגוניה + טנגו' },
  australia: { name:'אוסטרליה', emoji:'🇦🇺', accommodation:{low:180,mid:400,high:900},food:{low:100,mid:220,high:450}, transport:{low:80,mid:200,high:500},  activities:{low:100,mid:250,high:600}, flights:4000, visa:700, insurancePer30:500, note:'Working Holiday Visa!' },
  kenya:     { name:'קניה',     emoji:'🇰🇪', accommodation:{low:100,mid:300,high:800},food:{low:60,mid:150,high:350},  transport:{low:50,mid:150,high:400}, activities:{low:200,mid:500,high:1500},flights:2500, visa:200, insurancePer30:400, note:'ספארי שווה כל שקל!' },
  usa:          { name:'ארה"ב',      emoji:'🇺🇸', accommodation:{low:200,mid:500,high:1200},food:{low:130,mid:280,high:600},transport:{low:100,mid:250,high:600}, activities:{low:100,mid:250,high:700}, flights:3500, visa:60,  insurancePer30:600, note:'הכי יקר — Road Trip חוסך!' },
  philippines:  { name:'פיליפינים',  emoji:'🇵🇭', accommodation:{low:60,mid:160,high:400}, food:{low:50,mid:130,high:280},  transport:{low:30,mid:90,high:220},  activities:{low:40,mid:120,high:300},  flights:3800, visa:0,   insurancePer30:320, note:'Island Hopping + Diving + חופים מהיפים בעולם!' },
  morocco:      { name:'מרוקו',      emoji:'🇲🇦', accommodation:{low:80,mid:200,high:500}, food:{low:60,mid:150,high:300},  transport:{low:40,mid:100,high:250}, activities:{low:50,mid:140,high:350},  flights:1200, visa:0,   insurancePer30:280, note:'הכי קרוב לישראל! סהרה + מדינות + תבלינים' },
  newzealand:   { name:'ניו זילנד',  emoji:'🇳🇿', accommodation:{low:200,mid:450,high:1000},food:{low:120,mid:250,high:500},transport:{low:100,mid:250,high:600}, activities:{low:150,mid:350,high:800}, flights:5500, visa:60,  insurancePer30:550, note:'Bungee + Hobbiton + פיורדים = אגדה!' }
};

// ── Aliases for pages.js ──────────────────────────────────────────────────────
var DESTINATIONS        = destinations;
var DESTINATION_LIST    = destinationList;
var PACKING_MALE        = packingListMale;
var PACKING_FEMALE      = packingListFemale;
var FACEBOOK_GROUPS     = facebookGroups;
var INSURANCE_COMPANIES = insuranceCompanies;
var COVERAGE_TYPES      = coverageTypes;
var CREDIT_CARDS        = creditCards;
var TRAVELER_TIPS       = travelerTips;
var COMMON_MISTAKES     = commonMistakes;
