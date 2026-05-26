import React from 'react';

export interface LanLandMineOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandMineOnRegular: React.FC<LanLandMineOnRegularProps>;
export default LanLandMineOnRegular;
