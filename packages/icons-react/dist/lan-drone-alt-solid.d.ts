import React from 'react';

export interface LanDroneAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDroneAltSolid: React.FC<LanDroneAltSolidProps>;
export default LanDroneAltSolid;
