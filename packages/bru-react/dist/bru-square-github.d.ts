import React from 'react';

export interface BruSquareGithubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareGithub(props: BruSquareGithubProps): React.ReactElement;
export default BruSquareGithub;
