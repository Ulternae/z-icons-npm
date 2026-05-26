import React from 'react';

export interface LanArrowDownBigSmallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowDownBigSmall: React.FC<LanArrowDownBigSmallProps>;
export default LanArrowDownBigSmall;
