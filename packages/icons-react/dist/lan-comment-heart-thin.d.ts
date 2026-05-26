import React from 'react';

export interface LanCommentHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentHeartThin: React.FC<LanCommentHeartThinProps>;
export default LanCommentHeartThin;
