import React from 'react';

export interface LanSquarePersonConfinedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePersonConfined: React.FC<LanSquarePersonConfinedProps>;
export default LanSquarePersonConfined;
