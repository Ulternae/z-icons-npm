import React from 'react';

export interface LanMaceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaceSolid: React.FC<LanMaceSolidProps>;
export default LanMaceSolid;
