import React from 'react';

export interface BruGiteeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGitee(props: BruGiteeProps): React.ReactElement;
export default BruGitee;
