import React from 'react';

export interface LanHouseCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseCircleCheck: React.FC<LanHouseCircleCheckProps>;
export default LanHouseCircleCheck;
