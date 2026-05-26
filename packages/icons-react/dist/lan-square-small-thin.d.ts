import React from 'react';

export interface LanSquareSmallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareSmallThin: React.FC<LanSquareSmallThinProps>;
export default LanSquareSmallThin;
