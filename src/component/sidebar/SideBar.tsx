import { useState } from "react";
import { XMarkIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { filtersData } from "@/constents/filtersData";
import SideSectionWrapper from "./SideSectionWrapper";

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [priceRange, setPriceRange] = useState({
    min: filtersData.find(f => f.type === "range")?.defaultMin || 0,
    max: filtersData.find(f => f.type === "range")?.defaultMax || 0
  });

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(prev => ({
      ...prev,
      min: Math.min(Number(e.target.value), prev.max - 1)
    }));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(prev => ({
      ...prev,
      max: Math.max(Number(e.target.value), prev.min + 1)
    }));
  };

 
  return (
    <>
      <button
        className="md:hidden fixed top-42 left-1 z-50 bg-primary text-white p-1 rounded-full shadow-lg focus:outline-none"
        onClick={() => setSidebarOpen(true)}
      >
        <AdjustmentsHorizontalIcon className="w-7 h-7" />
      </button>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}
      <aside
        className={`
          fixed top-0 left-0 h-fit z-50 transition-transform duration-300 bg-white md:static md:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          w-4/5 max-w-xs md:w-1/3 md:min-w-[250px] md:block rounded-r-2xl shadow-lg p-5 flex flex-col gap-3
        `}
        style={{ minHeight: '100vh' }}
      >
        <button
          className="md:hidden absolute top-4 right-4 text-gray-500 hover:text-red-500 z-50"
          onClick={() => setSidebarOpen(false)}
        >
          <XMarkIcon className="w-7 h-7" />
        </button>
        {filtersData.map((filter, idx) => {
        if (filter.type === "range") {
          return (
            <SideSectionWrapper key={idx} isOpen={filter.isOpen} title={filter.title}>
              <div className="pl-4 py-3 flex flex-col gap-2">
                <div className="relative h-8 flex items-center">
                  <input
                    type="range"
                    min={filter.min}
                    max={filter.max}
                    value={priceRange.min}
                    onChange={handleMinChange}
                    className="absolute w-full accent-primary pointer-events-auto z-10"
                  />
                  <input
                    type="range"
                    min={filter.min}
                    max={filter.max}
                    value={priceRange.max}
                    onChange={handleMaxChange}
                    className="absolute w-full accent-primary pointer-events-auto z-20"
                  />
                </div>
                <div className="text-xs text-gray-500 mt-1">Price: ${priceRange.min} - ${priceRange.max}</div>
              </div>
            </SideSectionWrapper>

          );
        }

        if (filter.type === "text") {
          return (
            <SideSectionWrapper key={idx} isOpen={filter.isOpen} title={filter.title}>
              <div className="pl-4 py-3 flex flex-col gap-2">
                {filter.items?.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="relative w-full">
                      <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={typeof item === "string" ? item : item?.value}
                        readOnly
                        className="border rounded-full pl-8 pr-3 py-1 text-sm w-full bg-gray-50 text-gray-800 focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    <button className="p-1 rounded-full hover:bg-red-100 transition-colors" title="Remove filter">
                      <XMarkIcon className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                ))}
                <button className="text-xs text-primary hover:underline w-fit mt-1">Clear All</button>
              </div>
            </SideSectionWrapper>
          );
        }

        if (filter.type === "list") {
          return (
            <SideSectionWrapper key={idx} isOpen={filter.isOpen} title={filter.title}>
              <div className="pl-4 py-2 text-gray-600 space-y-1">
                {filter?.items?.map((item, i) => (
                  <span key={i} className="block hover:text-primary cursor-pointer text-base p-1">
                    {typeof item === "string" ? item : item?.value}
                  </span>
                ))}
              </div>
            </SideSectionWrapper>
          );
        }

        return null;
      })}
      </aside>
    </>
  );
};

export default SideBar;
