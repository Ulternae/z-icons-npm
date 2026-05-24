import React from 'react';

export interface BruPiedPiperAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPiedPiperAlt: React.FC<BruPiedPiperAltProps>;
export default BruPiedPiperAlt;
