import React from 'react';

export interface BruUnisonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUnison: React.FC<BruUnisonProps>;
export default BruUnison;
