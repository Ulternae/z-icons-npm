import React from 'react';

export interface LanShieldCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldCheckThin: React.FC<LanShieldCheckThinProps>;
export default LanShieldCheckThin;
