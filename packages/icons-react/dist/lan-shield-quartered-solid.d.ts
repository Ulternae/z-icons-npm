import React from 'react';

export interface LanShieldQuarteredSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldQuarteredSolid: React.FC<LanShieldQuarteredSolidProps>;
export default LanShieldQuarteredSolid;
