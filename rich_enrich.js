(function() {
  var U = 'https://images.unsplash.com/photo-';
  function e(destId, catKey, idx, fields) {
    var dest = destinations[destId];
    if (!dest || !dest.categories) return;
    var cat = dest.categories[catKey];
    if (!cat || !cat.items || !cat.items[idx]) return;
    Object.keys(fields).forEach(function(k) { cat.items[idx][k] = fields[k]; });
  }

  // ──────────── THAILAND ────────────
  e('thailand','scenery',0,{images:[U+'1506905925346-21bda4d32df4?w=600&q=80',U+'1519046904884-53103b34b206?w=600&q=80']});
  e('thailand','scenery',1,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1448375240586-882707db888b?w=600&q=80']});
  e('thailand','scenery',2,{images:[U+'1528360983277-13d401cdc186?w=600&q=80',U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('thailand','scenery',3,{images:[U+'1571003123894-1f0594d2b5d9?w=600&q=80',U+'1559827260-dc66d52bef19?w=600&q=80']});

  e('thailand','hiking',0,{duration:'יום אחד',length:'10–15 ק"מ',difficulty:'קל',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('thailand','hiking',1,{duration:'1–2 ימים',length:'15–20 ק"מ',difficulty:'בינוני',images:[U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('thailand','hiking',2,{duration:'3 ימים',length:'40 ק"מ',difficulty:'קשה',images:[U+'1448375240586-882707db888b?w=600&q=80']});

  e('thailand','parties',0,{notes:'מגיעים ב-16:00, שיא ב-02:00. כרטיס 100 בהט. שמרו ארנק בכיס רוכסן. אסור לצאת עם בקבוקי זכוכית לחוף.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('thailand','parties',1,{notes:'אל תיסעו עם טוק-טוק לא-מוסמך אחרי שתייה. קאו-סאן השתנתה הרבה — פחות פרוע ממה שמספרים.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});
  e('thailand','parties',2,{notes:'Walking Street תיירותי מאוד עם מחירים גבוהים. הסצנה המקומית נמצאת בצד השני לחלוטין.',images:[U+'1557750255-c76072a7aad1?w=600&q=80']});

  e('thailand','beaches',0,{crowded:'שקט — בוהמה',whatToFind:'שמורות מנגרוב, מסעדות דגים טריים, יוגה ומסאז\'. מושלם ל-3 ימי מנוחה אחרי הצפון.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('thailand','beaches',1,{crowded:'מגביל כניסות',whatToFind:'חוף לבן פתוח רק בשעות מסוימות. שנורקלינג מרהיב. אין לינה — יום בלבד.',images:[U+'1552465011-b4e21bf6e79a?w=600&q=80']});
  e('thailand','beaches',2,{crowded:'בינוני — ציוד PADI',whatToFind:'בתי-ספר לצלילה זולים בעולם. ברים על החוף. כרישי לוויתן בעונה (אפריל-מאי).',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('thailand','attractions',0,{price:'500 ฿ (כולל ארמון המלך)',link:'https://www.royalgrandpalace.th',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('thailand','attractions',1,{price:'חינם כניסה, 100–300 ฿ קניות',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('thailand','attractions',2,{price:'$70–100 ליום',link:'https://www.elephantnaturepark.org',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── VIETNAM ────────────
  e('vietnam','scenery',0,{images:[U+'1557750255-c76072a7aad1?w=600&q=80',U+'1528127269322-539801943592?w=600&q=80']});
  e('vietnam','scenery',1,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('vietnam','scenery',2,{images:[U+'1528127269322-539801943592?w=600&q=80',U+'1557750255-c76072a7aad1?w=600&q=80']});
  e('vietnam','scenery',3,{images:[U+'1506905925346-21bda4d32df4?w=600&q=80',U+'1448375240586-882707db888b?w=600&q=80']});

  e('vietnam','hiking',0,{duration:'2–3 ימים',length:'30–40 ק"מ',difficulty:'בינוני',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('vietnam','hiking',1,{duration:'יום אחד',length:'12 ק"מ',difficulty:'בינוני',images:[U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('vietnam','hiking',2,{duration:'יום אחד',length:'8–12 ק"מ',difficulty:'קל',images:[U+'1448375240586-882707db888b?w=600&q=80']});

  e('vietnam','parties',0,{notes:'ברים נסגרים ב-24:00 לפי חוק עירוני. אחרי זה עוברים לבתים פרטיים — שאלו מקומיים.'});
  e('vietnam','parties',1,{notes:'חפשו אורות כחולים לאורך החוף. שתייה בסאנסט בבאר כיסאות עץ = החוויה האמיתית.'});
  e('vietnam','parties',2,{notes:'Beer Hoi ב-25 סנט הוא הכי זול בעולם. ישיבה על כיסאות פלסטיק בסמטה — זה הויב.'});

  e('vietnam','beaches',0,{crowded:'שקט בצפון האי',whatToFind:'חוף Ong Lang שקט, שוק דגים בבוקר, Long Beach לצלילה, Sunset Beach לשקיעות.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('vietnam','beaches',1,{crowded:'שקט — ספורט ים',whatToFind:'ווינד-סרפינג וקייט-סרפינג עם רוחות מושלמות. דיונות אדומות ולבנות. כפרי דייגים.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('vietnam','beaches',2,{crowded:'צפוף בעונה',whatToFind:'טיולי אי, צלילה עמוקה, Vinpearl Land פארק שעשועים. שוק ים בשעות אחה"צ.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('vietnam','attractions',0,{price:'110,000 VND (~₪25)',link:'https://www.cuchitunnels.org',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('vietnam','attractions',1,{price:'חינם לטייל, ₪20 לכרטיס משולב',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('vietnam','attractions',2,{price:'200,000 VND (~₪45)',images:[U+'1528127269322-539801943592?w=600&q=80']});

  // ──────────── INDONESIA ────────────
  e('indonesia','scenery',0,{images:[U+'1537996194471-e657df975ab4?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});
  e('indonesia','scenery',1,{images:[U+'1506905925346-21bda4d32df4?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('indonesia','scenery',2,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1544551763-46a013bb70d5?w=600&q=80']});
  e('indonesia','scenery',3,{images:[U+'1544551763-46a013bb70d5?w=600&q=80',U+'1519046904884-53103b34b206?w=600&q=80']});

  e('indonesia','hiking',0,{duration:'יום אחד',length:'10 ק"מ',difficulty:'בינוני',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('indonesia','hiking',1,{duration:'3 ימים',length:'35 ק"מ',difficulty:'קשה',images:[U+'1448375240586-882707db888b?w=600&q=80']});
  e('indonesia','hiking',2,{duration:'יום אחד',length:'12 ק"מ',difficulty:'קל-בינוני',images:[U+'1441974231531-c6227db76b6e?w=600&q=80']});

  e('indonesia','parties',0,{notes:'Potato Head וKu De Ta דורשים הזמנה מראש בסוף שבוע. שמלות שמרניות בדרך.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('indonesia','parties',1,{notes:'Eat Street פחות פרוע ממה שמספרים, אבל הכי אותנטי.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});
  e('indonesia','parties',2,{notes:'Sky Garden הוא Backpacker Central — כניסה חינם עם קנייה. עד 05:00.',images:[U+'1494522855154-9297ac14b55f?w=600&q=80']});

  e('indonesia','beaches',0,{crowded:'בינוני — ינסטגרם',whatToFind:'Kelingking Beach מגיעים ב-20 דקות ירידה תלולה. מים כחולים עמוקים. אין שירותים.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('indonesia','beaches',1,{crowded:'שקט',whatToFind:'חוף לבן ומים ירוקים שקופים. מגיעים בסירה 30 דקות. אין ריסורטים — רק טבע.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('indonesia','beaches',2,{crowded:'גלים — גולשים',whatToFind:'גלים מושלמים לגלישה. שחייה לא מומלצת. צפייה בשקיעה = חובה מוחלטת.',images:[U+'1537996194471-e657df975ab4?w=600&q=80']});

  e('indonesia','attractions',0,{price:'50,000 IDR (~₪15)',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('indonesia','attractions',1,{price:'חינם',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('indonesia','attractions',2,{price:'80,000 IDR (~₪25)',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── PERU ────────────
  e('peru','scenery',0,{images:[U+'1526392060635-9d6019884377?w=600&q=80',U+'1448375240586-882707db888b?w=600&q=80']});
  e('peru','scenery',1,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('peru','scenery',2,{images:[U+'1501554728187-ce583db33af7?w=600&q=80',U+'1526392060635-9d6019884377?w=600&q=80']});
  e('peru','scenery',3,{images:[U+'1559827260-dc66d52bef19?w=600&q=80',U+'1519046904884-53103b34b206?w=600&q=80']});

  e('peru','hiking',0,{duration:'4 ימים',length:'43 ק"מ',difficulty:'בינוני-קשה',images:[U+'1448375240586-882707db888b?w=600&q=80',U+'1526392060635-9d6019884377?w=600&q=80']});
  e('peru','hiking',1,{duration:'5 ימים',length:'74 ק"מ',difficulty:'קשה',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('peru','hiking',2,{duration:'3–5 ימים',length:'מגוון',difficulty:'בינוני',images:[U+'1441974231531-c6227db76b6e?w=600&q=80']});

  e('peru','parties',0,{notes:'בגובה 154מ\' מעל הים — אלכוהול משפיע חזק יותר. שתו מים הרבה לפני.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('peru','parties',1,{notes:'בגובה 3,400מ\' פיסקו סאואר אחד שווה שלושה. שמרו על עצמכם.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});
  e('peru','parties',2,{notes:'Barranco הכי בוהמי. אל תסיימו בלי לשמוע מוסיקה חיה.',images:[U+'1494522855154-9297ac14b55f?w=600&q=80']});

  e('peru','beaches',0,{crowded:'בינוני — גולשים',whatToFind:'מים חמים, סביצ\'ה על החוף, שקיעות אדומות. הנקודה הצפונית בפרו לפני אקוודור.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('peru','beaches',1,{crowded:'שקט — פינגווינים',whatToFind:'ספינה ב-$20, פינגווינים אפריקניים, אריות ים. 2 שעות מלימה.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});

  e('peru','attractions',0,{price:'$17 (+ $12 לאוטובוס)',link:'https://www.machupicchu.gob.pe',images:[U+'1526392060635-9d6019884377?w=600&q=80']});
  e('peru','attractions',1,{price:'$70–100 לטיסה',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('peru','attractions',2,{price:'$10–15 לסירה',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── COLOMBIA ────────────
  e('colombia','scenery',0,{images:[U+'1549880338-65ddcdfd017b?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('colombia','scenery',1,{images:[U+'1506905925346-21bda4d32df4?w=600&q=80',U+'1544551763-46a013bb70d5?w=600&q=80']});
  e('colombia','scenery',2,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('colombia','scenery',3,{images:[U+'1559827260-dc66d52bef19?w=600&q=80',U+'1519046904884-53103b34b206?w=600&q=80']});

  e('colombia','hiking',0,{duration:'6 ימים',length:'44 ק"מ',difficulty:'בינוני-קשה',images:[U+'1448375240586-882707db888b?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('colombia','hiking',1,{duration:'יום אחד',length:'10 ק"מ',difficulty:'קל-בינוני',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('colombia','hiking',2,{duration:'יום אחד',length:'8 ק"מ',difficulty:'קל',images:[U+'1441974231531-c6227db76b6e?w=600&q=80']});

  e('colombia','parties',0,{notes:'קומביה ברחוב — ריקוד עם מקומיים הוא מצופה. אל תסרבו.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('colombia','parties',1,{notes:'ל\'אוריאנטה בטוחה לחלוטין. אל תיסעו למדיין הישנה בלילה.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});
  e('colombia','parties',2,{notes:'שיעור סאלסה לפני הלילה — שעתיים ב-$10. בלי שיעור אי אפשר.',images:[U+'1494522855154-9297ac14b55f?w=600&q=80']});

  e('colombia','beaches',0,{crowded:'בינוני — נחמד',whatToFind:'שנורקלינג, האמקות ים, המבורגרים על הסירה. ב-$30 יום שלם.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('colombia','beaches',1,{crowded:'ביום צפוף, בלילה שקט',whatToFind:'ערסלים $5, מוסיקה, קוקטיילים. 45 דקות מקארטגנה.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('colombia','beaches',2,{crowded:'שקט — ג\'ונגל',whatToFind:'חוף בתוך פארק לאומי. ג\'ונגל עד לים. אלמוגים ייחודיים.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('colombia','attractions',0,{price:'חינם לסיור, ₪15 למגדל',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('colombia','attractions',1,{price:'חינם (Free Walking Tour)',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('colombia','attractions',2,{price:'$8 לכניסה',link:'https://www.proaves.org',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── ARGENTINA ────────────
  e('argentina','scenery',0,{images:[U+'1501554728187-ce583db33af7?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('argentina','scenery',1,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1448375240586-882707db888b?w=600&q=80']});
  e('argentina','scenery',2,{images:[U+'1559827260-dc66d52bef19?w=600&q=80',U+'1519046904884-53103b34b206?w=600&q=80']});
  e('argentina','scenery',3,{images:[U+'1501554728187-ce583db33af7?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});

  e('argentina','hiking',0,{duration:'5 ימים',length:'80 ק"מ',difficulty:'בינוני-קשה',images:[U+'1448375240586-882707db888b?w=600&q=80',U+'1501554728187-ce583db33af7?w=600&q=80']});
  e('argentina','hiking',1,{duration:'2 ימים',length:'20 ק"מ',difficulty:'קל-בינוני',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('argentina','hiking',2,{duration:'יום אחד',length:'12 ק"מ',difficulty:'קל',images:[U+'1441974231531-c6227db76b6e?w=600&q=80']});

  e('argentina','parties',0,{notes:'ארוחת ערב ב-22:00, בר ב-00:00, מועדון ב-02:00 — זה הקצב הארגנטינאי.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('argentina','parties',1,{notes:'במילונגה לובשים נאה — ג\'ינס וגופייה לא מקובל. כניסה בטו"ב לבגדים.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});
  e('argentina','parties',2,{notes:'Malbec Tasting $10 למבחר 5. אין לנהוג לאחר הביקור — כביש הרים.',images:[U+'1494522855154-9297ac14b55f?w=600&q=80']});

  e('argentina','beaches',0,{crowded:'צפוף בינואר',whatToFind:'8 ק"מ חוף עם אזורים שונים לגיל ולסגנון. הארגנטינאים מגיעים ב-11 ונשארים עד 9 ערב.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('argentina','beaches',1,{crowded:'שקט יחסית',whatToFind:'חוף עירוני עם תרבות חוף אמיתית. אסאדו על הדשא מול הים. אוקיינוס אטלנטי.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});

  e('argentina','attractions',0,{price:'חינם',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('argentina','attractions',1,{price:'$25–45',link:'https://www.iguazuargentina.com',images:[U+'1501554728187-ce583db33af7?w=600&q=80']});
  e('argentina','attractions',2,{price:'$15 לאתר',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── AUSTRALIA ────────────
  e('australia','scenery',0,{images:[U+'1523482580672-f109ba8cb9be?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});
  e('australia','scenery',1,{images:[U+'1516026672322-bc52d61a55d5?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('australia','scenery',2,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('australia','scenery',3,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1523482580672-f109ba8cb9be?w=600&q=80']});

  e('australia','hiking',0,{duration:'יום אחד',length:'10.6 ק"מ',difficulty:'קל',images:[U+'1448375240586-882707db888b?w=600&q=80']});
  e('australia','hiking',1,{duration:'יום אחד',length:'6 שעות',difficulty:'בינוני',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('australia','hiking',2,{duration:'יום אחד',length:'8–10 ק"מ',difficulty:'קל-בינוני',images:[U+'1441974231531-c6227db76b6e?w=600&q=80']});

  e('australia','parties',0,{notes:'Lock-out Laws — אחרי 01:30 אין כניסה לברים. תכננו בהתאם.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('australia','parties',1,{notes:'מלבורן יותר איכותי מסידני — פחות שתייה, יותר מוסיקה.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});
  e('australia','parties',2,{notes:'Gold Coast צעיר וסוער — Schoolies Season בנובמבר מגיעים 40,000 בוגרי תיכון.',images:[U+'1494522855154-9297ac14b55f?w=600&q=80']});

  e('australia','beaches',0,{crowded:'צפוף — תיירים',whatToFind:'Bondi Icebergs Pool ציבורי $8. Markets ראשון. Coastal Walk לCoogee 6 ק"מ.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('australia','beaches',1,{crowded:'מבודד — ספינה בלבד',whatToFind:'החול הלבן ביותר בעולם. מגיעים בסירה מהאמלטון. שקיעה = פנטסיה.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('australia','beaches',2,{crowded:'בינוני',whatToFind:'בסיס לאיי הוויטסאנדיז. שנורקלינג, שייט שייט ו-Resort hopping.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('australia','attractions',0,{price:'$45 לסיור מודרך, $0 לצפייה מבחוץ',link:'https://www.sydneyoperahouse.com',images:[U+'1523482580672-f109ba8cb9be?w=600&q=80']});
  e('australia','attractions',1,{price:'חינם — נסיעה בלבד',images:[U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('australia','attractions',2,{price:'חינם לצפייה, $35 לכבלית',link:'https://www.ulurukatatatjuta.com.au',images:[U+'1448375240586-882707db888b?w=600&q=80']});

  // ──────────── KENYA ────────────
  e('kenya','scenery',0,{images:[U+'1516426122078-c23e76319801?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('kenya','scenery',1,{images:[U+'1516426122078-c23e76319801?w=600&q=80',U+'1547234935-80c7145ec969?w=600&q=80']});
  e('kenya','scenery',2,{images:[U+'1547234935-80c7145ec969?w=600&q=80',U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('kenya','scenery',3,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1516426122078-c23e76319801?w=600&q=80']});

  e('kenya','hiking',0,{duration:'5–7 ימים',length:'70 ק"מ',difficulty:'קשה',images:[U+'1448375240586-882707db888b?w=600&q=80']});
  e('kenya','hiking',1,{duration:'יום אחד',length:'10–15 ק"מ',difficulty:'קל',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('kenya','hiking',2,{duration:'2–3 ימים',length:'30 ק"מ',difficulty:'בינוני',images:[U+'1441974231531-c6227db76b6e?w=600&q=80']});

  e('kenya','parties',0,{notes:'Westlands הכי בטוח. הימנעו מכרכום ואזורים מחוץ לcBD בלילה.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('kenya','parties',1,{notes:'Malindi ידועה כ-Backpacker Beach — ישראלים הרבה. מחירים נמוכים.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});
  e('kenya','parties',2,{notes:'Watamu שקטה ובוהמאית. שמרו על חפצים — כיסי רוכסן.',images:[U+'1494522855154-9297ac14b55f?w=600&q=80']});

  e('kenya','beaches',0,{crowded:'שקט — אירופאים',whatToFind:'חוף לבן עם שונית אלמוגים, Kite-surfing, Diani Reef Hotel. 1.5 שעות מנירובי.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('kenya','beaches',1,{crowded:'שקט — צלמים',whatToFind:'צבי ים מטילים בלילה (יוני-ספטמבר). שנורקלינג. כפר דייגים ותיק.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('kenya','beaches',2,{crowded:'שקט — אקזוטי',whatToFind:'העיר ההיסטורית הנגישה רק בסירה. בניינים מהמאה ה-19. אסון של שקיעה.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('kenya','attractions',0,{price:'$70–150 ליום (ספארי)',images:[U+'1516426122078-c23e76319801?w=600&q=80']});
  e('kenya','attractions',1,{price:'$12 כניסה',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('kenya','attractions',2,{price:'$6 לביקור',link:'https://www.giraffecentre.org',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── USA ────────────
  e('usa','scenery',0,{images:[U+'1485738422979-f5c462d49f74?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('usa','scenery',1,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('usa','scenery',2,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1485738422979-f5c462d49f74?w=600&q=80']});
  e('usa','scenery',3,{images:[U+'1485738422979-f5c462d49f74?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});

  e('usa','hiking',0,{duration:'יום אחד',length:'22 ק"מ (Bright Angel)',difficulty:'בינוני-קשה',images:[U+'1448375240586-882707db888b?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('usa','hiking',1,{duration:'יום אחד',length:'14–22 ק"מ',difficulty:'בינוני',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('usa','hiking',2,{duration:'יום אחד',length:'16 ק"מ (Angels Landing)',difficulty:'קשה',images:[U+'1441974231531-c6227db76b6e?w=600&q=80']});

  e('usa','parties',0,{notes:'Vegas מה שקורה ב-Vegas — אנרגי המשקאות בחינם אם אתם משחקים. Budget $100 לקזינו.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('usa','parties',1,{notes:'New Orleans — Mardi Gras בפברואר. Bourbon Street פתוח 24/7 כל השנה.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});
  e('usa','parties',2,{notes:'South Beach נסגר ב-05:00. Uber מ-Lincoln Road בחזרה — לא ללכת ברגל בלילה.',images:[U+'1494522855154-9297ac14b55f?w=600&q=80']});

  e('usa','beaches',0,{crowded:'צפוף — Miami Beach',whatToFind:'Art Deco architecture, Ocean Drive bars, Baywatch vibes. Uber Eats לחוף — כן, זה קיים.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('usa','beaches',1,{crowded:'שקט — Maui',whatToFind:'Snorkeling עם צבים ב-Turtle Town, Surfing בPaia, Hana Road הציורית.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('usa','beaches',2,{crowded:'עירוני — LA',whatToFind:'Venice Beach Boardwalk, muscle beach, skateboarding, street performers. Tacos ב-$2.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('usa','attractions',0,{price:'$25 לאתר לשבוע',link:'https://www.nps.gov/grca',images:[U+'1485738422979-f5c462d49f74?w=600&q=80']});
  e('usa','attractions',1,{price:'$25 לאתר לשבוע',link:'https://www.nps.gov/yose',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('usa','attractions',2,{price:'חינם, $28 לMoab',images:[U+'1441974231531-c6227db76b6e?w=600&q=80']});

  // ──────────── CAMBODIA ────────────
  e('cambodia','scenery',0,{images:[U+'1537953773345-d172ccf13cf1?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('cambodia','scenery',1,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});
  e('cambodia','scenery',2,{images:[U+'1519046904884-53103b34b206?w=600&q=80',U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('cambodia','hiking',0,{duration:'יום שלם',length:'15–20 ק"מ',difficulty:'קל',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('cambodia','hiking',1,{duration:'יום אחד',length:'8 ק"מ',difficulty:'בינוני',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('cambodia','hiking',2,{duration:'2–3 ימים',length:'40 ק"מ',difficulty:'בינוני-קשה',images:[U+'1441974231531-c6227db76b6e?w=600&q=80']});

  e('cambodia','parties',0,{notes:'Pub Street — $1 לבירה, שתייה בחוץ. אל תלכו רחוק מהרחוב הראשי.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('cambodia','parties',1,{notes:'FCC ו-Pontoon — הכי מפורסמים. שמרו חפצים — כיסוי בלתי מורשה נפוץ.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});

  e('cambodia','beaches',0,{crowded:'שקט — כאוס קטן',whatToFind:'2 ימים בלי חשמל בלילה, בקתות עץ, שמים מדהימים. גנרטור מכבים ב-22:00.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('cambodia','beaches',1,{crowded:'בינוני-צפוף',whatToFind:'ריסורטים זולים, Night Market, פינקסי-ים. לינה $5 לילה.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('cambodia','beaches',2,{crowded:'שקט לחלוטין',whatToFind:'מגיעים בסירה 20 דקות, אין חשמל בכלל. לבד עם הטבע. אחרון של המין.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('cambodia','attractions',0,{price:'$37 ליום, $62 לשלושה',link:'https://www.angkorwat.org',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('cambodia','attractions',1,{price:'חינם',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('cambodia','attractions',2,{price:'$3 כניסה',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── BRAZIL ────────────
  e('brazil','scenery',0,{images:[U+'1483729558449-99ef09a8c325?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});
  e('brazil','scenery',1,{images:[U+'1501854140801-50d01698950b?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('brazil','scenery',2,{images:[U+'1516026672322-bc52d61a55d5?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('brazil','scenery',3,{images:[U+'1547234935-80c7145ec969?w=600&q=80',U+'1519046904884-53103b34b206?w=600&q=80']});

  e('brazil','hiking',0,{duration:'3–5 ימים',length:'50+ ק"מ',difficulty:'בינוני',images:[U+'1448375240586-882707db888b?w=600&q=80']});
  e('brazil','hiking',1,{duration:'יום אחד',length:'8 שעות',difficulty:'קשה',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});

  e('brazil','parties',0,{notes:'Lapa מסוכן מחוץ לאזור המוסיקה — Uber לכל מקום. אל תצאו עם מצלמה יקרה.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('brazil','parties',1,{notes:'Blocos חינמיים ב-Carnaval — עדיפים על Sambadrome. מגיעים ב-08:00 ל-Bloco הטוב.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});
  e('brazil','parties',2,{notes:'Vila Madalena בטוחה יחסית — הישארו בשכונה.',images:[U+'1494522855154-9297ac14b55f?w=600&q=80']});

  e('brazil','beaches',0,{crowded:'צפוף — Posto 9',whatToFind:'Posto 9 = קהל LGBTQ+ ואמנים. Posto 8 = ספורטאים. Posto 10 = משפחות. בחרו.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('brazil','beaches',1,{crowded:'בינוני',whatToFind:'23 חופות שונות. Ferradura לגלים, Azeda לסנורקלינג, João Fernandes לשקט.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('brazil','beaches',2,{crowded:'שקט — ייחודי',whatToFind:'בריכות טבעיות בשפל ים — שחייה עם דגי ניימו טרופיים. רק ב-$5 כניסה.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('brazil','attractions',0,{price:'$25 לכבלית + כרטיס',link:'https://www.tremdocorcovado.rio',images:[U+'1483729558449-99ef09a8c325?w=600&q=80']});
  e('brazil','attractions',1,{price:'$150–300 לטיול 3 ימים',images:[U+'1516026672322-bc52d61a55d5?w=600&q=80']});
  e('brazil','attractions',2,{price:'$15 כניסה',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── UGANDA ────────────
  e('uganda','hiking',0,{duration:'יום — 2–6 שעות',length:'5–10 ק"מ ג\'ונגל',difficulty:'בינוני',images:[U+'1448375240586-882707db888b?w=600&q=80']});
  e('uganda','hiking',1,{duration:'3 שעות',length:'8 ק"מ',difficulty:'קל-בינוני',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});

  e('uganda','parties',0,{notes:'קמפאלה בטוחה יחסית — Uber חובה בלילה. מקומיים מסבירי פנים מאוד.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('uganda','parties',1,{notes:'ג\'ינג\'ה קטנה — כולם מכירים את כולם. Nile Beer $0.8 הוא הטעים ביותר.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});

  e('uganda','beaches',0,{crowded:'שקט',whatToFind:'אגם ויקטוריה — בקתות מעל המים, שייט קיאק בין האיים, דייג בוקר.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});

  e('uganda','attractions',0,{price:'$70 לביקור',link:'https://www.ngambaisland.org',images:[U+'1475304718842-e8f6db9fdf3a?w=600&q=80']});
  e('uganda','attractions',1,{price:'$5 כניסה',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('uganda','attractions',2,{price:'חינם',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── JAPAN ────────────
  e('japan','scenery',0,{images:[U+'1570459027562-4a916cc6113f?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});
  e('japan','scenery',1,{images:[U+'1545569341-9eb8b30979d9?w=600&q=80',U+'1540959733332-eab4deabeeaf?w=600&q=80']});
  e('japan','scenery',2,{images:[U+'1545569341-9eb8b30979d9?w=600&q=80',U+'1570459027562-4a916cc6113f?w=600&q=80']});
  e('japan','scenery',3,{images:[U+'1545569341-9eb8b30979d9?w=600&q=80',U+'1540959733332-eab4deabeeaf?w=600&q=80']});

  e('japan','hiking',0,{duration:'לילה אחד',length:'8 ק"מ (שלב 5 לפסגה)',difficulty:'בינוני-קשה',images:[U+'1570459027562-4a916cc6113f?w=600&q=80',U+'1448375240586-882707db888b?w=600&q=80']});
  e('japan','hiking',1,{duration:'3–5 ימים',length:'70 ק"מ',difficulty:'בינוני',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('japan','hiking',2,{duration:'יום אחד',length:'9 ק"מ',difficulty:'קל',images:[U+'1441974231531-c6227db76b6e?w=600&q=80']});

  e('japan','parties',0,{notes:'Golden Gai — אל תיכנסו עם קבוצה גדולה. יש ברים ל-4 אנשים בלבד. כסף מזומן חובה.',images:[U+'1540959733332-eab4deabeeaf?w=600&q=80']});
  e('japan','parties',1,{notes:'Dotonbori — Shinsaibashi בסמוך. הכל פתוח עד 05:00. סגנון ייחודי ביפן.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});
  e('japan','parties',2,{notes:'פונטוצ\'ו — Geishas אמיתיות עוברות כאן. אל תצלמו בלי רשות.',images:[U+'1494522855154-9297ac14b55f?w=600&q=80']});

  e('japan','beaches',0,{crowded:'שקט בחורף',whatToFind:'מים שקופים, Kayak בין אלמוגים, תרבות Ryukyu שונה לגמרי מיפן. טיסה $60.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('japan','beaches',1,{crowded:'עירוני — סורפרים',whatToFind:'Daibutsu (בודהה ענק) ב-10 דקות מהחוף. Kamakura Hiking Course 10 ק"מ.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});

  e('japan','attractions',0,{price:'חינם',link:'https://www.gotokyo.org/en/spots/1046/index.html',images:[U+'1540959733332-eab4deabeeaf?w=600&q=80']});
  e('japan','attractions',1,{price:'חינם',link:'https://inari.jp',images:[U+'1545569341-9eb8b30979d9?w=600&q=80']});
  e('japan','attractions',2,{price:'¥600 (~₪20) + ¥500 לאוכל אייל',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── BOLIVIA ────────────
  e('bolivia','scenery',0,{images:[U+'1547234935-80c7145ec969?w=600&q=80',U+'1509233725247-49e657c54213?w=600&q=80']});
  e('bolivia','scenery',1,{images:[U+'1506905925346-21bda4d32df4?w=600&q=80',U+'1547234935-80c7145ec969?w=600&q=80']});
  e('bolivia','scenery',2,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});
  e('bolivia','scenery',3,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1547234935-80c7145ec969?w=600&q=80']});

  e('bolivia','hiking',0,{duration:'3 ימים',length:'45 ק"מ',difficulty:'בינוני',images:[U+'1448375240586-882707db888b?w=600&q=80']});
  e('bolivia','hiking',1,{duration:'יום אחד',length:'64 ק"מ (אופניים)',difficulty:'קל — ירידה בלבד',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});

  e('bolivia','parties',0,{notes:'Sopocachi — Mongo\'s הוא כניסה שאם לא הלכתם לא הייתם בלה פאז.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('bolivia','parties',1,{notes:'Carnaval Oruro — הזמינו מקום 3 חודשים מראש. פברואר = עמוס לחלוטין.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});

  e('bolivia','beaches',0,{crowded:'שקט — גבוה',whatToFind:'גובה 3,812מ\' — המים קרים. שייט קיאק, כפרי Tiwanaku. Island of the Sun עם שביל אינקה.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});

  e('bolivia','attractions',0,{price:'חינם מבחוץ, $2 סיור',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('bolivia','attractions',1,{price:'חינם',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('bolivia','attractions',2,{price:'$150–200 ל-3 ימים',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── MEXICO ────────────
  e('mexico','scenery',0,{images:[U+'1552537376-3abf35237215?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});
  e('mexico','scenery',1,{images:[U+'1552537376-3abf35237215?w=600&q=80',U+'1544551763-46a013bb70d5?w=600&q=80']});
  e('mexico','scenery',2,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('mexico','scenery',3,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});

  e('mexico','hiking',0,{duration:'3–5 ימים',length:'80 ק"מ',difficulty:'בינוני',images:[U+'1448375240586-882707db888b?w=600&q=80']});
  e('mexico','hiking',1,{duration:'2 ימים',length:'עם מדריך',difficulty:'קשה',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});

  e('mexico','parties',0,{notes:'Condesa בטוחה. CDMX — Uber בלבד בלילה, לא מונית רחוב.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('mexico','parties',1,{notes:'Coco Bongo — Open Bar $70. Spring Break מרץ-אפריל = פחות מקומיים.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});
  e('mexico','parties',2,{notes:'מייסקל אמיתי — Mezcal Vago ו-Yuu Baal. לא Patron. שתו לאט.',images:[U+'1494522855154-9297ac14b55f?w=600&q=80']});

  e('mexico','beaches',0,{crowded:'בינוני — תגיעו מוקדם',whatToFind:'מאיה רואינס על הצוק מעל הים. קיאקינג בחנות עסקים. Tulum הפך יקר — שכנות עדיפות.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('mexico','beaches',1,{crowded:'בינוני — מטיילים',whatToFind:'Fifth Avenue מסחרית. חוף עם גלים בינוניים. Base Camp לIslaMujeres וCozumel.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('mexico','beaches',2,{crowded:'שקט — 25 דקות מקנקון',whatToFind:'גולף-קארט כתחבורה, Playa Norte הכי יפה, Whale Sharks מיולי-ספטמבר.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('mexico','attractions',0,{price:'$15 כניסה',link:'https://museofrida.com.mx',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('mexico','attractions',1,{price:'$7 כניסה',link:'https://www.teotihuacan.inah.gob.mx',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('mexico','attractions',2,{price:'$15 כניסה',images:[U+'1552537376-3abf35237215?w=600&q=80']});

  // ──────────── TANZANIA ────────────
  e('tanzania','scenery',0,{images:[U+'1547234935-80c7145ec969?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('tanzania','scenery',1,{images:[U+'1516426122078-c23e76319801?w=600&q=80',U+'1547234935-80c7145ec969?w=600&q=80']});
  e('tanzania','scenery',2,{images:[U+'1516426122078-c23e76319801?w=600&q=80',U+'1547234935-80c7145ec969?w=600&q=80']});
  e('tanzania','scenery',3,{images:[U+'1559827260-dc66d52bef19?w=600&q=80',U+'1519046904884-53103b34b206?w=600&q=80']});

  e('tanzania','hiking',0,{duration:'7 ימים',length:'62 ק"מ',difficulty:'קשה',images:[U+'1448375240586-882707db888b?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('tanzania','hiking',1,{duration:'יום אחד (לילי)',length:'8 ק"מ',difficulty:'קשה',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});

  e('tanzania','parties',0,{notes:'Kendwa Rocks Full Moon Party — חינם לחלוטין. ישראלים הרבה. תופים עד שקיעה.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('tanzania','parties',1,{notes:'Mercury\'s Bar — הוא בן-אדם אמיתי נולד כאן. הקיר מלא תמונות ה-Queen.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});

  e('tanzania','beaches',0,{crowded:'בינוני — Nungwi',whatToFind:'חוף ללא גאות-שפל. Pool Bars, Sunset Cruise ב-$15. Mnarani Aquarium עם צבי ים.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('tanzania','beaches',1,{crowded:'שקט מאוד',whatToFind:'צלילה מהחוף בלי להרחיק. כרישי לוויתן, פינגווינים. רק 3 Eco-Resorts.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('tanzania','attractions',0,{price:'$5 להסתובב, $10 לשוק',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('tanzania','attractions',1,{price:'$30 ל-Spice Tour',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('tanzania','attractions',2,{price:'$150 ליום (Eco Resort)',link:'https://www.chumbeisland.com',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── INDIA ────────────
  e('india','scenery',0,{images:[U+'1564507592333-c60657eea523?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});
  e('india','scenery',1,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1509233725247-49e657c54213?w=600&q=80']});
  e('india','scenery',2,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1564507592333-c60657eea523?w=600&q=80']});
  e('india','scenery',3,{images:[U+'1506905925346-21bda4d32df4?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});

  e('india','hiking',0,{duration:'8 ימים',length:'70 ק"מ',difficulty:'קיצוני (-30°C)',images:[U+'1448375240586-882707db888b?w=600&q=80']});
  e('india','hiking',1,{duration:'3 ימים',length:'38 ק"מ',difficulty:'בינוני',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});

  e('india','parties',0,{notes:'Hilltop Goa — מתחיל ב-10 בבוקר! Psytrance חוקי. הביאו מים ומזון.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('india','parties',1,{notes:'Bandra בטוחה. אל תלכו ב-Mumbai ב-03:00 ברגל — Uber בלבד.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});
  e('india','parties',2,{notes:'Anjuna Flea Market בשישי — אתם יכולים למכור וגם לקנות. תגיעו ב-10 בבוקר.',images:[U+'1494522855154-9297ac14b55f?w=600&q=80']});

  e('india','beaches',0,{crowded:'שקט — מבודד',whatToFind:'מים טורקיז צלולים ב-10מ\'. נחשי ים, אוכטופוסים, אלמוגים. טיסה $200 מKolkata.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('india','beaches',1,{crowded:'נדיר — היתר נדרש',whatToFind:'מים שקופים בלתי נגישים. דורש היתר מיוחד — אבל שווה כל ביורוקרטיה.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('india','beaches',2,{crowded:'בינוני',whatToFind:'Silent Disco בלילה על החוף. Yoga בבוקר. Hammocks ב-$5 לשעה.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('india','attractions',0,{price:'₹1,100 (~₪55) לזרים',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('india','attractions',1,{price:'₹500 (~₪25)',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('india','attractions',2,{price:'₹40 (~₪2)',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── NAMIBIA ────────────
  e('namibia','scenery',0,{images:[U+'1509233725247-49e657c54213?w=600&q=80',U+'1547234935-80c7145ec969?w=600&q=80']});
  e('namibia','scenery',1,{images:[U+'1509233725247-49e657c54213?w=600&q=80',U+'1547234935-80c7145ec969?w=600&q=80']});
  e('namibia','scenery',2,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1509233725247-49e657c54213?w=600&q=80']});
  e('namibia','scenery',3,{images:[U+'1547234935-80c7145ec969?w=600&q=80',U+'1516426122078-c23e76319801?w=600&q=80']});

  e('namibia','hiking',0,{duration:'45 דקות עלייה',length:'1.5 ק"מ',difficulty:'קל-בינוני (חול)',images:[U+'1509233725247-49e657c54213?w=600&q=80']});
  e('namibia','hiking',1,{duration:'5 ימים',length:'85 ק"מ',difficulty:'קשה',images:[U+'1448375240586-882707db888b?w=600&q=80']});

  e('namibia','parties',0,{notes:'ווינדהוק שקטה — Cubana ו-Joe\'s Beerhouse הם הכי פופולריים. סגירה ב-02:00.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});

  e('namibia','beaches',0,{crowded:'שקט — קר',whatToFind:'צנחנות על דיונות $150. Quad-bike $60. מסעדות דגים מעצימות. לא שחייה — גלים ועוצמה.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});

  e('namibia','attractions',0,{price:'$30 לרכב ליום',link:'https://www.etoshanationalpark.org',images:[U+'1516426122078-c23e76319801?w=600&q=80']});
  e('namibia','attractions',1,{price:'$8 כניסה',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('namibia','attractions',2,{price:'$8 היתר',images:[U+'1509233725247-49e657c54213?w=600&q=80']});

  // ──────────── GUATEMALA ────────────
  e('guatemala','scenery',0,{images:[U+'1553254899-9cb84f2a1c49?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('guatemala','scenery',1,{images:[U+'1558008258-3256797b43f3?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('guatemala','scenery',2,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1544551763-46a013bb70d5?w=600&q=80']});
  e('guatemala','scenery',3,{images:[U+'1506905925346-21bda4d32df4?w=600&q=80',U+'1553254899-9cb84f2a1c49?w=600&q=80']});

  e('guatemala','hiking',0,{duration:'לילה אחד + עלייה',length:'7 ק"מ (3,976מ\')',difficulty:'קשה',images:[U+'1448375240586-882707db888b?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('guatemala','hiking',1,{duration:'יום אחד (לילי)',length:'3 ק"מ',difficulty:'בינוני',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});

  e('guatemala','parties',0,{notes:'La Sin Ventura — הבבר הבטוח ביותר. תגיעו ב-22:00 לפני שמלא.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('guatemala','parties',1,{notes:'San Pedro שקט ובוהמי. ישראלים הרבה. לינה $5.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});

  e('guatemala','beaches',0,{crowded:'שקט',whatToFind:'חוף שחור עם צבי עור גדולים. Turtle Conservation. לינה $15 בבאנגלה על החוף.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});

  e('guatemala','attractions',0,{price:'חינם כניסה, מדריך $10',images:[U+'1558008258-3256797b43f3?w=600&q=80']});
  e('guatemala','attractions',1,{price:'$5 + $150 לטיול 5 ימים',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── LAOS ────────────
  e('laos','scenery',0,{images:[U+'1558642452-9d2a7deb7f62?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('laos','scenery',1,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});
  e('laos','scenery',2,{images:[U+'1506905925346-21bda4d32df4?w=600&q=80',U+'1558642452-9d2a7deb7f62?w=600&q=80']});
  e('laos','scenery',3,{images:[U+'1559827260-dc66d52bef19?w=600&q=80',U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('laos','hiking',0,{duration:'2–3 ימים',length:'25 ק"מ',difficulty:'קל-בינוני',images:[U+'1448375240586-882707db888b?w=600&q=80']});
  e('laos','hiking',1,{duration:'3 ימים',length:'40 ק"מ',difficulty:'בינוני-קשה',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});

  e('laos','parties',0,{notes:'Tubing — $5 כולל גלגל. ברים נסגרים ב-18:00 בשפל-הנהר. תכננו בהתאם.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('laos','parties',1,{notes:'Utopia נסגר ב-23:30 — עיר שוקט. זו החוויה האמיתית של LP.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});

  e('laos','beaches',0,{crowded:'שקט מאוד',whatToFind:'ערסל $3 ליום, שיט קיאק, רכיבה בין האיים בדייחלה. דולפיני נהר אפשרי.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('laos','attractions',0,{price:'20,000 KIP (~₪5)',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('laos','attractions',1,{price:'חינם — אבל לא לצלם',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('laos','attractions',2,{price:'30,000 KIP (~₪8)',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── CHILE ────────────
  e('chile','scenery',0,{images:[U+'1501554728187-ce583db33af7?w=600&q=80',U+'1448375240586-882707db888b?w=600&q=80']});
  e('chile','scenery',1,{images:[U+'1509233725247-49e657c54213?w=600&q=80',U+'1547234935-80c7145ec969?w=600&q=80']});
  e('chile','scenery',2,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('chile','scenery',3,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});

  e('chile','hiking',0,{duration:'5 ימים',length:'80 ק"מ',difficulty:'בינוני',images:[U+'1448375240586-882707db888b?w=600&q=80',U+'1501554728187-ce583db33af7?w=600&q=80']});
  e('chile','hiking',1,{duration:'9 ימים',length:'130 ק"מ',difficulty:'קשה',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('chile','hiking',2,{duration:'4 ימים',length:'60 ק"מ',difficulty:'בינוני-קשה',images:[U+'1441974231531-c6227db76b6e?w=600&q=80']});

  e('chile','parties',0,{notes:'בלוויסטה — ברים נפתחים ב-23:00. סנטיאגו נוחת בקצב מאוחר.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('chile','parties',1,{notes:'Valparaiso — ברים בתוך אניות. עלו ב-Ascensor לשכונות למעלה.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});

  e('chile','beaches',0,{crowded:'שקט — מדברי',whatToFind:'חוף מדברי חם באזור קר. מים כחולים רדודים. ייחודי בצ\'ילה. קמפינג מותר.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});

  e('chile','attractions',0,{price:'חינם',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('chile','attractions',1,{price:'חינם',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('chile','attractions',2,{price:'$40 לסיור כוכבים',images:[U+'1509233725247-49e657c54213?w=600&q=80']});

  // ──────────── COSTA RICA ────────────
  e('costarica','scenery',0,{images:[U+'1592406237554-9cd09e5de86a?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('costarica','scenery',1,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1516026672322-bc52d61a55d5?w=600&q=80']});
  e('costarica','scenery',2,{images:[U+'1516026672322-bc52d61a55d5?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('costarica','scenery',3,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});

  e('costarica','hiking',0,{duration:'3 ימים',length:'25 ק"מ',difficulty:'בינוני-קשה',images:[U+'1448375240586-882707db888b?w=600&q=80']});
  e('costarica','hiking',1,{duration:'2 ימים',length:'16 ק"מ',difficulty:'קשה',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});

  e('costarica','parties',0,{notes:'Quepos קטנה — Salsipuedes הוא הבר. סגירה ב-02:00.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('costarica','parties',1,{notes:'Tamarindo — Aqua Bar וBeach Club. גולשים + Backpackers = שילוב מנצח.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});

  e('costarica','beaches',0,{crowded:'שקט — קונכיות',whatToFind:'חוף עשוי קונכיות בלבד. צבע ורוד-לבן. רק ברגל. מים שקטים. ייחודי בעולם.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('costarica','beaches',1,{crowded:'גולשים',whatToFind:'גלישה עם גלים קבועים. Yoga Retreat. Malpais Beer ב-$2 על החוף.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('costarica','beaches',2,{crowded:'שקט — קריבי',whatToFind:'ריף אלמוגים, קופים שחורים על העצים, Reggae Bar. תרבות אפריקאית-קריבית.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('costarica','attractions',0,{price:'חינם',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('costarica','attractions',1,{price:'$25 לכניסה + סירה $30',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('costarica','attractions',2,{price:'$35 כניסה',link:'https://www.waterfallgardens.com',images:[U+'1592406237554-9cd09e5de86a?w=600&q=80']});

  // ──────────── NEPAL ────────────
  e('nepal','scenery',0,{images:[U+'1530018352490-c6eef07fd7e0?w=600&q=80',U+'1448375240586-882707db888b?w=600&q=80']});
  e('nepal','scenery',1,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1530018352490-c6eef07fd7e0?w=600&q=80']});
  e('nepal','scenery',2,{images:[U+'1506905925346-21bda4d32df4?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('nepal','scenery',3,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});

  e('nepal','hiking',0,{duration:'14–21 ימים',length:'130 ק"מ',difficulty:'קשה',images:[U+'1448375240586-882707db888b?w=600&q=80',U+'1530018352490-c6eef07fd7e0?w=600&q=80']});
  e('nepal','hiking',1,{duration:'12 ימים',length:'110 ק"מ',difficulty:'בינוני-קשה',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});

  e('nepal','parties',0,{notes:'Thamel — Rum-Doodle Bar: חתימה על הקיר אחרי EBC. מסיבות טרקרים בלבד.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('nepal','parties',1,{notes:'Lakeside Pokhara — ברים עם נוף Annapurna. Everest Beer. הכל נסגר ב-22:00.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});

  e('nepal','beaches',0,{crowded:'שקט — אגם',whatToFind:'קיאקינג ב-$5 לשעה. Boating. שחייה אפשרית. נוף ה-Annapurna = חינם.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});

  e('nepal','attractions',0,{price:'חינם לחיצוניים, $3 לכניסה',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('nepal','attractions',1,{price:'חינם',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('nepal','attractions',2,{price:'$15 כניסה + $5 מצלמה',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── MADAGASCAR ────────────
  e('madagascar','scenery',0,{images:[U+'1547234935-80c7145ec969?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('madagascar','scenery',1,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('madagascar','scenery',2,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});
  e('madagascar','scenery',3,{images:[U+'1559827260-dc66d52bef19?w=600&q=80',U+'1519046904884-53103b34b206?w=600&q=80']});

  e('madagascar','hiking',0,{duration:'2–3 ימים',length:'20 ק"מ',difficulty:'בינוני-קשה (כבלים)',images:[U+'1448375240586-882707db888b?w=600&q=80']});
  e('madagascar','hiking',1,{duration:'יום אחד',length:'12 ק"מ',difficulty:'קל-בינוני',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});

  e('madagascar','parties',0,{notes:'Nosy Be קטנה — ברים עצמאיים ללא שלטים. שאלו מקומיים להכוונה.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});

  e('madagascar','beaches',0,{crowded:'שקט מאוד',whatToFind:'שני איים מחוברים בשפל. צבי ים מטילים ביולי-ספטמבר. מגיעים בסירה $15.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('madagascar','beaches',1,{crowded:'שקט',whatToFind:'שנורקלינג עם צבים ודגים טרופיים ב-$25. ריסורט קטן. חשמל גנרטור בלבד.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('madagascar','attractions',0,{price:'$50 פרמיט + $30 מדריך',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('madagascar','attractions',1,{price:'$20 כניסה',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('madagascar','attractions',2,{price:'חינם לצפייה, $5 לארמון',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── ECUADOR ────────────
  e('ecuador','scenery',0,{images:[U+'1516026672322-bc52d61a55d5?w=600&q=80',U+'1544551763-46a013bb70d5?w=600&q=80']});
  e('ecuador','scenery',1,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1516026672322-bc52d61a55d5?w=600&q=80']});
  e('ecuador','scenery',2,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('ecuador','scenery',3,{images:[U+'1506905925346-21bda4d32df4?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});

  e('ecuador','hiking',0,{duration:'3–4 ימים',length:'35 ק"מ',difficulty:'בינוני',images:[U+'1448375240586-882707db888b?w=600&q=80']});
  e('ecuador','hiking',1,{duration:'2 ימים',length:'עם מדריך',difficulty:'קשה (קרמפונים)',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});

  e('ecuador','parties',0,{notes:'La Mariscal — Plaza Foch מוקפת ברים. Uber בלבד אחרי 22:00.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});

  e('ecuador','beaches',0,{crowded:'Backpacker — ימי-מסיבה',whatToFind:'$5 לבית. Surf school. Street food. ברים פתוחים עד 04:00.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('ecuador','beaches',1,{crowded:'שקט — גלפגוס',whatToFind:'פינגווינים שוחים מסביבכם. אריות ים. מים 23°C. כלול בטיול אי.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});

  e('ecuador','attractions',0,{price:'חינם — Walking Tour',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('ecuador','attractions',1,{price:'$25 כרטיס + $20 רכבת',link:'https://www.trenecuador.com',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('ecuador','attractions',2,{price:'חינם (שוק שבת)',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── SRI LANKA ────────────
  e('srilanka','scenery',0,{images:[U+'1598135753163-6167c1a1ad65?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});
  e('srilanka','scenery',1,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1598135753163-6167c1a1ad65?w=600&q=80']});
  e('srilanka','scenery',2,{images:[U+'1559827260-dc66d52bef19?w=600&q=80',U+'1519046904884-53103b34b206?w=600&q=80']});
  e('srilanka','scenery',3,{images:[U+'1506905925346-21bda4d32df4?w=600&q=80',U+'1598135753163-6167c1a1ad65?w=600&q=80']});

  e('srilanka','hiking',0,{duration:'לילה אחד',length:'5,200 מדרגות',difficulty:'בינוני',images:[U+'1448375240586-882707db888b?w=600&q=80',U+'1598135753163-6167c1a1ad65?w=600&q=80']});
  e('srilanka','hiking',1,{duration:'יום אחד',length:'6 ק"מ',difficulty:'קל-בינוני',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});

  e('srilanka','parties',0,{notes:'קולומבו — Sky Bar גג מלון Movenpick. בירה Lion $3. כסות מכובדת חובה.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});

  e('srilanka','beaches',0,{crowded:'שקט',whatToFind:'Coconut Tree Hill הצילום הכי מפורסם. מים שקטים. Whale Watch מנובמבר.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('srilanka','beaches',1,{crowded:'גולשים',whatToFind:'גלים מקצועיים. Surf School $30. Bar-Beach. Arugam Bay הוא חלום הגולשים.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});
  e('srilanka','beaches',2,{crowded:'בינוני',whatToFind:'Jungle Beach נגיש בשחייה דרך ריף. שנורקלינג בין צבים. שקט מהסמוך Unawatuna.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});

  e('srilanka','attractions',0,{price:'LKR 1,500 (~₪20)',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('srilanka','attractions',1,{price:'$80 ספארי',link:'https://www.yalanationalpark.lk',images:[U+'1516426122078-c23e76319801?w=600&q=80']});
  e('srilanka','attractions',2,{price:'חינם לטייל, $10 לתצפית מגדל',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});

  // ──────────── SOUTH AFRICA ────────────
  e('southafrica','scenery',0,{images:[U+'1501593870936-9c2e41625521?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});
  e('southafrica','scenery',1,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('southafrica','scenery',2,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1501593870936-9c2e41625521?w=600&q=80']});
  e('southafrica','scenery',3,{images:[U+'1448375240586-882707db888b?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});

  e('southafrica','hiking',0,{duration:'3 שעות',length:'4 ק"מ',difficulty:'בינוני',images:[U+'1501593870936-9c2e41625521?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('southafrica','hiking',1,{duration:'5 ימים',length:'45 ק"מ',difficulty:'קשה',images:[U+'1441974231531-c6227db76b6e?w=600&q=80']});

  e('southafrica','parties',0,{notes:'Long Street — Uber בלבד. לא ללכת ברגל אחרי 22:00 אחרי הרחוב הראשי.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('southafrica','parties',1,{notes:'Maboneng בטוחה בשכונה עצמה. Uber אחרי 23:00.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});

  e('southafrica','beaches',0,{crowded:'בינוני — קפטוניים',whatToFind:'מים 15°C — קרים! Icebergs Pool הסמוך ציבורי $8. אווירת קפה-קייפטאון.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('southafrica','beaches',1,{crowded:'שקט — פינגווינים',whatToFind:'2,000 פינגווינים חופשיים. 1מ\' מרחק. $7 כניסה. Simon\'s Town 45 דקות מCT.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('southafrica','beaches',2,{crowded:'שקט',whatToFind:'רכיבת סוסים, קיאק בלגונה, יער גשם עד הים. Garden Route שביל רגלי.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('southafrica','attractions',0,{price:'$30 לרכב ליום',link:'https://www.krugerpark.co.za',images:[U+'1516426122078-c23e76319801?w=600&q=80']});
  e('southafrica','attractions',1,{price:'$30 לאי (כולל סירה + מדריך לשעבר)',link:'https://www.robben-island.org.za',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('southafrica','attractions',2,{price:'חינם לטיול, $10 לOrlando Bungee',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});

  // ──────────── PHILIPPINES ────────────
  e('philippines','scenery',0,{images:[U+'1518509562904-e7ef99cdcc86?w=600&q=80',U+'1544551763-46a013bb70d5?w=600&q=80']});
  e('philippines','scenery',1,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});
  e('philippines','scenery',2,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1518509562904-e7ef99cdcc86?w=600&q=80']});
  e('philippines','scenery',3,{images:[U+'1559827260-dc66d52bef19?w=600&q=80',U+'1519046904884-53103b34b206?w=600&q=80']});

  e('philippines','hiking',0,{duration:'לילה אחד',length:'8 ק"מ',difficulty:'בינוני',images:[U+'1448375240586-882707db888b?w=600&q=80']});
  e('philippines','hiking',1,{duration:'2 ימים',length:'15 ק"מ',difficulty:'בינוני',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});

  e('philippines','parties',0,{notes:'BGC בטוח מאוד. Palace Pool Club — רוף-טופ עם פול. כניסה $20.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('philippines','parties',1,{notes:'Boracay White Beach — D-Mall ו-Cocomangas הם הסיבה. אל תפספסו Paraw Sailing בשקיעה.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});

  e('philippines','beaches',0,{crowded:'שקט — Secret',whatToFind:'Secret Beach מגיעים בשחייה דרך חור בסלע. Shimizu Island — שנורקלינג מרהיב.',images:[U+'1518509562904-e7ef99cdcc86?w=600&q=80']});
  e('philippines','beaches',1,{crowded:'בינוני',whatToFind:'4 ק"מ חוף לבן. שקיעות ורוד-כתום. Windsurfing $30 שיעור.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('philippines','beaches',2,{crowded:'גולשים',whatToFind:'Cloud 9 — הגל הכי מפורסם. Sugba Lagoon ב-30 דקות. קיאקינג $5.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('philippines','attractions',0,{price:'חינם (Kalesa $5 לסיור)',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('philippines','attractions',1,{price:'חינם + $10 תרומה',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('philippines','attractions',2,{price:'$35 כרטיס + ספינה',link:'https://www.puerto-undergroundriver.com',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── MOROCCO ────────────
  e('morocco','scenery',0,{images:[U+'1612688270190-3fefee5f7c07?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});
  e('morocco','scenery',1,{images:[U+'1542391881-6aa7f0f50e49?w=600&q=80',U+'1509233725247-49e657c54213?w=600&q=80']});
  e('morocco','scenery',2,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1441974231531-c6227db76b6e?w=600&q=80']});
  e('morocco','scenery',3,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1542391881-6aa7f0f50e49?w=600&q=80']});

  e('morocco','hiking',0,{duration:'2 ימים',length:'14 ק"מ',difficulty:'בינוני',images:[U+'1448375240586-882707db888b?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('morocco','hiking',1,{duration:'יום אחד',length:'4WD + גמל',difficulty:'קל',images:[U+'1542391881-6aa7f0f50e49?w=600&q=80']});

  e('morocco','parties',0,{notes:'Djemaa El Fna — אל תשלמו לנחשים בלי לסכם מחיר מראש. $$$ לתיירים אחרת.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('morocco','parties',1,{notes:'Rooftop Bars — מרוקו מוסלמית. אלכוהול בברים ובמלונות בלבד.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});

  e('morocco','beaches',0,{crowded:'בינוני — קייטסרף',whatToFind:'Kite-surfing $50 שיעור. Medina ציורית. מסעדות דגים $5. עיר אנגלית-ספרדית.',images:[U+'1559827260-dc66d52bef19?w=600&q=80']});
  e('morocco','beaches',1,{crowded:'תיירות — רב',whatToFind:'10 ק"מ חוף. Taghazout ב-40 דקות — surfing village בוהמי. Agadir עצמה מסחרית.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});

  e('morocco','attractions',0,{price:'חינם לטייל, מדריך $15 לחצי יום',images:[U+'1537953773345-d172ccf13cf1?w=600&q=80']});
  e('morocco','attractions',1,{price:'חינם — מגג חנות עם נענע',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('morocco','attractions',2,{price:'MAD 70 (~₪30)',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

  // ──────────── NEW ZEALAND ────────────
  e('newzealand','scenery',0,{images:[U+'1497436072909-60f360e1d4b1?w=600&q=80',U+'1506905925346-21bda4d32df4?w=600&q=80']});
  e('newzealand','scenery',1,{images:[U+'1469474968028-56623f02e42e?w=600&q=80',U+'1497436072909-60f360e1d4b1?w=600&q=80']});
  e('newzealand','scenery',2,{images:[U+'1441974231531-c6227db76b6e?w=600&q=80',U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('newzealand','scenery',3,{images:[U+'1559827260-dc66d52bef19?w=600&q=80',U+'1519046904884-53103b34b206?w=600&q=80']});

  e('newzealand','hiking',0,{duration:'יום אחד',length:'19.4 ק"מ (one-way)',difficulty:'בינוני',images:[U+'1448375240586-882707db888b?w=600&q=80',U+'1497436072909-60f360e1d4b1?w=600&q=80']});
  e('newzealand','hiking',1,{duration:'3 ימים',length:'32 ק"מ',difficulty:'בינוני',images:[U+'1469474968028-56623f02e42e?w=600&q=80']});
  e('newzealand','hiking',2,{duration:'4 ימים',length:'53 ק"מ',difficulty:'בינוני-קשה',images:[U+'1441974231531-c6227db76b6e?w=600&q=80']});

  e('newzealand','parties',0,{notes:'Queenstown — Minus 5 Ice Bar חובה. ברים עד 04:00. ספארי שלג ביום + ברים בלילה.',images:[U+'1514525253161-7a46d19cd819?w=600&q=80']});
  e('newzealand','parties',1,{notes:'Britomart — Cocktail Bars. Auckland מוקדם יותר מQueenstown. סגירה ב-03:00.',images:[U+'1508009603885-50cf7c579365?w=600&q=80']});

  e('newzealand','beaches',0,{crowded:'שקט — דולפינים',whatToFind:'Hole in the Rock — ספינה עוברת דרכו. 144 איים. דולפינים כל יום.',images:[U+'1519046904884-53103b34b206?w=600&q=80']});
  e('newzealand','beaches',1,{crowded:'גולשים שחורים',whatToFind:'Lion Rock טיפוס 30 דקות. גלים חזקים — לא לשחייה. Piha הוא 100% קינמה.',images:[U+'1544551763-46a013bb70d5?w=600&q=80']});

  e('newzealand','attractions',0,{price:'$40 כניסה + 2 שעות',link:'https://www.hobbitontours.com',images:[U+'1497436072909-60f360e1d4b1?w=600&q=80']});
  e('newzealand','attractions',1,{price:'$35 כניסה',link:'https://www.rotoruanz.com',images:[U+'1558618666-fcd25c85cd64?w=600&q=80']});
  e('newzealand','attractions',2,{price:'$55 כניסה',link:'https://www.waitomo.com',images:[U+'1474511320723-9a56873867b5?w=600&q=80']});

})();
