import React from 'react';

export interface LanCakeCandlesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCakeCandles: React.FC<LanCakeCandlesProps>;
export default LanCakeCandles;
