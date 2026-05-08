import React from 'react';

export interface MinaSixCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSixCircleSolid: React.FC<MinaSixCircleSolidProps>;
export default MinaSixCircleSolid;
