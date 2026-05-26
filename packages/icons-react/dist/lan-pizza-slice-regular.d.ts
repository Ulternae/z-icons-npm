import React from 'react';

export interface LanPizzaSliceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPizzaSliceRegular: React.FC<LanPizzaSliceRegularProps>;
export default LanPizzaSliceRegular;
