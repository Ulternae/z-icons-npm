import React from 'react';

export interface LanCommentDotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentDotThin: React.FC<LanCommentDotThinProps>;
export default LanCommentDotThin;
