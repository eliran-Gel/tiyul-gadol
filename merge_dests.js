// merge_dests.js — מאחד את כל היעדים החדשים לאחר טעינת data.js
(function() {
  // תיקון regions בטמפ' 1
  if (typeof tempDests1 !== 'undefined') {
    if (tempDests1.brazil)  tempDests1.brazil.region  = 'southamerica';
    if (tempDests1.bolivia) tempDests1.bolivia.region = 'southamerica';
    if (tempDests1.mexico)  tempDests1.mexico.region  = 'northamerica';
    Object.assign(destinations, tempDests1);
  }
  if (typeof tempDests2 !== 'undefined') {
    Object.assign(destinations, tempDests2);
  }
  if (typeof tempDests3 !== 'undefined') {
    Object.assign(destinations, tempDests3);
  }

  // עדכון destinationList ו-aliases
  destinationList = Object.values(destinations);
  DESTINATIONS     = destinations;
  DESTINATION_LIST = destinationList;

  // הוספת אזור "מרכז אמריקה" לרשימת האזורים
  if (typeof regions !== 'undefined') {
    if (!regions.some(function(r) { return r.id === 'centralamerica'; })) {
      regions.push({ id: 'centralamerica', name: 'מרכז אמריקה', emoji: '🌴', color: 'from-green-600 to-emerald-500' });
    }
  }
})();
