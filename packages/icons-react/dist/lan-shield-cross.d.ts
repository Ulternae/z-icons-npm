import React from 'react';

export interface LanShieldCrossProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldCross: React.FC<LanShieldCrossProps>;
export default LanShieldCross;
