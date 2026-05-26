import React from 'react';

export interface LanFileShieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileShieldSolid: React.FC<LanFileShieldSolidProps>;
export default LanFileShieldSolid;
