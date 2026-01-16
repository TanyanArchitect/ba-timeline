import React, { useState } from 'react';

const DonateButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-bold py-3 px-6 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.5)] flex items-center gap-2 animate-bounce transition-all hover:scale-110"
        >
          <span>🍜</span>
          <span className="hidden md:inline">Mời mì tôm</span>
        </button>
      )}

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-slate-900 border-2 border-yellow-500/50 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 w-8 h-8 rounded-full flex items-center justify-center"
            >
              ✕
            </button>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Donate me! 🍜</h3>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                "Đây là website phi lợi nhuận, nên đương nhiên người tạo ra nó đang 
                <span className="text-yellow-500 font-bold"> hốc mì tôm </span> 
                qua bữa. Nếu muốn bạn có thể hỗ trợ tôi, còn không thì add friend Facebook và xem nội dung tôi đăng để tạo động lực cho tôi làm tiếp, hoặc không nữa thì xem xong sủi, nói chung làm thế nào tùy bạn. Xin cảm ơn!"
              </p>

              <div className="bg-white p-3 rounded-xl inline-block shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-6">
                <img 
                  src="/images/donate-qr.jpg" 
                  alt="Mã QR Ngân hàng" 
                  className="w-48 h-48 object-contain"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=100070749798610" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-[#1877F2] hover:bg-[#166fe5] text-white px-4 py-2 rounded-lg font-bold flex items-center justify-center gap-2"
                >
                  <span>f</span> Add Friend
                </a>

                <a 
                  href="https://github.com/TanyanArchitect/ba-timeline" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-bold flex items-center justify-center gap-2"
                >
                  <span>🐱</span> GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default DonateButton;