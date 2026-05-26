import React from 'react';

export interface LanRoadCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadCircleCheckThin: React.FC<LanRoadCircleCheckThinProps>;
export default LanRoadCircleCheckThin;
