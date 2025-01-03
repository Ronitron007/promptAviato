import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="border-b border-slate-200 p-8 flex justify-between items-center">
      <h1 className="text-3xl font-extrabold text-slate-800">Payment Settings</h1>
      <div className="flex items-center space-x-4">
        <div className="p-4 border border-slate-300 rounded-full">
          <img src="assets/image_b081ea7f.png" alt="notification" />
        </div>
        <div className="p-4 border border-slate-300 rounded-full">
          <img src="assets/image_6a48a8fb.png" alt="settings" />
        </div>
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-cover bg-no-repeat">
            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-1.5 border-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
