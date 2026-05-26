import React from 'react';

export interface LanTruckTowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckTow: React.FC<LanTruckTowProps>;
export default LanTruckTow;
