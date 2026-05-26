import React from 'react';

export interface LanFileMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMinusRegular: React.FC<LanFileMinusRegularProps>;
export default LanFileMinusRegular;
