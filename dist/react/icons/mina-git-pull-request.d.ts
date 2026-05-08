import React from 'react';

export interface MinaGitPullRequestProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitPullRequest: React.FC<MinaGitPullRequestProps>;
export default MinaGitPullRequest;
