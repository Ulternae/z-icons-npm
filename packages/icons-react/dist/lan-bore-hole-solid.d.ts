import React from 'react';

export interface LanBoreHoleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoreHoleSolid: React.FC<LanBoreHoleSolidProps>;
export default LanBoreHoleSolid;
