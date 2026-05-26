import React from 'react';

export interface LanCoffeeBeanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffeeBeanRegular: React.FC<LanCoffeeBeanRegularProps>;
export default LanCoffeeBeanRegular;
