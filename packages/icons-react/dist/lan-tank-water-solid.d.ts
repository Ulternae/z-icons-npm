import React from 'react';

export interface LanTankWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTankWaterSolid: React.FC<LanTankWaterSolidProps>;
export default LanTankWaterSolid;
