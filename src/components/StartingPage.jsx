import React from "react";
import Carousel from "./Carousel";

const StartingPage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-6 py-10 bg-gradient-to-b from-black via-slate-950 to-blue-950">
        <div className="w-full max-w-5xl rounded-3xl px-7 py-8 md:px-9 md:py-9 bg-gradient-to-br from-slate-900/95 to-indigo-800/90 shadow-[0_32px_80px_rgba(15,23,42,0.7)] text-slate-100 grid grid-cols-[minmax(0,1.25fr)_minmax(0,1.1fr)] gap-8 max-md:grid-cols-1">
          {/* Left: text content */}
          <div className="flex flex-col gap-4.5">
            <span className="inline-flex self-start px-2.5 py-1 rounded-full text-[0.7rem] tracking-[0.14em] uppercase bg-emerald-900/20 text-emerald-300 border border-teal-300/40">
              Tamil Nadu Elections 2026
            </span>

            <h1 className="text-[2rem] leading-tight font-bold text-slate-50">
              A new chapter in{" "}
              <span className="text-orange-500">Dravidian politics</span>.
            </h1>

            <p className="text-xs md:text-sm leading-relaxed text-indigo-100 max-w-xl">
              The core of Tamil Nadu elections is a decades-long contest between
              DMK and AIADMK, rooted in Dravidian ideology, social justice, and
              Tamil identity. National parties largely play the role of alliance
              partners, while welfare schemes and charismatic leadership shape
              the political imagination of voters.
            </p>

            <p className="text-xs md:text-sm leading-relaxed text-slate-100 max-w-2xl">
              As we look towards the{" "}
              <span className="font-semibold">2026 Assembly elections</span>, a
              potential third front led by{" "}
              <span className="font-semibold">
                Vijay&apos;s Tamizhaga Vettri Kazhagam (TVK)
              </span>{" "}
              aims to channel youth and urban aspirations, signalling a shift in
              the traditional bipolar landscape across{" "}
              <span className="font-semibold">234 constituencies</span>.
            </p>

            {/* <div className="flex flex-wrap gap-3 mt-1.5">
              <button className="px-4.5 py-2.5 rounded-full text-[0.8rem] font-semibold cursor-pointer bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 text-slate-900 shadow-[0_16px_35px_rgba(248,250,252,0.45)]">
                Explore 2026 Landscape
              </button>

              <button className="px-4 py-2.5 rounded-full border border-slate-400/70 text-[0.8rem] font-medium cursor-pointer bg-slate-900/60 text-slate-100 flex items-center gap-1.5">
                <span>View party profiles</span>
              </button>
            </div> */}

            <div className="mt-4 flex flex-wrap gap-3 text-[0.7rem] text-slate-400">
              <span>• Election Commission of India</span>
              <span>• Tamil Nadu State Election Commission</span>
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="flex items-center justify-center">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default StartingPage;