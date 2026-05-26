import React from 'react';

export interface LanIceCreamRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIceCreamRegular: React.FC<LanIceCreamRegularProps>;
export default LanIceCreamRegular;
