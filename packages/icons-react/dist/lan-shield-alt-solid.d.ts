import React from 'react';

export interface LanShieldAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldAltSolid: React.FC<LanShieldAltSolidProps>;
export default LanShieldAltSolid;
