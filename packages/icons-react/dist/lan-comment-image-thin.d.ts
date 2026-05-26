import React from 'react';

export interface LanCommentImageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentImageThin: React.FC<LanCommentImageThinProps>;
export default LanCommentImageThin;
