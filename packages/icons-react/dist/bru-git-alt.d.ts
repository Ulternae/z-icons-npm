import React from 'react';

export interface BruGitAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGitAlt: React.FC<BruGitAltProps>;
export default BruGitAlt;
