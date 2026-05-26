import React from 'react';

export interface LanRocketThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRocketThin: React.FC<LanRocketThinProps>;
export default LanRocketThin;
