import React from 'react';

export interface BruUnsplashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUnsplash: React.FC<BruUnsplashProps>;
export default BruUnsplash;
