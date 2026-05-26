import React from 'react';

export interface LanRocketVerticalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRocketVerticalThin: React.FC<LanRocketVerticalThinProps>;
export default LanRocketVerticalThin;
