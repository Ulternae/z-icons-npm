import React from 'react';

export interface LanHollyBerryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHollyBerryRegular: React.FC<LanHollyBerryRegularProps>;
export default LanHollyBerryRegular;
