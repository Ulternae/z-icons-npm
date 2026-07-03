import React from 'react';

export interface BruGitAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGitAlt(props: BruGitAltProps): React.ReactElement;
export default BruGitAlt;
