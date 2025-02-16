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
        'w-[clamp(calc(250px_-_1px),calc(100vw_-_1px_-_(2rem_*_2)),calc(1080px_-_1px))]',
        childClassName
      )}>{children}</div>
    </div>
  )
}
