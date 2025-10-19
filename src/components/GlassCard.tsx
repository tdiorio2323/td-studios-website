import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface GlassCardProps {
  children: ReactNode;
  className?: string;
  accentColor?: string;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragEnter?: () => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: () => void;
}

export default function GlassCard({
  children,
  className,
  accentColor = 'from-white/5 via-white/0 to-white/5',
  draggable,
  onDragStart,
  onDragEnter,
  onDragOver,
  onDrop,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-2xl border border-white/10 bg-surface/80 p-8 shadow-card supports-[backdrop-filter]:backdrop-blur',
        'before:absolute before:inset-px before:rounded-[calc(var(--rad)-1px)] before:bg-gradient-to-b before:opacity-0 before:transition-opacity hover:before:opacity-100',
        'hover:-translate-y-0.5 transition-transform duration-150 ease-out',
        className
      )}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100',
          'bg-gradient-to-br',
          accentColor
        )}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
