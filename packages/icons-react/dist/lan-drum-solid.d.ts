import React from 'react';

export interface LanDrumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrumSolid: React.FC<LanDrumSolidProps>;
export default LanDrumSolid;
