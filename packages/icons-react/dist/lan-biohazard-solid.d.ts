import React from 'react';

export interface LanBiohazardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBiohazardSolid: React.FC<LanBiohazardSolidProps>;
export default LanBiohazardSolid;
