import React from 'react';

export interface LanCommentCaptionsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentCaptionsThin: React.FC<LanCommentCaptionsThinProps>;
export default LanCommentCaptionsThin;
