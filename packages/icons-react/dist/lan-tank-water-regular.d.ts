import React from 'react';

export interface LanTankWaterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTankWaterRegular: React.FC<LanTankWaterRegularProps>;
export default LanTankWaterRegular;
