import { Link } from "react-router-dom";
import BlocrateNav from "@/components/landing/BlocrateNav";
import { Eyebrow } from "@/components/shared/Eyebrow";

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-white pt-[120px]">
      <div className="bk-aurora" />
      <div className="bk-dotgrid" />

      <BlocrateNav />

      <div className="relative z-10 flex flex-1 items-center justify-center px-5 text-center">
        <div className="flex max-w-2xl flex-col items-center gap-5">
          <Eyebrow>{title}</Eyebrow>
          <h1 className="text-[clamp(28px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.035em] text-blocrate-ink">
            This page is coming soon
          </h1>
          <p className="max-w-[44ch] text-[clamp(15px,1.4vw,18px)] leading-[1.55] text-blocrate-ink-soft">
            We're preparing {title.toLowerCase()} for you. Please check back later.
          </p>
          <Link to="/" className="btn btn-primary mt-2">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
