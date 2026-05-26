import React from 'react';

export interface LanCurrencySignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCurrencySignSolid: React.FC<LanCurrencySignSolidProps>;
export default LanCurrencySignSolid;
