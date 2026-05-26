import React from 'react';

export interface LanLandMineOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandMineOnSolid: React.FC<LanLandMineOnSolidProps>;
export default LanLandMineOnSolid;
