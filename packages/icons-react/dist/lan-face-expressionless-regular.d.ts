import React from 'react';

export interface LanFaceExpressionlessRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceExpressionlessRegular: React.FC<LanFaceExpressionlessRegularProps>;
export default LanFaceExpressionlessRegular;
