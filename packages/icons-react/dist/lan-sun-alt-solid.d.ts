import React from 'react';

export interface LanSunAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunAltSolid: React.FC<LanSunAltSolidProps>;
export default LanSunAltSolid;
