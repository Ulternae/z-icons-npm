import React from 'react';

export interface LanSquareSThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareSThin: React.FC<LanSquareSThinProps>;
export default LanSquareSThin;
