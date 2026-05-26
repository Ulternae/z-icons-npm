import React from 'react';

export interface LanCircleNotchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleNotchSolid: React.FC<LanCircleNotchSolidProps>;
export default LanCircleNotchSolid;
