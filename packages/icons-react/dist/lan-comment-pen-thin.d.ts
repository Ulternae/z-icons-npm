import React from 'react';

export interface LanCommentPenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentPenThin: React.FC<LanCommentPenThinProps>;
export default LanCommentPenThin;
