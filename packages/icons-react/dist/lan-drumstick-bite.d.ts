import React from 'react';

export interface LanDrumstickBiteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrumstickBite: React.FC<LanDrumstickBiteProps>;
export default LanDrumstickBite;
