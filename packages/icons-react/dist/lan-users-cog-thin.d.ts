import React from 'react';

export interface LanUsersCogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersCogThin: React.FC<LanUsersCogThinProps>;
export default LanUsersCogThin;
