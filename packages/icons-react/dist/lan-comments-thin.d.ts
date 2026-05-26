import React from 'react';

export interface LanCommentsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentsThin: React.FC<LanCommentsThinProps>;
export default LanCommentsThin;
