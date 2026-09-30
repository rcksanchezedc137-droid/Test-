/* ================= EDIT ME: YOUR DETAILS ================= */
const coupleData = {
  loginUsername: "Babi",
  loginPassword: "Cllj@oct1805",
  togetherSince: "2025-12-01",
  reconnectedSince: "2025-10-18",
  names: { person1: "YOUR_NAME", person2: "THEIR_NAME" },
  reconnectNote: "Sometimes people find their way back to each other when the timing is finally right.",
  // LETTER: pages are separated by a line containing only ---
  letter: `For you Chealsey ko happy 10 months, ❤️

Hiii babiiii ko it's been a while since I made a website like this for you, but I wanted to make something special for us. I hope you like it.
I noticed that I haven't made a gift or something special for you in a while and I didn't want you to feel like it was only a one time thing, I've just been so busy latly and I wanted to make sure that I made something special for you. I hope you like it and I hope it makes you feel special because you are special to me.
and perfectly kanina you mentioned you miss receiving letters from me and nagulat ako kasi I was in the middle of working on this website for you hehehe, so I hope you like it and I hope it makes you feel special because you are special to me. I love you so much and I can't wait to spend time with you again soon.❤️
with that said I hope you enjoy reading and browsing through the website I've made for you. I know you're tired right now but I want you to know how proud I am of you my love, You are so amazing, even when you are tired and stressed you still show up and do your best, It's one of the many things I love about you. Is that whatever happens you keep on pushing yourself and keep on going
so know that I am so proud of you and I love you so much chealsey ko, this is for you. ❤️
---
Can you imagine my love, that we have been together for 10 months already? It feels like just yesterday when we first met and now here we are, still going strong. I am so grateful for every moment we have shared together and I can't wait to see what the future holds for us.
I know that we have had our ups and downs, and that sometimes we tend to hurt each other without meaning to, we also sometimes struggle in communicating our feelings, but despite our misunderstandings I'm gratefule that we choose to stay with each other and work through our issues. I love you so much and I am so grateful to have you in my life. You are my best friend, my partner, and my everything. 
I can't wait to see what the future holds for us and I am excited to continue building our life together.Thank you my love for always being there by my side despite you having battles of you own, you don't fail to show up and check up on me, and know that I'm thankful my love for the time and effort you've spent and have given to me, us, our relationship. Thank you for loving me and for letting me love you
you are my everything and though our recconetion wa not planned, I am so glad that we found our way back to each other. I love you more than words can express and I am so grateful for every moment we have shared together. Here's to many more months and years of love, laughter, and happiness together. Happy 10 months my love ❤️

---
Thank you for being part of my story.

And if I could choose again...

I'll always choose you.

Love,
Migz ❤️`
};

/* ========== EDIT ME: PHOTOS ==========
   Put photos in assets/images/ and set image: "assets/images/photo1.jpg".
   Leave image empty ("") to show a pink placeholder. Add more by copying a block. */
const memories = [
  { image: "Images/pic 1.jpg", date: "October 18, 2025", title: "My Favorite Girl", description: "I love you." },
  { image: "Images/pic 2.jpg", date: "December 1, 2025", title: "My Sweetheart", description: "Beautiful as always." },
  { image: "Images/pic 3.jpg", date: "YOUR DATE", title: "Love You Always", description: "Kisses for you my love" },
  { image: "Images/pic 4.jpg", date: "YOUR DATE", title: "Sweet Baby", description: "My lovely baby" },
  { image: "Images/pic 5.jpg", date: "YOUR DATE", title: "Cutie Smile", description: "I love your bangs babi promise so cutie" },
  { image: "Images/pic 6.jpg", date: "YOUR DATE", title: "Tiny Joy", description: "Smol scrunchies" },
  { image: "Images/pic 7.jpg", date: "YOUR DATE", title: "Perfect Moment", description: "Every moment with you feels special." },
  { image: "Images/pic 8.jpg", date: "YOUR DATE", title: "Brightest Smile", description: "Your smile makes everything brighter." },
  { image: "Images/pic 9.jpg", date: "YOUR DATE", title: "Favorite Memory", description: "One of my favorite memories with you." },
  { image: "Images/pic 10.jpg", date: "YOUR DATE", title: "My Constant", description: "Nothing better than time with you." },
  { image: "Images/pic 11.jpg", date: "YOUR DATE", title: "Beautiful You", description: "You make ordinary days feel beautiful." },
  { image: "Images/pic 12.jpg", date: "YOUR DATE", title: "Little Happiness", description: "A little moment I will always keep." },
  { image: "Images/pic 13.jpg", date: "YOUR DATE", title: "Precious Love", description: "You are precious to me every day." },
  { image: "Images/pic 14.jpg", date: "YOUR DATE", title: "My Wifey", description: "Another memory made with my favorite person." },
  { image: "Images/pic 15.jpg", date: "YOUR DATE", title: "Only You", description: "I would choose you every time." },
  { image: "Images/pic 16.jpg", date: "YOUR DATE", title: "Forever Us", description: "Here is to all the moments still ahead." }
];
/* ================= END OF SETTINGS ================= */

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const fmt = d => new Date(d + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
const crumbs = { login: "Welcome", room: "The Room", memories: "The Room › Our Memories", story: "The Room › Our Story", letter: "The Room › A Letter For You" };

/* ---- optional sounds (generated, no files needed) ---- */
let ac;
function tone(f, d, type = "sine", v = .08) {
  try {
    ac = ac || new AudioContext();
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = type; o.frequency.value = f; g.gain.setValueAtTime(v, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(.001, ac.currentTime + d);
    o.connect(g); g.connect(ac.destination); o.start(); o.stop(ac.currentTime + d);
  } catch (e) {}
}

/* ---- screen transitions ---- */
function show(id) {
  const cur = $(".screen.active");
  cur.classList.add("out");
  setTimeout(() => {
    cur.classList.remove("active", "out");
    $("#" + id).classList.add("active");
    $("#crumb").textContent = crumbs[id];
    $("#nav").hidden = id === "login";
    scrollTo(0, 0);
    if (id === "story") initStory();
  }, 500);
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-go]");
  if (!b) return;
  if (b.classList.contains("door")) {
    b.classList.add("open"); tone(90, .6, "triangle", .2);
    setTimeout(() => { show(b.dataset.go); setTimeout(() => b.classList.remove("open"), 700); }, 900);
  } else show(b.dataset.go);
});

