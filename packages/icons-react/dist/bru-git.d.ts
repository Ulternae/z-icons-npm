import React from 'react';

export interface BruGitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGit: React.FC<BruGitProps>;
export default BruGit;
