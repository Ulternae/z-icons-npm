import React from 'react';

export interface LanCommentDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentDots: React.FC<LanCommentDotsProps>;
export default LanCommentDots;
