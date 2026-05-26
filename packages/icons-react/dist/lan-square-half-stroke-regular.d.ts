import React from 'react';

export interface LanSquareHalfStrokeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareHalfStrokeRegular: React.FC<LanSquareHalfStrokeRegularProps>;
export default LanSquareHalfStrokeRegular;
