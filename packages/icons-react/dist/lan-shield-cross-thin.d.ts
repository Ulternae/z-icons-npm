import React from 'react';

export interface LanShieldCrossThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldCrossThin: React.FC<LanShieldCrossThinProps>;
export default LanShieldCrossThin;
