import React from 'react';

export interface LanPlusMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlusMinus: React.FC<LanPlusMinusProps>;
export default LanPlusMinus;
