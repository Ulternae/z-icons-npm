import React from 'react';

export interface LanCommentDotsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentDotsThin: React.FC<LanCommentDotsThinProps>;
export default LanCommentDotsThin;
