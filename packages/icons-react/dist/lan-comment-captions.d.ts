import React from 'react';

export interface LanCommentCaptionsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentCaptions: React.FC<LanCommentCaptionsProps>;
export default LanCommentCaptions;
