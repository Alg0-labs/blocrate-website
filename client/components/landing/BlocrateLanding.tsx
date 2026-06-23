import { useEffect, useState } from "react";
import "./blocrate.css";
import initBlocrate from "./blocrate-init";
import BlocrateNav from "./BlocrateNav";
import { useWaitlist } from "@/hooks/use-waitlist";

/**
 * Blocrate landing page.
 *
 * Faithful React port of the self-contained reference design ("index 2.html").
 * - Markup below is the original page markup, converted to JSX (verbatim, just
 *   class -> className, camelCased SVG attrs, inline styles as objects).
 * - All styling lives in ./blocrate.css (extracted unchanged).
 * - All scroll/flip/canvas animations live in ./blocrate-init.ts and are wired
 *   up once on mount via the effect below.
 */
export default function BlocrateLanding() {
  const [accessOpen, setAccessOpen] = useState(false);
  const {
    email,
    showSuccess,
    error,
    isSubmitting,
    handleEmailChange,
    handleJoin,
  } = useWaitlist();

  useEffect(() => {
    const cleanup = initBlocrate();
    return cleanup;
  }, []);

  // lock scroll + allow Escape to close the request-access modal
  useEffect(() => {
    if (!accessOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAccessOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [accessOpen]);

  const openAccess = (e: React.MouseEvent) => {
    e.preventDefault();
    setAccessOpen(true);
  };

  const submitAccess = (e: React.FormEvent) => {
    e.preventDefault();
    handleJoin();
  };

  return (
    <>
        <BlocrateNav />

        <main className="hero">
          <div className="backdrop"></div>
          <div className="field" id="field"></div>
          <div className="veil"></div>
          <div className="flip-stage" id="flipStage">
            <div className="hub-ring"></div>
            <div className="flip-glow"></div>
            <div className="flip-card" id="flipCard">
              <div className="face front"><img id="faceFront" alt="" /></div>
              <div className="face back"><img id="faceBack" alt="" /></div>
            </div>
          </div>

          <span className="pill"><span className="live"></span><span className="full">Now live — the credit layer for onchain lending</span><span className="short">Now live — the credit layer</span></span>
          <h1>The credit bureau<span className="bk"><br /></span> for the stablecoin<span className="bk"><br /></span> economy.</h1>
          <p className="sub">Reading on-chain history across every protocol — portable credit scores, delivered per query.</p>

          <div className="cta-row">
            <button type="button" className="btn btn-primary" onClick={openAccess}>Request access</button>
            <a href="/docs" className="btn btn-ghost">Read the docs
              <svg className="arr" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>

          <div className="trust">
            <div className="trust-label">Built on data from every major lending protocol</div>
            <div className="trust-row">
              <span className="item"><span className="dot"></span>Aave</span>
              <span className="item"><span className="dot"></span>Morpho</span>
              <span className="item"><span className="dot"></span>Maple</span>
              <span className="item"><span className="dot"></span>Compound</span>
              <span className="item"><span className="dot"></span>Spark</span>
            </div>
          </div>
        </main>

      <div id="s1">

        <div className="spacer"></div>

        <section className="reading" id="reading">
          <span className="eyebrow"><span className="bar"></span>Why Blocrate</span>
          <p className="reveal" id="reveal"></p>
          <div className="closer">
            <span>One reputation.</span><span className="dot"></span>
            <span>Every protocol.</span><span className="dot"></span>
            <span>Wherever you go.</span>
          </div>
          <button className="trailer" id="trailerBtn" aria-label="Watch the trailer">
            <span className="thumb">
              <canvas className="loop" id="thumbLoop"></canvas>
              <span className="play"><span><svg width="11" height="13" viewBox="0 0 11 13" fill="#0a0a0c"><path d="M0 0 L11 6.5 L0 13 Z"/></svg></span></span>
            </span>
            <span className="tlabel"><span className="t1">Watch the trailer</span><span className="t2">60 seconds · how it works</span></span>
          </button>
        </section>

        <section className="showcase" id="showcase">
          <div className="aura"></div>
          <div className="dotgrid"></div>
          <p className="lead">Your whole credit story, in one place.</p>
          <p className="leadsub">One passport that follows your customers across every way they borrow onchain.</p>
          <div className="phonewrap">
            <div className="orbit"><div className="vorb" style={{ left: "-30%", top: "5%" }} data-sz="72" data-dur="9.5" data-fy="-15px"><div className="vorbI"><div className="vchip coin"><img data-k="usdc" alt="" /></div></div></div><div className="vorb" style={{ left: "99%", top: "8%" }} data-sz="68" data-dur="8.8" data-fy="13px"><div className="vorbI"><div className="vchip coin"><img data-k="dai" alt="" /></div></div></div><div className="vorb" style={{ left: "-23%", top: "30%" }} data-sz="60" data-dur="10.2" data-fy="12px"><div className="vorbI"><div className="vchip tile"><img data-k="aave" alt="" /></div></div></div><div className="vorb" style={{ left: "103%", top: "33%" }} data-sz="62" data-dur="9.0" data-fy="-13px"><div className="vorbI"><div className="vchip tile"><img data-k="compound" alt="" /></div></div></div><div className="vorb" style={{ left: "-32%", top: "57%" }} data-sz="54" data-dur="10.6" data-fy="11px"><div className="vorbI"><div className="vchip tile"><img data-k="morpho" alt="" /></div></div></div><div className="vorb" style={{ left: "91%", top: "60%" }} data-sz="56" data-dur="9.4" data-fy="-12px"><div className="vorbI"><div className="vchip tile"><img data-k="maple" alt="" /></div></div></div><div className="vorb" style={{ left: "-15%", top: "83%" }} data-sz="62" data-dur="9.8" data-fy="-13px"><div className="vorbI"><div className="vchip coin"><img data-k="usdt" alt="" /></div></div></div><div className="vorb" style={{ left: "101%", top: "86%" }} data-sz="56" data-dur="11" data-fy="10px"><div className="vorbI"><div className="vchip tile"><img data-k="klarna" alt="" /></div></div></div><div className="vorb" style={{ left: "58%", top: "-7%" }} data-sz="52" data-dur="10.8" data-fy="10px"><div className="vorbI"><div className="vchip tile"><img data-k="euler" alt="" /></div></div></div></div>

            <div className="glow"></div>
            <div className="phone">
              <div className="screenwrap">
                <div className="ui" id="ui">
      <div className="status">
            <div className="island"></div>
            <span className="l">3:22</span>
            <span className="r">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="#fff"><rect x="0" y="7" width="3" height="5" rx="1"/><rect x="5" y="5" width="3" height="7" rx="1"/><rect x="10" y="2.5" width="3" height="9.5" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>
              <span style={{ fontSize: "14px", fontWeight: "600", margin: "0 2px" }}>5G</span>
              <svg width="26" height="13" viewBox="0 0 26 13" fill="none"><rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="#fff" opacity="0.5"/><rect x="2" y="2" width="16" height="9" rx="1.8" fill="#fff"/><rect x="24" y="4" width="1.5" height="5" rx="0.75" fill="#fff" opacity="0.5"/></svg>
            </span>
          </div>

          <div className="toolbar">
            <div className="avatar">VA<span className="badge"></span></div>
            <div className="search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>
              Search
            </div>
            <div className="tbtn"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="11" width="4" height="9" rx="1"/><rect x="10" y="6" width="4" height="14" rx="1"/><rect x="17" y="9" width="4" height="11" rx="1"/></svg></div>
            <div className="tbtn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="13" rx="2.5"/><line x1="2" y1="10.5" x2="22" y2="10.5"/></svg></div>
          </div>

          <div className="hero">
            <div className="label">Credit Passport · vas2.eth</div>
            <div className="score">810<span className="max">/900</span></div>
            <div className="pill"><span className="tier"></span>Prime tier</div>
            <div className="delta">↑ 24 pts this month</div>
          </div>

          <div className="dots"><span className="d on"></span><span className="d"></span><span className="d"></span><span className="d"></span></div>

          <div className="actions">
            <div className="action"><div className="circ"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div><span className="lab">Share</span></div>
            <div className="action"><div className="circ"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="21" y1="3" x2="14" y2="10"/><polyline points="8 21 3 21 3 16"/><line x1="3" y1="21" x2="10" y2="14"/></svg></div><span className="lab">Use</span></div>
            <div className="action"><div className="circ"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9 L12 4 L21 9"/><path d="M5 9 V20 H19 V9"/><line x1="3" y1="20" x2="21" y2="20"/></svg></div><span className="lab">Details</span></div>
            <div className="action"><div className="circ"><svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg></div><span className="lab">More</span></div>
          </div>

          <div className="sheet">
            <div className="pcard">
              <div className="sheen"></div>
              <div className="holo"></div>
              <div className="pat"><svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice"><path d="M30 30 L90 80 L30 130"/><path className="ac" d="M85 30 L145 80 L85 130"/><path d="M140 30 L200 80 L140 130"/><path className="ac" d="M195 30 L255 80 L195 130"/><path d="M75 70 L135 120 L75 170"/></svg></div>
              <div className="top">
                <div className="brand">
                  <div className="logo"><img id="cardlogo" style={{ height: "19px" }} alt="Blocrate" /></div>
                  <span className="tg">Credit Passport</span>
                </div>
                <div className="chip"></div>
              </div>
              <div className="mid">
                <div className="holder"><span className="l">Holder</span><span className="n">vas2.eth</span></div>
                <div className="sc"><span className="l">Score</span><span className="v"><span className="n2">810</span><span className="m">/900</span></span></div>
              </div>
            </div>

            <div className="stitle">Recent credit activity</div>
            <div className="list">
              <div className="item">
                <div className="lg" id="lg1"></div>
                <div className="info"><span className="t">Aave · Repaid in full</span><span className="s">Today, 2:14 PM · on time</span></div>
                <div className="amt"><span className="a up">+12 pts</span><span className="b">42 / 42 repaid</span></div>
              </div>
              <div className="item">
                <div className="lg" id="lg2"></div>
                <div className="info"><span className="t">Morpho · Loan opened</span><span className="s">Yesterday · undercollateralised</span></div>
                <div className="amt"><span className="a">$8,500</span><span className="b">limit unlocked</span></div>
              </div>
              <div className="item">
                <div className="lg" id="lg3"></div>
                <div className="info"><span className="t">Stablecoin card · Approved</span><span className="s">12 Jun · no deposit</span></div>
                <div className="amt"><span className="a up">+8 pts</span><span className="b">limit $5,000</span></div>
              </div>
            </div>
          </div>

          <div className="tabs">
            <div className="tab on"><span className="ti"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="13" rx="2.5"/><line x1="3" y1="9" x2="21" y2="9"/></svg></span>Passport</div>
            <div className="tab"><span className="ti"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7"/></svg></span>Score</div>
            <div className="tab"><span className="ti"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7 H17 M17 7 L13 3 M17 7 L13 11"/><path d="M17 17 H7 M7 17 L11 13 M7 17 L11 21"/></svg></span>Activity</div>
            <div className="tab"><span className="ti"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="6" width="18" height="13" rx="2.5"/><line x1="3" y1="10.5" x2="21" y2="10.5"/></svg></span>Cards</div>
            <div className="tab"><span className="ti"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21 c0-4 4-6 8-6 s8 2 8 6"/></svg></span>Profile</div>
          </div>
                </div>
              </div>
              <img className="frameimg" id="frameimg" alt="" />
            </div>
          </div>
        </section>

        <div className="modal" id="modal" role="dialog" aria-modal="true">
          <div className="backdrop" id="modalBackdrop"></div>
          <div className="panel">
            <button className="close" id="modalClose" aria-label="Close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg></button>
            <video className="pvideo" id="trailerVideo" playsInline controls preload="none">
              <source src="/landing.MP4" type="video/mp4" />

              <div className="pinner"><div className="ptitle">Your browser can&rsquo;t play this video.</div><a className="psub" href="/landing.MP4" style={{ color: "#bdb4ff", textDecoration: "underline" }}>Download the trailer (landing.MP4)</a></div>
            </video>
          </div>
        </div>



      </div>
      <section id="how">
        <div className="wbg"></div>
        <div className="wrap">
          <div className="head">
            <span className="eyebrow reveal-up"><span className="bar"></span>How it works</span>
            <h2 className="reveal-up d1">From on-chain history to a score that <span className="hl">travels</span>.</h2>
            <p className="hsub reveal-up d2">Three steps turn everything you've done on-chain into credit you can use anywhere.</p>
          </div>

          <div className="cards">
            
            <article className="card light reveal-up">
              <div className="viz">
                <svg viewBox="0 0 240 200" aria-hidden="true">
                  <line className="ln" x1="44" y1="52" x2="120" y2="108"/>
                  <line className="ln" x1="104" y1="32" x2="120" y2="108"/>
                  <line className="ln" x1="160" y1="32" x2="120" y2="108"/>
                  <line className="ln" x1="212" y1="52" x2="120" y2="108"/>
                  <circle className="pulse" cx="120" cy="108" r="30" fill="none" stroke="rgba(75,59,255,.30)" strokeWidth="1.5"/>
                  <g className="pg"><rect x="32" y="40" width="24" height="24" rx="7" fill="#fff" stroke="#e6e6ec"/><rect x="40" y="48" width="8" height="8" rx="2.5" fill="none" stroke="#8a7bff" strokeWidth="2"/></g>
                  <g className="pg"><rect x="92" y="20" width="24" height="24" rx="7" fill="#fff" stroke="#e6e6ec"/><rect x="100" y="28" width="8" height="8" rx="2.5" fill="none" stroke="#2f6bff" strokeWidth="2"/></g>
                  <g className="pg"><rect x="148" y="20" width="24" height="24" rx="7" fill="#fff" stroke="#e6e6ec"/><rect x="156" y="28" width="8" height="8" rx="2.5" fill="none" stroke="#1aae8f" strokeWidth="2"/></g>
                  <g className="pg"><rect x="200" y="40" width="24" height="24" rx="7" fill="#fff" stroke="#e6e6ec"/><rect x="208" y="48" width="8" height="8" rx="2.5" fill="none" stroke="#e08a2a" strokeWidth="2"/></g>
                  <g className="pg"><circle cx="120" cy="108" r="26" fill="#4b3bff"/><path d="M112 98 L126 108 L112 118" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></g>
                </svg>
              </div>
              <div className="step">Step 01</div>
              <h3>Read</h3>
              <p>We read your full borrowing history across every major lending protocol — Aave, Morpho, Maple and more.</p>
            </article>

            <div className="flow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="14 6 20 12 14 18"/></svg></div>

            
            <article className="card dark reveal-up d1">
              <div className="hsheen"></div>
              <div className="viz">
                <svg viewBox="0 0 240 200" aria-hidden="true">
                  <defs><linearGradient id="howGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8fd9ff"/><stop offset="0.55" stopColor="#a99bff"/><stop offset="1" stopColor="#ffd9a0"/></linearGradient></defs>
                  <circle className="gtrack" cx="120" cy="100" r="74"/>
                  <circle className="gprog" cx="120" cy="100" r="74"/>
                </svg>
                <div className="gnum"><div className="gtop"><span className="v" id="gv">0</span><span className="m">/900</span></div><span className="t">Prime tier</span></div>
              </div>
              <div className="step">Step 02</div>
              <h3>Score</h3>
              <p>It distills into one FICO-style number, 0–900, recalculated in real time as you keep transacting.</p>
            </article>

            <div className="flow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="14 6 20 12 14 18"/></svg></div>

            
            <article className="card light reveal-up d2">
              <div className="viz">
                <svg viewBox="0 0 240 200" aria-hidden="true">
                  <line className="ln" x1="120" y1="100" x2="120" y2="36"/>
                  <line className="ln" x1="120" y1="100" x2="196" y2="100"/>
                  <line className="ln" x1="120" y1="100" x2="120" y2="164"/>
                  <line className="ln" x1="120" y1="100" x2="44" y2="100"/>
                  <g className="pg"><rect x="92" y="24" width="56" height="22" rx="11" fill="#fff" stroke="#e6e6ec"/><text x="120" y="39" textAnchor="middle" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#3a3a44">Card</text></g>
                  <g className="pg"><rect x="166" y="89" width="62" height="22" rx="11" fill="#fff" stroke="#e6e6ec"/><text x="197" y="104" textAnchor="middle" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#3a3a44">Loan</text></g>
                  <g className="pg"><rect x="84" y="154" width="72" height="22" rx="11" fill="#fff" stroke="#e6e6ec"/><text x="120" y="169" textAnchor="middle" fontFamily="Inter" fontSize="10.5" fontWeight="600" fill="#3a3a44">Mortgage</text></g>
                  <g className="pg"><rect x="14" y="89" width="58" height="22" rx="11" fill="#fff" stroke="#e6e6ec"/><text x="43" y="104" textAnchor="middle" fontFamily="Inter" fontSize="11" fontWeight="600" fill="#3a3a44">BNPL</text></g>
                  <g className="pg"><rect x="96" y="84" width="48" height="32" rx="8" fill="#15161d"/><path d="M104 95 L114 100 L104 105" fill="none" stroke="#a99bff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/><text x="129" y="104" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="700" fill="#fff">810</text></g>
                </svg>
              </div>
              <div className="step">Step 03</div>
              <h3>Travel</h3>
              <p>Your score travels with you — to stablecoin cards, BNPL, loans and mortgages, on-chain or off.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="who">
        <div className="wbg"></div>
        <div className="wrap">

          <div className="whead">
            <span className="eyebrow reveal-up"><span className="bar"></span>Who it's for</span>
            <h2 className="reveal-up d1">Built for <span className="hl">both sides<svg className="hl-line" viewBox="0 0 220 18" preserveAspectRatio="none" aria-hidden="true"><path className="bleed" d="M4 11 C44 5,86 15,128 9 S196 6,216 10"/><path className="ink" d="M4 11 C44 5,86 15,128 9 S196 6,216 10"/></svg></span> of onchain credit.</h2>
            <p className="wsub reveal-up d2">Lenders price risk with precision. Borrowers carry one reputation everywhere. The same passport powers both.</p>
          </div>

          <div className="cols">

            
            <div className="col dark reveal-up d2">
              <div className="sheen"></div>
              <div className="wholo"></div>
              <svg className="chev" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <path d="M30 30 L90 80 L30 130"/><path className="ac" d="M85 30 L145 80 L85 130"/>
                <path d="M140 30 L200 80 L140 130"/><path className="ac" d="M195 30 L255 80 L195 130"/>
                <path d="M75 70 L135 120 L75 170"/>
              </svg>

              <div className="khead"><span className="ktag">For protocols &amp; lenders</span><span className="seg"></span></div>
              <div className="ktitle">Price risk with precision.</div>

              <div className="frow">
                <span className="ic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 6 5.5V11c0 4.2 2.7 7.1 6 8.2 3.3-1.1 6-4 6-8.2V5.5L12 3Z"/><path d="M9.2 11.8l2 2 3.6-3.8"/></svg></span>
                <div><div className="ft">Underwrite undercollateralised</div><div className="fd">Lend against proven on-chain reputation — not just locked collateral.</div></div>
              </div>
              <div className="frow">
                <span className="ic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18a8 8 0 0 1 16 0"/><line x1="12" y1="18" x2="16.4" y2="11"/><circle cx="12" cy="18" r="1.5" fill="#b9adff" stroke="none"/></svg></span>
                <div><div className="ft">Price every borrower exactly</div><div className="fd">A real 0–900 score for risk-based pricing on every position.</div></div>
              </div>
              <div className="frow">
                <span className="ic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 8 5 12 9 16"/><polyline points="15 8 19 12 15 16"/></svg></span>
                <div><div className="ft">Integrate in an afternoon</div><div className="fd">One API call per query. Go live the same day, no migration.</div></div>
              </div>
              <div className="frow">
                <span className="ic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg></span>
                <div><div className="ft">We never hold your risk</div><div className="fd">Blocrate scores; you decide. We never touch capital or custody funds.</div></div>
              </div>

              <div className="cfoot"><a href="/docs" className="wbtn ghost-d">Read the docs <svg className="warr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div>
            </div>

            
            <div className="col light reveal-up d3">
              <div className="wgrid"></div>

              <div className="khead"><span className="ktag">For borrowers</span><span className="seg"></span></div>
              <div className="ktitle">Carry your reputation everywhere.</div>

              <div className="frow">
                <span className="ic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="7" y1="14.5" x2="12" y2="14.5"/></svg></span>
                <div><div className="ft">One passport, every app</div><div className="fd">Your history follows you across cards, BNPL, loans and mortgages.</div></div>
              </div>
              <div className="frow">
                <span className="ic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 7.6-1.7"/></svg></span>
                <div><div className="ft">Borrow more, lock less</div><div className="fd">Good standing unlocks undercollateralised credit — free up your capital.</div></div>
              </div>
              <div className="frow">
                <span className="ic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18"/></svg></span>
                <div><div className="ft">Build once, count everywhere</div><div className="fd">Reputation earned on one protocol travels to all the others.</div></div>
              </div>
              <div className="frow">
                <span className="ic"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v9"/><path d="M8 11l4 4 4-4"/><path d="M5 19h14"/></svg></span>
                <div><div className="ft">Bring your offchain credit on</div><div className="fd">Already have a credit history? We bring it onchain with you.</div></div>
              </div>

              <div className="cfoot"><button type="button" onClick={openAccess} className="wbtn primary">Get your passport <svg className="warr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button></div>
            </div>

          </div>
        </div>
      </section>

      <section id="market">
        <div className="wbg"></div>
        <div className="wrap">
          <div className="head">
            <span className="eyebrow"><span className="bar"></span>Who builds on Blocrate</span>
            <h2>One score opens a market for <span className="hl">everyone who lends</span>.</h2>
            <p className="lead">Every company that extends credit has the same first question — who am I lending to? Blocrate answers it in a single API call, so a buy-now-pay-later app, a neo-bank, or a centuries-old lender moving on-chain can underwrite from day one: real limits, no deposit, no cold start, no guesswork.</p>
          </div>

          <div className="bento">
            
            <article className="cell wide d1">
              <div className="viz v-bnpl">
                <div className="vdot"></div><div className="vau"></div><div className="vfloor"></div>
                <div className="glow"></div>
                <div className="pp">
                  <div className="ppholo"></div>
                  <svg className="ppchev" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice"><path d="M30 30 L90 80 L30 130"/><path className="ac" d="M85 30 L145 80 L85 130"/><path d="M140 30 L200 80 L140 130"/><path className="ac" d="M195 30 L255 80 L195 130"/></svg>
                  <div className="ppin">
                    <div className="row" style={{ alignItems: "flex-start" }}><span className="wm"><img className="wmimg" data-wm="white" alt="Blocrate" /></span><span className="chip"></span></div>
                    <div className="row"><div><span className="ttl">Pay in 4</span><div className="v">vas2.eth</div></div><div style={{ textAlign: "right" }}><span className="ttl">Score</span><div className="scn">810<small>/900</small></div></div></div>
                  </div>
                </div>
                <div className="pl">
                  <div className="h"><b>$1,200.00</b><span className="ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Approved</span></div>
                  <div className="tl">
                    <span className="n done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <span className="ln fill d1"></span>
                    <span className="n done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <span className="ln fill d2"></span>
                    <span className="n done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <span className="ln"></span>
                    <span className="n next"></span>
                  </div>
                  <div className="amt"><b>$300</b> × 4 · no credit check</div>
                </div>
                <div className="coin usdc cB"><span>USDC</span></div>
              </div>
              <div className="cap"><div className="tag">Buy now, pay later</div><h3>Approve shoppers in a blink.</h3><p>Split any checkout into payments, underwritten by a real on-chain score instead of a thin, cold-start guess.</p></div>
            </article>

            
            <article className="cell d2">
              <div className="viz v-neo">
                <div className="vdot"></div><div className="vau"></div><div className="vfloor"></div>
                <div className="glow"></div>
                <div className="app">
                  <div className="ah"><span className="av">VA</span><span className="nm">Vas Patel<small>Prime tier</small></span></div>
                  <div className="big"><b>810</b><s>/ 900</s></div>
                  <div className="barX"><i></i></div>
                </div>
              </div>
              <div className="cap"><div className="tag">Neo-banks</div><h3>A credit identity from day one.</h3><p>Give every new user a score from their first transaction.</p></div>
            </article>

            
            <article className="cell d3">
              <div className="viz v-card">
                <div className="vdot"></div><div className="vau"></div><div className="vfloor"></div>
                <div className="glow"></div>
                <div className="pp">
                  <div className="ppholo"></div>
                  <svg className="ppchev" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice"><path d="M30 30 L90 80 L30 130"/><path className="ac" d="M85 30 L145 80 L85 130"/><path d="M140 30 L200 80 L140 130"/></svg>
                  <div className="ppin">
                    <div className="row" style={{ alignItems: "flex-start" }}><span className="wm"><img className="wmimg" data-wm="white" alt="Blocrate" /></span><span className="chip"></span></div>
                    <div className="row"><div><span className="ttl">Holder</span><div className="v">vas2.eth</div></div><div style={{ textAlign: "right" }}><span className="ttl">Limit</span><div className="v">$5,000</div></div></div>
                  </div>
                </div>
                <div className="mpill">No deposit</div>
                <div className="coin dai cC"><span>DAI</span></div>
              </div>
              <div className="cap"><div className="tag">Stablecoin cards</div><h3>Real limits, zero deposit.</h3><p>Issue spending power backed by reputation, not collateral.</p></div>
            </article>

            
            <article className="cell wide d4">
              <div className="viz v-tradfi">
                <div className="vdot"></div><div className="vau"></div>
                <div className="recs">
                  <div className="rec r1"><span className="av"></span><span className="ln"><span></span><span></span></span><span className="bar"></span></div>
                  <div className="rec r2"><span className="av"></span><span className="ln"><span></span><span></span></span><span className="bar"></span></div>
                  <div className="rec r3"><span className="av"></span><span className="ln"><span></span><span></span></span><span className="bar"></span></div>
                </div>
                <div className="wire"><span className="p"></span></div>
                <div className="pp seal">
                  <div className="ppholo"></div>
                  <svg className="ppchev" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice"><path d="M30 30 L90 80 L30 130"/><path className="ac" d="M85 30 L145 80 L85 130"/></svg>
                  <div className="ppin" style={{ padding: "14% 14%" }}><div className="row" style={{ alignItems: "flex-start" }}><span className="wm" style={{ fontSize: "10px" }}><img className="wmimg" data-wm="white" alt="Blocrate" /></span></div><div className="row"><span className="ttl" style={{ fontSize: "6.5px" }}>On-chain</span><div className="scn" style={{ fontSize: "13px" }}>810</div></div></div>
                </div>
              </div>
              <div className="cap"><div className="tag">Traditional finance, on-chain</div><h3>Bring your whole book on-chain.</h3><p>Move your existing customers — and their entire off-chain credit history — on-chain in an afternoon, no migration, no lost reputation.</p></div>
            </article>

            
            <article className="cell d5">
              <div className="viz v-lend">
                <div className="vdot"></div><div className="vau"></div><div className="vfloor"></div>
                <div className="glow"></div>
                <div className="gauge">
                  <svg viewBox="0 0 124 124" aria-hidden="true"><defs><linearGradient id="mgrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8fa0ff"/><stop offset=".5" stopColor="#6354ff"/><stop offset="1" stopColor="#4b3bff"/></linearGradient></defs><circle className="gt" cx="62" cy="62" r="56"/><circle className="gp" cx="62" cy="62" r="56"/></svg>
                  <div className="gn"><b>810</b><s>Prime</s></div>
                </div>
                <div className="apr">APR<b>5.2%</b></div>
              </div>
              <div className="cap"><div className="tag">Lending protocols</div><h3>Price every borrower.</h3><p>Lend undercollateralised, with risk priced to the person.</p></div>
            </article>

            
            <article className="cell d6">
              <div className="viz v-home">
                <div className="vdot"></div><div className="vau"></div><div className="vfloor"></div>
                <div className="glow"></div>
                <div className="house">
                  <svg viewBox="0 0 120 96" fill="none" aria-hidden="true">
                    <path d="M14 50 L60 16 L106 50" stroke="#4b3bff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 46 V84 H98 V46" fill="#fff" stroke="#4b3bff" strokeWidth="4" strokeLinejoin="round"/>
                    <rect x="50" y="60" width="20" height="24" rx="2" fill="#4b3bff"/>
                    <rect x="30" y="56" width="13" height="11" rx="2" fill="#cfd0ff"/>
                    <rect x="77" y="56" width="13" height="11" rx="2" fill="#cfd0ff"/>
                    <path d="M60 16 L60 8" stroke="#b8985a" strokeWidth="4" strokeLinecap="round"/><circle cx="60" cy="7" r="3.5" fill="#e6cd92"/>
                  </svg>
                  <div className="tagk"><span className="d"></span><b>Title · 810 approved</b></div>
                </div>
              </div>
              <div className="cap"><div className="tag">Real-world &amp; mortgages</div><h3>Underwrite real-world loans.</h3><p>Bring mortgages and RWA lending on-chain with a credit basis.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section id="trust">
        <div className="wbg"></div>
        <div className="wrap">
          
          <div className="left">
            <span className="eyebrow reveal-up"><span className="bar"></span>Trust &amp; security</span>
            <h2 className="reveal-up d1">Trusted by design.</h2>
            <p className="lead reveal-up d2">Blocrate is infrastructure, not a counterparty. We turn data your borrowers control into one score — and never touch a dollar of capital, or hold a cent of risk.</p>

            <div className="cardwrap reveal-up d3">
              <div className="glow"></div>
              <div className="card">
                <div className="sheen"></div><div className="tholo"></div>
                <svg className="chev" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  <path d="M30 30 L90 80 L30 130"/><path className="ac" d="M85 30 L145 80 L85 130"/>
                  <path d="M140 30 L200 80 L140 130"/><path className="ac" d="M195 30 L255 80 L195 130"/>
                  <path d="M75 70 L135 120 L75 170"/>
                </svg>
                <div className="pad">
                  <div className="top">
                    <div className="tbk"><span className="wm"><img className="wmimg" data-wm="white" alt="Blocrate" /></span><span className="tg2">Credit Passport</span></div>
                    <div className="chip"></div>
                  </div>
                  <div className="bot">
                    <div className="tbk"><span className="lbl">Holder</span><span className="nm">vas2.eth</span></div>
                    <div className="sc"><span className="lbl">Score</span><span className="scv"><span className="scn">810</span><span className="scm">/900</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="acc">
            <div className="row open reveal-up d1">
              <button className="rowhd" aria-expanded="true">
                <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 5 6v5c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3Z"/><path d="M9.3 11.8l1.9 1.9 3.5-3.7"/></svg></span>
                <span className="rt">Never touches your capital</span><span className="tg"></span>
              </button>
              <div className="bd"><div className="bdI"><p>Blocrate scores; you lend. We never custody funds, hold deposits, or take positions — there's no Blocrate wallet anywhere in the loop.</p></div></div>
            </div>

            <div className="row reveal-up d2">
              <button className="rowhd" aria-expanded="false">
                <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v16M5 8h14"/><path d="M5 8l-3 6a3 3 0 0 0 6 0L5 8Z"/><path d="M19 8l-3 6a3 3 0 0 0 6 0L19 8Z"/></svg></span>
                <span className="rt">Never holds risk</span><span className="tg"></span>
              </button>
              <div className="bd"><div className="bdI"><p>No balance sheet, no book of loans. We're a pure data layer — so our incentives never conflict with the lenders or borrowers we serve.</p></div></div>
            </div>

            <div className="row reveal-up d3">
              <button className="rowhd" aria-expanded="false">
                <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18a8 8 0 0 1 16 0"/><line x1="12" y1="18" x2="16.4" y2="11"/><circle cx="12" cy="18" r="1.4" fill="currentColor" stroke="none"/></svg></span>
                <span className="rt">A FICO-grade model</span><span className="tg"></span>
              </button>
              <div className="bd"><div className="bdI"><p>One transparent, auditable 0–900 model — benchmarked and back-tested against real repayment outcomes, the way traditional credit scoring is.</p></div></div>
            </div>

            <div className="row reveal-up d4">
              <button className="rowhd" aria-expanded="false">
                <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg></span>
                <span className="rt">Privacy-preserving</span><span className="tg"></span>
              </button>
              <div className="bd"><div className="bdI"><p>Scores are computed from on-chain history the borrower consents to share, and delivered per request — never warehoused, never resold.</p></div></div>
            </div>

            <div className="row reveal-up d5">
              <button className="rowhd" aria-expanded="false">
                <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 8 5 12 9 16"/><polyline points="15 8 19 12 15 16"/></svg></span>
                <span className="rt">One audited API</span><span className="tg"></span>
              </button>
              <div className="bd"><div className="bdI"><p>A single, security-audited endpoint. Priced per query, live in an afternoon — with SOC&nbsp;2 and formal model audits on the roadmap.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <div id="close">
        
        <section className="cta">
          <div className="grid"></div>
          <svg className="chev" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <path d="M60 50 L150 150 L60 250"/><path className="ac" d="M150 50 L240 150 L150 250"/>
            <path d="M240 50 L330 150 L240 250"/><path className="ac" d="M330 50 L420 150 L330 250"/>
            <path d="M420 50 L510 150 L420 250"/><path className="ac" d="M510 50 L600 150 L510 250"/>
          </svg>
          <div className="inner">
            <span className="eyebrow ru"><span className="clive"></span>Now onboarding partners</span>
            <h2 className="ru d1">Bring portable credit to your protocol.</h2>
            <p className="csub ru d2">One API call returns a borrower's 0–900 score. Price risk precisely, lend undercollateralised, and bring your offchain customers onchain — live in an afternoon.</p>
            <div className="row ru d3">
              <button type="button" className="cbtn cbtn-primary" onClick={openAccess}>Request access</button>
              <a href="/docs" className="cbtn cbtn-ghost">Read the docs
                <svg className="carr" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
            <div className="note ru d3">No commitment · talk to an engineer, not a sales team</div>
          </div>
        </section>

        
        <footer className="foot">
          <div className="fwrap">
            <div className="ftop">
              <div className="cbrand">
                <span className="wm"><img className="wmimg" data-wm="black" alt="Blocrate" /></span>
                <p className="tl">The credit bureau for the stablecoin economy. One portable score, read from every protocol.</p>
                <div className="soc">
                  <a href="https://x.com/blocrateglobal" target="_blank" rel="noopener noreferrer" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 3H21l-6.5 7.4L22 21h-5.9l-4.6-6-5.3 6H3l7-8L2.5 3h6l4.2 5.5L18.9 3Zm-2.1 16h1.6L7.3 4.7H5.6L16.8 19Z"/></svg></a>
                </div>
              </div>
              <div className="col">
                <h4>Product</h4>
                <a href="#showcase">Credit Passport</a><a href="#who">For protocols</a><a href="#who">For borrowers</a><a href="#market">Who builds on it</a>
              </div>
              <div className="col">
                <h4>Developers</h4>
                <a href="/docs">Docs</a><a href="/docs">API reference</a><a href="/status">Status</a><a href="/integrations">Integrations</a>
              </div>
              <div className="col">
                <h4>Company</h4>
                <a href="#trust">Security</a><a href="/jobs">Careers</a><a href="/blog">Blog</a><a href="/partnership-requests">Contact</a>
              </div>
            </div>
            <div className="fbot">
              <span className="cp">© 2026 Blocrate, Inc. · Privacy · Terms</span>
              <span className="built"><b>Built on data from every major lending protocol</b></span>
            </div>
          </div>
        </footer>
      </div>

      {/* Request-access modal — captures email into the Supabase waitlist */}
      <div
        className={"amodal" + (accessOpen ? " open" : "")}
        role="dialog"
        aria-modal="true"
        aria-hidden={!accessOpen}
      >
        <div className="abackdrop" onClick={() => setAccessOpen(false)} />
        <div className="apanel">
          <button
            type="button"
            className="aclose"
            aria-label="Close"
            onClick={() => setAccessOpen(false)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>

          {showSuccess ? (
            <div className="asuccess">
              <div className="ok">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>You&rsquo;re on the list.</h3>
              <p className="asub">We&rsquo;ll be in touch when access opens up. Thanks for your interest in Blocrate.</p>
            </div>
          ) : (
            <>
              <span className="aeyebrow">Request access</span>
              <h3>Bring portable credit to your protocol.</h3>
              <p className="asub">
                Drop your email and we&rsquo;ll reach out with API access. No
                commitment — you&rsquo;ll talk to an engineer, not a sales team.
              </p>
              <form onSubmit={submitAccess} noValidate>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="you@company.com"
                  aria-label="Email address"
                  autoComplete="email"
                  autoFocus
                />
                <button type="submit" className="asubmit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting…" : "Request access"}
                </button>
              </form>
              {error && <div className="aerr">{error}</div>}
            </>
          )}
        </div>
      </div>
    </>
  );
}
