import React from 'react';

export interface LanCodePullRequestProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodePullRequest: React.FC<LanCodePullRequestProps>;
export default LanCodePullRequest;
