import React from 'react';

export interface LanCoffeePotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffeePotRegular: React.FC<LanCoffeePotRegularProps>;
export default LanCoffeePotRegular;
