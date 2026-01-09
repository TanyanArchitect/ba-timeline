// src/components/StoryModal.jsx
import React from 'react';

const StoryModal = ({ story, onClose }) => {
  // Nếu không có story nào được chọn thì không hiện gì cả
  if (!story) return null;

  return (
    // Lớp nền đen mờ phủ toàn màn hình (Overlay)
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose} // Bấm ra ngoài thì đóng modal
    >
      
      {/* Khung nội dung chính */}
      <div 
        className="bg-slate-900 border border-cyan-500 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.3)] relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()} // Chặn sự kiện click để không bị đóng khi bấm vào nội dung
      >
        
        {/* Header: Ảnh bìa và Tên */}
        <div className="relative h-48">
          {story.image ? (
            <img src={story.image} alt={story.display_title} className="w-full h-full object-cover opacity-60" />
          ) : (
            <div className="w-full h-full bg-slate-800" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-4 left-6">
            <span className="bg-cyan-600 text-white text-xs px-2 py-1 rounded uppercase font-bold">
              {story.type}
            </span>
            <h2 className="text-2xl font-bold text-white mt-1 text-shadow">
              {story.display_title}
            </h2>
            <p className="text-cyan-200 text-sm">{story.sub_title}</p>
          </div>

          {/* Nút đóng (X) */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors font-bold"
          >
            ✕
          </button>
        </div>

        {/* Danh sách Episodes */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-cyan-400 mb-4 border-b border-cyan-900 pb-2">
            Episode List
          </h3>

          <div className="space-y-3">
            {story.episodes && story.episodes.length > 0 ? (
              story.episodes.map((ep, index) => (
                <div 
                  key={index} 
                  className="bg-slate-800 p-3 rounded hover:bg-slate-700 transition-colors cursor-default group"
                >
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-slate-200 group-hover:text-cyan-300">
                      {ep.title}
                    </span>
                    {/* Nếu có link video hoặc nội dung thì hiển thị icon nhỏ (Demo) */}
                    {ep.content && (
                      <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">
                        Info
                      </span>
                    )}
                  </div>
                  {ep.content && (
                    <p className="text-sm text-slate-400 mt-1 pl-2 border-l-2 border-slate-600">
                      {ep.content}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-slate-500 italic text-center py-4">Chưa có thông tin Episode.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;