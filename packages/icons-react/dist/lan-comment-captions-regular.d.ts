import React from 'react';

export interface LanCommentCaptionsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentCaptionsRegular: React.FC<LanCommentCaptionsRegularProps>;
export default LanCommentCaptionsRegular;
