const channelSource = `
PROTV HD|https://canale-tv.com/channel/pr0tv.html
A1 HD|https://canale-tv.com/channel/a1.html
TVR1|https://canale-tv.com/channel/tvr1.html
TVR2|https://canale-tv.com/channel/tvr2.html
CANAL D|https://canale-tv.com/channel/canald.html
CANAL D2|https://canale-tv.com/channel/canald2.html
PRIMA TV|https://canale-tv.com/channel/primatv.html
NATIONAL TV|https://canale-tv.com/channel/nationaltv.html
TVR 3|https://canale-tv.com/channel/tvr3.html
TVR INTERNATIONAL|https://canale-tv.com/channel/tvrinter.html
PROCINEMA|https://canale-tv.com/channel/procinema.html
ACASA TV|https://canale-tv.com/channel/acasatv.html
ACASA GOLD|https://canale-tv.com/channel/acasagold.html
ANTENA STARS|https://canale-tv.com/channel/astars.html
NATIONAL 24 PLUS|https://canale-tv.com/channel/national24plus.html
A3 CNN|https://canale-tv.com/channel/a3cnn.html
ROMANIA TV|https://canale-tv.com/channel/romaniatv.html
REALITATEA TV|https://canale-tv.com/channel/realitateatv.html
PRIMA NEWS|https://canale-tv.com/channel/primanews.html
B1 TV|https://canale-tv.com/channel/b1tv.html
EURONEWS ROMANIA|https://canale-tv.com/channel/euronewsromnia.html
NEWS24|https://canale-tv.com/channel/digi24.html
CNN|https://canale-tv.com/channel/cnn.html
BBC NEWS|https://canale-tv.com/channel/bbcnews.html
CBS REALITY|https://canale-tv.com/channel/cbsreality.html
SUPERSPORT 1|https://canale-tv.com/channel/dgsp1.html
SUPERSPORT 2|https://canale-tv.com/channel/dgsp2.html
SUPERSPORT 3|https://canale-tv.com/channel/dgsp3.html
SUPERSPORT 4|https://canale-tv.com/channel/dgsp4.html
PRO ARENA|https://canale-tv.com/channel/proarena.html
TVR SPORT|https://canale-tv.com/channel/tvrsport.html
PRIMA SPORT 1|https://canale-tv.com/channel/primasp1.html
PRIMA SPORT 2|https://canale-tv.com/channel/primasp2.html
PRIMA SPORT 3|https://canale-tv.com/channel/primasp3.html
PRIMA SPORT 4|https://canale-tv.com/channel/primasp4.html
PRIMA SPORT 5|https://canale-tv.com/channel/primasp5.html
PPV 1|https://canale-tv.com/channel/ppv1.html
PPV 2|https://canale-tv.com/channel/ppv2.html
PPV 3|https://canale-tv.com/channel/ppv3.html
SPORT EXTRA|https://canale-tv.com/channel/sportextra.html
EUR0SP0RT 1|https://canale-tv.com/channel/eurosp1.html
EUR0SP0RT 2|https://canale-tv.com/channel/eurosp2.html
HB0|https://canale-tv.com/channel/hb.html
HB0 2|https://canale-tv.com/channel/hb2.html
HB0 3|https://canale-tv.com/channel/hb3.html
DIVA|https://canale-tv.com/channel/diva.html
HAPPY TV|https://canale-tv.com/channel/happy.html
FILM CAFE|https://canale-tv.com/channel/filmcafe.html
TV 1000|https://canale-tv.com/channel/tv1000.html
FlLM N0W|https://canale-tv.com/channel/fnow.html
EPIC DRAMA|https://canale-tv.com/channel/epdrama.html
AMC|https://canale-tv.com/channel/amc.html
SH0WTIME 1|https://canale-tv.com/channel/show1.html
SH0WTIME 2|https://canale-tv.com/channel/show2.html
AXN HD|https://canale-tv.com/channel/axn.html
AXN SPIN|https://canale-tv.com/channel/axnspin.html
AXN BLACK|https://canale-tv.com/channel/axnblack.html
AXN WHITE|https://canale-tv.com/channel/axnwhite.html
CINEMAX|https://canale-tv.com/channel/cmax.html
CINEMAX 2|https://canale-tv.com/channel/cmax2.html
BOLYWOOD TV|https://canale-tv.com/channel/bolywoodtv.html
COMEDY CENTRAL|https://canale-tv.com/channel/ccentral.html
WARNER TV|https://canale-tv.com/channel/wornertv.html
BBC FIRST|https://canale-tv.com/channel/bfirst.html
MINIMAX|https://canale-tv.com/channel/minimax.html
CARTOON NETWORK|https://canale-tv.com/channel/cartoonnet.html
DISNEY CHANNEL|https://canale-tv.com/channel/disneych.html
TEEN NICK|https://canale-tv.com/channel/teennick.html
NICKELODEON|https://canale-tv.com/channel/nickelodeon.html
DISNEY JR|https://canale-tv.com/channel/disneyjr.html
CARTOONITO|https://canale-tv.com/channel/cartonito.html
NICKTOONS|https://canale-tv.com/channel/nicktoons.html
NICK JR|https://canale-tv.com/channel/nickjr.html
JIM JAM|https://canale-tv.com/channel/jimjam.html
DUCK TV|https://canale-tv.com/channel/ducktv.html
DISCOVERY CH|https://canale-tv.com/channel/discoverych.html
HISTORY CHANNEL|https://canale-tv.com/channel/historych.html
NAT GEO PEOPLE|https://canale-tv.com/channel/netgeopeople.html
NATIONAL GEOGRAPHIC|https://canale-tv.com/channel/natgeo.html
ID INVESTIGATION|https://canale-tv.com/channel/idinvest.html
CRIME & INVESTIGATION|https://canale-tv.com/channel/crimeinvest.html
TLC|https://canale-tv.com/channel/tlc.html
NAT GEO WILD|https://canale-tv.com/channel/natgeowild.html
BBC EARTH|https://canale-tv.com/channel/bbcearth.html
VIASAT HISTORY|https://canale-tv.com/channel/viahist.html
VIASAT NATURE|https://canale-tv.com/channel/vianature.html
VIASAT EXPLORER|https://canale-tv.com/channel/viaexplorer.html
TRAVEL MIX|https://canale-tv.com/channel/travelmix.html
PAPRIKA|https://canale-tv.com/channel/paprika.html
HGTV|https://canale-tv.com/channel/hgtv.html
TARAF TV|https://canale-tv.com/channel/taraf.html
FAVORIT TV|https://canale-tv.com/channel/favorit.html
ETNO TV|https://canale-tv.com/channel/etno.html
HIT MUSIC|https://canale-tv.com/channel/hitmusic.html
BALCAN MUSIC|https://canale-tv.com/channel/balcanmuz.html
UTV|https://canale-tv.com/channel/utv.html
KISS TV|https://canale-tv.com/channel/kisstv.html
MUSIC CHANNEL|https://canale-tv.com/channel/musicch.html
ZU TV|https://canale-tv.com/channel/zutv.html
Fish & Hunting TV|https://canale-tv.com/channel/fishy.html
F1lm B0X|https://canale-tv.com/channel/fbox1.html
F1lm B0X Extra|https://canale-tv.com/channel/fbox-extra.html
F1lm B0X Premium|https://canale-tv.com/channel/fbox-premium.html
Canal 33|https://canale-tv.com/channel/canal-33.html
Dizi|https://canale-tv.com/channel/dizy.html
`;

