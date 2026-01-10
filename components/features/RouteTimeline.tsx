"use client";

interface RouteItem {
  city: string;
  days: number;
}

interface RouteTimelineProps {
  route: RouteItem[];
}

export default function RouteTimeline({ route }: RouteTimelineProps) {
  return (
    <div className="flex flex-wrap items-center">
      {route.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className="flex items-center">
            <span className="text-6xl font-bold text-gray-200 font-sans -mr-2 z-0">{item.days}</span>
            <div className="z-10 ml-2">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{item.days === 1 ? 'Day' : 'Days'} in</p>
              <p className="text-xl font-bold text-gray-900">{item.city}</p>
            </div>
          </div>
          
          {index < route.length - 1 && (
            <div className="mx-6 h-12 w-[1px] bg-gray-200" />
          )}
        </div>
      ))}
    </div>
  );
}
