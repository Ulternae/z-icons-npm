import React from 'react';

export interface MinaBrandGitlabProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandGitlab: React.FC<MinaBrandGitlabProps>;
export default MinaBrandGitlab;
