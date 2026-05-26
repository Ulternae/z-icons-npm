import React from 'react';

export interface LanBadgeCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgeCheckSolid: React.FC<LanBadgeCheckSolidProps>;
export default LanBadgeCheckSolid;
