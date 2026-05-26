import React from 'react';

export interface LanSquareUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareUserThin: React.FC<LanSquareUserThinProps>;
export default LanSquareUserThin;
