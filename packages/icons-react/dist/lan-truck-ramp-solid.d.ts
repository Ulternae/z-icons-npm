import React from 'react';

export interface LanTruckRampSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckRampSolid: React.FC<LanTruckRampSolidProps>;
export default LanTruckRampSolid;
