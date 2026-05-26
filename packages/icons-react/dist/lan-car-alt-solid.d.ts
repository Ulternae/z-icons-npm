import React from 'react';

export interface LanCarAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarAltSolid: React.FC<LanCarAltSolidProps>;
export default LanCarAltSolid;
