import React from 'react';

export interface LanCoinVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinVerticalRegular: React.FC<LanCoinVerticalRegularProps>;
export default LanCoinVerticalRegular;
