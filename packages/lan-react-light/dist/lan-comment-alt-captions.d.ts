import React from 'react';

export interface LanCommentAltCaptionsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAltCaptions(props: LanCommentAltCaptionsProps): React.ReactElement;
export default LanCommentAltCaptions;
