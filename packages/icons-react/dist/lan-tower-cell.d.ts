import React from 'react';

export interface LanTowerCellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTowerCell: React.FC<LanTowerCellProps>;
export default LanTowerCell;
