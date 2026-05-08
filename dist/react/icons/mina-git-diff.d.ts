import React from 'react';

export interface MinaGitDiffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitDiff: React.FC<MinaGitDiffProps>;
export default MinaGitDiff;
