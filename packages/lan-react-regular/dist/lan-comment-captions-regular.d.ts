import React from 'react';

export interface LanCommentCaptionsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentCaptionsRegular(props: LanCommentCaptionsRegularProps): React.ReactElement;
export default LanCommentCaptionsRegular;
