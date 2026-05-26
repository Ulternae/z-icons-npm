import React from 'react';

export interface LanTruckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckThin: React.FC<LanTruckThinProps>;
export default LanTruckThin;
