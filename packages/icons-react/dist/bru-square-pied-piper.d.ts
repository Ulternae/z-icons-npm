import React from 'react';

export interface BruSquarePiedPiperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquarePiedPiper: React.FC<BruSquarePiedPiperProps>;
export default BruSquarePiedPiper;
