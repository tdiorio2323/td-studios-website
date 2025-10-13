import React, { useReducer, useMemo, useCallback } from 'react';
import type { ToastActionElement } from "@/components/ui/toast";
import { ToastContext, type ToasterToast } from '@/components/toast-context';

const TOAST_LIMIT = 1;
type Action =
  | { type: "ADD_TOAST"; toast: ToasterToast }
  | { type: "UPDATE_TOAST"; toast: Partial<ToasterToast> }
  | { type: "DISMISS_TOAST"; toastId?: ToasterToast["id"] }
  | { type: "REMOVE_TOAST"; toastId?: ToasterToast["id"] };

interface State { toasts: ToasterToast[] }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return { ...state, toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT) };
    case "UPDATE_TOAST":
      return { ...state, toasts: state.toasts.map(t => t.id === action.toast.id ? { ...t, ...action.toast } : t) };
    case "DISMISS_TOAST":
      return { ...state, toasts: state.toasts.map(t => (t.id === action.toastId || action.toastId === undefined) ? { ...t, open: false } : t) };
    case "REMOVE_TOAST":
      return { ...state, toasts: action.toastId ? state.toasts.filter(t => t.id !== action.toastId) : [] };
    default:
      return state;
  }
};

let count = 0;
const genId = () => (count = (count + 1) % Number.MAX_SAFE_INTEGER).toString();

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { toasts: [] });

  const toast = useCallback((props: Omit<ToasterToast,'id'>) => {
    const id = genId();
    const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
    dispatch({ type: "ADD_TOAST", toast: { ...props, id, open: true, onOpenChange: (open) => { if (!open) dismiss(); } } });
    return { id, dismiss, update: (updateProps: ToasterToast) => dispatch({ type: "UPDATE_TOAST", toast: { ...updateProps, id } }) };
  }, []);

  const dismiss = useCallback((toastId?: string) => { dispatch({ type: "DISMISS_TOAST", toastId }); }, []);
  const value = useMemo(() => ({ state, toast, dismiss }), [state, toast, dismiss]);

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};