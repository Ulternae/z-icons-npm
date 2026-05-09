import React from 'react';

export interface MinaSixCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSixCircle: React.FC<MinaSixCircleProps>;
export default MinaSixCircle;
