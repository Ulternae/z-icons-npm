import React from 'react';

export interface LanTowerCellRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTowerCellRegular: React.FC<LanTowerCellRegularProps>;
export default LanTowerCellRegular;
