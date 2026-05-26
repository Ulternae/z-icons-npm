import React from 'react';

export interface LanCoffeePotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffeePotSolid: React.FC<LanCoffeePotSolidProps>;
export default LanCoffeePotSolid;
