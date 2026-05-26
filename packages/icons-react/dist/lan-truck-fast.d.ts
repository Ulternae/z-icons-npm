import React from 'react';

export interface LanTruckFastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFast: React.FC<LanTruckFastProps>;
export default LanTruckFast;
