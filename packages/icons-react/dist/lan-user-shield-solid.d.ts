import React from 'react';

export interface LanUserShieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserShieldSolid: React.FC<LanUserShieldSolidProps>;
export default LanUserShieldSolid;
