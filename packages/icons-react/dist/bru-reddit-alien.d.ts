import React from 'react';

export interface BruRedditAlienProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruRedditAlien: React.FC<BruRedditAlienProps>;
export default BruRedditAlien;
