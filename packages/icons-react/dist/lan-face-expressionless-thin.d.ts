import React from 'react';

export interface LanFaceExpressionlessThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceExpressionlessThin: React.FC<LanFaceExpressionlessThinProps>;
export default LanFaceExpressionlessThin;
