// Budget Calculator Test Suite — Node.js compatible
// Run: node budget_test.js

var BUDGET_DATA = {
  thailand:    { name:'תאילנד',     emoji:'🇹🇭', accommodation:{low:50, mid:100,high:255},  food:{low:50, mid:88, high:195},  transport:{low:22, mid:52, high:128},  activities:{low:37, mid:85, high:200},   flights:2900, visa:0,    insurancePer30:355 },
  vietnam:     { name:'וייטנאם',    emoji:'🇻🇳', accommodation:{low:38, mid:78, high:213},  food:{low:40, mid:78, high:157},  transport:{low:22, mid:52, high:112},  activities:{low:27, mid:62, high:157},   flights:3100, visa:0,    insurancePer30:335 },
  indonesia:   { name:'באלי',       emoji:'🇮🇩', accommodation:{low:53, mid:113,high:298},  food:{low:42, mid:83, high:203},  transport:{low:28, mid:62, high:148},  activities:{low:42, mid:92, high:228},   flights:3300, visa:130,  insurancePer30:340 },
  cambodia:    { name:'קמבודיה',    emoji:'🇰🇭', accommodation:{low:48, mid:83, high:253},  food:{low:36, mid:74, high:170},  transport:{low:30, mid:57, high:130},  activities:{low:36, mid:71, high:192},   flights:2900, visa:135,  insurancePer30:330 },
  japan:       { name:'יפן',        emoji:'🇯🇵', accommodation:{low:110,mid:225,high:545},  food:{low:88, mid:155,high:295},  transport:{low:63, mid:127,high:265},  activities:{low:58, mid:108,high:245},   flights:3800, visa:0,    insurancePer30:425 },
  laos:        { name:'לאוס',       emoji:'🇱🇦', accommodation:{low:42, mid:83, high:225},  food:{low:32, mid:63, high:140},  transport:{low:27, mid:57, high:126},  activities:{low:27, mid:71, high:177},   flights:2900, visa:110,  insurancePer30:320 },
  nepal:       { name:'נפאל',       emoji:'🇳🇵', accommodation:{low:52, mid:100,high:248},  food:{low:37, mid:77, high:184},  transport:{low:32, mid:63, high:156},  activities:{low:60, mid:115,high:312},   flights:2500, visa:150,  insurancePer30:340 },
  srilanka:    { name:'סרי לנקה',   emoji:'🇱🇰', accommodation:{low:52, mid:100,high:270},  food:{low:37, mid:77, high:184},  transport:{low:32, mid:63, high:156},  activities:{low:46, mid:92, high:227},   flights:2200, visa:60,   insurancePer30:330 },
  india:       { name:'הודו',       emoji:'🇮🇳', accommodation:{low:46, mid:100,high:284},  food:{low:37, mid:71, high:177},  transport:{low:27, mid:57, high:142},  activities:{low:37, mid:85, high:213},   flights:1900, visa:150,  insurancePer30:330 },
  philippines: { name:'פיליפינים',  emoji:'🇵🇭', accommodation:{low:60, mid:117,high:298},  food:{low:50, mid:96, high:206},  transport:{low:32, mid:63, high:156},  activities:{low:42, mid:88, high:220},   flights:3800, visa:0,    insurancePer30:325 },
  peru:        { name:'פרו',        emoji:'🇵🇪', accommodation:{low:60, mid:117,high:298},  food:{low:56, mid:103,high:220},  transport:{low:42, mid:74, high:184},  activities:{low:78, mid:149,high:369},   flights:5500, visa:0,    insurancePer30:360 },
  colombia:    { name:'קולומביה',   emoji:'🇨🇴', accommodation:{low:60, mid:124,high:298},  food:{low:50, mid:96, high:206},  transport:{low:37, mid:67, high:163},  activities:{low:60, mid:110,high:291},   flights:5000, visa:0,    insurancePer30:350 },
  argentina:   { name:'ארגנטינה',   emoji:'🇦🇷', accommodation:{low:70, mid:149,high:369},  food:{low:60, mid:121,high:255},  transport:{low:50, mid:88, high:220},  activities:{low:70, mid:135,high:326},   flights:4200, visa:0,    insurancePer30:385 },
  bolivia:     { name:'בוליביה',    emoji:'🇧🇴', accommodation:{low:55, mid:117,high:291},  food:{low:46, mid:96, high:202},  transport:{low:42, mid:81, high:181},  activities:{low:60, mid:117,high:291},   flights:4800, visa:0,    insurancePer30:340 },
  chile:       { name:'צ׳ילה',      emoji:'🇨🇱', accommodation:{low:116,mid:220,high:550},  food:{low:78, mid:149,high:330},  transport:{low:70, mid:135,high:330},  activities:{low:96, mid:206,high:511},   flights:4800, visa:0,    insurancePer30:390 },
  brazil:      { name:'ברזיל',      emoji:'🇧🇷', accommodation:{low:83, mid:174,high:436},  food:{low:64, mid:131,high:291},  transport:{low:55, mid:110,high:255},  activities:{low:78, mid:145,high:365},   flights:4500, visa:0,    insurancePer30:370 },
  ecuador:     { name:'אקוודור',    emoji:'🇪🇨', accommodation:{low:64, mid:131,high:330},  food:{low:50, mid:103,high:224},  transport:{low:46, mid:96, high:231},  activities:{low:70, mid:145,high:436},   flights:4500, visa:0,    insurancePer30:350 },
  mexico:      { name:'מקסיקו',     emoji:'🇲🇽', accommodation:{low:83, mid:160,high:401},  food:{low:64, mid:124,high:277},  transport:{low:55, mid:110,high:255},  activities:{low:70, mid:131,high:330},   flights:3200, visa:0,    insurancePer30:350 },
  guatemala:   { name:'גואטמלה',    emoji:'🇬🇹', accommodation:{low:60, mid:124,high:295},  food:{low:46, mid:96, high:202},  transport:{low:37, mid:74, high:181},  activities:{low:60, mid:110,high:255},   flights:3500, visa:0,    insurancePer30:340 },
  costarica:   { name:'קוסטה ריקה', emoji:'🇨🇷', accommodation:{low:92, mid:170,high:461},  food:{low:74, mid:131,high:298},  transport:{low:55, mid:110,high:305},  activities:{low:83, mid:131,high:397},   flights:3600, visa:0,    insurancePer30:370 },
  australia:   { name:'אוסטרליה',   emoji:'🇦🇺', accommodation:{low:170,mid:295,high:600},  food:{low:96, mid:200,high:370},  transport:{low:78, mid:183,high:400},  activities:{low:96, mid:231,high:500},   flights:4200, visa:1400, insurancePer30:500 },
  newzealand:  { name:'ניו זילנד',  emoji:'🇳🇿', accommodation:{low:192,mid:330,high:730},  food:{low:114,mid:231,high:460},  transport:{low:87, mid:188,high:491},  activities:{low:100,mid:200,high:554},   flights:5500, visa:130,  insurancePer30:555 },
  kenya:       { name:'קניה',       emoji:'🇰🇪', accommodation:{low:83, mid:156,high:497},  food:{low:55, mid:92, high:209},  transport:{low:46, mid:92, high:234},  activities:{low:64, mid:117,high:341},   flights:2500, visa:150,  insurancePer30:405 },
  tanzania:    { name:'טנזניה',     emoji:'🇹🇿', accommodation:{low:83, mid:156,high:638},  food:{low:55, mid:92, high:220},  transport:{low:50, mid:99, high:284},  activities:{low:64, mid:121,high:369},   flights:2500, visa:150,  insurancePer30:405 },
  uganda:      { name:'אוגנדה',     emoji:'🇺🇬', accommodation:{low:74, mid:135,high:880},  food:{low:50, mid:77, high:199},  transport:{low:37, mid:71, high:206},  activities:{low:50, mid:85, high:255},   flights:2800, visa:150,  insurancePer30:400 },
  southafrica: { name:'דרום אפריקה',emoji:'🇿🇦', accommodation:{low:92, mid:184,high:554},  food:{low:74, mid:131,high:284},  transport:{low:74, mid:142,high:397},  activities:{low:78, mid:142,high:440},   flights:3000, visa:0,    insurancePer30:390 },
  namibia:     { name:'נמיביה',     emoji:'🇳🇦', accommodation:{low:96, mid:195,high:582},  food:{low:60, mid:113,high:255},  transport:{low:78, mid:184,high:511},  activities:{low:70, mid:142,high:426},   flights:3200, visa:0,    insurancePer30:390 },
  morocco:     { name:'מרוקו',      emoji:'🇲🇦', accommodation:{low:60, mid:135,high:330},  food:{low:50, mid:100,high:200},  transport:{low:38, mid:68, high:170},  activities:{low:46, mid:96, high:230},   flights:1200, visa:0,    insurancePer30:280 },
  madagascar:  { name:'מדגסקר',    emoji:'🇲🇬', accommodation:{low:83, mid:184,high:476},  food:{low:50, mid:103,high:234},  transport:{low:70, mid:145,high:404},  activities:{low:78, mid:160,high:440},   flights:4200, visa:110,  insurancePer30:390 },
  usa:         { name:'ארה"ב',      emoji:'🇺🇸', accommodation:{low:190,mid:365,high:880},  food:{low:124,mid:206,high:440},  transport:{low:96, mid:184,high:440},  activities:{low:96, mid:184,high:511},   flights:3500, visa:60,   insurancePer30:595 },
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
