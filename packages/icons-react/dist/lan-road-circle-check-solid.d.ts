import React from 'react';

export interface LanRoadCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadCircleCheckSolid: React.FC<LanRoadCircleCheckSolidProps>;
export default LanRoadCircleCheckSolid;
