import React from 'react';

export interface MinaGitBranchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitBranch: React.FC<MinaGitBranchProps>;
export default MinaGitBranch;
