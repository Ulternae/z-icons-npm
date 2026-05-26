import React from 'react';

export interface LanCommentAltMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltMinus: React.FC<LanCommentAltMinusProps>;
export default LanCommentAltMinus;
