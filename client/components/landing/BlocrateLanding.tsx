import { useEffect } from "react";
import "./blocrate.css";
import "./blocrate-reset.css";
import initBlocrate from "./blocrate-init";
import BlocrateNav from "./BlocrateNav";
import { MARK, TEAM } from "./blocrate-assets";

/**
 * Blocrate landing page.
 *
 * Faithful React port of the self-contained reference design
 * ("Blocrate_Website_v2_live-3.html").
 * - Markup below is the original page markup, converted to JSX (verbatim, just
 *   class -> className, camelCased SVG attrs, inline styles as objects).
 * - All styling lives in ./blocrate.css (extracted unchanged).
 * - The header lives in ./BlocrateNav so the Coming Soon pages share it.
 * - Reveals, counters, the live statement, the overview tabs, the contact form
 *   and the hash page switching live in ./blocrate-init.ts and are wired up once
 *   on mount below.
 */
export default function BlocrateLanding() {
  useEffect(() => initBlocrate(), []);

  return (
    <>
      <BlocrateNav />
      <main data-page="index">
        <section className="hero">
          <div className="wash" />
          <div className="wrap">
            <div className="eyebrow rv">Proof of income for the stablecoin economy</div>
            <h1 className="rv d1">Proof of income for people paid in <span className="rot"><span>digital dollars.</span><span>euros.</span><span>USDC.</span><span>stablecoins.</span></span></h1>
            <p className="lead rv d2">The payslip and bank statement for money that never touched a bank. Blocrate reads the wallet, identifies the payer and issues the statement a bank accepts.</p>
            <div className="cta-row rv d2">
              <a className="btn" href="mailto:foundersoffice@blocrate.com?subject=Blocrate%3A%20book%20a%20call">Book a call <span className="arr">→</span></a>
              <a className="btn ghost" href="#product">How it works <span className="arr">→</span></a>
            </div>
            <div className="frame live rv d3">
              <button className="replay" type="button">Replay</button>
              <div className="inner">
                <div className="panel">
                  <div className="ph">
                    <b>Wallet</b>
                    <span>0x7a3f…9c21</span>
                  </div>
                  <div className="inflow">
                    <div className="av">AL</div>
                    <div className="who">
                      <span className="name">Acme Labs GmbH</span>
                      <span className="addr">0x9b1e…44d0</span>
                      <small>Monthly salary · Polygon</small>
                    </div>
                    <div className="amt">4,200.00 USDC<small>Verified payer</small></div>
                  </div>
                  <div className="inflow">
                    <div className="av">AL</div>
                    <div className="who">
                      <span className="name">Acme Labs GmbH</span>
                      <span className="addr">0x9b1e…44d0</span>
                      <small>Monthly salary · Polygon</small>
                    </div>
                    <div className="amt">4,200.00 USDC<small>On time</small></div>
                  </div>
                  <div className="inflow">
                    <div className="av">AL</div>
                    <div className="who">
                      <span className="name">Acme Labs GmbH</span>
                      <span className="addr">0x9b1e…44d0</span>
                      <small>Monthly salary · Polygon</small>
                    </div>
                    <div className="amt">4,200.00 USDC<small>On time</small></div>
                  </div>
                  <div className="status" />
                </div>
                <div className="doc" role="figure" aria-label="Sample verified income statement">
                  <div className="head">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.71 62.69">
                      <path d="M11.000 51.686 L40.684 21.148 L49.224 28.695 L69.711 11.000" fill="none" stroke="#111" strokeWidth="11.0" />
                    </svg>
                    <div className="ref">BR-2026-09-1147</div>
                  </div>
                  <div className="ttl">Verified income statement</div>
                  <div className="row">
                    <div className="k">Monthly income</div>
                    <div className="v">
                      <span>€4,200</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="k">Paid by</div>
                    <div className="v">
                      <span>Acme Labs GmbH · verified payer</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="k">History</div>
                    <div className="v">
                      <span>14 months, on time every month</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="k">Wallet age</div>
                    <div className="v">
                      <span>3 years, 2 months</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="k">Source of funds</div>
                    <div className="v">
                      <span>
                        <span className="ver">Verified</span>
                      </span>
                    </div>
                  </div>
                  <div className="foot">
                    <div className="note">Issued by Blocrate · read-only wallet access · no funds held</div>
                    <div className="seal">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="1178.85 640.83 138.66 106.28">
                        <path d="M1211.965 703.593 C1210.857 701.265 1210.047 698.716 1209.554 695.935 C1208.200 688.313 1209.598 681.487 1213.754 675.467 C1217.907 669.447 1223.741 665.769 1231.252 664.435 C1236.373 663.526 1241.105 663.890 1245.444 665.524 C1249.785 667.160 1253.285 669.855 1255.949 673.608 L1270.187 661.569 C1265.580 655.462 1259.509 651.024 1251.974 648.253 C1244.438 645.484 1236.514 644.835 1228.209 646.310 C1215.348 648.594 1205.385 654.797 1198.321 664.914 C1191.253 675.034 1188.854 686.466 1191.118 699.210 C1192.390 706.373 1194.932 712.648 1198.740 718.040 C1203.154 713.227 1207.224 708.073 1211.965 703.593 Z" fill="#231F20" />
                        <path d="M1265.906 704.993 C1264.652 709.368 1262.248 713.144 1258.698 716.322 C1255.146 719.503 1250.875 721.587 1245.888 722.577 C1238.405 724.063 1231.633 722.756 1225.578 718.655 C1223.967 717.565 1222.527 716.342 1221.239 715.005 C1216.885 719.474 1213.095 724.483 1208.943 729.150 C1210.791 730.898 1212.807 732.524 1215.015 734.009 C1225.284 740.927 1236.823 743.114 1249.635 740.570 C1257.911 738.928 1265.057 735.445 1271.072 730.127 C1277.087 724.811 1281.230 718.389 1283.510 710.867 L1265.906 704.993 Z" fill="#231F20" />
                        <path d="M1188.909 732.503 L1233.979 686.137 L1246.944 697.595 L1278.051 670.729" fill="none" stroke="#3626A7" strokeWidth="17" strokeLinecap="butt" strokeLinejoin="miter" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ paddingTop: "20px" }}>
          <div className="wrap">
            <div className="stats rv">
              <div>
                <div className="n" data-count="308" data-pre="$" data-suf="B">$308B</div>
                <div className="c">of stablecoins in circulation. Forty times more than in 2020.</div>
              </div>
              <div>
                <div className="n" data-count="400" data-pre="$" data-suf="B">$400B</div>
                <div className="c">of real payments last year. Double the year before.</div>
              </div>
              <div>
                <div className="n" data-count="40" data-suf="%">40%</div>
                <div className="c">of UK payments to crypto platforms blocked or delayed by banks.</div>
              </div>
              <div>
                <div className="n" data-count="1" data-pre="£" data-suf="B">£1B</div>
                <div className="c">declined at a single UK exchange in one year.</div>
              </div>
            </div>
            <p className="builtfor rv d1">Built for <b>banks</b>, <b>fintechs</b>, <b>exchanges</b>, <b>payroll platforms</b> and <b>lenders</b> who have to answer where the money came from.</p>
          </div>
        </section>
        <section>
          <div className="wrap center">
            <div className="eyebrow rv">The problem</div>
            <h2 className="rv d1" style={{ maxWidth: "16em" }}>Millions of people are now paid in a wallet. The bank cannot see it.</h2>
            <p className="lead measure mt3 rv d2">Remote workers, freelancers, staff at crypto companies. Their salary lands in a digital wallet, not a bank account. The moment they try to use it, one question stops everything: “Where did this money come from?” No payslip, no bank statement, no document a bank accepts. So the money gets blocked, or the answer is no.</p>
          </div>
          <div className="wrap">
            <div className="cards mt6">
              <div className="card rv">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
                </svg>
                <div>
                  <div className="t">And the banks have to check. By law.</div>
                  <div className="d">Every bank, fintech, exchange and lender must verify where money comes from. For income that arrives in a wallet, there is no tool.</div>
                </div>
              </div>
              <div className="card rv d1">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v18M5 8h14M7 16h10" />
                </svg>
                <div>
                  <div className="t">$85B a year on compliance in EMEA.</div>
                  <div className="d">98% of institutions say the cost went up again last year. Today’s tool for checking wallet income is a person reading screenshots.</div>
                </div>
              </div>
              <div className="card rv d2">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 9v4M12 17h.01M10.3 3.9l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.1l-8-14a2 2 0 0 0-3.4 0z" />
                </svg>
                <div>
                  <div className="t">$504M: the price of getting it wrong.</div>
                  <div className="d">OKX’s penalty for anti-money-laundering failures, February 2025. The check is not optional and the cost of skipping it is public.</div>
                </div>
              </div>
            </div>
            <p className="tiny mt2">Sources: LexisNexis Risk Solutions, True Cost of Financial Crime Compliance, EMEA, March 2024. US Department of Justice, February 2025.</p>
          </div>
        </section>
        <section className="band">
          <div className="wrap">
            <div className="eyebrow rv">The product</div>
            <div className="grid">
              <div className="c7">
                <h2 className="rv d1">Blocrate turns a wallet into a verified income statement.</h2>
              </div>
              <div className="c4 o9">
                <p className="lead rv d2">Three steps for the person. One API call for the bank. Minutes, not weeks.</p>
              </div>
            </div>
            <div className="pcards mt6">
              <div className="pcard rv">
                <div className="ill">
                  <svg viewBox="0 0 320 150" fill="none" stroke="#fff" strokeWidth="1.5">
                    <rect x="20" y="40" width="280" height="44" rx="8" strokeOpacity=".5" />
                    <text x="36" y="67" fill="#fff" stroke="none" fontSize="14" fontFamily="Hanken Grotesk">0x7a3f 91c0 b4e2 … 9c21</text>
                    <rect x="240" y="52" width="46" height="20" rx="10" fill="#E6F14A" stroke="none" />
                    <text x="249" y="66" fill="#000" stroke="none" fontSize="10" fontFamily="Hanken Grotesk" fontWeight="600">READ</text>
                    <path d="M20 108h180" strokeOpacity=".25" />
                    <circle cx="20" cy="108" r="3" fill="#E6F14A" stroke="none" />
                    <text x="32" y="112" fill="#fff" fillOpacity=".6" stroke="none" fontSize="11" fontFamily="Hanken Grotesk">No keys. No funds. Read only.</text>
                  </svg>
                </div>
                <div>
                  <div className="n">01</div>
                  <div className="t">Connect a wallet</div>
                  <div className="d">The person shares their wallet address. Read only. Takes a minute.</div>
                </div>
              </div>
              <div className="pcard rv d1">
                <div className="ill">
                  <svg viewBox="0 0 320 150" fill="none" stroke="#fff" strokeWidth="1.5">
                    <g fontFamily="Hanken Grotesk" fontSize="12" fill="#fff" stroke="none">
                      <text x="16" y="34" fillOpacity=".6">0x9b1e…44d0</text>
                      <text x="16" y="79" fillOpacity=".6">0x51aa…0b77</text>
                      <text x="16" y="124" fillOpacity=".6">0xc3d0…e19f</text>
                      <text x="200" y="34">Acme Labs GmbH</text>
                      <text x="200" y="79">Deel payroll</text>
                      <text x="200" y="124">Upwork</text>
                    </g>
                    <path d="M118 30C150 30 150 30 190 30M118 75C150 75 150 75 190 75M118 120C150 120 150 120 190 120" strokeOpacity=".35" />
                    <circle cx="190" cy="30" r="3" fill="#E6F14A" stroke="none" />
                    <circle cx="190" cy="75" r="3" fill="#E6F14A" stroke="none" />
                    <circle cx="190" cy="120" r="3" fill="#E6F14A" stroke="none" />
                  </svg>
                </div>
                <div>
                  <div className="n">02</div>
                  <div className="t">We identify real pay</div>
                  <div className="d">Our engine reads the history and matches each inflow to a verified payer: payroll platforms, employers, client platforms.</div>
                </div>
              </div>
              <div className="pcard rv d2">
                <div className="ill">
                  <svg viewBox="0 0 320 150" fill="none" stroke="#fff" strokeWidth="1.5">
                    <rect x="70" y="14" width="180" height="122" rx="6" fill="#fff" stroke="none" />
                    <g stroke="#111" strokeOpacity=".9">
                      <path d="M88 42h70M88 62h144M88 80h144M88 98h144" />
                    </g>
                    <g fill="#111" fontFamily="Hanken Grotesk" fontSize="9" stroke="none">
                      <text x="88" y="36" fontWeight="600">Verified income statement</text>
                      <text x="88" y="120" fillOpacity=".5">Issued by Blocrate</text>
                    </g>
                    <circle cx="222" cy="114" r="12" fill="#3626A7" stroke="none" />
                    <path d="M216 114l4 4 8-8" stroke="#fff" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <div className="n">03</div>
                  <div className="t">The bank gets a statement</div>
                  <div className="d">Amount, regularity, payer, wallet age. Delivered by API or PDF, with an audit trail.</div>
                </div>
              </div>
            </div>
            <p className="lead mt4 rv">We never hold, move or lend money. <span className="ink2">We only verify.</span></p>
          </div>
        </section>
        <section>
          <div className="wrap">
            <div className="eyebrow rv">Overview</div>
            <div className="grid">
              <div className="c8">
                <h2 className="rv d1">Designed to be used by <span className="acc">compliance teams.</span></h2>
                <p className="lead mt2 measure rv d2">A verification layer that fits the onboarding flow you already run. Nothing to custody, nothing to license, nothing to explain to the regulator twice.</p>
              </div>
            </div>
            <div className="ov mt6">
              <ul className="tabs rv">
                <li>Read-only access</li>
                <li>Payer identification</li>
                <li>Regularity and history</li>
                <li>The statement</li>
                <li>Audit trail</li>
              </ul>
              <div className="orbitwrap rv d1">
                <div className="orbit">
                  <div className="ring" />
                  <div className="ring r2" />
                  <div className="ring r3" />
                  <div className="sat">
                    <i />
                    <i className="p2" />
                  </div>
                  <div className="sat r2">
                    <i />
                    <i className="p3" />
                  </div>
                  <div className="sat r3">
                    <i />
                    <i className="p4" />
                  </div>
                  <div className="core">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.71 62.69">
                      <path d="M11.000 51.686 L40.684 21.148 L49.224 28.695 L69.711 11.000" fill="none" stroke="#111" strokeWidth="11.0" />
                    </svg>
                  </div>
                </div>
                <div className="ovtxt">
                  <div>
                    <div className="t">Read-only access</div>
                    <div className="d">The person grants a view of the wallet, never control of it. We hold no keys and no funds, so there is nothing to custody and nothing to lose.</div>
                  </div>
                  <div>
                    <div className="t">Payer identification</div>
                    <div className="d">Each inflow is matched to a verified payer, from payroll platforms to employers to client platforms. A hex string becomes a name a compliance officer can file.</div>
                  </div>
                  <div>
                    <div className="t">Regularity and history</div>
                    <div className="d">How much, how often, for how long, and how many months were missed. Measured from the chain, not declared by the applicant.</div>
                  </div>
                  <div>
                    <div className="t">The statement</div>
                    <div className="d">Monthly income, payer, history, wallet age, source of funds. One document, by API into your flow or as a PDF for the file.</div>
                  </div>
                  <div>
                    <div className="t">Audit trail</div>
                    <div className="d">Every statement carries the evidence path behind it, so the decision can be defended to an auditor or a regulator later.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ paddingTop: "0" }}>
          <div className="wrap">
            <div className="eyebrow rv">Who it is for</div>
            <div className="grid">
              <div className="c8">
                <h2 className="rv d1">One statement. Five customers.</h2>
                <p className="lead mt2 measure rv d2">Everyone who has to answer “where did this money come from?” or “how much does this person earn?”</p>
              </div>
            </div>
            <div className="cards mt6">
              <div className="card rv">
                <div>
                  <div className="t">Banks and e-money firms</div>
                  <div className="d">Accept the deposits they block today.</div>
                </div>
              </div>
              <div className="card rv d1">
                <div>
                  <div className="t">Fintechs and neobanks</div>
                  <div className="d">Onboard and lend to customers who earn in stablecoins.</div>
                </div>
              </div>
              <div className="card rv d2">
                <div>
                  <div className="t">Exchanges</div>
                  <div className="d">The source-of-funds check the rules now require.</div>
                </div>
              </div>
              <div className="card rv">
                <div>
                  <div className="t">Payroll and payout platforms</div>
                  <div className="d">Their workers stop getting blocked at the bank.</div>
                </div>
              </div>
              <div className="card rv d1">
                <div>
                  <div className="t">Lenders</div>
                  <div className="d">Underwrite income they cannot see today.</div>
                </div>
              </div>
              <div className="card yel rv d2">
                <div>
                  <div className="t">And the worker finally gets a yes.</div>
                  <div className="d">Verified in minutes. Accepted. The money keeps moving and everyone can prove it.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <div className="wrap">
            <div className="eyebrow rv">The law</div>
            <div className="grid">
              <div className="c8">
                <h2 className="rv d1">The rules now demand exactly what we produce.</h2>
                <p className="lead mt2 rv d2">Five deadlines, one question behind all of them.</p>
              </div>
            </div>
            <div className="mt6">
              <div className="tl">
                <div className="stage">
                  <svg viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true">
                    <line className="axis" x1="6" y1="210" x2="994" y2="210" />
                    <line x1="35.1" y1="210" x2="35.1" y2="216" stroke="rgba(0,0,0,.3)" vectorEffect="non-scaling-stroke" />
                    <line x1="383.8" y1="210" x2="383.8" y2="216" stroke="rgba(0,0,0,.3)" vectorEffect="non-scaling-stroke" />
                    <line x1="732.5" y1="210" x2="732.5" y2="216" stroke="rgba(0,0,0,.3)" vectorEffect="non-scaling-stroke" />
                    <g className="today">
                      <line x1="593.0" y1="200" x2="593.0" y2="290" stroke="#3626A7" vectorEffect="non-scaling-stroke" />
                    </g>
                    <g className="ev" style={{ transitionDelay: "0.50s" }}>
                      <line x1="6.0" y1="198" x2="6.0" y2="180" stroke="rgba(0,0,0,.3)" vectorEffect="non-scaling-stroke" />
                    </g>
                    <g className="ev" style={{ transitionDelay: "0.72s" }}>
                      <line x1="558.1" y1="198" x2="558.1" y2="180" stroke="rgba(0,0,0,.3)" vectorEffect="non-scaling-stroke" />
                    </g>
                    <g className="ev" style={{ transitionDelay: "0.94s" }}>
                      <line x1="616.2" y1="222" x2="616.2" y2="244" stroke="rgba(0,0,0,.3)" vectorEffect="non-scaling-stroke" />
                    </g>
                    <g className="ev" style={{ transitionDelay: "1.16s" }}>
                      <line x1="906.8" y1="198" x2="906.8" y2="180" stroke="rgba(0,0,0,.3)" vectorEffect="non-scaling-stroke" />
                    </g>
                    <g className="ev" style={{ transitionDelay: "1.38s" }}>
                      <line x1="994.0" y1="222" x2="994.0" y2="244" stroke="rgba(0,0,0,.3)" vectorEffect="non-scaling-stroke" />
                    </g>
                  </svg>
                  <div className="ev" style={{ position: "absolute", left: "0.60%", top: "50%", width: "10px", height: "10px", margin: "-5px 0 0 -5px", borderRadius: "50%", background: "#111", border: "1.5px solid #111", transitionDelay: "0.50s" }} />
                  <div className="ev" style={{ position: "absolute", left: "55.81%", top: "50%", width: "10px", height: "10px", margin: "-5px 0 0 -5px", borderRadius: "50%", background: "#111", border: "1.5px solid #111", transitionDelay: "0.72s" }} />
                  <div className="ev" style={{ position: "absolute", left: "61.62%", top: "50%", width: "10px", height: "10px", margin: "-5px 0 0 -5px", borderRadius: "50%", background: "#111", border: "1.5px solid #111", transitionDelay: "0.94s" }} />
                  <div className="ev" style={{ position: "absolute", left: "90.68%", top: "50%", width: "10px", height: "10px", margin: "-5px 0 0 -5px", borderRadius: "50%", background: "#fff", border: "1.5px solid #111", transitionDelay: "1.16s" }} />
                  <div className="ev" style={{ position: "absolute", left: "99.40%", top: "50%", width: "10px", height: "10px", margin: "-5px 0 0 -5px", borderRadius: "50%", background: "#fff", border: "1.5px solid #111", transitionDelay: "1.38s" }} />
                  <div className="yr" style={{ left: "3.51%", top: "calc(50% + 14px)" }}>2025</div>
                  <div className="yr" style={{ left: "38.38%", top: "calc(50% + 14px)" }}>2026</div>
                  <div className="yr" style={{ left: "73.25%", top: "calc(50% + 14px)" }}>2027</div>
                  <div className="tdy today" style={{ left: "59.30%", top: "calc(50% + 78px)" }}>TODAY</div>
                  <div className="blk l" style={{ left: "0.60%", bottom: "calc(50% + 34px)", transitionDelay: "0.70s" }}>
                    <div className="dt">Dec 2024</div>
                    <div className="lab">EU Travel Rule</div>
                    <div className="ds">Every crypto transfer must carry who sent it.</div>
                  </div>
                  <div className="blk l" style={{ left: "55.81%", bottom: "calc(50% + 34px)", transitionDelay: "0.92s" }}>
                    <div className="dt">Jul 2026</div>
                    <div className="lab">MiCA transition ends</div>
                    <div className="ds">Every crypto firm in the EU must be licensed and supervised.</div>
                  </div>
                  <div className="blk l" style={{ left: "61.62%", top: "calc(50% + 40px)", transitionDelay: "1.14s" }}>
                    <div className="dt">Sep 2026</div>
                    <div className="lab">UK FCA gateway opens</div>
                    <div className="ds">UK crypto firms start applying for authorisation.</div>
                  </div>
                  <div className="blk r" style={{ right: "9.32%", bottom: "calc(50% + 34px)", transitionDelay: "1.36s" }}>
                    <div className="dt">Jul 2027</div>
                    <div className="lab">EU AML Regulation</div>
                    <div className="ds">New rulebook, plus AMLA, a new EU anti-money-laundering authority.</div>
                  </div>
                  <div className="blk r" style={{ right: "0.60%", top: "calc(50% + 40px)", transitionDelay: "1.58s" }}>
                    <div className="dt">Oct 2027</div>
                    <div className="lab">UK crypto regime live</div>
                    <div className="ds">Full FCA rules apply to every UK crypto business.</div>
                  </div>
                </div>
                <div className="list">
                  <div className="it">
                    <div className="dt">Dec 2024</div>
                    <div>
                      <div className="lab">EU Travel Rule</div>
                      <div className="ds">Every crypto transfer must carry who sent it.</div>
                    </div>
                  </div>
                  <div className="it">
                    <div className="dt">Jul 2026</div>
                    <div>
                      <div className="lab">MiCA transition ends</div>
                      <div className="ds">Every crypto firm in the EU must be licensed and supervised.</div>
                    </div>
                  </div>
                  <div className="it">
                    <div className="dt">Sep 2026</div>
                    <div>
                      <div className="lab">UK FCA gateway opens</div>
                      <div className="ds">UK crypto firms start applying for authorisation.</div>
                    </div>
                  </div>
                  <div className="it">
                    <div className="dt">Jul 2027</div>
                    <div>
                      <div className="lab">EU AML Regulation</div>
                      <div className="ds">New rulebook, plus AMLA, a new EU anti-money-laundering authority.</div>
                    </div>
                  </div>
                  <div className="it">
                    <div className="dt">Oct 2027</div>
                    <div>
                      <div className="lab">UK crypto regime live</div>
                      <div className="ds">Full FCA rules apply to every UK crypto business.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt3 rv">Every one of them forces the same question: <b>“Where did this money come from?”</b></p>
            <p className="tiny mt1">Regulation (EU) 2023/1113. ESMA statement on MiCA transitional periods, Apr 2026. FCA PS26/9, 30 Jun 2026. Regulation (EU) 2024/1624.</p>
          </div>
        </section>
        <section>
          <div className="wrap">
            <div className="eyebrow rv">The moment</div>
            <div className="grid">
              <div className="c8">
                <h2 className="rv d1">This summer, Europe switched on.</h2>
                <p className="lead mt2 measure rv d2">Every one of these payments will need to be proven to a bank.</p>
              </div>
            </div>
            <div className="news mt6">
              <div className="rv">
                <div className="dt">26 Aug 2026</div>
                <div className="t">Revolut</div>
                <div className="d">Launched EURR, a euro stablecoin, inside an app with 80M customers. 16M of them already use crypto.</div>
              </div>
              <div className="rv d1">
                <div className="dt">June 2026</div>
                <div className="t">Deel</div>
                <div className="d">The payroll company behind 40,000 businesses and 1.5M workers launched its own payroll stablecoin. Live in 80+ countries.</div>
              </div>
              <div className="rv d2">
                <div className="dt">H2 2026</div>
                <div className="t">Ten banks</div>
                <div className="d">ING, UniCredit, CaixaBank and seven other European banks are issuing a euro stablecoin through a joint venture, Qivalis.</div>
              </div>
              <div className="rv d3">
                <div className="dt">2026</div>
                <div className="t">Rise</div>
                <div className="d">$1.37B of payroll processed for contractors. More than half of it withdrawn as stablecoins.</div>
              </div>
            </div>
            <p className="tiny mt2">Sources: CoinDesk, 26 Aug 2026. Stripe newsroom and The Defiant, Jun and Aug 2026. Ledger Insights and CaixaBank, 2025. Rise Q1 2026 Stablecoin Payroll Report.</p>
          </div>
        </section>
        <section style={{ paddingTop: "0" }}>
          <div className="wrap">
            <div className="grid">
              <div className="c4">
                <div className="eyebrow rv">FAQ</div>
                <h2 className="rv d1">Common questions.</h2>
                <p className="lead mt2 rv d2">Something else on your mind? <a href="#contact" className="acc">Talk to us</a>.</p>
              </div>
              <div className="c7 o6">
                <div className="faq rv d1">
                  <details>
                    <summary>Do you hold, move or lend money?</summary>
                    <div className="a">No. Blocrate takes read-only access to a wallet the person chooses to share. We never hold keys or funds, never move anything and never lend. We only verify.</div>
                  </details>
                  <details>
                    <summary>What does the bank actually receive?</summary>
                    <div className="a">A verified income statement: monthly income, the payer named and verified, history and regularity, wallet age, and a source-of-funds verdict. Delivered by API into your onboarding flow or as a PDF, with the audit trail behind it.</div>
                  </details>
                  <details>
                    <summary>How is this different from a wallet risk score?</summary>
                    <div className="a">Risk tools flag a wallet and walk away. They will not say whose salary it is or put their name behind it. Blocrate identifies the payer and issues a document a compliance team can file.</div>
                  </details>
                  <details>
                    <summary>Do you need a licence to operate?</summary>
                    <div className="a">Not to start. Blocrate is a verification service, not a bank, a lender or a custodian. We fit inside the checks you already have to run.</div>
                  </details>
                  <details>
                    <summary>How long does a check take?</summary>
                    <div className="a">Minutes. The person shares the address, the engine reads the history and matches inflows to verified payers, and the statement is issued.</div>
                  </details>
                  <details>
                    <summary>Where are you based?</summary>
                    <div className="a">London. A UK entity, Europe first, with India through a partner.</div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="close">
          <div className="bloom" />
          <div className="wrap">
            <div className="grid">
              <div className="c8">
                <h2 className="rv">The money keeps moving. Everyone can prove it.</h2>
                <p className="lead mt2 rv d1 measure">See how Blocrate fits into your onboarding flow. Live walkthrough, no commitment.</p>
                <div className="cta-row rv d2">
                  <a className="btn" href="mailto:foundersoffice@blocrate.com?subject=Blocrate%3A%20book%20a%20call">Book a call <span className="arr">→</span></a>
                  <a className="btn ghost" href="#product">See the product <span className="arr">→</span></a>
                </div>
              </div>
            </div>
            <img className="mark" src={MARK} alt="" width="796" height="595" />
          </div>
        </section>
      </main>
      <main data-page="product" hidden>
        <section className="hero sub">
          <div className="wash" />
          <div className="wrap">
            <div className="eyebrow rv">Product</div>
            <h1 className="rv d1">A wallet in. <span className="acc">A statement out.</span></h1>
            <p className="lead rv d2">Read the wallet. Identify the payer. Issue the statement a bank accepts. Minutes, not weeks.</p>
            <div className="cta-row rv d2">
              <a className="btn" href="mailto:foundersoffice@blocrate.com?subject=Blocrate%3A%20book%20a%20call">Book a call <span className="arr">→</span></a>
            </div>
            <div className="frame live rv d3">
              <button className="replay" type="button">Replay</button>
              <div className="inner">
                <div className="panel">
                  <div className="ph">
                    <b>Wallet</b>
                    <span>0x7a3f…9c21</span>
                  </div>
                  <div className="inflow">
                    <div className="av">AL</div>
                    <div className="who">
                      <span className="name">Acme Labs GmbH</span>
                      <span className="addr">0x9b1e…44d0</span>
                      <small>Monthly salary · Polygon</small>
                    </div>
                    <div className="amt">4,200.00 USDC<small>Verified payer</small></div>
                  </div>
                  <div className="inflow">
                    <div className="av">AL</div>
                    <div className="who">
                      <span className="name">Acme Labs GmbH</span>
                      <span className="addr">0x9b1e…44d0</span>
                      <small>Monthly salary · Polygon</small>
                    </div>
                    <div className="amt">4,200.00 USDC<small>On time</small></div>
                  </div>
                  <div className="inflow">
                    <div className="av">AL</div>
                    <div className="who">
                      <span className="name">Acme Labs GmbH</span>
                      <span className="addr">0x9b1e…44d0</span>
                      <small>Monthly salary · Polygon</small>
                    </div>
                    <div className="amt">4,200.00 USDC<small>On time</small></div>
                  </div>
                  <div className="status" />
                </div>
                <div className="doc" role="figure" aria-label="Sample verified income statement">
                  <div className="head">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.71 62.69">
                      <path d="M11.000 51.686 L40.684 21.148 L49.224 28.695 L69.711 11.000" fill="none" stroke="#111" strokeWidth="11.0" />
                    </svg>
                    <div className="ref">BR-2026-09-1147</div>
                  </div>
                  <div className="ttl">Verified income statement</div>
                  <div className="row">
                    <div className="k">Monthly income</div>
                    <div className="v">
                      <span>€4,200</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="k">Paid by</div>
                    <div className="v">
                      <span>Acme Labs GmbH · verified payer</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="k">History</div>
                    <div className="v">
                      <span>14 months, on time every month</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="k">Wallet age</div>
                    <div className="v">
                      <span>3 years, 2 months</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="k">Source of funds</div>
                    <div className="v">
                      <span>
                        <span className="ver">Verified</span>
                      </span>
                    </div>
                  </div>
                  <div className="foot">
                    <div className="note">Issued by Blocrate · read-only wallet access · no funds held</div>
                    <div className="seal">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="1178.85 640.83 138.66 106.28">
                        <path d="M1211.965 703.593 C1210.857 701.265 1210.047 698.716 1209.554 695.935 C1208.200 688.313 1209.598 681.487 1213.754 675.467 C1217.907 669.447 1223.741 665.769 1231.252 664.435 C1236.373 663.526 1241.105 663.890 1245.444 665.524 C1249.785 667.160 1253.285 669.855 1255.949 673.608 L1270.187 661.569 C1265.580 655.462 1259.509 651.024 1251.974 648.253 C1244.438 645.484 1236.514 644.835 1228.209 646.310 C1215.348 648.594 1205.385 654.797 1198.321 664.914 C1191.253 675.034 1188.854 686.466 1191.118 699.210 C1192.390 706.373 1194.932 712.648 1198.740 718.040 C1203.154 713.227 1207.224 708.073 1211.965 703.593 Z" fill="#231F20" />
                        <path d="M1265.906 704.993 C1264.652 709.368 1262.248 713.144 1258.698 716.322 C1255.146 719.503 1250.875 721.587 1245.888 722.577 C1238.405 724.063 1231.633 722.756 1225.578 718.655 C1223.967 717.565 1222.527 716.342 1221.239 715.005 C1216.885 719.474 1213.095 724.483 1208.943 729.150 C1210.791 730.898 1212.807 732.524 1215.015 734.009 C1225.284 740.927 1236.823 743.114 1249.635 740.570 C1257.911 738.928 1265.057 735.445 1271.072 730.127 C1277.087 724.811 1281.230 718.389 1283.510 710.867 L1265.906 704.993 Z" fill="#231F20" />
                        <path d="M1188.909 732.503 L1233.979 686.137 L1246.944 697.595 L1278.051 670.729" fill="none" stroke="#3626A7" strokeWidth="17" strokeLinecap="butt" strokeLinejoin="miter" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap">
            <div className="eyebrow rv">How it works</div>
            <div className="grid">
              <div className="c7">
                <h2 className="rv d1">Three steps. One API call.</h2>
              </div>
            </div>
            <div className="pcards mt6">
              <div className="pcard rv">
                <div className="ill">
                  <svg viewBox="0 0 320 150" fill="none" stroke="#fff" strokeWidth="1.5">
                    <rect x="20" y="40" width="280" height="44" rx="8" strokeOpacity=".5" />
                    <text x="36" y="67" fill="#fff" stroke="none" fontSize="14" fontFamily="Hanken Grotesk">0x7a3f 91c0 b4e2 … 9c21</text>
                    <rect x="240" y="52" width="46" height="20" rx="10" fill="#E6F14A" stroke="none" />
                    <text x="249" y="66" fill="#000" stroke="none" fontSize="10" fontFamily="Hanken Grotesk" fontWeight="600">READ</text>
                    <path d="M20 108h180" strokeOpacity=".25" />
                    <circle cx="20" cy="108" r="3" fill="#E6F14A" stroke="none" />
                    <text x="32" y="112" fill="#fff" fillOpacity=".6" stroke="none" fontSize="11" fontFamily="Hanken Grotesk">No keys. No funds. Read only.</text>
                  </svg>
                </div>
                <div>
                  <div className="n">01</div>
                  <div className="t">Connect a wallet</div>
                  <div className="d">The person shares their wallet address. Read only: we never take keys, never move funds, never hold anything.</div>
                </div>
              </div>
              <div className="pcard rv d1">
                <div className="ill">
                  <svg viewBox="0 0 320 150" fill="none" stroke="#fff" strokeWidth="1.5">
                    <g fontFamily="Hanken Grotesk" fontSize="12" fill="#fff" stroke="none">
                      <text x="16" y="34" fillOpacity=".6">0x9b1e…44d0</text>
                      <text x="16" y="79" fillOpacity=".6">0x51aa…0b77</text>
                      <text x="16" y="124" fillOpacity=".6">0xc3d0…e19f</text>
                      <text x="200" y="34">Acme Labs GmbH</text>
                      <text x="200" y="79">Deel payroll</text>
                      <text x="200" y="124">Upwork</text>
                    </g>
                    <path d="M118 30C150 30 150 30 190 30M118 75C150 75 150 75 190 75M118 120C150 120 150 120 190 120" strokeOpacity=".35" />
                    <circle cx="190" cy="30" r="3" fill="#E6F14A" stroke="none" />
                    <circle cx="190" cy="75" r="3" fill="#E6F14A" stroke="none" />
                    <circle cx="190" cy="120" r="3" fill="#E6F14A" stroke="none" />
                  </svg>
                </div>
                <div>
                  <div className="n">02</div>
                  <div className="t">We identify real pay</div>
                  <div className="d">Each inflow is matched to a verified payer. Regularity, amounts and wallet age are measured, not declared.</div>
                </div>
              </div>
              <div className="pcard rv d2">
                <div className="ill">
                  <svg viewBox="0 0 320 150" fill="none" stroke="#fff" strokeWidth="1.5">
                    <rect x="70" y="14" width="180" height="122" rx="6" fill="#fff" stroke="none" />
                    <g stroke="#111" strokeOpacity=".9">
                      <path d="M88 42h70M88 62h144M88 80h144M88 98h144" />
                    </g>
                    <g fill="#111" fontFamily="Hanken Grotesk" fontSize="9" stroke="none">
                      <text x="88" y="36" fontWeight="600">Verified income statement</text>
                      <text x="88" y="120" fillOpacity=".5">Issued by Blocrate</text>
                    </g>
                    <circle cx="222" cy="114" r="12" fill="#3626A7" stroke="none" />
                    <path d="M216 114l4 4 8-8" stroke="#fff" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <div className="n">03</div>
                  <div className="t">The bank gets a statement</div>
                  <div className="d">Amount, regularity, payer, wallet age, source of funds. API into your flow, or a PDF your compliance team can file.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="wrap">
            <div className="eyebrow rv">The statement</div>
            <div className="grid">
              <div className="c8">
                <h2 className="rv d1">What a bank actually receives.</h2>
              </div>
            </div>
            <div className="ledger two mt6 rv d1">
              <div className="row">
                <div className="k">Monthly income</div>
                <div className="a">Verified inflows, normalised to a monthly figure.</div>
              </div>
              <div className="row">
                <div className="k">Paid by</div>
                <div className="a">The payer, named and verified, not a hex string.</div>
              </div>
              <div className="row">
                <div className="k">History</div>
                <div className="a">How long, how regular, how many missed months.</div>
              </div>
              <div className="row">
                <div className="k">Wallet age</div>
                <div className="a">A wallet opened three years ago is not a wallet opened last week.</div>
              </div>
              <div className="row">
                <div className="k">Source of funds</div>
                <div className="a">The verdict, with the evidence behind it available on request.</div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <div className="wrap">
            <div className="eyebrow rv">What changes</div>
            <div className="grid">
              <div className="c8">
                <h2 className="rv d1">What changes when Blocrate exists.</h2>
              </div>
            </div>
            <div className="ledger mt6 rv d1">
              <div className="row" style={{ padding: "10px 0" }}>
                <div className="h" />
                <div className="h">Today</div>
                <div className="h acc" style={{ color: "var(--acc)" }}>With Blocrate</div>
              </div>
              <div className="row">
                <div className="k">The worker</div>
                <div className="a">Blocked, or asked for screenshots.</div>
                <div className="b">Verified in minutes. Accepted.</div>
              </div>
              <div className="row">
                <div className="k">The bank or fintech</div>
                <div className="a">A manual review, or a decline.</div>
                <div className="b">One API call, with an audit trail.</div>
              </div>
              <div className="row">
                <div className="k">The lender</div>
                <div className="a">Cannot see the income. Says no.</div>
                <div className="b">Underwrites a customer it could not before.</div>
              </div>
              <div className="row">
                <div className="k">The payroll platform</div>
                <div className="a">Workers churn when banks block them.</div>
                <div className="b">Workers keep getting paid this way.</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="wrap">
            <div className="eyebrow rv">Why nobody else does this</div>
            <div className="grid">
              <div className="c8">
                <h2 className="rv d1">Nobody issues this statement today.</h2>
              </div>
            </div>
            <div className="grid mt6">
              <div className="c8 o2 rv d1">
                <div className="quad">
                  <div>
                    <div className="t">Plaid, Truv, Argyle, Equifax Work Number</div>
                    <div className="d">Verify salaries from banks and payroll. The moment pay lands in a wallet, they go blind.</div>
                  </div>
                  <div>
                    <div className="t"><svg xmlns="http://www.w3.org/2000/svg" viewBox="1178.85 640.83 138.66 106.28"><path d="M1211.965 703.593 C1210.857 701.265 1210.047 698.716 1209.554 695.935 C1208.200 688.313 1209.598 681.487 1213.754 675.467 C1217.907 669.447 1223.741 665.769 1231.252 664.435 C1236.373 663.526 1241.105 663.890 1245.444 665.524 C1249.785 667.160 1253.285 669.855 1255.949 673.608 L1270.187 661.569 C1265.580 655.462 1259.509 651.024 1251.974 648.253 C1244.438 645.484 1236.514 644.835 1228.209 646.310 C1215.348 648.594 1205.385 654.797 1198.321 664.914 C1191.253 675.034 1188.854 686.466 1191.118 699.210 C1192.390 706.373 1194.932 712.648 1198.740 718.040 C1203.154 713.227 1207.224 708.073 1211.965 703.593 Z" fill="#231F20" /><path d="M1265.906 704.993 C1264.652 709.368 1262.248 713.144 1258.698 716.322 C1255.146 719.503 1250.875 721.587 1245.888 722.577 C1238.405 724.063 1231.633 722.756 1225.578 718.655 C1223.967 717.565 1222.527 716.342 1221.239 715.005 C1216.885 719.474 1213.095 724.483 1208.943 729.150 C1210.791 730.898 1212.807 732.524 1215.015 734.009 C1225.284 740.927 1236.823 743.114 1249.635 740.570 C1257.911 738.928 1265.057 735.445 1271.072 730.127 C1277.087 724.811 1281.230 718.389 1283.510 710.867 L1265.906 704.993 Z" fill="#231F20" /><path d="M1188.909 732.503 L1233.979 686.137 L1246.944 697.595 L1278.051 670.729" fill="none" stroke="#231F20" strokeWidth="17" strokeLinecap="butt" strokeLinejoin="miter" /></svg>Blocrate</div>
                    <div className="d">Reads the wallet. Identifies the payer. Signs the statement a bank accepts.</div>
                  </div>
                  <div>
                    <div className="t">Sumsub, CoinTracking</div>
                    <div className="d">Collect what the user uploads. Nothing verified, nothing a bank will accept.</div>
                  </div>
                  <div>
                    <div className="t">Chainalysis, Elliptic, TRM · Cred Protocol, Spectral</div>
                    <div className="d">Score wallet risk and walk away. None will say whose salary it is, or put their name behind it.</div>
                  </div>
                </div>
                <div className="axl">
                  <span>Does not read wallets</span>
                  <span>Reads wallets</span>
                </div>
              </div>
            </div>
            <div className="cards mt6">
              <div className="card rv">
                <div>
                  <div className="t">What we do that they will not</div>
                  <div className="d">Put our name on wallet income and hand the bank a document it can file.</div>
                </div>
              </div>
              <div className="card rv d1">
                <div>
                  <div className="t">Their flaw</div>
                  <div className="d">Bureaus cannot see wallets. Chain tools see wallets but will not vouch.</div>
                </div>
              </div>
              <div className="card rv d2">
                <div>
                  <div className="t">Why it compounds</div>
                  <div className="d">Every check adds a verified payer to the registry. The registry is the moat.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap">
            <div className="grid">
              <div className="c5">
                <div className="eyebrow rv">Posture</div>
                <h2 className="rv d1">What we never do.</h2>
              </div>
              <div className="c6 o7">
                <div className="ledger two rv d1">
                  <div className="row">
                    <div className="k">No custody</div>
                    <div className="a">Read-only wallet access. We never hold keys or funds.</div>
                  </div>
                  <div className="row">
                    <div className="k">No lending</div>
                    <div className="a">We do not lend, so we have no stake in the answer.</div>
                  </div>
                  <div className="row">
                    <div className="k">No licence to start</div>
                    <div className="a">A verification service, not a financial institution. We start where you are.</div>
                  </div>
                  <div className="row">
                    <div className="k">Audit trail</div>
                    <div className="a">Every statement carries the evidence path behind it, for your compliance file.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid mt6">
              <div className="c8">
                <div className="eyebrow rv">Where this goes</div>
                <h3 className="rv d1" style={{ fontSize: "var(--h2)" }}>Every check builds the file. The file becomes the bureau.</h3>
                <p className="lead mt2 measure rv d2">Who pays whom, how much, how often, for how long: a registry of verified payers that compounds with every check. A credit file and score for people the bureaus cannot see.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="close">
          <div className="bloom" />
          <div className="wrap">
            <div className="grid">
              <div className="c8">
                <h2 className="rv">See it run on your flow.</h2>
                <p className="lead mt2 rv d1 measure">A live walkthrough on your own onboarding, no commitment.</p>
                <div className="cta-row rv d2">
                  <a className="btn" href="mailto:foundersoffice@blocrate.com?subject=Blocrate%3A%20book%20a%20call">Book a call <span className="arr">→</span></a>
                  <a className="btn ghost" href="#contact">Contact <span className="arr">→</span></a>
                </div>
              </div>
            </div>
            <img className="mark" src={MARK} alt="" width="796" height="595" />
          </div>
        </section>
      </main>
      <main data-page="company" hidden>
        <section className="hero sub">
          <div className="wash" />
          <div className="wrap">
            <div className="eyebrow rv">Company</div>
            <h1 className="rv d1">Built by people who know <span className="acc">the rules and the rails.</span></h1>
            <p className="lead rv d2">Blocrate is a UK company, London based, Europe first, with India through a partner. We build the layer that lets a regulated institution accept, onboard and underwrite people whose income never touched a bank.</p>
          </div>
        </section>
        <section>
          <div className="wrap">
            <div className="grid">
              <div className="c5">
                <div className="eyebrow rv">Why we exist</div>
                <h2 className="rv d1">Stablecoins became money. The paperwork did not follow.</h2>
              </div>
              <div className="c6 o7">
                <p className="lead rv d1">$7B of digital dollars in 2020. $308B today. Real payments, not trading, doubled last year to $400B. Revolut, Deel and ten European banks launched euro stablecoins this summer.</p>
                <p className="ink2 mt2 measure rv d2">Every one of those payments lands in a wallet, and every one of them will one day need to be proven to a bank. We started Blocrate to be the document that gets that person a yes.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap">
            <div className="grid">
              <div className="c5">
                <div className="eyebrow rv">How we work</div>
                <h2 className="rv d1">Verify first. Score later.</h2>
                <p className="lead mt2 rv d2">The playbook the bureaus ran.</p>
              </div>
              <div className="c6 o7">
                <div className="ledger two rv d1">
                  <div className="row">
                    <div className="k">Verify income</div>
                    <div className="a">Banks and fintechs pay us to check stablecoin income, today.</div>
                  </div>
                  <div className="row">
                    <div className="k">Build the record</div>
                    <div className="a">Who pays whom, how much, how often, for how long. A registry of verified payers.</div>
                  </div>
                  <div className="row">
                    <div className="k">Lenders pull the file</div>
                    <div className="a">A credit file and score for people the bureaus cannot see. The credit bureau for the stablecoin economy.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="wrap">
            <div className="eyebrow rv">Team</div>
            <div className="grid">
              <div className="c8">
                <h2 className="rv d1">Team of nine. Three verticals.</h2>
                <p className="lead mt2 measure rv d2">Product, engineering and credit logic. Nine people, clear ownership.</p>
              </div>
            </div>
            <div className="team mt6">
              <div className="person rv">
                <img src={TEAM.harnoor_singh} alt="Harnoor Singh" width="64" height="64" loading="lazy" />
                <div>
                  <div className="n">Harnoor Singh</div>
                  <div className="r">Founder and CEO</div>
                  <div className="b">Law, King's College London. Ex Covington & Burling, ex Barclays.</div>
                </div>
              </div>
              <div className="person rv">
                <img src={TEAM.udayan_sajdeh} alt="Udayan Sajdeh" width="64" height="64" loading="lazy" />
                <div>
                  <div className="n">Udayan Sajdeh</div>
                  <div className="r">Co-founder, CTO</div>
                  <div className="b">Computer Science, University of Waterloo.</div>
                </div>
              </div>
              <div className="person rv">
                <img src={TEAM.vibhu_dixit} alt="Vibhu Dixit" width="64" height="64" loading="lazy" />
                <div>
                  <div className="n">Vibhu Dixit</div>
                  <div className="r">Co-founder, Data</div>
                  <div className="b">Data Engineer, Benefi Global.</div>
                </div>
              </div>
              <div className="person rv">
                <img src={TEAM.jay_liang} alt="Jay Liang" width="64" height="64" loading="lazy" />
                <div>
                  <div className="n">Jay Liang</div>
                  <div className="r">Product</div>
                  <div className="b">Banking Law, Bristol.</div>
                </div>
              </div>
              <div className="person rv">
                <img src={TEAM.subah_malik} alt="Subah Malik" width="64" height="64" loading="lazy" />
                <div>
                  <div className="n">Subah Malik</div>
                  <div className="r">Credit logic</div>
                  <div className="b">Actuarial Analyst, Deloitte.</div>
                </div>
              </div>
              <div className="person rv">
                <img src={TEAM.valentine_vasile} alt="Valentine Vasile" width="64" height="64" loading="lazy" />
                <div>
                  <div className="n">Valentine Vasile</div>
                  <div className="r">Credit logic</div>
                  <div className="b">Quant Risk Modeller.</div>
                </div>
              </div>
              <div className="person rv">
                <img src={TEAM.anton_pryimuk} alt="Anton Pryimuk" width="64" height="64" loading="lazy" />
                <div>
                  <div className="n">Anton Pryimuk</div>
                  <div className="r">Engineering</div>
                  <div className="b">Consultant, GSK.</div>
                </div>
              </div>
              <div className="person rv">
                <img src={TEAM.suhail_ahmed} alt="Suhail Ahmed" width="64" height="64" loading="lazy" />
                <div>
                  <div className="n">Suhail Ahmed</div>
                  <div className="r">Engineering</div>
                  <div className="b">Senior Product Manager, Benefi Global.</div>
                </div>
              </div>
              <div className="person rv">
                <img src={TEAM.mateusz_adamski} alt="Mateusz Adamski" width="64" height="64" loading="lazy" />
                <div>
                  <div className="n">Mateusz Adamski</div>
                  <div className="r">Engineering</div>
                  <div className="b">Google.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="close">
          <div className="bloom" />
          <div className="wrap">
            <div className="grid">
              <div className="c8">
                <h2 className="rv">Working on this too? Talk to us.</h2>
                <p className="lead mt2 rv d1 measure">Banks, fintechs, payout platforms, lenders, and people who want to build this with us.</p>
                <div className="cta-row rv d2">
                  <a className="btn" href="mailto:foundersoffice@blocrate.com?subject=Blocrate%3A%20book%20a%20call">Book a call <span className="arr">→</span></a>
                  <a className="btn ghost" href="mailto:foundersoffice@blocrate.com">Email us <span className="arr">→</span></a>
                </div>
              </div>
            </div>
            <img className="mark" src={MARK} alt="" width="796" height="595" />
          </div>
        </section>
      </main>
      <main data-page="contact" hidden>
        <section className="hero sub">
          <div className="wash" />
          <div className="wrap">
            <div className="eyebrow rv">Contact</div>
            <h1 className="rv d1">Talk to us.</h1>
            <p className="lead rv d2">Banks, fintechs, exchanges, payroll and payout platforms, lenders. If you have to answer “where did this money come from?”, we should talk.</p>
          </div>
        </section>
        <section style={{ paddingTop: "20px" }}>
          <div className="wrap">
            <div className="grid" style={{ alignItems: "start" }}>
              <div className="c4 rv">
                <div className="cards" style={{ gridTemplateColumns: "1fr" }}>
                  <div className="card" style={{ minHeight: "0" }}>
                    <div>
                      <div className="t">Email</div>
                      <div className="d">
                        <a href="mailto:foundersoffice@blocrate.com">foundersoffice@blocrate.com</a>
                      </div>
                    </div>
                  </div>
                  <div className="card" style={{ minHeight: "0" }}>
                    <div>
                      <div className="t">WhatsApp</div>
                      <div className="d">
                        <a href="https://wa.me/447385818607">+44 7385 818607</a>
                      </div>
                    </div>
                  </div>
                  <div className="card" style={{ minHeight: "0" }}>
                    <div>
                      <div className="t">Social</div>
                      <div className="d"><a href="https://x.com/blocrateglobal">X @blocrateglobal</a> · <a href="https://www.linkedin.com/company/blocrate">LinkedIn</a></div>
                    </div>
                  </div>
                  <div className="card" style={{ minHeight: "0" }}>
                    <div>
                      <div className="t">Office</div>
                      <div className="d">London, United Kingdom</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="c7 o6 rv d1">
                <form className="contact form">
                  <div className="field">
                    <label htmlFor="n">Name</label>
                    <input id="n" name="name" required autoComplete="name" />
                  </div>
                  <div className="field">
                    <label htmlFor="c">Company</label>
                    <input id="c" name="company" autoComplete="organization" />
                  </div>
                  <div className="field">
                    <label htmlFor="e">Email</label>
                    <input id="e" name="email" type="email" required autoComplete="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="m">What are you trying to verify?</label>
                    <textarea id="m" name="message" />
                  </div>
                  <div className="cta-row">
                    <button className="btn" type="submit">Send <span className="arr">→</span></button>
                    <span className="small ink3" style={{ alignSelf: "center" }}>Opens in your mail client. No data is stored on this site.</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap">
          <div className="top">
            <div>
              <a className="logo" href="#index">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="634.49 606.40 670.29 138.71" role="img" aria-label="Blocrate">
                  <defs>
                    <linearGradient id="bar2" gradientUnits="userSpaceOnUse" x1="1188.9" y1="732.5" x2="1278.05" y2="670.73">
                      <stop offset="0.000" stopColor="#e0ef4c" />
                      <stop offset="0.067" stopColor="#9ad97a" />
                      <stop offset="0.133" stopColor="#4ec0ad" />
                      <stop offset="0.200" stopColor="#02a8df" />
                      <stop offset="0.267" stopColor="#2aaae6" />
                      <stop offset="0.333" stopColor="#56aceb" />
                      <stop offset="0.400" stopColor="#81aef0" />
                      <stop offset="0.467" stopColor="#9da7f0" />
                      <stop offset="0.533" stopColor="#8184dc" />
                      <stop offset="0.600" stopColor="#635fc6" />
                      <stop offset="0.667" stopColor="#453ab1" />
                      <stop offset="0.733" stopColor="#463a9c" />
                      <stop offset="0.933" stopColor="#bcc15e" />
                      <stop offset="1.000" stopColor="#e2ec4a" />
                    </linearGradient>
                  </defs>
                  <path d="M688.503 716.244 C693.125 716.244 697.026 714.597 700.206 711.302 C703.384 708.008 704.974 703.994 704.974 699.253 C704.974 694.515 703.384 690.497 700.206 687.204 C697.026 683.908 693.125 682.261 688.503 682.261 L656.429 682.261 L656.429 716.244 L688.503 716.244 Z M684.689 632.330 L656.429 632.330 L656.429 664.231 L684.689 664.231 C689.080 664.231 692.778 662.700 695.785 659.636 C698.789 656.575 700.292 652.789 700.292 648.280 C700.292 643.773 698.789 639.989 695.785 636.925 C692.778 633.864 689.080 632.330 684.689 632.330 Z M707.921 672.033 C713.236 674.807 717.397 678.622 720.404 683.476 C723.408 688.331 724.912 693.937 724.912 700.294 C724.912 710.235 721.385 718.498 714.336 725.086 C707.285 731.675 698.673 734.968 688.503 734.968 L636.490 734.968 L636.490 613.606 L684.689 613.606 C694.628 613.606 703.037 616.813 709.915 623.227 C716.790 629.642 720.231 637.648 720.231 647.241 C720.231 657.760 716.126 666.024 707.921 672.033 Z" fill="#FFFFFF" />
                  <path d="M737.219 608.404H755.943V734.968H737.219Z" fill="#FFFFFF" />
                  <path d="M914.577 737.222 C901.515 737.222 890.621 732.830 881.896 724.046 C873.168 715.263 868.807 704.454 868.807 691.624 C868.807 678.680 873.168 667.844 881.896 659.116 C890.621 650.391 901.515 646.026 914.577 646.026 C923.013 646.026 930.701 648.050 937.636 652.095 C944.571 656.141 949.772 661.573 953.239 668.391 L937.116 677.754 C935.149 673.593 932.175 670.328 928.187 667.958 C924.200 665.590 919.605 664.404 914.404 664.404 C906.776 664.404 900.388 667.004 895.246 672.206 C890.102 677.407 887.531 683.882 887.531 691.624 C887.531 699.369 890.102 705.841 895.246 711.042 C900.388 716.244 906.776 718.844 914.404 718.844 C919.489 718.844 924.083 717.631 928.187 715.203 C932.288 712.776 935.382 709.541 937.463 705.494 L953.586 714.683 C949.886 721.618 944.571 727.110 937.636 731.153 C930.701 735.197 923.013 737.222 914.577 737.222 Z" fill="#FFFFFF" />
                  <path d="M1043.292 711.648 C1048.495 716.909 1055.022 719.536 1062.885 719.536 C1070.745 719.536 1077.275 716.909 1082.475 711.648 C1087.678 706.390 1090.277 699.773 1090.277 691.797 C1090.277 683.820 1087.678 677.206 1082.475 671.945 C1077.275 666.687 1070.745 664.057 1062.885 664.057 C1055.022 664.057 1048.495 666.687 1043.292 671.945 C1038.092 677.206 1035.490 683.820 1035.490 691.797 C1035.490 699.773 1038.092 706.390 1043.292 711.648 Z M1090.277 648.453 L1109.003 648.453 L1109.003 735.141 L1090.277 735.141 L1090.277 722.658 C1083.227 732.483 1073.114 737.395 1059.936 737.395 C1048.030 737.395 1037.859 732.974 1029.422 724.130 C1020.985 715.289 1016.767 704.512 1016.767 691.797 C1016.767 678.966 1020.985 668.161 1029.422 659.375 C1037.859 650.594 1048.030 646.198 1059.936 646.198 C1073.114 646.198 1083.227 651.052 1090.277 660.762 L1090.277 648.453 Z" fill="#FFFFFF" />
                  <path d="M1175.403 666.483 L1153.906 666.483 L1153.906 708.094 C1153.906 711.678 1154.713 714.248 1156.333 715.809 C1157.949 717.369 1160.349 718.236 1163.528 718.409 C1166.706 718.582 1170.662 718.555 1175.403 718.323 L1175.403 735.140 C1161.071 736.875 1150.785 735.631 1144.542 731.413 C1138.302 727.194 1135.181 719.422 1135.181 708.094 L1135.181 666.483 L1119.232 666.483 L1119.232 648.452 L1135.181 648.452 L1135.181 629.728 L1153.906 624.180 L1153.906 648.452 L1175.403 648.452 L1175.403 666.483 Z" fill="#FFFFFF" />
                  <path d="M1211.965 703.593 C1210.857 701.265 1210.047 698.716 1209.554 695.935 C1208.200 688.313 1209.598 681.487 1213.754 675.467 C1217.907 669.447 1223.741 665.769 1231.252 664.435 C1236.373 663.526 1241.105 663.890 1245.444 665.524 C1249.785 667.160 1253.285 669.855 1255.949 673.608 L1270.187 661.569 C1265.580 655.462 1259.509 651.024 1251.974 648.253 C1244.438 645.484 1236.514 644.835 1228.209 646.310 C1215.348 648.594 1205.385 654.797 1198.321 664.914 C1191.253 675.034 1188.854 686.466 1191.118 699.210 C1192.390 706.373 1194.932 712.648 1198.740 718.040 C1203.154 713.227 1207.224 708.073 1211.965 703.593 Z" fill="#FFFFFF" />
                  <path d="M1265.906 704.993 C1264.652 709.368 1262.248 713.144 1258.698 716.322 C1255.146 719.503 1250.875 721.587 1245.888 722.577 C1238.405 724.063 1231.633 722.756 1225.578 718.655 C1223.967 717.565 1222.527 716.342 1221.239 715.005 C1216.885 719.474 1213.095 724.483 1208.943 729.150 C1210.791 730.898 1212.807 732.524 1215.015 734.009 C1225.284 740.927 1236.823 743.114 1249.635 740.570 C1257.911 738.928 1265.057 735.445 1271.072 730.127 C1277.087 724.811 1281.230 718.389 1283.510 710.867 L1265.906 704.993 Z" fill="#FFFFFF" />
                  <path d="M962.197 648.564 L980.525 648.564 L980.525 665.692 L980.867 665.692 C981.438 663.294 982.551 660.955 984.208 658.670 C985.861 656.387 987.861 654.302 990.202 652.418 C992.542 650.534 995.140 649.022 997.996 647.879 C1000.848 646.739 1003.760 646.166 1006.731 646.166 C1009.014 646.166 1010.586 646.225 1011.441 646.337 C1012.298 646.452 1013.181 646.568 1014.096 646.680 L1014.096 665.521 C1012.727 665.294 1011.327 665.093 1009.900 664.921 C1008.471 664.750 1007.073 664.665 1005.704 664.665 C1002.390 664.665 999.281 665.323 996.369 666.635 C993.456 667.949 990.914 669.889 988.747 672.458 C986.576 675.027 984.864 678.196 983.608 681.965 C982.350 685.732 981.724 690.074 981.724 694.982 L981.724 737.117 L962.197 737.117 L962.197 648.564 Z" fill="#FFFFFF" />
                  <path d="M851.599 690.728 C851.599 712.312 834.101 729.810 812.517 729.810 C790.933 729.810 773.435 712.312 773.435 690.728 C773.435 669.144 790.933 651.646 812.517 651.646 C834.101 651.646 851.599 669.144 851.599 690.728" fill="none" stroke="#FFFFFF" strokeWidth="17.0" />
                  <path d="M1188.909 732.503 L1233.979 686.137 L1246.944 697.595 L1278.051 670.729" fill="none" stroke="url(#bar2)" strokeWidth="17" />
                </svg>
              </a>
              <p className="mt2" style={{ maxWidth: "26em" }}>Proof of income for people paid in digital dollars. The payslip and bank statement for money that never touched a bank.</p>
            </div>
            <div>
              <h4>Site</h4>
              <ul>
                <li>
                  <a href="#product">Product</a>
                </li>
                <li>
                  <a href="#company">Company</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:foundersoffice@blocrate.com">foundersoffice@blocrate.com</a>
                </li>
                <li>
                  <a href="https://wa.me/447385818607">WhatsApp +44 7385 818607</a>
                </li>
                <li>London, United Kingdom</li>
              </ul>
            </div>
            <div>
              <h4>Follow</h4>
              <ul>
                <li>
                  <a href="https://x.com/blocrateglobal">X @blocrateglobal</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/blocrate">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom">
            <span>© <span data-year="">2026</span> Blocrate. UK entity. We never hold, move or lend money. We only verify.</span>
            <span>Not a bank. Not a lender. Not a custodian.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
