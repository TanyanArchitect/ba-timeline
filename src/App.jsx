import { useState, useEffect, useMemo } from 'react';
import { loadStories, chunkArray } from './utils/storyLoader';
import FilterBar from './components/FilterBar';
import StoryModal from './components/StoryModal';
import Footer from './components/Footer';
import DonateButton from './components/DonateButton';

function App() {
  const [allStories, setAllStories] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([
    'main', 'event', 'mini', 'group', 'relationship', 'task'
  ]);
  const [selectedStory, setSelectedStory] = useState(null);

  const ITEMS_PER_ROW = 4;

  useEffect(() => {
    const data = loadStories();
    setAllStories(data);
  }, []);

  const filteredRows = useMemo(() => {
    const filtered = allStories.filter(story => 
      selectedFilters.includes(story.type)
    );
    return chunkArray(filtered, ITEMS_PER_ROW);
  }, [allStories, selectedFilters]);

  const handleToggleFilter = (type) => {
    setSelectedFilters(prev => {
      if (prev.includes(type)) {
        if (prev.length === 1) return prev; 
        return prev.filter(t => t !== type);
      } else {
        return [...prev, type];
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-x-hidden pt-24 pb-0 relative">
      
      <FilterBar 
        selectedFilters={selectedFilters} 
        onToggleFilter={handleToggleFilter} 
      />

      <StoryModal 
        story={selectedStory} 
        onClose={() => setSelectedStory(null)} 
      />

      <DonateButton />

      <div className="max-w-6xl mx-auto relative px-12 mt-10 w-full mb-20"> 
        
        {filteredRows.length === 0 && (
          <div className="text-center text-slate-500 mt-20">
            <p className="text-xl">Không tìm thấy story nào phù hợp.</p>
          </div>
        )}

        {filteredRows.map((row, rowIndex) => {
          const isReverse = rowIndex % 2 !== 0;
          const isLastRow = rowIndex === filteredRows.length - 1;

          return (
            <div 
              key={rowIndex} 
              className={`
                relative flex items-center justify-between mb-32
                flex-col gap-10
                md:flex-row md:gap-0
                ${isReverse ? 'md:flex-row-reverse' : ''}
              `}
            >
              
              <div className="absolute top-1/2 left-0 w-full h-1 bg-cyan-900 -z-10 hidden md:block"></div>

              {!isLastRow && (
                <>
                  {!isReverse && (
                     <div className="hidden md:block absolute right-0 top-1/2 w-24 h-[calc(100%+8rem)] border-r-4 border-t-4 border-b-4 border-cyan-900 rounded-r-[3rem] -mr-[3rem] -z-10"></div>
                  )}
                  {isReverse && (
                     <div className="hidden md:block absolute left-0 top-1/2 w-24 h-[calc(100%+8rem)] border-l-4 border-t-4 border-b-4 border-cyan-900 rounded-l-[3rem] -ml-[3rem] -z-10"></div>
                  )}
                </>
              )}

              {row.map((story) => (
                <div 
                  key={story.id} 
                  onClick={() => setSelectedStory(story)}
                  className="relative group w-64 flex flex-col items-center cursor-pointer transition-all hover:scale-105 duration-300 z-10"
                >
                  <div className="w-8 h-8 rounded-full bg-cyan-500 border-4 border-slate-900 mb-4 shadow-[0_0_15px_rgba(6,182,212,0.6)] group-hover:bg-yellow-400 group-hover:shadow-yellow-400/50 transition-colors"></div>

                  <div className="w-full aspect-video rounded-lg overflow-hidden border-2 border-slate-700 group-hover:border-cyan-400 shadow-lg bg-slate-800 relative">
                    {story.image ? (
                      <img src={story.image} alt={story.display_title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs">No Image</div>
                    )}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-300"></div>
                  </div>

                  <div className="mt-3 text-center opacity-70 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] uppercase tracking-wider text-cyan-300 bg-cyan-900/40 px-2 py-1 rounded">
                      {story.type}
                    </span>
                    <h3 className="text-sm font-bold mt-2 text-slate-200 group-hover:text-yellow-300">
                      {story.display_title}
                    </h3>
                  </div>
                </div>
              ))}

              {Array.from({ length: ITEMS_PER_ROW - row.length }).map((_, i) => (
                 <div key={`empty-${i}`} className="w-64 invisible"></div>
              ))}
              
            </div>
          );
        })}
      </div>

      <Footer />
      
    </div>
  );
}

export default App;