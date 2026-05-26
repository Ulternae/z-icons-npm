import React from 'react';

export interface LanTowerCellThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTowerCellThin: React.FC<LanTowerCellThinProps>;
export default LanTowerCellThin;
