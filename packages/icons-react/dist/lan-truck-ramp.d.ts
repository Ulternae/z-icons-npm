import React from 'react';

export interface LanTruckRampProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckRamp: React.FC<LanTruckRampProps>;
export default LanTruckRamp;
