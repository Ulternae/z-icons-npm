import React from 'react';

export interface BruPiedPiperPpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPiedPiperPp: React.FC<BruPiedPiperPpProps>;
export default BruPiedPiperPp;
