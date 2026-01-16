import React, { useState } from 'react';

const EpisodeItem = ({ ep, index }) => {
  const [isExpanded, setIsExpanded] = useState(false); 

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden transition-all hover:border-cyan-500">
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 text-left focus:outline-none bg-slate-800 hover:bg-slate-750 transition-colors"
      >
        <h4 className="font-bold text-yellow-400 text-base flex-1 pr-4">
          Tập {index + 1}: {ep.title}
        </h4>
        
        <span className={`text-cyan-400 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
          ▼
        </span>
      </button>

      {isExpanded && (
        <div className="p-4 bg-slate-900/50 border-t border-slate-700 text-slate-300 text-sm leading-relaxed whitespace-pre-wrap animate-fade-in shadow-inner">
          {ep.content ? (
            ep.content.startsWith('http') ? (
              <a 
                href={ep.content} 
                target="_blank" 
                rel="noreferrer" 
                className="text-cyan-400 hover:underline break-all flex items-center gap-2"
              >
                🔗 Xem chi tiết tại đường dẫn này
              </a>
            ) : (
              ep.content
            )
          ) : (
            <span className="italic text-slate-500">Chưa có nội dung.</span>
          )}
        </div>
      )}
    </div>
  );
};

const StoryModal = ({ story, onClose }) => {
  if (!story) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 w-full max-w-3xl max-h-[90vh] flex flex-col rounded-xl border border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)] relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800/80 text-white hover:bg-red-500 transition-colors z-20 border border-white/20 backdrop-blur-md"
        >
          ✕
        </button>

        <div className="relative shrink-0">
          <div className="w-full h-48 sm:h-64 relative">
            {story.image ? (
              <img 
                src={story.image} 
                alt={story.display_title} 
                className="w-full h-full object-cover rounded-t-xl opacity-60"
              />
            ) : (
              <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">No Image</div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
          </div>

          <div className="absolute bottom-4 left-6 right-16">
            <span className="inline-block bg-cyan-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide shadow-lg border border-cyan-400/50 mb-2">
              {story.type}
            </span>

            {story.sub_title && (
              <p className="text-cyan-400 text-lg sm:text-xl font-bold uppercase tracking-wide drop-shadow-md mb-1 leading-tight">
                {story.sub_title}
              </p>
            )}

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white text-shadow-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">
              {story.display_title}
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <h3 className="text-lg font-bold text-slate-300 mb-4 flex items-center gap-2 uppercase tracking-wider">
            <span>📂</span> Danh sách tập
          </h3>

          <div className="flex flex-col gap-3">
            {story.episodes && story.episodes.length > 0 ? (
              story.episodes.map((ep, index) => (
                <EpisodeItem key={index} ep={ep} index={index} />
              ))
            ) : (
              <div className="text-center py-8 text-slate-500 italic border border-dashed border-slate-700 rounded-lg">
                Chưa có thông tin chi tiết.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StoryModal;