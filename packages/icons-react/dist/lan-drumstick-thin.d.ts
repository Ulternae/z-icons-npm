import React from 'react';

export interface LanDrumstickThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrumstickThin: React.FC<LanDrumstickThinProps>;
export default LanDrumstickThin;
