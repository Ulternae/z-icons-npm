import React from 'react';

export interface LanArrowsMinimizeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsMinimizeRegular: React.FC<LanArrowsMinimizeRegularProps>;
export default LanArrowsMinimizeRegular;
