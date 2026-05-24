import React from 'react';

export interface BruSquareGithubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareGithub: React.FC<BruSquareGithubProps>;
export default BruSquareGithub;
