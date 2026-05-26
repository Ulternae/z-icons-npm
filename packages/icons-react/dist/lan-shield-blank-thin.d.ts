import React from 'react';

export interface LanShieldBlankThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldBlankThin: React.FC<LanShieldBlankThinProps>;
export default LanShieldBlankThin;
