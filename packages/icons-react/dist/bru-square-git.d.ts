import React from 'react';

export interface BruSquareGitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareGit: React.FC<BruSquareGitProps>;
export default BruSquareGit;
