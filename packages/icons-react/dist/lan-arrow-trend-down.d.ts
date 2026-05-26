import React from 'react';

export interface LanArrowTrendDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowTrendDown: React.FC<LanArrowTrendDownProps>;
export default LanArrowTrendDown;
