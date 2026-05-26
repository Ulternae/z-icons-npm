import React from 'react';

export interface LanBoxesPackingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxesPackingRegular: React.FC<LanBoxesPackingRegularProps>;
export default LanBoxesPackingRegular;
