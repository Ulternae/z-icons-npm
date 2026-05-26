import React from 'react';

export interface LanTruckContainerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckContainerSolid: React.FC<LanTruckContainerSolidProps>;
export default LanTruckContainerSolid;
