import React from 'react';

export interface MinaSixOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSixOctagonSolid: React.FC<MinaSixOctagonSolidProps>;
export default MinaSixOctagonSolid;
