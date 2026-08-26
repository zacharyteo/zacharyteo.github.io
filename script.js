// ============================================================
// KANYE WEST FAN PAGE — interactive "Era Selector"
// Clicking a season restyles the accent color across the page
// and swaps the file-card content. Pure vanilla JS, no deps.
// ============================================================

(function () {
  "use strict";

  const eras = [
    {
      id: "dropout",
      tag: "TAG / 01",
      year: "2004",
      title: "The College Dropout",
      collab: null,
      accent: "#b5411e",
      palette: ["#b5411e", "#e7e2d6", "#8d8778", "#16140f"],
      song: "Through the Wire",
      spotifyId: "5BScaisQTLLatYcO0gThNt",
      desc: "Soul samples sped into chipmunk vocals, sung hooks from guest choirs, and bars about student debt and self-doubt. The debut that made \u201cbackpack rap\u201d commercially unavoidable."
    },
    {
      id: "registration",
      tag: "TAG / 02",
      year: "2005",
      title: "Late Registration",
      collab: null,
      accent: "#a8862f",
      palette: ["#a8862f", "#f0e6c8", "#3a362c", "#16140f"],
      song: "Gold Digger",
      spotifyId: "1PS1QMdUqOal0ai3Gt7sDQ",
      desc: "Co-produced with Jon Brion, the sound swelled into full string arrangements and chamber-pop textures — rap scored like a period film."
    },
    {
      id: "graduation",
      tag: "TAG / 03",
      year: "2007",
      title: "Graduation",
      collab: null,
      accent: "#7b3fae",
      palette: ["#7b3fae", "#f2d24a", "#16140f", "#e7e2d6"],
      song: "Stronger",
      spotifyId: "0j2T0R9dR9qdJYsB7ciXhf",
      desc: "Built for stadiums, borrowing from Daft Punk and stadium rock. Its chart battle with 50 Cent is widely credited with reshaping mainstream rap's commercial center of gravity."
    },
    {
      id: "808s",
      tag: "TAG / 04",
      year: "2008",
      title: "808s & Heartbreak",
      collab: null,
      accent: "#3c6e91",
      palette: ["#3c6e91", "#c9d6dc", "#16140f", "#8d8778"],
      song: "Heartless",
      spotifyId: "4EWCNWgDS8707fNSZ1oaA5",
      desc: "Grief and Auto-Tune replace verses with sung, vocoder-heavy hooks over stark 808 drums — a swerve away from rapping that quietly rewired pop for a decade."
    },
    {
      id: "mbdtf",
      tag: "TAG / 05",
      year: "2010",
      title: "My Beautiful Dark Twisted Fantasy",
      collab: null,
      accent: "#7a1620",
      palette: ["#7a1620", "#caa24a", "#16140f", "#e7e2d6"],
      song: "POWER",
      spotifyId: "2RUFzxyUlI36KKy9Agkqze",
      desc: "Maximalist, orchestral, and self-lacerating in equal measure. Frequently cited by critics as one of the best-reviewed rap albums ever released."
    },
    {
      id: "throne",
      tag: "TAG / 06",
      year: "2011",
      title: "Watch the Throne",
      collab: "with Jay-Z",
      accent: "#8a6a1f",
      palette: ["#8a6a1f", "#e7e2d6", "#16140f", "#caa24a"],
      song: "Otis",
      spotifyId: "1EZEqBLmtSVu91wqQJmL9n",
      desc: "Two of hip-hop's biggest names trading luxury verses over maximalist, sample-heavy production — a joint album built for arenas, built on an Otis Redding flip."
    },
    {
      id: "yeezus",
      tag: "TAG / 07",
      year: "2013",
      title: "Yeezus",
      collab: null,
      accent: "#c1121f",
      palette: ["#c1121f", "#16140f", "#8d8778", "#e7e2d6"],
      song: "Bound 2",
      spotifyId: "3sNVsP50132BTNlImLx70i",
      desc: "Industrial, minimal, and confrontational — stripped-down production over an unmarked red jewel case with no title printed anywhere."
    },
    {
      id: "tlop",
      tag: "TAG / 08",
      year: "2016",
      title: "The Life of Pablo",
      collab: null,
      accent: "#c96b8a",
      palette: ["#c96b8a", "#e7e2d6", "#16140f", "#8d8778"],
      song: "Famous",
      spotifyId: "19a3JfW8BQwqHWUMbcqSx8",
      desc: "Announced, retitled, and edited even after release, TLOP treated the album itself as a living document — the first LP to top the charts on streaming alone."
    },
    {
      id: "ye",
      tag: "TAG / 09",
      year: "2018",
      title: "Ye",
      collab: null,
      accent: "#5c6b2f",
      palette: ["#5c6b2f", "#e7e2d6", "#16140f", "#8d8778"],
      song: "All Mine",
      spotifyId: "3U21A07gAloCc4P7J8rxcn",
      desc: "Recorded in about a week at a Wyoming ranch, Ye is West's shortest, most nakedly personal record — opening with a spoken meditation rather than a beat."
    },
    {
      id: "ksg",
      tag: "TAG / 10",
      year: "2018",
      title: "Kids See Ghosts",
      collab: "with Kid Cudi",
      accent: "#2f6b5e",
      palette: ["#2f6b5e", "#e7e2d6", "#16140f", "#8d8778"],
      song: "Reborn",
      spotifyId: "2Cbm6GtXnMurwRhvefK7sp",
      desc: "A tight, seven-track duo record with Kid Cudi that swapped bravado for open vulnerability — half therapy session, half rock record."
    },
    {
      id: "jik",
      tag: "TAG / 11",
      year: "2019",
      title: "Jesus Is King",
      collab: null,
      accent: "#274b8a",
      palette: ["#274b8a", "#e7e2d6", "#16140f", "#8d8778"],
      song: "Follow God",
      spotifyId: "2QpGZOhTCHHiKmpSO9FW4h",
      desc: "A hard turn into gospel and Christian hip-hop, released alongside a concert film and performances from West's Sunday Service choir."
    },
    {
      id: "donda",
      tag: "TAG / 12",
      year: "2021",
      title: "Donda",
      collab: null,
      accent: "#4a4a4a",
      palette: ["#4a4a4a", "#16140f", "#8d8778", "#e7e2d6"],
      song: "Off the Grid",
      spotifyId: "6LNoArVBBVZzUTUiAX2aKO",
      desc: "Named for his late mother and previewed through massive stadium listening events, turning the rollout itself into performance art."
    },
    {
      id: "donda2",
      tag: "TAG / 13",
      year: "2022",
      title: "Donda 2",
      collab: null,
      accent: "#b8541f",
      palette: ["#b8541f", "#16140f", "#8d8778", "#e7e2d6"],
      song: "City of God",
      spotifyId: "1yJqk94FvUxZ7F3SWhcwHz",
      desc: "Originally sold only through West's own $200 Stem Player device in protest of streaming payouts, before quietly landing on Spotify and Apple Music years later."
    },
    {
      id: "vultures1",
      tag: "TAG / 14",
      year: "2024",
      title: "Vultures 1",
      collab: "with Ty Dolla $ign, as \u00a5$",
      accent: "#9c7a29",
      palette: ["#9c7a29", "#16140f", "#e7e2d6", "#8d8778"],
      song: "Carnival",
      spotifyId: "2McT2fkH0VDqPsbiB9HWPq",
      desc: "Self-released independently after a run of lost partnerships, this gave West his first Hot 100 No. 1 as a lead artist in over a decade."
    },
    {
      id: "vultures2",
      tag: "TAG / 15",
      year: "2024",
      title: "Vultures 2",
      collab: "with Ty Dolla $ign, as \u00a5$",
      accent: "#4b3621",
      palette: ["#4b3621", "#e7e2d6", "#16140f", "#8d8778"],
      song: "Field Trip",
      spotifyId: "7vv89PswQvqGKCGJ1rw5on",
      desc: "The rapid-fire sequel to Vultures 1, drawn from sessions dating back years and finished just months after its predecessor."
    },
    {
      id: "bully",
      tag: "TAG / 16",
      year: "2026",
      title: "Bully",
      collab: null,
      accent: "#7a1f1f",
      palette: ["#7a1f1f", "#16140f", "#8d8778", "#e7e2d6"],
      song: "Father",
      spotifyId: "5pfn68duSmBKo4FhYknOms",
      desc: "West's twelfth solo album, years in the making through multiple scrapped versions, released through his own YZY and Gamma labels."
    }
  ];

  const buttonsWrap = document.getElementById("eraButtons");
  const card = document.getElementById("eraCard");
  const yearEl = document.getElementById("eraYear");
  const hangtagEl = document.getElementById("eraHangtag");
  const titleEl = document.getElementById("eraTitle");
  const collabEl = document.getElementById("eraCollab");
  const descEl = document.getElementById("eraDesc");
  const paletteEl = document.getElementById("eraPalette");
  const audioWrap = document.getElementById("eraAudio");
  const audioFrame = document.getElementById("eraSpotifyFrame");
  const audioEmpty = document.getElementById("eraAudioEmpty");
  const root = document.documentElement;

  function hexToRgb(hex) {
    const clean = hex.replace("#", "");
    const bigint = parseInt(clean, 16);
    return `${(bigint >> 16) & 255}, ${(bigint >> 8) & 255}, ${bigint & 255}`;
  }

  function renderButtons(activeId) {
    buttonsWrap.innerHTML = "";
    eras.forEach((era) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "era-btn" + (era.id === activeId ? " is-active" : "");
      btn.textContent = era.year + " \u2014 " + era.title;
      btn.setAttribute("aria-pressed", era.id === activeId ? "true" : "false");
      btn.addEventListener("click", () => applyEra(era.id));
      buttonsWrap.appendChild(btn);
    });
  }

  function applyEra(id) {
    const era = eras.find((e) => e.id === id);
    if (!era) return;

    // theme color, propagated via CSS variables
    root.style.setProperty("--accent", era.accent);
    root.style.setProperty("--accent-rgb", hexToRgb(era.accent));

    // swap card text with a short fade
    card.classList.add("era-fade");
    window.setTimeout(() => {
      yearEl.textContent = era.year;
      hangtagEl.textContent = era.tag;
      titleEl.textContent = era.title.toUpperCase();
      collabEl.textContent = era.collab ? era.collab.toUpperCase() : "";
      descEl.textContent = era.desc;

      paletteEl.innerHTML = "";
      era.palette.forEach((hex) => {
        const swatch = document.createElement("span");
        swatch.style.background = hex;
        swatch.title = hex;
        paletteEl.appendChild(swatch);
      });

      if (era.spotifyId) {
        audioFrame.src = `https://open.spotify.com/embed/track/${era.spotifyId}?utm_source=generator&theme=0`;
        document.getElementById("eraAudioLabel").textContent = `PREVIEW — "${era.song.toUpperCase()}"`;
        audioWrap.style.display = "block";
        audioEmpty.style.display = "none";
      } else {
        audioFrame.src = "about:blank";
        document.getElementById("eraAudioLabel").textContent = "";
        audioWrap.style.display = "none";
        audioEmpty.style.display = "block";
      }

      card.classList.remove("era-fade");
    }, 180);

    renderButtons(id);
  }

  // clock-style label in the topbar, purely decorative flourish
  function tickClock() {
    const clockEl = document.getElementById("clock");
    if (!clockEl) return;
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    clockEl.textContent = `LIVE / ${hh}:${mm}`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderButtons(eras[0].id);
    applyEra(eras[0].id);
    tickClock();
    window.setInterval(tickClock, 15000);
  });
})();