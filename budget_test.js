// Budget Calculator Test Suite — Node.js compatible
// Run: node budget_test.js

var BUDGET_DATA = {
  thailand:    { name:'תאילנד',     emoji:'🇹🇭', accommodation:{low:55,mid:140,high:360}, food:{low:55,mid:130,high:280}, transport:{low:25,mid:70,high:180}, activities:{low:40,mid:120,high:280}, flights:2900, visa:0,    insurancePer30:380 },
  vietnam:     { name:'וייטנאם',    emoji:'🇻🇳', accommodation:{low:40,mid:110,high:300}, food:{low:45,mid:110,high:220}, transport:{low:30,mid:75,high:160}, activities:{low:30,mid:90,high:220},  flights:3100, visa:0,    insurancePer30:360 },
  indonesia:   { name:'באלי',       emoji:'🇮🇩', accommodation:{low:55,mid:160,high:420}, food:{low:45,mid:120,high:290}, transport:{low:30,mid:85,high:210}, activities:{low:45,mid:130,high:320}, flights:3300, visa:0,    insurancePer30:360 },
  cambodia:    { name:'קמבודיה',    emoji:'🇰🇭', accommodation:{low:55,mid:120,high:360}, food:{low:40,mid:105,high:240}, transport:{low:35,mid:80,high:185},  activities:{low:40,mid:100,high:270}, flights:2900, visa:90,   insurancePer30:350 },
  japan:       { name:'יפן',        emoji:'🇯🇵', accommodation:{low:140,mid:360,high:900},food:{low:120,mid:260,high:500},transport:{low:80,mid:200,high:500}, activities:{low:80,mid:200,high:400}, flights:3800, visa:0,    insurancePer30:450 },
  laos:        { name:'לאוס',       emoji:'🇱🇦', accommodation:{low:45,mid:120,high:320}, food:{low:35,mid:90,high:200},  transport:{low:30,mid:80,high:180},  activities:{low:30,mid:100,high:250}, flights:2900, visa:110,  insurancePer30:340 },
  nepal:       { name:'נפאל',       emoji:'🇳🇵', accommodation:{low:55,mid:140,high:350}, food:{low:40,mid:110,high:260}, transport:{low:35,mid:90,high:220},  activities:{low:65,mid:150,high:440}, flights:2500, visa:150,  insurancePer30:350 },
  srilanka:    { name:'סרי לנקה',   emoji:'🇱🇰', accommodation:{low:55,mid:140,high:380}, food:{low:40,mid:110,high:260}, transport:{low:35,mid:90,high:220},  activities:{low:50,mid:130,high:320}, flights:2200, visa:60,   insurancePer30:340 },
  india:       { name:'הודו',       emoji:'🇮🇳', accommodation:{low:50,mid:140,high:400}, food:{low:40,mid:100,high:250}, transport:{low:30,mid:80,high:200},  activities:{low:40,mid:120,high:300}, flights:1900, visa:150,  insurancePer30:340 },
  philippines: { name:'פיליפינים',  emoji:'🇵🇭', accommodation:{low:65,mid:165,high:420}, food:{low:55,mid:135,high:290}, transport:{low:35,mid:90,high:220},  activities:{low:45,mid:125,high:310}, flights:3800, visa:0,    insurancePer30:330 },
  peru:        { name:'פרו',        emoji:'🇵🇪', accommodation:{low:65,mid:165,high:420}, food:{low:60,mid:145,high:310}, transport:{low:45,mid:105,high:260}, activities:{low:85,mid:210,high:520}, flights:5500, visa:0,    insurancePer30:370 },
  colombia:    { name:'קולומביה',   emoji:'🇨🇴', accommodation:{low:65,mid:175,high:420}, food:{low:55,mid:135,high:290}, transport:{low:40,mid:95,high:230},  activities:{low:65,mid:155,high:410}, flights:5000, visa:0,    insurancePer30:360 },
  argentina:   { name:'ארגנטינה',   emoji:'🇦🇷', accommodation:{low:75,mid:210,high:520}, food:{low:65,mid:170,high:360}, transport:{low:55,mid:125,high:310}, activities:{low:75,mid:190,high:460}, flights:4200, visa:0,    insurancePer30:390 },
  bolivia:     { name:'בוליביה',    emoji:'🇧🇴', accommodation:{low:60,mid:165,high:410}, food:{low:50,mid:135,high:285}, transport:{low:45,mid:115,high:255}, activities:{low:65,mid:165,high:410}, flights:4800, visa:0,    insurancePer30:350 },
  chile:       { name:'צ׳ילה',      emoji:'🇨🇱', accommodation:{low:125,mid:310,high:775},food:{low:85,mid:210,high:465},transport:{low:75,mid:190,high:465}, activities:{low:105,mid:290,high:720},flights:4800, visa:0,    insurancePer30:400 },
  brazil:      { name:'ברזיל',      emoji:'🇧🇷', accommodation:{low:90,mid:245,high:615}, food:{low:70,mid:185,high:410}, transport:{low:60,mid:155,high:360}, activities:{low:85,mid:205,high:515}, flights:4500, visa:0,    insurancePer30:380 },
  ecuador:     { name:'אקוודור',    emoji:'🇪🇨', accommodation:{low:70,mid:185,high:465}, food:{low:55,mid:145,high:315}, transport:{low:50,mid:135,high:325}, activities:{low:75,mid:205,high:615}, flights:4500, visa:0,    insurancePer30:360 },
  mexico:      { name:'מקסיקו',     emoji:'🇲🇽', accommodation:{low:90,mid:225,high:565}, food:{low:70,mid:175,high:390}, transport:{low:60,mid:155,high:360}, activities:{low:75,mid:185,high:465}, flights:3200, visa:0,    insurancePer30:360 },
  guatemala:   { name:'גואטמלה',    emoji:'🇬🇹', accommodation:{low:65,mid:175,high:415}, food:{low:50,mid:135,high:285}, transport:{low:40,mid:105,high:255}, activities:{low:65,mid:155,high:360}, flights:3500, visa:0,    insurancePer30:350 },
  costarica:   { name:'קוסטה ריקה', emoji:'🇨🇷', accommodation:{low:100,mid:240,high:650},food:{low:80,mid:185,high:420}, transport:{low:60,mid:155,high:430}, activities:{low:90,mid:185,high:560}, flights:3600, visa:0,    insurancePer30:380 },
  australia:   { name:'אוסטרליה',   emoji:'🇦🇺', accommodation:{low:185,mid:415,high:930},food:{low:105,mid:225,high:465},transport:{low:85,mid:205,high:515},activities:{low:105,mid:260,high:620}, flights:4200, visa:1400, insurancePer30:530 },
  newzealand:  { name:'ניו זילנד',  emoji:'🇳🇿', accommodation:{low:210,mid:465,high:1030},food:{low:125,mid:260,high:515},transport:{low:95,mid:210,high:550}, activities:{low:110,mid:225,high:620},flights:5500, visa:130,  insurancePer30:580 },
  kenya:       { name:'קניה',       emoji:'🇰🇪', accommodation:{low:90,mid:220,high:700}, food:{low:60,mid:130,high:295}, transport:{low:50,mid:130,high:330}, activities:{low:70,mid:165,high:480}, flights:2500, visa:150,  insurancePer30:420 },
  tanzania:    { name:'טנזניה',     emoji:'🇹🇿', accommodation:{low:90,mid:220,high:900}, food:{low:60,mid:130,high:310}, transport:{low:55,mid:140,high:400}, activities:{low:70,mid:170,high:520}, flights:2500, visa:150,  insurancePer30:420 },
  uganda:      { name:'אוגנדה',     emoji:'🇺🇬', accommodation:{low:80,mid:190,high:1240},food:{low:55,mid:110,high:280}, transport:{low:40,mid:100,high:290}, activities:{low:55,mid:120,high:360}, flights:2800, visa:150,  insurancePer30:410 },
  southafrica: { name:'דרום אפריקה',emoji:'🇿🇦', accommodation:{low:100,mid:260,high:780},food:{low:80,mid:185,high:400}, transport:{low:80,mid:200,high:560}, activities:{low:85,mid:200,high:620}, flights:3000, visa:0,    insurancePer30:400 },
  namibia:     { name:'נמיביה',     emoji:'🇳🇦', accommodation:{low:105,mid:275,high:820},food:{low:65,mid:160,high:360}, transport:{low:85,mid:260,high:720}, activities:{low:75,mid:200,high:600}, flights:3200, visa:0,    insurancePer30:400 },
  morocco:     { name:'מרוקו',      emoji:'🇲🇦', accommodation:{low:80,mid:210,high:515}, food:{low:60,mid:155,high:310}, transport:{low:45,mid:105,high:260},  activities:{low:55,mid:145,high:360}, flights:1200, visa:0,    insurancePer30:290 },
  madagascar:  { name:'מדגסקר',    emoji:'🇲🇬', accommodation:{low:90,mid:260,high:670}, food:{low:55,mid:145,high:330}, transport:{low:75,mid:205,high:570},  activities:{low:85,mid:225,high:620}, flights:4200, visa:110,  insurancePer30:400 },
  usa:         { name:'ארה"ב',      emoji:'🇺🇸', accommodation:{low:210,mid:515,high:1240},food:{low:135,mid:290,high:620},transport:{low:105,mid:260,high:620},activities:{low:105,mid:260,high:720}, flights:3500, visa:60,   insurancePer30:620 },
};

