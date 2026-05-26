import React from 'react';

export interface LanCommentPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentPlusThin: React.FC<LanCommentPlusThinProps>;
export default LanCommentPlusThin;
