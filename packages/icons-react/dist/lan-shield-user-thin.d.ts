import React from 'react';

export interface LanShieldUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldUserThin: React.FC<LanShieldUserThinProps>;
export default LanShieldUserThin;
