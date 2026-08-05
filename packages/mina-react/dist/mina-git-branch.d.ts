import React from 'react';

export interface MinaGitBranchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGitBranch(props: MinaGitBranchProps): React.ReactElement;
export default MinaGitBranch;
