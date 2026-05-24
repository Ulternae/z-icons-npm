import React from 'react';

export interface BruSquareUpworkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareUpwork: React.FC<BruSquareUpworkProps>;
export default BruSquareUpwork;
