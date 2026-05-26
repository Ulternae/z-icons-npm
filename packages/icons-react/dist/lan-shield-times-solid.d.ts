import React from 'react';

export interface LanShieldTimesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldTimesSolid: React.FC<LanShieldTimesSolidProps>;
export default LanShieldTimesSolid;
