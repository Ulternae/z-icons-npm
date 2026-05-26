import React from 'react';

export interface LanCommentDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentDot: React.FC<LanCommentDotProps>;
export default LanCommentDot;
