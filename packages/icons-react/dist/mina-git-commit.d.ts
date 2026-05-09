import React from 'react';

export interface MinaGitCommitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitCommit: React.FC<MinaGitCommitProps>;
export default MinaGitCommit;
