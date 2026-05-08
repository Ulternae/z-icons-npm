import React from 'react';

export interface MinaGitSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitSquareSolid: React.FC<MinaGitSquareSolidProps>;
export default MinaGitSquareSolid;
