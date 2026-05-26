import React from 'react';

export interface LanRocketVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRocketVerticalSolid: React.FC<LanRocketVerticalSolidProps>;
export default LanRocketVerticalSolid;
