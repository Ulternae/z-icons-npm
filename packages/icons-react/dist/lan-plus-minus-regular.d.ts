import React from 'react';

export interface LanPlusMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlusMinusRegular: React.FC<LanPlusMinusRegularProps>;
export default LanPlusMinusRegular;