const categoryRules = [
  { key: 'Sports', match: /(SPORT|PPV|ARENA|EUROSP|SUPERSPORT)/i },
  { key: 'News', match: /(NEWS|CNN|BBC NEWS|REALITATEA|ROMANIA TV|B1 TV|EURONEWS|DIGI24|A3)/i },
  { key: 'Kids', match: /(DISNEY|NICK|CARTOON|MINIMAX|JIM JAM|DUCK TV)/i },
  { key: 'Movies & Series', match: /(FILM|HBO|HB0|CINEMAX|AXN|AMC|DIVA|EPIC DRAMA|SHOWTIME|WARNER|COMEDY|PROCINEMA|ACASA|BOLYWOOD|DIZI|F1LM B0X|TV 1000|BBC FIRST)/i },
  { key: 'Documentary & Lifestyle', match: /(DISCOVERY|HISTORY|NAT|INVESTIGATION|TLC|EARTH|VIASAT|TRAVEL|PAPRIKA|HGTV|FISH)/i },
  { key: 'Music', match: /(MUSIC|KISS TV|ZU TV|UTV|TARAF|FAVORIT|ETNO|HIT)/i }
];

const categoryDescriptions = {
  'General': 'General entertainment channel with mixed programs, live shows, and daily content.',
  'Sports': 'Live sports coverage, match analysis, highlights, and event programming.',
  'News': 'Rolling news, breaking events, political analysis, and current affairs.',
  'Kids': 'Family and children programming, cartoons, educational shows, and teen content.',
  'Movies & Series': 'Movies, premium series, and entertainment blocks for fiction fans.',
  'Documentary & Lifestyle': 'Documentaries, nature, travel, crime, and lifestyle programming.',
  'Music': 'Music videos, charts, local hits, and artist-focused programming.'
};

const channels = channelSource
  .trim()
  .split('\n')
  .map((line, index) => {
    const [name, embedUrl] = line.split('|');
    const category = categoryRules.find((rule) => rule.match.test(name))?.key ?? 'General';
    return {
      id: `ch-${index + 1}`,
      name,
      embedUrl,
      category,
      language: /CNN|BBC|DISCOVERY|NAT|HISTORY|AXN|AMC|CINEMAX|DISNEY|NICK|CARTOON/i.test(name) ? 'Mixed / EN-RO' : 'Romanian',
      quality: /HD/i.test(name) ? 'HD' : 'Standard',
      info: categoryDescriptions[category]
    };
  });

