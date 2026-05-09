import React from 'react';

export interface MinaBrandGithubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandGithub: React.FC<MinaBrandGithubProps>;
export default MinaBrandGithub;
