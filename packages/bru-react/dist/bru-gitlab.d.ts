import React from 'react';

export interface BruGitlabProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGitlab(props: BruGitlabProps): React.ReactElement;
export default BruGitlab;