/* ---- login ---- */
$("#loginForm").addEventListener("submit", e => {
  e.preventDefault();
  const card = $("#loginForm");
  if ($("#u").value.trim() === coupleData.loginUsername && $("#p").value === coupleData.loginPassword) {
    $("#err").textContent = ""; card.classList.add("go"); tone(660, .5);
    setTimeout(() => { show("room"); setTimeout(() => card.classList.remove("go"), 800); }, 500);
  } else {
    $("#err").textContent = "This little world is only for us ❤️";
    card.classList.remove("shake"); void card.offsetWidth; card.classList.add("shake");
  }
});

/* ---- music ---- */
const bgm = $("#bgm"), mBtn = $("#music");
function setMusic(on) {
  if (on) bgm.play().then(() => mBtn.textContent = "🎵 Music: ON")
    .catch(() => mBtn.textContent = "🎵 Check Music/Music.mp3");
  else { bgm.pause(); mBtn.textContent = "🎵 Music: OFF"; }
}
mBtn.onclick = () => setMusic(bgm.paused);

/* ---- gallery ---- */
let cur = 0;
const bg = (m, i) => m.image ? `url('${m.image}')` : `linear-gradient(135deg,hsl(${340 + i * 25},55%,80%),hsl(${20 + i * 25},60%,70%))`;
$("#table").innerHTML = memories.map((m, i) =>
  `<div class="pol" data-i="${i}" style="--r:${(i % 2 ? 1 : -1) * (2 + (i * 3) % 4)}deg" tabindex="0">
    <div class="ph"><i style="background-image:${bg(m, i)}"></i></div><b>${m.title}</b></div>`).join("");
function lb(i) {
  cur = (i + memories.length) % memories.length; const m = memories[cur];
  $("#lbImg").style.backgroundImage = bg(m, cur);
  $("#lbT").textContent = m.title; $("#lbP").textContent = m.description;
}
$("#table").addEventListener("click", e => {
  const p = e.target.closest(".pol"); if (!p) return;
  lb(+p.dataset.i); $("#lb").classList.add("on"); tone(1800, .12, "square", .04);
});
$("#lbPrev").onclick = () => lb(cur - 1);
$("#lbNext").onclick = () => lb(cur + 1);
$("#lbX").onclick = () => $("#lb").classList.remove("on");
addEventListener("keydown", e => {
  if (!$("#lb").classList.contains("on")) return;
  if (e.key === "Escape") $("#lb").classList.remove("on");
  if (e.key === "ArrowLeft") lb(cur - 1);
  if (e.key === "ArrowRight") lb(cur + 1);
});

