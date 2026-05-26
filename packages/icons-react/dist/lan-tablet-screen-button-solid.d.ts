import React from 'react';

export interface LanTabletScreenButtonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTabletScreenButtonSolid: React.FC<LanTabletScreenButtonSolidProps>;
export default LanTabletScreenButtonSolid;
