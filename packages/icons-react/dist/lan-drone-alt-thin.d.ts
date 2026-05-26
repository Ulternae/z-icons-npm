import React from 'react';

export interface LanDroneAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDroneAltThin: React.FC<LanDroneAltThinProps>;
export default LanDroneAltThin;
