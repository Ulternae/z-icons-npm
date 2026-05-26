import React from 'react';

export interface LanCommentNodesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentNodesThin: React.FC<LanCommentNodesThinProps>;
export default LanCommentNodesThin;
