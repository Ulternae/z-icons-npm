import React from 'react';

export interface LanCircleNSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleNSolid: React.FC<LanCircleNSolidProps>;
export default LanCircleNSolid;
