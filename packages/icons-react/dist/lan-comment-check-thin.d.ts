import React from 'react';

export interface LanCommentCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentCheckThin: React.FC<LanCommentCheckThinProps>;
export default LanCommentCheckThin;
