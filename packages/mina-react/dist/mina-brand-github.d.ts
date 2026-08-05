import React from 'react';

export interface MinaBrandGithubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandGithub(props: MinaBrandGithubProps): React.ReactElement;
export default MinaBrandGithub;
