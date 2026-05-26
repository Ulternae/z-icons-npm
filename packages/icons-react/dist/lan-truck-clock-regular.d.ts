import React from 'react';

export interface LanTruckClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckClockRegular: React.FC<LanTruckClockRegularProps>;
export default LanTruckClockRegular;
