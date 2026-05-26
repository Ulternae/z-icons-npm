import React from 'react';

export interface LanUserPoliceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserPoliceThin: React.FC<LanUserPoliceThinProps>;
export default LanUserPoliceThin;
