import React from 'react';

export interface MinaGitBranchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitBranchSolid: React.FC<MinaGitBranchSolidProps>;
export default MinaGitBranchSolid;
