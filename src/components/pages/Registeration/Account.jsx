import React from 'react';

const AccountSelector = () => {
  return (
    <div className="bg-gray-900 min-h-[90vh] flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl w-full max-w-md p-6 space-y-6">
        <div className="flex items-center justify-between">
          <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* Google logo paths */}
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-gray-400 text-sm">Signed out</span>
        </div>
        
        <h1 className="text-white text-2xl font-medium">Choose an account</h1>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer">
            <img src="https://via.placeholder.com/40" alt="User avatar" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-white font-medium">Sarthak Vyas</p>
              <p className="text-gray-400 text-sm">vyassarthak183@gmail.com</p>
            </div>
          </div>
          
          <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-700 transition">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-400">Use another account</span>
          </button>
          
          <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-700 transition">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-400">Remove an account</span>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-sm text-gray-400">
        <select className="bg-transparent border-none focus:outline-none">
          <option>English (United States)</option>
        </select>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default AccountSelector;