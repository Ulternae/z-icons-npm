import React from 'react';

export interface MinaGitCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitCircleSolid: React.FC<MinaGitCircleSolidProps>;
export default MinaGitCircleSolid;
