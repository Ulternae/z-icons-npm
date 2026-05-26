import React from 'react';

export interface LanTruckFieldUnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFieldUn: React.FC<LanTruckFieldUnProps>;
export default LanTruckFieldUn;
