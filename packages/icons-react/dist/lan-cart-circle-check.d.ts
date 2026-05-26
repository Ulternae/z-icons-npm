import React from 'react';

export interface LanCartCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartCircleCheck: React.FC<LanCartCircleCheckProps>;
export default LanCartCircleCheck;
