import React from 'react';

export interface LanPizzaSliceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPizzaSliceSolid: React.FC<LanPizzaSliceSolidProps>;
export default LanPizzaSliceSolid;
