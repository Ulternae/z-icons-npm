import React from 'react';

export interface LanLifeRingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLifeRingThin: React.FC<LanLifeRingThinProps>;
export default LanLifeRingThin;
