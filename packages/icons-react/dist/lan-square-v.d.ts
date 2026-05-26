import React from 'react';

export interface LanSquareVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareV: React.FC<LanSquareVProps>;
export default LanSquareV;
