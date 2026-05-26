import React from 'react';

export interface LanCommentTextThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentTextThin: React.FC<LanCommentTextThinProps>;
export default LanCommentTextThin;
