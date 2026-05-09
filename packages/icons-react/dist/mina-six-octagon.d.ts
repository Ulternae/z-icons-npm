import React from 'react';

export interface MinaSixOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSixOctagon: React.FC<MinaSixOctagonProps>;
export default MinaSixOctagon;
