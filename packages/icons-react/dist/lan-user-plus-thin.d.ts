import React from 'react';

export interface LanUserPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserPlusThin: React.FC<LanUserPlusThinProps>;
export default LanUserPlusThin;
