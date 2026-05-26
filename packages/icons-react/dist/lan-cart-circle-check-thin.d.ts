import React from 'react';

export interface LanCartCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartCircleCheckThin: React.FC<LanCartCircleCheckThinProps>;
export default LanCartCircleCheckThin;
