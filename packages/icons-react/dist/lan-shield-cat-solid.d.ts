import React from 'react';

export interface LanShieldCatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldCatSolid: React.FC<LanShieldCatSolidProps>;
export default LanShieldCatSolid;
