import React from 'react';

export interface LanCarAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarAltThin: React.FC<LanCarAltThinProps>;
export default LanCarAltThin;
