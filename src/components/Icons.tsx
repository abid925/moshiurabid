import React from 'react';

export const BehanceIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M22 7h-7v1h7V7zm-7 3.722c-.446-.196-1.005-.322-1.548-.322-2.31 0-3.94 1.49-3.94 3.81 0 2.29 1.76 3.79 4 3.79 1.44 0 2.62-.751 3.1-1.733l-1.39-.73c-.248.556-.826.97-1.59.97-1.13 0-1.9-.761-1.9-2.03h4.99c.03-.179.04-.37.04-.566 0-1.47-.47-2.67-1.35-3.2zm-3.98 2.5c.12-1.09.93-1.85 1.89-1.85.94 0 1.63.76 1.63 1.85h-3.52zM4.17 17h4.56c2.49 0 4.02-1.18 4.02-3.12 0-1.56-1.14-2.43-2.3-2.73v-.11c1-.31 1.96-1.09 1.96-2.58 0-1.84-1.45-2.99-3.95-2.99H4.17V17zm2.3-8.19h2.13c1.16 0 1.71.526 1.71 1.32 0 .816-.55 1.34-1.71 1.34H6.47V8.81zm0 4.13h2.18c1.3 0 1.87.587 1.87 1.52 0 .933-.57 1.54-1.87 1.54H6.47v-3.06z"/>
  </svg>
);

export const AdobePhotoshopIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <div className={`rounded-lg bg-[#001E36] text-[#31A8FF] flex items-center justify-center font-bold text-xs font-mono select-none ${className}`}>
    Ps
  </div>
);

export const AdobeIllustratorIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <div className={`rounded-lg bg-[#330000] text-[#FF9A00] flex items-center justify-center font-bold text-xs font-mono select-none ${className}`}>
    Ai
  </div>
);

export const AdobeLightroomIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <div className={`rounded-lg bg-[#001D26] text-[#31A8FF] flex items-center justify-center font-bold text-xs font-mono select-none ${className}`}>
    Lr
  </div>
);
