import React from 'react';

export interface LanTowerCellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTowerCellSolid: React.FC<LanTowerCellSolidProps>;
export default LanTowerCellSolid;
