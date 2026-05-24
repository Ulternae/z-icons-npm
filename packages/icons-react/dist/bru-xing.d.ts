import React from 'react';

export interface BruXingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruXing: React.FC<BruXingProps>;
export default BruXing;
