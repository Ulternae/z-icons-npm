import React from 'react';

export interface LanCodePullRequestProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodePullRequest(props: LanCodePullRequestProps): React.ReactElement;
export default LanCodePullRequest;
