import React from 'react';

export interface MinaGitCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGitCircle(props: MinaGitCircleProps): React.ReactElement;
export default MinaGitCircle;
