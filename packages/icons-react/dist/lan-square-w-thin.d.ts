import React from 'react';

export interface LanSquareWThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareWThin: React.FC<LanSquareWThinProps>;
export default LanSquareWThin;
