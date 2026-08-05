import React from 'react';

export interface MinaGitCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGitCircleSolid(props: MinaGitCircleSolidProps): React.ReactElement;
export default MinaGitCircleSolid;
