import React from 'react';

export interface MinaGitPullRequestProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGitPullRequest(props: MinaGitPullRequestProps): React.ReactElement;
export default MinaGitPullRequest;