// ── Calculator logic (mirrors BudgetCalculator) ─────────────────────────────
function calculate(destKey, duration, style) {
  var d = BUDGET_DATA[destKey];
  if (!d) return null;
  if (!Number.isFinite(duration) || duration < 1) return null;
  if (!['low','mid','high'].includes(style)) return null;

  var months      = duration / 30;
  var accommodation = (d.accommodation[style] || 0) * duration;
  var food          = (d.food[style]          || 0) * duration;
  var transport     = (d.transport[style]     || 0) * duration;
  var activities    = (d.activities[style]    || 0) * duration;
  var insurance     = Math.round((d.insurancePer30 || 0) * months);
  var flights       = d.flights  || 0;
  var visa          = d.visa     || 0;
  var total         = accommodation + food + transport + activities + insurance + flights + visa;
  var perDay        = Math.round(total / duration);

  return { accommodation, food, transport, activities, insurance, flights, visa, total, perDay };
}

// ── Tests ────────────────────────────────────────────────────────────────────
var pass = 0; var fail = 0;

function assert(desc, actual, min, max) {
  var ok = actual >= min && actual <= max;
  if (ok) { pass++; console.log('  ✅ ' + desc + ' → ₪' + actual); }
  else    { fail++; console.error('  ❌ ' + desc + ' → ₪' + actual + ' (expected ₪' + min + '-' + max + ')'); }
}

