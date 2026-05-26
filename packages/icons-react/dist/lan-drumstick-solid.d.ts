import React from 'react';

export interface LanDrumstickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrumstickSolid: React.FC<LanDrumstickSolidProps>;
export default LanDrumstickSolid;
