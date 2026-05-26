import React from 'react';

export interface LanGarageEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarageEmptyRegular: React.FC<LanGarageEmptyRegularProps>;
export default LanGarageEmptyRegular;