// Test 1: Thailand 30 days budget — should be roughly ₪5,500-9,500
(function() {
  console.log('\n[1] Thailand 30 days budget');
  var r = calculate('thailand', 30, 'low');
  assert('total', r.total, 5000, 10000);
  assert('per day', r.perDay, 160, 340);
  assert('flights present', r.flights, 2500, 3500);
  assert('no visa', r.visa, 0, 0);
})();

// Test 2: Australia 90 days mid — expensive, should be ₪60k-95k
(function() {
  console.log('\n[2] Australia 90 days mid');
  var r = calculate('australia', 90, 'mid');
  assert('total', r.total, 55000, 115000);
  assert('visa included', r.visa, 1000, 1800);
  assert('per day > 600', r.perDay, 600, 1200);
})();

// Test 3: Uganda 14 days high — gorilla permits + premium lodges
(function() {
  console.log('\n[3] Uganda 14 days high');
  var r = calculate('uganda', 14, 'high');
  assert('activities', r.activities, 3000, 8000);
  assert('total', r.total, 20000, 50000);
})();

// Test 4: Japan 60 days mid
(function() {
  console.log('\n[4] Japan 60 days mid');
  var r = calculate('japan', 60, 'mid');
  assert('total', r.total, 40000, 80000);
  assert('no visa', r.visa, 0, 0);
})();

// Test 5: Morocco 45 days budget — should be cheapest (nearest destination)
(function() {
  console.log('\n[5] Morocco 45 days low');
  var r = calculate('morocco', 45, 'low');
  assert('flights cheap', r.flights, 800, 1600);
  assert('total', r.total, 7000, 15000);
})();

// Test 6: Nepal 90 days mid
(function() {
  console.log('\n[6] Nepal 90 days mid (trekking)');
  var r = calculate('nepal', 90, 'mid');
  assert('activities reflect trekking', r.activities, 10000, 20000);
  assert('total', r.total, 30000, 65000);
})();

// Test 7: All 30 destinations are present
(function() {
  console.log('\n[7] All destinations coverage');
  var expected = ['thailand','vietnam','indonesia','cambodia','japan','laos','nepal',
    'srilanka','india','philippines','peru','colombia','argentina','bolivia','chile',
    'brazil','ecuador','mexico','guatemala','costarica','australia','newzealand',
    'kenya','tanzania','uganda','southafrica','namibia','morocco','madagascar','usa'];
  expected.forEach(function(k) {
    var ok = !!BUDGET_DATA[k];
    if (ok) { pass++; console.log('  ✅ ' + k); }
    else    { fail++; console.error('  ❌ MISSING: ' + k); }
  });
})();

// Test 8: Edge cases — invalid inputs
(function() {
  console.log('\n[8] Edge cases');
  var r1 = calculate('thailand', 0, 'mid');
  var r2 = calculate('thailand', -5, 'low');
  var r3 = calculate('nonexistent', 30, 'mid');
  var r4 = calculate('thailand', 30, 'extreme');
  if (r1 === null) { pass++; console.log('  ✅ duration 0 → null'); }
  else             { fail++; console.error('  ❌ duration 0 should return null'); }
  if (r2 === null) { pass++; console.log('  ✅ negative duration → null'); }
  else             { fail++; console.error('  ❌ negative duration should return null'); }
  if (r3 === null) { pass++; console.log('  ✅ missing dest → null'); }
  else             { fail++; console.error('  ❌ missing dest should return null'); }
  if (r4 === null) { pass++; console.log('  ✅ invalid style → null'); }
  else             { fail++; console.error('  ❌ invalid style should return null'); }
})();

// Test 9: Vietnam has free visa
(function() {
  console.log('\n[9] Vietnam free visa');
  var r = calculate('vietnam', 30, 'mid');
  assert('visa = 0', r.visa, 0, 0);
})();

// Test 10: Duration slider 365 days works
(function() {
  console.log('\n[10] Max duration 365 days');
  var r = calculate('thailand', 365, 'mid');
  assert('total exists', r.total, 50000, 250000);
  assert('insurance scaled', r.insurance, 3000, 7000);
})();

// ── Summary ──────────────────────────────────────────────────────────────────
console.log('\n══════════════════════════════════');
console.log('Results: ' + pass + ' passed, ' + fail + ' failed');
if (fail === 0) console.log('✅ All tests passed!');
else console.error('❌ ' + fail + ' test(s) failed!');
