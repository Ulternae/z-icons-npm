import React from 'react';

export interface LanArrowUpBigSmallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowUpBigSmall: React.FC<LanArrowUpBigSmallProps>;
export default LanArrowUpBigSmall;
