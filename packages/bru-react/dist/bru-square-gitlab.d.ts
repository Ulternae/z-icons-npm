import React from 'react';

export interface BruSquareGitlabProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareGitlab(props: BruSquareGitlabProps): React.ReactElement;
export default BruSquareGitlab;
