import React from 'react';

const AvatarGroup: React.FC = () => {
  // Using picsum seeds to ensure consistent but distinct faces
  const avatars = [
    "https://picsum.photos/id/64/100/100", // Woman
    "https://picsum.photos/id/338/100/100", // Woman
    "https://picsum.photos/id/334/100/100", // Man
    "https://picsum.photos/id/342/100/100" // Woman
  ];

  return (
    <div className="flex items-center -space-x-4">
      {avatars.map((src, index) => (
        <div 
          key={index} 
          className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border-[3px] border-white/20 overflow-hidden hover:z-10 transition-transform hover:-translate-y-1"
        >
          <img 
            src={src} 
            alt={`User ${index + 1}`} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;


