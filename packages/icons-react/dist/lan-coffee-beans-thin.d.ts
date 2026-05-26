import React from 'react';

export interface LanCoffeeBeansThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffeeBeansThin: React.FC<LanCoffeeBeansThinProps>;
export default LanCoffeeBeansThin;
