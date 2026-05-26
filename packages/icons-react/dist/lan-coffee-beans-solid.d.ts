import React from 'react';

export interface LanCoffeeBeansSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffeeBeansSolid: React.FC<LanCoffeeBeansSolidProps>;
export default LanCoffeeBeansSolid;
