import React from 'react';

export interface LanPeaceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeaceSolid: React.FC<LanPeaceSolidProps>;
export default LanPeaceSolid;
