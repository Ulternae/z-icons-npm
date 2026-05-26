import React from 'react';

export interface LanCarBumpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBumpSolid: React.FC<LanCarBumpSolidProps>;
export default LanCarBumpSolid;
