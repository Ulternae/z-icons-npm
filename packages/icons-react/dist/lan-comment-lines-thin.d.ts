import React from 'react';

export interface LanCommentLinesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentLinesThin: React.FC<LanCommentLinesThinProps>;
export default LanCommentLinesThin;
