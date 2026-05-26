import React from 'react';

export interface LanCommentSmsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentSmsThin: React.FC<LanCommentSmsThinProps>;
export default LanCommentSmsThin;
