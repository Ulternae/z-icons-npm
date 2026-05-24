import React from 'react';

export interface BruSuperpowersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSuperpowers: React.FC<BruSuperpowersProps>;
export default BruSuperpowers;
