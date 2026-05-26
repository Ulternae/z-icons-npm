import React from 'react';

export interface LanSquareMillThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareMillThin: React.FC<LanSquareMillThinProps>;
export default LanSquareMillThin;
