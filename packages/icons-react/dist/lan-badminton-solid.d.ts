import React from 'react';

export interface LanBadmintonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadmintonSolid: React.FC<LanBadmintonSolidProps>;
export default LanBadmintonSolid;
