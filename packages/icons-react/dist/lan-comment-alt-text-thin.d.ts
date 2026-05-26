import React from 'react';

export interface LanCommentAltTextThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltTextThin: React.FC<LanCommentAltTextThinProps>;
export default LanCommentAltTextThin;
