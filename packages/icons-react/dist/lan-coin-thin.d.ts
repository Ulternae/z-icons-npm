import React from 'react';

export interface LanCoinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinThin: React.FC<LanCoinThinProps>;
export default LanCoinThin;
