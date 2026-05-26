import React from 'react';

export interface LanDivideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDivideSolid: React.FC<LanDivideSolidProps>;
export default LanDivideSolid;
