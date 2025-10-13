export const logErrorToService = (error: Error, errorInfo: React.ErrorInfo) => {
  // In development, log to console
  if (import.meta.env.DEV) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  // In production, you could send to an error tracking service
  // Example: Sentry, LogRocket, etc.
};