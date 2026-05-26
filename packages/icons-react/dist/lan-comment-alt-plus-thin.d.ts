import React from 'react';

export interface LanCommentAltPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltPlusThin: React.FC<LanCommentAltPlusThinProps>;
export default LanCommentAltPlusThin;
