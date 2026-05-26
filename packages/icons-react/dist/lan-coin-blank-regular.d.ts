import React from 'react';

export interface LanCoinBlankRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinBlankRegular: React.FC<LanCoinBlankRegularProps>;
export default LanCoinBlankRegular;
