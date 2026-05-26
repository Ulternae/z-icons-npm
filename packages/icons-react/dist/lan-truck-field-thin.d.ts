import React from 'react';

export interface LanTruckFieldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFieldThin: React.FC<LanTruckFieldThinProps>;
export default LanTruckFieldThin;
