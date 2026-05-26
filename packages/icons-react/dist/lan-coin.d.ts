import React from 'react';

export interface LanCoinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoin: React.FC<LanCoinProps>;
export default LanCoin;
