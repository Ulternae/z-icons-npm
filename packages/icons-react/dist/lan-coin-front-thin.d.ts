import React from 'react';

export interface LanCoinFrontThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinFrontThin: React.FC<LanCoinFrontThinProps>;
export default LanCoinFrontThin;
