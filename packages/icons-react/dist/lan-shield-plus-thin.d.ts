import React from 'react';

export interface LanShieldPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldPlusThin: React.FC<LanShieldPlusThinProps>;
export default LanShieldPlusThin;
