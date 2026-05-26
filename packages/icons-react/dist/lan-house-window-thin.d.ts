import React from 'react';

export interface LanHouseWindowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseWindowThin: React.FC<LanHouseWindowThinProps>;
export default LanHouseWindowThin;
