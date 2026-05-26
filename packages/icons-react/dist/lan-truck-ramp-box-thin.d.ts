import React from 'react';

export interface LanTruckRampBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckRampBoxThin: React.FC<LanTruckRampBoxThinProps>;
export default LanTruckRampBoxThin;
