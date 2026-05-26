import React from 'react';

export interface LanCoinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinRegular: React.FC<LanCoinRegularProps>;
export default LanCoinRegular;
