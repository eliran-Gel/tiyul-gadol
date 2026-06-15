(function() {
  var richCatsB = {
    brazil: {
      scenery: { items: [
        { name: 'ריו דה ז\'ניירו', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80', desc: 'עיר בין הרים לים — פסגת שוגר לואף עם כבלית מעל המפרץ, חוף איפנמה ב-שקיעה. נוף בלתי נשכח.' },
        { name: 'מפלי איגואסו', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80', desc: '275 מפלים על 3 ק"מ — גדולים מניאגרה פי שניים. הצד הברזילאי נותן פנורמה, הצד הארגנטינאי נותן רטיבות.' },
        { name: 'פנטנאל — בריכת ה-Wildlife', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'הביצה הגדולה בעולם — ג\'גוואר, קאפיבארות, קאיימן. הסיכוי לראות ג\'גוואר גבוה פי 10 מאמזונס.' },
        { name: 'לנצ\'ואיס מארניינסיס', image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=80', desc: 'דיונות עצומות לבנות מלאות בבריכות גשם טורקיז — פנטסיה שנראית כמו CGI. גן לאומי ייחודי בעולם.' }
      ]},
      hiking: { items: [
        { name: 'Chapada Diamantina', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: 'גן לאומי עם מערות ענק, מפלי חפרפרות ושבילים שעוברים מתחת לצוקים. 3-5 ימי טרקינג עצמאי.' },
        { name: 'Itatiaia — Agulhas Negras', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'ההר השלישי גבוה בברזיל — 2,791מ\'. שביל 8 שעות דרך יערות מוסיר שבהם צמחייה כמו ירח.' }
      ]},
      parties: { items: [
        { name: 'ריו — Lapa', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'הלב הפועם של חיי הלילה בריו — הקשת המפורסמת, פגאוד\'ה וסאמבה חיה. מתחיל ב-10 ומסתיים ב-5.' },
        { name: 'קרנבל ריו', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', desc: 'המסיבה הגדולה ביותר בעולם — פברואר. Blocos רחוב חינמיים עם מאות אלפי אנשים. Sambadrome בלילה.' },
        { name: 'סאו פאולו — Vila Madalena', image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&q=80', desc: 'שכונת הגראפיטי והברים של ס"פ — Beco do Batman מלא אמנות, ובלילה הרחובות מתמלאים בצעירים.' }
      ]},
      beaches: { items: [
        { name: 'איפנמה — ריו', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'החוף שנכתבה עליו שיר — ריתמוס בוסה נובה, בנות יפות ושרש זהב. Posto 9 — פלחת הצעירים.' },
        { name: 'בוזיוס — אדריאטיק של ברזיל', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', desc: 'חצי-אי עם 23 חופות בצבעים שונים ורחובות ברז\'ילאיים. Brigitte Bardot גרה כאן בשנות ה-60.' },
        { name: 'פורטו דה גאלינהס', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', desc: 'בריכות טבעיות מוקפות שוניות שנוצרות בשפל — שחייה בין דגי ניימו הטרופיים ב-30 ° C מים.' }
      ]},
      attractions: { items: [
        { name: 'ישוע הגואל', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80', desc: 'הפסל בגובה 38 מטר על פסגת Corcovado — 360° של ריו, בין הים להרים. עולים ברכבת שיניים.' },
        { name: 'אמזונס — מנאוס', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'יצאו מנאוס לטיול בג\'ונגל האמזוני — ג\'גוואר, נחשי אנקונדה, דולפינים ורודים ואכילת פירות הג\'ונגל.' },
        { name: 'Teatro Amazonas — האופרה של האמזון', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: 'אופרה ניאו-קלאסית מ-1896 שנבנה בלב הג\'ונגל — מוצארט בין עצי האמזון. פינת-ז\'ם לחובבי היסטוריה.' }
      ]},
      food: { items: [
        { name: 'פייז\'ואדה', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'התבשיל הלאומי — שעועית שחורה עם 7 חלקי חזיר ובשר, על אורז עם תפוז. כבד כמו ישיבת שבת.', price: '₪25-45' },
        { name: 'צ\'וראסקו', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'שיפודי בשר שמגישים ללא-הפסקה ב-Churrascaria — משלמים $30 קבוע וממשיכים להגיש עד שאתם מבקשים להפסיק.', price: '₪80-120' },
        { name: 'אקאי', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80', desc: 'ה-superfood מהאמזון — מוגש כסורבה עב עם גרנולה, בננה ופירות. Brazilians אוכלים לפני גלישה.', price: '₪15-25' }
      ]},
      mustdo: { items: [
        { name: 'שחייה עם ג\'גוואר בפנטנאל', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'ספארי ברזילאי — 3 ימים בלוד\'ג\' ויציאה ב-5 בבוקר. 90% סיכוי לראות ג\'גוואר בטבע.' },
        { name: 'קרנבל בשכונה', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'Blocos — מסיבות רחוב חינמיות בפברואר, כל שכונה עם קארו ומוסיקה משלה. אותנטי יותר מ-Sambadrome.' },
        { name: 'כדורגל בברזיל', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', desc: 'בקשו כרטיס למשחק Flamengo או Corinthians — 60,000 איש עם תופים, שירה ואש. לא כמו שום דבר.' }
      ]}
    },

    uganda: {
      scenery: { items: [
        { name: 'בווינדי — יערות הגורילה', image: 'https://images.unsplash.com/photo-1475304718842-e8f6db9fdf3a?w=600&q=80', desc: 'חצי מכלל הגורילות ההרריות בעולם חיות ביערות בווינדי — מפגש של שעה ממש פנים-אל-פנים עם משפחה.' },
        { name: 'מפלי מורצ\'יסון', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80', desc: 'נהר הנילוס נדחס לחריץ של 7 מטר ופורץ בכוח עצום — אחד מהמפלים החזקים ביותר בעולם.' },
        { name: 'ג\'ינג\'ה — מקורות הנילוס', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: 'מקום שבו ויקטוריה הופכת לנילוס הלבן — שיט קיאק בין ניצנים, ספינות עץ וקופים על הגדה.' },
        { name: 'הרי רוונזורי', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'הרי הירח — רכס קרחוני שעוטה ענן קבוע. ניתן לטרק 7 ימים לפסגה ב-5,109מ\'. נוף כמו Tolkien.' }
      ]},
      hiking: { items: [
        { name: 'טרק הגורילות — בווינדי', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: '2-6 שעות של הליכה בג\'ונגל לפני שמוצאים את המשפחה. הפרמיט $700 — ההשקעה שתשנה חיים.' },
        { name: 'שיאן ספי — שיפנציו', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'Kibale Forest — מסלול ב-3 שעות עם 13 מינים של פרימטים, כולל שימפנזים שמאפשרים קירבה.' }
      ]},
      parties: { items: [
        { name: 'קמפאלה — Kabalagala', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'הסוהו של קמפאלה — ברים, מסעדות ומועדוני Afrobeat שמתמלאים אחרי 11. עוגנדאים מאוד מאוד מסבירי פנים.' },
        { name: 'ג\'ינג\'ה — Bar Rafting', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', desc: 'אחרי ספינת הקיאק על הנילוס יש Bar Street שמתמלא במטיילים — Nile Beer ב-$1 וחוויות שמשותפות.' }
      ]},
      beaches: { items: [
        { name: 'Ssese Islands', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'ארכיפלג 84 איים באגם ויקטוריה — חופות חול ציוריות, דקלים ולינה בבקתות עץ מעל המים.' }
      ]},
      attractions: { items: [
        { name: 'מרכז פרימטים Ngamba', image: 'https://images.unsplash.com/photo-1475304718842-e8f6db9fdf3a?w=600&q=80', desc: 'מקלט לשימפנזים יתומים — מאכילים, מלמדים ומשקמים. ביקור ב-$70 תומך ישירות בשיקום.' },
        { name: 'מוזיאון אוגנדה', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'ההיסטוריה של 50+ שבטים — בגדים מסורתיים, כלי נגינה ועטרות מלכות. להבין מי הם האנשים שפוגשים.' },
        { name: 'מפלי ספי', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: 'מפלים שורה של 7 רמות בנהר שחוצה ג\'ונגל — שחייה ברגל, ראפטינג ונוף על שני צידי הפרד.' }
      ]},
      food: { items: [
        { name: 'מטוקי — בננות מבושלות', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'בננות ירוקות מבושלות ומעוכות — הקרבון הבסיסי של אוגנדה, מוגש עם בשר ועלי מנגולד.', price: '₪5-8' },
        { name: 'Rolex — אומלט בפיתה', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'Chapati מגולגל עם ביצה ומבסה וירקות — Street Food הכי פופולרי של קמפאלה. ב-$0.5.', price: '₪2-4' }
      ]},
      mustdo: { items: [
        { name: 'טרק גורילות בבווינדי', image: 'https://images.unsplash.com/photo-1475304718842-e8f6db9fdf3a?w=600&q=80', desc: 'הסיבה לבוא לאוגנדה — שעה ממש עם משפחת גורילות. $700 הפרמיט שמימן שמירת הטבע עצמה.' },
        { name: 'ראפטינג על הנילוס', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'ג\'ינג\'ה מציעה הראפטינג הטוב ביותר באפריקה — Grade 5 Rapids ב-$120 ליום כולל אוכל ומדריך.' },
        { name: 'שיפמנזים — קיבאלה', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'Kibale Chimpanzee Tracking — $150 לשעה עם שיפמנזים שחיים חופשי. לפעמים יורדים ויושבים לצדכם.' }
      ]}
    },

    japan: {
      scenery: { items: [
        { name: 'הר פוג\'י', image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&q=80', desc: 'הר קדוש ב-3,776מ\' — הפסגה של יפן. עלייה לילית על מנת להגיע לפסגה בזריחה. לא שוכחים לעולם.' },
        { name: 'קיוטו — ארישייאמה', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80', desc: 'יער הבמבוקים הסמוך לקיוטו — תעלת עצים ענקיים שמסנן אור לפיסות זהב. בבוקר לפני 7 ריק לחלוטין.' },
        { name: 'ניקו — ארמונות ביין', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', desc: 'מקדשים ומקדשי שינטו בתוך יערות עתיקים — Toshogu זהוב עם פרטי עץ מפורטים ביותר בעולם.' },
        { name: 'היגאשיירמה — קיוטו', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80', desc: 'מסלול אבן ישן בין חנויות תה ומקדשים — ביגיקא מפורסם, Kiyomizudera על צוק עם תצפית על העיר.' }
      ]},
      hiking: { items: [
        { name: 'הר פוג\'י — עלייה לילית', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: 'מתחילים ב-11 בלילה, מגיעים לפסגה בזריחה. 6 שעות, 4 תחנות, צינה של 5°C — מומלץ ביולי-אוגוסט.' },
        { name: 'Kumano Kodo', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: '1,200 שנות עלייה לרגל — שביל שמחבר 3 מקדשים ענקיים דרך יער דרום יפן. לישון בבתי הכנסות (Ryokan).' },
        { name: 'Nakasendo — שביל ההר', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: 'הדרך הישנה בין טוקיו לקיוטו — קטע הכי יפה בין Magome ל-Tsumago: 9 ק"מ ביער ובכפרים.' }
      ]},
      parties: { items: [
        { name: 'טוקיו — Shinjuku', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80', desc: 'Golden Gai — 200 ברים זעירים עם 6 מושבים כל אחד. Kabukicho עם ניאון מטורף וחיי לילה עד 6 בבוקר.' },
        { name: 'אוסקה — Dotonbori', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', desc: 'הרחוב הכי בוהה ביפן — שלטי ניאון ענקיים, ברים צדדיים, כיכרות מוסיקה ואוכל ברחוב עד אור הבוקר.' },
        { name: 'קיוטו — Pontocho', image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&q=80', desc: 'סמטה צרה בין נהר לנהר — מסעדות ויפניות ישנות עם גיישות שעוברות. אחרי 10 נפתחים הברים.' }
      ]},
      beaches: { items: [
        { name: 'אוקינאווה', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'האיים הטרופיים של יפן — מים שקופים, שוניות אלמוגים ותרבות ריוקיו שונה לגמרי מיפן הראשית.' },
        { name: 'Kamakura', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', desc: 'חוף עם בודהה ענק ביערות — גולשים ומקדשים בדקה אחת. 1 שעה מטוקיו בלבד.' }
      ]},
      attractions: { items: [
        { name: 'טוקיו', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80', desc: 'עיר העתיד — Shibuya Crossing עם 1,000 אנשים בכל ירוק, Akihabara עם אנימה, Harajuku עם אופנה פריקית.' },
        { name: 'מקדש פושימי-ינארי', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80', desc: '10,000 שערי Torii כתומים על הר — כל שער תרומה של חברה. מסלול 4 שעות, ריק בחלוטין למעלה.' },
        { name: 'Nara — עיר האיילים', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: '1,200 איילים שמסתובבים חופשי בעיר — מנשקים, אוכלים מהיד ומתכופפים בנימוס לבקש אוכל (ממש).' }
      ]},
      food: { items: [
        { name: 'ראמן', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'מרק עמוק עם אטריות — כל עיר גרסה שלה. Ichiran ברשת — אוכלים לבד בתא אישי בריכוז מוחלט.', price: '₪35-60' },
        { name: 'סושי', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'Tsukiji Outer Market בטוקיו — ראשי טונה ב-$2 לפרוסה. ארוחת בוקר של סושי שף-קאונטר ב-7 בבוקר.', price: '₪50-120' },
        { name: 'טאקויאקי', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80', desc: 'כדורי תמנון מהדוכן של Osaka — 8 כדורים ב-$3, מגישים בתוך דקה. Street Food מקורי יפן ב-100%.', price: '₪8-12' }
      ]},
      mustdo: { items: [
        { name: 'עלייה להר פוג\'י', image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&q=80', desc: 'חייבים פעם אחת — רק ביולי-אוגוסט. לקחת ג\'קט, פנס ראש ושכבות. 6 שעות של מאמץ בשביל זריחה מושלמת.' },
        { name: 'שאלת גיישה בפונטוצ\'ו', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'להתלבש בקימונו, לשכור Maiko Experience בקיוטו ולצלם ברחוב. חוויה שתקבל לייקים בלי מאמץ.' },
        { name: 'Onsen — אמבט מינרלים', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'אמבטיה ציבורית במים חמים גיאותרמיים — בחינם ברוב Ryokan, בחוץ עם נוף הרים. הכי יפני שיש.' }
      ]}
    },

    bolivia: {
      scenery: { items: [
        { name: 'סאלאר דה אויוני', image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=80', desc: 'מלחה הגדולה בעולם — 10,000 קמ"ר של לבן מוחלט. אחרי גשם נהיית מראה מושלמת לשמיים. 3,656מ\'.' },
        { name: 'לאגונה קולורדה', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', desc: 'אגם אדום בגובה 4,278מ\' עם פלמינגו ורוד — האדמדמות מאצות אדומות. מסלול 3 ימים מאויוני.' },
        { name: 'פוטוסי — עיר הכסף', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'העיר הגבוהה ביותר בעולם — 4,090מ\'. כסף שכיסה את אירופה ב-300 שנה. ניתן לכנוס לכרייה פעילה.' },
        { name: 'אגם טיטיקאקה', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: 'מצד בוליביה — כופריה ב-Island of the Sun, ה-Inca Trail הראשון ואיים ללא חשמל.' }
      ]},
      hiking: { items: [
        { name: 'Cordillera Real — La Paz', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: 'רכס הרים עם 600 פסגות מעל 5,000מ\' — שביל Takesi ב-3 ימים בין בלמות ליירות. אחד הטרקים הטובים.' },
        { name: 'מות הדרך — ציקלינג', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'Death Road — 64 ק"מ של ירידה מ-4,700מ\' על שביל צר עם מצוקים. רכיבה מודרכת ב-$25 + אדרנלין.' }
      ]},
      parties: { items: [
        { name: 'לה פאז — Sopocachi', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'השכונה הכי חיה בלה פאז — ברים, מועדוני Salteña ואנשים צעירים. כולל Mongo\'s בין המועדפים.' },
        { name: 'Carnival Oruro', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', desc: 'קרנבל עתיק יותר מריו — פברואר. מסכות Diablo, ריקוד La Diablada ו-40,000 ריקודנים. UNESCO.' }
      ]},
      beaches: { items: [
        { name: 'חוף אגם טיטיקאקה', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'בוליביה ים-נעולה — הים היחיד הוא אגם טיטיקאקה. החוף הכי גבוה בעולם ב-3,812מ\'. מים כחולים צוננים.' }
      ]},
      attractions: { items: [
        { name: 'כלא San Pedro — לה פאז', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80', desc: 'כלא מפורסם שמנהיג עצמו כמדינה — בעבר אפשר היה לבקר. כיום אתר עם הסיפור המטורף של הכלא.' },
        { name: 'מדרון המכשפות', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'שוק מכשפות בלה פאז — פטל של לאמה, צמחים מרפאים ובובות ווּדוּ. קנו מתנה ל-חבר\' שלא יודעים מה לקנות.' },
        { name: 'אויוני סיור 4WD', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: '3 ימי ג\'יפ מלאגוניות צבעוניות למלחה — לישון בגובה 5,000מ\', לראות שחר כחול ולהגיע לאויוני.' }
      ]},
      food: { items: [
        { name: 'Salteña — פאי אופה', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'קרואסון ממולא בשר ועגבניה עם מרק בפנים — ארוחת בוקר בוליביאנית. אכלו תוך עמידה כמו המקומיים.', price: '₪4-7' },
        { name: 'Chicha — בירת תירס', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'שתייה מסורתית של האינקה מתירס מותסס — מגישים בקערה ענקית. יש מי שאומרים שמוכנה עם רוק.', price: '₪3-5' }
      ]},
      mustdo: { items: [
        { name: 'מלחת אויוני אחרי גשם', image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=80', desc: 'ינואר-מרץ אחרי גשם קל — שכבה של 2-3 ס"מ מים מעל המלח יוצרת מראה מושלמת. תמונות בלתי נשכחות.' },
        { name: 'Death Road ציקלינג', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'דרך המוות ב-$25 — הטור הגדול ביותר של בוליביה. 64 ק"מ ירידה עם נוף על ג\'ונגל ב-3,000מ\'.' },
        { name: 'כריית כסף בפוטוסי', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'כניסה לכרייה פעילה ב-$15 עם פועלים אמיתיים — קשה, צפוף, מדהים. קנו מתנות לפועלים בשוק.' }
      ]}
    },

    mexico: {
      scenery: { items: [
        { name: 'צ\'יצ\'ן איצה', image: 'https://images.unsplash.com/photo-1552537376-3abf35237215?w=600&q=80', desc: 'פירמידת קוקולקאן — אחד מ-7 פלאות העולם החדשים. בשוויון יום-לילה צל הנחש יורד המדרגות.' },
        { name: 'צינוטות יוקטן', image: 'https://images.unsplash.com/photo-1552537376-3abf35237215?w=600&q=80', desc: 'בריכות תת-קרקעיות של מים קריסטלים כחולים — המאיה חשבו שזה שערי העולם התחתון. שחייה מדהימה.' },
        { name: 'בקופארסו — קנון קופר', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'גדול מגרנד קניון — 4 קנוניות בצ\'יוואווה עם צרות קשות. רכבת El Chepe היא הטיול הנוף\'ר ביותר במקסיקו.' },
        { name: 'אואחאקה — צבע ואמנות', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: 'עיר ירוקה קטנה עם ארמון מונטה אלבן, שוק הצבעים של ציאקולו וקפה מקומי. אמנות ואוכל מעל הכל.' }
      ]},
      hiking: { items: [
        { name: 'Copper Canyon Trek', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: '3-5 ימי טרקינג בתוך הקניון — ישנים בכפרי Tarahumara, עם מדריך שמוכר כמי שרץ 100מ\' יחף.' },
        { name: 'Iztaccihuatl — הקרחון', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'הר געש נרדם ב-5,230מ\' — הר שישי בגובה בצפון אמריקה. עם מדריך קרחון: 2 ימי שביל.' }
      ]},
      parties: { items: [
        { name: 'מקסיקו סיטי — קונדסה', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'הכי טרנדי ב-CDMX — ברים עם מוזיקה אלקטרונית לטינו, Mezcalerías ומסעדות שנפתחות ב-11 בלילה.' },
        { name: 'קנקון — Zone Hotelera', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', desc: 'Coco Bongo וה-20 מועדונים של Zone Hotelera — Foam Party, Open Bar ו-Spring Break כל חורף.' },
        { name: 'אואחאקה — מייסקל בר', image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&q=80', desc: 'מייסקל הוא הטקילה המקורית של אואחאקה — מאות מזנים מהאגבה. In Situ מזנון הוא המקום ה-1 בעולם.' }
      ]},
      beaches: { items: [
        { name: 'טולום', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'חופות לבנות עם מאיה רואינס על הצוק מעל הים — הסצנה הכי אינסטגרם בדרום אמריקה. תגיעו מוקדם.' },
        { name: 'פלאיה דל כרמן', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', desc: 'Fifth Avenue — 2 ק"מ חוויה פדסטרית עם חנויות, ברים וחוף. Base Camp של המטיילים בקריביים.' },
        { name: 'Isla Mujeres', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', desc: 'אי קטן 20 דקות מקנקון — כחול-תכלת, גולף-קארט כתחבורה וצלילה עם כרישי לוויתן.' }
      ]},
      attractions: { items: [
        { name: 'מוזיאון פרידה קאלו — CDMX', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80', desc: 'בית הכחול של פרידה — הסטודיו שבו נולדה ומתה, עם ציורים מקוריים. בית-מוזיאון שמנשים בחיים.' },
        { name: 'Teotihuacan', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'עיר ענקית מלפני 2,000 שנה — פירמידת השמש גבוהה מ-65מ\'. אפשר לעלות על הפירמידות! 45 דקות מ-CDMX.' },
        { name: 'Cenote Ik Kil', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: 'הצינוטה הפופולרית ביותר — בור עגול עם שורשים תלויים ואור שמש בצהריים מאיר כחול-ירוק מסחרר.' }
      ]},
      food: { items: [
        { name: 'טאקו', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'Al Pastor — חזיר על שיפוד סובב עם אננס. ב-CDMX El Huequito פתוח 24 שעות. 3 טאקו ב-$2.', price: '₪5-8' },
        { name: 'מולה', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'רוטב שוקולד-פלפל שחום עמוק — 30 מרכיבים ומבשלים 3 ימים. Mole Negro של אואחאקה הוא הלאומי.', price: '₪20-35' },
        { name: 'מייסקל', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80', desc: 'האח הגדול של הטקילה — מיוצר ידנית מאגבה שרופה, עם טעם עשן. מוגש עם מלח תולעים. ב-$3 גלאס.', price: '₪10-20' }
      ]},
      mustdo: { items: [
        { name: 'שחייה בצינוטה', image: 'https://images.unsplash.com/photo-1552537376-3abf35237215?w=600&q=80', desc: 'בחרו צינוטה פחות מפורסמת (Gran Cenote ליד טולום) — מערות, דגים ואור שמש דרך פתח מעל. $15.' },
        { name: 'יום המתים — אואחאקה', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'נובמבר 1-2 — בית הקברות של אואחאקה הופך לחגיגה. משפחות מביאות אוכל, מוסיקה ופרחים לקברים.' },
        { name: 'שיעור בישול CDMX', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'Mexico City Food Tour מתחיל ב-Mercado de la Merced — ב-$40 מלמדים אתכם 3 מנות קלאסיות.' }
      ]}
    },

    tanzania: {
      scenery: { items: [
        { name: 'קיליאמנג\'ארו', image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=80', desc: 'ההר הגבוה באפריקה — 5,895מ\' ללא ציוד טיפוס. 7 ימי הליכה דרך אקולוגיות שונות. קרחון בפסגה נמס.' },
        { name: 'סרנגטי', image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=80', desc: '1.5 מיליון וויילדביסט נודדים 3,000 ק"מ בשנה. ספארי טנזניה = הטובה בעולם. Big Five נסגרים.' },
        { name: 'נגורונגורו', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80', desc: 'קלדרת הר געש הגדולה ביותר שאינה מוצפת — 20 ק"מ רוחב, 25,000 חיות. Predator\'s Paradise.' },
        { name: 'זנזיבר', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'האי הספייס של אפריקה — Stone Town עם ארכיטקטורת ערב-פורטוגלית ושווקי תבלינים. חוף לבן מושלם.' }
      ]},
      hiking: { items: [
        { name: 'קיליאמנג\'ארו — מאצ\'אמה', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: 'המסלול הפופולרי — 7 ימים, 62 ק"מ. עוברים 5 אזורי אקלים מ-ג\'ונגל לקרחון. 70% הצלחה.' },
        { name: 'Ol Doinyo Lengai', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'הר הגעש הפעיל האחרון שמתפרץ לבה שחורה-לבנה (נטרונקרבונטיט). לינה בבסיס ועלייה לילית.' }
      ]},
      parties: { items: [
        { name: 'זנזיבר — Kendwa Beach', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'Kendwa Rocks Full Moon Party — חינם, על החוף, עם תופים ספונטאניים וישראלים ב-100%.' },
        { name: 'Stone Town — Mercury\'s', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', desc: 'הבר ב-Freddie Mercury\'s Birthplace — מוגש אוכל ומוסיקה בזנזיבר עם תמונות ה-Queen בכל קיר.' }
      ]},
      beaches: { items: [
        { name: 'נונגווי — זנזיבר', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', desc: 'הצפון של זנזיבר — חוף לבן עם בריכות טבעיות, ערסלים ים ומים כחול-שמרגד. ללא גאות-שפל בעייתית.' },
        { name: 'Mafia Island', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', desc: 'אי ים הינדי בלתי מגולה — צלילה עם לוויתן-כרישים, פינגווינים ואלמוגים של פעם. ב-3 ריסורטים בלבד.' }
      ]},
      attractions: { items: [
        { name: 'Stone Town', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80', desc: 'UNESCO — רחובות צרים עם שערי ברונזה מגולפים, ארמון סולטן ומסגדים ישנים. קוסוואהילי ממשית.' },
        { name: 'שוק תבלינים זנזיבר', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'טיול Spice Tour בחוות תבלינים — מגלים ציפורן, קינמון, שורש וניל. לאחר מכן ארוחה שהוכנה מהם.' },
        { name: 'בריכות חיפוש — טרופיים', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: 'Chumbe Island — שמורת טבע ים פרטית עם 90% ממשפחות האלמוגים הנדירות. Eco-Resort עם צלילה.' }
      ]},
      food: { items: [
        { name: 'ניוגמה זנזיבר', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'Forodhani Night Market — שוק לילי על שפת הים עם פיצ\'ה זנזיבר, מיני-לובסטר ועמוד תירס צלוי.', price: '₪10-20' },
        { name: 'Ugali na Mchuzi', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'עיסת תירס (Ugali) עם מרק בשר מתובל — ה-סעודה הבסיסית של טנזניה. שותים מים רבים.', price: '₪5-10' }
      ]},
      mustdo: { items: [
        { name: 'ספארי סרנגטי', image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=80', desc: 'לא פספסו — 3 ימים ב-$400-600 כולל לינה בלודג\' ו-2 סיורים ביום. ראו קרנף, אריה וצ\'יטה.' },
        { name: 'שחייה עם לוויתני-כריש', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'מאפיה ודייר-ס-סאלאם — מאי-ספטמבר. Whale Shark Diving הוא חוויה שמסתיים ב-״אני לא מאמין שזה קרה.״' },
        { name: 'Forodhani Night Market', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'שוק הלילה של Stone Town — נאמר לנו שזה מחייב לחוות. פיצ\'ה, אוקטופוס ומיץ עמוד תירס ב-$1.' }
      ]}
    },

    india: {
      scenery: { items: [
        { name: 'טאג\' מהאל', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80', desc: 'מוזוליאום לאהבה — שאה ג\'האן בנה אותו עבור אשתו ב-1653. בשחר כמעט ריק, בצהריים — גבינה.' },
        { name: 'ראגסטן — מדבר תר', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'גמלים, ריאוורי צבעוניות וכפרים מדבריים — לינת לילה בדיונה תחת כוכבים. ג\'אייסאלמר כבסיס.' },
        { name: 'קראלה — תעלות מים', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: '900 ק"מ של תעלות נהרות בגן עדן ירוק — שייט בהאוסבוט בין כפרי דייגים, עצי קוקוס ועופות.' },
        { name: 'לאדאק — הירח ה-לבן', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', desc: 'אזור היבש הגבוה בעולם — 3,500מ\', מנזרים בודהיסטים על פסגות, נוף ירח שלא פגשתם.' }
      ]},
      hiking: { items: [
        { name: 'Chadar Trek — הנהר הקפוא', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: 'ינואר — הליכה על נהר קפוא בלאדאק (-30°C). 8 ימים, 70 ק"מ. חוויה שמעטים בעולם עשו.' },
        { name: 'Valley of Flowers — אוטארקנד', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'בחודש יולי-אוגוסט — עמק ירוק עם 500 מיני פרחים. UNESCO. שביל 3 ימים לגובה 3,600מ\'.' }
      ]},
      parties: { items: [
        { name: 'גואה — Vagator', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'Hilltop Goa — מסיבת Psytrance שמתחילה ב-10 בבוקר. גואה היא מקום ה-Rave העולמי של ינואר.' },
        { name: 'מומבאי — Bandra', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', desc: 'השכונה הצעירה של מומבאי — ברים, מסעדות אינדי ואנשים שמתחרפנים על ריקוד Bollywood.' },
        { name: 'גואה — Anjuna Beach', image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&q=80', desc: 'שוק Anjuna בשישי — היפים, יוגינים ומטיילים מכל העולם. מוסיקה חיה ב-Shiva Valley עד הבוקר.' }
      ]},
      beaches: { items: [
        { name: 'אנדמן — Neil Island', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'מים שקופים בצבע טורקיז עז שאפשר לראות 10מ\' תחת השטח. צלילה עם נחשי ים, אוכטופוסים ועניי-ים.' },
        { name: 'קבאריאטי — לקשדוויפ', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', desc: 'אי המוגבל בכניסה — הישראלים המועטים שהגיעו מספרים על ים שלא ראו כמותו. דורש היתר מראש.' },
        { name: 'גואה — Palolem', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', desc: 'הכי ציורי בגואה — מפרצון עם סירות ומסעדות בראש קיוסק. Silent Disco לחוף בלילה.' }
      ]},
      attractions: { items: [
        { name: 'וראנסי — עיר המחזורים', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80', desc: 'העיר הקדושה ביותר להינדואיזם — שרפות על שפת הגנגס 24/7. Aarthi בסנסט על הנהר — מדהים ומטלטל.' },
        { name: 'ג\'אייפור — עיר הוורוד', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'ארמונות, שקיעות ותבלינים — Hawa Mahal, Amber Fort ובאזאר צבעוני שנמשך ק"מ. הכי אינסטגרם בהודו.' },
        { name: 'המסגד ה-Rani ki Vav', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: 'באבה — בארות מדרגה עתיקות של גוג\'ראט. 7 קומות מתחת לאדמה עם פסלים. יחידאים בעולם.' }
      ]},
      food: { items: [
        { name: 'מסאלה צ\'אי', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'תה תבלינים עם חלב — הדלק של הודו. ב-10 רופי (50 אגורות) מכוס חרסינה ב-Chai Wala ברחוב.', price: '₪1-2' },
        { name: 'Thali', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'צלחת גדולה עם 8-12 מנות קטנות — קארי, רוטה, ראיתה ואורז. All-you-can-eat ב-$2 מהדוכן.', price: '₪7-15' },
        { name: 'Biryani', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80', desc: 'אורז בשרי מבושל עם תבלינים 2 שעות — כל עיר גרסה שלה. Hyderabadi Biryani היא המלכה.', price: '₪15-30' }
      ]},
      mustdo: { items: [
        { name: 'שיעור יוגה ב-Rishikesh', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'עיר היוגה של העולם — שלמו $5 ליום לשיעור עם מאסטר יוגי אמיתי. 2 שבועות ישנו את החיים.' },
        { name: 'Aarthi בוראנסי', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'טקס Ganga Aarthi ב-6:30 ערב — כוהנים מסיימים את היום עם לפידים, פעמונים וקטורת. נסיעה בסירה.' },
        { name: 'Golden Temple — אמריצר', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', desc: 'המקדש הזהוב של הסיקים — פתוח 24/7, מזין 100,000 איש ביום בחינם. פשוט ויפה עם השתקפות בבריכה.' }
      ]}
    },

    namibia: {
      scenery: { items: [
        { name: 'סוסוסוולאי — דיונות אדומות', image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=600&q=80', desc: 'הדיונות הגבוהות ביותר בעולם — 300מ\' של חול אדום-כתום בניגוד לשמיים כחולים מוחלטים. עלייה בשחר.' },
        { name: 'Dead Vlei — עצי שלד', image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=600&q=80', desc: 'מושבה לבנה יבשה עם עצים שחורים מתים מ-900 שנה — ניגוד דרמטי עם הדיונות האדומות. הצילום האיקוני.' },
        { name: 'מצוק ספיצקופה', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'סלע גרניט ענק שצומח 700מ\' מהמדבר הנמיבי הנקי — גשר אבן טבעי וטיפוס. נוף סוריאליסטי.' },
        { name: 'קייפ קרוס — כלבי ים', image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=80', desc: 'המושבה הגדולה ביותר של כלבי-ים בדרום אפריקה — 100,000 כלבי ים על חוף אחד. ריח חזק, נוף פראי.' }
      ]},
      hiking: { items: [
        { name: 'Dune 45 — שחר', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: '170מ\' דיונה מהציורים ביותר — עלייה 45 דקות בחול, ירידה 5 דקות. כולם שם בשחר ולכולם ניתן.' },
        { name: 'Fish River Canyon', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'הקניון השני בגודלו בעולם — 5 ימי טרקינג ב-85 ק"מ. קיים רק מאי-ספטמבר. יחידאי בעיצוב.' }
      ]},
      parties: { items: [
        { name: 'ווינדהוק — Klein Windhoek', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'שכונת הלילה של ווינדהוק — בירת Windhoek Lager, ברים ומסעדות בסגנון גרמני-אפריקאי. קהל נחמד.' }
      ]},
      beaches: { items: [
        { name: 'סוואקופמונד — חוף המדבר', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'עיר גרמנית-אפריקאית על שפת האוקיינוס — הקר גם בקיץ בשל זרם בנגלה. צנחנות מהאוויר על הדיונות.' }
      ]},
      attractions: { items: [
        { name: 'Etosha National Park', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80', desc: 'גן לאומי עם 114 מיני יונקים — בקשת המים שמאירה בלילה מושכת פילים, אריות וצ\'יטות לשתות.' },
        { name: 'Twyfelfontein — ציורי קרח', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'UNESCO — 2,000 ציורי סלע של בוּשמן מ-6,000 שנה. הרמה הגבוהה ביותר שרואה אנושות.' },
        { name: 'Kolmanskop — עיר רוחות', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: 'עיירת יהלומים גרמנית שנטושה ב-1954 — הדיונות בולעות את הבתים לאט לאט. הצילום הכי נמיבי.' }
      ]},
      food: { items: [
        { name: 'Braai — BBQ נמיבי', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'שיטת הבישול הלאומית של נמיביה — בשר על גחלים, בירת Windhoek ואנשים בלבוש כאקי. אירוע קיצי.', price: '₪30-60' },
        { name: 'Kapana — בשר רחוב', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'שוק Katutura בווינדהוק — בשר מוקפץ על ברזל שטוח עם שאטני. Street Food מקומי ב-$2.', price: '₪7-12' }
      ]},
      mustdo: { items: [
        { name: 'שחר ב-Dune 45', image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=600&q=80', desc: 'יקיצה ב-5, נסיעה, עלייה בחול 45 דקות — בפסגה לפני שהשמש עולה. הצבעים בדיונות הם בגדר פנטסטיקה.' },
        { name: 'Stargazing בנמיב', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'המדבר הנמיבי הוא אחד מ-5 המקומות הכהים ביותר בעולם — גלקסיה שלמה נראית לעין. חינם ב-Sesriem Camp.' },
        { name: 'Quad Biking בסוואקופמונד', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'רכיבת ATV על דיונות הנמיב בים של חול — $60 לשעה. לפעמים יש לוויתנים בים ב-100מ\' מהחוף.' }
      ]}
    },

    guatemala: {
      scenery: { items: [
        { name: 'אגם אטיטלאן', image: 'https://images.unsplash.com/photo-1553254899-9cb84f2a1c49?w=600&q=80', desc: 'האגם היפה ביותר בעולם לדעת אלדוס האקסלי — מוקף 3 הרי געש, 12 כפרים ילידים ומים כחולים עמוקים.' },
        { name: 'טיקאל', image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=600&q=80', desc: 'עיר מאיה שבשיאה גרה בה 100,000 נפש ב-900 לספ"ה. הפירמידות בולטות מעל פסגת היערות הטרופיים.' },
        { name: 'Semuc Champey', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: 'טרסות מים טבעיות בג\'ונגל — בריכות ירוקות-כחולות אחת מעל השנייה. נהר שנעלם מתחת לאדמה.' },
        { name: 'אנטיגואה', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', desc: 'עיר קולוניאלית ב-UNESCO עם קתדרלות הרוסות, ברים צבעוניים ו-3 הרי געש ברקע. הכי יפה במרכז אמריקה.' }
      ]},
      hiking: { items: [
        { name: 'הר אקטנגו — לילי', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: 'עלייה ב-11 בלילה ל-3,976מ\' לצפות בפיתוח הר געש שכן מתפרץ. עמדים ב-50מ\' מלבה. פחד ויופי ביחד.' },
        { name: 'Indian Nose — אטיטלאן', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: 'עלייה לילית של שעתיים לתצפית שנקראת The Nose — שחר מעל האגם עם 3 הרי געש. $5 + מדריך.' }
      ]},
      parties: { items: [
        { name: 'אנטיגואה — La Sin Ventura', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'הבר הכי מפורסם של אנטיגואה — בניין 200 שנה עם קוקטיילים מהחזית. כולם עוברים שם בשישי.' },
        { name: 'San Pedro — Lake Bars', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', desc: 'הכפר לחוף האגם של המטיילים — ברים על חוף עם נרות ומוסיקה. הישראלים מוצאים את עצמם שם תמיד.' }
      ]},
      beaches: { items: [
        { name: 'Monterrico', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'חוף שחור פסיפי עם צבי עור גדולים שמגיעים לטיל ביצים. גרים בבאנגלות על החוף ב-$15 לילה.' }
      ]},
      attractions: { items: [
        { name: 'שוק צ\'יצ\'יקסטנגו', image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=600&q=80', desc: 'שוק ילידי עתיק שמתקיים בחמישי ובראשון — צבעים מטורפים, בדים מגולפים ומכשפות בין הדוכנים.' },
        { name: 'El Mirador', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: '5 ימי הליכה בג\'ונגל להגיע לעיר המאיה הגדולה ביותר — גדולה מטיקאל. 90% אנשים בחרו בטיקאל וזה יותר טוב.' }
      ]},
      food: { items: [
        { name: 'פצ\'אי', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'תבשיל לאומי גואטמלטי — עוף בציר עשיר עם ירקות בשקית פלנטין. כל משפחה גרסה משלה.', price: '₪15-25' },
        { name: 'Chuchitos', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'גרסה קטנה ועבה של הטמאלה — עוף עם רוטב עגבניות בבצק תירס. רחוב גואטמלה ב-$0.5 ליחידה.', price: '₪2-4' }
      ]},
      mustdo: { items: [
        { name: 'עלייה לאקטנגו', image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=600&q=80', desc: 'הביצוע הכי אדרנלין של גואטמלה — חווית הר געש פעיל ב-50מ\'. מדריך חובה, נעליים טובות.' },
        { name: 'שחייה ב-Semuc Champey', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'שחייה בבריכות הטרסות עם נרות בתוך מערה — $20 ליום כולל. הכי קסום בגואטמלה.' },
        { name: 'לימוד ספרדית באנטיגואה', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: '1-4 שבועות ב-$150-250 — 5 שעות ביום עם מורה פרטי ולינה אצל משפחה. הכי זול ויעיל בעולם.' }
      ]}
    },

    laos: {
      scenery: { items: [
        { name: 'לואנג פראבאנג', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80', desc: 'UNESCO — עיר מלכותית שנסגרת בחצות. מקדשים בין עצי דקל, פטאפרים בשקיעה. בנויה בין שני נהרות.' },
        { name: 'מפלי קואנג סי', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', desc: 'מפלים כחולים-ירוקים מוקפים יערות — 3 שלבים עם בריכות טבעיות לשחייה. 30 דקות מ-LP.' },
        { name: 'פלאין אוף ג\'ארס', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', desc: '2,000 כדים אבן ענקיים פזורים בשדות — מסתורין שטרם פוצח. מי בנה, מתי ולמה.' },
        { name: 'Si Phan Don — 4000 איים', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', desc: 'דלתת המקונג בדרום לאוס — ערסלים, דולפיני נהר ירקוק ומפלי Khone Phapheng — הגדולים באסיה.' }
      ]},
      hiking: { items: [
        { name: 'נאם הא — טרק שבט', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', desc: '2-3 ימי הליכה בשמורת Nam Ha עם לינה בכפרי מיעוטים. Eco-Trek שמממן שמירה על הסביבה.' },
        { name: 'Phou Bia Trek — פסגת לאוס', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', desc: '3 ימים לפסגת לאוס ב-2,820מ\' — מדריך חובה בשל שרידי פצצות מהמלחמה. תצפית על ג\'ונגל אינסופי.' }
      ]},
      parties: { items: [
        { name: 'ואנג ויאנג — הנהר הברים', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'Tubing — לשוט על גלגל גומי בנהר עם 10 ברים על הגדה. מסיבת-יום ב-$5. המסורת של לאוס.' },
        { name: 'לואנג פראבאנג — Utopia Bar', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', desc: 'Utopia בנוי על עמודים מעל הנהר — בד וכריות, קוקטיילים ב-$2, שקיעה. הכי טוב בלאוס.' }
      ]},
      beaches: { items: [
        { name: 'Don Det — 4000 האיים', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', desc: 'ערסל מעל הנהר, שקיעה על המקונג ורכיבה בין האיים. לאוס היא היחידה שאפשר לחוש כאן.' }
      ]},
      attractions: { items: [
        { name: 'ואט שיאנג ת\'ונג', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80', desc: 'המקדש הכי יפה בלואנג פראבאנג — גג כפול שנוגע בקרקע, קירות פסיפס זהב ועלות כניסה 20,000 קיפ.' },
        { name: 'Alms Giving — פטאפרים', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'ב-6 בבוקר — שורת נזירים כתומים הולכת ומקבלת אורז מהתושבים. מצלמים מרחוק בכבוד.' },
        { name: 'מוזיאון HO KHI NO מלך', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', desc: 'ארמון המלכים של לאוס — אספנות מלכותית, קאנואות ענק ומוזיאון על ההיסטוריה של ממלכת לאוס.' }
      ]},
      food: { items: [
        { name: 'לאאפ', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', desc: 'סלט בשר קצוץ עם עשבי תיבול, אורז קלוי ומיץ לימון — המנה הלאומית של לאוס. חריף ורענן.', price: '₪8-15' },
        { name: 'Khao Niao — אורז דביק', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', desc: 'אורז דביק שמגבלים לכדורים ואוכלים ביד — אין כף בלאוס. מגישים עם כל מנה בסל קטן.', price: '₪3-5' },
        { name: 'Baguette Sandwich', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80', desc: 'מורשת צרפתית — בגט לואוסי עם בשר, פטה ועשבים ב-$1. הכי טוב בבוקר מול הנהר.', price: '₪4-7' }
      ]},
      mustdo: { items: [
        { name: 'Tubing ב-Vang Vieng', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80', desc: 'שייט ב-Tubing על הנהר עם עצירות בברים — חוויה ייחודית ללאוס. לקחת שעות ולהיות בזרם.' },
        { name: 'שחייה ב-Kuang Si', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'לא לפספס את הבריכה הכחולה בבסיס המפלים — שחו בין הדגים הקטנים ב-35° C מושלם.' },
        { name: 'קרוז סנסט מקונג', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', desc: 'שייט שקיעה על המקונג מ-LP ב-$5 — בירה Beerlao, שקיעה כחולה-כתומה ועצי ג\'ונגל בשתי גדות.' }
      ]}
    }
  };

  Object.keys(richCatsB).forEach(function(destId) {
    if (!destinations[destId]) return;
    Object.keys(richCatsB[destId]).forEach(function(catKey) {
      if (!destinations[destId].categories || !destinations[destId].categories[catKey]) return;
      destinations[destId].categories[catKey].items = richCatsB[destId][catKey].items;
    });
  });
})();
