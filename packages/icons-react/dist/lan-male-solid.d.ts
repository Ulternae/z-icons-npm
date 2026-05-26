import React from 'react';

export interface LanMaleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaleSolid: React.FC<LanMaleSolidProps>;
export default LanMaleSolid;
