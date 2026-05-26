import React from 'react';

export interface LanCircleHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHeartSolid: React.FC<LanCircleHeartSolidProps>;
export default LanCircleHeartSolid;
