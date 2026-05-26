import React from 'react';

export interface LanGarageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarageRegular: React.FC<LanGarageRegularProps>;
export default LanGarageRegular;
