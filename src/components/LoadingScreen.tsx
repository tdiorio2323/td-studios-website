import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <img
          src="/TD%20STUDIOS%20WHITE%20TEXT.png"
          alt="TD Studios"
          className="w-64 h-auto animate-pulse"
          style={{ filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))' }}
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
