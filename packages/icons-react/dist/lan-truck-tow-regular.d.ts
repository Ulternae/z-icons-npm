import React from 'react';

export interface LanTruckTowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckTowRegular: React.FC<LanTruckTowRegularProps>;
export default LanTruckTowRegular;
