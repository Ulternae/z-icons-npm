import React from 'react';

export interface LanCoinBlankThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinBlankThin: React.FC<LanCoinBlankThinProps>;
export default LanCoinBlankThin;
