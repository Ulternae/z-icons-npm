import React from 'react';

export interface LanDoorOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDoorOpenSolid: React.FC<LanDoorOpenSolidProps>;
export default LanDoorOpenSolid;
