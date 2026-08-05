import React from 'react';

export interface LanCommentCaptionsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentCaptions(props: LanCommentCaptionsProps): React.ReactElement;
export default LanCommentCaptions;
