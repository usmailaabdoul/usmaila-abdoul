import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

export default function Box({
  children,
  className,
  crossPosition
}: { 
  children: ReactNode, 
  className?: string, 
  crossPosition?: Array<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' >
}) {
  return (
    <div className={cn(
      'border-[1.5px] border-border-2 relative flex flex-col',
      className
    )}>
      {crossPosition?.includes('top-left') && (
        <div className="w-fit h-fit absolute z-[2] inset-[-11.5px]">
          <div className="w-[11px] md:h-[21px] h-[18px] absolute border-r border-cross md:bottom-auto bottom-[calc(100%_-_19.5px)]"/>
          <div className="h-[11px] md:w-[21px] w-[18px] absolute border-b border-cross md:right-auto right-[calc(100%_-_19.5px)]"/>
        </div>
      )}
      {crossPosition?.includes('top-right') && (
        <div className="w-fit h-fit absolute left-[calc(100%_-_10px)] z-[2] inset-[-11.5px]">
          <div className="w-[11px] md:h-[21px] h-[18px] absolute border-r border-cross md:bottom-auto bottom-[calc(100%_-_19.5px)]"/>
          <div className="h-[11.5px] md:w-[21px] w-[18px] absolute border-b border-cross md:right-auto right-[calc(100%_-_19.5px)]"/>
        </div>
      )}
      {crossPosition?.includes('bottom-left') && (
      <div className="w-fit h-fit absolute top-[calc(100%_-_10px)] z-[2] inset-[-11px]">
        <div className="w-[11px] md:h-[21px] h-[18px] absolute border-r border-cross md:bottom-auto bottom-[calc(100%_-_19.5px)]"/>
        <div className="h-[11.5px] md:w-[21px] w-[18px] absolute border-b border-cross md:right-auto right-[calc(100%_-_19.5px)]"/>
      </div>
      )}
      {crossPosition?.includes('bottom-right') && (
        <div className="w-fit h-fit absolute top-[calc(100%_-_10px)] left-[calc(100%_-_10px)] z-[2] inset-[-11.5px]">
          <div className="w-[11px] md:h-[21px] h-[18px] absolute border-r border-cross md:bottom-auto bottom-[calc(100%_-_19.5px)]"/>
          <div className="h-[11.5px]  md:w-[21px] w-[18px] absolute border-b border-cross md:right-auto right-[calc(100%_-_19.5px)]"/>
        </div>
      )}
      {children}
    </div>
  )
}
