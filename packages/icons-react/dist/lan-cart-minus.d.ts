import React from 'react';

export interface LanCartMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartMinus: React.FC<LanCartMinusProps>;
export default LanCartMinus;
