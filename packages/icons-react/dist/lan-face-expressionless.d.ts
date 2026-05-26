import React from 'react';

export interface LanFaceExpressionlessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceExpressionless: React.FC<LanFaceExpressionlessProps>;
export default LanFaceExpressionless;
