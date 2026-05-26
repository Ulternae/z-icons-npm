import React from 'react';

export interface LanCupcakeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCupcakeRegular: React.FC<LanCupcakeRegularProps>;
export default LanCupcakeRegular;