/* ---- story ---- */
function initStory() {
  const days = Math.max(0, Math.floor((Date.now() - new Date(coupleData.togetherSince + "T00:00:00")) / 864e5));
  const reconnectDays = Math.max(0, Math.floor((Date.now() - new Date(coupleData.reconnectedSince + "T00:00:00")) / 864e5));
  $("#tDate").textContent = fmt(coupleData.togetherSince);
  $("#rDate").textContent = fmt(coupleData.reconnectedSince);
  $("#rNote").textContent = coupleData.reconnectNote;
  let n = 0; const step = Math.max(1, Math.ceil(days / 60));
  const t = setInterval(() => { n = Math.min(days, n + step); $("#days").textContent = n; if (n >= days) clearInterval(t); }, 25);
  let rn = 0; const reconnectStep = Math.max(1, Math.ceil(reconnectDays / 60));
  const rt = setInterval(() => { rn = Math.min(reconnectDays, rn + reconnectStep); $("#rDays").textContent = rn; if (rn >= reconnectDays) clearInterval(rt); }, 25);
  const ev = [[fmt(coupleData.reconnectedSince), "We Reconnected"], [fmt(coupleData.togetherSince), "Our Journey Began"], ["Today", "Still Writing Our Story"]];
  $("#tl").innerHTML = ev.map(([d, t]) => `<li><b>${d}</b>${t}</li>`).join("");
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("show"); io.unobserve(x.target); } }), { threshold: .4 });
  $$("#tl li").forEach((li, i) => { li.style.transitionDelay = i * .25 + "s"; io.observe(li); });
}

/* ---- letter ---- */
const pages = coupleData.letter.split(/\n---\n/).map(s => s.trim());
let pg = 0;
function page(i, animate) {
  const paper = $("#paper");
  const draw = () => {
    pg = i; paper.textContent = pages[pg]; $("#pg").textContent = `Page ${pg + 1} of ${pages.length}`;
    $("#prev").disabled = pg === 0; $("#next").disabled = pg === pages.length - 1;
    if (pg === pages.length - 1) {
      const d = document.createElement("div"); d.className = "end";
      d.innerHTML = "<span>❤️</span>Our story isn't over yet..."; paper.appendChild(d);
    }
  };
  if (!animate) return draw();
  paper.classList.add("turn"); tone(300, .15, "sawtooth", .02);
  setTimeout(() => { draw(); paper.classList.remove("turn"); }, 350);
}
$("#openBtn").onclick = () => {
  $("#env").classList.add("open"); $("#openBtn").hidden = true; tone(520, .4);
  document.body.classList.add("soft"); for (let i = 0; i < 25; i++) setTimeout(() => spawn(Math.random() * innerWidth, innerHeight), i * 80);
  if (bgm.paused) setMusic(true);
  setTimeout(() => { $("#envWrap").hidden = true; $("#paperWrap").hidden = false; page(0); }, 1000);
};
$("#prev").onclick = () => page(pg - 1, true);
$("#next").onclick = () => page(pg + 1, true);
$$("#letter .back").forEach(b => b.addEventListener("click", () => {
  document.body.classList.remove("soft");
  setTimeout(() => { $("#envWrap").hidden = false; $("#paperWrap").hidden = true; $("#env").classList.remove("open"); $("#openBtn").hidden = false; }, 900);
}));

/* ---- background: stars, floating hearts, cursor trail ---- */
const cv = $("#fx"), cx = cv.getContext("2d"); let W, H, ps = [];
const stars = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.4 + .3, p: Math.random() * 6 }));
function size() { W = cv.width = innerWidth; H = cv.height = innerHeight; }
size(); addEventListener("resize", size);
function spawn(x, y) { ps.push({ x, y, vx: (Math.random() - .5) * .5, vy: -.4 - Math.random() * .6, l: 1, s: 10 + Math.random() * 12, heart: 1 }); }
addEventListener("pointermove", e => ps.push({ x: e.clientX, y: e.clientY, vx: (Math.random() - .5) * .8, vy: Math.random() * .6, l: 1, s: 2 + Math.random() * 2 }));
setInterval(() => spawn(Math.random() * W, H + 10), 1100);
(function loop(t) {
  cx.clearRect(0, 0, W, H);
  cx.fillStyle = "#f7ecdc";
  stars.forEach(s => { cx.globalAlpha = .3 + .5 * Math.abs(Math.sin(t / 1500 + s.p)); cx.beginPath(); cx.arc(s.x * W, s.y * H, s.r, 0, 6.3); cx.fill(); });
  ps = ps.filter(p => p.l > 0);
  ps.forEach(p => {
    p.x += p.vx; p.y += p.vy; p.l -= p.heart ? .0025 : .03; cx.globalAlpha = Math.max(0, p.l) * (p.heart ? .6 : .9);
    if (p.heart) { cx.font = p.s + "px serif"; cx.fillStyle = "#d9a5a5"; cx.fillText("♥", p.x, p.y); }
    else { cx.fillStyle = "#d4af6a"; cx.beginPath(); cx.arc(p.x, p.y, p.s, 0, 6.3); cx.fill(); }
  });
  requestAnimationFrame(loop);
})(0);
