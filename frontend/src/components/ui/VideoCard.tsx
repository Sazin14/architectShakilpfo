"use client";
import { useState } from "react";
import type { Video } from "@/types";

/** Click-to-play YouTube card: no iframe loads until the visitor asks for it. */
export default function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="group">
      <div className="relative aspect-video bg-g800 overflow-hidden">
        {playing ? (
          <iframe className="absolute inset-0 h-full w-full" title={video.title}
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
        ) : (
          <button onClick={() => setPlaying(true)} aria-label={`Play ${video.title}`} className="absolute inset-0 w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`} alt="" className="absolute inset-0 h-full w-full object-cover grayscale opacity-70 transition duration-700 group-hover:opacity-100 group-hover:scale-105" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="h-20 w-20 rounded-full border border-paper/80 flex items-center justify-center text-paper transition-all duration-500 group-hover:scale-110 group-hover:bg-paper group-hover:text-ink">▶</span>
            </span>
          </button>
        )}
      </div>
      <div className="mt-4 flex justify-between items-baseline">
        <h3 className="font-display text-2xl text-ink">{video.title}</h3>
        <span className="text-[11px] uppercase tracking-[0.25em] text-g500">{video.place}</span>
      </div>
    </div>
  );
}
