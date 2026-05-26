import React from 'react';

export interface LanTruckRampBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckRampBoxSolid: React.FC<LanTruckRampBoxSolidProps>;
export default LanTruckRampBoxSolid;
