import React from 'react';

export interface LanPizzaSliceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPizzaSlice: React.FC<LanPizzaSliceProps>;
export default LanPizzaSlice;
