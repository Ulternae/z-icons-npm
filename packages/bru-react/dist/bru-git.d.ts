import React from 'react';

export interface BruGitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGit(props: BruGitProps): React.ReactElement;
export default BruGit;
