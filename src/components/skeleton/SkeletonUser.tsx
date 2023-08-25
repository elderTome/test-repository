export function SkeletonUser() {
  return (
    <div className="w-[32.75rem] flex items-center bg-zinc-800 p-6 gap-6 rounded-xl">
      <div className="min-w-[7.125rem] h-[7.125rem] rounded-full bg-zinc-700 animate-pulse" />
      <div className="flex w-full gap-4 flex-col animate-pulse">
        <div className="flex justify-between">
          <div className="flex flex-col py-1 gap-[0.375rem]">
            <div className="w-[3.75rem] h-[0.875rem] bg-zinc-700 rounded-full" />
            <div className="w-[5rem] h-[0.875rem] bg-zinc-700 rounded-full" />
          </div>
          <div className="flex flex-col py-1 gap-[0.375rem]">
            <div className="w-[3.75rem] h-[0.875rem] bg-zinc-700 rounded-full" />
            <div className="w-[5rem] h-[0.875rem] bg-zinc-700 rounded-full" />
          </div>
          <div className="flex flex-col py-1 gap-[0.375rem]">
            <div className="w-[3.75rem] h-[0.875rem] bg-zinc-700 rounded-full" />
            <div className="w-[5rem] h-[0.875rem] bg-zinc-700 rounded-full" />
          </div>
        </div>
        <div className="flex flex-col py-1 gap-[0.375rem]">
          <div className="w-[3.75rem] h-[0.875rem] bg-zinc-700 rounded-full" />
          <div className="w-full h-[0.875rem] bg-zinc-700 rounded-full" />
          <div className="w-[calc(100%-2.5rem)] h-[0.875rem] bg-zinc-700 rounded-full" />
        </div>
      </div>
    </div>
  )
}
