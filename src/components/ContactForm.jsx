import React from 'react';

const ContactForm = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-slate-800 rounded-lg border border-cyan-500">
      <h3 className="text-xl font-bold text-white mb-4">Gửi ý kiến đóng góp</h3>
      <form action="https://formspree.io/f/mojjqenn" method="POST" className="flex flex-col gap-4">
        <input 
          type="email" name="email" placeholder="Email của bạn (để mình trả lời)" 
          className="p-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-cyan-400 outline-none"
          required
        />
        <textarea 
          name="message" rows="4" placeholder="Bạn muốn góp ý gì về Timeline này?" 
          className="p-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-cyan-400 outline-none"
          required
        ></textarea>
        <button 
          type="submit" 
          className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 rounded transition-colors"
        >
          Gửi đi
        </button>
      </form>
    </div>
  );
};

export default ContactForm;