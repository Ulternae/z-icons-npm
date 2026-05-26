import React from 'react';

export interface LanTabletButtonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTabletButtonSolid: React.FC<LanTabletButtonSolidProps>;
export default LanTabletButtonSolid;
