import React from 'react';

export interface LanPersonWalkingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonWalkingThin: React.FC<LanPersonWalkingThinProps>;
export default LanPersonWalkingThin;
