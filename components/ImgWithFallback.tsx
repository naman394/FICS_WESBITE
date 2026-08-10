'use client';

import React from 'react';

interface ImgWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc: string;
  alt: string;
}

export default function ImgWithFallback({ fallbackSrc, alt, ...props }: ImgWithFallbackProps) {
  return (
    <img
      {...props}
      alt={alt}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = fallbackSrc;
      }}
    />
  );
}
