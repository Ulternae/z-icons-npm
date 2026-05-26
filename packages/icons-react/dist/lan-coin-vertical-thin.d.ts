import React from 'react';

export interface LanCoinVerticalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinVerticalThin: React.FC<LanCoinVerticalThinProps>;
export default LanCoinVerticalThin;
