import React from 'react';

export interface LanCommentMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentMinus: React.FC<LanCommentMinusProps>;
export default LanCommentMinus;
