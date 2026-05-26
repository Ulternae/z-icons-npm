import React from 'react';

export interface LanCarGarageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarGarageRegular: React.FC<LanCarGarageRegularProps>;
export default LanCarGarageRegular;
