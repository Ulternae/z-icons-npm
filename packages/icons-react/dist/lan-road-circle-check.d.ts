import React from 'react';

export interface LanRoadCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadCircleCheck: React.FC<LanRoadCircleCheckProps>;
export default LanRoadCircleCheck;
