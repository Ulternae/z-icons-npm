import React from 'react';

export interface MinaGitDiffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGitDiff(props: MinaGitDiffProps): React.ReactElement;
export default MinaGitDiff;
