import React from 'react';

const FILTER_OPTIONS = [
  { label: 'Main Story', value: 'main' },
  { label: 'Event Story', value: 'event' },
  { label: 'Mini Story', value: 'mini' },
  { label: 'Group Story', value: 'group' },
  { label: 'Relationship', value: 'relationship' },
  { label: 'Task Story', value: 'task' },
];

const FilterBar = ({ selectedFilters, onToggleFilter }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-900 shadow-xl p-4">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4">
        
        <span className="text-cyan-400 font-bold mr-2 uppercase text-sm tracking-widest hidden sm:inline">
          Filters:
        </span>
        
        {FILTER_OPTIONS.map((option) => {
          const isActive = selectedFilters.includes(option.value);

          return (
            <label 
              key={option.value} 
              className={`
                cursor-pointer flex items-center space-x-2 px-3 py-1 rounded-full border transition-all select-none text-sm
                ${isActive 
                  ? 'bg-cyan-600 border-cyan-400 text-white shadow-[0_0_10px_rgba(6,182,212,0.5)]' 
                  : 'bg-slate-800 border-slate-600 text-gray-400 hover:border-gray-400'}
              `}
            >
              <input
                type="checkbox"
                className="hidden" 
                checked={isActive}
                onChange={() => onToggleFilter(option.value)}
              />
              <span className="font-medium">{option.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;