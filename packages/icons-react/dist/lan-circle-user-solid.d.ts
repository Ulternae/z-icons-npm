import React from 'react';

export interface LanCircleUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleUserSolid: React.FC<LanCircleUserSolidProps>;
export default LanCircleUserSolid;
