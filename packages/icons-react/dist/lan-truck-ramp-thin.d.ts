import React from 'react';

export interface LanTruckRampThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckRampThin: React.FC<LanTruckRampThinProps>;
export default LanTruckRampThin;
