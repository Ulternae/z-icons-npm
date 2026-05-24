import React from 'react';

export interface BruPiedPiperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPiedPiper: React.FC<BruPiedPiperProps>;
export default BruPiedPiper;
