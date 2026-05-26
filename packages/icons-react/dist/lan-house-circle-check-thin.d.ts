import React from 'react';

export interface LanHouseCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseCircleCheckThin: React.FC<LanHouseCircleCheckThinProps>;
export default LanHouseCircleCheckThin;
