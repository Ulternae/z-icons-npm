import React from 'react';

export interface LanUserHairSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserHairSolid: React.FC<LanUserHairSolidProps>;
export default LanUserHairSolid;
