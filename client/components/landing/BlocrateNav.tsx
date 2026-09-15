import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./blocrate.css";
import "./blocrate-reset.css";

/**
 * Site header, ported verbatim from the reference page (Blocrate_Website_v2_live-3.html).
 *
 * Shared by the landing page and the Coming Soon pages so the nav is identical
 * everywhere. Behaviour is the reference's own: a hairline appears once the page
 * is scrolled, the burger toggles the mobile sheet, and the link matching the
 * current hash page is marked aria-current.
 */
const PAGES = ["index", "product", "company", "contact"];

export default function BlocrateNav() {
  // the pages are hash routes on the landing itself; from any other route
  // (the Coming Soon pages) the same links have to go home first
  const home = useLocation().pathname === "/" ? "" : "/";

  useEffect(() => {
    const nav = document.querySelector(".nav");
    if (!nav) return;

    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const burger = nav.querySelector(".burger");
    const onBurger = () => nav.classList.toggle("open");
    if (burger) burger.addEventListener("click", onBurger);

    // mark the current page and close the mobile sheet on navigation
    const links = [...nav.querySelectorAll("ul a")];
    const mark = () => {
      const h = (location.hash || "#index").slice(1);
      const t = PAGES.includes(h) ? h : "index";
      links.forEach((a) => {
        if (a.getAttribute("href") === "#" + t) a.setAttribute("aria-current", "page");
        else a.removeAttribute("aria-current");
      });
      nav.classList.remove("open");
    };
    mark();
    window.addEventListener("hashchange", mark);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", mark);
      if (burger) burger.removeEventListener("click", onBurger);
    };
  }, []);

  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href={home + "#index"} aria-label="Blocrate home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="634.49 606.40 670.29 138.71" role="img" aria-label="Blocrate">
            <defs>
              <linearGradient id="bar1" gradientUnits="userSpaceOnUse" x1="1188.9" y1="732.5" x2="1278.05" y2="670.73">
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
            <path d="M688.503 716.244 C693.125 716.244 697.026 714.597 700.206 711.302 C703.384 708.008 704.974 703.994 704.974 699.253 C704.974 694.515 703.384 690.497 700.206 687.204 C697.026 683.908 693.125 682.261 688.503 682.261 L656.429 682.261 L656.429 716.244 L688.503 716.244 Z M684.689 632.330 L656.429 632.330 L656.429 664.231 L684.689 664.231 C689.080 664.231 692.778 662.700 695.785 659.636 C698.789 656.575 700.292 652.789 700.292 648.280 C700.292 643.773 698.789 639.989 695.785 636.925 C692.778 633.864 689.080 632.330 684.689 632.330 Z M707.921 672.033 C713.236 674.807 717.397 678.622 720.404 683.476 C723.408 688.331 724.912 693.937 724.912 700.294 C724.912 710.235 721.385 718.498 714.336 725.086 C707.285 731.675 698.673 734.968 688.503 734.968 L636.490 734.968 L636.490 613.606 L684.689 613.606 C694.628 613.606 703.037 616.813 709.915 623.227 C716.790 629.642 720.231 637.648 720.231 647.241 C720.231 657.760 716.126 666.024 707.921 672.033 Z" fill="#111111" />
            <path d="M737.219 608.404H755.943V734.968H737.219Z" fill="#111111" />
            <path d="M914.577 737.222 C901.515 737.222 890.621 732.830 881.896 724.046 C873.168 715.263 868.807 704.454 868.807 691.624 C868.807 678.680 873.168 667.844 881.896 659.116 C890.621 650.391 901.515 646.026 914.577 646.026 C923.013 646.026 930.701 648.050 937.636 652.095 C944.571 656.141 949.772 661.573 953.239 668.391 L937.116 677.754 C935.149 673.593 932.175 670.328 928.187 667.958 C924.200 665.590 919.605 664.404 914.404 664.404 C906.776 664.404 900.388 667.004 895.246 672.206 C890.102 677.407 887.531 683.882 887.531 691.624 C887.531 699.369 890.102 705.841 895.246 711.042 C900.388 716.244 906.776 718.844 914.404 718.844 C919.489 718.844 924.083 717.631 928.187 715.203 C932.288 712.776 935.382 709.541 937.463 705.494 L953.586 714.683 C949.886 721.618 944.571 727.110 937.636 731.153 C930.701 735.197 923.013 737.222 914.577 737.222 Z" fill="#111111" />
            <path d="M1043.292 711.648 C1048.495 716.909 1055.022 719.536 1062.885 719.536 C1070.745 719.536 1077.275 716.909 1082.475 711.648 C1087.678 706.390 1090.277 699.773 1090.277 691.797 C1090.277 683.820 1087.678 677.206 1082.475 671.945 C1077.275 666.687 1070.745 664.057 1062.885 664.057 C1055.022 664.057 1048.495 666.687 1043.292 671.945 C1038.092 677.206 1035.490 683.820 1035.490 691.797 C1035.490 699.773 1038.092 706.390 1043.292 711.648 Z M1090.277 648.453 L1109.003 648.453 L1109.003 735.141 L1090.277 735.141 L1090.277 722.658 C1083.227 732.483 1073.114 737.395 1059.936 737.395 C1048.030 737.395 1037.859 732.974 1029.422 724.130 C1020.985 715.289 1016.767 704.512 1016.767 691.797 C1016.767 678.966 1020.985 668.161 1029.422 659.375 C1037.859 650.594 1048.030 646.198 1059.936 646.198 C1073.114 646.198 1083.227 651.052 1090.277 660.762 L1090.277 648.453 Z" fill="#111111" />
            <path d="M1175.403 666.483 L1153.906 666.483 L1153.906 708.094 C1153.906 711.678 1154.713 714.248 1156.333 715.809 C1157.949 717.369 1160.349 718.236 1163.528 718.409 C1166.706 718.582 1170.662 718.555 1175.403 718.323 L1175.403 735.140 C1161.071 736.875 1150.785 735.631 1144.542 731.413 C1138.302 727.194 1135.181 719.422 1135.181 708.094 L1135.181 666.483 L1119.232 666.483 L1119.232 648.452 L1135.181 648.452 L1135.181 629.728 L1153.906 624.180 L1153.906 648.452 L1175.403 648.452 L1175.403 666.483 Z" fill="#111111" />
            <path d="M1211.965 703.593 C1210.857 701.265 1210.047 698.716 1209.554 695.935 C1208.200 688.313 1209.598 681.487 1213.754 675.467 C1217.907 669.447 1223.741 665.769 1231.252 664.435 C1236.373 663.526 1241.105 663.890 1245.444 665.524 C1249.785 667.160 1253.285 669.855 1255.949 673.608 L1270.187 661.569 C1265.580 655.462 1259.509 651.024 1251.974 648.253 C1244.438 645.484 1236.514 644.835 1228.209 646.310 C1215.348 648.594 1205.385 654.797 1198.321 664.914 C1191.253 675.034 1188.854 686.466 1191.118 699.210 C1192.390 706.373 1194.932 712.648 1198.740 718.040 C1203.154 713.227 1207.224 708.073 1211.965 703.593 Z" fill="#111111" />
            <path d="M1265.906 704.993 C1264.652 709.368 1262.248 713.144 1258.698 716.322 C1255.146 719.503 1250.875 721.587 1245.888 722.577 C1238.405 724.063 1231.633 722.756 1225.578 718.655 C1223.967 717.565 1222.527 716.342 1221.239 715.005 C1216.885 719.474 1213.095 724.483 1208.943 729.150 C1210.791 730.898 1212.807 732.524 1215.015 734.009 C1225.284 740.927 1236.823 743.114 1249.635 740.570 C1257.911 738.928 1265.057 735.445 1271.072 730.127 C1277.087 724.811 1281.230 718.389 1283.510 710.867 L1265.906 704.993 Z" fill="#111111" />
            <path d="M962.197 648.564 L980.525 648.564 L980.525 665.692 L980.867 665.692 C981.438 663.294 982.551 660.955 984.208 658.670 C985.861 656.387 987.861 654.302 990.202 652.418 C992.542 650.534 995.140 649.022 997.996 647.879 C1000.848 646.739 1003.760 646.166 1006.731 646.166 C1009.014 646.166 1010.586 646.225 1011.441 646.337 C1012.298 646.452 1013.181 646.568 1014.096 646.680 L1014.096 665.521 C1012.727 665.294 1011.327 665.093 1009.900 664.921 C1008.471 664.750 1007.073 664.665 1005.704 664.665 C1002.390 664.665 999.281 665.323 996.369 666.635 C993.456 667.949 990.914 669.889 988.747 672.458 C986.576 675.027 984.864 678.196 983.608 681.965 C982.350 685.732 981.724 690.074 981.724 694.982 L981.724 737.117 L962.197 737.117 L962.197 648.564 Z" fill="#111111" />
            <path d="M851.599 690.728 C851.599 712.312 834.101 729.810 812.517 729.810 C790.933 729.810 773.435 712.312 773.435 690.728 C773.435 669.144 790.933 651.646 812.517 651.646 C834.101 651.646 851.599 669.144 851.599 690.728" fill="none" stroke="#111111" strokeWidth="17.0" />
            <path d="M1188.909 732.503 L1233.979 686.137 L1246.944 697.595 L1278.051 670.729" fill="none" stroke="url(#bar1)" strokeWidth="17" />
          </svg>
        </a>
        <ul>
          <li>
            <a href={home + "#product"}>Product</a>
          </li>
          <li>
            <a href={home + "#company"}>Company</a>
          </li>
          <li>
            <a href={home + "#contact"}>Contact</a>
          </li>
          <li className="cta-mobile">
            <a href="mailto:foundersoffice@blocrate.com?subject=Blocrate%3A%20book%20a%20call">Book a call</a>
          </li>
        </ul>
        <a className="btn cta-desktop" href="mailto:foundersoffice@blocrate.com?subject=Blocrate%3A%20book%20a%20call">Book a call <span className="arr">→</span></a>
        <button className="burger" aria-label="Menu">Menu</button>
      </div>
    </header>
  );
}
