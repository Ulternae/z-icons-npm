import React from 'react';

export interface LanTruckRampRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckRampRegular: React.FC<LanTruckRampRegularProps>;
export default LanTruckRampRegular;
