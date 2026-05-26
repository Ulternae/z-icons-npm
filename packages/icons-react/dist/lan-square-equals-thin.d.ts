import React from 'react';

export interface LanSquareEqualsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEqualsThin: React.FC<LanSquareEqualsThinProps>;
export default LanSquareEqualsThin;
