import React from 'react';

export interface LanSquareHalfStrokeHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareHalfStrokeHorizontal: React.FC<LanSquareHalfStrokeHorizontalProps>;
export default LanSquareHalfStrokeHorizontal;
