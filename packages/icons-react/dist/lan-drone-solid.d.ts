import React from 'react';

export interface LanDroneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDroneSolid: React.FC<LanDroneSolidProps>;
export default LanDroneSolid;
