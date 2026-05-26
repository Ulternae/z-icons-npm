import React from 'react';

export interface LanTruckFieldUnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFieldUnThin: React.FC<LanTruckFieldUnThinProps>;
export default LanTruckFieldUnThin;
