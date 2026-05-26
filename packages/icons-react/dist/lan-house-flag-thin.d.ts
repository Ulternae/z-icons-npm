import React from 'react';

export interface LanHouseFlagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseFlagThin: React.FC<LanHouseFlagThinProps>;
export default LanHouseFlagThin;
