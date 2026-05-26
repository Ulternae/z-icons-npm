import React from 'react';

export interface LanHoneyPotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHoneyPot: React.FC<LanHoneyPotProps>;
export default LanHoneyPot;
