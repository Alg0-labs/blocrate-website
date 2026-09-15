/**
 * Behaviour for the Blocrate landing page.
 *
 * A direct port of the two inline scripts in the reference page
 * ("Blocrate_Website_v2_live-3.html"), wrapped so React can call it once on
 * mount and tear everything down on unmount. The nav's own behaviour (scrolled
 * hairline, burger, aria-current) lives in BlocrateNav, which the Coming Soon
 * pages share.
 */
const PAGES = ["index", "product", "company", "contact"] as const;

const TITLES: Record<string, string> = {
  index: "Blocrate | Proof of income for people paid in digital dollars",
  product: "Product | Blocrate",
  company: "Company | Blocrate",
  contact: "Contact | Blocrate",
};

export default function initBlocrate(): () => void {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const disposers: Array<() => void> = [];

  // reveal on scroll
  const io = new IntersectionObserver(
    (es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  document.querySelectorAll(".rv, .tl").forEach((el) => io.observe(el));
  disposers.push(() => io.disconnect());

  // rotating word
  const rot = document.querySelector<HTMLElement>(".rot");
  if (rot && !reduce) {
    const ws = [...rot.querySelectorAll("span")];
    let i = 0;
    ws[0].classList.add("on");
    const fit = () => {
      rot.style.width = ws[i].getBoundingClientRect().width + "px";
    };
    fit();
    window.addEventListener("resize", fit);
    const spin = window.setInterval(() => {
      ws[i].classList.remove("on");
      ws[i].classList.add("off");
      const prev = i;
      i = (i + 1) % ws.length;
      ws[i].classList.remove("off");
      ws[i].classList.add("on");
      fit();
      window.setTimeout(() => ws[prev].classList.remove("off"), 600);
    }, 2600);
    disposers.push(() => {
      window.removeEventListener("resize", fit);
      window.clearInterval(spin);
    });
  } else if (rot) {
    rot.querySelector("span")!.classList.add("on");
  }

  // counters
  const fmt = (v: number, dec: number) =>
    v.toLocaleString("en-GB", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  const cio = new IntersectionObserver(
    (es) => {
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        cio.unobserve(el);
        const raw = el.dataset.count!;
        const target = parseFloat(raw),
          dec = (raw.split(".")[1] || "").length,
          pre = el.dataset.pre || "",
          suf = el.dataset.suf || "";
        if (reduce) {
          el.textContent = pre + fmt(target, dec) + suf;
          return;
        }
        const t0 = performance.now(),
          dur = 1500;
        const step = (t: number) => {
          const p = Math.min(1, (t - t0) / dur),
            k = 1 - Math.pow(1 - p, 3);
          el.textContent = pre + fmt(target * k, dec) + suf;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    },
    { threshold: 0.4 },
  );
  document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));
  disposers.push(() => cio.disconnect());

  // live statement: inflows resolve, then the document assembles
  document.querySelectorAll<HTMLElement>(".live").forEach((live) => {
    const flows = [...live.querySelectorAll(".inflow")],
      status = live.querySelector(".status")!,
      doc = live.querySelector(".doc")!;
    const vals = [...doc.querySelectorAll(".row .v span")],
      seal = doc.querySelector(".seal")!;
    let timers: number[] = [];
    const setStatus = (t: string, busy: boolean) => {
      status.innerHTML = (busy ? '<span class="dot"></span>' : "") + t;
    };
    const run = () => {
      timers.forEach(clearTimeout);
      timers = [];
      flows.forEach((f) => f.classList.remove("in", "res"));
      doc.classList.remove("in");
      vals.forEach((v) => v.classList.remove("in"));
      seal.classList.remove("in");
      if (reduce) {
        flows.forEach((f) => f.classList.add("in", "res"));
        doc.classList.add("in");
        vals.forEach((v) => v.classList.add("in"));
        seal.classList.add("in");
        setStatus("14 inflows matched. Statement issued.", false);
        return;
      }
      setStatus("Reading wallet 0x7a3f&hellip;9c21, read only", true);
      flows.forEach((f, i) => {
        timers.push(window.setTimeout(() => f.classList.add("in"), 700 + i * 500));
        timers.push(window.setTimeout(() => f.classList.add("res"), 2100 + i * 550));
      });
      timers.push(window.setTimeout(() => setStatus("Matching inflows to verified payers", true), 2000));
      timers.push(window.setTimeout(() => setStatus("14 inflows matched. Issuing statement", true), 4000));
      timers.push(window.setTimeout(() => doc.classList.add("in"), 4400));
      vals.forEach((v, i) => timers.push(window.setTimeout(() => v.classList.add("in"), 5000 + i * 300)));
      timers.push(
        window.setTimeout(
          () => {
            seal.classList.add("in");
            setStatus("14 inflows matched. Statement issued.", false);
          },
          5000 + vals.length * 300 + 250,
        ),
      );
    };
    const lio = new IntersectionObserver(
      (es, o) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            run();
            o.unobserve(live);
          }
        });
      },
      { threshold: 0.25 },
    );
    lio.observe(live);
    const rp = live.querySelector(".replay");
    if (rp) rp.addEventListener("click", run);
    disposers.push(() => {
      lio.disconnect();
      timers.forEach(clearTimeout);
      if (rp) rp.removeEventListener("click", run);
    });
  });

  // overview tabs
  const tabs = document.querySelector(".tabs");
  if (tabs) {
    const lis = [...tabs.querySelectorAll("li")],
      txt = [...document.querySelectorAll(".ovtxt > div")],
      sats = [...document.querySelectorAll(".orbit .sat i")];
    let cur = 0;
    let auto = 0;
    const show = (n: number) => {
      cur = n;
      lis.forEach((l, i) => l.classList.toggle("on", i === n));
      txt.forEach((t, i) => t.classList.toggle("on", i === n));
      sats.forEach((s, i) => s.classList.toggle("y", i % lis.length === n));
    };
    show(0);
    const clicks = lis.map((l, i) => {
      const onClick = () => {
        show(i);
        window.clearInterval(auto);
      };
      l.addEventListener("click", onClick);
      return () => l.removeEventListener("click", onClick);
    });
    if (!reduce) auto = window.setInterval(() => show((cur + 1) % lis.length), 3600);
    disposers.push(() => {
      window.clearInterval(auto);
      clicks.forEach((off) => off());
    });
  }

  // contact form
  const form = document.querySelector<HTMLFormElement>("form.contact");
  const onSubmit = (ev: Event) => {
    ev.preventDefault();
    const f = new FormData(form!);
    const body = `Name: ${f.get("name")}\nCompany: ${f.get("company")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`;
    window.location.href = `mailto:foundersoffice@blocrate.com?subject=${encodeURIComponent(
      "Blocrate: " + (f.get("company") || "introduction"),
    )}&body=${encodeURIComponent(body)}`;
  };
  if (form) {
    form.addEventListener("submit", onSubmit);
    disposers.push(() => form.removeEventListener("submit", onSubmit));
  }

  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));

  // hash pages: index, product, company, contact
  const mains = [...document.querySelectorAll<HTMLElement>("main[data-page]")];
  const go = () => {
    const h = (location.hash || "#index").slice(1);
    const t = (PAGES as readonly string[]).includes(h) ? h : "index";
    mains.forEach((m) => (m.hidden = m.dataset.page !== t));
    window.scrollTo(0, 0);
    document.title = TITLES[t];
  };
  window.addEventListener("hashchange", go);
  go();
  disposers.push(() => window.removeEventListener("hashchange", go));

  return () => disposers.forEach((d) => d());
}
