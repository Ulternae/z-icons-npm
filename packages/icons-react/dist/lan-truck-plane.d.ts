import React from 'react';

export interface LanTruckPlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckPlane: React.FC<LanTruckPlaneProps>;
export default LanTruckPlane;
