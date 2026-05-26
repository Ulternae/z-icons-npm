import React from 'react';

export interface LanSquarePersonConfinedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePersonConfinedThin: React.FC<LanSquarePersonConfinedThinProps>;
export default LanSquarePersonConfinedThin;
