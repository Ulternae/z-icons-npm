import React from 'react';

export interface LanDrumThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrumThin: React.FC<LanDrumThinProps>;
export default LanDrumThin;
