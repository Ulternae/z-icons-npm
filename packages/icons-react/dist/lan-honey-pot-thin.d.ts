import React from 'react';

export interface LanHoneyPotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHoneyPotThin: React.FC<LanHoneyPotThinProps>;
export default LanHoneyPotThin;
