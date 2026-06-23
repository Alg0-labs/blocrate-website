// @ts-nocheck
/*
 * Blocrate landing — imperative animation layer.
 * This is a faithful port of the inline <script> blocks from the original
 * self-contained "index 2.html" reference file. The markup is rendered by
 * <BlocrateLanding/>; this module wires it up once the DOM is mounted.
 *
 * Each original script kept its own IIFE / scope, so behaviour is identical.
 * The only additions are cleanup hooks (timers / rAF) returned to React so a
 * route change doesn't leak the flip interval or the canvas render loop.
 */
import { DATA } from "./blocrate-assets-1";
import { ASSETS2_B64 } from "./blocrate-assets-2";

export default function initBlocrate(): () => void {
  const cleanups: Array<() => void> = [];

  // ============================================================ HERO (script A)
  (function () {
    const A = JSON.parse(DATA);
    const brandLogo = document.getElementById("brandLogo");
    if (brandLogo) (brandLogo as HTMLImageElement).src = A.blocrate_black;

    // flip sequence through protocols
    const icons = [A.aave, A.morpho, A.maple];
    const front = document.getElementById("faceFront") as HTMLImageElement;
    const back = document.getElementById("faceBack") as HTMLImageElement;
    const card = document.getElementById("flipCard");
    const stage = document.getElementById("flipStage");
    if (!front || !back || !card || !stage) return;

    let idx = 0;
    let flipped = false;
    front.src = icons[0];
    back.src = icons[1 % icons.length];

    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

    function tick() {
      idx = (idx + 1) % icons.length;
      const next = icons[idx];
      if (flipped) {
        front.src = next;
      } else {
        back.src = next;
      }
      flipped = !flipped;
      card.style.transform = flipped ? "rotateY(180deg)" : "rotateY(0deg)";
      // accent ring settle pulse after the flip lands
      setTimeout(() => {
        stage.classList.add("settle");
        setTimeout(() => stage.classList.remove("settle"), 620);
      }, 760);
    }

    if (!reduce) {
      let flipIv;
      const flipTo = setTimeout(() => {
        flipIv = setInterval(tick, 2200);
        tick();
      }, 1100);
      cleanups.push(() => {
        clearTimeout(flipTo);
        clearInterval(flipIv);
      });
    }

    // ---- floating constellation in the side margins ----
    const FIELD = [
      // top band (above headline) — left & right
      { k: "morpho", x: 80, y: 12, s: 76, lvl: 1, dur: 9.5, tx: "-13px", ty: "10px" },
      { k: "aave", x: 9, y: 16, s: 74, lvl: 1, dur: 8.6, tx: "12px", ty: "-14px" },
      { k: "teal_flower", x: 88, y: 31, s: 56, lvl: 3, dur: 10.5, tx: "-9px", ty: "8px" },
      { k: "grad_star", x: 7, y: 31, s: 56, lvl: 3, dur: 9.8, tx: "10px", ty: "-8px" },
      // left column: compound sits above maple, filling the gap
      { k: "compound", x: 5, y: 47, s: 58, lvl: 2, dur: 10.2, tx: "9px", ty: "10px" },
      { k: "maple", x: 11, y: 64, s: 76, lvl: 1, dur: 10, tx: "10px", ty: "14px" },
      { k: "euler", x: 84, y: 60, s: 72, lvl: 1, dur: 8.9, tx: "-10px", ty: "-12px" },
      { k: "klarna", x: 90, y: 78, s: 60, lvl: 2, dur: 9.3, tx: "-11px", ty: "-9px" },
      { k: "stripe", x: 8, y: 80, s: 64, lvl: 2, dur: 11, tx: "9px", ty: "11px" },
      { k: "yellow_app", x: 91, y: 44, s: 52, lvl: 3, dur: 11.5, tx: "-8px", ty: "-12px" },
    ];
    const field = document.getElementById("field");
    if (!field) return;
    field.innerHTML = "";
    const iconEls = [];
    FIELD.forEach((it, i) => {
      const el = document.createElement("div");
      el.className = "ico lvl" + it.lvl + (reduce ? "" : " float");
      el.style.left = it.x + "%";
      el.style.top = it.y + "%";
      el.style.width = it.s + "px";
      el.style.height = it.s + "px";
      el.style.setProperty("--dur", it.dur + "s");
      var _bx = parseFloat(it.tx),
        _by = parseFloat(it.ty);
      function _rot(x, y, a, s) {
        return [
          ((x * Math.cos(a) - y * Math.sin(a)) * s).toFixed(1) + "px",
          ((x * Math.sin(a) + y * Math.cos(a)) * s).toFixed(1) + "px",
        ];
      }
      var _w2 = _rot(_bx, _by, 2.2 + i * 0.7, 0.85),
        _w3 = _rot(_bx, _by, 4.1 + i * 0.5, 0.7);
      el.style.setProperty("--tx", it.tx);
      el.style.setProperty("--ty", it.ty);
      el.style.setProperty("--tx2", _w2[0]);
      el.style.setProperty("--ty2", _w2[1]);
      el.style.setProperty("--tx3", _w3[0]);
      el.style.setProperty("--ty3", _w3[1]);
      var _ph = -(((i * 1.61803) % 1) * it.dur + (i % 3) * 1.3);
      el.style.animationDelay =
        0.1 + i * 0.06 + "s" + (reduce ? "" : ", " + _ph.toFixed(2) + "s");
      const img = document.createElement("img");
      img.src = A[it.k];
      img.alt = "";
      el.appendChild(img);
      field.appendChild(el);
      iconEls.push(el);
    });
    // subtle pointer parallax (fine pointer only)
    if (!reduce && window.matchMedia("(pointer:fine)").matches) {
      const onMove = (e) => {
        const cx = e.clientX / window.innerWidth - 0.5,
          cy = e.clientY / window.innerHeight - 0.5;
        iconEls.forEach((el, i) => {
          const d = FIELD[i].lvl * (2.4 + ((i * 37) % 5) * 0.45);
          const sx = i % 2 ? 1 : 0.66,
            sy = (i + 1) % 2 ? 1 : 0.74;
          el.style.marginLeft = cx * d * sx + "px";
          el.style.marginTop = cy * d * sy + "px";
        });
      };
      window.addEventListener("mousemove", onMove, { passive: true });
      cleanups.push(() => window.removeEventListener("mousemove", onMove));
    }
  })();

  // ============================================================== S1 (script B)
  (function () {
    const A = JSON.parse(atob(ASSETS2_B64));
    const frameimg = document.getElementById("frameimg");
    if (frameimg) (frameimg as HTMLImageElement).src = A.phone;
    var _mw = document.getElementById("modalwm");
    if (_mw) _mw.src = A.wm_white;
    const cardlogo = document.getElementById("cardlogo");
    if (cardlogo) (cardlogo as HTMLImageElement).src = A.wm_white;
    document
      .querySelectorAll("#showcase .orbit img[data-k]")
      .forEach(function (im: any) {
        if (A[im.dataset.k]) im.src = A[im.dataset.k];
      });
    try {
      (window as any).__WMW = A.wm_white;
      (window as any).__WMB = A.blocrate_black;
    } catch (e) {}
    const lg1 = document.getElementById("lg1");
    const lg2 = document.getElementById("lg2");
    const lg3 = document.getElementById("lg3");
    if (A.aave && lg1) lg1.innerHTML = '<img src="' + A.aave + '"/>';
    if (A.morpho && lg2) lg2.innerHTML = '<img src="' + A.morpho + '"/>';
    if (lg3)
      lg3.innerHTML =
        '<div style="width:100%;height:100%;background:linear-gradient(135deg,#5b8cff,#3d5cff);display:flex;align-items:center;justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="2" y="6" width="20" height="13" rx="2.5"/><line x1="2" y1="10.5" x2="22" y2="10.5"/></svg></div>';

    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

    const COPY = [
      "Your credit shouldn't stop at one app.",
      "Today, the reputation you build on one protocol means nothing on the next — you start over, every time.",
      "[Blocrate] changes that with one [credit] [passport] that travels with you everywhere.",
      "Across [stablecoin] [cards], [BNPL], [loans] and [mortgages], your history follows you.",
      "And the customers you already have offchain? We bring their credit onchain too.",
    ];
    const reveal = document.getElementById("reveal");
    const wordEls = [];
    if (reveal) {
      reveal.innerHTML = "";
      COPY.forEach((line, li) => {
        line.split(" ").forEach((word) => {
          const isKey = word.startsWith("[");
          const clean = word.replace(/[\[\]]/g, "");
          const w = document.createElement("span");
          w.className = "w" + (isKey ? " key" : "");
          w.textContent = clean + " ";
          reveal.appendChild(w);
          wordEls.push(w);
        });
        if (li < COPY.length - 1) {
          const br = document.createElement("span");
          br.innerHTML = "<br><br>";
          reveal.appendChild(br);
        }
      });
    }
    var _INK = [10, 10, 12],
      _DIM = [205, 206, 212],
      _ACC = [75, 59, 255];
    function _mix(a, b, p) {
      return (
        "rgb(" +
        Math.round(a[0] + (b[0] - a[0]) * p) +
        "," +
        Math.round(a[1] + (b[1] - a[1]) * p) +
        "," +
        Math.round(a[2] + (b[2] - a[2]) * p) +
        ")"
      );
    }
    function onScroll() {
      var vh = window.innerHeight,
        low = vh * 0.82,
        high = vh * 0.44,
        span = low - high || 1;
      for (var n = 0; n < wordEls.length; n++) {
        var w = wordEls[n];
        var r = w.getBoundingClientRect();
        var c = r.top + r.height * 0.5;
        var p = (low - c) / span;
        p = p < 0 ? 0 : p > 1 ? 1 : p;
        p = p * p * (3 - 2 * p);
        var key = w.className.indexOf("key") > -1,
          inMark = !!(w.closest && w.closest(".hlmark"));
        w.style.color = _mix(_DIM, key && !inMark ? _ACC : _INK, p);
        if (p > 0.55) {
          w.classList.add("on");
        } else {
          w.classList.remove("on");
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    });

    const showcase = document.getElementById("showcase");
    if (showcase) {
      const ioS = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) showcase.classList.add("in");
          });
        },
        { threshold: 0.2 },
      );
      ioS.observe(showcase);
      cleanups.push(() => ioS.disconnect());
    }

    function scaleUI() {
      const wrap = document.querySelector(".phone .screenwrap") as HTMLElement;
      const ui = document.getElementById("ui");
      if (!wrap || !ui) return;
      const sw = wrap.clientWidth,
        sh = wrap.clientHeight;
      const scale = sw / 430;
      ui.style.transform = "scale(" + scale + ")";
      ui.style.height = sh / scale + "px";
    }
    window.addEventListener("resize", scaleUI, { passive: true });
    window.addEventListener("load", scaleUI);
    setTimeout(scaleUI, 60);
    if (document.fonts) document.fonts.ready.then(scaleUI);
    cleanups.push(() => {
      window.removeEventListener("resize", scaleUI);
      window.removeEventListener("load", scaleUI);
    });

    function drawLoop(canvas) {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      function resize() {
        canvas.width = canvas.clientWidth * dpr;
        canvas.height = canvas.clientHeight * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      resize();
      window.addEventListener("resize", resize, { passive: true });
      let tt = 0;
      let rafId = 0;
      function frame() {
        const w = canvas.clientWidth,
          h = canvas.clientHeight;
        tt += 0.006;
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "#0b0c11";
        ctx.fillRect(0, 0, w, h);
        const cx = w * (0.5 + 0.35 * Math.sin(tt)),
          cy = h * (0.5 + 0.3 * Math.cos(tt * 1.1));
        let g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.7);
        g.addColorStop(0, "rgba(99,84,255,0.55)");
        g.addColorStop(0.4, "rgba(75,59,255,0.18)");
        g.addColorStop(1, "rgba(11,12,17,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
        const cx2 = w * (0.5 + 0.4 * Math.cos(tt * 0.8)),
          cy2 = h * (0.5 + 0.35 * Math.sin(tt * 0.9));
        let g2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, Math.max(w, h) * 0.55);
        g2.addColorStop(0, "rgba(120,200,255,0.3)");
        g2.addColorStop(1, "rgba(11,12,17,0)");
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, w, h);
        ctx.save();
        ctx.translate(w / 2, h / 2);
        const s = Math.min(w, h) * 0.16;
        ctx.strokeStyle = "rgba(255,255,255,0.9)";
        ctx.lineWidth = Math.max(2, s * 0.26);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(-s, -s * 0.2);
        ctx.lineTo(-s * 0.1, s * 0.5);
        ctx.lineTo(s * 0.35, -s * 0.3);
        ctx.lineTo(s, s * 0.45);
        ctx.stroke();
        ctx.restore();
        if (!reduce) rafId = requestAnimationFrame(frame);
      }
      if (reduce) frame();
      else rafId = requestAnimationFrame(frame);
      cleanups.push(() => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("resize", resize);
      });
    }
    drawLoop(document.getElementById("thumbLoop"));

    const modal = document.getElementById("modal");
    var tVid = document.getElementById("trailerVideo") as HTMLVideoElement;
    function openModal() {
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
      if (tVid) {
        try {
          tVid.currentTime = 0;
          var _p = tVid.play();
          if (_p && _p.catch) _p.catch(function () {});
        } catch (e) {}
      }
    }
    function closeModal() {
      modal.classList.remove("open");
      document.body.style.overflow = "";
      if (tVid) {
        try {
          tVid.pause();
        } catch (e) {}
      }
    }
    const trailerBtn = document.getElementById("trailerBtn");
    const modalClose = document.getElementById("modalClose");
    const modalBackdrop = document.getElementById("modalBackdrop");
    if (modal && trailerBtn && modalClose && modalBackdrop) {
      trailerBtn.addEventListener("click", openModal);
      modalClose.addEventListener("click", closeModal);
      modalBackdrop.addEventListener("click", closeModal);
      const onKey = (e) => {
        if (e.key === "Escape") closeModal();
      };
      document.addEventListener("keydown", onKey);
      cleanups.push(() => document.removeEventListener("keydown", onKey));
    }
  })();

  // ===================================================== WHO (marker underline)
  (function () {
    var root = document.getElementById("who");
    if (!root) return;
    var reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

    // prime the marker underline path lengths so it can "draw"
    var hl = root.querySelector(".hl");
    var paths = hl ? hl.querySelectorAll(".hl-line path") : [];
    paths.forEach(function (p: any) {
      var L = p.getTotalLength();
      p.style.strokeDasharray = L;
      p.style.strokeDashoffset = reduce ? 0 : L;
    });
    function draw() {
      paths.forEach(function (p: any) {
        p.style.strokeDashoffset = 0;
      });
    }

    if (reduce) {
      root.querySelectorAll(".reveal-up").forEach(function (el) {
        el.classList.add("in");
      });
      draw();
      return;
    }

    // reveal-up on enter
    var io = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 },
    );
    root.querySelectorAll(".reveal-up").forEach(function (el) {
      io.observe(el);
    });
    cleanups.push(() => io.disconnect());

    // draw the marker underline a beat after the headline is well in view
    if (hl) {
      var io2 = new IntersectionObserver(
        function (es) {
          es.forEach(function (e) {
            if (e.isIntersecting) {
              setTimeout(draw, 260);
              io2.disconnect();
            }
          });
        },
        { threshold: 0.9 },
      );
      io2.observe(hl);
      cleanups.push(() => io2.disconnect());
    }
  })();

  // ====================================================== HLMARK (reading mark)
  (function () {
    var reveal = document.getElementById("reveal");
    if (!reveal) return;
    var targets = "one credit passport that travels with you everywhere".split(" ");
    var ws = [].slice.call(reveal.querySelectorAll(".w"));
    function norm(s) {
      return (s || "").replace(/[^a-z]/gi, "").toLowerCase();
    }
    var start = -1;
    for (var i = 0; i + targets.length <= ws.length; i++) {
      var ok = true;
      for (var j = 0; j < targets.length; j++) {
        if (norm(ws[i + j].textContent) !== norm(targets[j])) {
          ok = false;
          break;
        }
      }
      if (ok) {
        start = i;
        break;
      }
    }
    if (start < 0) return;
    var group = ws.slice(start, start + targets.length);
    var mark = document.createElement("mark");
    mark.className = "hlmark";
    group[0].parentNode.insertBefore(mark, group[0]);
    group.forEach(function (w) {
      mark.appendChild(w);
    });
    var reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    if (reduce) {
      mark.classList.add("lit");
      return;
    }
    function onScroll() {
      if (mark.getBoundingClientRect().top < window.innerHeight * 0.56) {
        mark.classList.add("lit");
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));
  })();

  // ============================================================ ORBIT (showcase)
  (function () {
    var sc = document.getElementById("showcase");
    if (!sc) return;
    var reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    var orbs = [].slice.call(sc.querySelectorAll(".vorb"));
    orbs.forEach(function (o, k) {
      var v = o.querySelector(".vcoin,.vtile,.vchip");
      if (v) v.style.setProperty("--sz", (o.dataset.sz || 60) + "px");
      var lf = parseFloat(o.style.left),
        tp = parseFloat(o.style.top);
      var dx = 0.5 - lf / 100,
        dy = 0.5 - tp / 100,
        L = Math.hypot(dx, dy) || 1,
        dist = 46 + Math.min(70, L * 72);
      o.style.setProperty("--bx", ((dx / L) * dist).toFixed(0) + "px");
      o.style.setProperty("--by", ((dy / L) * dist).toFixed(0) + "px");
      var i = o.querySelector(".vorbI");
      if (i) {
        i.style.setProperty("--dur", (o.dataset.dur || 9) + "s");
        var ang = k * 2.39996,
          amp = 6 + (k % 4) * 2.4;
        i.style.setProperty("--fx", (Math.cos(ang) * amp).toFixed(1) + "px");
        i.style.setProperty("--fy", (Math.sin(ang) * amp - 6).toFixed(1) + "px");
        i.style.setProperty("--fy2", (Math.sin(ang + 1.7) * amp * 0.8 + 7).toFixed(1) + "px");
        i.style.setProperty("--ph", ((-(k * 1.37) % 9) - 0.4).toFixed(2) + "s");
      }
    });
    function pop() {
      orbs.forEach(function (o, k) {
        setTimeout(function () {
          o.classList.add("pop");
        }, 200 + k * 64);
      });
    }
    if (reduce) {
      orbs.forEach(function (o) {
        o.classList.add("pop");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            pop();
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(sc);
    cleanups.push(() => io.disconnect());
    if (window.matchMedia("(pointer:fine)").matches) {
      var pw = sc.querySelector(".phonewrap");
      const onMove = function (e) {
        var r = pw.getBoundingClientRect();
        var cx = (e.clientX - (r.left + r.width / 2)) / r.width,
          cy = (e.clientY - (r.top + r.height / 2)) / r.height;
        orbs.forEach(function (o, k) {
          var d = 8 + (k % 3) * 6;
          o.style.marginLeft = cx * d + "px";
          o.style.marginTop = cy * d + "px";
        });
      };
      window.addEventListener("mousemove", onMove, { passive: true });
      cleanups.push(() => window.removeEventListener("mousemove", onMove));
    }
  })();

  // ================================================================ HOW (steps)
  (function () {
    var root = document.getElementById("how");
    if (!root) return;
    var reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

    // prime connector line + gauge lengths
    root.querySelectorAll(".ln").forEach(function (l: any) {
      var L = l.getTotalLength();
      l.style.setProperty("--L", L);
    });
    var prog = root.querySelector(".gprog"),
      C = 0;
    if (prog) {
      C = 2 * Math.PI * 74;
      prog.style.strokeDasharray = C;
      prog.style.strokeDashoffset = reduce ? C * 0.1 : C;
    }

    function countUp() {
      var el = document.getElementById("gv");
      if (!el) return;
      var target = 810,
        t0 = null,
        dur = 1500;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        var e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * e);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    function go() {
      root.classList.add("go");
      root.querySelectorAll(".reveal-up").forEach(function (e) {
        e.classList.add("in");
      });
      if (prog) prog.style.strokeDashoffset = C * 0.1; // 810/900 = 0.90 fill of the ring
      if (reduce) {
        var el = document.getElementById("gv");
        if (el) el.textContent = "810";
      } else countUp();
    }
    if (reduce) {
      go();
      return;
    }
    var io = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            go();
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(root);
    cleanups.push(() => io.disconnect());
  })();

  // ====================================================== TRUST (accordion)
  (function () {
    var root = document.getElementById("trust");
    if (!root) return;
    var reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

    var rows = [].slice.call(root.querySelectorAll(".row"));
    rows.forEach(function (row: any) {
      var hd = row.querySelector(".rowhd");
      hd.addEventListener("click", function () {
        var open = row.classList.contains("open");
        rows.forEach(function (r: any) {
          r.classList.remove("open");
          var b = r.querySelector(".rowhd");
          if (b) b.setAttribute("aria-expanded", "false");
        });
        if (!open) {
          row.classList.add("open");
          hd.setAttribute("aria-expanded", "true");
        }
      });
    });

    if (reduce) {
      root.querySelectorAll(".reveal-up").forEach(function (e) {
        e.classList.add("in");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.16 },
    );
    root.querySelectorAll(".reveal-up").forEach(function (e) {
      io.observe(e);
    });
    cleanups.push(() => io.disconnect());
  })();

  // =============================================================== CLOSE (cta)
  (function () {
    var root = document.getElementById("close");
    if (!root) return;
    var reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    if (reduce) {
      root.querySelectorAll(".ru").forEach(function (e) {
        e.classList.add("in");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 },
    );
    root.querySelectorAll(".ru").forEach(function (e) {
      io.observe(e);
    });
    cleanups.push(() => io.disconnect());
  })();

  // ============================================================= MARKET (bento)
  (function () {
    var root = document.getElementById("market");
    if (!root) return;
    var reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    if (reduce) {
      root.classList.add("go");
      return;
    }
    var io = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            root.classList.add("go");
            io.disconnect();
          }
        });
      },
      { threshold: 0.14 },
    );
    io.observe(root);
    cleanups.push(() => io.disconnect());
  })();

  // ===================================================== WM-WIRE (wordmarks)
  (function () {
    function s(q, u) {
      if (!u) return;
      var n = document.querySelectorAll(q);
      for (var i = 0; i < n.length; i++) (n[i] as HTMLImageElement).src = u;
    }
    s('img[data-wm="white"]', (window as any).__WMW);
    s('img[data-wm="black"]', (window as any).__WMB);
  })();

  return () => cleanups.forEach((fn) => fn());
}
