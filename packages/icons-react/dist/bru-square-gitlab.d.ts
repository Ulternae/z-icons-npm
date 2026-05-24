import React from 'react';

export interface BruSquareGitlabProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareGitlab: React.FC<BruSquareGitlabProps>;
export default BruSquareGitlab;
