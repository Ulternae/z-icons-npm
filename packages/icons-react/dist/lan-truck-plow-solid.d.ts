import React from 'react';

export interface LanTruckPlowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckPlowSolid: React.FC<LanTruckPlowSolidProps>;
export default LanTruckPlowSolid;
