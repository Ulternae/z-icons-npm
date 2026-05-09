import React from 'react';

export interface MinaGitMergeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitMerge: React.FC<MinaGitMergeProps>;
export default MinaGitMerge;
