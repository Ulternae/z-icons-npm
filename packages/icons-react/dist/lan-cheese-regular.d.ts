import React from 'react';

export interface LanCheeseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheeseRegular: React.FC<LanCheeseRegularProps>;
export default LanCheeseRegular;
