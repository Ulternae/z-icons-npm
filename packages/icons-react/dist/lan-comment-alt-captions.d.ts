import React from 'react';

export interface LanCommentAltCaptionsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltCaptions: React.FC<LanCommentAltCaptionsProps>;
export default LanCommentAltCaptions;
