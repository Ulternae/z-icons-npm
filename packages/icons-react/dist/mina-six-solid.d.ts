import React from 'react';

export interface MinaSixSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSixSolid: React.FC<MinaSixSolidProps>;
export default MinaSixSolid;
