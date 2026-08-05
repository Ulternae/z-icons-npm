import React from 'react';

export interface MinaGitCommitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGitCommit(props: MinaGitCommitProps): React.ReactElement;
export default MinaGitCommit;
