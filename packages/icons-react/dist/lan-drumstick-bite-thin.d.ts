import React from 'react';

export interface LanDrumstickBiteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrumstickBiteThin: React.FC<LanDrumstickBiteThinProps>;
export default LanDrumstickBiteThin;
