import React from 'react';

export interface LanSquareSmallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareSmall: React.FC<LanSquareSmallProps>;
export default LanSquareSmall;
