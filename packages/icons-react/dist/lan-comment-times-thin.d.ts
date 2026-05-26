import React from 'react';

export interface LanCommentTimesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentTimesThin: React.FC<LanCommentTimesThinProps>;
export default LanCommentTimesThin;
