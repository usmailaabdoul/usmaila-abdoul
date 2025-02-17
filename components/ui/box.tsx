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
      'border-[1.5px] border-[#242424] relative flex flex-col',
      className
    )}>
      {crossPosition?.includes('top-left') && (
        <div className="w-fit h-fit absolute z-[2] inset-[-11.5px]">
          <div className="w-[11.5px] h-[21px] absolute border-r border-[#878787]"/>
          <div className="h-[11.5px] w-[21px] absolute border-b border-[#878787]"/>
        </div>
      )}
      {crossPosition?.includes('top-right') && (
        <div className="w-fit h-fit absolute left-[calc(100%_-_10.5px)] z-[2] inset-[-11.5px]">
          <div className="w-[11.5px] h-[21px] absolute border-r border-[#878787]"/>
          <div className="h-[11.5px] w-[21px] absolute border-b border-[#878787]"/>
        </div>
      )}
      {crossPosition?.includes('bottom-left') && (
      <div className="w-fit h-fit absolute top-[calc(100%_-_10.5px)] z-[2] inset-[-11.5px]">
        <div className="w-[11.5px] h-[21px] absolute border-r border-[#878787]"/>
        <div className="h-[11.5px] w-[21px] absolute border-b border-[#878787]"/>
      </div>
      )}
      {crossPosition?.includes('bottom-right') && (
        <div className="w-fit h-fit absolute top-[calc(100%_-_10.5px)] left-[calc(100%_-_10.5px)] z-[2] inset-[-11.5px]">
          <div className="w-[11.5px] h-[21px] absolute border-r border-[#878787]"/>
          <div className="h-[11.5px] w-[21px] absolute border-b border-[#878787]"/>
        </div>
      )}
      {children}
    </div>
  )
}
