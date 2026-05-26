import React from 'react';

export interface LanUserKeyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserKeyThin: React.FC<LanUserKeyThinProps>;
export default LanUserKeyThin;
