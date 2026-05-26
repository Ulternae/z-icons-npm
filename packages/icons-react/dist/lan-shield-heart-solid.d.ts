import React from 'react';

export interface LanShieldHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldHeartSolid: React.FC<LanShieldHeartSolidProps>;
export default LanShieldHeartSolid;
