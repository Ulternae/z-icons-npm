import React from 'react';

export interface BruSquarePinterestProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquarePinterest: React.FC<BruSquarePinterestProps>;
export default BruSquarePinterest;
