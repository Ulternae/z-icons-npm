import React from 'react';

export interface LanMortarPestleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMortarPestleSolid: React.FC<LanMortarPestleSolidProps>;
export default LanMortarPestleSolid;
