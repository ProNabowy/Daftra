interface StatBarProps {
  label: string;
  value: number;
  maxValue?: number;
}

function StatBar({ label, value, maxValue = 255 }: StatBarProps) {
  const percentage = Math.min((value / maxValue) * 100, 100);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <div className="w-16 sm:w-20 text-xs sm:text-sm font-bold text-gray-700 flex-shrink-0">
          {label}
        </div>
        <span className="text-xs sm:text-sm font-semibold text-gray-900 flex-shrink-0">
          {value}
        </span>
      </div>
      <div className="flex-1 flex items-center gap-1.5 sm:gap-2 min-w-0">
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden min-w-0">
          <div
            className="h-full bg-gray-900 transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default StatBar;
