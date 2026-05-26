import React from 'react';

export interface LanUserDashedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserDashedThin: React.FC<LanUserDashedThinProps>;
export default LanUserDashedThin;
