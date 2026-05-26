import React from 'react';

export interface LanBoxesPackingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxesPacking: React.FC<LanBoxesPackingProps>;
export default LanBoxesPacking;
