import React from 'react';

export interface MinaGitMergeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGitMerge(props: MinaGitMergeProps): React.ReactElement;
export default MinaGitMerge;
