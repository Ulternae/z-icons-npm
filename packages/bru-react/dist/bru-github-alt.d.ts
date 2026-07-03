import React from 'react';

export interface BruGithubAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGithubAlt(props: BruGithubAltProps): React.ReactElement;
export default BruGithubAlt;
