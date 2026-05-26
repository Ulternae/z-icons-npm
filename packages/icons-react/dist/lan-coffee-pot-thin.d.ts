import React from 'react';

export interface LanCoffeePotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffeePotThin: React.FC<LanCoffeePotThinProps>;
export default LanCoffeePotThin;
