import React from 'react';

export interface LanHouseNightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseNightThin: React.FC<LanHouseNightThinProps>;
export default LanHouseNightThin;
