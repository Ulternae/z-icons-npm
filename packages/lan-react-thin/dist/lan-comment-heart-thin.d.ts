import React from 'react';

export interface LanCommentHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentHeartThin(props: LanCommentHeartThinProps): React.ReactElement;
export default LanCommentHeartThin;
