import React from 'react';

export interface LanCircleHouseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHouseSolid: React.FC<LanCircleHouseSolidProps>;
export default LanCircleHouseSolid;
