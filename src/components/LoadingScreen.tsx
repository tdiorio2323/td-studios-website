import React from 'react';
import ShimmerText from '@/components/ShimmerText';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Logo - Same as header */}
        <ShimmerText
          text="TD STUDIOS"
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest animate-pulse"
        />

        {/* Loading dots animation */}
        <div className="flex gap-2">
          <div
            className="w-3 h-3 bg-white rounded-full animate-bounce"
            style={{ animationDelay: '0ms' }}
          />
          <div
            className="w-3 h-3 bg-white rounded-full animate-bounce"
            style={{ animationDelay: '150ms' }}
          />
          <div
            className="w-3 h-3 bg-white rounded-full animate-bounce"
            style={{ animationDelay: '300ms' }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
