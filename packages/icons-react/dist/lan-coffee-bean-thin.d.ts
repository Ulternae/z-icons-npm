import React from 'react';

export interface LanCoffeeBeanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffeeBeanThin: React.FC<LanCoffeeBeanThinProps>;
export default LanCoffeeBeanThin;
