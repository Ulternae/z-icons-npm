import React from 'react';

export interface LanTruckFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFireThin: React.FC<LanTruckFireThinProps>;
export default LanTruckFireThin;
