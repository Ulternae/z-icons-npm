import React from 'react';

export interface LanBurstNewSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurstNewSolid: React.FC<LanBurstNewSolidProps>;
export default LanBurstNewSolid;
