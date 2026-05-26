import React from 'react';

export interface LanSquareEllipsisThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEllipsisThin: React.FC<LanSquareEllipsisThinProps>;
export default LanSquareEllipsisThin;
