import React from 'react';

export interface LanSwordLaserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwordLaserSolid: React.FC<LanSwordLaserSolidProps>;
export default LanSwordLaserSolid;
