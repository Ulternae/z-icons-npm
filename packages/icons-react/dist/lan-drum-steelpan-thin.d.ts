import React from 'react';

export interface LanDrumSteelpanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrumSteelpanThin: React.FC<LanDrumSteelpanThinProps>;
export default LanDrumSteelpanThin;
