import React from 'react';

export interface LanSquareHalfStrokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareHalfStroke: React.FC<LanSquareHalfStrokeProps>;
export default LanSquareHalfStroke;
