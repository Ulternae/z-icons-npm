import React from 'react';

export interface BruGithubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGithub(props: BruGithubProps): React.ReactElement;
export default BruGithub;
