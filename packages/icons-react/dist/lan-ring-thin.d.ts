import React from 'react';

export interface LanRingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRingThin: React.FC<LanRingThinProps>;
export default LanRingThin;
