import React from 'react';

export interface BruPiedPiperHatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPiedPiperHat: React.FC<BruPiedPiperHatProps>;
export default BruPiedPiperHat;
