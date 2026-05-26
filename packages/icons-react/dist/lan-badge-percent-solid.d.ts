import React from 'react';

export interface LanBadgePercentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgePercentSolid: React.FC<LanBadgePercentSolidProps>;
export default LanBadgePercentSolid;
