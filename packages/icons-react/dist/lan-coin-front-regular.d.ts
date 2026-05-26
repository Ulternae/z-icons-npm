import React from 'react';

export interface LanCoinFrontRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinFrontRegular: React.FC<LanCoinFrontRegularProps>;
export default LanCoinFrontRegular;
