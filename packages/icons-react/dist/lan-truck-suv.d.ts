import React from 'react';

export interface LanTruckSuvProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckSuv: React.FC<LanTruckSuvProps>;
export default LanTruckSuv;
