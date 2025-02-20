import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Container({
  children,
  className,
  childClassName
}: { children: ReactNode, className?: string, childClassName?: string }) {
  return (
    <div className={cn(
      'self-center',
      className
    )}>
      <div className={cn(
        // 'w-[clamp(250px,100vw,1080px)]',
        'md:w-[clamp(calc(250px_-_1px),calc(100vw_-_1px_-_(2rem_*_2)),calc(1200px_-_2px))] w-screen md:px-0 px-6',
        childClassName
      )}>{children}</div>
    </div>
  )
}
