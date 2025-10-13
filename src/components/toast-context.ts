import { createContext } from 'react';
import type { ToastProps } from '@/components/ui/toast';

export type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
};

export type ToastContextValue = {
  state: { toasts: ToasterToast[] };
  toast: (props: Omit<ToasterToast, 'id'>) => { id: string; dismiss: () => void; update: (props: ToasterToast) => void };
  dismiss: (toastId?: string) => void;
};

export const ToastContext = createContext<ToastContextValue | null>(null);