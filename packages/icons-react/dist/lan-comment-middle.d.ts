import React from 'react';

export interface LanCommentMiddleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentMiddle: React.FC<LanCommentMiddleProps>;
export default LanCommentMiddle;
