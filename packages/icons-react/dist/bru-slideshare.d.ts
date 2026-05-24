import React from 'react';

export interface BruSlideshareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSlideshare: React.FC<BruSlideshareProps>;
export default BruSlideshare;