const storageKey = {
  favorites: 'iptv-favorites',
  pinned: 'iptv-pinned',
  selected: 'iptv-selected'
};

const els = {
  searchInput: document.getElementById('searchInput'),
  channelList: document.getElementById('channelList'),
  channelName: document.getElementById('channelName'),
  channelMeta: document.getElementById('channelMeta'),
  channelInfo: document.getElementById('channelInfo'),
  playerFrame: document.getElementById('playerFrame'),
  favBtn: document.getElementById('favBtn'),
  pinBtn: document.getElementById('pinBtn'),
  chips: Array.from(document.querySelectorAll('.chip'))
};

let state = {
  search: '',
  filter: 'all',
  favorites: new Set(JSON.parse(localStorage.getItem(storageKey.favorites) || '[]')),
  pinned: new Set(JSON.parse(localStorage.getItem(storageKey.pinned) || '[]')),
  selectedId: localStorage.getItem(storageKey.selected) || channels[0].id
};

function saveState() {
  localStorage.setItem(storageKey.favorites, JSON.stringify([...state.favorites]));
  localStorage.setItem(storageKey.pinned, JSON.stringify([...state.pinned]));
  localStorage.setItem(storageKey.selected, state.selectedId);
}

function matchesFilter(ch) {
  if (state.filter === 'favorite') return state.favorites.has(ch.id);
  if (state.filter === 'pinned') return state.pinned.has(ch.id);
  return true;
}

function renderList() {
  const q = state.search.toLowerCase().trim();
  const visible = channels
    .filter((ch) => matchesFilter(ch))
    .filter((ch) => {
      if (!q) return true;
      return (
        ch.name.toLowerCase().includes(q) ||
        ch.category.toLowerCase().includes(q) ||
        ch.info.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      const pinDiff = Number(state.pinned.has(b.id)) - Number(state.pinned.has(a.id));
      if (pinDiff !== 0) return pinDiff;
      return a.name.localeCompare(b.name);
    });

  els.channelList.innerHTML = '';
  if (!visible.length) {
    els.channelList.innerHTML = '<li class="empty">No channels match this filter.</li>';
    return;
  }

  for (const ch of visible) {
    const li = document.createElement('li');
    li.className = `channel-item ${state.selectedId === ch.id ? 'active' : ''}`;
    li.innerHTML = `
      <button class="channel-select" data-id="${ch.id}">
        <span class="title">${ch.name}</span>
        <span class="meta">${ch.category}</span>
      </button>
      <div class="marks">
        ${state.pinned.has(ch.id) ? '<span title="Pinned">📌</span>' : ''}
        ${state.favorites.has(ch.id) ? '<span title="Favorite">★</span>' : ''}
      </div>
    `;
    els.channelList.appendChild(li);
  }

  els.channelList.querySelectorAll('.channel-select').forEach((btn) => {
    btn.addEventListener('click', () => selectChannel(btn.dataset.id));
  });
}

function selectChannel(id) {
  state.selectedId = id;
  const ch = channels.find((x) => x.id === id);
  if (!ch) return;

  els.channelName.textContent = ch.name;
  els.channelMeta.textContent = `${ch.category} · ${ch.language} · ${ch.quality}`;
  els.playerFrame.src = ch.embedUrl;

  els.channelInfo.innerHTML = `
    <article class="card"><h4>Category</h4><p>${ch.category}</p></article>
    <article class="card"><h4>Description</h4><p>${ch.info}</p></article>
    <article class="card"><h4>Language</h4><p>${ch.language}</p></article>
    <article class="card"><h4>Embed URL</h4><p><a href="${ch.embedUrl}" target="_blank" rel="noreferrer">${ch.embedUrl}</a></p></article>
  `;

  els.favBtn.classList.toggle('active', state.favorites.has(id));
  els.pinBtn.classList.toggle('active', state.pinned.has(id));

  saveState();
  renderList();
}

function toggleFavorite() {
  if (state.favorites.has(state.selectedId)) state.favorites.delete(state.selectedId);
  else state.favorites.add(state.selectedId);
  saveState();
  selectChannel(state.selectedId);
}

function togglePin() {
  if (state.pinned.has(state.selectedId)) state.pinned.delete(state.selectedId);
  else state.pinned.add(state.selectedId);
  saveState();
  selectChannel(state.selectedId);
}

els.searchInput.addEventListener('input', (e) => {
  state.search = e.target.value;
  renderList();
});

els.chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    state.filter = chip.dataset.filter;
    els.chips.forEach((c) => c.classList.toggle('active', c === chip));
    renderList();
  });
});

els.favBtn.addEventListener('click', toggleFavorite);
els.pinBtn.addEventListener('click', togglePin);

renderList();
selectChannel(state.selectedId);
