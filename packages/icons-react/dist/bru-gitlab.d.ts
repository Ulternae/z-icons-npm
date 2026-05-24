import React from 'react';

export interface BruGitlabProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGitlab: React.FC<BruGitlabProps>;
export default BruGitlab;
