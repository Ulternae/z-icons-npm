import React from 'react';

export interface LanTruckRampBoxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckRampBoxRegular: React.FC<LanTruckRampBoxRegularProps>;
export default LanTruckRampBoxRegular;
