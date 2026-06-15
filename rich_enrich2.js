(function() {
  var U = 'https://images.unsplash.com/photo-';
  var S = '?w=600&q=80';
  function set(d, c, i, ids) {
    if (!destinations || !destinations[d]) return;
    var cats = destinations[d].categories;
    if (!cats) return;
    var cat = cats[c] || (c === 'mustdo' ? cats.mustDo : null);
    if (!cat || !cat.items || !cat.items[i]) return;
    var urls = ids.map(function(id) { return U + id + S; });
    cat.items[i].images = urls;
    if (urls[0]) cat.items[i].image = urls[0];
  }

  // ──────────── THAILAND ────────────
  // scenery
  set('thailand','scenery',0,['1506665531195-3566af2b4dfa','1519915247718-1703f9c6bb15','1673627114937-ca220aad736d']); // Koh Phi Phi
  set('thailand','scenery',1,['1675348081090-f2ec9f02eca7','1648709598400-2df2adaaa31f','1648709605923-4a8fa7f0a834']); // Khao Sok
  set('thailand','scenery',2,['1599576838688-8a6c11263108','1578157695179-d7b7ddeb2f53','1682826556362-2c06b7ac75c5']); // Chiang Mai
  set('thailand','scenery',3,['1686056561795-f071f46b377a','1668882593887-2f914ff46bbc','1668882596192-b1dfc2ff63d6']); // Koh Samui
  // hiking
  set('thailand','hiking',0,['1699156334097-5a329e05b4c4','1713361060470-50510cc39729','1721038469648-d95ebc57aa36']); // Doi Inthanon
  set('thailand','hiking',1,['1706574458327-73fc8c5fb1a1','1748966006818-de095fe1fbd7','1748966006345-ea3c0ca397e9']); // Khao Yai
  set('thailand','hiking',2,['1702148056616-45b0d75c3cc7','1539025715334-dfd6ea122914','1741336313969-1457e7a41d8e']); // Khao Luang
  // parties
  set('thailand','parties',0,['1560359614-870d1a7ea91d','1746870705408-b771dc74062e','1633419016402-5ae1b67bf219']); // Full Moon Party
  set('thailand','parties',1,['1508009603885-50cf7c579365','1507358522600-9f71e620c44e','1584293938526-76d5ceac45f1']); // Khao San Road
  set('thailand','parties',2,['1625492206717-61c584a8b11e','1644902617098-45abe72a7445','1625276413000-12c38e7b7d0a']); // Pattaya
  // beaches
  set('thailand','beaches',0,['1702148056616-45b0d75c3cc7','1534080775144-c706f4e9e30a','1539025715334-dfd6ea122914']); // Koh Lanta
  set('thailand','beaches',1,['1676648433601-a8f699da0b55','1655921779907-6985a3c4a795','1534008897995-27a23e859048']); // Maya Bay
  set('thailand','beaches',2,['1537956965359-7573183d1f57','1575834678162-9fd77151f40b','1537956900246-de817d5af91d']); // Koh Tao
  // attractions
  set('thailand','attractions',0,['1586098311577-520120ba3df3','1678915554115-a5e2de853191','1690299490301-2eb3865bee58']); // Grand Palace
  set('thailand','attractions',1,['1508009603885-50cf7c579365','1703508202823-9b3648ca4f18','1558655822-54f2380fadbb']);   // Chatuchak
  set('thailand','attractions',2,['1680779487034-ca13948b2891','1519108494795-0028a391bf4c','1474511320723-9a56873867b5']); // Elephant Nature Park

  // ──────────── VIETNAM ────────────
  // scenery
  set('vietnam','scenery',0,['1643029891412-92f9a81a8c16','1561461221-959c3f16234b','1573270689103-d7a4e42b609a']); // Ha Long Bay
  set('vietnam','scenery',1,['1691927644510-e8cc4a2a31ee','1574614366831-900f959788c9','1698744822195-e461f814a6a1']); // Hoi An
  set('vietnam','scenery',2,['1609412058473-c199497c3c5d','1604325099517-d9ff3c837c3c','1516484681091-7d83961805f4']); // Sapa
  set('vietnam','scenery',3,['1557750255-c76072a7aad1','1431975071466-2c609dac5956','1504805526346-8d03d1ca73de']); // Mekong
  // hiking
  set('vietnam','hiking',0,['1609412058473-c199497c3c5d','1665905905591-fb66b0496481','1666160416071-f760a7af9ea6']); // Sapa trekking
  set('vietnam','hiking',1,['1557750255-c76072a7aad1','1573270689103-d7a4e42b609a','1643029891412-92f9a81a8c16']);   // Phong Nha
  set('vietnam','hiking',2,['1516484681091-7d83961805f4','1604325099517-d9ff3c837c3c','1665905905591-fb66b0496481']); // Bach Ma
  // parties
  set('vietnam','parties',0,['1691927644510-e8cc4a2a31ee','1574614366831-900f959788c9','1590119329604-0c0caab2a4e6']); // Hoi An lanterns
  set('vietnam','parties',1,['1643029891412-92f9a81a8c16','1431975071466-2c609dac5956','1557750255-c76072a7aad1']);    // Hanoi
  set('vietnam','parties',2,['1573270689103-d7a4e42b609a','1609412058473-c199497c3c5d','1706433164183-f88522c49600']); // Hanoi Old Quarter
  // beaches
  set('vietnam','beaches',0,['1691927644510-e8cc4a2a31ee','1574614366831-900f959788c9','1643029891412-92f9a81a8c16']); // Phu Quoc
  set('vietnam','beaches',1,['1665905905591-fb66b0496481','1666160416071-f760a7af9ea6','1516484681091-7d83961805f4']); // Mui Ne
  set('vietnam','beaches',2,['1698744822195-e461f814a6a1','1590119329604-0c0caab2a4e6','1706433164183-f88522c49600']); // Nha Trang
  // attractions
  set('vietnam','attractions',0,['1557750255-c76072a7aad1','1431975071466-2c609dac5956','1504805526346-8d03d1ca73de']); // Cu Chi
  set('vietnam','attractions',1,['1691927644510-e8cc4a2a31ee','1574614366831-900f959788c9','1698744822195-e461f814a6a1']); // Hoi An old town
  set('vietnam','attractions',2,['1643029891412-92f9a81a8c16','1573270689103-d7a4e42b609a','1561461221-959c3f16234b']); // Ha Long cruise

  // ──────────── INDONESIA ────────────
  // scenery
  set('indonesia','scenery',0,['1555400038-63f5ba517a47','1715755455989-76413081ad10','1628697723581-fd4ec5c38ab0']); // Bali Tegalalang
  set('indonesia','scenery',1,['1505993597083-3bd19fb75e57','1597553716923-45474a48fbe4','1534227749049-06c3ed80963c']); // Mount Bromo
  set('indonesia','scenery',2,['1518043610038-064362b44076','1681476193060-ebf1683bb56b','1633820313053-fa030b13ef94']); // Lombok
  set('indonesia','scenery',3,['1555400038-63f5ba517a47','1681476193060-ebf1683bb56b','1628697723581-fd4ec5c38ab0']); // Komodo
  // hiking
  set('indonesia','hiking',0,['1505993597083-3bd19fb75e57','1518043610038-064362b44076','1534227749049-06c3ed80963c']); // Rinjani
  set('indonesia','hiking',1,['1597553716923-45474a48fbe4','1505993597083-3bd19fb75e57','1723407877285-584e2d0053ab']); // Ijen
  set('indonesia','hiking',2,['1555400038-63f5ba517a47','1628697723581-fd4ec5c38ab0','1715755455989-76413081ad10']); // Kintamani
  // parties
  set('indonesia','parties',0,['1633820313053-fa030b13ef94','1555400038-a088c772c8cd','1681476193060-ebf1683bb56b']); // Bali Seminyak
  set('indonesia','parties',1,['1715755455989-76413081ad10','1555400038-63f5ba517a47','1628697723581-fd4ec5c38ab0']); // Gili Islands
  set('indonesia','parties',2,['1555400038-a088c772c8cd','1633820313053-fa030b13ef94','1513415756790-2ac1db1297d0']); // Kuta
  // beaches
  set('indonesia','beaches',0,['1555400038-63f5ba517a47','1715755455989-76413081ad10','1628697723581-fd4ec5c38ab0']); // Nusa Penida
  set('indonesia','beaches',1,['1513415756790-2ac1db1297d0','1628697723581-fd4ec5c38ab0','1555400038-a088c772c8cd']); // Gili Air
  set('indonesia','beaches',2,['1633820313053-fa030b13ef94','1681476193060-ebf1683bb56b','1555400038-63f5ba517a47']); // Kuta Bali
  // attractions
  set('indonesia','attractions',0,['1681476193060-ebf1683bb56b','1555400038-63f5ba517a47','1715755455989-76413081ad10']); // Tanah Lot
  set('indonesia','attractions',1,['1628697723581-fd4ec5c38ab0','1633820313053-fa030b13ef94','1513415756790-2ac1db1297d0']); // Ubud
  set('indonesia','attractions',2,['1505993597083-3bd19fb75e57','1534227749049-06c3ed80963c','1518043610038-064362b44076']); // Borobudur

  // ──────────── PERU ────────────
  // scenery
  set('peru','scenery',0,['1526392060635-9d6019884377','1587595431973-160d0d94add1','1580619305218-8423a7ef79b4']); // Machu Picchu
  set('peru','scenery',1,['1660840641127-6d806e681cac','1660840628054-1cf3ff4df88f','1660840680124-f80963eb9d6e']); // Rainbow Mountain
  set('peru','scenery',2,['1461681922067-669418071e5c','1590835192370-3941b97e93fd','1660840641127-6d806e681cac']); // Colca Canyon
  set('peru','scenery',3,['1587595431973-160d0d94add1','1526392060635-9d6019884377','1461681922067-669418071e5c']); // Lake Titicaca
  // hiking
  set('peru','hiking',0,['1590835192370-3941b97e93fd','1660840641127-6d806e681cac','1660840628054-1cf3ff4df88f']); // Inca Trail
  set('peru','hiking',1,['1660840680124-f80963eb9d6e','1660966237305-25bcaba9f632','1691215503751-ee0e07da5c66']);  // Salkantay
  set('peru','hiking',2,['1631554240706-ab68578bc6ac','1660966237304-221f59104c14','1526392060635-9d6019884377']); // Choquequirao
  // parties
  set('peru','parties',0,['1526392060635-9d6019884377','1587595431973-160d0d94add1','1580619305218-8423a7ef79b4']); // Lima Miraflores
  set('peru','parties',1,['1660840641127-6d806e681cac','1590835192370-3941b97e93fd','1461681922067-669418071e5c']); // Cusco
  set('peru','parties',2,['1660840628054-1cf3ff4df88f','1660840680124-f80963eb9d6e','1587595431973-160d0d94add1']); // Barranco
  // beaches
  set('peru','beaches',0,['1660966237305-25bcaba9f632','1631554240706-ab68578bc6ac','1660966237304-221f59104c14']); // Mancora
  set('peru','beaches',1,['1660966237304-221f59104c14','1660966237305-25bcaba9f632','1691215503751-ee0e07da5c66']); // Paracas
  // attractions
  set('peru','attractions',0,['1526392060635-9d6019884377','1587595431973-160d0d94add1','1580619305218-8423a7ef79b4']); // Machu Picchu
  set('peru','attractions',1,['1580619305218-8423a7ef79b4','1660840680124-f80963eb9d6e','1461681922067-669418071e5c']); // Nazca
  set('peru','attractions',2,['1461681922067-669418071e5c','1660840641127-6d806e681cac','1590835192370-3941b97e93fd']); // Titicaca

  // ──────────── COLOMBIA ────────────
  // scenery
  set('colombia','scenery',0,['1583531352515-8884af319dc1','1536308037887-165852797016','1714686495394-73e2bb1bbd39']); // Cartagena
  set('colombia','scenery',1,['1714686574932-5bb429ed70b3','1625398244649-abc29446b6c6','1583531352515-8884af319dc1']); // Coffee Region
  set('colombia','scenery',2,['1590598016835-83cf3357ebc5','1714686495394-73e2bb1bbd39','1536308037887-165852797016']); // Medellin
  set('colombia','scenery',3,['1714686449223-b8e88d18d391','1689159132383-89487760533c','1625398244649-abc29446b6c6']); // Tayrona
  // hiking
  set('colombia','hiking',0,['1583531352515-8884af319dc1','1714686574932-5bb429ed70b3','1536308037887-165852797016']); // Ciudad Perdida
  set('colombia','hiking',1,['1714686449223-b8e88d18d391','1625398244649-abc29446b6c6','1689159132383-89487760533c']); // Cocuy
  set('colombia','hiking',2,['1689159132383-89487760533c','1625398244649-abc29446b6c6','1714686449223-b8e88d18d391']); // Tayrona NP
  // parties
  set('colombia','parties',0,['1590598016835-83cf3357ebc5','1714686495394-73e2bb1bbd39','1536308037887-165852797016']); // Medellin nightlife
  set('colombia','parties',1,['1714686449223-b8e88d18d391','1583531352515-8884af319dc1','1714686574932-5bb429ed70b3']); // Bogota
  set('colombia','parties',2,['1625398244649-abc29446b6c6','1689159132383-89487760533c','1590598016835-83cf3357ebc5']); // Cali salsa
  // beaches
  set('colombia','beaches',0,['1625398244649-abc29446b6c6','1689159132383-89487760533c','1714686375664-5f43a00051ea']); // Isla del Rosario
  set('colombia','beaches',1,['1583531352515-8884af319dc1','1536308037887-165852797016','1714686495394-73e2bb1bbd39']); // Playa Blanca
  set('colombia','beaches',2,['1689159132383-89487760533c','1625398244649-abc29446b6c6','1714686449223-b8e88d18d391']); // Tayrona beach
  // attractions
  set('colombia','attractions',0,['1583531352515-8884af319dc1','1536308037887-165852797016','1714686495394-73e2bb1bbd39']); // Cartagena old city
  set('colombia','attractions',1,['1590598016835-83cf3357ebc5','1714686574932-5bb429ed70b3','1714686449223-b8e88d18d391']); // Medellin Metro cable
  set('colombia','attractions',2,['1714686495394-73e2bb1bbd39','1625398244649-abc29446b6c6','1689159132383-89487760533c']); // Café de Colombia

  // ──────────── ARGENTINA ────────────
  // scenery
  set('argentina','scenery',0,['1750630443142-454555f2db80','1638271264114-3a783a354608','1531417406168-785d8be8abc8']); // Buenos Aires
  set('argentina','scenery',1,['1608903661090-aa2d6e124151','1710444386667-fadf9f1a63ac','1710444386184-acfef840c586']); // Patagonia
  set('argentina','scenery',2,['1662504431607-6714410af32f','1518639192441-8fce0a366e2e','1551312183-66bca7944e4e']); // Iguazu Falls
  set('argentina','scenery',3,['1546570089-777fb6b884c4','1710444387782-9c9e82a06160','1710444387950-8d56a618dc5f']); // Torres del Paine
  // hiking
  set('argentina','hiking',0,['1608903661090-aa2d6e124151','1546570089-777fb6b884c4','1710444386667-fadf9f1a63ac']); // Torres del Paine W
  set('argentina','hiking',1,['1710444387782-9c9e82a06160','1710444386184-acfef840c586','1710444387950-8d56a618dc5f']); // Bariloche
  set('argentina','hiking',2,['1710444387251-c9ac71f8afeb','1710444387681-7792d0675c52','1608903661090-aa2d6e124151']); // Aconcagua
  // parties
  set('argentina','parties',0,['1750630443142-454555f2db80','1638271264114-3a783a354608','1760968001163-e2a3355a1b45']); // BA Palermo
  set('argentina','parties',1,['1531417406168-785d8be8abc8','1750630443142-454555f2db80','1638271264114-3a783a354608']); // Milonga tango
  set('argentina','parties',2,['1750630443143-3b973f24717c','1760968001163-e2a3355a1b45','1775467225382-ef461cd72dfe']); // Mendoza wine
  // beaches
  set('argentina','beaches',0,['1760968001163-e2a3355a1b45','1775467225382-ef461cd72dfe','1750630443142-454555f2db80']); // Mar del Plata
  set('argentina','beaches',1,['1531417406168-785d8be8abc8','1638271264114-3a783a354608','1760968001163-e2a3355a1b45']); // Necochea
  // attractions
  set('argentina','attractions',0,['1638271264114-3a783a354608','1750630443142-454555f2db80','1531417406168-785d8be8abc8']); // La Boca / Caminito
  set('argentina','attractions',1,['1662504431607-6714410af32f','1518639192441-8fce0a366e2e','1700677866588-95226be09b39']); // Iguazu attraction
  set('argentina','attractions',2,['1608903661090-aa2d6e124151','1546570089-777fb6b884c4','1710444387782-9c9e82a06160']); // Perito Moreno glacier

  // ──────────── AUSTRALIA ────────────
  // scenery
  set('australia','scenery',0,['1624138784614-87fd1b6528f8','1523482580672-f109ba8cb9be','1528072164453-f4e8ef0d475a']); // Sydney
  set('australia','scenery',1,['1523059623039-a9ed027e7fad','1524820197278-540916411e20','1540448051910-09cfadd5df61']); // Great Ocean Road
  set('australia','scenery',2,['1540448051910-09cfadd5df61','1551352912-484163ad5be9','1523482580672-f109ba8cb9be']); // Uluru
  set('australia','scenery',3,['1587139223877-04cb899fa3e8','1635621265002-eb95cd6365ae','1650190460926-e42b4b64da80']); // Great Barrier Reef
  // hiking
  set('australia','hiking',0,['1523482580672-f109ba8cb9be','1524820197278-540916411e20','1528072164453-f4e8ef0d475a']); // Blue Mountains
  set('australia','hiking',1,['1523059623039-a9ed027e7fad','1540448051910-09cfadd5df61','1551352912-484163ad5be9']); // Fraser Island
  set('australia','hiking',2,['1524820197278-540916411e20','1551352912-484163ad5be9','1523059623039-a9ed027e7fad']); // Cradle Mountain
  // parties
  set('australia','parties',0,['1624138784614-87fd1b6528f8','1523482580672-f109ba8cb9be','1528072164453-f4e8ef0d475a']); // Sydney Darling Harbour
  set('australia','parties',1,['1523059623039-a9ed027e7fad','1524820197278-540916411e20','1523482580672-f109ba8cb9be']); // Melbourne
  set('australia','parties',2,['1650190460926-e42b4b64da80','1635621265002-eb95cd6365ae','1587139223877-04cb899fa3e8']); // Gold Coast
  // beaches
  set('australia','beaches',0,['1523482580672-f109ba8cb9be','1524820197278-540916411e20','1628072164453-f4e8ef0d475a']); // Bondi Beach
  set('australia','beaches',1,['1587139223877-04cb899fa3e8','1635621265002-eb95cd6365ae','1650190460926-e42b4b64da80']); // Whitsunday
  set('australia','beaches',2,['1635621265002-eb95cd6365ae','1650190460926-e42b4b64da80','1587139223877-04cb899fa3e8']); // Airlie Beach
  // attractions
  set('australia','attractions',0,['1624138784614-87fd1b6528f8','1523482580672-f109ba8cb9be','1528072164453-f4e8ef0d475a']); // Sydney Opera House
  set('australia','attractions',1,['1523059623039-a9ed027e7fad','1551352912-484163ad5be9','1540448051910-09cfadd5df61']); // Fraser / Road trip
  set('australia','attractions',2,['1540448051910-09cfadd5df61','1551352912-484163ad5be9','1524820197278-540916411e20']); // Uluru

  // ──────────── KENYA ────────────
  // scenery
  set('kenya','scenery',0,['1535941339077-2dd1c7963098','1624307844603-5a603dd96176','1623743424601-12be3807f99b']); // Masai Mara
  set('kenya','scenery',1,['1709402606682-400133d92ab2','1709403108621-66fe97132946','1535941339077-2dd1c7963098']); // Amboseli Kilimanjaro view
  set('kenya','scenery',2,['1650668302197-7f556c34cb91','1677519917377-118338dd2ed1','1623743424601-12be3807f99b']); // Mt Kenya region
  set('kenya','scenery',3,['1463425010-e53a3c95ce1b','1517846875602-2371528547d4','1663848990481-8e0da3374a9c']); // Diani coast
  // hiking
  set('kenya','hiking',0,['1650668302197-7f556c34cb91','1677519917377-118338dd2ed1','1650668301253-4c52700c0eee']); // Mt Kenya
  set('kenya','hiking',1,['1624307844603-5a603dd96176','1535941339077-2dd1c7963098','1623743424601-12be3807f99b']); // Hell's Gate
  set('kenya','hiking',2,['1709402606682-400133d92ab2','1663848990481-8e0da3374a9c','1517846875602-2371528547d4']); // Aberdare
  // parties
  set('kenya','parties',0,['1535941339077-2dd1c7963098','1624307844603-5a603dd96176','1623743424601-12be3807f99b']); // Nairobi Westlands
  set('kenya','parties',1,['1517846875602-2371528547d4','1663848990481-8e0da3374a9c','1709403740053-47b84630aff4']); // Malindi
  set('kenya','parties',2,['1663848990481-8e0da3374a9c','1517846875602-2371528547d4','1623743424601-12be3807f99b']); // Watamu
  // beaches
  set('kenya','beaches',0,['1623743424601-12be3807f99b','1517846875602-2371528547d4','1709403740053-47b84630aff4']); // Diani
  set('kenya','beaches',1,['1663848990481-8e0da3374a9c','1517846875602-2371528547d4','1709402606682-400133d92ab2']); // Watamu
  set('kenya','beaches',2,['1709403108621-66fe97132946','1709403740053-47b84630aff4','1535941339077-2dd1c7963098']); // Lamu Island
  // attractions
  set('kenya','attractions',0,['1535941339077-2dd1c7963098','1624307844603-5a603dd96176','1709402606682-400133d92ab2']); // Masai Mara safari
  set('kenya','attractions',1,['1623743424601-12be3807f99b','1709403108621-66fe97132946','1517846875602-2371528547d4']); // Nairobi NP
  set('kenya','attractions',2,['1709403740053-47b84630aff4','1709402606682-400133d92ab2','1624307844603-5a603dd96176']); // Giraffe Centre

  // ──────────── USA ────────────
  // scenery
  set('usa','scenery',0,['1527489377706-5bf97e608852','1472722266948-ded85e3028b8','1601931935821-5fbe71157695']); // Grand Canyon
  set('usa','scenery',1,['1503614472-8c93d56e92ce','1506905925346-21bda4d32df4','1682686578842-2d523dc9b6bb']); // Yosemite
  set('usa','scenery',2,['1558618666-fcd25c85cd64','1541534741688-6078c787b465','1580467641569-6e4b0ca49e62']); // Zion / Utah
  set('usa','scenery',3,['1542314831-068cd1dbfeeb','1544551763-92ab472cef10','1587467512421-7489e5dc0c77']); // Hawaii
  // hiking
  set('usa','hiking',0,['1472722266948-ded85e3028b8','1527489377706-5bf97e608852','1601931935821-5fbe71157695']); // Grand Canyon Bright Angel
  set('usa','hiking',1,['1506905925346-21bda4d32df4','1503614472-8c93d56e92ce','1682686578842-2d523dc9b6bb']); // Yosemite Half Dome
  set('usa','hiking',2,['1558618666-fcd25c85cd64','1580467641569-6e4b0ca49e62','1541534741688-6078c787b465']); // Angels Landing Zion
  // parties
  set('usa','parties',0,['1605833556294-ea5c7a74f57d','1553451190-4d4d1d825b80','1617503752587-97d2103a96ea']); // Las Vegas
  set('usa','parties',1,['1568454537842-d9efde255f1d','1582650954595-2e2bde69c6a7','1552089536-0e66b59df6c9']); // New Orleans
  set('usa','parties',2,['1567609867564-75c39a5ceaae','1500591459651-d0a775d55de7','1575318634028-6a0cfcb60c59']); // Miami South Beach
  // beaches
  set('usa','beaches',0,['1500591459651-d0a775d55de7','1567609867564-75c39a5ceaae','1575318634028-6a0cfcb60c59']); // Miami Beach
  set('usa','beaches',1,['1542314831-068cd1dbfeeb','1544551763-92ab472cef10','1587467512421-7489e5dc0c77']); // Maui Hawaii
  set('usa','beaches',2,['1534430480872-3498386e7856','1468359859904-6de9ddb5e2c3','1542330952-bffc55583b64']); // Venice Beach LA
  // attractions
  set('usa','attractions',0,['1527489377706-5bf97e608852','1472722266948-ded85e3028b8','1601931935821-5fbe71157695']); // Grand Canyon NP
  set('usa','attractions',1,['1503614472-8c93d56e92ce','1506905925346-21bda4d32df4','1682686578842-2d523dc9b6bb']); // Yosemite NP
  set('usa','attractions',2,['1558618666-fcd25c85cd64','1591608519578-3f7a17cfe5ef','1541534741688-6078c787b465']); // Arches NP

  // ──────────── CAMBODIA ────────────
  // scenery
  set('cambodia','scenery',0,['1599283787923-51b965a58b05','1549463601-da058868e20d','1526324585411-e24d5ba61edd']); // Angkor Wat
  set('cambodia','scenery',1,['1594903717106-6f02e8db45f3','1571844088753-73ca0880bcd9','1584607889131-98d098f01f60']); // Tonle Sap
  set('cambodia','scenery',2,['1610059454760-2018040abb0d','1580334338120-0a3411fbf06e','1595162419575-d9ff75b9586d']); // Phnom Penh / coast
  // hiking
  set('cambodia','hiking',0,['1599283787923-51b965a58b05','1549463601-da058868e20d','1526324585411-e24d5ba61edd']); // Angkor temples walk
  set('cambodia','hiking',1,['1594903717106-6f02e8db45f3','1584607889131-98d098f01f60','1571844088753-73ca0880bcd9']); // Bokor Hill
  set('cambodia','hiking',2,['1526324585411-e24d5ba61edd','1599283787923-51b965a58b05','1594903717106-6f02e8db45f3']); // Cardamom Mountains
  // parties
  set('cambodia','parties',0,['1549463601-da058868e20d','1526324585411-e24d5ba61edd','1599283787923-51b965a58b05']); // Pub Street Siem Reap
  set('cambodia','parties',1,['1610059454760-2018040abb0d','1580334338120-0a3411fbf06e','1557901141-9d47c57c366b']); // Phnom Penh
  // beaches
  set('cambodia','beaches',0,['1595162419575-d9ff75b9586d','1615470598918-a8c1e5bf7748','1560943701-14f678837722']); // Koh Rong
  set('cambodia','beaches',1,['1580334338120-0a3411fbf06e','1595162419575-d9ff75b9586d','1610059454760-2018040abb0d']); // Sihanoukville
  set('cambodia','beaches',2,['1615470598918-a8c1e5bf7748','1560943701-14f678837722','1595162419575-d9ff75b9586d']); // Koh Rong Samloem
  // attractions
  set('cambodia','attractions',0,['1599283787923-51b965a58b05','1549463601-da058868e20d','1526324585411-e24d5ba61edd']); // Angkor Wat
  set('cambodia','attractions',1,['1561461343-7c9d7c1dc773','1610059454760-2018040abb0d','1557901141-9d47c57c366b']); // Killing Fields
  set('cambodia','attractions',2,['1610059454760-2018040abb0d','1580334338120-0a3411fbf06e','1584607889131-98d098f01f60']); // National Museum

  // ──────────── BRAZIL ────────────
  // scenery
  set('brazil','scenery',0,['1518639192441-8fce0a366e2e','1700677866588-95226be09b39','1626568940331-b9efa277b000']); // Rio / Christ Redeemer
  set('brazil','scenery',1,['1551312183-66bca7944e4e','1662504431607-6714410af32f','1594387295585-34ba732932c8']); // Amazon
  set('brazil','scenery',2,['1662504431607-6714410af32f','1551312183-66bca7944e4e','1594387295585-34ba732932c8']); // Iguazu Falls
  set('brazil','scenery',3,['1544989163-465e0bcee9c0','1604664474914-39713aa96dbf','1593854586136-2edae149504c']); // Fernando de Noronha
  // hiking
  set('brazil','hiking',0,['1551312183-66bca7944e4e','1662504431607-6714410af32f','1594387295585-34ba732932c8']); // Amazon trekking
  set('brazil','hiking',1,['1518639192441-8fce0a366e2e','1700677866588-95226be09b39','1626568940331-b9efa277b000']); // Corcovado/Rio hike
  // parties
  set('brazil','parties',0,['1700677866588-95226be09b39','1518639192441-8fce0a366e2e','1626568940331-b9efa277b000']); // Rio Lapa
  set('brazil','parties',1,['1551312183-66bca7944e4e','1662504431607-6714410af32f','1700677866588-95226be09b39']); // Carnaval Rio
  set('brazil','parties',2,['1626568940331-b9efa277b000','1518639192441-8fce0a366e2e','1594387295585-34ba732932c8']); // Vila Madalena SP
  // beaches
  set('brazil','beaches',0,['1518639192441-8fce0a366e2e','1604664474914-39713aa96dbf','1652288509711-8055ef20018f']); // Ipanema
  set('brazil','beaches',1,['1652288509711-8055ef20018f','1767978238514-960e208a000d','1604664474914-39713aa96dbf']); // Búzios
  set('brazil','beaches',2,['1544989163-465e0bcee9c0','1593854586136-2edae149504c','1561831612-de4b1b304fbc']); // Fernando de Noronha
  // attractions
  set('brazil','attractions',0,['1518639192441-8fce0a366e2e','1700677866588-95226be09b39','1626568940331-b9efa277b000']); // Cristo Redentor
  set('brazil','attractions',1,['1551312183-66bca7944e4e','1662504431607-6714410af32f','1594387295585-34ba732932c8']); // Amazon cruise
  set('brazil','attractions',2,['1662504431607-6714410af32f','1544989163-465e0bcee9c0','1551312183-66bca7944e4e']); // Iguazu

  // ──────────── UGANDA ────────────
  // hiking
  set('uganda','hiking',0,['1614528767034-70de9fe166e0','1557446125-1407c9264ff0','1641224109626-4d5f6f4a3c53']); // Bwindi gorillas
  set('uganda','hiking',1,['1536327327725-804520febf13','1673624522244-8de0d50b8492','1620148752995-004fd0ce6262']); // Rwenzori
  // parties
  set('uganda','parties',0,['1666195443764-32e215fd326b','1620148752995-004fd0ce6262','1673624522244-8de0d50b8492']); // Kampala nightlife
  set('uganda','parties',1,['1620148752995-004fd0ce6262','1673624522244-8de0d50b8492','1666195443764-32e215fd326b']); // Jinja
  // beaches
  set('uganda','beaches',0,['1673624522244-8de0d50b8492','1666195443764-32e215fd326b','1620148752995-004fd0ce6262']); // Lake Victoria
  // attractions
  set('uganda','attractions',0,['1614528767034-70de9fe166e0','1557446125-1407c9264ff0','1641224109626-4d5f6f4a3c53']); // Ngamba chimp island
  set('uganda','attractions',1,['1536327327725-804520febf13','1673624522244-8de0d50b8492','1620148752995-004fd0ce6262']); // Source of the Nile
  set('uganda','attractions',2,['1557446125-1407c9264ff0','1641224109626-4d5f6f4a3c53','1614528767034-70de9fe166e0']); // Murchison Falls

  // ──────────── JAPAN ────────────
  // scenery
  set('japan','scenery',0,['1509023464722-18d996393ca8','1606918801925-e2c914c4b503','1578271887552-5ac3a72752bc']); // Mt Fuji
  set('japan','scenery',1,['1545569341-9eb8b30979d9','1540959733332-eab4deabeeaf','1570459027562-4a916cc6113f']); // Fushimi Inari Kyoto
  set('japan','scenery',2,['1570459027562-4a916cc6113f','1545569341-9eb8b30979d9','1681317474675-494bd8e91d7d']); // Arashiyama bamboo
  set('japan','scenery',3,['1618278942403-e973260cc425','1649583693539-f36f908da137','1509023464722-18d996393ca8']); // Nikko / temples
  // hiking
  set('japan','hiking',0,['1509023464722-18d996393ca8','1606918801925-e2c914c4b503','1618278942403-e973260cc425']); // Mt Fuji climb
  set('japan','hiking',1,['1649583693539-f36f908da137','1686397141424-677951207eec','1545569341-9eb8b30979d9']); // Kumano Kodo
  set('japan','hiking',2,['1570459027562-4a916cc6113f','1540959733332-eab4deabeeaf','1649583693539-f36f908da137']); // Nikko cedar trails
  // parties
  set('japan','parties',0,['1540959733332-eab4deabeeaf','1570459027562-4a916cc6113f','1545569341-9eb8b30979d9']); // Shinjuku Golden Gai
  set('japan','parties',1,['1570459027562-4a916cc6113f','1540959733332-eab4deabeeaf','1681317474675-494bd8e91d7d']); // Osaka Dotonbori
  set('japan','parties',2,['1545569341-9eb8b30979d9','1570459027562-4a916cc6113f','1618278942403-e973260cc425']); // Kyoto Pontocho
  // beaches
  set('japan','beaches',0,['1618278942403-e973260cc425','1649583693539-f36f908da137','1686397141424-677951207eec']); // Okinawa
  set('japan','beaches',1,['1606918801925-e2c914c4b503','1578271887552-5ac3a72752bc','1509023464722-18d996393ca8']); // Kamakura
  // attractions
  set('japan','attractions',0,['1540959733332-eab4deabeeaf','1570459027562-4a916cc6113f','1545569341-9eb8b30979d9']); // Shibuya crossing
  set('japan','attractions',1,['1545569341-9eb8b30979d9','1540959733332-eab4deabeeaf','1681317474675-494bd8e91d7d']); // Fushimi Inari
  set('japan','attractions',2,['1570459027562-4a916cc6113f','1618278942403-e973260cc425','1649583693539-f36f908da137']); // Nara deer park

  // ──────────── BOLIVIA ────────────
  // scenery
  set('bolivia','scenery',0,['1670593061290-bce356c349ef','1664272411200-fbdd6652bcad','1698648263623-6525ff0e6f4d']); // Uyuni salt flats
  set('bolivia','scenery',1,['1596118769843-08e9ad381ab0','1544142447-e43d0fe04bf2','1650700312125-f0dfe9063a42']); // La Paz
  set('bolivia','scenery',2,['1650700312125-f0dfe9063a42','1641736047569-647d412aac70','1670593061290-bce356c349ef']); // Lake Titicaca
  set('bolivia','scenery',3,['1623606963687-84374f2baccd','1635093206386-f8e9bfa06085','1664272411200-fbdd6652bcad']); // Death Road / Yungas
  // hiking
  set('bolivia','hiking',0,['1650700312125-f0dfe9063a42','1641736047569-647d412aac70','1635093206386-f8e9bfa06085']); // Choro Trail
  set('bolivia','hiking',1,['1623606963687-84374f2baccd','1635093206386-f8e9bfa06085','1650700311346-dd9ad9e77114']); // Death Road biking
  // parties
  set('bolivia','parties',0,['1596118769843-08e9ad381ab0','1544142447-e43d0fe04bf2','1650441909284-00f1e4647d8c']); // La Paz Sopocachi
  set('bolivia','parties',1,['1544142447-e43d0fe04bf2','1596118769843-08e9ad381ab0','1641736047569-647d412aac70']); // Carnaval Oruro
  // beaches
  set('bolivia','beaches',0,['1650700312125-f0dfe9063a42','1641736047569-647d412aac70','1623606963687-84374f2baccd']); // Lake Titicaca
  // attractions
  set('bolivia','attractions',0,['1596118769843-08e9ad381ab0','1544142447-e43d0fe04bf2','1650441909284-00f1e4647d8c']); // La Paz Witches Market
  set('bolivia','attractions',1,['1650441909239-6635c20a6dd1','1650441909257-9190e9c75b43','1544142447-e43d0fe04bf2']); // Tiwanaku ruins
  set('bolivia','attractions',2,['1670593061290-bce356c349ef','1664272411200-fbdd6652bcad','1698648263623-6525ff0e6f4d']); // Uyuni 3-day tour

  // ──────────── MEXICO ────────────
  // scenery
  set('mexico','scenery',0,['1605217074767-688b113d3b43','1666051637751-19d52e003355','1617220361167-9d556b850824']); // Tulum / cenotes
  set('mexico','scenery',1,['1617220361167-9d556b850824','1660088190597-dbc4b61aca78','1581710862235-eb6e05d8783f']); // Copper Canyon
  set('mexico','scenery',2,['1650359482338-f20ddbe3c42c','1723459640579-e4821fd77350','1666196388752-0c760c3b4493']); // Mexico City
  set('mexico','scenery',3,['1666051637734-de3231713ed9','1665618030297-4c3f13d34ca1','1606543931024-0073e830a747']); // Oaxaca
  // hiking
  set('mexico','hiking',0,['1617220361167-9d556b850824','1660088190597-dbc4b61aca78','1650359482338-f20ddbe3c42c']); // Copper Canyon
  set('mexico','hiking',1,['1660088190597-dbc4b61aca78','1723459640579-e4821fd77350','1617220361167-9d556b850824']); // Pico de Orizaba
  // parties
  set('mexico','parties',0,['1650359482338-f20ddbe3c42c','1723459640579-e4821fd77350','1666196388752-0c760c3b4493']); // Mexico City Condesa
  set('mexico','parties',1,['1723459640579-e4821fd77350','1666051637751-19d52e003355','1605217074767-688b113d3b43']); // Cancun Spring Break
  set('mexico','parties',2,['1666196388752-0c760c3b4493','1665618030297-4c3f13d34ca1','1606543931024-0073e830a747']); // Oaxaca mezcal
  // beaches
  set('mexico','beaches',0,['1605217074767-688b113d3b43','1666051637751-19d52e003355','1617220361167-9d556b850824']); // Tulum beach
  set('mexico','beaches',1,['1666051637734-de3231713ed9','1660088190597-dbc4b61aca78','1605217074767-688b113d3b43']); // Playa del Carmen
  set('mexico','beaches',2,['1660088190597-dbc4b61aca78','1723459640579-e4821fd77350','1666051637734-de3231713ed9']); // Isla Mujeres
  // attractions
  set('mexico','attractions',0,['1650359482338-f20ddbe3c42c','1723459640579-e4821fd77350','1666196388752-0c760c3b4493']); // Frida Kahlo Museum
  set('mexico','attractions',1,['1723459640579-e4821fd77350','1650359482338-f20ddbe3c42c','1660088190597-dbc4b61aca78']); // Teotihuacan
  set('mexico','attractions',2,['1605217074767-688b113d3b43','1666051637751-19d52e003355','1617220361167-9d556b850824']); // Chichen Itza

  // ──────────── TANZANIA ────────────
  // scenery
  set('tanzania','scenery',0,['1650668302197-7f556c34cb91','1677519917377-118338dd2ed1','1650668301253-4c52700c0eee']); // Kilimanjaro
  set('tanzania','scenery',1,['1464265686870-195dff2c55a0','1430514625417-38e9c79c95c8','1580867604157-92950a0a9daa']); // Serengeti
  set('tanzania','scenery',2,['1689479665694-c287e44b9452','1689479665570-949cc030cd10','1740685906955-fc0c50de97e1']); // Zanzibar
  set('tanzania','scenery',3,['1568259547325-f08f48165cfd','1677519910517-5bfee903a814','1650668302006-8d3acc5cc76b']); // Ngorongoro
  // hiking
  set('tanzania','hiking',0,['1650668302197-7f556c34cb91','1677519917377-118338dd2ed1','1568259547325-f08f48165cfd']); // Kilimanjaro climb
  set('tanzania','hiking',1,['1650668302253-3fc13879ec85','1702041423376-a469cbebe66d','1677519910517-5bfee903a814']); // Ol Doinyo Lengai
  // parties
  set('tanzania','parties',0,['1689479665694-c287e44b9452','1740685906955-fc0c50de97e1','1689479665570-949cc030cd10']); // Kendwa Rocks Zanzibar
  set('tanzania','parties',1,['1707760189490-2746ed6b88ba','1707760189497-92fd9e23458b','1689479665595-dfefc31dd9c2']); // Stone Town Freddie Mercury bar
  // beaches
  set('tanzania','beaches',0,['1689479665694-c287e44b9452','1689479665570-949cc030cd10','1740685906955-fc0c50de97e1']); // Nungwi Zanzibar
  set('tanzania','beaches',1,['1689479665595-dfefc31dd9c2','1741850821349-4aae8c913a10','1707760189490-2746ed6b88ba']); // Pemba Island
  // attractions
  set('tanzania','attractions',0,['1741850821349-4aae8c913a10','1745885851443-5fec447b53d4','1689479665694-c287e44b9452']); // Stone Town
  set('tanzania','attractions',1,['1745885851443-5fec447b53d4','1689479665595-dfefc31dd9c2','1740685906955-fc0c50de97e1']); // Spice tour
  set('tanzania','attractions',2,['1689479665595-dfefc31dd9c2','1741850821349-4aae8c913a10','1689479665694-c287e44b9452']); // Chumbe Island

  // ──────────── INDIA ────────────
  // scenery
  set('india','scenery',0,['1564507592333-c60657eea523','1548013146-72479768bada','1524492412937-b28074a5d7da']); // Taj Mahal
  set('india','scenery',1,['1587135941948-670b381f08ce','1567255097545-018d2b9c414c','1576487248805-cf45f6bcc67f']); // Rajasthan palaces
  set('india','scenery',2,['1576487248805-cf45f6bcc67f','1506462945848-ac8ea6f609cc','1599476160130-3af44b69ec6e']); // Varanasi ghats
  set('india','scenery',3,['1541738679621-172e4575a81d','1679934409127-1e36fc4e1a0f','1677267166119-8d0d6f040f3a']); // Goa beaches
  // hiking
  set('india','hiking',0,['1610397093377-7f7a600fd1d7','1681097233063-aa7a941bb688','1637823370891-7dc8a00f64f9']); // Ladakh
  set('india','hiking',1,['1637823370891-7dc8a00f64f9','1610397093377-7f7a600fd1d7','1681097233063-aa7a941bb688']); // Hampi boulders
  // parties
  set('india','parties',0,['1541738679621-172e4575a81d','1679934409127-1e36fc4e1a0f','1677267166119-8d0d6f040f3a']); // Goa Hilltop
  set('india','parties',1,['1642516864959-0b3a40416c13','1695453463057-aa5d48d9e3d4','1643757663872-e70c60d250c7']); // Mumbai
  set('india','parties',2,['1643757663872-e70c60d250c7','1541738679621-172e4575a81d','1695411560235-595738c0dbda']); // Anjuna Flea Market
  // beaches
  set('india','beaches',0,['1679934409127-1e36fc4e1a0f','1677267166119-8d0d6f040f3a','1695453463057-aa5d48d9e3d4']); // Andaman
  set('india','beaches',1,['1695453463057-aa5d48d9e3d4','1701440138424-d851930f25cf','1695411560235-595738c0dbda']); // Lakshadweep
  set('india','beaches',2,['1541738679621-172e4575a81d','1643757663872-e70c60d250c7','1679934409127-1e36fc4e1a0f']); // Goa Baga / Calangute
  // attractions
  set('india','attractions',0,['1564507592333-c60657eea523','1548013146-72479768bada','1524492412937-b28074a5d7da']); // Taj Mahal
  set('india','attractions',1,['1599476160130-3af44b69ec6e','1576487248805-cf45f6bcc67f','1506462945848-ac8ea6f609cc']); // Ajanta / Ellora caves
  set('india','attractions',2,['1567255097545-018d2b9c414c','1587135941948-670b381f08ce','1564507592333-c60657eea523']); // Jaipur forts

  // ──────────── NAMIBIA ────────────
  // scenery
  set('namibia','scenery',0,['1639402479478-f5e7881c0ccc','1580296090110-9749b89ec2f9','1622455316535-cf726bce57d4']); // Sossusvlei dunes
  set('namibia','scenery',1,['1639403169804-318fcb1d23ad','1707297916948-44ad185ee8eb','1639402479478-f5e7881c0ccc']); // Fish River Canyon
  set('namibia','scenery',2,['1707297916948-44ad185ee8eb','1772289093074-466d8ea2e1e5','1639403169804-318fcb1d23ad']); // Etosha NP
  set('namibia','scenery',3,['1622455316535-cf726bce57d4','1639402479478-f5e7881c0ccc','1580296090110-9749b89ec2f9']); // Damaraland
  // hiking
  set('namibia','hiking',0,['1639402479478-f5e7881c0ccc','1580296090110-9749b89ec2f9','1622455316535-cf726bce57d4']); // Big Daddy dune
  set('namibia','hiking',1,['1639403169804-318fcb1d23ad','1707297916948-44ad185ee8eb','1772289093074-466d8ea2e1e5']); // Fish River Canyon hike
  // parties
  set('namibia','parties',0,['1646632391043-e4573fa39299','1696894134220-cfc38c3bf7a1','1586627950143-537c07d56b23']); // Windhoek Joe's Beerhouse
  // beaches
  set('namibia','beaches',0,['1586627950143-537c07d56b23','1646632391043-e4573fa39299','1639402479478-f5e7881c0ccc']); // Swakopmund
  // attractions
  set('namibia','attractions',0,['1707297916948-44ad185ee8eb','1772289093074-466d8ea2e1e5','1639403169804-318fcb1d23ad']); // Etosha safari
  set('namibia','attractions',1,['1639402479478-f5e7881c0ccc','1580296090110-9749b89ec2f9','1622455316535-cf726bce57d4']); // Kolmanskop ghost town
  set('namibia','attractions',2,['1622455316535-cf726bce57d4','1639403169804-318fcb1d23ad','1707297916948-44ad185ee8eb']); // Spitzkoppe

  // ──────────── GUATEMALA ────────────
  // scenery
  set('guatemala','scenery',0,['1553254899-9cb84f2a1c49','1681686585350-bc2a6a7f8ac9','1681686586304-f2c35f81a29a']); // Lake Atitlan
  set('guatemala','scenery',1,['1508035460735-91088c495500','1669025467363-ace9bad030dc','1610426657522-df5535fb2ee6']); // Tikal ruins
  set('guatemala','scenery',2,['1681686588086-2ac0253adb1a','1681686587133-f6616257668f','1681686588943-750b961fe031']); // Antigua
  set('guatemala','scenery',3,['1681686585863-dbb37104ccbd','1681686586861-19013ef8be90','1553254899-9cb84f2a1c49']); // Semuc Champey
  // hiking
  set('guatemala','hiking',0,['1681686588086-2ac0253adb1a','1681686587133-f6616257668f','1681686588943-750b961fe031']); // Acatenango volcano
  set('guatemala','hiking',1,['1681686588943-750b961fe031','1681686587641-45cd5bd876d9','1681686588086-2ac0253adb1a']); // Santiaguito
  // parties
  set('guatemala','parties',0,['1681686585350-bc2a6a7f8ac9','1681686586304-f2c35f81a29a','1553254899-9cb84f2a1c49']); // Antigua La Sin Ventura
  set('guatemala','parties',1,['1681686585863-dbb37104ccbd','1681686586861-19013ef8be90','1681686587641-45cd5bd876d9']); // Lake Atitlan San Pedro
  // beaches
  set('guatemala','beaches',0,['1681686587641-45cd5bd876d9','1681686588265-a303f93f9cae','1681686586861-19013ef8be90']); // Monterrico black sand
  // attractions
  set('guatemala','attractions',0,['1553254899-9cb84f2a1c49','1681686585350-bc2a6a7f8ac9','1681686586304-f2c35f81a29a']); // Lake Atitlan
  set('guatemala','attractions',1,['1681686585863-dbb37104ccbd','1508035460735-91088c495500','1669025467363-ace9bad030dc']); // Semuc Champey

  // ──────────── LAOS ────────────
  // scenery
  set('laos','scenery',0,['1686120552846-2051e801988c','1610426714962-abc29446b6c6','1642085107639-172e4575a81d']); // Luang Prabang
  set('laos','scenery',1,['1642085085078-6aa7f0f50e49','1677727644366-5f43a00051ea','1583037478877-b42a59d8bd39']); // Vang Vieng
  set('laos','scenery',2,['1637575729353-5a6208fbc0af','1684918172034-6f02e8db45f3','1684918171802-abc29446b6c6']); // 4000 Islands
  set('laos','scenery',3,['1693498792915-3b973f24717c','1637575729353-5a6208fbc0af','1686120552846-2051e801988c']); // Nam Ou River
  // hiking
  set('laos','hiking',0,['1642085107639-172e4575a81d','1610426714962-abc29446b6c6','1686120552846-2051e801988c']); // Kuang Si waterfall area
  set('laos','hiking',1,['1642085085078-6aa7f0f50e49','1677727644366-5f43a00051ea','1637575729353-5a6208fbc0af']); // Pha Daeng ridge
  // parties
  set('laos','parties',0,['1677727644366-5f43a00051ea','1642085085078-6aa7f0f50e49','1583037478877-b42a59d8bd39']); // Vang Vieng tubing
  set('laos','parties',1,['1686120552846-2051e801988c','1637575729353-5a6208fbc0af','1693498792915-3b973f24717c']); // Luang Prabang Utopia
  // beaches
  set('laos','beaches',0,['1693498792915-3b973f24717c','1684918172034-6f02e8db45f3','1637575729353-5a6208fbc0af']); // 4000 Islands Mekong
  // attractions
  set('laos','attractions',0,['1686120552846-2051e801988c','1610426714962-abc29446b6c6','1642085107639-172e4575a81d']); // Kuang Si waterfalls
  set('laos','attractions',1,['1642085085078-6aa7f0f50e49','1677727644366-5f43a00051ea','1583037478877-b42a59d8bd39']); // Wat Xieng Thong temple
  set('laos','attractions',2,['1637575729353-5a6208fbc0af','1693498792915-3b973f24717c','1686120552846-2051e801988c']); // Plain of Jars

  // ──────────── CHILE ────────────
  // scenery
  set('chile','scenery',0,['1494783435443-c15feee0a80a','1666668152560-e6807f6ffabe','1580413193140-8af6ffa819e1']); // Atacama
  set('chile','scenery',1,['1620824175623-930d7a980da8','1648498015611-4e51d7d3f74a','1642158361126-b6732a4e6834']); // Torres del Paine
  set('chile','scenery',2,['1608903661090-aa2d6e124151','1546570089-777fb6b884c4','1710444386667-fadf9f1a63ac']); // Patagonia
  set('chile','scenery',3,['1656844613329-63c6199b4d00','1656844613024-72e02c1c50bf','1659339637755-aa16775ebed5']); // Chiloé island
  // hiking
  set('chile','hiking',0,['1620824175623-930d7a980da8','1648498015611-4e51d7d3f74a','1546570089-777fb6b884c4']); // Torres del Paine W
  set('chile','hiking',1,['1608903661090-aa2d6e124151','1710444386667-fadf9f1a63ac','1710444386184-acfef840c586']); // Dientes de Navarino
  set('chile','hiking',2,['1494783435443-c15feee0a80a','1666668152560-e6807f6ffabe','1620824175623-930d7a980da8']); // Atacama volcanos
  // parties
  set('chile','parties',0,['1656844613329-63c6199b4d00','1659339637755-aa16775ebed5','1494783435443-c15feee0a80a']); // Santiago Bellavista
  set('chile','parties',1,['1656844613024-72e02c1c50bf','1656844817790-435d65e2e037','1659339637330-17763875511b']); // Valparaiso
  // beaches
  set('chile','beaches',0,['1659339637755-aa16775ebed5','1656844613329-63c6199b4d00','1656844817436-4a67e0c965c3']); // Bahia Inglesa
  // attractions
  set('chile','attractions',0,['1656844817436-4a67e0c965c3','1659339637330-17763875511b','1656844613024-72e02c1c50bf']); // Easter Island Moai
  set('chile','attractions',1,['1619101987229-0103c50cb065','1656844731685-12ae72bf936b','1656844817790-435d65e2e037']); // Valparaiso murals
  set('chile','attractions',2,['1494783435443-c15feee0a80a','1666668152560-e6807f6ffabe','1580413193140-8af6ffa819e1']); // Atacama stargazing

  // ──────────── COSTA RICA ────────────
  // scenery
  set('costarica','scenery',0,['1714465910015-f2e52b8a4203','1595963189193-e84342d9283b','1701109388862-209b9426d346']); // Rainforest canopy
  set('costarica','scenery',1,['1707074111761-3f1db359269e','1684383311007-7baa94be7951','1685340475418-c85e32cc2730']); // Arenal Volcano
  set('costarica','scenery',2,['1705351978871-2b3316c25e6d','1647016110502-be875ea1b7d3','1630534591909-d4e7041aab07']); // Manuel Antonio
  set('costarica','scenery',3,['1743251814850-952a9116e572','1742857235280-8633fa7b5992','1638514738739-61c13d5f7026']); // Monteverde cloud forest
  // hiking
  set('costarica','hiking',0,['1714465910015-f2e52b8a4203','1595963189193-e84342d9283b','1642939373163-fd2311e0d10e']); // Corcovado NP
  set('costarica','hiking',1,['1707074111761-3f1db359269e','1684383311007-7baa94be7951','1705351978871-2b3316c25e6d']); // Arenal lava fields
  // parties
  set('costarica','parties',0,['1647016110502-be875ea1b7d3','1630534591909-d4e7041aab07','1680003614189-96c5d569ee43']); // Quepos Manuel Antonio
  set('costarica','parties',1,['1685340475418-c85e32cc2730','1707074111761-3f1db359269e','1616890069499-f05321ca20fa']); // Tamarindo beach bars
  // beaches
  set('costarica','beaches',0,['1743252492792-ceb9ed4e497a','1742857235277-6f8a9c76e862','1638514738768-ce5a15785876']); // Playa Conchal shell beach
  set('costarica','beaches',1,['1705351978871-2b3316c25e6d','1647016110502-be875ea1b7d3','1630534591909-d4e7041aab07']); // Tamarindo surf
  set('costarica','beaches',2,['1616890069499-f05321ca20fa','1680003614189-96c5d569ee43','1519272057063-ebc7e20f2e87']); // Puerto Viejo Caribbean
  // attractions
  set('costarica','attractions',0,['1714465910015-f2e52b8a4203','1595963189193-e84342d9283b','1701109388862-209b9426d346']); // Manuel Antonio NP
  set('costarica','attractions',1,['1743251814850-952a9116e572','1742857235280-8633fa7b5992','1638514738739-61c13d5f7026']); // Tortuguero canals
  set('costarica','attractions',2,['1707074111761-3f1db359269e','1684383311007-7baa94be7951','1742857235277-6f8a9c76e862']); // Waterfall Gardens

  // ──────────── NEPAL ────────────
  // scenery
  set('nepal','scenery',0,['1697746149225-63a33bcb2ea4','1700556581902-6aa21e96507c','1542986949-cd1d830d0f86']); // Everest region
  set('nepal','scenery',1,['1612708957751-087272ee76c9','1610720769880-06d9ba974a18','1701255136052-b33f78a886a4']); // Annapurna
  set('nepal','scenery',2,['1601062200299-18c820b7074e','1601909757864-b69726ea7a91','1700556581877-a21318d4d84e']); // Kathmandu Durbar
  set('nepal','scenery',3,['1544735889-252a626cf188','1549874569-1b6fec7ff642','1697746149225-63a33bcb2ea4']); // Pokhara / Phewa Lake
  // hiking
  set('nepal','hiking',0,['1697746149225-63a33bcb2ea4','1700556581902-6aa21e96507c','1542986949-cd1d830d0f86']); // EBC Trek
  set('nepal','hiking',1,['1612708957751-087272ee76c9','1610720769880-06d9ba974a18','1701255136052-b33f78a886a4']); // Annapurna Circuit
  // parties
  set('nepal','parties',0,['1601062200299-18c820b7074e','1601909757864-b69726ea7a91','1700556581877-a21318d4d84e']); // Kathmandu Thamel
  set('nepal','parties',1,['1544735889-252a626cf188','1549874569-1b6fec7ff642','1612708957751-087272ee76c9']); // Pokhara Lakeside
  // beaches
  set('nepal','beaches',0,['1544735889-252a626cf188','1549874569-1b6fec7ff642','1610720769880-06d9ba974a18']); // Phewa Lake Pokhara
  // attractions
  set('nepal','attractions',0,['1601062200299-18c820b7074e','1601909757864-b69726ea7a91','1700556581902-6aa21e96507c']); // Boudhanath Stupa
  set('nepal','attractions',1,['1700556581877-a21318d4d84e','1601062200299-18c820b7074e','1542986949-cd1d830d0f86']); // Pashupati temple
  set('nepal','attractions',2,['1544735889-252a626cf188','1697746149225-63a33bcb2ea4','1612708957751-087272ee76c9']); // Bhaktapur Durbar

  // ──────────── MADAGASCAR ────────────
  // scenery
  set('madagascar','scenery',0,['1558694440-03ade9215d7b','1570742544137-3a469196c32b','1659944984855-776187144baf']); // Baobab alley
  set('madagascar','scenery',1,['1504598578017-40d9b776f1bc','1585335740623-f7a1f0c446eb','1659944975073-453265ccf3a6']); // Tsingy rocks
  set('madagascar','scenery',2,['1677667495307-10e01bd9530f','1704684715217-f4b3ca3161f7','1558694440-03ade9215d7b']); // Isalo NP
  set('madagascar','scenery',3,['1542524395734-db8f7381a84d','1593704273477-8a0280c1c237','1597426061335-e50c8697630b']); // Nosy Be beaches
  // hiking
  set('madagascar','hiking',0,['1659944984855-776187144baf','1558694440-03ade9215d7b','1570742544137-3a469196c32b']); // Tsaranoro massif
  set('madagascar','hiking',1,['1504598578017-40d9b776f1bc','1585335740623-f7a1f0c446eb','1677667495307-10e01bd9530f']); // Masoala peninsula
  // parties
  set('madagascar','parties',0,['1542524395734-db8f7381a84d','1593704273477-8a0280c1c237','1704684715217-f4b3ca3161f7']); // Nosy Be bars
  // beaches
  set('madagascar','beaches',0,['1542524395734-db8f7381a84d','1593704273477-8a0280c1c237','1597426061335-e50c8697630b']); // Nosy Iranja
  set('madagascar','beaches',1,['1695236012281-b259df47ee3a','1558694725-7f8e89659dc1','1704684715217-f4b3ca3161f7']); // Sainte-Marie / Ile aux Nattes
  // attractions
  set('madagascar','attractions',0,['1558694440-03ade9215d7b','1570742544137-3a469196c32b','1659944984855-776187144baf']); // Lemur reserve
  set('madagascar','attractions',1,['1504598578017-40d9b776f1bc','1659944984855-776187144baf','1585335740623-f7a1f0c446eb']); // Tsingy Bemaraha
  set('madagascar','attractions',2,['1593704273477-8a0280c1c237','1542524395734-db8f7381a84d','1704684715217-f4b3ca3161f7']); // Rova Palace Antananarivo

  // ──────────── ECUADOR ────────────
  // scenery
  set('ecuador','scenery',0,['1595517930215-d2778a56ac93','1599132104776-eeab32d45cfd','1662613274069-26f3bbe60677']); // Galapagos
  set('ecuador','scenery',1,['1728416076438-b7e003a0caf7','1728934189355-4b4eb05e0899','1595518107491-f80eb7f9881e']); // Galapagos wildlife
  set('ecuador','scenery',2,['1748211856747-6a37861a2021','1748139899951-ba3f80c12d37','1748114736321-e20e4df00f28']); // Andes Quito
  set('ecuador','scenery',3,['1748114938425-01f6240656e1','1748214183659-69fc848a7e93','1595517930215-d2778a56ac93']); // Amazon Ecuador
  // hiking
  set('ecuador','hiking',0,['1595517930215-d2778a56ac93','1728934189355-4b4eb05e0899','1662613274069-26f3bbe60677']); // Galapagos walk
  set('ecuador','hiking',1,['1748211856747-6a37861a2021','1748139899951-ba3f80c12d37','1595518107491-f80eb7f9881e']); // Cotopaxi volcano
  // parties
  set('ecuador','parties',0,['1748114736321-e20e4df00f28','1748114938425-01f6240656e1','1748214183659-69fc848a7e93']); // Quito La Mariscal
  // beaches
  set('ecuador','beaches',0,['1595517930215-d2778a56ac93','1599132104776-eeab32d45cfd','1748211856747-6a37861a2021']); // Montanita surf beach
  set('ecuador','beaches',1,['1662613274069-26f3bbe60677','1728416076438-b7e003a0caf7','1728934189355-4b4eb05e0899']); // Galapagos snorkeling
  // attractions
  set('ecuador','attractions',0,['1748114736321-e20e4df00f28','1748114938425-01f6240656e1','1748214183659-69fc848a7e93']); // Quito old town
  set('ecuador','attractions',1,['1595518107491-f80eb7f9881e','1748211856747-6a37861a2021','1748139899951-ba3f80c12d37']); // Equator monument
  set('ecuador','attractions',2,['1595517930215-d2778a56ac93','1599132104776-eeab32d45cfd','1662613274069-26f3bbe60677']); // Otavalo market

  // ──────────── SRI LANKA ────────────
  // scenery
  set('srilanka','scenery',0,['1663784025074-49e9e7f11f62','1656495783346-559815221595','1598135753163-6167c1a1ad65']); // Sigiriya
  set('srilanka','scenery',1,['1598135753163-6167c1a1ad65','1663784025074-49e9e7f11f62','1656495783346-559815221595']); // Ella tea hills
  set('srilanka','scenery',2,['1656495783346-559815221595','1598135753163-6167c1a1ad65','1663784025074-49e9e7f11f62']); // Kandy temple
  set('srilanka','scenery',3,['1663784025074-49e9e7f11f62','1598135753163-6167c1a1ad65','1656495783346-559815221595']); // Galle Fort
  // hiking
  set('srilanka','hiking',0,['1598135753163-6167c1a1ad65','1663784025074-49e9e7f11f62','1656495783346-559815221595']); // Adam's Peak
  set('srilanka','hiking',1,['1663784025074-49e9e7f11f62','1656495783346-559815221595','1598135753163-6167c1a1ad65']); // Little Adam's Peak Ella
  // parties
  set('srilanka','parties',0,['1656495783346-559815221595','1598135753163-6167c1a1ad65','1663784025074-49e9e7f11f62']); // Colombo Sky Bar
  // beaches
  set('srilanka','beaches',0,['1663784025074-49e9e7f11f62','1598135753163-6167c1a1ad65','1656495783346-559815221595']); // Mirissa / Coconut Hill
  set('srilanka','beaches',1,['1598135753163-6167c1a1ad65','1656495783346-559815221595','1663784025074-49e9e7f11f62']); // Arugam Bay surf
  set('srilanka','beaches',2,['1656495783346-559815221595','1663784025074-49e9e7f11f62','1598135753163-6167c1a1ad65']); // Jungle Beach Unawatuna
  // attractions
  set('srilanka','attractions',0,['1663784025074-49e9e7f11f62','1656495783346-559815221595','1598135753163-6167c1a1ad65']); // Sigiriya Rock
  set('srilanka','attractions',1,['1598135753163-6167c1a1ad65','1663784025074-49e9e7f11f62','1656495783346-559815221595']); // Yala NP
  set('srilanka','attractions',2,['1656495783346-559815221595','1598135753163-6167c1a1ad65','1663784025074-49e9e7f11f62']); // Galle Fort lighthouse

  // ──────────── SOUTH AFRICA ────────────
  // scenery
  set('southafrica','scenery',0,['1636216056866-2051e801988c','1626894169601-482d26b23f35','1604763655221-b98ebdac6ddf']); // Cape Town Table Mountain
  set('southafrica','scenery',1,['1580644906000-6e953181e153','1591596095955-92a580509b82','1557077590-f7cc67c1a101']); // Kruger NP / Big Five
  set('southafrica','scenery',2,['1637083963580-9383f3b835bd','1589473291612-fbc0f2e47409','1721155227599-bfb5e8913fc4']); // Garden Route
  set('southafrica','scenery',3,['1557077590-f7cc67c1a101','1733371021248-0986ef2ceeba','1613926156179-abf7cc9e0f33']); // Drakensberg
  // hiking
  set('southafrica','hiking',0,['1636216056866-2051e801988c','1626894169601-482d26b23f35','1604763655221-b98ebdac6ddf']); // Table Mountain
  set('southafrica','hiking',1,['1637083963580-9383f3b835bd','1733371021248-0986ef2ceeba','1557077590-f7cc67c1a101']); // Otter Trail Garden Route
  // parties
  set('southafrica','parties',0,['1636216056866-2051e801988c','1604763655221-b98ebdac6ddf','1626894169601-482d26b23f35']); // Cape Town Long Street
  set('southafrica','parties',1,['1651413949923-f95f98db6d94','1580644906000-6e953181e153','1591596095955-92a580509b82']); // Joburg Maboneng
  // beaches
  set('southafrica','beaches',0,['1604763655221-b98ebdac6ddf','1636216056866-2051e801988c','1626894169601-482d26b23f35']); // Clifton Beach CT
  set('southafrica','beaches',1,['1557077590-f7cc67c1a101','1733371021248-0986ef2ceeba','1637083963580-9383f3b835bd']); // Boulders penguin beach
  set('southafrica','beaches',2,['1637083963580-9383f3b835bd','1589473291612-fbc0f2e47409','1721155227599-bfb5e8913fc4']); // Tsitsikamma Garden Route
  // attractions
  set('southafrica','attractions',0,['1580644906000-6e953181e153','1591596095955-92a580509b82','1557077590-f7cc67c1a101']); // Kruger NP safari
  set('southafrica','attractions',1,['1636216056866-2051e801988c','1604763655221-b98ebdac6ddf','1626894169601-482d26b23f35']); // Robben Island
  set('southafrica','attractions',2,['1651413949923-f95f98db6d94','1580644906000-6e953181e153','1591596095955-92a580509b82']); // Soweto / Orlando

  // ──────────── PHILIPPINES ────────────
  // scenery
  set('philippines','scenery',0,['1518509562904-e7ef99cdcc86','1542533382-b42a59d8bd39','1695051702427-1c24ce3682e7']); // Palawan El Nido
  set('philippines','scenery',1,['1565113180093-077f1e8f1c74','1590133076213-ef3cc4b1a70b','1602587921225-3cca658d31bb']); // Boracay White Beach
  set('philippines','scenery',2,['1623288221258-73cd427a97a8','1715884157489-68e3bf5e7968','1598270608728-ddc93ef66c43']); // Bohol Chocolate Hills
  set('philippines','scenery',3,['1715884109891-656007e1b4e2','1580660807536-d5b1bb40beec','1519101236449-ac8098e16f15']); // Siargao lagoon
  // hiking
  set('philippines','hiking',0,['1542533382-b42a59d8bd39','1695051702427-1c24ce3682e7','1518509562904-e7ef99cdcc86']); // Mayon volcano
  set('philippines','hiking',1,['1565113180093-077f1e8f1c74','1590133076213-ef3cc4b1a70b','1602587921225-3cca658d31bb']); // Mt Pulag
  // parties
  set('philippines','parties',0,['1602587921225-3cca658d31bb','1623288221258-73cd427a97a8','1715884157489-68e3bf5e7968']); // Manila BGC
  set('philippines','parties',1,['1565113180093-077f1e8f1c74','1590133076213-ef3cc4b1a70b','1518509562904-e7ef99cdcc86']); // Boracay White Beach bars
  // beaches
  set('philippines','beaches',0,['1518509562904-e7ef99cdcc86','1542533382-b42a59d8bd39','1695051702427-1c24ce3682e7']); // El Nido Palawan
  set('philippines','beaches',1,['1565113180093-077f1e8f1c74','1590133076213-ef3cc4b1a70b','1602587921225-3cca658d31bb']); // Boracay
  set('philippines','beaches',2,['1715884109891-656007e1b4e2','1580660807536-d5b1bb40beec','1519101236449-ac8098e16f15']); // Siargao Cloud 9
  // attractions
  set('philippines','attractions',0,['1623288221258-73cd427a97a8','1715884157489-68e3bf5e7968','1598270608728-ddc93ef66c43']); // Intramuros Manila
  set('philippines','attractions',1,['1462558073967-9fd054c339d1','1519101236449-ac8098e16f15','1580660807536-d5b1bb40beec']); // Chocolate Hills
  set('philippines','attractions',2,['1518509562904-e7ef99cdcc86','1695051702427-1c24ce3682e7','1542533382-b42a59d8bd39']); // Puerto Princesa Underground River

  // ──────────── MOROCCO ────────────
  // scenery
  set('morocco','scenery',0,['1772580310425-63f2290c2ba7','1716146755954-4f197a5b6031','1762380832389-6142c308de6a']); // Marrakech / Medina
  set('morocco','scenery',1,['1769628702933-39ba968cb198','1750981091095-8fd793e19cd9','1750981083580-52652a766c71']); // Fes medina
  set('morocco','scenery',2,['1750981091005-01607a870e16','1750981091421-5ae1eb56cd69','1750981074109-677c6783f9a3']); // Sahara desert dunes
  set('morocco','scenery',3,['1611874156894-894081702a14','1545200381-89c298dea43d','1639402479478-f5e7881c0ccc']); // Sahara / Merzouga
  // hiking
  set('morocco','hiking',0,['1750981091095-8fd793e19cd9','1750981083580-52652a766c71','1750981091005-01607a870e16']); // Atlas Mountains Toubkal
  set('morocco','hiking',1,['1611874156894-894081702a14','1545200381-89c298dea43d','1716146755954-4f197a5b6031']); // Sahara camel trek
  // parties
  set('morocco','parties',0,['1772580310425-63f2290c2ba7','1716146755954-4f197a5b6031','1762380832389-6142c308de6a']); // Djemaa el Fna Marrakech
  set('morocco','parties',1,['1769628702933-39ba968cb198','1750981081058-acc10295bc11','1750981083769-ffbc983c00f7']); // Rooftop bars
  // beaches
  set('morocco','beaches',0,['1750981092575-52470b60214c','1750981089084-c1811827afa8','1750981093016-cb633ebfee64']); // Essaouira kite surfing
  set('morocco','beaches',1,['1750981093848-c95c6359661f','1750981089377-2883600c08b8','1750981088715-fed23a7bf7c2']); // Agadir / Taghazout
  // attractions
  set('morocco','attractions',0,['1772580310425-63f2290c2ba7','1716146755954-4f197a5b6031','1762380832389-6142c308de6a']); // Marrakech medina
  set('morocco','attractions',1,['1769628702933-39ba968cb198','1750981091095-8fd793e19cd9','1750981083580-52652a766c71']); // Fes tanneries
  set('morocco','attractions',2,['1611874156894-894081702a14','1545200381-89c298dea43d','1750981091005-01607a870e16']); // Ait Benhaddou kasbah

  // ──────────── NEW ZEALAND ────────────
  // scenery
  set('newzealand','scenery',0,['1591640040362-f55d95a6b2bc','1501884428012-aa321a256730','1466446105453-d151af699ac7']); // Milford Sound
  set('newzealand','scenery',1,['1495072667656-424d680e6299','1685059269737-25d9b7cef218','1554710565-1a60a70ce204']); // Queenstown / Remarkables
  set('newzealand','scenery',2,['1602366242300-7ba8b37a16ec','1485770805892-55706252e11d','1591640040362-f55d95a6b2bc']); // Fiordland
  set('newzealand','scenery',3,['1708527459582-4af7f39e8f77','1668010883448-00e04acaa2d0','1735924527360-5d9e8dd8bebf']); // Bay of Islands
  // hiking
  set('newzealand','hiking',0,['1501884428012-aa321a256730','1591640040362-f55d95a6b2bc','1466446105453-d151af699ac7']); // Tongariro Alpine Crossing
  set('newzealand','hiking',1,['1495072667656-424d680e6299','1685059269737-25d9b7cef218','1602366242300-7ba8b37a16ec']); // Abel Tasman
  set('newzealand','hiking',2,['1554710565-1a60a70ce204','1485770805892-55706252e11d','1495072667656-424d680e6299']); // Milford Track
  // parties
  set('newzealand','parties',0,['1495072667656-424d680e6299','1685059269737-25d9b7cef218','1554710565-1a60a70ce204']); // Queenstown bars
  set('newzealand','parties',1,['1708527459582-4af7f39e8f77','1668010883448-00e04acaa2d0','1591640040362-f55d95a6b2bc']); // Auckland Britomart
  // beaches
  set('newzealand','beaches',0,['1708527459582-4af7f39e8f77','1668010883448-00e04acaa2d0','1735924527360-5d9e8dd8bebf']); // Bay of Islands
  set('newzealand','beaches',1,['1602366242300-7ba8b37a16ec','1485770805892-55706252e11d','1554710565-1a60a70ce204']); // Piha Black Sand
  // attractions
  set('newzealand','attractions',0,['1495072667656-424d680e6299','1685059269737-25d9b7cef218','1554710565-1a60a70ce204']); // Hobbiton
  set('newzealand','attractions',1,['1735924527360-5d9e8dd8bebf','1708527459582-4af7f39e8f77','1668010883448-00e04acaa2d0']); // Rotorua geothermal
  set('newzealand','attractions',2,['1591640040362-f55d95a6b2bc','1501884428012-aa321a256730','1466446105453-d151af699ac7']); // Waitomo glowworm caves

  // ──────────── MUSTDO IMAGES ────────────
  // thailand
  set('thailand','mustdo',0,['1599576838688-8a6c11263108','1578157695179-d7b7ddeb2f53','1537953773345-d172ccf13cf1']); // Thai cooking class (Chiang Mai)
  set('thailand','mustdo',1,['1549719386-74dfcbf7dbed','1560359614-870d1a7ea91d','1686056561795-f071f46b377a']); // Muay Thai
  set('thailand','mustdo',2,['1676648433601-a8f699da0b55','1506665531195-3566af2b4dfa','1537956965359-7573183d1f57']); // island cruise

  // vietnam
  set('vietnam','mustdo',0,['1691927644510-e8cc4a2a31ee','1574614366831-900f959788c9','1507003211169-0a1dd7228f2d']); // Hoi An cooking class
  set('vietnam','mustdo',1,['1643029891412-92f9a81a8c16','1561461221-959c3f16234b','1557750255-c76072a7aad1']); // Ha Long night cruise
  set('vietnam','mustdo',2,['1691927644510-e8cc4a2a31ee','1698744822195-e461f814a6a1','1604325099517-d9ff3c837c3c']); // biking Hoi An

  // indonesia
  set('indonesia','mustdo',0,['1628697723581-fd4ec5c38ab0','1555400038-63f5ba517a47','1633820313053-fa030b13ef94']); // yoga meditation Ubud
  set('indonesia','mustdo',1,['1633820313053-fa030b13ef94','1513415756790-2ac1db1297d0','1555400038-a088c772c8cd']); // insect skewers Bali street
  set('indonesia','mustdo',2,['1505993597083-3bd19fb75e57','1715755455989-76413081ad10','1555400038-63f5ba517a47']); // Mt Batur sunrise

  // peru
  set('peru','mustdo',0,['1526392060635-9d6019884377','1587595431973-160d0d94add1','1580619305218-8423a7ef79b4']); // Machu Picchu cooking class
  set('peru','mustdo',1,['1580619305218-8423a7ef79b4','1660840641127-6d806e681cac','1461681922067-669418071e5c']); // Nazca Lines flight
  set('peru','mustdo',2,['1587595431973-160d0d94add1','1461681922067-669418071e5c','1660840628054-1cf3ff4df88f']); // Uros Islands visit

  // colombia
  set('colombia','mustdo',0,['1625398244649-abc29446b6c6','1689159132383-89487760533c','1590598016835-83cf3357ebc5']); // Salsa class Cali
  set('colombia','mustdo',1,['1590598016835-83cf3357ebc5','1714686495394-73e2bb1bbd39','1536308037887-165852797016']); // Graffiti tour Comuna 13
  set('colombia','mustdo',2,['1714686574932-5bb429ed70b3','1625398244649-abc29446b6c6','1583531352515-8884af319dc1']); // Coffee farm tour

  // argentina
  set('argentina','mustdo',0,['1531417406168-785d8be8abc8','1750630443142-454555f2db80','1638271264114-3a783a354608']); // Tango lesson
  set('argentina','mustdo',1,['1750630443143-3b973f24717c','1760968001163-e2a3355a1b45','1775467225382-ef461cd72dfe']); // wine tasting Mendoza
  set('argentina','mustdo',2,['1710444387782-9c9e82a06160','1608903661090-aa2d6e124151','1546570089-777fb6b884c4']); // Patagonia Quilmes ruins

  // australia
  set('australia','mustdo',0,['1587139223877-04cb899fa3e8','1635621265002-eb95cd6365ae','1650190460926-e42b4b64da80']); // Great Barrier Reef dive
  set('australia','mustdo',1,['1523059623039-a9ed027e7fad','1524820197278-540916411e20','1540448051910-09cfadd5df61']); // Great Ocean Road drive
  set('australia','mustdo',2,['1523482580672-f109ba8cb9be','1528072164453-f4e8ef0d475a','1624138784614-87fd1b6528f8']); // Campervan/wilderness

  // kenya
  set('kenya','mustdo',0,['1535941339077-2dd1c7963098','1624307844603-5a603dd96176','1623743424601-12be3807f99b']); // Masai Mara safari
  set('kenya','mustdo',1,['1709402606682-400133d92ab2','1709403108621-66fe97132946','1535941339077-2dd1c7963098']); // Masai village
  set('kenya','mustdo',2,['1464265686870-195dff2c55a0','1650668302197-7f556c34cb91','1677519917377-118338dd2ed1']); // balloon ride over Mara

  // usa
  set('usa','mustdo',0,['1527489377706-5bf97e608852','1472722266948-ded85e3028b8','1503614472-8c93d56e92ce']); // Route 66 road trip
  set('usa','mustdo',1,['1568454537842-d9efde255f1d','1582650954595-2e2bde69c6a7','1552089536-0e66b59df6c9']); // Jazz in New Orleans
  set('usa','mustdo',2,['1558618666-fcd25c85cd64','1506905925346-21bda4d32df4','1541534741688-6078c787b465']); // National Parks hopper

  // cambodia
  set('cambodia','mustdo',0,['1599283787923-51b965a58b05','1549463601-da058868e20d','1526324585411-e24d5ba61edd']); // Angkor Wat sunset
  set('cambodia','mustdo',1,['1507003211169-0a1dd7228f2d','1526324585411-e24d5ba61edd','1599283787923-51b965a58b05']); // Khmer cooking class
  set('cambodia','mustdo',2,['1594903717106-6f02e8db45f3','1571844088753-73ca0880bcd9','1584607889131-98d098f01f60']); // floating village Tonle Sap

  // brazil
  set('brazil','mustdo',0,['1544989163-465e0bcee9c0','1593854586136-2edae149504c','1561831612-de4b1b304fbc']); // swimming Fernando de Noronha
  set('brazil','mustdo',1,['1551312183-66bca7944e4e','1700677866588-95226be09b39','1626568940331-b9efa277b000']); // Carnaval Rio
  set('brazil','mustdo',2,['1518639192441-8fce0a366e2e','1700677866588-95226be09b39','1626568940331-b9efa277b000']); // soccer in Brazil

  // uganda
  set('uganda','mustdo',0,['1614528767034-70de9fe166e0','1557446125-1407c9264ff0','1641224109626-4d5f6f4a3c53']); // gorilla trekking Bwindi
  set('uganda','mustdo',1,['1536327327725-804520febf13','1673624522244-8de0d50b8492','1620148752995-004fd0ce6262']); // Nile rafting Jinja
  set('uganda','mustdo',2,['1557446125-1407c9264ff0','1641224109626-4d5f6f4a3c53','1614528767034-70de9fe166e0']); // chimpanzees Kibale

  // japan
  set('japan','mustdo',0,['1509023464722-18d996393ca8','1606918801925-e2c914c4b503','1618278942403-e973260cc425']); // climb Mt Fuji
  set('japan','mustdo',1,['1545569341-9eb8b30979d9','1570459027562-4a916cc6113f','1540959733332-eab4deabeeaf']); // Pontocho/geisha Kyoto
  set('japan','mustdo',2,['1618278942403-e973260cc425','1649583693539-f36f908da137','1509023464722-18d996393ca8']); // Onsen hot spring

  // bolivia
  set('bolivia','mustdo',0,['1670593061290-bce356c349ef','1664272411200-fbdd6652bcad','1698648263623-6525ff0e6f4d']); // Uyuni salt flats after rain
  set('bolivia','mustdo',1,['1623606963687-84374f2baccd','1635093206386-f8e9bfa06085','1650700311346-dd9ad9e77114']); // Death Road cycling
  set('bolivia','mustdo',2,['1596118769843-08e9ad381ab0','1544142447-e43d0fe04bf2','1650441909284-00f1e4647d8c']); // silver mining Potosi

  // mexico
  set('mexico','mustdo',0,['1605217074767-688b113d3b43','1666051637751-19d52e003355','1617220361167-9d556b850824']); // cenote swimming Tulum
  set('mexico','mustdo',1,['1666051637734-de3231713ed9','1665618030297-4c3f13d34ca1','1606543931024-0073e830a747']); // Day of Dead Oaxaca
  set('mexico','mustdo',2,['1650359482338-f20ddbe3c42c','1723459640579-e4821fd77350','1666196388752-0c760c3b4493']); // cooking class Mexico City

  // tanzania
  set('tanzania','mustdo',0,['1464265686870-195dff2c55a0','1430514625417-38e9c79c95c8','1580867604157-92950a0a9daa']); // Serengeti safari
  set('tanzania','mustdo',1,['1689479665694-c287e44b9452','1740685906955-fc0c50de97e1','1689479665570-949cc030cd10']); // whale shark swimming Zanzibar
  set('tanzania','mustdo',2,['1741850821349-4aae8c913a10','1745885851443-5fec447b53d4','1689479665595-dfefc31dd9c2']); // Forodhani Night Market Stone Town

  // india
  set('india','mustdo',0,['1610397093377-7f7a600fd1d7','1681097233063-aa7a941bb688','1637823370891-7dc8a00f64f9']); // yoga class Rishikesh
  set('india','mustdo',1,['1576487248805-cf45f6bcc67f','1506462945848-ac8ea6f609cc','1599476160130-3af44b69ec6e']); // Aarti ceremony Varanasi
  set('india','mustdo',2,['1587135941948-670b381f08ce','1567255097545-018d2b9c414c','1564507592333-c60657eea523']); // Golden Temple Amritsar

  // namibia
  set('namibia','mustdo',0,['1639402479478-f5e7881c0ccc','1580296090110-9749b89ec2f9','1622455316535-cf726bce57d4']); // Dune 45 sunrise Sossusvlei
  set('namibia','mustdo',1,['1622455316535-cf726bce57d4','1639402479478-f5e7881c0ccc','1639403169804-318fcb1d23ad']); // stargazing Namib Desert
  set('namibia','mustdo',2,['1586627950143-537c07d56b23','1646632391043-e4573fa39299','1696894134220-cfc38c3bf7a1']); // quad biking Swakopmund

  // guatemala
  set('guatemala','mustdo',0,['1681686588086-2ac0253adb1a','1681686587133-f6616257668f','1681686588943-750b961fe031']); // Acatenango volcano hike
  set('guatemala','mustdo',1,['1681686585863-dbb37104ccbd','1681686586861-19013ef8be90','1553254899-9cb84f2a1c49']); // Semuc Champey swimming
  set('guatemala','mustdo',2,['1681686585350-bc2a6a7f8ac9','1508035460735-91088c495500','1681686586304-f2c35f81a29a']); // Spanish school Antigua

  // laos
  set('laos','mustdo',0,['1677727644366-5f43a00051ea','1642085085078-6aa7f0f50e49','1583037478877-b42a59d8bd39']); // tubing Vang Vieng
  set('laos','mustdo',1,['1642085107639-172e4575a81d','1610426714962-abc29446b6c6','1686120552846-2051e801988c']); // swimming Kuang Si waterfalls
  set('laos','mustdo',2,['1693498792915-3b973f24717c','1684918172034-6f02e8db45f3','1637575729353-5a6208fbc0af']); // Mekong sunset cruise

  // chile
  set('chile','mustdo',0,['1620824175623-930d7a980da8','1648498015611-4e51d7d3f74a','1546570089-777fb6b884c4']); // W Trek Torres del Paine
  set('chile','mustdo',1,['1494783435443-c15feee0a80a','1666668152560-e6807f6ffabe','1580413193140-8af6ffa819e1']); // stargazing Atacama Desert
  set('chile','mustdo',2,['1620824175623-930d7a980da8','1608903661090-aa2d6e124151','1710444386667-fadf9f1a63ac']); // volcano surfing

  // costarica
  set('costarica','mustdo',0,['1743251814850-952a9116e572','1742857235280-8633fa7b5992','1638514738739-61c13d5f7026']); // zipline Monteverde cloud forest
  set('costarica','mustdo',1,['1705351978871-2b3316c25e6d','1647016110502-be875ea1b7d3','1630534591909-d4e7041aab07']); // surfing Tamarindo
  set('costarica','mustdo',2,['1714465910015-f2e52b8a4203','1595963189193-e84342d9283b','1707074111761-3f1db359269e']); // white water rafting

  // nepal
  set('nepal','mustdo',0,['1697746149225-63a33bcb2ea4','1700556581902-6aa21e96507c','1542986949-cd1d830d0f86']); // EBC Trek Everest
  set('nepal','mustdo',1,['1544735889-252a626cf188','1549874569-1b6fec7ff642','1612708957751-087272ee76c9']); // paragliding Pokhara Phewa Lake
  set('nepal','mustdo',2,['1612708957751-087272ee76c9','1697746149225-63a33bcb2ea4','1610720769880-06d9ba974a18']); // sunrise from Poon Hill

  // madagascar
  set('madagascar','mustdo',0,['1558694440-03ade9215d7b','1570742544137-3a469196c32b','1504598578017-40d9b776f1bc']); // walking with lemurs
  set('madagascar','mustdo',1,['1558694440-03ade9215d7b','1659944984855-776187144baf','1570742544137-3a469196c32b']); // Avenue of Baobabs at sunset
  set('madagascar','mustdo',2,['1542524395734-db8f7381a84d','1593704273477-8a0280c1c237','1597426061335-e50c8697630b']); // whale shark diving Nosy Be

  // ecuador
  set('ecuador','mustdo',0,['1595517930215-d2778a56ac93','1599132104776-eeab32d45cfd','1662613274069-26f3bbe60677']); // Galapagos snorkeling
  set('ecuador','mustdo',1,['1595518107491-f80eb7f9881e','1748211856747-6a37861a2021','1748139899951-ba3f80c12d37']); // Equator monument Quito
  set('ecuador','mustdo',2,['1748211856747-6a37861a2021','1748139899951-ba3f80c12d37','1595517930215-d2778a56ac93']); // Quilotoa loop trek

  // srilanka
  set('srilanka','mustdo',0,['1598135753163-6167c1a1ad65','1663784025074-49e9e7f11f62','1656495783346-559815221595']); // Adam's Peak pilgrimage
  set('srilanka','mustdo',1,['1663784025074-49e9e7f11f62','1656495783346-559815221595','1598135753163-6167c1a1ad65']); // tuk-tuk road trip
  set('srilanka','mustdo',2,['1656495783346-559815221595','1663784025074-49e9e7f11f62','1598135753163-6167c1a1ad65']); // whale watching Mirissa

  // southafrica
  set('southafrica','mustdo',0,['1580644906000-6e953181e153','1591596095955-92a580509b82','1557077590-f7cc67c1a101']); // Kruger NP safari
  set('southafrica','mustdo',1,['1636216056866-2051e801988c','1626894169601-482d26b23f35','1604763655221-b98ebdac6ddf']); // Table Mountain hike
  set('southafrica','mustdo',2,['1557077590-f7cc67c1a101','1733371021248-0986ef2ceeba','1637083963580-9383f3b835bd']); // Boulders Beach penguins

  // philippines
  set('philippines','mustdo',0,['1518509562904-e7ef99cdcc86','1542533382-b42a59d8bd39','1695051702427-1c24ce3682e7']); // El Nido island hopping Palawan
  set('philippines','mustdo',1,['1715884109891-656007e1b4e2','1580660807536-d5b1bb40beec','1519101236449-ac8098e16f15']); // surfing Siargao Cloud 9
  set('philippines','mustdo',2,['1623288221258-73cd427a97a8','1715884157489-68e3bf5e7968','1598270608728-ddc93ef66c43']); // Chocolate Hills Bohol

  // morocco
  set('morocco','mustdo',0,['1750981091005-01607a870e16','1750981091421-5ae1eb56cd69','1611874156894-894081702a14']); // Sahara desert camping
  set('morocco','mustdo',1,['1769628702933-39ba968cb198','1750981091095-8fd793e19cd9','1750981083580-52652a766c71']); // Fes Medina exploration
  set('morocco','mustdo',2,['1772580310425-63f2290c2ba7','1716146755954-4f197a5b6031','1762380832389-6142c308de6a']); // Chefchaouen/Marrakech sunset

  // newzealand
  set('newzealand','mustdo',0,['1501884428012-aa321a256730','1591640040362-f55d95a6b2bc','1466446105453-d151af699ac7']); // Tongariro Alpine Crossing
  set('newzealand','mustdo',1,['1495072667656-424d680e6299','1685059269737-25d9b7cef218','1554710565-1a60a70ce204']); // bungee jumping Queenstown
  set('newzealand','mustdo',2,['1591640040362-f55d95a6b2bc','1501884428012-aa321a256730','1735924527360-5d9e8dd8bebf']); // Waitomo glowworm caves

})();
