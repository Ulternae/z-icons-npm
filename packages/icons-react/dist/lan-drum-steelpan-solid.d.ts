import React from 'react';

export interface LanDrumSteelpanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrumSteelpanSolid: React.FC<LanDrumSteelpanSolidProps>;
export default LanDrumSteelpanSolid;
