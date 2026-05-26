import React from 'react';

export interface LanCoinsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinsSolid: React.FC<LanCoinsSolidProps>;
export default LanCoinsSolid;
