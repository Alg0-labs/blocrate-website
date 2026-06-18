import React from "react";
import { useVideoPreloader } from "@/hooks/use-video-preloader";
import { VIDEO_SOURCES } from "@/lib/video-sources";
import { BrandLogo } from "@/components/shared/BrandLogo";

interface VideoPreloaderProps {
  children: React.ReactNode;
}

export const VideoPreloader: React.FC<VideoPreloaderProps> = ({ children }) => {
  const ready = useVideoPreloader(VIDEO_SOURCES);

  if (!ready) {
    return (
      <div className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-white">
        <div className="mb-6 animate-pulse">
          <BrandLogo size={36} />
        </div>
        <div className="flex gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-blocrate-accent [animation-delay:0ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-blocrate-accent [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-blocrate-accent [animation-delay:300ms]" />
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
