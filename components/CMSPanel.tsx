
import React, { useState } from 'react';
import { Edit2, Save, Sparkles, BookOpen } from './Icons';
import { AppData } from '../types';

interface CMSPanelProps {
  isEditMode: boolean;
  setIsEditMode: (val: boolean) => void;
  onReset: () => void;
  settings: AppData['settings'];
  updateSettings: (settings: AppData['settings']) => void;
  getUpdatedCode: () => string;
}

export const CMSPanel: React.FC<CMSPanelProps> = ({ 
  isEditMode, 
  setIsEditMode, 
  onReset,
  settings,
  updateSettings,
  getUpdatedCode
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(getUpdatedCode());
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <>
      {/* CMS UI */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {isOpen && isEditMode && (
          <div className="bg-white p-6 rounded-3xl shadow-2xl border border-stone-200 w-80 mb-4 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-stone-900">
              <Edit2 className="w-5 h-5 text-amber-500" />
              Site Settings
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Phone Number</label>
                <input 
                  className="w-full mt-1 p-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-200 outline-none transition-all" 
                  value={settings.phone}
                  onChange={(e) => updateSettings({ ...settings, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Email Address</label>
                <input 
                  className="w-full mt-1 p-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-200 outline-none transition-all" 
                  value={settings.email}
                  onChange={(e) => updateSettings({ ...settings, email: e.target.value })}
                />
              </div>

              <div className="pt-4 border-t border-stone-100 space-y-2">
                <button 
                  onClick={() => setShowPublishModal(true)}
                  className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl text-sm shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> 
                  Publish Globally
                </button>
                <button 
                  onClick={onReset}
                  className="w-full text-[10px] text-stone-400 hover:text-rose-500 font-bold py-2 uppercase tracking-widest transition-colors"
                >
                  Reset All Changes
                </button>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex gap-3">
          {isEditMode && (
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white text-stone-700 font-bold px-5 py-3.5 rounded-2xl shadow-xl border border-stone-100 hover:bg-stone-50 transition-all flex items-center gap-2"
            >
              Settings
            </button>
          )}
          <button 
            onClick={() => {
              setIsEditMode(!isEditMode);
              if (isEditMode) setIsOpen(false);
            }}
            className={`${isEditMode ? 'bg-amber-500 text-white' : 'bg-stone-900 text-white'} font-bold px-7 py-3.5 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2`}
          >
            {isEditMode ? (
              <><Save className="w-5 h-5" /> Done Editing</>
            ) : (
              <><Edit2 className="w-5 h-5" /> Edit Content</>
            )}
          </button>
        </div>
      </div>

      {/* Publish Modal */}
      {showPublishModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-stone-900/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
            <div className="p-8 border-b border-stone-100 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-display font-bold text-stone-900">Publish Your Changes</h2>
                <p className="text-sm text-stone-500 font-medium">To make these changes permanent for all visitors, copy this code into your <code className="bg-stone-100 px-1 py-0.5 rounded text-indigo-600">constants.ts</code> file.</p>
              </div>
              <button 
                onClick={() => setShowPublishModal(false)}
                className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:text-stone-900 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto flex-grow bg-stone-950 font-mono text-xs text-amber-200/80 leading-relaxed">
              <pre className="whitespace-pre-wrap">{getUpdatedCode()}</pre>
            </div>

            <div className="p-8 bg-stone-50 flex justify-end gap-4">
              <button 
                onClick={() => setShowPublishModal(false)}
                className="px-6 py-3 font-bold text-stone-500 hover:text-stone-900 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={handleCopy}
                className={`${copySuccess ? 'bg-emerald-500' : 'bg-indigo-600'} text-white px-8 py-3 rounded-2xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-indigo-100`}
              >
                {copySuccess ? 'Copied!' : 'Copy to Clipboard'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
