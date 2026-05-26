import React from 'react';

export interface LanShieldCrossSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldCrossSolid: React.FC<LanShieldCrossSolidProps>;
export default LanShieldCrossSolid;
