import React from 'react';

export interface LanOctagonDivideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonDivideSolid: React.FC<LanOctagonDivideSolidProps>;
export default LanOctagonDivideSolid;
