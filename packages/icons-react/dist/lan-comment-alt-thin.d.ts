import React from 'react';

export interface LanCommentAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltThin: React.FC<LanCommentAltThinProps>;
export default LanCommentAltThin;
