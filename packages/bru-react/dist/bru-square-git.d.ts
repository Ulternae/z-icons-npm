import React from 'react';

export interface BruSquareGitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareGit(props: BruSquareGitProps): React.ReactElement;
export default BruSquareGit;
