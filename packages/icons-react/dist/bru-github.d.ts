import React from 'react';

export interface BruGithubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGithub: React.FC<BruGithubProps>;
export default BruGithub;
