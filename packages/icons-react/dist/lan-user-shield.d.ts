import React from 'react';

export interface LanUserShieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserShield: React.FC<LanUserShieldProps>;
export default LanUserShield;
