import React from 'react';

export interface LanTruckFastThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFastThin: React.FC<LanTruckFastThinProps>;
export default LanTruckFastThin;
