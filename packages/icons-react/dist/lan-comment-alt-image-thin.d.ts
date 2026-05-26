import React from 'react';

export interface LanCommentAltImageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltImageThin: React.FC<LanCommentAltImageThinProps>;
export default LanCommentAltImageThin;
