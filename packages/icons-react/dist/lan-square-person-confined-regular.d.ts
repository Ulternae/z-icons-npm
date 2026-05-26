import React from 'react';

export interface LanSquarePersonConfinedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePersonConfinedRegular: React.FC<LanSquarePersonConfinedRegularProps>;
export default LanSquarePersonConfinedRegular;
