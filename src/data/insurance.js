export const insuranceCompanies = [
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

export const coverageTypes = [
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

export const creditCards = [
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

export const insuranceTips = [
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
