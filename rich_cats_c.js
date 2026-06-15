(function() {
  var richCatsC = {
    chile: {
      scenery: { items: [
        { name: 'טורס דל פיין — פטגוניה', image: 'https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=600&q=80', desc: 'שלושת המגדלים הכחולים של פטגוניה — גרניט ענק שצומח מהפמפה. אחד מ-10 הנופים הטובים בעולם.' },
        { name: 'אתקמה — מדבר הכוכבים', image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=600&q=80', desc: 'המדבר היבש ביותר בעולם — שמיים השחורים ביותר, ייחודי לצפייה בכוכבים. עמק הירח עם דיונות ורוד.' },
        { name: 'וולקאן ווייפינגורה', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'הר הגעש המושלם ביותר בדרום אמריקה — חרוט סימטרי לחלוטין. ב-2,847מ\' על אי ב-Lago Villarrica.' },
        { name: 'איי צ\'ילואה', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: 'ארכיפלג 43 אי עם כנסיות עץ צבעוניות ב-UNESCO, חוות ים ואנשים שחיים כמו לפני 200 שנה.' }
      ]},
      hiking: { items: [
        { name: 'W Trek — Torres Del Paine', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: '5 ימים דרך קרחון Grey, Valle del Frances ומגדלי Torres — אחד ה-10 הטרקים הטובים בעולם. הזמינו 6 חודשים מראש.' },
        { name: 'O Circuit', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: '9 ימים סביב כל הפארק — מגלים צדדים שאף אחד לא רואה ב-W Trek. קשה יותר, מדהים יותר.' },
        { name: 'Villarrica Traverse', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: '4 ימים בין הרי הגעש הפעילים של אזור האגמים. מדריך מוסמך מחייב.' }
      ]},
      parties: { items: [
        { name: 'סנטיאגו — Bellavista', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'שכונת הלילה של סנטיאגו — גרפיטי ואמנות רחוב, ברים שנפתחים ב-11 ואנשים שיוצאים ב-2.' },
        { name: 'Valparaiso — חיי לילה', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', desc: 'עיר הנמל הציורית — גרפיטי בכל קיר, ברים בתוך אניות ישנות ומוסיקה אינדי עד לפנות בוקר.' }
      ]},
      beaches: { items: [
        { name: 'Bahia Inglesa', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'צ\'ילה חם — חוף מדברי ב-Atacama Region עם מים כחולים רדודים. לא מצפים לזה בצ\'ילה.' }
      ]},
      attractions: { items: [
        { name: 'Valparaiso — גרפיטי', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80', desc: 'מוזיאון פתוח — כל גבעה צבע אחר, כל קיר אמנות. Ascensores עתיקים עולים בין השכונות.' },
        { name: 'Museum de la Memoria', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'מוזיאון לזכר קורבנות פינוצ\'ה — 3,000 אנשים שנרצחו. חינם, מטלטל ואי-אפשר שלא לבכות.' },
        { name: 'Elqui Valley', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: 'עמק כוכבים ופיסקו — ביקור בקצה Atacama עם שדות ענבים, מצפות כוכבים ומדיום מקומי.' }
      ]},
      food: { items: [
        { name: 'אמפנאדה צ\'ילנה', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'כיסוני בצק מאפה עם בשר, ביצה קשה, זיתים ובצל — ארוחת הצהריים הלאומית. ב-$1.5 ברחוב.', price: '₪5-8' },
        { name: 'Caldillo de Congrio', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'מרק קונגר-אנגל — שיר שנכתב עליו על ידי פבלו נרואה. בשר דג עם קרם ועגבנייה, קלאסיקה חוף.', price: '₪25-40' },
        { name: 'פיסקו סאואר', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80', desc: 'המשקה הלאומי של צ\'ילה — ויסקי ענבים עם ביצת לבן, מיץ לימון ואנגוסטורה. קוקטייל של ה-Andes.', price: '₪15-25' }
      ]},
      mustdo: { items: [
        { name: 'W Trek פטגוניה', image: 'https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=600&q=80', desc: 'הסיבה האמיתית לבוא לצ\'ילה — 5 ימים בפארק. אוהלים או Refugios. הזמינו הרבה מראש.' },
        { name: 'Stargazing באתקמה', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'San Pedro de Atacama מציע מבחר מצפות — ALMA ב-5,000מ\' הוא גדול מצפות בעולם. Tour לילי $40.' },
        { name: 'גלישה בהר הגעש', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'Villarrica — עלייה לפסגת הר הגעש הפעיל עם מדריך ואחרי כן גלישה בחול הוולקאני למטה.' }
      ]}
    },

    costarica: {
      scenery: { items: [
        { name: 'ג\'ונגל מנואל אנטוניו', image: 'https://images.unsplash.com/photo-1592406237554-9cd09e5de86a?w=600&q=80', desc: 'פארק לאומי עם חוף לבן ויער טרופי שמגיעים מהים — קפוצ\'ינים, עצלנים ותוקאנים בגובה 2מ\'.' },
        { name: 'המגרה ארנאל', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: 'הר הגעש הנפעל ביותר של קוסטה ריקה — אגם ירוק לרגלו, ספרינגס חמות ג\'אקוזי טבעי, ג\'ונגל.' },
        { name: 'חצי האי אוסה — קורקובאדו', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: '2.5% מכלל מינים בעולם חיים פה — הצפיפות הביולוגית הגבוהה ביותר. ג\'גוואר, ג\'אגוואר וטפיר.' },
        { name: 'Monteverde', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'יער ענן ב-1,440מ\' — עטוף ערפל קבוע, אדמות עם אוכירדים וקיוצאל. Zipline ב-10 קוים בסמכות.' }
      ]},
      hiking: { items: [
        { name: 'Corcovado — 3 ימים', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: 'שביל ג\'ונגל ב-3 ימים עם מדריך — הנחש, הדג, הג\'גוואר. מדריך חובה וצריך לרשום מראש.' },
        { name: 'Cerro Chirripo', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'ההר הגבוה ביותר בקוסטה ריקה — 3,821מ\', 2 ימי שביל. בחשכה רואים אוקיינוס בשתי צדדים.' }
      ]},
      parties: { items: [
        { name: 'Quepos — Marina', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'עיר הנמל ליד מנואל אנטוניו — ברים של דייגים ומסעדות ים. Salsipuedes הוא הכי פופולרי.' },
        { name: 'Tamarindo', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', desc: 'עיר גלשנים בצפון חוף הפסיפי — ברים על החוף, מסיבות Gringas ו-Reggaeton עד 3 לפנות בוקר.' }
      ]},
      beaches: { items: [
        { name: 'פלאיה קונצ\'אל', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'חוף עשוי קונכיות בלבד — זכוכית טבעית בוורוד-לבן. מים שקטים לשחייה. מגיעים רק ברגל.' },
        { name: 'Santa Teresa', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', desc: 'גולשים, יוגה ושקיעות מקסיקניות — חוף חצי-אי ניקויה עם גלים מדהימים ורוח מערבית תמידית.' },
        { name: 'Cahuita — קריביים', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', desc: 'חוף קריבי עם אלמוגים, קופים שחורים ורגאיי — קוסטה ריקה האפריקאית. ל\'ה ריד לסן.' }
      ]},
      attractions: { items: [
        { name: 'San Jose — Mercado Central', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80', desc: 'שוק מרכזי של סן חוזה — קפה ירוק, מיצי פירות אקזוטיים וחנויות ירקות. הלב הפועם של קוסטה ריקה.' },
        { name: 'Tortuguero — צבי ים', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'מגיעים רק בספינה — יולי-ספטמבר טילת ביצי הצבים הגדולות בעולם. 3,000 צבים לילה אחד.' },
        { name: 'La Paz Waterfall', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: '5 מפלים ברצף בג\'ונגל עם פרפרים, בנות האנגולה הרמה ופוומה. אי-אפשר לחייה דיגיטלית.' }
      ]},
      food: { items: [
        { name: 'Gallo Pinto', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'אורז ושעועית שחורה מוקפצת — ארוחת הבוקר של קוסטה ריקה. עם ביצה, גבינה וטורטייה. יומיומי.', price: '₪8-12' },
        { name: 'Casado — צלחת שלמה', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'ארוחת הצהריים הקלאסית — אורז, שעועית, בשר, סלט ופלנטין מטוגן. ב-$5 בכל Soda קטנה.', price: '₪15-20' },
        { name: 'Ceviche de camarón', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80', desc: 'סביצ\'ה שרימפס בסגנון קוסטה ריקה — תוספת מיץ תפוזים ומחבוש. טרי מהיום.', price: '₪20-35' }
      ]},
      mustdo: { items: [
        { name: 'Zipline ב-Monteverde', image: 'https://images.unsplash.com/photo-1592406237554-9cd09e5de86a?w=600&q=80', desc: '10 קוים, 2 שעות, 1,590מ\' מעל יער הענן. Original Canopy Tour — $60. הכי טוב בעולם.' },
        { name: 'גלישה בTamarindo', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'שיעור גלישה ב-$50 עם מדריך — גלים עקביים ומושלמים למתחילים. 2 שעות ואתם עומדים.' },
        { name: 'White Water Rafting', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'נהר Pacuare — Grade III-IV, 28 ק"מ דרך ג\'ונגל. $90 כולל אוכל ומדריך. דרגת ה-Raft הטובה בעולם.' }
      ]}
    },

    nepal: {
      scenery: { items: [
        { name: 'אוורסט — Base Camp', image: 'https://images.unsplash.com/photo-1530018352490-c6eef07fd7e0?w=600&q=80', desc: '5,364מ\' — הטרקינג הכי מפורסם בעולם. 14 ימי הליכה דרך כפרי שרפה ומנזרים לרגל ההר הגבוה.' },
        { name: 'אנאפורנה Circuit', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'מסלול 200 ק"מ סביב רכס האנאפורנה — 18 ימי הליכה דרך 5 אזורי אקלים, מטרופיקי ועד קרחון.' },
        { name: 'פוחרה — אגם Phewa', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', desc: 'עיר מרגוע ירוקה עם אגם מול הרי Annapurna — שיתוף סירה בשקיעה. הרגיעה הכי יפה בנפאל.' },
        { name: 'Mustang — ממלכת Lo', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: 'הממלכה הנסתרת הצמודה לטיבט — מנזרים בצלעות של מדבר הרים, תרבות שנשמרה 600 שנה.' }
      ]},
      hiking: { items: [
        { name: 'EBC Trek — אוורסט', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: '14-21 ימים, מ-Lukla ב-2,860מ\' ל-Base Camp ב-5,364מ\'. עוברים דרך Namche Bazaar ומנזר Thyangboche.' },
        { name: 'Annapurna Base Camp', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: '12 ימים לבסיס האנאפורנה ב-4,130מ\' — יותר ירוק ופחות קיצוני מ-EBC. עדיין מדהים ב-100%.' }
      ]},
      parties: { items: [
        { name: 'קטמנדו — Thamel', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'שכונת המטיילים של קטמנדו — ברים, מסיבות טרקינג ו-Rum-Doodle Bar שמוקדש לטיפוסים.' },
        { name: 'פוחרה — Lakeside', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', desc: 'ברים על שפת האגם עם נוף ה-Annapurna — מוסיקה נפאלית, בירה Everest ו-Dahl Bhat. השקיעה מנצחת.' }
      ]},
      beaches: { items: [
        { name: 'אגם פוחרה', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'נפאל ים-נעולה — השכן הכחול הוא אגם Phewa עם קיאקינג, שחייה ושמרגד. מזכיר ים מרגיש.' }
      ]},
      attractions: { items: [
        { name: 'Boudhanath Stupa', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80', desc: 'הסטופה הגדולה ביותר בנפאל — עיניים בוּדהיסטיות שמסתכלות לכל כיוון. נזירים מוקפים בניחוחות קטורת.' },
        { name: 'Pashupatinath', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'מקדש הינדי על נהר Bagmati — שרפות לבנות קדישות על שפת הנהר. מוות כחלק מהחיים הציבוריים.' },
        { name: 'Bhaktapur — עיר עתיקה', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: 'UNESCO — עיר מימי-הביניים שנשמרה ב-90% מהמקור. מתבצעים כאן אותן טקסים מ-1000 שנה.' }
      ]},
      food: { items: [
        { name: 'Dal Bhat', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'עדשים ואורז עם קארי ירקות — ה-All-you-can-eat של טרקרים. מגישים פעמיים בלי לשאול ב-$3.', price: '₪8-12' },
        { name: 'Momo', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'כיסנים מאודים ממולאים עוף או ירקות — Dumplings נפאלי. 10 ב-$1 עם רוטב חריף אדום.', price: '₪5-10' },
        { name: 'Tongba', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80', desc: 'בירת דוחן נפאלית — דגנים מותססים בכוס עם קש. מחממת בהרים ב-4,000מ\'. חוויה ייחודית.', price: '₪5-10' }
      ]},
      mustdo: { items: [
        { name: 'טרקינג EBC', image: 'https://images.unsplash.com/photo-1530018352490-c6eef07fd7e0?w=600&q=80', desc: 'לא כולם עושים אוורסט אבל כולם צריכים לעשות EBC — 2 שבועות שישנו את הפרספקטיבה על חיים.' },
        { name: 'מוד פרה ב-Pokhara', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'Paragliding מ-Sarangkot — מעל האגם עם נוף ה-Annapurna. $80 ל-30 דקות. הכי יפה בעולם לפאראגליידינג.' },
        { name: 'Sunrise מ-Poon Hill', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: '3 ימי טרקינג קצר ל-Poon Hill ב-3,210מ\' — שחר מעל Annapurna ו-Dhaulagiri בוורוד-כחול.' }
      ]}
    },

    madagascar: {
      scenery: { items: [
        { name: 'Avenue of the Baobabs', image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=80', desc: 'שדרת 25 עצי בואוואב ענקיים שגילם 800 שנה — בשחר ובשקיעה הם נדלקים באור זהוב. ייחודי לעולם.' },
        { name: 'Tsingy de Bemaraha', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'UNESCO — מבוך של יתדות אבן גיר חדות בגובה 80מ\'. נחבש בכבלים עם קסדה. נוף מאדים.' },
        { name: 'Isalo Massif', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: 'פסגות אבן חול עתיקות עם שבילי ג\'ונגל, בריכות טבעיות וסייפאלים של גרנד קניון.' },
        { name: 'Nosy Be', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'אי ריח — Ylang-Ylang גדל בשדות וניחוחו ממלא את האוויר. מים כחולים וחוף שלא תשכחו.' }
      ]},
      hiking: { items: [
        { name: 'Tsingy Trek', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: '2-3 ימים ב-Tsingy עם קסדה, כבלים וגשרי תלייה — בין יתדות חדות, עם למורים ביציאות.' },
        { name: 'Isalo Canyon', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'שביל יום שלם בקניון עם בריכות טבע, מפלים ולמורים סוחלים בין הסלעים בסוף היום.' }
      ]},
      parties: { items: [
        { name: 'Nosy Be — Andilana', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'ברים קטנים על החוף הצפוני — Rum Three Horses, מוסיקה Malagasy ורקדנים מקומיים.' }
      ]},
      beaches: { items: [
        { name: 'Nosy Iranja', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', desc: 'שני איים מחוברים בשפל ב-100מ\' חוף לבן — אחד מהצילומים הכי מדהימים באפריקה. צבי ים מטילים.' },
        { name: 'Ifaty — ים הינדי', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', desc: 'שוניות ים הינדי בדרום מדגסקר — $25 לצלילה עם צבים ודגים שאין להם שם עדיין.' }
      ]},
      attractions: { items: [
        { name: 'למורים ב-Ranomafana', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80', desc: '12 מינים של למור ביותר — Golden Bamboo Lemur שאכלול גופן קבוע ב-Ranomafana. רק כאן בעולם.' },
        { name: 'Andasibe — Indri Lemur', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'ה-Indri — הלמור הגדול ביותר. בוקר שקיעה שהצרחות שלו מהדהדות ביער. 4 שעות מ-Tana.' },
        { name: 'Antananarivo', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: 'הבירה הגבוהה — Rova Manjakamiadana הוא ארמון המלכים על פסגת הגבעה, עם פנורמה.' }
      ]},
      food: { items: [
        { name: 'Romazava', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'הלאומי של מדגסקר — מרק עשיר עם בשר וירקות. מוגש על אורז. עמוק וטעים.', price: '₪10-18' },
        { name: 'Ravitoto', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'מניוק מגורר מבושל עם חזיר מעושן — מנה כפרית שאכלו מאות שנים. מוגש ב-Hotely מקומי.', price: '₪8-15' }
      ]},
      mustdo: { items: [
        { name: 'ווקינג עם למורים', image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=80', desc: 'ב-Andasibe יש למורים שהורגלו לבני אדם — עומדים על הכתף, יש להם הבעות פנים. בלתי נשכח.' },
        { name: 'Avenue of Baobabs בשקיעה', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'תכנינו את הלוגיסטיקה סביב שקיעה ב-Avenue de Baobabs — 15 דקות שצולמו בכל מגזין טבע בעולם.' },
        { name: 'צלילה עם וויל שארקס', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'Nosy Be — נובמבר-פברואר. Whale Shark snorkeling ב-$80. הכי קרוב לחיה הכי גדולה בים.' }
      ]}
    },

    ecuador: {
      scenery: { items: [
        { name: 'גלפגוס — איי הפלאים', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'איים שהשפיעו על דארווין — אריות ים ישנים בחוף, איגואנות ים, פינגווינים ב-0° כימות. כל חוק טבע אחר.' },
        { name: 'Cotopaxi — הר הגעש הפעיל', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'הר הגעש הפעיל הגבוה ביותר בעולם — 5,897מ\'. אפשר לטפס עד שלג עם מדריך ב-$150.' },
        { name: 'Cloud Forest — Mindo', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: 'יערות ענן בגובה 1,400מ\' עם 500 מיני ציפורים — Hummingbirds וKingfishers בגודל כף יד.' },
        { name: 'ריו באמבה — קו המשווה', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', desc: '0° כימות — עומדים על קו המשווה. מים שיורדים שמאלה בחצי האי הצפוני ומאגנה בדרומי. מגניב.' }
      ]},
      hiking: { items: [
        { name: 'Quilotoa Loop', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: '3-4 ימי הליכה בין כפרים אינדיאניים עד לאגם קלדרה ירקרק של Quilotoa. אחד מהטרקים הטובים בדרום אמריקה.' },
        { name: 'Cotopaxi climb', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'עלייה ב-2 לפנות בוקר עם קרמפונים ומחבט — $150 עם מדריך. 80% מגיעים לרכס ב-4,800מ\'.' }
      ]},
      parties: { items: [
        { name: 'קיטו — La Mariscal', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'הגריגוניה המפורסמת של קיטו — ברים, קלובים ובארים סביב Plaza Foch. פוגשים מטיילים מכל העולם.' }
      ]},
      beaches: { items: [
        { name: 'Montañita', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'Backpacker Beach Party — $5 לבית עם בסיס גלשנים ומסיבות רחוב. הכי Chill בדרום אמריקה.' },
        { name: 'Galápagos — Bartolome Island', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', desc: 'שחייה עם פינגווינים גלפגוס — הם שוחים מסביבכם ולא נבהלים. מים 23°C. פשוט מדהים.' }
      ]},
      attractions: { items: [
        { name: 'קיטו — העיר העתיקה', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80', desc: 'UNESCO — ראשונה שזכתה בתואר. קתדרלות קולוניאליות, מנזרים ורחובות מלפני 500 שנה. ב-2,850מ\'.' },
        { name: 'Nariz Del Diablo — רכבת', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'Devil\'s Nose — מסלול רכבת שיורד במדרון 45° ב-zigzag. פעם ישבו על הגג. היום בחלון. מחשיב.' },
        { name: 'Otavalo Market', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: 'שוק אינדיאני הגדול ביותר בדרום אמריקה — ידידיות Otavalo, בד יד, כובעים ותכשיטים. כל שבת.' }
      ]},
      food: { items: [
        { name: 'Ceviche de camarón', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'אקוואדורי — שרימפס גולמי בלימון עם פופקורן ופלנטין פרייד מעל. מוגש קר ב-$3.', price: '₪8-15' },
        { name: 'Llapingacho', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'קציצות תפוחי אדמה וגבינה מטוגנות — מוגשות עם אבוקדו. אוכל הרים אנדיני קלאסי.', price: '₪10-18' }
      ]},
      mustdo: { items: [
        { name: 'גלפגוס Snorkeling', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'ים גלפגוס הוא אחד מ-5 הטובים בצלילה בעולם — אריות ים, כרישי לוויתן וצבים. $100-150 ליום.' },
        { name: 'Mitad del Mundo', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'לעמוד על קו המשווה ב-0°00\'00\' — נסו לאזן ביצה על ראש מסמר (עובד). 20 דקות מקיטו.' },
        { name: 'Quilotoa Loop Trek', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: '4 ימי טרקינג בין כפרים אנדיניים עם לינה בבתי משפחה. ב-$10 לילה כולל ארוחות.' }
      ]}
    },

    srilanka: {
      scenery: { items: [
        { name: 'סיגיריה — סלע האריה', image: 'https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?w=600&q=80', desc: 'מבצר מלכים על סלע אנכי ב-200מ\' מהמאה ה-5 — פרסקאות בצד הסלע, גנות מלכותיות בבסיס.' },
        { name: 'Ella Gap — נוף תה', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'שדות תה אינסופיים ביניים הר Little Adam\'s Peak — צבע ירוק שצריך לראות פעם. Ella הכפר הכי טוב.' },
        { name: 'Mirissa — לוויתנים', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'חוף שמנובמבר-אפריל יוצאים לצפות בלוויתנים כחולים — הגדולים ביצור בעולם, 180 טון.' },
        { name: 'Kandy — עיר בירה', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', desc: 'עיר הרים בת 600 שנה עם Temple of the Tooth — שן בודהה קדוש השמור שם. טקס ב-6 ערב בכל יום.' }
      ]},
      hiking: { items: [
        { name: 'Adam\'s Peak — עלייה לילית', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: '5,200 מדרגות לפסגה בגובה 2,243מ\' — עולים ב-2 לפנות בוקר לזריחה. בודהיסטים, הינדואים ונוצרים עולים יחד.' },
        { name: 'Ella Rock Trek', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: '4 שעות עלייה-ירידה דרך שדות תה — תצפית על Ella Gap מהפסגה בלי אנשים. מדהים ב-7 בבוקר.' }
      ]},
      parties: { items: [
        { name: 'קולומבו — Galle Face', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'שדרת הים של קולומבו — Sky Bar בגג, ברים ים ואנשים שרוקדים בפארק בשקיעה. Leon על ים.' }
      ]},
      beaches: { items: [
        { name: 'Mirissa', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', desc: 'חוף קטן עם מים שקטים ועצי קוקוס טבועים — Coconut Tree Hill הוא הצילום הסרי-לנקי הכי מפורסם.' },
        { name: 'Arugam Bay — גלשנים', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', desc: 'מי-8 עד נובמבר — גלים מושלמים לגלישה וחוף בוהמי עם Bar-Beach שלא מסתיים.' },
        { name: 'Unawatuna', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'המפרצון היפה ביותר של סרי-לנקה — ניתן לשחות לנגד Jungle Beach הנסתר בצידו.' }
      ]},
      attractions: { items: [
        { name: 'Temple of the Tooth', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80', desc: 'שן בודהה קדושה בקנדי — תור ב-6 ערב עם תזמורת, נזירים לבנים ומאות עולים לרגל.' },
        { name: 'Yala National Park', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80', desc: 'ריכוז הלאופרדים הגבוה ביותר בעולם — $80 לספארי כולל מדריך. גם פילי, ניל גאים ועופות.' },
        { name: 'Galle Fort', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'UNESCO — מבצר הולנדי-פורטוגלי מ-1588 בשימוש. חנויות עתיקות, ברים ועמדות תצפית על הים.' }
      ]},
      food: { items: [
        { name: 'Rice and Curry', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'האוכל הסרי-לנקי — 8-12 קארים שונים בצד אורז. אוכלים עם יד ימין. ב-$2 ב-local restaurant.', price: '₪7-12' },
        { name: 'Kottu Roti', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'Roti קצוצה ומוקפצת עם ביצה, ירקות ובשר — הצלצול של המחבת מהדהד ברחובות. ב-$1.5.', price: '₪5-8' },
        { name: 'Hoppers', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80', desc: 'קציות בצק אורז בצורת קערה — עם ביצה בתוך או קוקוס וסוכר. ארוחת בוקר קלאסית.', price: '₪3-6' }
      ]},
      mustdo: { items: [
        { name: 'Adam\'s Peak לילי', image: 'https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?w=600&q=80', desc: 'עלו ב-1 בלילה, הגיעו לפסגה ב-5, ראו את הצל המשולש של ההר על העננים. פנומן שרק כאן קיים.' },
        { name: 'Tuk Tuk Road Trip', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'שכרו Tuk-Tuk ל-$10 ליום ונסעו לבד בין העיירות — החופש הכי גדול בסרי-לנקה.' },
        { name: 'Whale Watching Mirissa', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'ינואר-אפריל — לווייתנים כחולים עוברים קרוב לחוף. $25 לאווירה בים. 80% הצלחה לראות.' }
      ]}
    },

    southafrica: {
      scenery: { items: [
        { name: 'קייפ טאון — טייבל מאונטן', image: 'https://images.unsplash.com/photo-1501593870936-9c2e41625521?w=600&q=80', desc: 'ההר שמשקיף על קייפ טאון — עולים בכבלית או ב-3 שעות מסלול. V&A Waterfront מתחת כמו צעצוע.' },
        { name: 'Blyde River Canyon', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'הקניון הירוק ביותר בעולם — 25 ק"מ של יר. Three Rondavels הם 3 סלעים עגולים שצומחים מהקניון.' },
        { name: 'Cape of Good Hope', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: 'נקודת הפינה הדרומית של אפריקה — שני אוקיינוסים נפגשים. פינגווינים ב-Boulders Beach ב-10 ק"מ.' },
        { name: 'Drakensberg', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: 'רכס ההרים הגדול של SA — Cathedral Peak, פרסקאות של Bushmen מ-3,000 שנה ומפלים.' }
      ]},
      hiking: { items: [
        { name: 'Table Mountain Platteklip', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: '3 שעות עלייה לפסגת Table Mountain — יותר מרגש מהכבלית, פגישים עם דסיות ובבשות.' },
        { name: 'Otter Trail', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: '5 ימי Coastal Trail — 45 ק"מ לאורך חוף Garden Route. מחנות לינה מוקדמים, כלביים ומפלים.' }
      ]},
      parties: { items: [
        { name: 'קייפ טאון — Long Street', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'הסמל של חיי הלילה של קייפ טאון — 1 ק"מ ברים עם מוסיקה מגוונת. Waiting Room ו-Mama Africa.' },
        { name: 'Joburg — Maboneng', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', desc: 'שכונת האמנות הכי הוטה בדרום אפריקה — גלריות, מסעדות אפריקאיות, ברים ומוסיקה Afro-soul.' }
      ]},
      beaches: { items: [
        { name: 'Clifton Beaches', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: '4 חופות מוגנות מרוח סביב סלעים גרניטיים — קייפ טאוניים יפים אוהבים שם. קר ב-15° C.' },
        { name: 'Boulders Beach — פינגווינים', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', desc: 'פינגווינים אפריקניים על החוף — 2,000 מהם חיים חופשי. לשוחח איתם מ-1מ\' מרחק.' },
        { name: 'Wilderness Beach', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', desc: 'Garden Route — גלים, ציפורים ויער לאגונה. גן עדן שקט לרכיבת סוסים ושייט קיאק.' }
      ]},
      attractions: { items: [
        { name: 'Kruger National Park', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80', desc: 'ספארי עצמאי בג\'יפ — $30 לרכב ליום. Big 5 + היפופוטמים, קרוקודילים וג\'ירפות. לישון ב-Rest Camp.' },
        { name: 'Robben Island', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80', desc: 'האי שבו כלאו נלסון מנדלה 27 שנה — ביקור מודרך על ידי אסיר לשעבר. מרטיט ומשנה דעות.' },
        { name: 'Soweto', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'השכונה שמנדלה ודסמונד טוטו גדלו בה — Vilakazi Street עם שני בתי כבוד. Orlando Towers ב-Bungee.' }
      ]},
      food: { items: [
        { name: 'Braai', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'ה-BBQ הלאומי של SA — ארוחה ואירוע חברתי, לא רק בישול. Boerewors (נקניקייה) חובה.', price: '₪30-60' },
        { name: 'Bunny Chow', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'חצי כיכר לחם מרוקנת ומלאה קארי — מקורה מ-Durban ההודית. $3 בשוק. אכלו מבחוץ עם ידיים.', price: '₪8-15' },
        { name: 'Biltong', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80', desc: 'בשר בקר מיובש בתבלינים — הנשנוש הלאומי. Boerewors Biltong לאומי לחלוטין. בכל חנות.', price: '₪15-25' }
      ]},
      mustdo: { items: [
        { name: 'ספארי ב-Kruger', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80', desc: 'ספארי עצמאי ב-Kruger — שכרו ג\'יפ ונסעו לבד. $30 ליום. כוונו לזריחה ולשקיעה — חיות פעילות.' },
        { name: 'Table Mountain ורכיבה', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'כבלית ב-$30 אחר הצהריים — לפסגה עם שקיעה מעל קייפ טאון. אם אין ענן — Bucket List.' },
        { name: 'Boulders Beach פינגווינים', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'Simon\'s Town — ב-$7 נכנסים לחוף עם אלפי פינגווינים. צילום שניים מוקפים פינגווינים.' }
      ]}
    },

    philippines: {
      scenery: { items: [
        { name: 'פאלאוואן', image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80', desc: 'הוכרזה כ-Best Island בעולם 7 פעמים — לגונות טורקיז, מצוקי גיר ומי ים שקופים ב-30מ\' עומק.' },
        { name: 'Chocolate Hills — בוהול', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: '1,268 גבעות עגולות שמשתנות בחום לחום שוקולד — תעלומה גיאולוגית. הוורד ב-9 בבוקר לפני שמתחממות.' },
        { name: 'Batad Rice Terraces', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'UNESCO — 2,000 שנה של חרב טרסות בצורת אמפיתיאטר ב-Ifugao. הכי ציורי בפיליפינים.' },
        { name: 'Coron — אגמי ים', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'אגמי מים מלוחים בתוך תצורות גיר — Kayangan Lake הכי צלול בפיליפינים. שחייה בין ים ואגם.' }
      ]},
      hiking: { items: [
        { name: 'Mount Pulag', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: 'ההר השלישי בפיליפינים — 2,926מ\'. עלייה לילית לראות ים של ענן. ריחות פרחים קורדובה.' },
        { name: 'Ifugao Trek', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: '2 ימים בין טרסות האורז של Batad עם לינה בכפר — מדריך מקומי ב-$30 ליום.' }
      ]},
      parties: { items: [
        { name: 'מנילה — BGC', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'Bonifacio Global City — ה-CBD החדש עם מועדונים כמו Palace Pool Club ורוף-טופ ברים עד 6 בבוקר.' },
        { name: 'Boracay — White Beach', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', desc: 'הבר הכי ארוך בעולם — 4 ק"מ חוף עם ברים ברצף. D-Mall ו-Cocomangas היו בסיס המטיילים.' }
      ]},
      beaches: { items: [
        { name: 'El Nido — Lagoon', image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80', desc: 'לגונות Secret Beach שמגיעים בשחייה דרך חור בסלע — תמונות מהאיים שכולם שאלו עליהן.' },
        { name: 'Boracay', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', desc: 'White Beach — 4 ק"מ חוף לבן עם שקיעות בצבע ורוד-כתום. הכי פוטוגני. וינד-סרפינג בצד.' },
        { name: 'Siargao', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', desc: 'Cloud 9 — הגל הכי מפורסם בדרום מזרח אסיה. אי בוהמי עם קוקוס, רייגי ורוב-גלשנים טובים.' }
      ]},
      attractions: { items: [
        { name: 'Intramuros — מנילה', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80', desc: 'עיר ספרדית מוקפת חומות מ-1571 — Fort Santiago שם ריכזו אסירים. מוזיאונות ורכיבת כלי-טיילות.' },
        { name: 'Tarsier Sanctuary — בוהול', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'Tarsier — החיה הקטנה ביותר עם העיניים הגדולות ביותר בעולם. ישנים ביום על עצים.' },
        { name: 'Puerto Princesa — River', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: 'UNESCO — 8 ק"מ של נהר תת-קרקעי בתוך מערת גיר ב-Puerto Princesa. עוצרים בסירה ורואים עטלפים.' }
      ]},
      food: { items: [
        { name: 'Sinigang', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'מרק חמוץ עם חזיר ועגבנייה — המאכל הלאומי הפיליפיני. כל פיליפיני אוכל שניים לשבוע.', price: '₪10-18' },
        { name: 'Lechon', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'חזיר שלם צלוי עם תפוחים — Cebu Lechon היא הטובה ביותר. Anthony Bourdain: "Best Pig Ever".', price: '₪30-60' },
        { name: 'Halo-Halo', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80', desc: 'קינוח פיליפיני של שכבות — קרח, פירות שימורים, שעועית אדומה ופולן. מבלבל אבל מעולה.', price: '₪8-12' }
      ]},
      mustdo: { items: [
        { name: 'Island Hopping El Nido', image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80', desc: 'Tour A+B+C — $10-20 לסיור שלם כולל לגונות, חופות נסתרות ואוכל. 4 ימים בין האיים.' },
        { name: 'גלישה בSiargao', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'שיעור ב-$30 — Cloud 9 הוא הגל הכי מתאים לגלישה. הרגיש כמו שייד קאמפ של הים.' },
        { name: 'חצות על Chocolate Hills', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'View Deck עם שחר — הגבעות מסמיקות לחום. טיפוסים מ-4:30 בבוקר לאחרי ביחד.' }
      ]}
    },

    morocco: {
      scenery: { items: [
        { name: 'שפשאון — העיר הכחולה', image: 'https://images.unsplash.com/photo-1612688270190-3fefee5f7c07?w=600&q=80', desc: 'עיר כחולה מכף רגל ועד ראש — רחובות צרים, דלתות כחולות ומרפסות עם גרניום ורוד. כל פינה תמונה.' },
        { name: 'ארג צ\'ובי — הסהרה', image: 'https://images.unsplash.com/photo-1542391881-6aa7f0f50e49?w=600&q=80', desc: 'דיונות ענק של הסהרה — לינת לילה בבית-שחור, גמלים בשחר וכוכבי לכת שלא ראיתם מעולם.' },
        { name: 'טודרא גורג\' — קניון אדום', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'קניון בגובה 300מ\' שחצב נהר בסלע גיר אדום — פלמנקו על הסלעים, כפרים ברברים ופרדות.' },
        { name: 'Ait Ben Haddou', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: 'כפר קאסבה ב-UNESCO — נצלם כאן Gladiator ו-Game of Thrones. טיח לבן על אדמה אדומה.' }
      ]},
      hiking: { items: [
        { name: 'אטלס — Toubkal', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: 'ההר הגבוה ביותר בצפון אפריקה — 4,167מ\'. 2 ימים עם ספרה. עובר בכפרי ברבר ושוקי בוקר.' },
        { name: 'פולחן סהרה — Merzouga', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'ג\'יפ 4WD בדיונות + גמל בשחר — חוצה עד מרוקו הנסתרת עם כפרים מבודדים ב-10ק"מ מהמפה.' }
      ]},
      parties: { items: [
        { name: 'מרכש — Djemaa El Fna', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'כיכר שנהפכת לקרקס בשקיעה — נחשים, קופים, ספרי נס ורוקדי מסטרו. אוכל חם מדוכנים.' },
        { name: 'Riad Bar — מרכש', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', desc: 'בר בגג Riad — ב-Kech Rooftop עם נוף על הכיכר ואגזוז. Pastis ב-$3. לא צריך שום דבר אחר.' }
      ]},
      beaches: { items: [
        { name: 'Essaouira', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'עיר חוף ספרדית-מרוקאית — רוחות קבועות ל-Kitesurfing, דגים טריים ב-$2 ומדינה ציורית.' },
        { name: 'Agadir', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', desc: 'החוף הטוריסטי הגדול ביותר במרוקו — 10 ק"מ חול, שמש 300 ימים בשנה ורוח ל-Windsurfing.' }
      ]},
      attractions: { items: [
        { name: 'פאס — המדינה', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80', desc: 'המדינה הגדולה בעולם עם 9,000 סמטאות — הדסבאגיה (בצבעי) ומחברה ידיים לפועלי עור. בלי מדריך — תאבדו.' },
        { name: 'Chouara Tannery', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'בורסת עורות פס מ-1000 שנה — שיטות עבודה זהות. רואים מגג חנות עם נענע על האף בשל הריח.' },
        { name: 'מדרסה בן יוסוף', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: 'מרכש — בית-ספר קוראני מ-1565 עם עיצוב זאלאג\' מרהיב, קירות מגולפים ואורות שחוצים בחדרים.' }
      ]},
      food: { items: [
        { name: 'טאג\'ין', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'תבשיל מתבל עם בשר וירקות בכלי חרס מכסה-חרוט — מתבשל 3 שעות. עם לחם הכוסמת המרוקאי.', price: '₪20-40' },
        { name: 'כוסכוס', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'מוגש רק בשישי בבתי הורים — גרגרי סולת עם בשר ו-7 ירקות. המרוקאי מגיש ל-8 ב-ב-1 צלחת.', price: '₪25-45' },
        { name: 'מנת מנת מנת', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80', desc: 'מסיאן — ספינות קלויות מסוכר וקינמון ב-$0.5 ליחידה בכיכר. אוכלים ב-5 שניות.', price: '₪2-5' }
      ]},
      mustdo: { items: [
        { name: 'לינת סהרה', image: 'https://images.unsplash.com/photo-1542391881-6aa7f0f50e49?w=600&q=80', desc: 'גמל בשחר, לינה באוהל בסהרה תחת כוכבים — $80 כולל. חוויה שלא קיימת באירופה.' },
        { name: 'המדינה של פס', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'שכרו מדריך ב-$15 לחצי יום — בלעדיו תאבדו ב-9,000 הסמטאות. הוא לוקח לחנויות שלו — זה בסדר.' },
        { name: 'שקיעה ב-Chefchaouen', image: 'https://images.unsplash.com/photo-1612688270190-3fefee5f7c07?w=600&q=80', desc: 'בשקיעה הכחול מעמיק — צלמו ברחוב הכחול הצר. 100% מהתמונות יוצאות. לא להוריד צבע.' }
      ]}
    },

    newzealand: {
      scenery: { items: [
        { name: 'מילפורד סאונד', image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&q=80', desc: 'פיורד מרהיב עם מצוקים ב-1,692מ\' מעל הים — 7 מפלים פעילים ברגעים של גשם. "מקום הכי יפה בעולם".' },
        { name: 'Wanaka Lake', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'אגם טורקיז מוקף הרי שלג — That Wanaka Tree, עץ שגדל בתוך האגם. Queenstown 1 שעה.' },
        { name: 'Tongariro — Alpine Crossing', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: 'Mordor של LOTR — הר הגעש Mount Ngauruhoe הוא הר Doom. 19.4 ק"מ one-way בין אגמים ירוקים.' },
        { name: 'Abel Tasman', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'Coastal Track — חופות אוקר עם מים קריסטל בצבע אמרלד. ממקוי לחוף ב-3-5 ימים.' }
      ]},
      hiking: { items: [
        { name: 'Tongariro Alpine Crossing', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: 'הטרקינג ה-1 ביום בנ"ז — 19.4 ק"מ one-way ב-7 שעות. אגמי הנשמה הכחולים-ירוקים באמצע השביל.' },
        { name: 'Routeburn Track', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'אחד מ-9 Great Walks של נ"ז — 3 ימים בין Fiordland ל-Mt Aspiring דרך עמקי פיורד ירוקים.' },
        { name: 'Milford Track', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: '"Fine Walk in the World" — 4 ימים, 53 ק"מ. מקומות מוגבלים, חובה להזמין שנה מראש. Mackinnon Pass.' }
      ]},
      parties: { items: [
        { name: 'Queenstown', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'עיר האדרנלין — ספארי בשלג ביום, ברים עד 4 בלילה. Minus 5 Ice Bar ובירת Monteiths.' },
        { name: 'Auckland — Britomart', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', desc: 'ה-SoHo של אוקלנד — מסעדות, ברים ירוקים ומועדוני הסדנה שנפתחים ב-11.' }
      ]},
      beaches: { items: [
        { name: 'Bay of Islands', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', desc: '144 איים עם חופות בלתי-נגישות — דולפינים, כרישי קאסטלהד ושייט קיאק. Hole in the Rock.' },
        { name: 'Piha Beach', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', desc: 'חוף גולשים שחור ב-45 דקות מאוקלנד — גלים חזקים, Lion Rock ושקיעות שצילמו 1,000 סרטים.' }
      ]},
      attractions: { items: [
        { name: 'Hobbiton', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80', desc: 'כפר ה-Hobbit מ-LOTR ב-Matamata — 44 בתי-הוביט וה-Green Dragon Inn. $40, 2 שעות. פנטסיה.' },
        { name: 'Rotorua — Geothermal', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'עיר הנקרת מגאות גיאותרמית — גייזרים, בריכות בוץ רותחות, Bath Pool הטבעי ב-37°C. Pohutu Geyser.' },
        { name: 'Waitomo Caves', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: 'מערות מלאות Glowworms — 30 מיליון תולעים מאירות את תקרת המערה כמו שמיים מלאי כוכבים.' }
      ]},
      food: { items: [
        { name: 'Pavlova', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'עוגת מרנג קריספי עם קרם שמנת ופירות — נ"ז וא"ל ריבנות עליה. ב-NZ בכל מסעדה, תמיד טרי.', price: '₪15-25' },
        { name: 'Hangi', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'מטבח מאורי — בישול מזון באדמה עם אבנים לוהטות. עוף, תפוחי אדמה וקארי. טקס מסורתי ב-Rotorua.', price: '₪50-80' },
        { name: 'Flat White', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80', desc: 'הקפה שנולד בנ"ז (לדעת הנ"זים) — Espresso עם חלב מוקצף עדין. ב-Kaffee Eis בכל עיר.', price: '₪12-18' }
      ]},
      mustdo: { items: [
        { name: 'Tongariro Crossing', image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&q=80', desc: 'לא ניתן לסיים ביקור בנ"ז בלי Tongariro — הזמינו שאטל + מדריך וצאו 5 בבוקר לשביל.' },
        { name: 'בנג\'י ג\'אמפינג בQueenstown', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'הקפיצה הראשונה בעולם — AJ Hackett ב-Kawarau Bridge ב-$170. 43מ\' מעל הנהר. הוא אדיר.' },
        { name: 'Glowworm Caves — Waitomo', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'שייט שקט בסירה בחושך מוחלט — תקרת המערה נדלקת לשמיים מלאי כוכבים. $60 ל-45 דקות.' }
      ]}
    }
  };

  Object.keys(richCatsC).forEach(function(destId) {
    if (!destinations[destId]) return;
    Object.keys(richCatsC[destId]).forEach(function(catKey) {
      if (!destinations[destId].categories || !destinations[destId].categories[catKey]) return;
      destinations[destId].categories[catKey].items = richCatsC[destId][catKey].items;
    });
  });
})();
