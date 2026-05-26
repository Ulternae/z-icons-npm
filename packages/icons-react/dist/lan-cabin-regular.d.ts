import React from 'react';

export interface LanCabinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCabinRegular: React.FC<LanCabinRegularProps>;
export default LanCabinRegular;
