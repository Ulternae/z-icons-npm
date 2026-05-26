import React from 'react';

export interface LanTruckFieldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFieldRegular: React.FC<LanTruckFieldRegularProps>;
export default LanTruckFieldRegular;
