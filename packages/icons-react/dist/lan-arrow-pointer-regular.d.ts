import React from 'react';

export interface LanArrowPointerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowPointerRegular: React.FC<LanArrowPointerRegularProps>;
export default LanArrowPointerRegular;
