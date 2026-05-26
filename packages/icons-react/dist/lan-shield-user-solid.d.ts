import React from 'react';

export interface LanShieldUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldUserSolid: React.FC<LanShieldUserSolidProps>;
export default LanShieldUserSolid;
