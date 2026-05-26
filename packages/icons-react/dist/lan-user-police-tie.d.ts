import React from 'react';

export interface LanUserPoliceTieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserPoliceTie: React.FC<LanUserPoliceTieProps>;
export default LanUserPoliceTie;
