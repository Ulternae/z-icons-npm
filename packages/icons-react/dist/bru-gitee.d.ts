import React from 'react';

export interface BruGiteeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGitee: React.FC<BruGiteeProps>;
export default BruGitee;
