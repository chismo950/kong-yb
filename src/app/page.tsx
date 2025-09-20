import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%)]" />
        <div className="absolute inset-y-0 left-1/2 w-[140%] -translate-x-1/2 bg-[radial-gradient(circle_at_center,_rgba(14,116,144,0.35),_rgba(15,23,42,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(15,23,42,0.85),_rgba(15,23,42,1))]" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-6 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200/80">
          Kong Hackathon
        </span>
        <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Team: YB
        </h1>
        <p className="max-w-2xl text-pretty text-base text-slate-200/85 sm:text-lg">
          We are building connected experiences that feel effortless. Our mission is to push Kong to its creative edge, blending powerful engineering with bold storytelling so every interaction feels alive.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            asChild
            className="bg-sky-500 text-white shadow-[0_20px_60px_-20px_rgba(56,189,248,0.65)] transition-all hover:bg-sky-400 hover:shadow-[0_25px_70px_-20px_rgba(56,189,248,0.75)]"
          >
            <Link href="#vision">Dive into our vision</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-slate-500/60 bg-white/10 text-slate-100 transition-colors hover:bg-white/20"
          >
            <Link href="#momentum">See what we are shipping</Link>
          </Button>
        </div>
        <section
          id="vision"
          className="grid w-full max-w-3xl grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:grid-cols-3"
        >
          <div className="rounded-2xl bg-black/30 p-4">
            <p className="text-xs uppercase text-slate-400">Pillars</p>
            <p className="mt-2 text-lg font-semibold text-white">Velocity · Reliability · Delight</p>
          </div>
          <div className="rounded-2xl bg-black/30 p-4">
            <p className="text-xs uppercase text-slate-400">Focus</p>
            <p className="mt-2 text-lg font-semibold text-white">Create real-time APIs that feel human</p>
          </div>
          <div className="rounded-2xl bg-black/30 p-4">
            <p className="text-xs uppercase text-slate-400">Momentum</p>
            <p className="mt-2 text-lg font-semibold text-white">Prototype ready for live testing</p>
          </div>
        </section>
      </main>
    </div>
  );
}
