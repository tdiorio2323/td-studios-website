import type { FC } from "react";

export interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export const DefaultErrorFallback: FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    <div className="max-w-md mx-auto text-center p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
      <p className="text-white/80 mb-6">
        An unexpected error occurred. Please try refreshing the page.
      </p>
      {import.meta.env.DEV && (
        <details className="text-left mb-4">
          <summary className="cursor-pointer text-white/60 text-sm">Error details</summary>
          <pre className="text-xs text-red-300 mt-2 p-2 bg-black/20 rounded overflow-auto">
            {error.message}
          </pre>
        </details>
      )}
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);
