import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuToggleIconProps {
  open: boolean;
  className?: string;
  duration?: number;
}

export function MenuToggleIcon({ open, className, duration = 300 }: MenuToggleIconProps) {
  return (
    <div 
      className={cn('relative flex items-center justify-center w-full h-full', className)} 
      style={{ transitionDuration: `${duration}ms` }}
    >
      <Menu 
        className={cn(
          "absolute transition-all", 
          open ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
        )} 
        style={{ transitionDuration: `${duration}ms` }}
      />
      <X 
        className={cn(
          "absolute transition-all", 
          open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
        )} 
        style={{ transitionDuration: `${duration}ms` }}
      />
    </div>
  );
}
