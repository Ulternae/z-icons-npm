import React from 'react';

export interface LanCoffeePotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffeePot: React.FC<LanCoffeePotProps>;
export default LanCoffeePot;
