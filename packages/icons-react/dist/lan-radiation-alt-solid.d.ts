import React from 'react';

export interface LanRadiationAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRadiationAltSolid: React.FC<LanRadiationAltSolidProps>;
export default LanRadiationAltSolid;
