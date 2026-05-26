import React from 'react';

export interface LanUserMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMinus: React.FC<LanUserMinusProps>;
export default LanUserMinus;
