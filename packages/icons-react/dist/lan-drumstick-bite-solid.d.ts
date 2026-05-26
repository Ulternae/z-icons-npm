import React from 'react';

export interface LanDrumstickBiteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrumstickBiteSolid: React.FC<LanDrumstickBiteSolidProps>;
export default LanDrumstickBiteSolid;
