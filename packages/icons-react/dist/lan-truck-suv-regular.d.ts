import React from 'react';

export interface LanTruckSuvRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckSuvRegular: React.FC<LanTruckSuvRegularProps>;
export default LanTruckSuvRegular;
