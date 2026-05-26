import React from 'react';

export interface LanSandwichRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSandwichRegular: React.FC<LanSandwichRegularProps>;
export default LanSandwichRegular;
