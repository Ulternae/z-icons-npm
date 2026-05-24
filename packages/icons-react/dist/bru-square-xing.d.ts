import React from 'react';

export interface BruSquareXingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareXing: React.FC<BruSquareXingProps>;
export default BruSquareXing;
