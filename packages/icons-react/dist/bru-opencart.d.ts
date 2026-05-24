import React from 'react';

export interface BruOpencartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruOpencart: React.FC<BruOpencartProps>;
export default BruOpencart;
