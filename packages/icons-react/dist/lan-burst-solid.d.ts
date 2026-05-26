import React from 'react';

export interface LanBurstSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurstSolid: React.FC<LanBurstSolidProps>;
export default LanBurstSolid;
