import React from 'react';

export interface BruPixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPix: React.FC<BruPixProps>;
export default BruPix;
