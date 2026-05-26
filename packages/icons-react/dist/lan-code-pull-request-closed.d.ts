import React from 'react';

export interface LanCodePullRequestClosedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodePullRequestClosed: React.FC<LanCodePullRequestClosedProps>;
export default LanCodePullRequestClosed;
