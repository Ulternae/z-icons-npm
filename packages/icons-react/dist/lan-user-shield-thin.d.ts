import React from 'react';

export interface LanUserShieldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserShieldThin: React.FC<LanUserShieldThinProps>;
export default LanUserShieldThin;
