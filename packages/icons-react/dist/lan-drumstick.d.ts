import React from 'react';

export interface LanDrumstickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrumstick: React.FC<LanDrumstickProps>;
export default LanDrumstick;
