import React from 'react';

export interface LanCommentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentThin: React.FC<LanCommentThinProps>;
export default LanCommentThin;
