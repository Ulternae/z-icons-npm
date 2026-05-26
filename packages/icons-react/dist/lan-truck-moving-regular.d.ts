import React from 'react';

export interface LanTruckMovingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckMovingRegular: React.FC<LanTruckMovingRegularProps>;
export default LanTruckMovingRegular;
