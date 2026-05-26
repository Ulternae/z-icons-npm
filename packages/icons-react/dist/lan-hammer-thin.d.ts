import React from 'react';

export interface LanHammerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHammerThin: React.FC<LanHammerThinProps>;
export default LanHammerThin;
