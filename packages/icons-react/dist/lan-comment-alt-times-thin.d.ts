import React from 'react';

export interface LanCommentAltTimesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltTimesThin: React.FC<LanCommentAltTimesThinProps>;
export default LanCommentAltTimesThin;
