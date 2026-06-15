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

  // נורמליזציה של flights (מספר בודד / אובייקט {low,mid,high})
  function normFlights(f) {
    if (f && typeof f === 'object') return f.mid || f.low || 3000;
    return f || 3000;
  }

  // מיזוג נתוני תקציב
  function mergeBudget(tempBudget) {
    if (typeof tempBudget === 'undefined') return;
    Object.keys(tempBudget).forEach(function(k) {
      var dest = destinations[k];
      var b = tempBudget[k];
      BUDGET_DATA[k] = {
        name:           dest ? dest.name  : k,
        emoji:          dest ? dest.emoji : '',
        accommodation:  b.accommodation,
        food:           b.food,
        transport:      b.transport,
        activities:     b.activities,
        flights:        normFlights(b.flights),
        visa:           b.visa || 0,
        insurancePer30: b.insurancePer30 || 350,
        note:           b.note || ''
      };
    });
  }

  if (typeof tempBudget1 !== 'undefined') mergeBudget(tempBudget1);
  if (typeof tempBudget2 !== 'undefined') mergeBudget(tempBudget2);
  if (typeof tempBudget3 !== 'undefined') mergeBudget(tempBudget3);

  // הוספת אזור "מרכז אמריקה" לרשימת האזורים
  if (typeof regions !== 'undefined') {
    if (!regions.some(function(r) { return r.id === 'centralamerica'; })) {
      regions.push({ id: 'centralamerica', name: 'מרכז אמריקה', emoji: '🌴', color: 'from-green-600 to-emerald-500' });
    }
  }
})();
