import React from 'react';

export interface BruStackOverflowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruStackOverflow: React.FC<BruStackOverflowProps>;
export default BruStackOverflow;
