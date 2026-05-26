import React from 'react';

export interface LanTabletRuggedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTabletRuggedSolid: React.FC<LanTabletRuggedSolidProps>;
export default LanTabletRuggedSolid;
