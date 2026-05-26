import React from 'react';

export interface LanSquareHalfStrokeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareHalfStrokeThin: React.FC<LanSquareHalfStrokeThinProps>;
export default LanSquareHalfStrokeThin;
