// Budget Calculator Test Suite — Node.js compatible
// Run: node budget_test.js

var BUDGET_DATA = {
  thailand:    { name:'תאילנד',     emoji:'🇹🇭', accommodation:{low:42, mid:105,high:270},  food:{low:42, mid:90, high:185},  transport:{low:21, mid:55, high:130},  activities:{low:33, mid:80, high:195},   flights:2900, visa:0,    insurancePer30:355 },
  vietnam:     { name:'וייטנאם',    emoji:'🇻🇳', accommodation:{low:32, mid:80, high:200},  food:{low:33, mid:70, high:150},  transport:{low:16, mid:45, high:105},  activities:{low:27, mid:60, high:165},   flights:3100, visa:0,    insurancePer30:335 },
  indonesia:   { name:'באלי',       emoji:'🇮🇩', accommodation:{low:48, mid:110,high:300},  food:{low:40, mid:85, high:195},  transport:{low:28, mid:65, high:150},  activities:{low:36, mid:85, high:170},   flights:3300, visa:130,  insurancePer30:340 },
  cambodia:    { name:'קמבודיה',    emoji:'🇰🇭', accommodation:{low:40, mid:85, high:255},  food:{low:35, mid:72, high:162},  transport:{low:25, mid:55, high:125},  activities:{low:30, mid:63, high:178},   flights:2900, visa:135,  insurancePer30:330 },
  japan:       { name:'יפן',        emoji:'🇯🇵', accommodation:{low:110,mid:240,high:580},  food:{low:88, mid:158,high:285},  transport:{low:65, mid:128,high:290},  activities:{low:47, mid:114,high:260},   flights:3800, visa:0,    insurancePer30:425 },
  laos:        { name:'לאוס',       emoji:'🇱🇦', accommodation:{low:38, mid:80, high:220},  food:{low:30, mid:62, high:135},  transport:{low:25, mid:55, high:120},  activities:{low:25, mid:68, high:165},   flights:2900, visa:110,  insurancePer30:320 },
  nepal:       { name:'נפאל',       emoji:'🇳🇵', accommodation:{low:50, mid:100,high:245},  food:{low:37, mid:78, high:182},  transport:{low:30, mid:65, high:155},  activities:{low:51, mid:112,high:318},   flights:2500, visa:150,  insurancePer30:340 },
  srilanka:    { name:'סרי לנקה',   emoji:'🇱🇰', accommodation:{low:50, mid:100,high:265},  food:{low:36, mid:78, high:182},  transport:{low:30, mid:62, high:155},  activities:{low:42, mid:90, high:218},   flights:2200, visa:60,   insurancePer30:330 },
  india:       { name:'הודו',       emoji:'🇮🇳', accommodation:{low:42, mid:96, high:276},  food:{low:36, mid:70, high:172},  transport:{low:26, mid:57, high:140},  activities:{low:36, mid:82, high:187},   flights:1900, visa:150,  insurancePer30:330 },
  philippines: { name:'פיליפינים',  emoji:'🇵🇭', accommodation:{low:55, mid:113,high:295},  food:{low:48, mid:93, high:200},  transport:{low:32, mid:62, high:155},  activities:{low:40, mid:87, high:195},   flights:3800, visa:0,    insurancePer30:325 },
  peru:        { name:'פרו',        emoji:'🇵🇪', accommodation:{low:62, mid:118,high:295},  food:{low:55, mid:107,high:220},  transport:{low:40, mid:75, high:180},  activities:{low:63, mid:135,high:355},   flights:5500, visa:0,    insurancePer30:360 },
  colombia:    { name:'קולומביה',   emoji:'🇨🇴', accommodation:{low:58, mid:120,high:290},  food:{low:50, mid:96, high:205},  transport:{low:37, mid:67, high:160},  activities:{low:50, mid:107,high:290},   flights:5000, visa:0,    insurancePer30:350 },
  argentina:   { name:'ארגנטינה',   emoji:'🇦🇷', accommodation:{low:72, mid:148,high:365},  food:{low:60, mid:122,high:255},  transport:{low:50, mid:88, high:220},  activities:{low:63, mid:132,high:310},   flights:4200, visa:0,    insurancePer30:385 },
  bolivia:     { name:'בוליביה',    emoji:'🇧🇴', accommodation:{low:55, mid:118,high:288},  food:{low:45, mid:97, high:202},  transport:{low:40, mid:82, high:180},  activities:{low:45, mid:98, high:280},   flights:4800, visa:0,    insurancePer30:340 },
  chile:       { name:'צ׳ילה',      emoji:'🇨🇱', accommodation:{low:112,mid:218,high:545},  food:{low:78, mid:150,high:335},  transport:{low:70, mid:135,high:335},  activities:{low:85, mid:192,high:465},   flights:4800, visa:0,    insurancePer30:390 },
  brazil:      { name:'ברזיל',      emoji:'🇧🇷', accommodation:{low:82, mid:170,high:430},  food:{low:63, mid:132,high:290},  transport:{low:53, mid:110,high:255},  activities:{low:72, mid:133,high:345},   flights:4500, visa:0,    insurancePer30:370 },
  ecuador:     { name:'אקוודור',    emoji:'🇪🇨', accommodation:{low:62, mid:130,high:328},  food:{low:50, mid:104,high:222},  transport:{low:44, mid:96, high:230},  activities:{low:59, mid:130,high:395},   flights:4500, visa:0,    insurancePer30:350 },
  mexico:      { name:'מקסיקו',     emoji:'🇲🇽', accommodation:{low:80, mid:158,high:398},  food:{low:63, mid:125,high:278},  transport:{low:52, mid:108,high:255},  activities:{low:60, mid:119,high:299},   flights:3200, visa:0,    insurancePer30:350 },
  guatemala:   { name:'גואטמלה',    emoji:'🇬🇹', accommodation:{low:57, mid:120,high:285},  food:{low:45, mid:95, high:200},  transport:{low:35, mid:72, high:175},  activities:{low:48, mid:98, high:245},   flights:3500, visa:0,    insurancePer30:340 },
  costarica:   { name:'קוסטה ריקה', emoji:'🇨🇷', accommodation:{low:88, mid:165,high:455},  food:{low:72, mid:130,high:295},  transport:{low:53, mid:108,high:305},  activities:{low:72, mid:127,high:365},   flights:3600, visa:0,    insurancePer30:370 },
  australia:   { name:'אוסטרליה',   emoji:'🇦🇺', accommodation:{low:165,mid:283,high:585},  food:{low:93, mid:195,high:368},  transport:{low:76, mid:178,high:392},  activities:{low:101,mid:239,high:475},   flights:4200, visa:1400, insurancePer30:500 },
  newzealand:  { name:'ניו זילנד',  emoji:'🇳🇿', accommodation:{low:188,mid:325,high:720},  food:{low:112,mid:220,high:455},  transport:{low:85, mid:185,high:480},  activities:{low:95, mid:215,high:495},   flights:5500, visa:130,  insurancePer30:555 },
  kenya:       { name:'קניה',       emoji:'🇰🇪', accommodation:{low:80, mid:155,high:490},  food:{low:54, mid:92, high:208},  transport:{low:46, mid:90, high:230},  activities:{low:65, mid:193,high:352},   flights:2500, visa:150,  insurancePer30:405 },
  tanzania:    { name:'טנזניה',     emoji:'🇹🇿', accommodation:{low:82, mid:158,high:635},  food:{low:55, mid:94, high:220},  transport:{low:50, mid:100,high:280},  activities:{low:68, mid:193,high:335},   flights:2500, visa:150,  insurancePer30:405 },
  uganda:      { name:'אוגנדה',     emoji:'🇺🇬', accommodation:{low:72, mid:132,high:880},  food:{low:50, mid:78, high:198},  transport:{low:37, mid:70, high:205},  activities:{low:46, mid:160,high:255},   flights:2800, visa:150,  insurancePer30:400 },
  southafrica: { name:'דרום אפריקה',emoji:'🇿🇦', accommodation:{low:93, mid:183,high:550},  food:{low:73, mid:130,high:282},  transport:{low:72, mid:143,high:398},  activities:{low:72, mid:184,high:390},   flights:3000, visa:0,    insurancePer30:390 },
  namibia:     { name:'נמיביה',     emoji:'🇳🇦', accommodation:{low:95, mid:193,high:640},  food:{low:59, mid:113,high:255},  transport:{low:78, mid:185,high:515},  activities:{low:63, mid:144,high:270},   flights:3200, visa:0,    insurancePer30:390 },
  morocco:     { name:'מרוקו',      emoji:'🇲🇦', accommodation:{low:52, mid:128,high:320},  food:{low:48, mid:98, high:200},  transport:{low:35, mid:65, high:162},  activities:{low:45, mid:94, high:218},   flights:1200, visa:0,    insurancePer30:280 },
  madagascar:  { name:'מדגסקר',    emoji:'🇲🇬', accommodation:{low:80, mid:180,high:472},  food:{low:50, mid:102,high:232},  transport:{low:68, mid:143,high:400},  activities:{low:67, mid:145,high:386},   flights:4200, visa:110,  insurancePer30:390 },
  usa:         { name:'ארה"ב',      emoji:'🇺🇸', accommodation:{low:188,mid:358,high:858},  food:{low:122,mid:202,high:435},  transport:{low:94, mid:178,high:435},  activities:{low:86, mid:182,high:472},   flights:3500, visa:60,   insurancePer30:595 },
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
