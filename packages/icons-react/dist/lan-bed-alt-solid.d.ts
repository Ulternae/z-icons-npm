import React from 'react';

export interface LanBedAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedAltSolid: React.FC<LanBedAltSolidProps>;
export default LanBedAltSolid;
