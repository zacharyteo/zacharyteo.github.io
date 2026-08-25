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
      accent: "#7a1620",
      palette: ["#7a1620", "#caa24a", "#16140f", "#e7e2d6"],
      song: "POWER",
      spotifyId: "2RUFzxyUlI36KKy9Agkqze",
      desc: "Maximalist, orchestral, and self-lacerating in equal measure. Frequently cited by critics as one of the best-reviewed rap albums ever released."
    },
    {
      id: "yeezus",
      tag: "TAG / 06",
      year: "2013",
      title: "Yeezus",
      accent: "#c1121f",
      palette: ["#c1121f", "#16140f", "#8d8778", "#e7e2d6"],
      song: "Black Skinhead",
      spotifyId: "722tgOgdIbNe3BEyLnejw4",
      desc: "Industrial, minimal, and confrontational — stripped-down production over an unmarked red jewel case with no title printed anywhere."
    },
    {
      id: "yeezyseason",
      tag: "TAG / 07",
      year: "2015",
      title: "Yeezy Season",
      accent: "#6b6350",
      palette: ["#6b6350", "#c9c2ab", "#3a362c", "#e7e2d6"],
      song: null,
      spotifyId: null,
      desc: "The adidas Yeezy line launches — military-inspired, monochrome, and stripped of logos. It grows into one of the best-selling sneaker franchises in history."
    },
    {
      id: "donda",
      tag: "TAG / 08",
      year: "2021",
      title: "Donda",
      accent: "#4a4a4a",
      palette: ["#4a4a4a", "#16140f", "#8d8778", "#e7e2d6"],
      song: "Off the Grid",
      spotifyId: "6LNoArVBBVZzUTUiAX2aKO",
      desc: "Named for his late mother and previewed through massive stadium listening events, turning the rollout itself into performance art."
    }
  ];

  const buttonsWrap = document.getElementById("eraButtons");
  const card = document.getElementById("eraCard");
  const yearEl = document.getElementById("eraYear");
  const hangtagEl = document.getElementById("eraHangtag");
  const titleEl = document.getElementById("eraTitle");
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