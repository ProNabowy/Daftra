import { ReactNode } from "react";

interface InfoItemProps {
  icon: ReactNode;
  label: string;
  value: string;
}

function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 bg-[#fafbfd] p-4 rounded-full flex-1">
      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
        <div className="text-gray-600 flex-shrink-0">{icon}</div>
        <span className="text-xs sm:text-sm font-medium text-gray-700">
          {label}:
        </span>
      </div>
      <span className="text-xs text-gray-900 font-bold">
        {value}
      </span>
    </div>
  );
}

export default InfoItem;
