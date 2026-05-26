import React from 'react';

export interface LanShieldCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldCheckSolid: React.FC<LanShieldCheckSolidProps>;
export default LanShieldCheckSolid;
