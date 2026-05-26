import React from 'react';

export interface LanCodePullRequestThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodePullRequestThin: React.FC<LanCodePullRequestThinProps>;
export default LanCodePullRequestThin;
