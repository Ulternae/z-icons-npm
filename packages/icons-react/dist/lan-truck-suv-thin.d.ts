import React from 'react';

export interface LanTruckSuvThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckSuvThin: React.FC<LanTruckSuvThinProps>;
export default LanTruckSuvThin;
