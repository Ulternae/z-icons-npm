import React from 'react';

export interface BruGithubAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGithubAlt: React.FC<BruGithubAltProps>;
export default BruGithubAlt;
