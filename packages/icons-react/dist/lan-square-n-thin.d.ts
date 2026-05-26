import React from 'react';

export interface LanSquareNThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareNThin: React.FC<LanSquareNThinProps>;
export default LanSquareNThin;
